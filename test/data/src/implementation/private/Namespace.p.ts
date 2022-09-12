import * as pl from "pareto-core-lib"

import * as api from "../../interface"

import { Type } from "./Type.p"
export function Namespace(
    $: api.unresolved.globalTypes.TNamespace,
    $i: {},
): api.resolved.globalTypes.TNamespace {
    return {
        'namespaces': $["namespaces"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["namespaces"], ($) => {
                return $.map(($, key) => {
                    return Namespace(
                        $,
                        $i,
                    )
                })
            })
        ,
        'parameters': $["parameters"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["parameters"], ($) => {
                return $.map(($, key) => {
                    return $
                })
            })
        ,
        'types': $["types"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["types"], ($) => {
                return $.map(($, key) => {
                    return Type(
                        $,
                        $i,
                    )
                })
            })
        ,
    }
}