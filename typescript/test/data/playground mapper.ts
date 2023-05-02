import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_in from ".."
import * as g_out from ".."

function map_Atom($: g_in.T.Atom): g_out.T.Element {
    return ({
        'type': pl.cc($, ($) => $),
    })
}
function map_Variables($: g_in.T.Variables): g_out.T.Element {
    return $.map(($) => pl.cc($, ($) => {
        switch ($[0]) {
            case 'option constraint': return ['option constraint', $]
            case 'dictionary constraint': return ['dictionary constraint', $]
            case 'parameter': return ['parameter', $]
            case 'parent variable': return ['parent variable', $]
            case 'lookup': return ['lookup', $]
            default: return pl.au($[1])
        }
    }))
}
function map_Dictionary__Constraints($: g_in.T.Dictionary__Constraints): g_out.T.Element {
    return $.map(($) => ({
        'temp type': pl.cc($, ($) => map_Temp__Type__Selection($)),
        'selection': pl.cc($, ($) => map_Value__Selection($)),
    }))
}
function map_Option__Constraints($: g_in.T.Option__Constraints): g_out.T.Element {
    return $.map(($) => ({
        'temp type': pl.cc($, ($) => map_Temp__Type__Selection($)),
        'selection': pl.cc($, ($) => map_Value__Selection($)),
        'option': pl.cc($, ($) => $),
    }))
}
function map_Type($: g_in.T.Type): g_out.T.Element {
    return ({
        'classes': pl.cc($, ($) => $.map(($) => ({}))),
        'type': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'nothing': return ['nothing', ({
                    'result': pl.cc($, ($) => pl.optional(
                        $,
                        ($) => [true, ({
                            'temp type': pl.cc($, ($) => map_Global__Type__Selection($)),
                            'selection': pl.cc($, ($) => map_Value__Selection($)),
                        })],
                        () => [false],
                    )),
                })]
                case 'terminal': return ['terminal', ({
                    'terminal': pl.cc($, ($) => map_Atom($)),
                    'constrained': pl.cc($, ($) => pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'no': return ['no', ({})]
                            case 'yes': return ['yes', ({
                                'referencee type': pl.cc($, ($) => pl.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'resolved value': return ['resolved value', ({
                                            'temp type': pl.cc($, ($) => map_Temp__Type__Selection($)),
                                            'selection': pl.cc($, ($) => map_Value__Selection($)),
                                        })]
                                        case 'lookup': return ['lookup', ({
                                            'temp type': pl.cc($, ($) => map_Temp__Type__Selection($)),
                                            'selection': pl.cc($, ($) => map_Lookup__Selection($)),
                                        })]
                                        default: return pl.au($[1])
                                    }
                                })),
                            })]
                            default: return pl.au($[1])
                        }
                    })),
                })]
                case 'dictionary': return ['dictionary', ({
                    'key': pl.cc($, ($) => map_Atom($)),
                    'constraints': pl.cc($, ($) => map_Dictionary__Constraints($)),
                    'variables': pl.cc($, ($) => map_Variables($)),
                    'type': pl.cc($, ($) => map_Type($)),
                    'autofill': pl.cc($, ($) => $.map(($) => ({
                        'source': pl.cc($, ($) => map_Value__Selection($)),
                        'initializer': pl.cc($, ($) => map_Type__Initializer($)),
                    }))),
                })]
                case 'array': return ['array', ({
                    'type': pl.cc($, ($) => map_Type($)),
                })]
                case 'optional': return ['optional', ({
                    'type': pl.cc($, ($) => map_Type($)),
                    'result': pl.cc($, ($) => pl.optional(
                        $,
                        ($) => [true, ({
                            'temp type': pl.cc($, ($) => map_Global__Type__Selection($)),
                            'set': pl.cc($, ($) => map_Any__Value__Selection($)),
                            'not set': pl.cc($, ($) => map_Value__Selection($)),
                        })],
                        () => [false],
                    )),
                })]
                case 'tagged union': return ['tagged union', ({
                    'result': pl.cc($, ($) => pl.optional(
                        $,
                        ($) => [true, map_Global__Type__Selection($)],
                        () => [false],
                    )),
                    'options': pl.cc($, ($) => $.map(($) => ({
                        'constraints': pl.cc($, ($) => map_Option__Constraints($)),
                        'variables': pl.cc($, ($) => map_Variables($)),
                        'type': pl.cc($, ($) => map_Type($)),
                        'result': pl.cc($, ($) => pl.optional(
                            $,
                            ($) => [true, map_Any__Value__Selection($)],
                            () => [false],
                        )),
                    }))),
                    'default': pl.cc($, ($) => $),
                })]
                case 'group': return ['group', ({
                    'properties': pl.cc($, ($) => map_Properties($)),
                })]
                case 'component': return ['component', ({
                    'context': pl.cc($, ($) => pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'local': return ['local', ({})]
                            case 'import': return ['import', ({
                                'library': pl.cc($, ($) => $),
                            })]
                            default: return pl.au($[1])
                        }
                    })),
                    'type': pl.cc($, ($) => $),
                    'arguments': pl.cc($, ($) => $.map(($) => ({
                        'type': pl.cc($, ($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'resolved value': return ['resolved value', map_Value__Selection($)]
                                case 'lookup': return ['lookup', map_Lookup__Selection($)]
                                default: return pl.au($[1])
                            }
                        })),
                    }))),
                })]
                default: return pl.au($[1])
            }
        })),
    })
}
function map_Properties($: g_in.T.Properties): g_out.T.Element {
    return $.map(($) => ({
        'variables': pl.cc($, ($) => map_Variables($)),
        'type': pl.cc($, ($) => map_Type($)),
    }))
}
function map_Value__Selection__Tail($: g_in.T.Value__Selection__Tail): g_out.T.Element {
    return ({
        'step type': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'reference': return ['reference', ({})]
                case 'component': return ['component', ({})]
                case 'tagged union': return ['tagged union', ({})]
                case 'optional': return ['optional', ({})]
                case 'nothing': return ['nothing', ({})]
                case 'group': return ['group', ({
                    'property': pl.cc($, ($) => $),
                })]
                default: return pl.au($[1])
            }
        })),
        'tail': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, map_Value__Selection__Tail($)],
            () => [false],
        )),
    })
}
function map_Any__Value__Selection($: g_in.T.Any__Value__Selection): g_out.T.Element {
    return ({
        'start': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, $],
            () => [false],
        )),
        'tail': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, map_Value__Selection__Tail($)],
            () => [false],
        )),
    })
}
function map_Value__Selection($: g_in.T.Value__Selection): g_out.T.Element {
    return ({
        'start': pl.cc($, ($) => $),
        'tail': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, map_Value__Selection__Tail($)],
            () => [false],
        )),
    })
}
function map_Reference__Initializer($: g_in.T.Reference__Initializer): g_out.T.Element {
    return ({})
}
function map_Atom__Initializer($: g_in.T.Atom__Initializer): g_out.T.Element {
    return ({
        'constrained': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'yes': return ['yes', map_Reference__Initializer($)]
                default: return pl.au($[1])
            }
        })),
    })
}
function map_Type__Initializer($: g_in.T.Type__Initializer): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'terminal': return ['terminal', map_Atom__Initializer($)]
            case 'optional': return ['optional', ({
                'type': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, map_Type__Initializer($)],
                    () => [false],
                )),
            })]
            case 'tagged union': return ['tagged union', ({
                'option': pl.cc($, ($) => $),
                'data': pl.cc($, ($) => map_Type__Initializer($)),
            })]
            case 'group': return ['group', ({
                'properties': pl.cc($, ($) => $.map(($) => ({
                    'type': pl.cc($, ($) => map_Type__Initializer($)),
                }))),
            })]
            case 'component': return ['component', map_Type__Initializer($)]
            default: return pl.au($[1])
        }
    })
}
function map_Lookup__Selection($: g_in.T.Lookup__Selection): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'resolved dictionary': return ['resolved dictionary', map_Value__Selection($)]
            case 'this': return ['this', ({
                'type': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'non cyclic': return ['non cyclic', ({})]
                        case 'cyclic': return ['cyclic', ({})]
                        default: return pl.au($[1])
                    }
                })),
            })]
            case 'parameter': return ['parameter', $]
            default: return pl.au($[1])
        }
    })
}
function map_Global__Type__Selection($: g_in.T.Global__Type__Selection): g_out.T.Element {
    return ({
        'import': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, $],
            () => [false],
        )),
        'type': pl.cc($, ($) => $),
    })
}
function map_Labels($: g_in.T.Labels): g_out.T.Element {
    return ({
        'atom types': pl.cc($, ($) => $.map(($) => ({}))),
    })
}
function map_Parameters($: g_in.T.Parameters): g_out.T.Element {
    return $.map(($) => ({
        'type': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'resolved value': return ['resolved value', ({
                    'type': pl.cc($, ($) => map_Global__Type__Selection($)),
                    'optional': pl.cc($, ($) => pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'no': return ['no', ({})]
                            case 'yes': return ['yes', ({})]
                            default: return pl.au($[1])
                        }
                    })),
                })]
                case 'lookup': return ['lookup', ({
                    'type': pl.cc($, ($) => map_Global__Type__Selection($)),
                    'kind': pl.cc($, ($) => pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'non cyclic': return ['non cyclic', ({})]
                            case 'cyclic': return ['cyclic', ({})]
                            default: return pl.au($[1])
                        }
                    })),
                })]
                default: return pl.au($[1])
            }
        })),
    }))
}
function map_Imports($: g_in.T.Imports): g_out.T.Element {
    return $.map(($) => ({}))
}
function map_Global__Type__Declaration($: g_in.T.Global__Type__Declaration): g_out.T.Element {
    return ({
        'parameters': pl.cc($, ($) => map_Parameters($)),
        'result': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, map_Global__Type__Selection($)],
            () => [false],
        )),
    })
}
function map_Global__Type__Definition($: g_in.T.Global__Type__Definition): g_out.T.Element {
    return ({
        'variables': pl.cc($, ($) => map_Variables($)),
        'type': pl.cc($, ($) => map_Type($)),
        'result': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, map_Any__Value__Selection($)],
            () => [false],
        )),
    })
}
function map_Temp__Type__Selection__Tail($: g_in.T.Temp__Type__Selection__Tail): g_out.T.Element {
    return ({
        'step type': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'dictionary': return ['dictionary', ({})]
                case 'optional': return ['optional', ({})]
                case 'array': return ['array', ({})]
                case 'group': return ['group', ({
                    'property': pl.cc($, ($) => $),
                })]
                case 'tagged union': return ['tagged union', ({
                    'option': pl.cc($, ($) => $),
                })]
                default: return pl.au($[1])
            }
        })),
        'tail': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, map_Temp__Type__Selection__Tail($)],
            () => [false],
        )),
    })
}
function map_Temp__Type__Selection($: g_in.T.Temp__Type__Selection): g_out.T.Element {
    return ({
        'global type': pl.cc($, ($) => map_Global__Type__Selection($)),
        'tail': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, map_Temp__Type__Selection__Tail($)],
            () => [false],
        )),
    })
}
function map_Type__Library($: g_in.T.Type__Library): g_out.T.Element {
    return ({
        'imports': pl.cc($, ($) => map_Imports($)),
        'labels': pl.cc($, ($) => map_Labels($)),
        'global types': pl.cc($, ($) => ({
            'declarations': pl.cc($, ($) => $.map(($) => map_Global__Type__Declaration($))),
            'definitions': pl.cc($, ($) => $.map(($) => map_Global__Type__Definition($))),
        })),
    })
}
function map_Model($: g_in.T.Model): g_out.T.Element {
    return ({
        'type library': pl.cc($, ($) => map_Type__Library($)),
        'root': pl.cc($, ($) => $),
    })
}