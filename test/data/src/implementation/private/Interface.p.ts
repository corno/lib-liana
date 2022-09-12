import * as pl from "pareto-core-lib"

import * as api from "../../interface"


export function Interface(
    $: api.unresolved.globalTypes.TInterface,
    $i: {},
): api.resolved.globalTypes.TInterface {
    return {
        'type': $["type"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["type"], ($) => {
                return pl.cc($, ($): any => {
                    switch ($[0]) {
                        case "component": 
                            return pl.cc($[1], ($) => {
                                return ["component", {}]
                            })
                        case "group": 
                            return pl.cc($[1], ($) => {
                                return ["group", {
                                    'properties': $["properties"] === undefined
                                        ? pl.panic("UNDEFINED")
                                        : pl.cc($["properties"], ($) => {
                                            return $.map(($, key) => {
                                                return Interface(
                                                    $,
                                                    $i,
                                                )
                                            })
                                        })
                                    ,
                                }]
                            })
                        default: return pl.au($[0])
                    }
                })
            })
        ,
    }
}