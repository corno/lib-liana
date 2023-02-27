import * as pd from 'pareto-core-data'
import {
    computed,
    string,
    reference,
    boolean,
    array, dictionary, group, member, taggedUnion, types, typeReference, typeParameter, parametrizedTypeReference, func, data, type, parametrizedType, optional, glossaryParameter, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"
import { algorithm, constructor, definitionReference, } from 'lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands'


const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),

            "GlobalType": type(group({
                "parameters": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("Parameter") })),
                "type": member(reference("LocalType")),
            })),
            "LocalType": type(taggedUnion({
                "string": reference("String"),
                "boolean": group({}),
                "dictionary": group({
                    "key": member(reference("String")),
                    "type": member(reference("LocalType")),
                }),
                "array": group({
                    "type": member(reference("LocalType")),
                }),
                "optional": group({
                    "type": member(reference("LocalType")),
                }),
                "tagged union": group({
                    "options": member(parametrizedReference("common", {}, "AnnotatedDictionary", {
                        "Annotation": typeReference("Annotation"),
                        "Type": typeReference("LocalType"),
                    })),
                    "default": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
                }),
                "group": group({
                    "properties": member(reference("Properties")),
                }),
                "component": group({
                    "type": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
                    "arguments": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("common", "Null") })),
                }),
            })),
            "Model": type(group({
                "string types": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("common", "Null") })),
                "global types": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("GlobalType") })),
                "root": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
            })),
            "Parameter": type(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
            "Property": type(group({
                "sibling dependencies": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("common", "Null") })),
                "type": member(reference("LocalType")),
            })),
            "Properties": type(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("Property") })),
            "Reference": type(group({
                "type": member(taggedUnion({
                    "parameter": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
                    "sibling": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
                    "other": group({}),
                })),
                "steps": member(array(taggedUnion({
                    "group": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
                    "tagged union": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
                    "reference": group({}),
                    "array": group({}),
                }))),
            })),
            "String": type(group({
                "constrained": member(taggedUnion({
                    "no": group({
                        "type": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
                    }),
                    "yes": reference("Reference"),
                })),
            })),
            "PossibleModel": type(optional(group({
                "model": member(reference("Model")),//should be a resolved model
                "has errors": member(boolean()),
            }))),
        }),
        'interfaces': d({
        }),
        'functions': d({
            "Resolve": func(typeReference("Model"), null, null, data(typeReference("PossibleModel"), false)),
        }),
    },
    'api': {
        'imports': d({
            // "collation": "res-pareto-collation",
            "common": "glo-pareto-common",
        }),
        'algorithms': d({
            "createResolver": algorithm(definitionReference("Resolve"), constructor(null, {
                "onError": definitionReference("common", {}, "Log"),
            })),
        }),
    },
}