import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'

import * as g_out from "../../resolved"


namespace Select {
    export type Global__Type__Selection = ($: g_out.T.Global__Type__Selection) => g_out.T.Global__Type
    export type Parameter = ($: g_out.T.Parameters.D) => g_out.T.Global__Type
    // export type Lookup__Selection = ($: g_out.T.Lookup__Selection) => g_out.T.Type
    export type No__Context__Value__Selection = ($: g_out.T.No__Context__Value__Selection) => g_out.T.Type
    export type Value__Selection__Tail = ($: g_out.T.Value__Selection__Tail) => g_out.T.Type
    export type Variable = ($: g_out.T.Variable) => g_out.T.Type
}

export namespace select {

    // export const Parameter: Select.Parameter = ($) => {
    //     return pl.cc($.type, ($) => {
    //         switch ($[0]) {
    //             case 'lookup': return pl.ss($, ($) => Global__Type__Selection($.type))
    //             case 'resolved value': return pl.ss($, ($) => Global__Type__Selection($.type))
    //             default: return pl.au($[0])
    //         }
    //     })
    // }

    // export const Lookup__Selection: Select.Lookup__Selection = ($) => {
    //     switch ($[0]) {
    //         case 'parameter': return pl.ss($, ($) => Global__Type__Selection($.lookup.type)).type
    //         case 'resolved dictionary': return pl.ss($, ($) => Value__Selection($))
    //         case 'this': return pl.ss($, ($) => $['containing dictionary'].type)
    //         default: return pl.au($[0])
    //     }
    // }

    export const Value__Selection__Tail: Select.Value__Selection__Tail = ($) => {
        switch ($[0]) {
            case 'component': return pl.ss($, ($) => pl.optional(
                $.tail,
                ($) => Value__Selection__Tail($),
                () => Global__Type__Selection($.component.type).type
            ))
            case 'group': return pl.ss($, ($) => pl.optional(
                $.tail,
                ($) => Value__Selection__Tail($),
                () => $.property.referent.type
            ))
            //case 'optional': return pl.ss($, ($) => $.optional.type)
            case 'reference': return pl.ss($, ($) => pl.optional(
                $.tail,
                ($) => Value__Selection__Tail($),
                () => No__Context__Value__Selection($.reference.dictionary.type)
            ))
            case 'state group': return pl.ss($, ($) => Global__Type__Selection($['result type']).type)

            default: return pl.au($[0])
        }
    }

    export const No__Context__Value__Selection: Select.No__Context__Value__Selection = ($) => {
        return pl.optional(
            $.tail,
            ($) => Value__Selection__Tail($),
            () => Variable($.start.referent)
        )
    }

    export const Global__Type__Selection: Select.Global__Type__Selection = ($) => {
        switch ($[0]) {
            case 'import': return pl.ss($, ($) => $.type.referent)
            case 'resolved sibling': return pl.ss($, ($) => $.type.referent)
            default: return pl.au($[0])
        }
    }

    export const Variable: Select.Variable = ($) => {
        switch ($[0]) {
            case 'dictionary constraint': return pl.ss($, ($) => {
                return pl.cc($.referent, ($) => {
                    switch ($[0]) {
                        case 'dictionary': return pl.ss($, ($) => $.dictionary.dictionary.type)
                        //case 'lookup': return pl.ss($, ($) => Lookup__Selection($))
                        default: return pl.au($[0])
                    }
                })
            })
            case 'state constraint': return pl.ss($, ($) => $.referent.state.referent.type)
            case 'parameter': return pl.ss($, ($) => Global__Type__Selection($.parameter.referent.type)).type
            case 'parent variable': return pl.ss($, ($) => Variable($.referent))
            case 'sibling property': return pl.ss($, ($) => $.referent.type)
            default: return pl.au($[0])
        }
    }
}