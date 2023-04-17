import * as pd from 'pareto-core-data'
import * as g_liana from "../../.../../../pub/dist/submodules/liana"
import {
    allSiblings,
    argAllSiblingsPlaceholder,
    array,
    component, constrainedDictionary,
    dict,
    dictionary,
    globalType, group,
    grp,
    option, optional, paramRef, prop, reference,
    taggedUnion, tbd, terminal, tu, typePath
} from "../../.../../../pub/dist/submodules/liana/shorthands"
const d = pd.d
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
        "Reference": globalType({
            "global types": allSiblings(typePath("Type Library", [grp("global types")])),
        }, group({
            "type path": prop(component("Type Path", {
                "global types": paramRef("global types"),
            })),
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
                "yes": option(component("Reference", {
                    "global types": paramRef("global types"),
                })),
            })),
        })),
        "Type": globalType({
            "global types": allSiblings(typePath("Type Library", [grp("global types")]))
        }, taggedUnion({
            "terminal": option(component("Terminal", {})),
            "dictionary": option(group({
                "key": prop(component("Terminal", {})),
                "type": prop(component("Type", {
                    "global types": paramRef("global types"),
                })),
            })),
            "array": option(group({
                "type": prop(component("Type", {
                    "global types": paramRef("global types"),
                })),
                "constraint": prop(optional(group({
                    "type path": prop(component("Type Path", {
                        "global types": paramRef("global types"),
                    })), //derive form initial value?
                    "initial value": prop(component("Selection", {})),
                    "element value": prop(component("Selection", {})),
                })))
            })),
            "optional": option(group({
                "type": prop(component("Type", {})),
            })),
            "tagged union": option(group({
                "options": prop(dictionary(group({
                    "type": prop(component("Type", {
                        "global types": paramRef("global types"),
                    })),
                    "constraint": prop(optional(group({
                        "type path": prop(component("Type Path", {
                            "global types": paramRef("global types"),
                        })), //must be tagged union
                        "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                    }))),
                }))),
                "default": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                "constraint": prop(optional(group({
                    "type path": prop(component("Type Path", {
                        "global types": paramRef("global types"),
                    })),
                    "options": prop(constrainedDictionary(typePath("Type", [tu("tagged union"), grp("options")]), tbd(), component("Selection", {}))),
                })))
            })),
            "group": option(group({
                "properties": prop(dictionary(group({
                    //"sibling dependencies": prop(dictionary(terminal())),
                    "type": prop(component("Type", {
                        "global types": paramRef("global types"),
                    })),
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
                "arguments": prop(dictionary(group({
                    "type": prop(taggedUnion({
                        "parameter": option(reference(typePath("Type Library", [grp("global types"), dict(), grp("parameters")]), tbd())),
                        "resolved value placeholder": option(group({
                        })),
                        "non circular siblings placeholder": option(group({
                        })),
                        "all siblings placeholder": option(group({
                        })),
                    })),
                }))),
            })),
        })),
        "Type Library": globalType({}, group({
            "imports": prop(dictionary(group({}))),
            "terminal types": prop(dictionary(group({}))),
            "global types": prop(dictionary(group({
                "parameters": prop(dictionary(group({
                    "type": prop(taggedUnion({
                        "resolved value": option(group({
                            "import": prop(optional(reference(typePath("Type Library", [grp("imports")]), tbd()))),
                            "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
                            "optional": prop(taggedUnion({
                                "no": option(group({})),
                                "yes": option(group({})),
                            }))
                        })),
                        "non circular siblings": option(group({
                            "type": prop(component("Type Path", {
                                "global types": argAllSiblingsPlaceholder(),
                            })),
                        })),
                        "all siblings": option(group({
                            "type": prop(component("Type Path", {
                                "global types": argAllSiblingsPlaceholder(),
                            })),
                        })),
                    })),
                }))),
                "type": prop(component("Type", {
                    "global types": paramRef("global types"),
                })),
                "result": prop(optional(group({
                    "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
                    "selection": prop(component("Selection", {})),
                })))
            }))),
        })),
        "Type Path": globalType({
            "global types": allSiblings(typePath("Type Library", [grp("global types")]))
        }, group({
            "import": prop(optional(terminal("identifier"))),
            "global type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
            "path": prop(array(taggedUnion({
                "dictionary": option(group({}), [typePath("Type", []), "dictionary"]),
                "optional": option(group({}), [typePath("Type", []), "optional"]),
                "array": option(group({}), [typePath("Type", []), "array"]),
                "group": option(group({
                    "property": prop(reference(typePath("Type", [tu("group"), grp("properties")]), tbd()))
                }), [typePath("Type", []), "group"]),
                "tagged union": option(group({
                    "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                }), [typePath("Type", []), "tagged union"]),
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