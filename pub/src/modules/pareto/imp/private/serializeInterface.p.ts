import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as fp from "lib-fountain-pen"

import * as api from "../../interface"


import { serializeLocalInterface } from "./serializeLocalInterface.p"
import { serializeLocalType } from "./serializeLocalType.p"
import { D2 } from "../../interface"
import { serializeFunctionDefinition } from "./serializeFunctionDefinition.p"

export function serializeInterface<PAnnotation>(
    $: api.TInterface<PAnnotation>,
    $i: api.IWriter,
    $d: D2
) {

    $i.createDirectory(
        "interface",
        ($i) => {
            $i.createDirectory(
                "types",
                ($i) => {
                    $i.createFile(
                        "types.p.ts",
                        ($i) => {
                            $i.line(($i) => {
                                $i.snippet(`import * as pt from "pareto-core-types"`)
                            })
                            $i.line(($i) => { })
                            $i.line(($i) => {
                                $i.snippet(`import * as api from "../index"`)
                            })
                            $i.line(($i) => { })
                            $i.line(($i) => {
                                $i.snippet(`type Reference<T> = { name: string }`)
                            })
                            function doNamespace(
                                $: {
                                    namespace: api.TNamespace<PAnnotation>
                                    stack: pt.Nested<api.TNamespace<PAnnotation>>
                                },
                                $i: fp.IBlock,
                            ) {
                                const config = $
                                const namespace = $.namespace

                                $d.x.sortedForEach($.namespace.namespaces, ($) => {
                                    $i.line(($i) => { })
                                    $i.line(($i) => {
                                        $i.snippet(`export namespace ${$d.x.escapeNamespace($.key)} {`)
                                        $i.indent(($i) => {
                                            doNamespace(
                                                {
                                                    namespace: $.value,
                                                    stack: [config.stack, $.value]
                                                },
                                                $i,
                                            )
                                        })
                                        $i.snippet(`}`)
                                    })
                                })
                                $d.x.sortedForEach($.namespace.types, ($) => {
                                    $i.line(($i) => {

                                    })
                                    $i.line(($i) => {
                                        $i.snippet(`export type ${$d.x.escapeType($.key)}`)
                                        $d.x.enrichedArrayForEach(
                                            $d.getTypeParameters(namespace),
                                            {
                                                onEmpty: () => { },
                                                onNotEmpty: ($c) => {
                                                    $i.snippet(`<`)
                                                    $c(($) => {
                                                        if (!$.isFirst) {
                                                            $i.snippet(`, `)
                                                        }
                                                        $i.snippet($.value)
                                                    })
                                                    $i.snippet(`>`)
                                                },
                                            }
                                        )
                                        $i.snippet(` = `)
                                        serializeLocalType(
                                            {
                                                type: $.value,
                                                relative: true,
                                            },
                                            $i,
                                            $d.x,
                                        )
                                    })
                                })
                            }
                            doNamespace(
                                {
                                    namespace: $.namespace,
                                    stack: [$.namespace]
                                },
                                $i
                            )
                        }
                    )
                }
            )
            $i.createDirectory(
                "interfaces",
                ($i) => {
                    $i.createFile(
                        "interfaces.p.ts",
                        ($i) => {
                            $i.line(($i) => {
                                $i.snippet(`import * as pt from "pareto-core-types"`)
                            })
                            $i.line(($i) => { })
                            $i.line(($i) => {
                                $i.snippet(`import * as api from "../index"`)
                            })
                            $d.x.sortedForEach($.interfaces, ($) => {
                                $i.line(($i) => {

                                })
                                $i.line(($i) => {
                                    $i.snippet(`export type I${$d.x.escapeInterface($.key)}`)
                                    $d.x.enrichedDictionaryForEach(
                                        $.value.parameters,
                                        {
                                            onEmpty: () => {

                                            },
                                            onNotEmpty: ($c) => {
                                                $i.snippet(`<`)
                                                $c(($) => {
                                                    if (!$.isFirst) {
                                                        $i.snippet(`, `)
                                                    }
                                                    $i.snippet(`${$d.x.escapeTypeParameter($.key)}`)
                                                })
                                                $i.snippet(`>`)
                                            },
                                        }
                                    )
                                    $i.snippet(` = `)
                                    serializeLocalInterface(
                                        $.value.details,
                                        $i,
                                        $d.x,
                                    )
                                })
                            })
                        }
                    )

                }
            )
            $i.createDirectory(
                "dependencies",
                ($i) => {
                    $i.createFile(
                        "dependencies.p.ts",
                        ($i) => {

                            $i.line(($i) => {
                                $i.snippet(`import * as pt from "pareto-core-types"`)
                            })
                            $i.line(($i) => { })
                            $i.line(($i) => {
                                $i.snippet(`import * as api from "../index"`)
                            })
                            $d.x.sortedForEach($.dependencies, ($) => {
                                $i.line(($i) => {

                                })
                                $i.line(($i) => {
                                    $i.snippet(`export type I${$d.x.escapeDependencyDefinition($.key)} = {`)
                                    $i.indent(($i) => {
                                        $d.x.sortedForEach(
                                            $.value.functions,
                                            ($) => {
                                                $i.line(($i) => {
                                                    $i.snippet(`readonly "${$.key}" = ${$d.x.escapeImportedFunction({
                                                        module: $.value.import.name.name,
                                                        function: $.value.function.name.name,
                                                    })}`)
                                                })
                                            }
                                        )
                                    })
                                    $i.snippet(`}`)
                                })
                            })
                        }
                    )
                }
            )
            $i.createDirectory(
                "functions",
                ($i) => {
                    $i.createFile(
                        "functions.p.ts",
                        ($i) => {

                            $i.line(($i) => {
                                $i.snippet(`import * as pt from "pareto-core-types"`)
                            })
                            $i.line(($i) => { })
                            $i.line(($i) => {
                                $i.snippet(`import * as api from "../index"`)
                            })
                            $d.x.sortedForEach($.functions, ($) => {
                                $i.line(($i) => {

                                })
                                $i.line(($i) => {
                                    $i.snippet(`export type ${$d.x.escapeFunctionDefinition($.key)} = `)
                                    serializeFunctionDefinition(
                                        {
                                            definition: $.value,
                                            sign: " =>"
                                        },
                                        $i,
                                        $d
                                    )
                                })
                            })
                        }
                    )

                }
            )
            $i.createFile(
                "index.ts",
                ($i) => {
                    $i.line(($i) => {
                        $i.snippet(`export * from "./types/types.p"`)
                    })
                    $i.line(($i) => {
                        $i.snippet(`export * from "./dependencies/dependencies.p"`)
                    })
                    $i.line(($i) => {
                        $i.snippet(`export * from "./interfaces/interfaces.p"`)
                    })
                    $i.line(($i) => {
                        $i.snippet(`export * from "./functions/functions.p"`)
                    })
                }
            )
        }
    )
    return null
}
