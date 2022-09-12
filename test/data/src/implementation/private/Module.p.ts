import * as pl from "pareto-core-lib"

import * as api from "../../interface"

import { API } from "./API.p"
import { Interface } from "./Interface.p"

export function Module(
    $: api.unresolved.globalTypes.TModule,
    $i: {},
): api.resolved.globalTypes.TModule {
    return {
        'implementation': $["implementation"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["implementation"], ($) => {
                return {
                    'imports': $["imports"] === undefined
                        ? pl.panic("UNDEFINED")
                        : pl.cc($["imports"], ($) => {
                            return $.map(($, key) => {
                                return Interface(
                                    $,
                                    $i,
                                )
                            })
                        })
                    ,
                    'private functions': $["private functions"] === undefined
                        ? pl.panic("UNDEFINED")
                        : pl.cc($["private functions"], ($) => {
                            return $.map(($, key) => {
                                return {}
                            })
                        })
                    ,
                    'public functions': $["public functions"] === undefined
                        ? pl.panic("UNDEFINED")
                        : pl.cc($["public functions"], ($) => {
                            return $.map(($, key) => {
                                return {}
                            })
                        })
                    ,
                }
            })
        ,
        'interface': $["interface"] === undefined
            ? pl.panic("UNDEFINED")
            : pl.cc($["interface"], ($) => {
                return API(
                    $,
                    $i,
                )
            })
        ,
    }
}