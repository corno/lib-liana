import * as pd from 'pareto-core-data'

import * as g_tendril from "lib-liana/dist/submodules/tendril"

import {
    constrainedDictionary,
    constrainedOption,
    dictConstraint,
    dictionary,
    globalType,
    globalTypeSelection,
    group,
    option,
    optionConstraint,
    optional,
    optionalResult,
    prop,
    resolvedValueReference,
    resultTaggedUnion,
    t_grp,
    t_tu,
    taggedUnion,
    tempTypeSelection, globalTypeResult, lookupReference, resolvedSiblingComponent
} from "lib-liana/dist/submodules/tendril/shorthands"

export const $: g_tendril.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'labels': {
        'atom types': pd.d({
            "text": null,
        }),
    },
    'global types': pd.d({
        "Global Type Selection": globalType(
            group({
                "import": prop(optional(resolvedValueReference(tempTypeSelection("Imports")))),
                "type": prop(resolvedValueReference(tempTypeSelection("Type Library", t_grp("global types")))),
            })
        ),
        "Type Library": globalType(
            group({
                "imports": prop(dictionary(group({}))),
                "global types": prop(dictionary(group({
                    "parameters": prop(dictionary(group({
                        "type": prop(taggedUnion({
                            "resolved value": option(group({
                                "type": prop(resolvedSiblingComponent("Global Type Selection")),
                                "optional": prop(taggedUnion({
                                    "no": option(group({})),
                                    "yes": option(group({})),
                                }))
                            })),
                            "lookup": option(group({
                                "type": prop(resolvedSiblingComponent("Global Type Selection")),
                                "kind": prop(taggedUnion({
                                    "non cyclic": option(group({})),
                                    "cyclic": option(group({})),
                                }))
                            })),
                        })),
                    }))),
                    "result": prop(optional(group({
                        "type": prop(resolvedSiblingComponent("Global Type Selection")),
    
                    }))),
                }))),
            })
        ),
    }),
}