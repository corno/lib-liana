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
    return ['array', {
        'type': type,
        'constraint': [false]
    }]
}

export function optional(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return ['optional', {
        'type': type
    }]
}

export function pAllSiblings(type: g_this.T.Type__Selection<pd.SourceLocation>): g_this.T.Parameters.D<pd.SourceLocation> {
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
    type: g_this.T.Type__Selection<pd.SourceLocation>
): g_this.T.Parameters.D<pd.SourceLocation> {
    return {
        'type': ['siblings', {
            'kind': ['non cyclic', null],
            'type': type
        }]
    }
}

export function aResolvedValue(
    start: string,
    tail: null[],
): g_this.T.Type.component.arguments.D<pd.SourceLocation> {
    return {
        'type': ['resolved value', {
            'start': {
                'annotation': pd.getLocationInfo(1),
                'key': start,
            },
            'tail': pd.a([])
        }],
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
): g_this.T.Type.component.arguments.D<pd.SourceLocation> {
    return {
        'type': ['containing dictionary', sel],
    }
}

function constrainedTerminal(
    ref: g_this.T.Reference<pd.SourceLocation>,
): g_this.T.Terminal<pd.SourceLocation> {
    return {
        'constrained': ['yes', ref],
    }
}

export function rResolvedValue(
    start: string,
    tail: null[],
): g_this.T.Reference.referencee__type<pd.SourceLocation> {
    return ['resolved value', {
        'selection': {
            'start': {
                'annotation': pd.getLocationInfo(1),
                'key': start,
            },
            'tail': pd.a([])
        },
    }]
}

export function rSibling(
    sel: g_this.T.Containing__Dictionary__Selection<pd.SourceLocation>,
): g_this.T.Reference.referencee__type<pd.SourceLocation> {
    return ['sibling', {
        'selection': sel,
    }]
}

//doesn't do anything
export function prop(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return type
}

export function reference(
    type: g_this.T.Reference.referencee__type<pd.SourceLocation>,
    typePath: g_this.T.Type__Selection<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return ['terminal', constrainedTerminal({
        'temp type path': typePath,
        'referencee type': type
    })]
}

export function constrainedDictionary(
    ctype: g_this.T.Reference.referencee__type<pd.SourceLocation>,
    typePath: g_this.T.Type__Selection<pd.SourceLocation>,
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return ['dictionary', {
        'key': constrainedTerminal({
            'temp type path': typePath,
            'referencee type': ctype,
        }),
        'type': type,
        'autofill': pd.a([]),
    }]
}

export function dictionary(type: g_this.T.Type<pd.SourceLocation>, autofill?: g_this.T.Type.dictionary.autofill.A<pd.SourceLocation>[]): g_this.T.Type<pd.SourceLocation> {
    return ['dictionary', {
        // 'annotation': li,
        'key': {
            'constrained': ['no', {
                'type': r_imp("identifier", 1)
            }]
        },
        'type': type,
        'autofill': pd.a(autofill === undefined ? [] : autofill),
    }]
}

export function result(
    type: string,
    selection: g_this.T.Selection<pd.SourceLocation>,
): g_this.T.Type__Library.global__types.D.result.O<pd.SourceLocation> {
    return {
        'type': {
            'annotation': pd.getLocationInfo(1),
            'key': type,
        },
        'selection': selection,
    }
}

export function globalType(
    parameters: RawDictionary<g_this.T.Parameters.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>,
    result?: g_this.T.Type__Library.global__types.D.result.O<pd.SourceLocation>,
): g_this.T.Type__Library.global__types.D<pd.SourceLocation> {
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
        'type': type,
        'parameters': pd.d(parameters),
        'variables': pd.d(variables),
        'result': result === undefined
            ? [false]
            : [true, result],
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
    return ['group', {
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

export function option(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type.tagged__union.options.D<pd.SourceLocation> {
    return {
        'constraint': [false],
        'type': type,
    }
}

export function constrainedOption(constraint: [g_this.T.Type__Selection<pd.SourceLocation>, string], type: g_this.T.Type<pd.SourceLocation>,): g_this.T.Type.tagged__union.options.D<pd.SourceLocation> {
    return {
        'constraint': [true, {
            'type': constraint[0],
            'option': {
                'annotation': pd.getLocationInfo(1),
                'key': constraint[1]
            }
        }],
        'type': type,
    }
}

export function taggedUnion(options: RawDictionary<g_this.T.Type.tagged__union.options.D<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {
    let firstKey: null | string = null
    pd.d(options).__mapWithKey(($, key) => {
        if (firstKey === null) {
            firstKey = key
        }
    })
    if (firstKey === null) {
        firstKey = "--NO OPTIONS--"
    }
    return pl.cc(firstKey, ($) => {

        return ['tagged union', {
            'options': pd.d(options),
            'default': r_imp($, 1),
            'constraint': [false]
        }]
    })
}

export function terminal(type: string): g_this.T.Type<pd.SourceLocation> {
    return ['terminal', {
        'constrained': ['no', {
            'type': r_imp(type, 1),
        }],
    }]
}

export function grp(prop: string): g_this.T.Type__Selection.tail.A<pd.SourceLocation> {
    return ['group', {
        'annotation': pd.getLocationInfo(1),
        'type': {
            'property': r_imp(prop, 1),
        },
    }]
}

export function sgrp(prop: string, tail: g_this.T.Selection<pd.SourceLocation>): g_this.T.Selection<pd.SourceLocation> {
    return ['group', {
        'property': {
            'annotation': pd.getLocationInfo(1),
            'key': prop,
        },
        'selection': tail
    }]
}

export function sarray(notEmpty: g_this.T.Selection<pd.SourceLocation>, empty: g_this.T.Selection<pd.SourceLocation>): g_this.T.Selection<pd.SourceLocation> {
    return ['array', {
        'empty': empty,
        'not empty': notEmpty,
    }]
}
export function sref(): g_this.T.Selection<pd.SourceLocation> {
    return ['reference', null]
}
export function scomponent($: string): g_this.T.Selection<pd.SourceLocation> {
    return ['component', {
        'type name': $
    }]
}

export function stu(options: RawDictionary<g_this.T.Selection<pd.SourceLocation>>): g_this.T.Selection<pd.SourceLocation> {
    return ['tagged union', pd.d(options)]
}

export function dict(): g_this.T.Type__Selection.tail.A<pd.SourceLocation> {
    return ['dictionary', {
        'annotation': pd.getLocationInfo(1),
        'type': null,
    }]
}

export function arr(): g_this.T.Type__Selection.tail.A<pd.SourceLocation> {
    return ['array', {
        'annotation': pd.getLocationInfo(1),
        'type': null,
    }]
}

export function tu(opt: string): g_this.T.Type__Selection.tail.A<pd.SourceLocation> {
    return ['tagged union', {
        'annotation': pd.getLocationInfo(1),
        'type': {
            'option': r_imp(opt, 1),
        },
    }]
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
    globalType: string,
): g_this.T.Global__Type__Selection<pd.SourceLocation> {
    return {
        'import': [false],
        'type': r_imp(globalType, 1),
    }
}

export function typeSelection(
    globalType: string,
    path: g_this.T.Type__Selection.tail.A<pd.SourceLocation>[],
): g_this.T.Type__Selection<pd.SourceLocation> {
    return {
        'global type': {
            'import': [false],
            'type': r_imp(globalType, 1),
        },
        'tail': a(path),
    }
}
export function externalTypeSelection(
    imp: string,
    globalType: string,
    path: g_this.T.Type__Selection.tail.A<pd.SourceLocation>[],
): g_this.T.Type__Selection<pd.SourceLocation> {
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

export function tuStep(option: string): g_this.T.Value__Selection.tail.A<pd.SourceLocation> {
    return ['tagged union', {
        'option': {
            'annotation': pd.getLocationInfo(1),
            'key': option
        }
    }]
}

export function component(type: string, args: RawDictionary<g_this.T.Type.component.arguments.D<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {
    return ['component', {
        'context': ['local', null],
        'type': r_imp(type, 1),
        'arguments': pd.d(args)
    }]
}
export function importedComponent(library: string, type: string, args: RawDictionary<g_this.T.Type.component.arguments.D<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {
    return ['component', {
        'context': ['import', {
            'library': r_imp(library, 1)
        }],
        'type': r_imp(type, 1),
        'arguments': pd.d(args)
    }]
}