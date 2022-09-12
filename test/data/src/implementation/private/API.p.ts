import * as pl from "pareto-core-lib"

import * as api from "../../interface"

import { Namespace } from "./Namespace.p"
export function API(
    $: api.unresolved.globalTypes.TAPI,
    $i: {},
): api.resolved.globalTypes.TAPI {
    return {
        'dependencies': $["dependencies"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["dependencies"], ($) => {
                return $.map(($, key) => {
                    return {}
                })
            })
        ,
        'function declarations': $["function declarations"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["function declarations"], ($) => {
                return $.map(($, key) => {
                    return {}
                })
            })
        ,
        'imports': $["imports"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["imports"], ($) => {
                return $.map(($, key) => {
                    return $
                })
            })
        ,
        'interfaces': $["interfaces"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["interfaces"], ($) => {
                return $.map(($, key) => {
                    return {}
                })
            })
        ,
        'namespace': $["namespace"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["namespace"], ($) => {
                return Namespace(
                    $,
                    $i,
                )
            })
        ,
    }
}