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
    allSiblings,
    argAllSiblingsPlaceholder,
    paramRef,
    constrainedOption,
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'terminal types': pd.d({
        "text": null,
    }),
    'global types': pd.d({
        "Terminal Initializer": globalType({
        }, group({
            "constrained": prop(taggedUnion({
                // "no": option(group({
                //     "type": prop(reference(typePath("Type Library", [grp("terminal types")]), tbd())),
                // })),
                "yes": option(component("Reference Initializer", {
                })),
            })),
        })),
        "Type Initializer": globalType({}, taggedUnion({
            "terminal": option(component("Terminal Initializer", {
            })),
            // "dictionary": option(group({
            //     "key": prop(component("Terminal Initializer", {
            //         "global types": paramRef("global types", []),
            //     })),
            //     "type": prop(component("Type", {
            //         "global types": paramRef("global types", []),
            //     })),
            //     "autofill": prop(array(group({
            //         "source": prop(component("Path", {})),
            //         "initializer": prop(component("Type Initializer", {}))
            //     })))
            // })),
            // "array": option(group({
            //     "type": prop(component("Type", {
            //         "global types": paramRef("global types", []),
            //     })),
            //     "constraint": prop(optional(group({
            //         "type path": prop(component("Type Path", {
            //             "global types": paramRef("global types", []),
            //         })), //derive form initial value?
            //         "initial value": prop(component("Selection", {})),
            //         "element value": prop(component("Selection", {})),
            //     })))
            // })),
            "optional": option(group({
                "type": prop(optional(component("Type Initializer", {}))),
            })),
            "tagged union": option(group({
                "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                "data": prop(component("Type Initializer", {}))
            })),
            "group": option(group({
                "properties": prop(dictionary(group({
                    "type": prop(component("Type Initializer", {
                    })),
                }))),
            })),
            "component": option(component("Type Initializer", {})),
        })),
        "Model": globalType({}, group({
            "type library": prop(component("Type Library", {})),
            "root": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
        })),
        "Path": globalType({}, group({
            "start": prop(taggedUnion({
                "parameter": option(reference(typePath("Type Library", [grp("global types"), dict(), grp("parameters")]), tbd())),
                "resolved value placeholder": option(group({
                })),
                "non circular siblings placeholder": option(group({
                })),
                "all siblings placeholder": option(group({
                })),
            })),
            "tail": prop(array(taggedUnion({
                "tagged union": option(group({
                    "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                }))
            })))
        })),
        "Reference": globalType({
            "global types": allSiblings(typePath("Type Library", [grp("global types")])),
        }, group({
            "type path": prop(component("Type Path", {
                "global types": paramRef("global types", []),
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
        "Reference Initializer": globalType({
        }, group({
            //FIXME
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
        "Terminal": globalType({
            "global types": allSiblings(typePath("Type Library", [grp("global types")]))
        }, group({
            "constrained": prop(taggedUnion({
                "no": option(group({
                    "type": prop(reference(typePath("Type Library", [grp("terminal types")]), tbd())),
                })),
                "yes": option(component("Reference", {
                    "global types": paramRef("global types", []),
                })),
            })),
        })),
        "Type": globalType({
            "global types": allSiblings(typePath("Type Library", [grp("global types")]))
        }, taggedUnion({
            "terminal": option(component("Terminal", {
                "global types": paramRef("global types", []),
            })),
            "dictionary": option(group({
                "key": prop(component("Terminal", {
                    "global types": paramRef("global types", []),
                })),
                "type": prop(component("Type", {
                    "global types": paramRef("global types", []),
                })),
                "autofill": prop(array(group({
                    "source": prop(component("Path", {})),
                    "initializer": prop(component("Type Initializer", {}))
                })))
            })),
            "array": option(group({
                "type": prop(component("Type", {
                    "global types": paramRef("global types", []),
                })),
                "constraint": prop(optional(group({
                    "type path": prop(component("Type Path", {
                        "global types": paramRef("global types", []),
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
                        "global types": paramRef("global types", []),
                    })),
                    "constraint": prop(optional(group({
                        "type path": prop(component("Type Path", {
                            "global types": paramRef("global types", []),
                        })), //must be tagged union
                        "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                    }))),
                }))),
                "default": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                "constraint": prop(optional(group({
                    "type path": prop(component("Type Path", {
                        "global types": paramRef("global types", []),
                    })),
                    "options": prop(constrainedDictionary(typePath("Type", [tu("tagged union"), grp("options")]), tbd(), component("Selection", {}))),
                })))
            })),
            "group": option(group({
                "properties": prop(dictionary(group({
                    //"sibling dependencies": prop(dictionary(terminal())),
                    "type": prop(component("Type", {
                        "global types": paramRef("global types", []),
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
                    "type": prop(component("Path", {})),
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
                    "global types": paramRef("global types", []),
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
                "dictionary": constrainedOption([typePath("Type", []), "dictionary"], group({})),
                "optional": constrainedOption([typePath("Type", []), "optional"], group({})),
                "array": constrainedOption([typePath("Type", []), "array"], group({})),
                "group": constrainedOption([typePath("Type", []), "group"], group({
                    "property": prop(reference(typePath("Type", [tu("group"), grp("properties")]), tbd()))
                })),
                "tagged union": constrainedOption([typePath("Type", []), "tagged union"], group({
                    "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                })),
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