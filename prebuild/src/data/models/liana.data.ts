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
        "Reference": globalType({
            "global types": allSiblings(typePath("Type Library", [grp("global types")])),
        }, group({
            "temp type path": prop(component("Type Selection", {
                "global types": paramRef("global types", []),
            })),
            "referencee type": prop(taggedUnion({
                "resolved value": option(group({
                    "selection": prop(component("Value Selection", {})),
                })),
                "sibling": option(group({
                    "selection": prop(component("Containing Dictionary Selection", {})),
                })),
            })),
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
        "Variables": globalType({}, dictionary(taggedUnion({
            "parameter": option(reference(typePath("Type Library", [grp("global types"), dict(), grp("parameters")]), tbd())),
            "siblings": option(reference(typePath("Type", [tu("group"), grp("properties")]), tbd())),
        }))),
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
                    "source": prop(component("Value Selection", {})),
                    "initializer": prop(component("Type Initializer", {}))
                })))
            })),
            "array": option(group({
                "type": prop(component("Type", {
                    "global types": paramRef("global types", []),
                })),
                "constraint": prop(optional(group({
                    "temp type": prop(component("Type Selection", {
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
                        "type": prop(component("Type Selection", {
                            "global types": paramRef("global types", []),
                        })), //must be tagged union
                        "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                    }))),
                }))),
                "default": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                "constraint": prop(optional(group({
                    "type": prop(component("Type Selection", {
                        "global types": paramRef("global types", []),
                    })),
                    "options": prop(constrainedDictionary(typePath("Type", [tu("tagged union"), grp("options")]), tbd(), component("Selection", {}))),
                })))
            })),
            "group": option(group({
                "properties": prop(dictionary(group({
                    "variables": prop(component("Variables", {})),
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
                    "type": prop(taggedUnion({
                        "resolved value": option(component("Value Selection", {})),
                        "sibling": option(component("Containing Dictionary Selection", {})),
                    })),
                }))),
            })),
        })),
        "Reference Initializer": globalType({
        }, group({
            //FIXME
        })),
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
            //         "Type Selection": prop(component("Type Selection", {
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
        "Value Selection": globalType({}, group({
            "start": prop(reference(typePath("Variables", []), tbd())),
            "tail": prop(array(taggedUnion({
                "tagged union": option(group({
                    "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
                }))
            })))
        })),
        "Containing Dictionary Selection": globalType({}, taggedUnion({
            "this": option(group({
                "type": prop(taggedUnion({
                    "non cyclic": option(group({})),
                    "cyclic": option(group({})),
                }))
            })),
            "parameter": option(reference(typePath("Type Library", [grp("global types"), dict(), grp("parameters")]), tbd())),
        })),
        "Global Type Selection": globalType({}, group({
            "import": prop(optional(reference(typePath("Type Library", [grp("imports")]), tbd()))),
            "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),

        })),
        "Type Library": globalType({}, group({
            "imports": prop(dictionary(group({}))),
            "terminal types": prop(dictionary(group({}))),
            "global types": prop(dictionary(group({
                "parameters": prop(dictionary(group({
                    "type": prop(taggedUnion({
                        "resolved value": option(group({
                            "type": prop(component("Global Type Selection", {})),
                            "optional": prop(taggedUnion({
                                "no": option(group({})),
                                "yes": option(group({})),
                            }))
                        })),
                        "siblings": option(group({
                            "type": prop(component("Type Selection", {
                                "global types": argAllSiblingsPlaceholder(),
                            })),
                            "kind": prop(taggedUnion({
                                "non cyclic": option(group({})),
                                "cyclic": option(group({})),
                            }))
                        })),
                    })),
                }))),
                "variables": prop(component("Variables", {})),
                "type": prop(component("Type", {
                    "global types": paramRef("global types", []),
                })),
                "result": prop(optional(group({
                    "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
                    "selection": prop(component("Selection", {})),
                })))
            }))),
        })),
        "Type Selection": globalType({
            "global types": allSiblings(typePath("Type Library", [grp("global types")]))
        }, group({

            "global type": prop(component("Global Type Selection", {})),
            "tail": prop(array(taggedUnion({
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
        })),
        "Model": globalType({}, group({
            "type library": prop(component("Type Library", {})),
            "root": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
        })),
    }),
}