import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {    aResolvedValue,
    aSibling,
    array,
    component, constrainedDictionary,
    constrainedOption,
    dict,
    dictionary,
    globalType, globalTypeSelection, group,
    grp,
    option, optional, pAllSiblings, pNonCyclicSiblings, pResolvedValue, parameter, prop, reference,
    resolvedValue,
    sibling,
    taggedUnion, terminal, tu, typeSelection
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'terminal types': pd.d({
        "text": null,
    }),
    'global types': pd.d({
        "Reference": globalType({
            "global types": pAllSiblings(typeSelection("Type Library", [grp("global types")])),
        }, group({
            "temp type path": prop(component("Type Selection", {
                "global types": aSibling(parameter("global types")),
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
        "Selection": globalType({
            "type": pResolvedValue("Type", false),
        }, taggedUnion({
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
                "property": prop(reference(resolvedValue("", []), typeSelection("Type", [tu("group"), grp("properties")]))),
                "selection": prop(component("Selection", {})),
            })),
        })),
        "Terminal": globalType({
            "terminal types": pResolvedValue("Terminal Types", false),
            "global types": pAllSiblings(typeSelection("Type Library", [grp("global types")]))
        }, group({
            "constrained": prop(taggedUnion({
                "no": option(group({
                    "type": prop(reference(resolvedValue("terminal types", []), typeSelection("Terminal Types", []))),
                })),
                "yes": option(component("Reference", {
                    "global types": aResolvedValue("global types", []),
                })),
            })),
        })),
        "Variables": globalType({
            "parameters": pResolvedValue("Parameters", true),
            "parent variables": pResolvedValue("Variables", true),
            "siblings": pNonCyclicSiblings(typeSelection("Type", [tu("group"), grp("properties")]))
        }, dictionary(taggedUnion({
            "parameter": option(reference(resolvedValue("parameters", []), typeSelection("Parameters", []))),
            "parent variable": option(reference(resolvedValue("parent variables", []), typeSelection("Variables", []))),
            "sibling": option(reference(sibling(parameter("siblings")), typeSelection("Type", [tu("group"), grp("properties")]))),
        }))),
        "Type": globalType({
            "imports": pResolvedValue("Imports", false),
            "global types": pAllSiblings(typeSelection("Type Library", [grp("global types")]))
        }, taggedUnion({
            "terminal": option(component("Terminal", {
                "global types": aSibling(parameter("global types")),
            })),
            "dictionary": option(group({
                "key": prop(component("Terminal", {
                    "global types": aSibling(parameter("global types")),
                })),
                "type": prop(component("Type", {
                    "global types": aSibling(parameter("global types")),
                })),
                "autofill": prop(array(group({
                    "source": prop(component("Value Selection", {})),
                    "initializer": prop(component("Type Initializer", {}))
                })))
            })),
            "array": option(group({
                "type": prop(component("Type", {
                    "global types": aSibling(parameter("global types")),
                })),
                "constraint": prop(optional(group({
                    "temp type": prop(component("Type Selection", {
                        "global types": aSibling(parameter("global types")),
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
                        "global types": aSibling(parameter("global types")),
                    })),
                    "constraint": prop(optional(group({
                        "type": prop(component("Type Selection", {
                            "global types": aSibling(parameter("global types")),
                        })), //must be tagged union
                        "option": prop(reference(resolvedValue("XXXX", []), typeSelection("Type", [tu("tagged union"), grp("options")]))),
                    }))),
                }))),
                "default": prop(reference(resolvedValue("options", []), typeSelection("Type", [tu("tagged union"), grp("options")]))),
                "constraint": prop(optional(group({
                    "type": prop(component("Type Selection", {
                        "global types": aSibling(parameter("global types")),
                    })),
                    "options": prop(constrainedDictionary(resolvedValue("options", []), typeSelection("Type", [tu("tagged union"), grp("options")]), component("Selection", {}))),
                })))
            })),
            "group": option(group({
                "properties": prop(dictionary(group({
                    "variables": prop(component("Variables", {})),
                    "type": prop(component("Type", {
                        "global types": aSibling(parameter("global types")),
                    })),
                }))),
            })),
            "component": option(group({
                "context": prop(taggedUnion({
                    "local": option(group({})),
                    "import": option(group({
                        "library": prop(reference(resolvedValue("TBD", []), typeSelection("Imports", []))),
                    })),
                })),
                "type": prop(reference(resolvedValue("TBD", []), typeSelection("Type Library", [grp("global types")]))),
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
                //     "type": prop(reference(resolvedValue("TBD", []), typeSelection("Type Library", [grp("terminal types")]))),
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
            //         "global types": aSibling(parameter("global types")),
            //     })),
            //     "type": prop(component("Type", {
            //         "global types": aSibling(parameter("global types")),
            //     })),
            //     "autofill": prop(array(group({
            //         "source": prop(component("Path", {})),
            //         "initializer": prop(component("Type Initializer", {}))
            //     })))
            // })),
            // "array": option(group({
            //     "type": prop(component("Type", {
            //         "global types": aSibling(parameter("global types")),
            //     })),
            //     "constraint": prop(optional(group({
            //         "Type Selection": prop(component("Type Selection", {
            //             "global types": aSibling(parameter("global types")),
            //         })), //derive form initial value?
            //         "initial value": prop(component("Selection", {})),
            //         "element value": prop(component("Selection", {})),
            //     })))
            // })),
            "optional": option(group({
                "type": prop(optional(component("Type Initializer", {}))),
            })),
            "tagged union": option(group({
                "option": prop(reference(resolvedValue("TBD", []), typeSelection("Type", [tu("tagged union"), grp("options")]))),
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
            "start": prop(reference(resolvedValue("TBD", []), typeSelection("Variables", []))),
            "tail": prop(array(taggedUnion({
                "tagged union": option(group({
                    "option": prop(reference(resolvedValue("TBD", []), typeSelection("Type", [tu("tagged union"), grp("options")]))),
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
            "parameter": option(reference(resolvedValue("TBD", []), typeSelection("Parameters", []))),
        })),
        "Global Type Selection": globalType({}, group({
            "import": prop(optional(reference(resolvedValue("TBD", []), typeSelection("Imports", [])))),
            "type": prop(reference(resolvedValue("TBD", []), typeSelection("Type Library", [grp("global types")]))),

        })),
        "Terminal Types": globalType({}, dictionary(group({}))),
        "Parameters": globalType({}, dictionary(group({
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
                        "global types": aSibling(parameter("global types")),
                    })),
                    "kind": prop(taggedUnion({
                        "non cyclic": option(group({})),
                        "cyclic": option(group({})),
                    }))
                })),
            })),
        }))),
        "Imports":globalType({}, dictionary(group({}))),
        "Type Library": globalType({}, group({
            "imports": prop(component("Imports", {})),
            "terminal types": prop(component("Terminal Types", {})),
            "global types": prop(dictionary(group({
                "parameters": prop(component("Parameters", {})),
                "variables": prop(component("Variables", {})),
                "type": prop(component("Type", {
                    "global types": aSibling(parameter("global types")),
                })),
                "result": prop(optional(group({
                    "type": prop(reference(resolvedValue("TBD", []), typeSelection("Type Library", [grp("global types")]))),
                    "selection": prop(component("Selection", {})),
                })))
            }))),
        })),
        "Type Selection": globalType({
            "global types": pAllSiblings(typeSelection("Type Library", [grp("global types")]))
        }, group({

            "global type": prop(component("Global Type Selection", {})),
            "tail": prop(array(taggedUnion({
                "dictionary": constrainedOption([typeSelection("Type", []), "dictionary"], group({})),
                "optional": constrainedOption([typeSelection("Type", []), "optional"], group({})),
                "array": constrainedOption([typeSelection("Type", []), "array"], group({})),
                "group": constrainedOption([typeSelection("Type", []), "group"], group({
                    "property": prop(reference(resolvedValue("OPTION CONSTRAINT", []), typeSelection("Type", [tu("group"), grp("properties")])))
                })),
                "tagged union": constrainedOption([typeSelection("Type", []), "tagged union"], group({
                    "option": prop(reference(resolvedValue("OPTION CONSTRAINT", []), typeSelection("Type", [tu("tagged union"), grp("options")]))),
                })),
            })))
        })),
        "Model": globalType({}, group({
            "type library": prop(component("Type Library", {})),
            "root": prop(reference(resolvedValue("type library", [/**global types */]), typeSelection("Type Library", [grp("global types")]))),
        })),
    }),
}