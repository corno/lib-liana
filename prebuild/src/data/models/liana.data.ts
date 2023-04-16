import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
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
    terminal,
    constrainedDictionary,
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'terminal types': pd.d({
        "text": null,
    }),
    'global types': pd.d({
        "Model": globalType({}, group({
            "type library": prop(component("Type Library", {})),
            "root": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
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
        "Selection": globalType({}, taggedUnion({
            "reference": option(group({})),
            "component": option(group({
                "type name": prop(terminal("identifier"))//FIXME derive this value
            })),
            "array": option(group({
                "not empty": prop(component("Selection", {})),
                "empty": prop(component("Selection", {})),
            })),
            "tagged union": option(dictionary(component("Selection", {}))),
            "group": option(group({
                "property": prop(reference(typePath("Type", [tu("group"), grp("properties")]), tbd())),
                "selection": prop(component("Selection", {})),
            })),
        })),
        "Terminal": globalType({}, group({
            "constrained": prop(taggedUnion({
                "no": option(group({
                    "type": prop(reference(typePath("Type Library", [grp("terminal types")]), tbd())),
                })),
                "yes": option(component("Reference", {})),
            })),
        })),
        "Type": globalType({}, taggedUnion({
            "terminal": option(component("Terminal", {})),
            "dictionary": option(group({
                "key": prop(component("Terminal", {})),
                "type": prop(component("Type", {})),
            })),
            "array": option(group({
                "type": prop(component("Type", {})),
                "constraint": prop(optional(group({
                    "type path": prop(component("Type Path", {})), //derive form initial value?
                    "initial value": prop(component("Selection", {})),
                    "element value": prop(component("Selection", {})),
                })))
            })),
            "optional": option(group({
                "type": prop(component("Type", {})),
            })),
            "tagged union": option(group({
                "options": prop(dictionary(group({
                    "type": prop(component("Type", {})),
                    "constraint": prop(optional(group({
                        "type path": prop(component("Type Path", {})),
                    }))),
                }))),
                "default": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                "constraint": prop(optional(group({
                    "type path": prop(component("Type Path", {})),
                    "options": prop(constrainedDictionary(typePath("Type", [tu("tagged union"), grp("options")]), tbd(), component("Selection", {}))),
                })))
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
                    "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
                    "computed": prop(taggedUnion({
                        "no": option(group({})),
                        "yes": option(group({})),
                    })),
                }))),
                "type": prop(component("Type", {})),
                "result": prop(optional(group({
                    "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
                    "selection": prop(component("Selection", { "type": null })),
                })))
            }))),
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
}