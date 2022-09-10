import * as pt from "pareto-core-types"
import * as pw from "pareto-core-raw"

import * as api from "../interface"

export type TP = undefined | string

const wd = pw.wrapRawDictionary
const wa = pw.wrapRawArray


function component(
    optional: boolean,
    name: string,
    args: pt.Dictionary<api.TLocalType<TP>>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
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
    name: string,
    args: pt.Dictionary<api.TLocalType<TP>>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'type': ['string', {
            'reference': name,
        }]
    }
}

function group(
    optional: boolean,
    properties: pt.Dictionary<api.TProperty<TP>>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'type': ['group', {
            'properties': properties
        }]
    }
}

function dictionary(
    optional: boolean,
    type: api.TLocalType<TP>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'type': ['dictionary', type]
    }
}

function list(
    optional: boolean,
    type: api.TLocalType<TP>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'type': ['list', type]
    }
}


function null_(
    optional: boolean,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
        'type': ['null', {}]
    }
}


function taggedUnion(
    optional: boolean,
    options: pt.Dictionary<api.TLocalType<TP>>,
): api.TLocalType<TP> {
    return {
        'annotation': undefined,
        'optional': optional,
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
        'global types':globalTypes,
        'root': root,
    }
}

export const pareto = schema(
    wd({
        "Interface": group(false, wd({
            "type": prop(wd({}), taggedUnion(false, wd({
                "group": group(false, wd({
                    "properties": prop(wd({}), dictionary(false, component(false, "Interface", wd({})))),
                })),
                "component": group(false, wd({
                })),

            })))
        })),
        "Module": group(false, wd({
            "interface": prop(wd({}), group(false, wd({
                "imports": prop(wd({}), dictionary(false, reference(false, "Module", wd({})))),
                "namespace": prop(wd({}), component(false, "Namespace", wd({}))),
                "interfaces": prop(wd({}), dictionary(false, group(false, wd({})))),
                "dependencies": prop(wd({}), dictionary(false, group(false, wd({

                })))),
                "function declarations": prop(wd({}), dictionary(false, group(false, wd({})))),
            }))),
            "implementation": prop(wd({ "interface": null }), group(false, wd({
                "public functions": prop(wd({}), dictionary(false, group(false, wd({})))),
                "private functions": prop(wd({}), dictionary(false, group(false, wd({})))),
            }))),
        })),
        "Namespace": group(false, wd({
            "parameters": prop(wd({}), dictionary(false, null_(false))),
            "namespaces": prop(wd({}), dictionary(false, component(false, "Namespace", wd({})))),
            "types": prop(wd({}), dictionary(false, component(false, "Type", wd({})))),
        })),
        "Type": group(false, wd({
            "collections": prop(wd({}), list(false, taggedUnion(false, wd({
                "dictionary": null_(false),
                "list": null_(false),
            })))),
            "type": prop(wd({}), taggedUnion(false, wd({
                "null": null_(false),
                "boolean": null_(false),
                "string": null_(false),
                "undefined": null_(false),
                "group": dictionary(false, component(false, "Type", wd({}))),
                "component": group(false, wd({
                })),
                "taggedUnion": dictionary(false, component(false, "Type", wd({}))),
            })))
        }))
    }),
    group(false, wd({
        "imports": prop(wd({}), dictionary(false, component(false, "Module", wd({})))),
        "root": prop(wd({}), component(false, "Module", wd({}))),
    }))
)