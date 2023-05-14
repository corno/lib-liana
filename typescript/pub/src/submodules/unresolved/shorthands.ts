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

// function d_imp<T>($: RawDictionary<T>, annotation: pd.SourceLocation): g_common.T.AnnotatedDictionary<pd.SourceLocation, T> {
//     return {
//         'annotation': annotation,
//         'dictionary': pd.d($),
//     }
// }

// export function d<T>($: RawDictionary<T>) {
//     const li = pd.getLocationInfo(1)
//     return d_imp($, li)
// }

// export function r(name: string): g_common.T.AnnotatedKey<pd.SourceLocation> {
//     return r_imp(name, 1)
// }

export function array(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['array', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'type': type,
                //'constraint': [false]
            }
        }]
    }
}

export function constrainedOptional(
    constraints: RawDictionary<g_this.T.State__Constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['optional', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'constraints': pd.d(constraints),
                'variables': pd.d({}),
                'type': type,
                //'constraint': [false]
            }
        }]
    }
}

export function optional(
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['optional', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'constraints': pd.d<g_this.T.State__Constraints.D<pd.SourceLocation>>({}),
                'variables': pd.d({}),
                'type': type,
                //'constraint': [false]
            }
        }]
    }
}

export function nothing(
    valSel?: g_this.T.No__Context__Value__Selection<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['nothing', {
            'annotation': pd.getLocationInfo(1),
            'content': null,
        }]
    }
}

export function prop(
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return type
}

export function dependentProp(
    siblings: RawDictionary<string>,
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Property<pd.SourceLocation> {
    return {
        'variables': pd.d(siblings).map(($) => {
            return ['sibling property', {
                'annotation': pd.getLocationInfo(1),
                'content': {

                    'key': $,
                    'annotation': pd.getLocationInfo(1)
                }
            }]
        }),
        'type': type,
    }
}

export function dictionaryReference(
    type: g_this.T.No__Context__Value__Selection<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['resolved reference', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'atom': {
                    'type': {
                        'annotation': pd.getLocationInfo(1),
                        'key': "identifier",
                    }
                },
                'dictionary': {
                    'dictionary': null,
                    'type': type,
                }
            }
        }]
    }
}

// export function lookupReference(
//     type: g_this.T.Lookup__Selection<pd.SourceLocation>,
// ): g_this.T.Type<pd.SourceLocation> {
//     return {
//         'type': ['resolved reference', {
//             'annotation': pd.getLocationInfo(1),
//             'content': {
//                 'atom': {
//                     'type': {
//                         'annotation': pd.getLocationInfo(1),
//                         'key': "identifier",
//                     }
//                 },
//                 'value': ['lookup', {

//                     'annotation': pd.getLocationInfo(1),
//                     'content': type,

//                 }],
//             }
//         }]
//     }
// }

// export function cyclicReference(
//     gloRef: g_this.T.Global__Type__Selection<pd.SourceLocation>,
// ): g_this.T.Type<pd.SourceLocation> {
//     return {
//         'type': ['cyclic reference', {
//             'atom': {
//                 'type': {
//                     'annotation': pd.getLocationInfo(1),
//                     'key': "identifier",
//                 }
//             },
//             'sibling': gloRef,
//         }]
//     }
// }

// export function lookupConstraint(
//     lookupSelection: g_this.T.Lookup__Selection<pd.SourceLocation>
// ): g_this.T.Dictionary__Constraints.D<pd.SourceLocation> {
//     return ['lookup', {
//         'annotation': pd.getLocationInfo(1),
//         'content': lookupSelection,
//     }]
// }

export function dictionaryConstraint(
    type: g_this.T.No__Context__Value__Selection<pd.SourceLocation>,
    dense: boolean
): g_this.T.Dictionary__Constraints.D<pd.SourceLocation> {
    return ['dictionary', {
        'annotation': pd.getLocationInfo(1),
        'content': {

            'dictionary': {
                'type': type,
                'dictionary': null,
            },
            'dense': dense
                ? ['yes', {
                    'annotation': pd.getLocationInfo(1),
                    'content': null,
                }]
                : ['no', {
                    'annotation': pd.getLocationInfo(1),
                    'content': null,
                }]
        },
    }]
}


export function constrainedDictionary(
    constraints: RawDictionary<g_this.T.Dictionary__Constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['dictionary', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'key': {
                    'type': {
                        'annotation': pd.getLocationInfo(1),
                        'key': "identifier",
                    },
                },
                'constraints': pd.d(constraints),
                'variables': pd.d({}),
                'type': type,
                //'autofill': pd.a([]),
            }
        }]
    }
}

export function dictionary(type: g_this.T.Type<pd.SourceLocation>/*, autofill?: g_this.T.Type._ltype.dictionary.autofill.A<pd.SourceLocation>[]*/): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['dictionary', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                // 'annotation': li,
                'key': {
                    'type': r_imp("identifier", 1)
                },
                'constraints': pd.d<g_this.T.Dictionary__Constraints.D<pd.SourceLocation>>({}),
                'variables': pd.d({}),
                'type': type,
                //'autofill': pd.a(autofill === undefined ? [] : autofill),
            }
        }]
    }
}

export function globalType(
    parameters: RawDictionary<g_this.T.Parameters.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>,
    result?: g_this.T.Any__Value__Selection<pd.SourceLocation>
): g_this.T.Global__Types.D<pd.SourceLocation> {
    return {
        'parameters': pd.d(parameters),
        'variables': pd.d({}),
        'type': type,
        'result': result === undefined ? [false] : [true, result]
    }
}

export function group(
    rawProperties: RawDictionary<g_this.T.Type<pd.SourceLocation>>,
): g_this.T.Type<pd.SourceLocation> {
    const allPrecedingSiblings: RawDictionary<g_this.T.Variable<pd.SourceLocation>> = {}
    return {
        'type': ['group', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'properties': pd.d(rawProperties).__mapWithKey(($, key) => {
                    const precedingSiblings: RawDictionary<g_this.T.Variable<pd.SourceLocation>> = {}
                    pd.d(allPrecedingSiblings).__forEach(() => false, ($, key) => {
                        precedingSiblings[key] = $
                    })
                    allPrecedingSiblings[key] = ['sibling property', {
                        'annotation': pd.getLocationInfo(1),
                        'content': {
                            'annotation': pd.getLocationInfo(1),
                            'key': key,
                        },
                    }]
                    return {
                        'variables': pd.d(precedingSiblings),
                        'type': $
                    }
                }),
            }
        }]
    }
}

export function state(
    type: g_this.T.Type<pd.SourceLocation>,
): g_this.T.Type._ltype.state__group.content.states.D<pd.SourceLocation> {
    return {
        'constraints': pd.d({}),
        'variables': pd.d({}),
        'type': type,
    }
}


export function stateConstraint(
    type: g_this.T.No__Context__Value__Selection<pd.SourceLocation>,
    option: string,
): g_this.T.State__Constraints.D<pd.SourceLocation> {
    return {
        'type': type,
        'state group': null,
        'state': {
            'annotation': pd.getLocationInfo(1),
            'key': option
        }
    }
}

export function constrainedState(
    constraints: RawDictionary<g_this.T.State__Constraints.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>,
): g_this.T.Type._ltype.state__group.content.states.D<pd.SourceLocation> {
    return {
        'constraints': pd.d(constraints),
        'variables': pd.d({}),
        'type': type,
    }
}

export function stateGroup(
    states: RawDictionary<g_this.T.Type._ltype.state__group.content.states.D<pd.SourceLocation>>,
): g_this.T.Type<pd.SourceLocation> {
    let firstKey: null | string = null
    pd.d(states).__mapWithKey(($, key) => {
        if (firstKey === null) {
            firstKey = key
        }
    })
    if (firstKey === null) {
        firstKey = "--NO STATES--"
    }

    return {
        'type': ['state group', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'states': pd.d(states),
            },
        }]
    }
}

export function atom(type: string): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['atom', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'atom': {
                    'type': {
                        'annotation': pd.getLocationInfo(1),
                        'key': type,
                    }
                },
            },
        }]
    }
}

export function v_grp(
    prop: string,
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>,
): g_this.T.Value__Selection__Tail<pd.SourceLocation> {
    return ['group', {
        'annotation': pd.getLocationInfo(1),
        'content': {
            'group': null,
            'property': r_imp(prop, 1),
            'tail': tail === undefined ? [false] : [true, tail]
        },
    }]

}

export function v_sg(
    type: g_this.T.Global__Type__Selection<pd.SourceLocation>,
    states: RawDictionary<g_this.T.Value__Selection__Tail.state__group.content.states.D<pd.SourceLocation>>,
): g_this.T.Value__Selection__Tail<pd.SourceLocation> {
    return ['state group', {
        'annotation': pd.getLocationInfo(1),
        'content': {
            'state group': null,
            'result type': type,
            'states': pd.d(states)
        },
    }]
}

export function v_ref(
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>,
): g_this.T.Value__Selection__Tail<pd.SourceLocation> {
    return ['reference', {
        'annotation': pd.getLocationInfo(1),
        'content': {
            'reference': null,
            'tail': tail === undefined ? [false] : [true, tail]
        },
    }]
}

// export function dictionarySelection(
//     valueSelection: g_this.T.No__Context__Value__Selection<pd.SourceLocation>,
// ): g_this.T.Dictionary__Selection<pd.SourceLocation> {
//     return {
//         'type': valueSelection,
//         'cast': ['dictionary', {
//             'annotation': pd.getLocationInfo(1),
//             'content': null
//         }]
//     }
// }

// export function stateSelection(
//     valueSelection: g_this.T.No__Context__Value__Selection<pd.SourceLocation>,
//     state: string,
// ): g_this.T.State__Selection<pd.SourceLocation> {
//     return {
//         'type': valueSelection,
//         'cast': ['state group', {
//             'annotation': pd.getLocationInfo(1),
//             'content': {
//                 'state': {
//                     'annotation': pd.getLocationInfo(1),
//                     'key': state,
//                 }
//             }
//         }]
//     }
// }

export function valueSelection(
    variable: string,
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>,
): g_this.T.No__Context__Value__Selection<pd.SourceLocation> {
    return {
        'start': {
            'annotation': pd.getLocationInfo(1),
            'key': variable,
        },
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function anyValueSelection(
    variable: string,
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>,
): g_this.T.No__Context__Value__Selection<pd.SourceLocation> {
    return {
        'start': {
            'annotation': pd.getLocationInfo(1),
            'key': variable,
        },
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function fromVariableSelection(
    variable: string,
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>,
): g_this.T.Any__Value__Selection<pd.SourceLocation> {
    return {
        'start': [true, {
            'annotation': pd.getLocationInfo(1),
            'key': variable,
        }],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

export function fromContextSelection(
    tail?: g_this.T.Value__Selection__Tail<pd.SourceLocation>,
): g_this.T.Any__Value__Selection<pd.SourceLocation> {
    return {
        'start': [false],
        'tail': tail === undefined ? [false] : [true, tail]
    }
}

// export function tuStep(option: string): g_this.T.No__Context__Value__Selection.tail.A<pd.SourceLocation> {
//     return ['tagged union', {
//         'option': {
//             'annotation': pd.getLocationInfo(1),
//             'key': option
//         }
//     }]
// }

// export function aLookup(
//     lookupSelection: g_this.T.Lookup__Selection<pd.SourceLocation>
// ): g_this.T.Type._ltype.component.content.arguments.D<pd.SourceLocation> {
//     return {
//         'annotation': pd.getLocationInfo(1),
//         'content': {
//             'type': ['lookup', {
//                 'annotation': pd.getLocationInfo(1),
//                 'content': lookupSelection
//             }]
//         }
//     }
// }

export function aResolvedValue(
    valueSelection: g_this.T.No__Context__Value__Selection<pd.SourceLocation>
): g_this.T.Type._ltype.component.content.arguments.D<pd.SourceLocation> {
    return {
        'annotation': pd.getLocationInfo(1),
        'content': {
            'type': ['resolved value', {
                'annotation': pd.getLocationInfo(1),
                'content': valueSelection
            }]
        }
    }
}

export function component(
    type: g_this.T.Global__Type__Selection<pd.SourceLocation>,
    args: RawDictionary<g_this.T.Type._ltype.component.content.arguments.D<pd.SourceLocation>>,
): g_this.T.Type<pd.SourceLocation> {
    return {
        'type': ['component', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'type': type,
                'arguments': pd.d(args),
            }
        }]
    }
}

export function typeRef(type: string): g_this.T.Global__Type__Selection<pd.SourceLocation> {
    return ['resolved sibling', {
        'annotation': pd.getLocationInfo(1),
        'content': {
            'type': {
                'key': type,
                'annotation': pd.getLocationInfo(1)
            }
        },
    }]
}

export function imported(library: string, type: string): g_this.T.Global__Type__Selection<pd.SourceLocation> {
    return ['import', {
        'annotation': pd.getLocationInfo(1),
        'content': {
            'library': r_imp(library, 1),
            'type': r_imp(type, 1),
        },
    }]
}

export function pResolvedValue(gt: string, optional: boolean): g_this.T.Parameters.D<pd.SourceLocation> {
    return {
        'type': ['resolved sibling', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'type': r_imp(gt, 1),
            },
        }],
        'optional': optional
            ? ['yes', {
                'annotation': pd.getLocationInfo(1),
                'content': null,
            }]
            : ['no', {
                'annotation': pd.getLocationInfo(1),
                'content': null,
            }],
    }
}
export function pExternal(imp: string, gt: string, optional: boolean): g_this.T.Parameters.D<pd.SourceLocation> {
    return {
        'type': ['import', {
            'annotation': pd.getLocationInfo(1),
            'content': {
                'library': {
                    'key': imp,
                    'annotation': pd.getLocationInfo(1),
                },
                'type': r_imp(gt, 1),
            },
        }],
        'optional': optional
            ? ['yes', {
                'annotation': pd.getLocationInfo(1),
                'content': null,
            }]
            : ['no', {
                'annotation': pd.getLocationInfo(1),
                'content': null,
            }],
    }
}

// export function pLookup(
//     type: g_this.T.Global__Type__Selection<pd.SourceLocation>
// ): g_this.T.Parameters.D<pd.SourceLocation> {
//     return {
//         'type': ['lookup', {
//             'annotation': pd.getLocationInfo(1),
//             'content': {
//                 //'kind': ['non cyclic', null],
//                 'type': type
//             },
//         }]
//     }
// }
