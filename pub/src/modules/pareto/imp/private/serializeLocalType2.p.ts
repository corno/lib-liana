import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"


import * as fp from "lib-fountain-pen"

import * as api from "../../interface"
import { DDependencies } from "../../interface"

export function serializeLocalType<PAnnotation>(
    $: api.resolved.globalTypes.TType,
    $i: fp.ILine,
    $d: DDependencies<PAnnotation>,
) {
    if ($.optional) {
        $i.snippet(`null | `)
    }
    const collections = pm.createStack($.collections)
    function unwind() {
        collections.pop(
            ($) => {
                switch ($[0]) {
                    case "list":
                        pl.cc($[1], ($) => {
                            $i.snippet(`pt.Array<`)
                        })
                        break
                    case "dictionary":
                        pl.cc($[1], ($) => {
                            $i.snippet(`pt.Dictionary<`)
                        })
                        break
                    default: pl.au($[0])
                }
                unwind()
                $i.snippet(`>`)

            },
            () => {
                switch ($.type[0]) {
                    case "boolean":
                        pl.cc($.type[1], ($) => {
                            $i.snippet(`boolean`)
                        })
                        break
                    case "group":
                        pl.cc($.type[1], ($) => {
                            $i.snippet(`{`)
                            $i.indent(($i) => {
                                $d.sortedForEach(
                                    $,
                                    ($) => {
                                        $i.line(($i) => {
                                            $i.snippet(`readonly '${$.key}'${$.value.optional ? "?" : ""}: `)
                                            serializeLocalType(
                                                $.value,
                                                $i,
                                                $d,
                                            )
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
                    case "reference":
                        pl.cc($.type[1], ($) => {
                            $i.snippet(`Reference<${$d.escapeType($.name)}>`)
                        })
                        break
                    case "component":
                        pl.cc($.type[1], ($) => {
                            switch ($[0]) {
                                case "parameter":
                                    pl.cc($[1], ($) => {
                                        $i.snippet(`${$d.escapeTypeParameter($.name)}`)
                                    })
                                    break
                                case "type":
                                    pl.cc($[1], ($) => {
                                        switch ($[0]) {
                                            case "import":
                                                pl.cc($[1], ($) => {
                                                    $i.snippet(`${$d.escapeImportedType({
                                                        module: $.module.name,
                                                        type: $["global type"].name,
                                                    })}`)
                                                })
                                                break
                                            case "sibling":
                                                pl.cc($[1], ($) => {
                                                    $["namespace steps"].forEach(($) => {
                                                        $i.snippet(`${$.name}.`)
                                                    })
                                                    $i.snippet(`${$d.escapeType($["type"].name)}`)
                                                })
                                                break
                                            default: pl.au($[0])
                                        }

                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })
                        break
                    case "string":
                        pl.cc($.type[1], ($) => {
                            $i.snippet(`string`)
                        })
                        break
                    case "tagged union":
                        pl.cc($.type[1], ($) => {
                            $i.indent(($i) => {
                                $d.sortedForEach(
                                    $,
                                    ($) => {
                                        $i.line(($i) => {
                                            $i.snippet(`| [ "${$.key}", `)
                                            serializeLocalType(
                                                $.value,
                                                $i,
                                                $d,
                                            )
                                            $i.snippet(` ]`)
                                        })
                                    }
                                )
                            })
                        })
                        break
                    default: pl.au($.type[0])
                }


            }
        )
    }
    unwind()
}