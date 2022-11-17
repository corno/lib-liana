import * as pt from "pareto-core-types"
import * as ps from "pareto-core-state"

import * as api from "../../interface"

export const joinDictionaries: api.FJoinDictionaries = ($) => {
    function imp<T>($: pt.Dictionary<pt.Dictionary<T>>): pt.Dictionary<T> {
        const x = ps.createUnsafeDictionaryBuilder<T>()
        $.map(($, key) => {
            $.map(($, key2) => {
                x.add(`${key}${key2}`, $)
            })
        })
        return x.getDictionary()
    }
    return imp($)
}