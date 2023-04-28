import * as pd from 'pareto-core-data'
import * as pl from 'pareto-core-lib'

import * as g_common from 'glo-pareto-common'

import * as g_this from "./glossary";

const a = pd.a

type RawDictionary<T> = { [key: string]: T }

function r_imp(name: string, depth: number): g_common.T.AnnotatedKey<pd.SourceLocation> {
    return {
        key: name,
        annotation: pd.getLocationInfo(depth + 1),
    }
}

function d_imp<T>($: RawDictionary<T>, annotation: pd.SourceLocation): g_common.T.AnnotatedDictionary<pd.SourceLocation, T> {
    return {
        'annotation': annotation,
        'dictionary': pd.d($),
    }
}

function d_mappedimp<T, RT>($: RawDictionary<T>, annotation: pd.SourceLocation, cb: ($: T) => RT): g_common.T.AnnotatedDictionary<pd.SourceLocation, RT> {
    return {
        'annotation': annotation,
        'dictionary': pd.d($).map(cb),
    }
}

export function d<T>($: RawDictionary<T>) {
    const li = pd.getLocationInfo(1)
    return d_imp($, li)
}

export function r(name: string): g_common.T.AnnotatedKey<pd.SourceLocation> {
    return r_imp(name, 1)
}

export function array(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['array', {
            'type': type,
            //'constraint': [false]
        }]
    }
}

export function optional(type: g_this.T.Type<pd.SourceLocation>, result?: g_this.T.Type._ltype.optional.result.O<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['optional', {
            'type': type,
            'result': result === undefined ? [false] : [true, result]
        }]
    }
}

export function nothing(result?: g_this.T.Type._ltype.nothing.result.O<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['nothing', {
            'result': result === undefined ? [false] : [true, result]
        }]
    }
}

export function nothingResult(
    type: g_this.T.Global__Type__Selection<pd.SourceLocation>,
    selection: g_this.T.Value__Selection<pd.SourceLocation>,
): g_this.T.Type._ltype.nothing.result.O<pd.SourceLocation> {
    return {
        'temp type': type,
        'selection': selection,
    }
}

export function optionalResult(
    type: g_this.T.Global__Type__Selection<pd.SourceLocation>,
    set: g_this.T.Any__Value__Selection<pd.SourceLocation>,
    notSet: g_this.T.Value__Selection<pd.SourceLocation>,
): g_this.T.Type._ltype.optional.result.O<pd.SourceLocation> {
    return {
        'temp type': type,
        'not set': notSet,
        'set': set,
    }
}

export function pAllSiblings(type: g_this.T.Global__Type__Selection<pd.SourceLocation>): g_this.T.Parameters.D<pd.SourceLocation> {
    return {
        'type': ['siblings', {
            'kind': ['cyclic', null],
            'type': type
        }]
    }
}

export function pResolvedValue(gt: string, optional: boolean): g_this.T.Parameters.D<pd.SourceLocation> {
    return {
        'type': ['resolved value', {
            'type': {
                'import': [false],
                'type': r_imp(gt, 1),
            },
            'optional': optional ? ['yes', null] : ['no', null]
        }]
    }
}
export function pExternalResolvedValue(imp: string, gt: string, optional: boolean): g_this.T.Parameters.D<pd.SourceLocation> {
    return {
        'type': ['resolved value', {
            'type': {
                'import': [true, {
                    'key': imp,
                    'annotation': pd.getLocationInfo(1),
                }],
                'type': r_imp(gt, 1),
            },
            'optional': optional ? ['yes', null] : ['no', null]
        }]
    }
}

export function pNonCyclicSiblings(
    type: g_this.T.Global__Type__Selection<pd.SourceLocation>
): g_this.T.Parameters.D<pd.SourceLocation> {
    return {
        'type': ['siblings', {
            'kind': ['non cyclic', null],
            'type': type
        }]
    }
}

export function s_component(
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>
): g_this.T.Value__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['component', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function s_optional(
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>
): g_this.T.Value__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['optional', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function s_nothing(
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>
): g_this.T.Value__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['nothing', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }],
        'tail': tail === undefined ? [false] : [true, tail],
    }
}

export function s_taggedunion(
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>
): g_this.T.Value__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['tagged union', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function s_group(
    prop: string,
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>
): g_this.T.Value__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['group', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'property': {
                    'annotation': pd.getLocationInfo(1),
                    'key': prop,
                }
            }
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function s_reference(
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>
): g_this.T.Value__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['reference', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}
// export function comp(
//     prop: string,
//     tail?: g_this.T.Optional__Value__Selection__Tail<pd.SourceLocation>
// ): g_this.T.Optional__Value__Selection__Tail<pd.SourceLocation> {
//     return [true, {
//         'step type': ['component', {
//             'property': {
//                 'annotation': pd.getLocationInfo(1),
//                 'key': prop,
//             }
//         }],
//         'tail': tail === undefined ? [false] : tail
//     }]
// }

export function varSel(
    start: string,
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>
): g_this.T.Any__Value__Selection<pd.SourceLocation> {
    return {
        'start': [true, {
            'annotation': pd.getLocationInfo(1),
            'key': start,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function tailSel(
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>
): g_this.T.Any__Value__Selection<pd.SourceLocation> {
    return {
        'start': [false],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function valSel(
    start: string,
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>
): g_this.T.Value__Selection<pd.SourceLocation> {
    return {
        'start': {
            'annotation': pd.getLocationInfo(1),
            'key': start,
        },
        'tail': tail === undefined ? [false] : [true, tail]
    }
}


export function aResolvedValue(
    valSel: g_this.T.Value__Selection<pd.SourceLocation>,
): g_this.T.Type._ltype.component.arguments.D<pd.SourceLocation> {
    return {
        'annotation': pd.getLocationInfo(1),
        'content': {
            'type': ['resolved value', valSel],
        },
    }
}

export function thisNonCyclic(
): g_this.T.Containing__Dictionary__Selection<pd.SourceLocation> {
    return ['this', {
        'type': ['non cyclic', null]
    }]
}

export function thisCyclic(
): g_this.T.Containing__Dictionary__Selection<pd.SourceLocation> {
    return ['this', {
        'type': ['cyclic', null]
    }]
}

export function parameter(
    param: string,
): g_this.T.Containing__Dictionary__Selection<pd.SourceLocation> {
    return ['parameter', {
        'annotation': pd.getLocationInfo(1),
        'key': param
    }]
}

export function aContainingDictionary(
    sel: g_this.T.Containing__Dictionary__Selection<pd.SourceLocation>
): g_this.T.Type._ltype.component.arguments.D<pd.SourceLocation> {
    return {
        'annotation': pd.getLocationInfo(1),
        'content': {
            'type': ['containing dictionary', sel],
        },
    }
}

//doesn't do anything
export function prop(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return type
}

export function resolvedValueReference(
    valSel: g_this.T.Value__Selection<pd.SourceLocation>,
    temp_type: g_this.T.Temp__Type__Selection<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['terminal', {
            'terminal': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                }
            },
            'constrained': ['yes', {
                'referencee type': ['resolved value', {
                    'temp type': temp_type,
                    'selection': valSel,
                }]
            }],
        }]
    }
}

export function siblingReference(
    sel: g_this.T.Containing__Dictionary__Selection<pd.SourceLocation>,
    temp_type: g_this.T.Temp__Type__Selection<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['terminal', {
            'terminal': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                }
            },
            'constrained': ['yes', {
                'referencee type': ['sibling', {
                    'temp type': temp_type,
                    'selection': sel,
                }]
            }],
        }]
    }
}

export function dictConstraint(
    valSel: g_this.T.Value__Selection<pd.SourceLocation>,
    temp_type: g_this.T.Temp__Type__Selection<pd.SourceLocation>,
): g_this.T.Dictionary__Constraints.D<pd.SourceLocation> {
    return {
        'temp type': temp_type,
        'selection': valSel,
    }
}

export function constrainedDictionary(
    constraints: RawDictionary<g_this.T.Dictionary__Constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['dictionary', {
            'key': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                },
            },
            'constraints': pd.d(constraints),
            'variables': pd.d(constraints).__mapWithKey(($, key) => {
                return ['dictionary constraint', {
                    'annotation': pd.getLocationInfo(1),
                    'key': key,
                }]
            }),
            'type': type,
            'autofill': pd.a([]),
        }]
    }
}

export function dictionary(type: g_this.T.Type<pd.SourceLocation>, autofill?: g_this.T.Type._ltype.dictionary.autofill.A<pd.SourceLocation>[]): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['dictionary', {
            // 'annotation': li,
            'key': {
                'type': r_imp("identifier", 1)
            },
            'constraints': pd.d({}),
            'variables': pd.d({}),
            'type': type,
            'autofill': pd.a(autofill === undefined ? [] : autofill),
        }]
    }
}

export function globalType(
    parameters: RawDictionary<g_this.T.Parameters.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>,
    result_type?: g_this.T.Global__Type.definition.result.O<pd.SourceLocation>,
    result_selection?: g_this.T.Global__Type.implementation.result.O<pd.SourceLocation>,
): g_this.T.Global__Type<pd.SourceLocation> {
    const variables: RawDictionary<g_this.T.Variables.D<pd.SourceLocation>> = {}
    pd.d(parameters).__forEach(() => false, ($, key) => {
        pl.cc($.type, ($) => {
            switch ($[0]) {
                case 'resolved value':
                    pl.ss($, ($) => {

                    })
                    break
                case 'siblings':
                    pl.ss($, ($) => {
                        variables[key] = ['parameter', {
                            'key': key,
                            'annotation': pd.getLocationInfo(1),
                        }]
                    })
                    break
                default: pl.au($[0])
            }
        })
    })
    return {
        'definition': {
            'parameters': pd.d(parameters),
            'result': result_type === undefined
            ? [false]
            : [true, result_type]
        },
        'implementation': {
            'type': type,
            'variables': pd.d(variables),
            'result': result_selection === undefined
                ? [false]
                : [true, result_selection]
        },
    }
}
export function group(rawProperties: RawDictionary<g_this.T.Type<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {
    const currentVariables: RawDictionary<g_this.T.Variables.D<pd.SourceLocation>> = {}
    function clone($: RawDictionary<g_this.T.Variables.D<pd.SourceLocation>>) {
        const out: RawDictionary<g_this.T.Variables.D<pd.SourceLocation>> = {}
        pd.d($).__forEach(() => false, ($, key) => {
            out[key] = $
        })
        return out
    }
    return {
        'classes': pd.d({}),
        'type': ['group', {
            'properties': pd.d(rawProperties).__mapWithKey(($, key) => {
                const v = clone(currentVariables)
                currentVariables[key] = ['sibling', {
                    'key': key,
                    'annotation': pd.getLocationInfo(1)
                }]
                return {
                    'variables': pd.d(v),
                    'type': $,
                }
            })
        }]
    }
}

export function option(
    type: g_this.T.Type<pd.SourceLocation>,
    result?: g_this.T.Any__Value__Selection<pd.SourceLocation>,
): g_this.T.Type._ltype.tagged__union.options.D<pd.SourceLocation> {
    return {
        'constraints': pd.d({}),
        'variables': pd.d({}),
        'type': type,
        'result': result === undefined ? [false] : [true, result]
    }
}


export function optionConstraint(
    valSel: g_this.T.Value__Selection<pd.SourceLocation>,
    option: string,
    type: g_this.T.Temp__Type__Selection<pd.SourceLocation>
): g_this.T.Option__Constraints.D<pd.SourceLocation> {
    return {
        'temp type': type,
        'selection': valSel,
        'option': {
            'annotation': pd.getLocationInfo(1),
            'key': option
        }
    }
}

export function constrainedOption(
    constraints: RawDictionary<g_this.T.Option__Constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>,
    result?: g_this.T.Any__Value__Selection<pd.SourceLocation>,
): g_this.T.Type._ltype.tagged__union.options.D<pd.SourceLocation> {
    return {
        'constraints': pd.d(constraints),
        'variables': pd.d(constraints).__mapWithKey(($, key) => {
            return ['option constraint', {
                'annotation': pd.getLocationInfo(1),
                'key': key,
            }]
        }),
        'type': type,
        'result': result === undefined ? [false] : [true, result]
    }
}

export function taggedUnion(
    options: RawDictionary<g_this.T.Type._ltype.tagged__union.options.D<pd.SourceLocation>>,
): g_this.T.Type<pd.SourceLocation> {
    let firstKey: null | string = null
    pd.d(options).__mapWithKey(($, key) => {
        if (firstKey === null) {
            firstKey = key
        }
    })
    if (firstKey === null) {
        firstKey = "--NO OPTIONS--"
    }

    return {
        'classes': pd.d({}),
        'type': ['tagged union', {
            'options': pd.d(options),
            'default': r_imp(firstKey, 1),
            'result': [false]
        }]
    }
}
export function resultTaggedUnion(
    result: g_this.T.Type._ltype.tagged__union.result.O<pd.SourceLocation>,
    options: RawDictionary<g_this.T.Type._ltype.tagged__union.options.D<pd.SourceLocation>>,
): g_this.T.Type<pd.SourceLocation> {
    let firstKey: null | string = null
    pd.d(options).__mapWithKey(($, key) => {
        if (firstKey === null) {
            firstKey = key
        }
    })
    if (firstKey === null) {
        firstKey = "--NO OPTIONS--"
    }

    return {
        'classes': pd.d({}),
        'type': ['tagged union', {
            'result': [true, result],
            'options': pd.d(options),
            'default': r_imp(firstKey, 1),
        }]
    }
}

export function terminal(type: string): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['terminal', {
            'terminal': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': type,
                }
            },
            'constrained': ['no', null],
        }]
    }
}

// export function sgrp(prop: string, tail: g_this.T.Selection<pd.SourceLocation>): g_this.T.Selection<pd.SourceLocation> {
//     return ['group', {
//         'property': {
//             'annotation': pd.getLocationInfo(1),
//             'key': prop,
//         },
//         'selection': tail
//     }]
// }

// export function sarray(notEmpty: g_this.T.Selection<pd.SourceLocation>, empty: g_this.T.Selection<pd.SourceLocation>): g_this.T.Selection<pd.SourceLocation> {
//     return ['array', {
//         'empty': empty,
//         'not empty': notEmpty,
//     }]
// }
// export function sref(): g_this.T.Selection<pd.SourceLocation> {
//     return ['reference', null]
// }
// export function scomponent($: string): g_this.T.Selection<pd.SourceLocation> {
//     return ['component', {
//         'type name': $
//     }]
// }

// export function stu(options: RawDictionary<g_this.T.Selection<pd.SourceLocation>>): g_this.T.Selection<pd.SourceLocation> {
//     return ['tagged union', pd.d(options)]
// }

export function t_grp(prop: string): g_this.T.Temp__Type__Selection.tail.A<pd.SourceLocation> {
    return {
        'step type': ['group', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'property': r_imp(prop, 1),
            },
        }]
    }
}

export function t_dict(): g_this.T.Temp__Type__Selection.tail.A<pd.SourceLocation> {
    return {
        'step type': ['dictionary', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }]
    }
}

export function t_arr(): g_this.T.Temp__Type__Selection.tail.A<pd.SourceLocation> {
    return {
        'step type': ['array', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }]
    }
}

export function t_tu(opt: string): g_this.T.Temp__Type__Selection.tail.A<pd.SourceLocation> {
    return {
        'step type': ['tagged union', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'option': r_imp(opt, 1),
            },
        }]
    }
}

export function tempExternalTypeSelection(
    imp: string,
    globalType: string,
    path: g_this.T.Temp__Type__Selection.tail.A<pd.SourceLocation>[],
): g_this.T.Temp__Type__Selection<pd.SourceLocation> {
    return {
        'global type': {
            'import': [true, {
                'key': imp,
                'annotation': pd.getLocationInfo(1),
            }],
            'type': r_imp(globalType, 1),
        },
        'tail': a(path),
    }
}


export function globalTypeSelection(
    globalType: string,
): g_this.T.Global__Type__Selection<pd.SourceLocation> {
    return {
        'import': [false],
        'type': r_imp(globalType, 1),
    }
}

export function externalGlobalTypeSelection(
    imp: string,
    globalType: string,
): g_this.T.Global__Type__Selection<pd.SourceLocation> {
    return {
        'import': [true, {
            'annotation': pd.getLocationInfo(1),
            'key': imp,
        }],
        'type': r_imp(globalType, 1),
    }
}

export function tempTypeSelection(
    globalType: string,
    path: g_this.T.Temp__Type__Selection.tail.A<pd.SourceLocation>[],
): g_this.T.Temp__Type__Selection<pd.SourceLocation> {
    return {
        'global type': {
            'import': [false],
            'type': r_imp(globalType, 1),
        },
        'tail': a(path),
    }
}

// export function tuStep(option: string): g_this.T.Value__Selection.tail.A<pd.SourceLocation> {
//     return ['tagged union', {
//         'option': {
//             'annotation': pd.getLocationInfo(1),
//             'key': option
//         }
//     }]
// }

export function component(type: string, args: RawDictionary<g_this.T.Type._ltype.component.arguments.D<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['component', {
            'context': ['local', null],
            'type': r_imp(type, 1),
            'arguments': pd.d(args),
        }]
    }
}
export function importedComponent(library: string, type: string, args: RawDictionary<g_this.T.Type._ltype.component.arguments.D<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {
    return {
        'classes': pd.d({}),
        'type': ['component', {
            'context': ['import', {
                'library': r_imp(library, 1)
            }],
            'type': r_imp(type, 1),
            'arguments': pd.d(args),
        }]
    }
}