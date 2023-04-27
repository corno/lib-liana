import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_in from ".."
import * as g_out from ".."

function map_A__Result($: g_in.T.A__Result): g_out.T.Element {
    return ({
        'foo': pl.cc($, ($) => $),
    })
}
function map_A__tagged__union__with__result($: g_in.T.A__tagged__union__with__result): g_out.T.Element {
    return ({
        'tu': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'a': return ['a', ({
                    'result': pl.cc($, ($) => map_A__Result($)),
                })]
                default: return pl.au($[1])
            }
        })),
    })
}
function map_A__tagged__union__with__constrained__option($: g_in.T.A__tagged__union__with__constrained__option): g_out.T.Element {
    return ({
        'tu1': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'a': return ['a', ({
                    'bar': pl.cc($, ($) => $),
                })]
                default: return pl.au($[1])
            }
        })),
        'tu2': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'a': return ['a', ({
                    'result': pl.cc($, ($) => map_A__Result($)),
                })]
                default: return pl.au($[1])
            }
        })),
    })
}
function map_A__dictionary__with__constraint($: g_in.T.A__dictionary__with__constraint): g_out.T.Element {
    return ({
        'dict': pl.cc($, ($) => $.map(($) => ({}))),
        'constrained dict': pl.cc($, ($) => $.map(($) => ({}))),
    })
}
function map_A__optional__with__result($: g_in.T.A__optional__with__result): g_out.T.Element {
    return ({
        'opt': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, ({
                'result': pl.cc($, ($) => map_A__Result($)),
            })],
            () => [false],
        )),
    })
}
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
        'referenced type': pl.cc($, ($) => $),
        'type of referenced type': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'namespace': return ['namespace', map_Type__Selection($)]
                case 'type definition': return ['type definition', ({})]
                default: return pl.au($[1])
            }
        })),
    })
}
function map_Variables($: g_in.T.Variables): g_out.T.Element {
    return $.map(($) => ({
        'type': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'parameter': return ['parameter', ({
                    'parameter': pl.cc($, ($) => $),
                })]
                case 'variable stack': return ['variable stack', ({})]
                case 'local': return ['local', ({
                    'type': pl.cc($, ($) => $),
                    'initializer': pl.cc($, ($) => map_Expression($)),
                })]
                default: return pl.au($[1])
            }
        })),
    }))
}