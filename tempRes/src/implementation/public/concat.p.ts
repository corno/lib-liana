import * as pt from "pareto-core-types"
import * as pi from "pareto-core-internals"

import * as api from "../../interface"

export const concat: api.FConcat = ($) => {
    function imp<T>($: {
        array: pt.Array<T>
        element: T,
    }): pt.Array<T> {
        const tmp: T[] = []
        $.array.forEach(($) => {
            tmp.push($)
        })
        tmp.push($.element)
        return pi.wrapRawArray(tmp)
    }
    return imp($)
}