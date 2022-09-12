import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"


import * as fp from "lib-fountain-pen"

import * as api from "../../interface"


import { D2 } from "../../interface"
import { serializeFunctionDefinition } from "./serializeFunctionDefinition.p"

export function serializeImplementation<PAnnotation>(
    $: api.TImplementation<PAnnotation>,
    $i: api.IWriter,
    $d: D2<PAnnotation>,
) {

    function changeContextExpression(
        $i: fp.ILine,
        $c: {
            selection: ($i: fp.ILine) => void
            expression: ($i: fp.ILine) => void
        },
    ) {
        $i.snippet(`pl.cc(`)
        $c.selection($i)
        $i.snippet(`, ($) => {`)
        $i.indent(($i) => {
            $i.line(($i) => {
                $i.snippet(`return `)
                $c.expression($i)
            })
        })
        $i.snippet(`})`)
    }
    $i.createDirectory(
        "implementation",
        ($i) => {
            $i.createDirectory(
                "private",
                ($i) => {
                    $d.x.sortedForEach(
                        $["private functions"],
                        ($) => {
                            $i.createFile(
                                `${$.key}.p.ts`,
                                ($i) => {
                                    $i.line(($i) => {
                                        $i.snippet(`import * as pl from "pareto-core-lib"`)
                                    })
                                    $i.line(($i) => { })
                                    $i.line(($i) => {
                                        $i.snippet(`import * as api from "../../interface"`)
                                    })
                                    $i.line(($i) => { })
                                    $d.x.sortedForEach(
                                        $.value["sibling dependencies"],
                                        ($) => {
                                            $i.line(($i) => {
                                                $i.snippet(`import { ${$.key} } from "./${$d.x.escapeQuotedString($.key)}.p"`)
                                            })
                                        }

                                    )
                                    $i.line(($i) => {
                                        $i.snippet(`export function ${$.key}`)
                                        serializeFunctionDefinition(
                                            {
                                                definition: $.value.definition,
                                                sign: ":",
                                            },
                                            $i,
                                            $d,
                                        )
                                        $i.snippet(` {`)
                                        $i.indent(($i) => {

                                            function doExpression(
                                                $: api.TExpression<PAnnotation>,
                                                $i: fp.ILine,
                                            ) {
                                                const stack = pm.createStack($.collections)
                                                function unwind(
                                                    $i: fp.ILine,
                                                ) {
                                                    stack.pop(
                                                        ($) => {
                                                            switch ($[0]) {
                                                                case "array":
                                                                    pl.cc($[1], ($) => {
                                                                        $i.snippet(`$.map(($) => {`)
                                                                        $i.indent(($i) => {
                                                                            $i.line(($i) => {
                                                                                $i.snippet(`return `)
                                                                                unwind($i)
                                                                            })
                                                                        })
                                                                        $i.snippet(`})`)
                                                                    })
                                                                    break
                                                                case "dictionary":
                                                                    pl.cc($[1], ($) => {
                                                                        $i.snippet(`$.map(($, key) => {`)
                                                                        $i.indent(($i) => {
                                                                            $i.line(($i) => {
                                                                                $i.snippet(`return `)
                                                                                unwind($i)
                                                                            })
                                                                        })
                                                                        $i.snippet(`})`)

                                                                    })
                                                                    break
                                                                default: pl.au($[0])
                                                            }
                                                        },
                                                        () => {
                                                            switch ($.type[0]) {
                                                                case "property selection possibly undefined":
                                                                    pl.cc($.type[1], ($) => {
                                                                        $i.snippet(`$[${$d.x.escapeQuotedStringWithQuotes($.name)}] === undefined`)
                                                                        $i.indent(($i) => {
                                                                            $i.line(($i) => {
                                                                                $i.snippet(`? `)
                                                                                doExpression(
                                                                                    $.undefined,
                                                                                    $i,
                                                                                )
                                                                            })
                                                                            $i.line(($i) => {
                                                                                $i.snippet(`: `)
                                                                                changeContextExpression(
                                                                                    $i,
                                                                                    {
                                                                                        selection: ($i) => {
                                                                                            $i.snippet(`$[${$d.x.escapeQuotedStringWithQuotes($.name)}]`)
                                                                                        },
                                                                                        expression: ($i) => {
                                                                                            doExpression(
                                                                                                $.set,
                                                                                                $i,
                                                                                            )
                                                                                        }
                                                                                    }
                                                                                )
                                                                            })
                                                                        })

                                                                    })
                                                                    break
                                                                case "call":
                                                                    pl.cc($.type[1], ($) => {
                                                                        $i.snippet(`${$.function}(`)
                                                                        $i.indent(($i) => {
                                                                            $i.line(($i) => {
                                                                                doExpression(
                                                                                    $.data,
                                                                                    $i,
                                                                                )
                                                                                $i.snippet(`,`)
                                                                            })
                                                                            if ($.interfaces !== null) {
                                                                                pl.cc($.interfaces, ($) => {
                                                                                    $i.line(($i) => {
                                                                                        doExpression(
                                                                                            $,
                                                                                            $i,
                                                                                        )
                                                                                        $i.snippet(`,`)
                                                                                    })

                                                                                })
                                                                            }
                                                                        })
                                                                        $i.snippet(`)`)
                                                                    })
                                                                    break
                                                                case "change context":
                                                                    pl.cc($.type[1], ($) => {
                                                                        changeContextExpression(
                                                                            $i,
                                                                            {
                                                                                selection: ($i) => {
                                                                                    $i.snippet(`$`)
                                                                                    $.selection.forEach(($) => {
                                                                                        $i.snippet(`[${$d.x.escapeQuotedStringWithQuotes($)}]`)
                                                                                    })
                                                                                },
                                                                                expression: ($i) => {
                                                                                    doExpression(
                                                                                        $.expression,
                                                                                        $i,
                                                                                    )
                                                                                }
                                                                            }
                                                                        )
                                                                    })
                                                                    break
                                                                case "group type instantiation":
                                                                    pl.cc($.type[1], ($) => {
                                                                        $i.snippet(`{`)
                                                                        $i.indent(($i) => {

                                                                            $d.x.sortedForEach(
                                                                                $.properties,
                                                                                ($) => {
                                                                                    $i.line(($i) => {

                                                                                        $i.snippet(`'${$.key}': `)
                                                                                        doExpression(
                                                                                            $.value,
                                                                                            $i,
                                                                                        )
                                                                                        $i.snippet(`,`)
                                                                                    })
                                                                                }
                                                                            )
                                                                        })
                                                                        $i.snippet(`}`)

                                                                    })
                                                                    break
                                                                case "null":
                                                                    pl.cc($.type[1], ($) => {
                                                                        $i.snippet(`null`)
                                                                    })
                                                                    break
                                                                case "panic":
                                                                    pl.cc($.type[1], ($) => {
                                                                        $i.snippet(`pl.panic(${$d.x.escapeQuotedStringWithQuotes($.message)})`)
                                                                    })
                                                                    break
                                                                case "context":
                                                                    pl.cc($.type[1], ($) => {
                                                                        $i.snippet(`$`)
                                                                    })
                                                                    break
                                                                case "variable":
                                                                    pl.cc($.type[1], ($) => {
                                                                        $i.snippet($.variable)
                                                                    })
                                                                    break
                                                                case "switch":
                                                                    pl.cc($.type[1], ($) => {
                                                                        $i.snippet(`pl.cc($, ($): any => {`) //can't do any better if the type is not resolved
                                                                        $i.indent(($i) => {

                                                                            $i.line(($i) => {

                                                                                $i.snippet(`switch ($[0]) {`)
                                                                                $i.indent(($i) => {
                                                                                    $d.x.sortedForEach(
                                                                                        $.options,
                                                                                        ($) => {
                                                                                            $i.line(($i) => {
                                                                                                $i.snippet(`case ${$d.x.escapeQuotedStringWithQuotes($.key)}: `)
                                                                                                $i.indent(($i) => {
                                                                                                    $i.line(($i) => {
                                                                                                        $i.snippet(`return `)
                                                                                                        changeContextExpression(
                                                                                                            $i,
                                                                                                            {
                                                                                                                selection: ($i) => {
                                                                                                                    $i.snippet(`$[1]`)
                                                                                                                },
                                                                                                                expression: ($i) => {
                                                                                                                    doExpression(
                                                                                                                        $.value,
                                                                                                                        $i,
                                                                                                                    )
                                                                                                                }
                                                                                                            }
                                                                                                        )
                                                                                                    })
                                                                                                })
                                                                                            })
                                                                                        }
                                                                                    )
                                                                                    $i.line(($i) => {
                                                                                        $i.snippet(`default: return pl.au($[0])`)
                                                                                    })
                                                                                })
                                                                                $i.snippet(`}`)
                                                                            })                                                                        })
                                                                        $i.snippet(`})`)
                                                                    })
                                                                    break
                                                                case "tagged union instantiation":
                                                                    pl.cc($.type[1], ($) => {
                                                                        $i.snippet(`[${$d.x.escapeQuotedStringWithQuotes($.state)}, `)
                                                                        doExpression(
                                                                            $.data,
                                                                            $i,
                                                                        )
                                                                        $i.snippet(`]`)
                                                                    })
                                                                    break
                                                                default: pl.au($.type[0])
                                                            }

                                                        }
                                                    )
                                                }
                                                unwind($i)
                                            }
                                            function doBlock(
                                                $: api.TBlock<PAnnotation>,
                                                $i: fp.ILine,
                                            ) {
                                                $i.snippet(`{`)
                                                $i.indent(($i) => {
                                                    doStatement(
                                                        $.statement,
                                                        $i
                                                    )
                                                })
                                                $i.snippet(`}`)
                                            }
                                            function doStatement(
                                                $: api.TStatement<PAnnotation>,
                                                $i: fp.IBlock,
                                            ) {
                                                switch ($.type[0]) {
                                                    case "if":
                                                        pl.cc($.type[1], ($) => {
                                                            $i.line(($i) => {
                                                                $i.snippet(`if (`)
                                                                doExpression(
                                                                    $.expression,
                                                                    $i,
                                                                )
                                                                $i.snippet(`) `)
                                                                doBlock(
                                                                    $.then,
                                                                    $i
                                                                )
                                                                $i.snippet(` else `)
                                                                doBlock(
                                                                    $.else,
                                                                    $i
                                                                )
                                                            })
                                                        })
                                                        break
                                                    case "return":
                                                        pl.cc($.type[1], ($) => {
                                                            $i.line(($i) => {
                                                                $i.snippet(`return `)
                                                                doExpression(
                                                                    $.expression,
                                                                    $i
                                                                )
                                                            })

                                                        })
                                                        break
                                                    case "switch":
                                                        pl.cc($.type[1], ($) => {
                                                            $i.line(($i) => {
                                                                $i.snippet(`FIXME`)
                                                            })

                                                        })
                                                        break
                                                    case "implement me":
                                                        pl.cc($.type[1], ($) => {
                                                            $i.line(($i) => {
                                                                $i.snippet(`pl.implementMe(${$d.x.escapeQuotedStringWithQuotes($.message)})`)
                                                            })

                                                        })
                                                        break
                                                    case "panic":
                                                        pl.cc($.type[1], ($) => {
                                                            $i.line(($i) => {
                                                                $i.snippet(`FIXME`)
                                                            })

                                                        })
                                                        break
                                                    default: pl.au($.type[0])
                                                }
                                            }
                                            doStatement(
                                                $.value.implementation.statement,
                                                $i,
                                            )
                                        })
                                        $i.snippet(`}`)
                                    })
                                }
                            )
                        }
                    )

                }
            )
            $i.createFile(
                "private.p.ts",
                ($i) => {
                    $["private functions"].map(($, key) => {
                        $i.line(($i) => {
                            $i.snippet(`export * from "./private/${key}.p"`)
                        })
                    })
                }
            )
            // $i.createDirectory(
            //     "public",
            //     ($i) => {
            //         $d.x.sortedForEach(
            //             $["public functions"],
            //             ($) => {
            //                 $i.createFile(
            //                     `${$.key}.ts`,
            //                     ($i) => {
            //                         $i.line(($i) => {
            //                             $i.snippet(`import * as pl from "pareto-core-lib"`)
            //                         })
            //                         $i.line(($i) => { })
            //                         $i.line(($i) => {
            //                             $i.snippet(`import * as api from "../../interface"`)
            //                         })
            //                         $i.line(($i) => { })
            //                         $i.line(($i) => {
            //                             $i.snippet(`export const ${$d.x.escapePublicFunctionImplementation($.key)}: api.XXX = () => {`)
            //                             $i.snippet(`}`)
            //                         })
            //                     }
            //                 )
            //             }
            //         )

            //     }
            // )
            // $i.createFile(
            //     "index.ts",
            //     ($i) => {
            //         $["public functions"].map(($, key) => {
            //             $i.line(($i) => {
            //                 $i.snippet(`export * from "./public/${key}"`)
            //             })
            //         })
            //     }
            // )
        }
    )

    return null
}
