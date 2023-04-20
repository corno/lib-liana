import * as pd from 'pareto-core-data'

import * as g_liana from "../../../../../pub/dist/submodules/liana"
import {
    dictionary,
    globalType,
    group,
    r,
    reference,
    terminal,
    taggedUnion,
    prop,
    typeSelection,
    option,
    rResolvedValue,
} from "../../../../../pub/dist/submodules/liana/shorthands"

export const $: g_liana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': pd.d({}),
        'terminal types': pd.d({
            "text": null,
            "identifier": null,
        }),
        'global types': pd.d({
            //"Root": globalType({ "parameterA": typePath("Root", [])}, group({
            "Root": globalType({}, group({
                "a": prop(terminal("text")),
                "b": prop(terminal("text")),
                "c": prop(dictionary(group({}))),
                "d": prop(reference(rResolvedValue("c", []), typeSelection("FOO", []))),
                "e": prop(group({
                    //"a": prop(ref(typeReference(['parent', null], [])],
                })),
                "f": prop(reference(rResolvedValue("d", []), typeSelection("FOO", []))),
                //"g": prop(taggedUnion({})],
                "h": prop(taggedUnion({
                    "a": option(group({})),
                })),


            })),
            "Sub": globalType({}, group({

            })),
        }),

    },
    'root': r("Root"),
}