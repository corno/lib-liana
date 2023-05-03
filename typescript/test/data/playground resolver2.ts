import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from "../../lowlevel_implementation"
import * as g_out from "../../lowlevel_implementation_possiblyresolved"
import * as g_out_typesystem from "../../lowlevel_typesystem_possiblyresolved"

import { A } from "../api.generated"

function tempoptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => pt.OptionalValue<RT>,
    b: () => pt.OptionalValue<RT>,
): pt.OptionalValue<RT> {
    return tempoptional($, a, b)
}
export const $$: A.resolve = ($d, $se) => {
    return map_Model
}