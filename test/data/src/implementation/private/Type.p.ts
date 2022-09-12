import * as pl from "pareto-core-lib"

import * as api from "../../interface"


export function Type(
    $: api.unresolved.globalTypes.TType,
    $i: {},
): api.resolved.globalTypes.TType {
    return {
        'collections': $["collections"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["collections"], ($) => {
                return $.map(($) => {
                    return pl.cc($, ($) => {
                        switch ($[0]) {
                            case "dictionary":
                                return pl.cc($[1], ($) => {
                                    return ["dictionary", $]
                                })
                            case "list":
                                return pl.cc($[1], ($) => {
                                    return ["list", $]
                                })
                            default: return pl.au($[0])
                        }
                    })
                })
            })
        ,
        'optional': $["optional"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["optional"], ($) => {
                return $
            })
        ,
        'type': $["type"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["type"], ($): api.resolved.globalTypes.Foo => {
                return pl.cc($, ($) => {
                    switch ($[0]) {
                        case "boolean":
                            return pl.cc($[1], ($) => {
                                return ["boolean", $]
                            })
                        case "component":
                            return pl.cc($[1], ($) => {
                                return ["component", pl.cc($, ($): api.resolved.globalTypes.Bar => {
                                    switch ($[0]) {
                                        case "parameter":
                                            return pl.cc($[1], ($) => {
                                                return ["parameter", {
                                                    'name': $.name,
                                                }]
                                            })
                                        case "type":
                                            return pl.cc($[1], ($) => {
                                                return ["type", pl.cc($, ($): api.resolved.globalTypes.TypeX => {
                                                    switch ($[0]) {
                                                        case "import":
                                                            return pl.cc($[1], ($) => {
                                                                return ["import", {
                                                                    'global type': $["global type"] === undefined
                                                                        ? pl.panic("UNDEFINED")
                                                                        : pl.cc($["global type"], ($) => {
                                                                            return {
                                                                                'name': $.name,
                                                                            }
                                                                        })
                                                                    ,
                                                                    'module': $["module"] === undefined
                                                                        ? pl.panic("UNDEFINED")
                                                                        : pl.cc($["module"], ($) => {
                                                                            return {
                                                                                'name': $.name,
                                                                            }
                                                                        })
                                                                    ,
                                                                }]
                                                            })
                                                        case "sibling":
                                                            return pl.cc($[1], ($): api.resolved.globalTypes.TypeX => {
                                                                return ["sibling", {
                                                                    'namespace steps': $["namespace steps"] === undefined
                                                                        ? pl.panic("UNDEFINED")
                                                                        : pl.cc($["namespace steps"], ($) => {
                                                                            return $.map(($) => {
                                                                                return {
                                                                                    'name': $.name,
                                                                                }
                                                                            })
                                                                        })
                                                                    ,
                                                                    'type': $["type"] === undefined
                                                                        ? pl.panic("UNDEFINED")
                                                                        : pl.cc($["type"], ($) => {
                                                                            return {
                                                                                'name': $.name,
                                                                            }
                                                                        })
                                                                    ,
                                                                }]
                                                            })
                                                        default: return pl.au($[0])
                                                    }
                                                })]
                                            })
                                        default: return pl.au($[0])
                                    }
                                })]
                            })
                        case "group":
                            return pl.cc($[1], ($) => {
                                return ["group", $.map(($, key) => {
                                    return Type(
                                        $,
                                        $i,
                                    )
                                })]
                            })
                        case "null":
                            return pl.cc($[1], ($) => {
                                return ["null", $]
                            })
                        case "reference":
                            return pl.cc($[1], ($) => {
                                return ["reference", {
                                    'name': $.name,
                                }]
                            })
                        case "string":
                            return pl.cc($[1], ($) => {
                                return ["string", $]
                            })
                        case "tagged union":
                            return pl.cc($[1], ($) => {
                                return ["tagged union", $.map(($, key) => {
                                    return Type(
                                        $,
                                        $i,
                                    )
                                })]
                            })
                        default: return pl.au($[0])
                    }
                })
            })
        ,
    }
}