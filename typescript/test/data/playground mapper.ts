import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_in from ".."
import * as g_out from ".."

function map_Address__Selection__Tail($: g_in.T.Address__Selection__Tail): g_out.T.Element {
    return pl.optional(
        $,
        ($) => [true, ({
            'step': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'call': return ['call', ({
                        'type arguments': pl.cc($, ($) => map_Type__Arguments($)),
                        'arguments': pl.cc($, ($) => $.map(($) => map_Expression($))),
                    })]
                    case 'property': return ['property', $]
                    default: return pl.au($[1])
                }
            })),
            'tail': pl.cc($, ($) => map_Address__Selection__Tail($)),
        })],
        () => [false],
    )
}
function map_Address__Selection($: g_in.T.Address__Selection): g_out.T.Element {
    return ({
        'variable': pl.cc($, ($) => $),
        'tail': pl.cc($, ($) => map_Address__Selection__Tail($)),
    })
}
function map_Expression($: g_in.T.Expression): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'string': return ['string', map_String__Expression($)]
            default: return pl.au($[1])
        }
    })
}
function map_String__Expression($: g_in.T.String__Expression): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'string literal': return ['string literal', $]
            default: return pl.au($[1])
        }
    })
}
function map_Type__Arguments($: g_in.T.Type__Arguments): g_out.T.Element {
    return $.map(($) => ({
        'type': pl.cc($, ($) => map_Type__Selection($)),
    }))
}
function map_Type__Selection__Tail($: g_in.T.Type__Selection__Tail): g_out.T.Element {
    return pl.optional(
        $,
        ($) => [true, ({
            'tail': pl.cc($, ($) => map_Type__Selection__Tail($)),
        })],
        () => [false],
    )
}
function map_Type__Selection($: g_in.T.Type__Selection): g_out.T.Element {
    return ({
        'arguments': pl.cc($, ($) => map_Type__Arguments($)),
    })
}
function map_Variables($: g_in.T.Variables): g_out.T.Element {
    return $.map(($) => ({
        'type': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'parameter': return ['parameter', ({
                    'parameter': pl.cc($, ($) => $),
                })]
                case 'stack': return ['stack', ({})]
                case 'local': return ['local', ({
                    'type': pl.cc($, ($) => $),
                    'initializer': pl.cc($, ($) => map_Expression($)),
                })]
                default: return pl.au($[1])
            }
        })),
    }))
}