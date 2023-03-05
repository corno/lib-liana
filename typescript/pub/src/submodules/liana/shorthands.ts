import * as pd from 'pareto-core-data'
import * as pl from 'pareto-core-lib'

import * as gcommon from 'glo-pareto-common'

import * as gglo from "./definition/glossary";

const a = pd.a

type RawDictionary<T> = { [key: string]: T }

function r_imp(name: string, annotation: pd.SourceLocation): gcommon.T.AnnotatedKey<pd.SourceLocation> {
    return {
        key: name,
        annotation: annotation
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
    const li = pd.getLocationInfo(2)
    return d_imp($, li)
}

export function r(name: string): gcommon.T.AnnotatedKey<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return r_imp(name, li)
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
    globalType: string,
    path: gglo.T.Reference.path.A<pd.SourceLocation>[],
    annotation: pd.SourceLocation
): gglo.T.Terminal<pd.SourceLocation> {
    return {
        'constrained': ['yes', referenceX(globalType, path, annotation)],
    }
}

export function constrainedDictionary(
    globalType: string,
    path: gglo.T.Reference.path.A<pd.SourceLocation>[],
    type: gglo.T.Type<pd.SourceLocation>
): gglo.T.Type<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return ['dictionary', {
        // 'annotation': li,
        'key': constrainedTerminal(globalType, path, li),
        'type': type
    }]
}

export function dictionary(type: gglo.T.Type<pd.SourceLocation>): gglo.T.Type<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)

    return ['dictionary', {
        // 'annotation': li,
        'key': {
            'constrained': ['no', {
                'type': r_imp("identifier", li)
            }]
        },
        'type': type,
    }]
}

export function globalType(parameters: RawDictionary<null>, type: gglo.T.Type<pd.SourceLocation>): gglo.T.Type__Library.global__types.D<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return {
        'type': type,
        'parameters': pd.d(parameters)
        // 'parameters': d_mappedimp(parameters, li, ($) => {
        //     return r_imp($, li)
        // })
    }
}

export function prop(type: gglo.T.Type<pd.SourceLocation>): gglo.T.Type.group.properties.D<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return {
        //'sibling dependencies': d_imp({}, li),
        'type': type,
    }
}

export function group(properties: RawDictionary<gglo.T.Type.group.properties.D<pd.SourceLocation>>): gglo.T.Type<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return ['group', {
        'properties': pd.d(properties)
    }]
}

export function taggedUnion(options: RawDictionary<gglo.T.Type<pd.SourceLocation>>): gglo.T.Type<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
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
            'default': {
                'key': $,
                'annotation': li
            }
        }]
    })
}

export function terminal(type: string): gglo.T.Type<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return ['terminal', {
        'constrained': ['no', {
            'type': r_imp(type, li),
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

export function grp(prop: string): gglo.T.Reference.path.A<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return ['group', {
        'property': {
            'key': prop,
            'annotation': li,
        },
    }]
}

export function dict(): gglo.T.Reference.path.A<pd.SourceLocation> {
    return ['dictionary', null]
}

export function arr(): gglo.T.Reference.path.A<pd.SourceLocation> {
    return ['array', null]
}

export function tu(opt: string): gglo.T.Reference.path.A<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return ['tagged union', {
        'option': {
            'key': opt,
            'annotation': li,
        },
    }]
}

function referenceX(
    globalType: string,
    path: gglo.T.Reference.path.A<pd.SourceLocation>[],
    annotation: pd.SourceLocation,
): gglo.T.Reference<pd.SourceLocation> {
    return {
        'global type': {
            'key': globalType,
            'annotation': annotation,
        },
        'path': a(path),
    }
    // return {
    //     'type': pl.cc($, ($) => {
    //         switch ($[0]) {
    //             case 'parameter':
    //                 return pl.cc($[1], ($) => {
    //                     return ['parameter', r_imp($, annotation)]
    //                 })
    //             case 'parent':
    //                 return pl.cc($[1], ($) => {
    //                     return ['other', null]
    //                 })
    //             case 'self':
    //                 return pl.cc($[1], ($) => {
    //                     return ['other', null]
    //                 })
    //             case 'sibling':
    //                 return pl.cc($[1], ($) => {
    //                     return ['sibling', r_imp($, annotation)]
    //                 })
    //             default: return pl.au($[0])
    //         }
    //     }),
    //     'steps': pd.a(steps).map(($) => {
    //         switch ($[0]) {
    //             case 'array':
    //                 return pl.cc($[1], ($) => {
    //                     return ['array', null]
    //                 })
    //             case 'group':
    //                 return pl.cc($[1], ($) => {
    //                     return ['group', r_imp($, annotation)]
    //                 })
    //             case 'reference':
    //                 return pl.cc($[1], ($) => {
    //                     return ['reference', null]
    //                 })
    //             case 'tagged union':
    //                 return pl.cc($[1], ($) => {
    //                     return ['tagged union', r_imp($, annotation)]
    //                 })
    //             default: return pl.au($[0])
    //         }
    //     }),
    // }

}

export function reference(
    globalType: string,
    path: gglo.T.Reference.path.A<pd.SourceLocation>[],
): gglo.T.Type<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return ['terminal', {
        'constrained': ['yes', referenceX(globalType, path, li)],
    }]
}

export function component(type: string, args: RawDictionary<null>): gglo.T.Type<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return ['component', {
        'context': ['local', null],
        'type': {
            'key': type,
            'annotation': li,
        },
        'arguments': pd.d(args)
    }]
}
export function importedComponent(library: string, type: string, args: RawDictionary<null>): gglo.T.Type<pd.SourceLocation> {
    const li = pd.getLocationInfo(2)
    return ['component', {
        'context': ['import', {
            'library': {
                'key': library,
                'annotation': li,
            }
        }],
        'type': {
            'key': type,
            'annotation': li,
        },
        'arguments': pd.d(args)
    }]
}