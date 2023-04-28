import * as pd from 'pareto-core-data'

import * as g_liana from "../../../../../pub/dist/submodules/liana"
import {
    dictionary,
    globalTypeDeclaration,
    globalTypeDefinition,
    group,
    r,
    terminal,
    taggedUnion,
    prop,
    tempTypeSelection,
    option,
    resolvedValueReference,
    valSel,
} from "../../../../../pub/dist/submodules/liana/shorthands"

export const $: g_liana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': pd.d({}),
        'labels': {
            'atom types': pd.d({
                "text": null,
                "identifier": null
            }),
        },
        'global types': {
            'declarations': pd.d({
                //"Root": globalType({ "parameterA": typePath("Root", [])}, group({
                "Root": globalTypeDeclaration({}),
                "Sub": globalTypeDeclaration({}),
            }),
            'definitions': pd.d({
                //"Root": globalType({ "parameterA": typePath("Root", [])}, group({
                "Root": globalTypeDefinition(
                    group({
                        "a": prop(terminal("text")),
                        "b": prop(terminal("text")),
                        "c": prop(dictionary(group({}))),
                        "d": prop(resolvedValueReference(valSel("c"), tempTypeSelection("FOO"))),
                        "e": prop(group({
                            //"a": prop(ref(typeReference(['parent', null], [])],
                        })),
                        "f": prop(resolvedValueReference(valSel("d"), tempTypeSelection("FOO"))),
                        //"g": prop(taggedUnion({})],
                        "h": prop(taggedUnion({
                            "a": option(group({})),
                        })),
    
    
                    })
                ),
                "Sub": globalTypeDefinition(
                    group({
                    })
                ),
            })
        },

    },
    'root': r("Root"),
}