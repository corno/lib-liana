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
    option,
    typePath,
    tbd,
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': pd.d({}),
        'terminal types': pd.d({
            "text": null,
        }),
        'global types': pd.d({
            "Type": globalType({}, taggedUnion({
                "terminal": option(component("Terminal", {})),
                "dictionary": option(group({
                    "key": prop(component("Terminal", {})),
                    "type": prop(component("Type", {})),
                })),
                "array": option(group({
                    "type": prop(component("Type", {})),
                })),
                "optional": option(group({
                    "type": prop(component("Type", {})),
                })),
                "tagged union": option(group({
                    "options": prop(dictionary(group({
                        "type": prop(component("Type", {})),
                        "constrained": prop(optional(group({
                            "type path": prop(component("Type Path", {})),
                        }))),
                    }))),
                    "default": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                })),
                "group": option(group({
                    "properties": prop(dictionary(group({
                        //"sibling dependencies": prop(dictionary(terminal())),
                        "type": prop(component("Type", {})),
                    }))),
                })),
                "component": option(group({
                    "context": prop(taggedUnion({
                        "local": option(group({})),
                        "import": option(group({
                            "library": prop(reference(typePath("Type Library", [grp("imports")]), tbd())),
                        })),
                    })),
                    "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
                    "arguments": prop(dictionary(group({}))),
                })),
            })),
            "Type Library": globalType({}, group({
                "imports": prop(dictionary(group({}))),
                "terminal types": prop(dictionary(group({}))),
                "global types": prop(dictionary(group({
                    "parameters": prop(dictionary(group({
                        "global type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
                    }))),
                    "type": prop(component("Type", {})),
                }))),
            })),
            "Model": globalType({}, group({
                "type library": prop(component("Type Library", {})),
                "root": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
            })),
            "Terminal": globalType({}, group({
                "constrained": prop(taggedUnion({
                    "no": option(group({
                        "type": prop(reference(typePath("Type Library", [grp("terminal types")]), tbd())),
                    })),
                    "yes": option(component("Reference", {})),
                })),
            })),
            "Type Path": globalType({}, group({
                "global type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
                "path": prop(array(taggedUnion({
                    "dictionary": option(group({}), typePath("Type", [tu("dictionary")])),
                    "optional": option(group({}), typePath("Type", [tu("optional")])),
                    "array": option(group({}), typePath("Type", [tu("array")])),
                    "group": option(group({
                        "property": prop(reference(typePath("Type", [tu("group"), grp("properties")]), tbd()))
                    }), typePath("Type", [tu("group")])),
                    "tagged union": option(group({
                        "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                    }), typePath("Type", [tu("tagged union")])),
                })))
                // "type": prop(taggedUnion({
                //     "parameter": 
                // })),
            })),
            "Reference": globalType({}, group({
                "type path": prop(component("Type Path", {})),
                "type": prop(taggedUnion({
                    "parameter": option(group({
                        "parameter": prop(reference(typePath("Type Library", [grp("global types"), dict(), grp("parameters")]), tbd()))
                    })),
                    "relative": option(group({
                        //"parameter": prop(reference("Type Library", [grp("global types"), dict(), grp("parameters")]))
                    })),
                    "tbd": option(group({})),
                }))
            })),
            // "Reference": type(group({s
            //     "type": member(taggedUnion({
            //         "parameter": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
            //         "sibling": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
            //         "other": option(group({}),
            //     })),
            //     "steps": member(array(taggedUnion({
            //         "group": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
            //         "tagged union": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
            //         "reference": option(group({}),
            //         "array": option(group({}),
            //     }))),
            // })),
        }),

    },
    'root': r("Model"),
}