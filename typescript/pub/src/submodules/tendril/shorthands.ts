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
        'type': ['array', {
            'type': type,
            //'constraint': [false]
        }]
    }
}

export function optional(type: g_this.T.Type<pd.SourceLocation>, result?: g_this.T.Type._ltype.optional.result.O<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['optional', {
            'type': type,
            'result': result === undefined ? [false] : [true, result]
        }]
    }
}

export function nothing(result?: g_this.T.Type._ltype.nothing.result.O<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['nothing', {
            'result': result === undefined ? [false] : [true, result]
        }]
    }
}

export function nothingResult(
    type: g_this.T.Global__Type__Selection<pd.SourceLocation>,
): g_this.T.Type._ltype.nothing.result.O<pd.SourceLocation> {
    return {
        'type': type,
    }
}

export function optionalResult(
    type: g_this.T.Global__Type__Selection<pd.SourceLocation>,
): g_this.T.Type._ltype.optional.result.O<pd.SourceLocation> {
    return {
        'type': type,
    }
}

//doesn't do anything
export function prop(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return type
}

export function resolvedValueReference(
    type: g_this.T.Type__Selection<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['terminal', {
            'terminal': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                }
            },
            'constrained': ['yes', {
                'type': type,
                'computed': ['no', null],
            }],
        }]
    }
}

export function lookupReference(
    type: g_this.T.Type__Selection<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['terminal', {
            'terminal': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                }
            },
            'constrained': ['yes', {
                'type': type,
                'computed': ['no', null],
            }],
        }]
    }
}

export function dictConstraint(
    type: g_this.T.Type__Selection<pd.SourceLocation>,
): g_this.T.Dictionary__Constraints.D<pd.SourceLocation> {
    return {
        'type': type,
    }
}

export function constrainedDictionary(
    constraints: RawDictionary<g_this.T.Dictionary__Constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['dictionary', {
            'key': {
                'type': {
                    'annotation': pd.getLocationInfo(1),
                    'key': "identifier",
                },
            },
            'constraints': pd.d(constraints),
            'type': type,
            //'autofill': pd.a([]),
        }]
    }
}

export function dictionary(type: g_this.T.Type<pd.SourceLocation>/*, autofill?: g_this.T.Type._ltype.dictionary.autofill.A<pd.SourceLocation>[]*/): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['dictionary', {
            // 'annotation': li,
            'key': {
                'type': r_imp("identifier", 1)
            },
            'constraints': pd.d({}),
            'type': type,
            //'autofill': pd.a(autofill === undefined ? [] : autofill),
        }]
    }
}

export function globalTypeResult(
    type: g_this.T.Global__Type__Selection<pd.SourceLocation>,
): g_this.T.Global__Type.result.O<pd.SourceLocation> {
    return {
        'type': type,
    }
}

export function globalType(
    type: g_this.T.Type<pd.SourceLocation>,
    result?: g_this.T.Global__Type.result.O<pd.SourceLocation>
): g_this.T.Global__Type<pd.SourceLocation> {
    return {
        'type': type,
        'result': result === undefined
            ? [false]
            : [true, result]
    }
}

export function group(rawProperties: RawDictionary<g_this.T.Type<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {

    return {
        'type': ['group', {
            'properties': pd.d(rawProperties).__mapWithKey(($, key) => {
                return {
                    'type': $,
                }
            })
        }]
    }
}

export function option(
    type: g_this.T.Type<pd.SourceLocation>,
): g_this.T.Type._ltype.tagged__union.options.D<pd.SourceLocation> {
    return {
        'constraints': pd.d({}),
        'type': type,
    }
}


export function optionConstraint(
    type: g_this.T.Type__Selection<pd.SourceLocation>,
    option: string,
): g_this.T.Option__Constraints.D<pd.SourceLocation> {
    return {
        'type': type,
        'option': {
            'annotation': pd.getLocationInfo(1),
            'key': option
        }
    }
}

export function constrainedOption(
    constraints: RawDictionary<g_this.T.Option__Constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>,
): g_this.T.Type._ltype.tagged__union.options.D<pd.SourceLocation> {
    return {
        'constraints': pd.d(constraints),
        'type': type,
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
        'type': ['tagged union', {
            'options': pd.d(options),
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
        'type': ['tagged union', {
            'result': [true, result],
            'options': pd.d(options),
        }]
    }
}

export function terminal(type: string): g_this.T.Type<pd.SourceLocation> {
    return {
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

export function t_grp(
    prop: string,
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['group', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'property': r_imp(prop, 1),
            },
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function t_dict(
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['dictionary', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function t_arr(
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['array', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function t_tu(
    opt: string,
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection__Tail<pd.SourceLocation> {
    return {
        'step type': ['tagged union', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'option': r_imp(opt, 1),
            },
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function tempExternalTypeSelection(
    imp: string,
    globalType: string,
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection<pd.SourceLocation> {
    return {
        'global type': {
            'import': [true, {
                'key': imp,
                'annotation': pd.getLocationInfo(1),
            }],
            'type': r_imp(globalType, 1),
        },
        'tail': tail === undefined ? [false] : [true, tail]
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
    tail?: g_this.T.Type__Selection__Tail<pd.SourceLocation>,
): g_this.T.Type__Selection<pd.SourceLocation> {
    return {
        'global type': {
            'import': [false],
            'type': r_imp(globalType, 1),
        },
        'tail': tail === undefined ? [false] : [true, tail]
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

export function resolvedSiblingComponent(type: string): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['component', {
            'context': ['resolved sibling', {
                'type': r_imp(type, 1),
            }],
        }]
    }
}

export function cyclicSiblingComponent(type: string): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['component', {
            'context': ['cyclic sibling', {
                'type': r_imp(type, 1),
            }],
        }]
    }
}

export function importedComponent(library: string, type: string): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['component', {
            'context': ['import', {
                'library': r_imp(library, 1),
                'type': r_imp(type, 1),
            }],
        }]
    }
}