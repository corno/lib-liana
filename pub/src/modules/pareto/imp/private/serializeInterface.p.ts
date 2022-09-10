import * as fp from "lib-fountain-pen"

import * as api from "../../interface"


import { serializeLocalInterface } from "./serializeLocalInterface.p"
import { serializeLocalType } from "./serializeLocalType.p"

export function serializeInterface<PAnnotation>(
    $: api.TInterface<PAnnotation>,
    $i: api.IWriter,
    $d: api.DDependencies<PAnnotation>
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
                            $i.line(($i) => {
                                $i.snippet(`type Reference<T> = { name: string }`)
                            })
                            function doNamespace(
                                $: api.TNamespace<PAnnotation>,
                                $i: fp.IBlock,
                            ) {
                                const namespaceParameters = $.parameters

                                $d.sortedForEach($.namespaces, ($) => {
                                    $i.line(($i) => { })
                                    $i.line(($i) => {
                                        $i.snippet(`export namespace ${$d.escapeNamespace($.key)} {`)
                                        $i.indent(($i) => {
                                            doNamespace($.value, $i)
                                        })
                                        $i.snippet(`}`)
                                    })
                                })
                                $d.sortedForEach($.types, ($) => {
                                    $i.line(($i) => {

                                    })
                                    $i.line(($i) => {
                                        $i.snippet(`export type ${$d.escapeType($.key)}`)
                                        $d.enrichedForEach(
                                            namespaceParameters,
                                            {
                                                onBegin: () => {
                                                    $i.snippet(`<`)
                                                },
                                                onEnd: () => {
                                                    $i.snippet(`>`)
                                                },
                                                onEntry: ($) => {
                                                    if (!$.isFirst) {
                                                        $i.snippet(`, `)
                                                    }
                                                    $i.snippet(`${$d.escapeTypeParameter($.key)}`)
                                                }
                                            }
                                        )
                                        $i.snippet(` = `)
                                        serializeLocalType(
                                            $.value,
                                            $i,
                                            $d,
                                        )
                                    })
                                })
                            }
                            doNamespace($.namespace, $i)
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
                            $d.sortedForEach($.interfaces, ($) => {
                                $i.line(($i) => {

                                })
                                $i.line(($i) => {
                                    $i.snippet(`export type I${$d.escapeInterface($.key)}`)
                                    $d.enrichedForEach(
                                        $.value.parameters,
                                        {
                                            onBegin: () => {
                                                $i.snippet(`<`)
                                            },
                                            onEnd: () => {
                                                $i.snippet(`>`)
                                            },
                                            onEntry: ($) => {
                                                if (!$.isFirst) {
                                                    $i.snippet(`, `)
                                                }
                                                $i.snippet(`${$d.escapeTypeParameter($.key)}`)
                                            }
                                        }
                                    )
                                    $i.snippet(` = `)
                                    serializeLocalInterface(
                                        $.value.details,
                                        $i,
                                        $d,
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
                            $d.sortedForEach($.dependencies, ($) => {
                                $i.line(($i) => {

                                })
                                $i.line(($i) => {
                                    $i.snippet(`export type I${$d.escapeDependencyDefinition($.key)} = {`)
                                    $i.indent(($i) => {
                                        $d.sortedForEach(
                                            $.value.functions,
                                            ($) => {
                                                $i.line(($i) => {
                                                    $i.snippet(`readonly "${$.key}" = ${$d.escapeImportedFunction}`)
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

                }
            )
            $i.createFile(
                "index.ts",
                ($i) => {
                    $i.line(($i) => {

                    })
                }
            )
        }
    )
    return null
}
