import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as fp from "lib-fountain-pen"

import * as api from "../../interface"

import { D2 } from "../../interface"

export function serializeImplementation<PAnnotation>(
    $: api.TImplementation<PAnnotation>,
    $i: api.IWriter,
    $d: D2<PAnnotation>,
) {
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
                                    $i.line(($i) => {
                                        $i.snippet(`export function ${$.key}() {`)
                                        $i.indent(($i) => {

                                            function doExpression(
                                                $: api.TExpression<PAnnotation>,
                                                $i: fp.ILine,
                                            ) {
                                                switch ($.type[0]) {
                                                    case "group type instantiation":
                                                        pl.cc($.type[1], ($) => {
                                                            $d.x.enrichedDictionaryForEach(
                                                                $.properties,
                                                                {
                                                                    onEmpty: () => {

                                                                    },
                                                                    onNotEmpty: ($c) => {

                                                                    }
                                                                }
                                                            )
                                                        })
                                                        break
                                                    default: pl.au($.type[0])
                                                }
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
                                                                $i.snippet(`pl.implementMe(${$d.x.escapeQuotedString($.message)})`)
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
