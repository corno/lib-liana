import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/submodules/liana"
import {
    d,
    array,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    taggedUnion,
    prop,
    tu,
    grp,
    optional,
    dict,
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': pd.d({}),
        'terminal types': pd.d({
            "text": null,
        }),
        'global types': pd.d({
            "Type": globalType({}, taggedUnion({
                "terminal": component("Terminal", {}),
                "dictionary": group({
                    "key": prop(component("Terminal", {})),
                    "type": prop(component("Type", {})),
                }),
                "array": group({
                    "type": prop(component("Type", {})),
                }),
                "optional": group({
                    "type": prop(component("Type", {})),
                }),
                "tagged union": group({
                    "options": prop(dictionary(group({
                        "type": prop(component("Type", {})),
                        "constrained": prop(optional(group({
                            "type path": prop(component("Type Path", {})),
                        }))),
                    }))),
                    "default": prop(reference("Type", [tu("tagged union"), grp("options")])),
                }),
                "group": group({
                    "properties": prop(dictionary(group({
                        //"sibling dependencies": prop(dictionary(terminal())),
                        "type": prop(component("Type", {})),
                    }))),
                }),
                "component": group({
                    "context": prop(taggedUnion({
                        "local": group({}),
                        "import": group({
                            "library": prop(reference("Type Library", [grp("imports")])),
                        }),
                    })),
                    "type": prop(reference("Type Library", [grp("global types")])),
                    "arguments": prop(dictionary(group({}))),
                }),
            })),
            "Type Library": globalType({}, group({
                "imports": prop(dictionary(group({}))),
                "terminal types": prop(dictionary(group({}))),
                "global types": prop(dictionary(group({
                    "parameters": prop(dictionary(group({
                        "global type": prop(reference("Type Library", [grp("global types")])),
                    }))),
                    "type": prop(component("Type", {})),
                }))),
            })),
            "Model": globalType({}, group({
                "type library": prop(component("Type Library", {})),
                "root": prop(reference("Type Library", [grp("global types")])),
            })),
            "Terminal": globalType({}, group({
                "constrained": prop(taggedUnion({
                    "no": group({
                        "type": prop(reference("Type Library", [grp("terminal types")])),
                    }),
                    "yes": component("Reference", {}),
                })),
            })),
            "Type Path": globalType({}, group({
                "global type": prop(reference("Type Library", [grp("global types")])),
                "path": prop(array(taggedUnion({
                    "dictionary": group({}),
                    "optional": group({}),
                    "array": group({}),
                    "group": group({
                        "property": prop(reference("Type", [tu("group"), grp("properties")]))
                    }),
                    "tagged union": group({
                        "option": prop(reference("Type", [tu("tagged union"), grp("options")])),
                    }),
                })))
                // "type": prop(taggedUnion({
                //     "parameter": 
                // })),
            })),
            "Reference": globalType({}, group({
                "type path": prop(component("Type Path", {})),
                "type": prop(taggedUnion({
                    "parameter": group({
                        "parameter": prop(reference("Type Library", [grp("global types"), dict(), grp("parameters")]))
                    }),
                    "relative": group({
                        //"parameter": prop(reference("Type Library", [grp("global types"), dict(), grp("parameters")]))
                    }),
                    "tbd": group({}),
                }))
            })),
            // "Reference": type(group({s
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