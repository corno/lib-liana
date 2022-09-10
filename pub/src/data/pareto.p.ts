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
    properties: pt.Dictionary<api.TLocalType<TP>>,
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

export const pareto: api.TSchema<TP> = {
    'global types': wd({
        "Interface": group(false, wd({
            "type": taggedUnion(false, wd({
                "group": group(false, wd({
                    "properties": dictionary(false, component(false, "Interface", wd({}))),
                })),
                "component": group(false, wd({
                })),

            }))
        })),
        "Module": group(false, wd({
            "interface": group(false, wd({
                "imports": dictionary(false, reference(false, "Module", wd({}))),
                "namespace": component(false, "Namespace", wd({})),
                "interfaces": dictionary(false, group(false, wd({}))),
                "dependencies": dictionary(false, group(false, wd({

                }))),
                "function declarations": dictionary(false, group(false, wd({}))),
            })),
            "implementation": group(false, wd({
                "public functions": dictionary(false, group(false, wd({}))),
                "private functions": dictionary(false, group(false, wd({}))),
            })),
        })),
        "Namespace": group(false, wd({
            "parameters": dictionary(false, null_(false)),
            "namespaces": dictionary(false, component(false, "Namespace", wd({}))),
            "types": dictionary(false, component(false, "Type", wd({}))),
        })),
        "Type": group(false, wd({
            "collections": list(false, taggedUnion(false, wd({
                "dictionary": null_(false),
                "list": null_(false),
            }))),
            "type": taggedUnion(false,  wd({
                "null": null_(false),
                "boolean": null_(false),
                "string": null_(false),
                "undefined": null_(false),
                "group": dictionary(false, component(false, "Type", wd({}))),
                "component": group(false, wd({
                })),
                "taggedUnion": dictionary(false, component(false, "Type", wd({}))),
            }))
        }))
    }),
    'root': group(false, wd({
        "imports": dictionary(false, component(false, "Module", wd({}))),
        "root": component(false, "Module", wd({})),
    }))
}