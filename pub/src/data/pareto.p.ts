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

function boolean(
    optional: boolean,
    collections: pt.Array<api.TCollection>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'collections': collections,
        'type': ['boolean', {}]
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

function global(
    siblingDependencies: pt.Dictionary<null>,
    parameters: pt.Dictionary<api.TGlobalTypeParameter<TP>>,
    type: api.TLocalType<TP>,
): api.TGlobalType<TP> {
    return {
        "siblingDependencies": siblingDependencies,
        "parameters": parameters,
        "type": type
    }
}

function schema(
    globalTypes: pt.Dictionary<api.TGlobalType<TP>>,
    root: api.TLocalType<TP>,
): api.TSchema<TP> {
    return {
        'global types': globalTypes,
        'root': root,
    }
}

export const pareto = schema(
    wd({
        "Type": global(wd({}), wd({}), group(false, wa([]), wd({
            "optional": prop(wd({}), boolean(false, wa([]))),
            "collections": prop(wd({}), taggedUnion(false, wa([["list", null]]), wd({
                "dictionary": null_(false, wa([])),
                "list": null_(false, wa([])),
            }))),
            "type": prop(wd({}), taggedUnion(false, wa([]), wd({
                "null": null_(false, wa([])),
                "boolean": null_(false, wa([])),
                "reference": reference(false, wa([]), "Type", wd({})),
                "string": null_(false, wa([])),
                "group": component(false, wa([["dictionary", null]]), "Type", wd({})),
                "component": taggedUnion(false, wa([]), wd({
                    "parameter": reference(false, wa([]), "TypeParameter", wd({})),
                    "type": taggedUnion(false, wa([]), wd({
                        "sibling": group(false, wa([]), wd({
                            "namespace steps": prop(wd({}), reference(false, wa([["list", null]]), "Namespace", wd({}))),
                            "type": prop(wd({}), reference(false, wa([]), "Type", wd({}))),

                        })),
                        "import": group(false, wa([]), wd({
                            "module": prop(wd({}), reference(false, wa([]), "Interface", wd({}))),
                            "global type": prop(wd({}), reference(false, wa([]), "Type", wd({}))),
                        })),
                    })),
                })),
                "tagged union": component(false, wa([["dictionary", null]]), "Type", wd({})),
            })))
        }))),
        "Namespace": global(wd({ "Type": null }), wd({}), group(false, wa([]), wd({
            "parameters": prop(wd({}), null_(false, wa([["dictionary", null]]))),
            "namespaces": prop(wd({}), component(false, wa([["dictionary", null]]), "Namespace", wd({}))),
            "types": prop(wd({}), component(false, wa([["dictionary", null]]), "Type", wd({}))),
        }))),
        "API": global(wd({ "Namespace": null }), wd({}), group(false, wa([]), wd({
            "imports": prop(wd({}), reference(false, wa([["dictionary", null]]), "API", wd({}))),
            "namespace": prop(wd({}), component(false, wa([]), "Namespace", wd({}))),
            "interfaces": prop(wd({}), group(false, wa([["dictionary", null]]), wd({}))),
            "dependencies": prop(wd({}), group(false, wa([["dictionary", null]]), wd({

            }))),
            "function declarations": prop(wd({}), group(false, wa([["dictionary", null]]), wd({}))),
        }))),
        "Interface": global(wd({}), wd({}), group(false, wa([]), wd({
            "type": prop(wd({}), taggedUnion(false, wa([]), wd({
                "group": group(false, wa([]), wd({
                    "properties": prop(wd({}), component(false, wa([["dictionary", null]]), "Interface", wd({}))),
                })),
                "component": group(false, wa([]), wd({
                })),

            })))
        }))),
        "Module": global(wd({ "Interface": null, "API": null }), wd({}), group(false, wa([]), wd({
            "interface": prop(wd({}), component(false, wa([]), "API", wd({}))),
            "implementation": prop(wd({ "interface": null }), group(false, wa([]), wd({
                "imports": prop(wd({}), component(false, wa([["dictionary", null]]), "Interface", wd({}))),
                "public functions": prop(wd({}), group(false, wa([["dictionary", null]]), wd({}))),
                "private functions": prop(wd({}), group(false, wa([["dictionary", null]]), wd({}))),
            }))),
        }))),
        "TypeParameter": global(wd({}), wd({}), null_(false, wa([]))),
    }),
    group(false, wa([]), wd({
        "root": prop(wd({}), component(false, wa([]), "Module", wd({}))),
    }))
)