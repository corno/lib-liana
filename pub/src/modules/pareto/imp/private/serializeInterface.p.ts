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
                                $i.snippet(`import * as pt from "pareto-core-types`)
                            })
                            function doNamespace(
                                $: api.TNamespace<PAnnotation>
                            ) {
                                const namespaceParameters = $.parameters

                                $d.sortedForEach($.namespaces, ($) => {
                                    $i.line(($i) => { })
                                    $i.line(($i) => {
                                        $i.snippet(`export namespace ${$d.escapeNamespace($)} {`)
                                        $i.indent(($i) => {
                                            doNamespace($.value)
                                        })
                                        $i.snippet(`}`)
                                    })
                                })
                                $d.sortedForEach($.types, ($) => {
                                    $i.line(($i) => {

                                    })
                                    $i.line(($i) => {
                                        $i.snippet(`export type ${$d.escapeType($)}`)
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
                                                    $i.snippet(`${$d.escapeTypeParameter({
                                                        key: $.key,
                                                        value: $.value,
                                                    })}`)
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
                            doNamespace($.namespace)
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
                                $i.snippet(`import * as pt from "pareto-core-types`)
                            })
                            $d.sortedForEach($.interfaces, ($) => {
                                $i.line(($i) => {

                                })
                                $i.line(($i) => {
                                    $i.snippet(`export type I${$d.escapeInterface($)}`)
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
                                                $i.snippet(`${$d.escapeTypeParameter($)}`)
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
                                $i.snippet(`import * as pt from "pareto-core-types`)
                            })
                            $d.sortedForEach($.dependencies, ($) => {
                                $i.line(($i) => {

                                })
                                $i.line(($i) => {
                                    $i.snippet(`export type I${$d.escapeDependencyDefinition($)} = {`)
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
