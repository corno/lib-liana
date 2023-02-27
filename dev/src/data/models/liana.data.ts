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
    taggedUnion,
    prop,
    parent,
    string,
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'string types': pd.d({
            "text": {},
        }),
        'global types': pd.d({
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
                    "options": prop(dictionary(component("Type", {}))),
                    "default": prop(reference(parent(), [])),
                }),
                "group": group({
                    "properties": prop(dictionary(group({
                        //"sibling dependencies": prop(dictionary(string()))
                        "type": prop(component("Type", {})),
                    }))),
                }),
                "component": group({
                    "context": prop(taggedUnion({
                        "local": group({}),
                        "import": group({
                            "library": prop(reference(parent(), [])),
                        }),
                    })),
                    "type": prop(reference(parent(), [])),
                    "arguments": prop(dictionary(group({}))),
                })
            })),
            "Type Library": globalType({}, group({
                "imports": prop(dictionary(group({}))),
                "string types": prop(dictionary(group({}))),
                "global types": prop(dictionary(group({
                    "parameters": prop(dictionary(group({}))),
                    "type": prop(component("Type", {}))
                }))),
            })),
            "Model": globalType({}, group({
                "type library": prop(component("Type Library", {})),
                "root": prop(reference(parent(), [])),
            })),
            "String": globalType({}, group({
                "constrained": prop(taggedUnion({
                    "no": group({
                        "type": prop(reference(parent(), []))
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
        }),

    },
    'root': r("Model"),
}