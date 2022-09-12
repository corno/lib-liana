import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"


import * as fp from "lib-fountain-pen"

import * as api from "../../interface"
import { DDependencies } from "../../interface"

export function serializeLocalType<PAnnotation>(
    $: {
        type: api.TLocalType<PAnnotation>,
        relative: boolean,
    },
    $i: fp.ILine,
    $d: DDependencies<PAnnotation>,
) {
    const relative = $.relative

    pl.cc($.type, ($) => {

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
                                        $.properties,
                                        ($) => {
                                            $i.line(($i) => {
                                                $i.snippet(`readonly '${$.key}'${$.value.optional ? "?" : ""}: `)
                                                serializeLocalType(
                                                    {
                                                        type: $.value.type,
                                                        relative: relative,
                                                    },
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
                                $i.snippet(`Reference<${$d.escapeType($.type)}>`)
                            })
                            break
                        case "component":
                            pl.cc($.type[1], ($) => {
                                switch ($[0]) {
                                    case "parameter":
                                        pl.cc($[1], ($) => {
                                            $i.snippet(`${$d.escapeTypeParameter($.parameter.name.name)}`)
                                        })
                                        break
                                    case "type":
                                        pl.cc($[1], ($) => {
                                            switch ($.type[0]) {
                                                case "import":
                                                    pl.cc($.type[1], ($) => {
                                                        $i.snippet(`${$d.escapeImportedType({
                                                            module: $.import.name.name,
                                                            type: $["global type"].name.name,
                                                        })}`)
                                                    })
                                                    break
                                                case "sibling":
                                                    pl.cc($.type[1], ($) => {
                                                        if (!relative) {
                                                        $i.snippet(`api.`)
                                                        }
                                                        $["namespace steps"].forEach(($) => {
                                                            $i.snippet(`${$.name.name}.`)
                                                        })
                                                        $i.snippet(`${$d.escapeType($["global type"].name.name)}`)
                                                    })
                                                    break
                                                default: pl.au($.type[0])
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
                                        $.options,
                                        ($) => {
                                            $i.line(($i) => {
                                                $i.snippet(`| [ "${$.key}", `)
                                                serializeLocalType(
                                                    {
                                                        type: $.value,
                                                        relative: relative,
                                                    },
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
    })
}