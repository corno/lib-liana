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

export function constrainedTerminal(
    typePath: g_this.T.Type__Path<pd.SourceLocation>,
    type: g_this.T.Reference._ltype<pd.SourceLocation>,
): g_this.T.Terminal<pd.SourceLocation> {
    return {
        'constrained': ['yes', referenceX(typePath, type)],
    }
}

export function constrainedDictionary(
    typePath: g_this.T.Type__Path<pd.SourceLocation>,
    refType: g_this.T.Reference._ltype<pd.SourceLocation>,
    type: g_this.T.Type<pd.SourceLocation>
): g_this.T.Type<pd.SourceLocation> {
    return ['dictionary', {
        'key': constrainedTerminal(typePath, refType),
        'type': type
    }]
}

export function dictionary(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type<pd.SourceLocation> {
    return ['dictionary', {
        // 'annotation': li,
        'key': {
            'constrained': ['no', {
                'type': r_imp("identifier", 1)
            }]
        },
        'type': type,
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
    parameters: RawDictionary<g_this.T.Type__Library.global__types.D.parameters.D<pd.SourceLocation>>,
    type: g_this.T.Type<pd.SourceLocation>,
    result?: g_this.T.Type__Library.global__types.D.result.O<pd.SourceLocation>,
): g_this.T.Type__Library.global__types.D<pd.SourceLocation> {
    return {
        'type': type,
        'parameters': pd.d(parameters),
        // 'parameters': d_mappedimp(parameters, li, ($) => {
        //     return r_imp($, li)
        // })
        'result': result === undefined
            ? [false]
            : [true, result],
    }
}

export function prop(type: g_this.T.Type<pd.SourceLocation>): g_this.T.Type.group.properties.D<pd.SourceLocation> {
    return {
        //'sibling dependencies': d_imp({}, li),
        'type': type,
    }
}

export function group(properties: RawDictionary<g_this.T.Type.group.properties.D<pd.SourceLocation>>): g_this.T.Type<pd.SourceLocation> {
    return ['group', {
        'properties': pd.d(properties)
    }]
}

export function option(type: g_this.T.Type<pd.SourceLocation>, constrained?: g_this.T.Type__Path<pd.SourceLocation>): g_this.T.Type.tagged__union.options.D<pd.SourceLocation> {
    return {
        'constraint': constrained === undefined
            ? [false]
            : [true, {
                'type path': constrained
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
            // 'options': d_mappedimp(options, li, ($) => {
            //     return $
            // }),
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

// export type ReferenceType =
//     | ['sibling', string]
//     | ['parent', null]
//     | ['parameter', string]
//     | ['self', null]

// export type Step =
//     | ['group', string]
//     | ['tagged union', string]
//     | ['reference', null]
//     | ['array', null]

// export function self(): ReferenceType {
//     return ['self', null]
// }
// export function parent(): ReferenceType {
//     return ['parent', null]
// }
// export function sibling(name: string): ReferenceType {
//     return ['sibling', name]
// }
// export function parameter(name: string): ReferenceType {
//     return ['parameter', name]
// }

export function grp(prop: string): g_this.T.Type__Path.path.A<pd.SourceLocation> {
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

export function dict(): g_this.T.Type__Path.path.A<pd.SourceLocation> {
    return ['dictionary', {
        'annotation': pd.getLocationInfo(1),
        'type': null,
    }]
}

export function arr(): g_this.T.Type__Path.path.A<pd.SourceLocation> {
    return ['array', {
        'annotation': pd.getLocationInfo(1),
        'type': null,
    }]
}

export function tu(opt: string): g_this.T.Type__Path.path.A<pd.SourceLocation> {
    return ['tagged union', {
        'annotation': pd.getLocationInfo(1),
        'type': {
            'option': r_imp(opt, 1),
        },
    }]
}

export function typePath(
    globalType: string,
    path: g_this.T.Type__Path.path.A<pd.SourceLocation>[],
): g_this.T.Type__Path<pd.SourceLocation> {
    return {
        'global type': r_imp(globalType, 1),
        'path': a(path),
    }
}

export function parameter(param: string): g_this.T.Reference._ltype<pd.SourceLocation> {
    return ['parameter', {
        'parameter': r_imp(param, 1),
    }]
}

export function directParameter(param: string): g_this.T.Type__Library.global__types.D.parameters.D<pd.SourceLocation> {
    return {
        'type': ['direct', {
            'type': {
                'key': param,
                'annotation': pd.getLocationInfo(1),
            },
        }]
    }
}

export function delayedParameter(param: string): g_this.T.Type__Library.global__types.D.parameters.D<pd.SourceLocation> {
    return {
        'type': ['delayed', {
            'type': {
                'key': param,
                'annotation': pd.getLocationInfo(1),
            },
        }]
    }
}

export function relative(): g_this.T.Reference._ltype<pd.SourceLocation> {
    return ['relative', null]
}

export function tbd(): g_this.T.Reference._ltype<pd.SourceLocation> {
    return ['tbd', null]
}

function referenceX(
    tp: g_this.T.Type__Path<pd.SourceLocation>,
    type: g_this.T.Reference._ltype<pd.SourceLocation>,
): g_this.T.Reference<pd.SourceLocation> {
    return {
        'type path': tp,
        'type': type,
    }
}

export function reference(
    typePath: g_this.T.Type__Path<pd.SourceLocation>,
    type: g_this.T.Reference._ltype<pd.SourceLocation>,
): g_this.T.Type<pd.SourceLocation> {
    return ['terminal', {
        'constrained': ['yes', referenceX(typePath, type)],
    }]
}

export function argument(delayed: boolean): g_this.T.Type.component.arguments.D<pd.SourceLocation> {
    return {
        'type': delayed
            ? ['delayed', null]
            : ['direct', null]
    }
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