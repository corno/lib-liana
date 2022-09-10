import * as pt from "pareto-core-types"
import * as pw from "pareto-core-raw"

import * as api from "../interface"

export type TP = undefined | string

const wd = pw.wrapRawDictionary
const wa = pw.wrapRawArray


function component(
    optional: boolean,
    collections: pt.Array<api.TCollection>,
    name: string,
    args: pt.Dictionary<api.TLocalType<TP>>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'collections': collections,
        'type': ['component', {
            'type': ['type', {
                'global type': {
                    'name': name,
                    'annotation': undefined,
                },
                'arguments': args
            }]
        }]
    }
}


function reference(
    optional: boolean,
    collections: pt.Array<api.TCollection>,
    name: string,
    args: pt.Dictionary<api.TLocalType<TP>>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'collections': collections,
        'type': ['string', {
            'reference': name,
        }]
    }
}

function group(
    optional: boolean,
    collections: pt.Array<api.TCollection>,
    properties: pt.Dictionary<api.TProperty<TP>>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'collections': collections,

        'type': ['group', {
            'properties': properties
        }]
    }
}

// function dictionary(
//     optional: boolean,
//     type: api.TLocalType<TP>,
// ): api.TLocalType<TP> {
//     return {
//         'annotation': undefined,
//         'optional': optional,   
//              'collections': wa([]),

//         'type': ['dictionary', type]
//     }
// }

// function list(
//     optional: boolean,
//     type: api.TLocalType<TP>,
// ): api.TLocalType<TP> {
//     return {
//         'annotation': undefined,
//         'optional': optional,
//         'type': ['list', type]
//     }
// }


function null_(
    optional: boolean,
    collections: pt.Array<api.TCollection>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'collections': collections,
        'type': ['null', {}]
    }
}


function taggedUnion(
    optional: boolean,
    collections: pt.Array<api.TCollection>,
    options: pt.Dictionary<api.TLocalType<TP>>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'collections': collections,
        'type': ['tagged union', {
            'options': options,
        }]
    }
}

function prop(
    siblingDependencies: pt.Dictionary<null>,
    type: api.TLocalType<TP>
): api.TProperty<TP> {
    return {
        "sibling dependencies": siblingDependencies,
        "type": type
    }
}

function schema(
    globalTypes: pt.Dictionary<api.TLocalType<TP>>,
    root: api.TLocalType<TP>,
): api.TSchema<TP> {
    return {
        'global types': globalTypes,
        'root': root,
    }
}

export const pareto = schema(
    wd({
        "Interface": group(false, wa([]), wd({
            "type": prop(wd({}), taggedUnion(false, wa([]), wd({
                "group": group(false, wa([]), wd({
                    "properties": prop(wd({}), component(false, wa([["dictionary", null]]), "Interface", wd({}))),
                })),
                "component": group(false, wa([]), wd({
                })),

            })))
        })),
        "Module": group(false, wa([]), wd({
            "interface": prop(wd({}), group(false, wa([]), wd({
                "imports": prop(wd({}), reference(false, wa([["dictionary", null]]), "Module", wd({}))),
                "namespace": prop(wd({}), component(false, wa([]), "Namespace", wd({}))),
                "interfaces": prop(wd({}), group(false, wa([["dictionary", null]]), wd({}))),
                "dependencies": prop(wd({}), group(false, wa([["dictionary", null]]), wd({

                }))),
                "function declarations": prop(wd({}), group(false, wa([["dictionary", null]]), wd({}))),
            }))),
            "implementation": prop(wd({ "interface": null }), group(false, wa([]), wd({
                "public functions": prop(wd({}), group(false, wa([["dictionary", null]]), wd({}))),
                "private functions": prop(wd({}), group(false, wa([["dictionary", null]]), wd({}))),
            }))),
        })),
        "Namespace": group(false, wa([]), wd({
            "parameters": prop(wd({}), null_(false, wa([["dictionary", null]]))),
            "namespaces": prop(wd({}),  component(false, wa([["dictionary", null]]), "Namespace", wd({}))),
            "types": prop(wd({}), component(false, wa([["dictionary", null]]), "Type", wd({}))),
        })),
        "Type": group(false, wa([]), wd({
            "collections": prop(wd({}),  taggedUnion(false, wa([["list", null]]), wd({
                "dictionary": null_(false, wa([])),
                "list": null_(false, wa([])),
            }))),
            "type": prop(wd({}), taggedUnion(false, wa([]), wd({
                "null": null_(false, wa([])),
                "boolean": null_(false, wa([])),
                "string": null_(false, wa([])),
                "undefined": null_(false, wa([])),
                "group":  component(false, wa([["dictionary", null]]), "Type", wd({})),
                "component": group(false, wa([]), wd({
                })),
                "taggedUnion": component(false, wa([["dictionary", null]]), "Type", wd({})),
            })))
        }))
    }),
    group(false, wa([]), wd({
        "imports": prop(wd({}), component(false, wa([["dictionary", null]]), "Module", wd({}))),
        "root": prop(wd({}), component(false, wa([]), "Module", wd({}))),
    }))
)