import * as pd from 'pareto-core-data'

import * as gliana from "../../../../../pub/dist/submodules/liana"
import {
    d,
    array,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    terminal,
    taggedUnion,
    prop,
} from "../../../../../pub/dist/submodules/liana/shorthands"

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': pd.d({}),
        'terminal types': pd.d({
            "text": null,
            "identifier": null,
        }),
        'global types': pd.d({
            "Root": globalType({ "parameterA": null}, group({
                "a": prop(terminal("text")),
                "b": prop(terminal("text")),
                "c": prop(dictionary(group({}))),
                "d": prop(reference("FOO", [])),
                "e": prop(group({
                    //"a": prop(reference(['parent', null], [])],
                })),
                "f": prop(reference("FOO", [])),
                //"g": prop(taggedUnion({})],
                "h": prop(taggedUnion({
                    "a": group({}),
                })),
    
    
            })),
            "Sub": globalType({}, group({
    
            })),
        }),

    },
    'root': r("Root"),
}