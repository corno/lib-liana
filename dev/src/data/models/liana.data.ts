import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/submodules/liana"
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
    //string,
    taggedUnion,
    string,
    prop,
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: gliana.T.Model<pd.SourceLocation> = {
    'string types': d({
        "text": null,
    }),
    'global types': d({
        // "GlobalType": type(group({
        //     "parameters": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("Parameter") })),
        //     "type": member(reference("LocalType")),
        // })),
        // "LocalType": type(taggedUnion({
        //     "string": reference("String"),
        //     "boolean": group({}),
        //     "dictionary": group({
        //         "key": member(reference("String")),
        //         "type": member(reference("LocalType")),
        //     }),
        //     "array": group({
        //         "type": member(reference("LocalType")),
        //     }),
        //     "optional": group({
        //         "type": member(reference("LocalType")),
        //     }),
        //     "tagged union": group({
        //         "options": member(parametrizedReference("common", {}, "AnnotatedDictionary", {
        //             "Annotation": typeReference("Annotation"),
        //             "Type": typeReference("LocalType"),
        //         })),
        //         "default": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
        //     }),
        //     "group": group({
        //         "properties": member(reference("Properties")),
        //     }),
        //     "component": group({
        //         "type": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
        //         "arguments": member(parametrizedReference("common", {}, "AnnotatedDictionary", { "Annotation": typeReference("Annotation"), "Type": typeReference("common", "Null") })),
        //     }),
        // })),
        "Type": globalType({}, taggedUnion({
            "string": component("String", {}),
            "boolean": group({}),
            "dictionary": group({
                "key": prop(component("String", {})),
                "type": prop(component("Type", {})),
            }),
            "array": group({
                "type": prop(component("Type", {})),
            }),
            "optional": group({
                "type": prop(component("Type", {})),
            }),
            "tagged union": group({
                "options": prop(group({
                    "type": prop(component("Type", {})),
                })),
            }),
            "group": group({
                "properties": prop(dictionary(group({
                    //"sibling dependencies": prop(dictionary(string()))
                    "type": prop(component("Type", {})),
                }))),
            }),
            "component": group({
                "type": prop(string("identifier")),
                "arguments": prop(dictionary(group({}))),
            })
        })),
        "Type Library": globalType({}, group({
            "string types": prop(dictionary(string("identifier"))),
            "global types": prop(dictionary(group({
                "parameters": prop(dictionary(group({}))),
                "type": prop(component("Type", {}))
            }))),
        })),
        "Model": globalType({}, group({
            "type library": prop(component("Type Library", {})),
            "root": prop(string("identifier")),
        })),
        "String": globalType({}, group({
            "constrained": prop(taggedUnion({
                "no": group({
                    "type": prop(string("identifier"))
                }),
                "yes": component("Reference", {}),
            }))
        })),
        "Reference": globalType({}, group({
            // "type": prop(taggedUnion({
            //     "parameter": 
            // }))
        }))
        // "Reference": type(group({
        //     "type": member(taggedUnion({
        //         "parameter": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
        //         "sibling": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
        //         "other": group({}),
        //     })),
        //     "steps": member(array(taggedUnion({
        //         "group": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
        //         "tagged union": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
        //         "reference": group({}),
        //         "array": group({}),
        //     }))),
        // })),
        // "String": type(group({
        //     "constrained": member(taggedUnion({
        //         "no": group({
        //             "type": member(parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey")),
        //         }),
        //         "yes": reference("Reference"),
        //     })),
        // })),
    }),
    'root': r("Model"),
}