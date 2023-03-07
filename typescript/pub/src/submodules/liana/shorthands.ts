import * as pd from 'pareto-core-data'
import * as pl from 'pareto-core-lib'

import * as gcommon from 'glo-pareto-common'

import * as gglo from "./definition/glossary";

const a = pd.a

type RawDictionary<T> = { [key: string]: T }

function r_imp(name: string, depth: number): gcommon.T.AnnotatedKey<pd.SourceLocation> {
    return {
        key: name,
        annotation: pd.getLocationInfo(depth + 1),
    }
}

function d_imp<T>($: RawDictionary<T>, annotation: pd.SourceLocation): gcommon.T.AnnotatedDictionary<pd.SourceLocation, T> {
    return {
        'annotation': annotation,
        'dictionary': pd.d($),
    }
}

function d_mappedimp<T, RT>($: RawDictionary<T>, annotation: pd.SourceLocation, cb: ($: T) => RT): gcommon.T.AnnotatedDictionary<pd.SourceLocation, RT> {
    return {
        'annotation': annotation,
        'dictionary': pd.d($).map(cb),
    }
}

export function d<T>($: RawDictionary<T>) {
    const li = pd.getLocationInfo(1)
    return d_imp($, li)
}

export function r(name: string): gcommon.T.AnnotatedKey<pd.SourceLocation> {
    return r_imp(name, 1)
}

export function array(type: gglo.T.Type<pd.SourceLocation>): gglo.T.Type<pd.SourceLocation> {
    return ['array', {
        'type': type
    }]
}

export function optional(type: gglo.T.Type<pd.SourceLocation>): gglo.T.Type<pd.SourceLocation> {
    return ['optional', {
        'type': type
    }]
}

export function constrainedTerminal(
    typePath: gglo.T.Type__Path<pd.SourceLocation>,
    type: gglo.T.Reference._ltype<pd.SourceLocation>,
): gglo.T.Terminal<pd.SourceLocation> {
    return {
        'constrained': ['yes', referenceX(typePath, type)],
    }
}

export function constrainedDictionary(
    typePath: gglo.T.Type__Path<pd.SourceLocation>,
    refType: gglo.T.Reference._ltype<pd.SourceLocation>,
    type: gglo.T.Type<pd.SourceLocation>
): gglo.T.Type<pd.SourceLocation> {
    return ['dictionary', {
        'key': constrainedTerminal(typePath, refType),
        'type': type
    }]
}

export function dictionary(type: gglo.T.Type<pd.SourceLocation>): gglo.T.Type<pd.SourceLocation> {
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

export function globalType(parameters: RawDictionary<gglo.T.Type__Library.global__types.D.parameters.D<pd.SourceLocation>>, type: gglo.T.Type<pd.SourceLocation>): gglo.T.Type__Library.global__types.D<pd.SourceLocation> {
    return {
        'type': type,
        'parameters': pd.d(parameters)
        // 'parameters': d_mappedimp(parameters, li, ($) => {
        //     return r_imp($, li)
        // })
    }
}

export function prop(type: gglo.T.Type<pd.SourceLocation>): gglo.T.Type.group.properties.D<pd.SourceLocation> {
    return {
        //'sibling dependencies': d_imp({}, li),
        'type': type,
    }
}

export function group(properties: RawDictionary<gglo.T.Type.group.properties.D<pd.SourceLocation>>): gglo.T.Type<pd.SourceLocation> {
    return ['group', {
        'properties': pd.d(properties)
    }]
}

export function option(type: gglo.T.Type<pd.SourceLocation>, constrained?: gglo.T.Type__Path<pd.SourceLocation>): gglo.T.Type.tagged__union.options.D<pd.SourceLocation> {
    return {
        'constrained': constrained === undefined
            ? [false]
            : [true, {
                'type path': constrained
            }],
        'type': type,
    }
}

export function taggedUnion(options: RawDictionary<gglo.T.Type.tagged__union.options.D<pd.SourceLocation>>): gglo.T.Type<pd.SourceLocation> {
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
            'default': r_imp($, 1)
        }]
    })
}

export function terminal(type: string): gglo.T.Type<pd.SourceLocation> {
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

export function grp(prop: string): gglo.T.Type__Path.path.A<pd.SourceLocation> {
    return ['group', {
        'property': r_imp(prop, 1),
    }]
}

export function dict(): gglo.T.Type__Path.path.A<pd.SourceLocation> {
    return ['dictionary', null]
}

export function arr(): gglo.T.Type__Path.path.A<pd.SourceLocation> {
    return ['array', null]
}

export function tu(opt: string): gglo.T.Type__Path.path.A<pd.SourceLocation> {
    return ['tagged union', {
        'option': r_imp(opt, 1),
    }]
}

export function typePath(
    globalType: string,
    path: gglo.T.Type__Path.path.A<pd.SourceLocation>[],
): gglo.T.Type__Path<pd.SourceLocation> {
    return {
        'global type': r_imp(globalType, 1),
        'path': a(path),
    }
}

export function parameter(param: string): gglo.T.Reference._ltype<pd.SourceLocation> {
    return ['parameter', {
        'parameter': r_imp(param, 1),
    }]
}

export function relative(): gglo.T.Reference._ltype<pd.SourceLocation> {
    return ['relative', null]
}

export function tbd(): gglo.T.Reference._ltype<pd.SourceLocation> {
    return ['tbd', null]
}

function referenceX(
    tp: gglo.T.Type__Path<pd.SourceLocation>,
    type: gglo.T.Reference._ltype<pd.SourceLocation>,
): gglo.T.Reference<pd.SourceLocation> {
    return {
        'type path': tp,
        'type': type,
    }
}

export function reference(
    typePath: gglo.T.Type__Path<pd.SourceLocation>,
    type: gglo.T.Reference._ltype<pd.SourceLocation>,
): gglo.T.Type<pd.SourceLocation> {
    return ['terminal', {
        'constrained': ['yes', referenceX(typePath, type)],
    }]
}

export function component(type: string, args: RawDictionary<null>): gglo.T.Type<pd.SourceLocation> {
    return ['component', {
        'context': ['local', null],
        'type': r_imp(type, 1),
        'arguments': pd.d(args)
    }]
}
export function importedComponent(library: string, type: string, args: RawDictionary<null>): gglo.T.Type<pd.SourceLocation> {
    return ['component', {
        'context': ['import', {
            'library': r_imp(library, 1)
        }],
        'type': r_imp(type, 1),
        'arguments': pd.d(args)
    }]
}