import * as pd from 'pareto-core-data'

import * as gliana from "../../../../../pub/dist/submodules/liana"
import {
    d,
    array,
    boolean,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    string,
    taggedUnion,
    prop,
} from "../../../../../pub/dist/submodules/liana/shorthands"

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': pd.d({}),
        'string types': pd.d({
            "text": null,
            "identifier": null,
        }),
        'global types': pd.d({
            "Root": globalType({ "parameterA": null}, group({
                "a": prop(string("text")),
                "b": prop(string("text")),
                "c": prop(dictionary(group({}))),
                "d": prop(reference(['sibling', "c"], [])),
                "e": prop(group({
                    //"a": prop(reference(['parent', null], [])],
                })),
                "f": prop(reference(['parameter', "parameterA"], [])),
                //"g": prop(taggedUnion({})],
                "h": prop(taggedUnion({
                    "a": group({})
                })),
    
    
            })),
            "Sub": globalType({}, group({
    
            }))
        }),

    },
    'root': r("Root"),
}