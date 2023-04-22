import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    aContainingDictionary,
    aResolvedValue,
    array,
    component, constrainedDictionary,
    constrainedOption,
    dictConstraint,
    dictionary,
    globalType,
    group,
    grp,
    option,
    optionConstraint,
    optional, pAllSiblings, pNonCyclicSiblings, pResolvedValue, parameter, prop,
    resolvedValueReference, siblingReference,
    taggedUnion, terminal, tu, typeSelection, valSel, vgrp
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'terminal types': pd.d({
        "text": null,
    }),
    'global types': pd.d({
        "Value Selection Tail": globalType({
            "type": pResolvedValue("Type", false),
        }, group({
            "step type": prop(taggedUnion({
                "reference": option(group({

                })),
                "component": option(group({
                    //"type name": prop(terminal("identifier"))//FIXME derive this value
                })),
                "result": option(group({
                    //can be: tagged union, optional, component
                })),
                "group": option(group({
                    "property": prop(resolvedValueReference(valSel(""), typeSelection("Type", [tu("group"), grp("properties")]))),
                })),
            })),
            "tail": prop(optional(component("Value Selection Tail", {}))),
        })),
        "Optional Value Selection Tail": globalType({
            "type": pResolvedValue("Type", false),
        }, optional(component("Value Selection Tail", {}))),
        "Terminal": globalType({
            "terminal types": pResolvedValue("Terminal Types", false),
        }, group({
            "type": prop(resolvedValueReference(valSel("terminal types"), typeSelection("Terminal Types", []))),
        })),
        "Variables": globalType({
            "parameters": pResolvedValue("Parameters", true),
            "option constraints": pResolvedValue("Variables", true),
            "dictionary constraints": pResolvedValue("Variables", true),
            "parent variables": pResolvedValue("Variables", true),
            "siblings": pNonCyclicSiblings(typeSelection("Type", [tu("group"), grp("properties")]))
        }, dictionary(taggedUnion({
            "option constraint": option(resolvedValueReference(valSel("option constraints"), typeSelection("Type", [tu("tagged union"), grp("options")]))),
            "dictionary constraint": option(resolvedValueReference(valSel("dictionary constraints"), typeSelection("Type", [tu("dictionary"), grp("constraints")]))),
            "parameter": option(resolvedValueReference(valSel("parameters"), typeSelection("Parameters", []))),
            "parent variable": option(resolvedValueReference(valSel("parent variables"), typeSelection("Variables", []))),
            "sibling": option(siblingReference(parameter("siblings"), typeSelection("Type", [tu("group"), grp("properties")]))),
        }))),
        "Type": globalType({
            "imports": pResolvedValue("Imports", false),
            "terminal types": pResolvedValue("Terminal Types", false),
            "global types": pAllSiblings(typeSelection("Type Library", [grp("global types")]))
        }, taggedUnion({
            "terminal": option(group({
                "terminal": prop(component("Terminal", {
                    "terminal types": aResolvedValue(valSel("terminal types")),
                    "global types": aContainingDictionary(parameter("global types")),
                })),
                "constrained": prop(taggedUnion({
                    "no": option(group({
                    })),
                    "yes": option(group({
                        "temp type path": prop(component("Type Selection", {
                            "global types": aContainingDictionary(parameter("global types")),
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
                })),
            })),
            "dictionary": option(group({
                "key": prop(component("Terminal", {
                    "global types": aContainingDictionary(parameter("global types")),
                })),
                "constraints": prop(dictionary(group({
                    "temp type path": prop(component("Type Selection", {
                        "global types": aContainingDictionary(parameter("global types")),
                    })),
                    "selection": prop(component("Value Selection", {})),
                }))),
                "variables": prop(component("Variables", {})),
                "type": prop(component("Type", {
                    "global types": aContainingDictionary(parameter("global types")),
                })),
                "autofill": prop(array(group({
                    "source": prop(component("Value Selection", {})),
                    "initializer": prop(component("Type Initializer", {}))
                })))
            })),
            "array": option(group({
                // "constraints": prop(dictionary(group({
                //     "temp type": prop(component("Type Selection", {
                //         "global types": aContainingDictionary(parameter("global types")),
                //     })), //derive form initial value?
                //     "initial value": prop(component("Selection", {})),
                //     "element value": prop(component("Selection", {})),
                // }))),
                "type": prop(component("Type", {
                    "global types": aContainingDictionary(parameter("global types")),
                })),
            })),
            "optional": option(group({
                "type": prop(component("Type", {})),
                "result": prop(optional(group({
                    "type": prop(component("Global Type Selection", {
                        "global types": aContainingDictionary(parameter("global types")),
                    })),
                    "set": prop(component("Optional Value Selection Tail", {})),
                    "not set": prop(component("Value Selection", {})),
                })))
            })),
            "tagged union": option(group({
                "options": prop(dictionary(group({
                    "constraints": prop(dictionary(group({
                        "type": prop(component("Type Selection", {
                            "global types": aContainingDictionary(parameter("global types")),
                        })), //must be tagged union
                        "selection": prop(component("Value Selection", {})),
                        "option": prop(resolvedValueReference(valSel("XXXXA"), typeSelection("Type", [tu("tagged union"), grp("options")]))),
                    }))),
                    "variables": prop(component("Variables", {})),
                    "type": prop(component("Type", {
                        "global types": aContainingDictionary(parameter("global types")),
                    })),
                }))),
                "default": prop(resolvedValueReference(valSel("options"), typeSelection("Type", [tu("tagged union"), grp("options")]))),
                "result": prop(optional(group({
                    "type": prop(component("Global Type Selection", {
                        "global types": aContainingDictionary(parameter("global types")),
                    })),
                    // "options": prop(constrainedDictionary({
                    //     "options": dictConstraint(valSel("options"), typeSelection("Type", [tu("tagged union"), grp("options")])),
                    // }, component("Value Selection", {}))),
                    "options": prop(dictionary(component("Optional Value Selection Tail", {}))),
                })))
            })),
            "group": option(group({
                "properties": prop(dictionary(group({
                    "variables": prop(component("Variables", {})),
                    "type": prop(component("Type", {
                        "global types": aContainingDictionary(parameter("global types")),
                    })),
                }))),
            })),
            "component": option(group({
                "context": prop(taggedUnion({
                    "local": option(group({})),
                    "import": option(group({
                        "library": prop(resolvedValueReference(valSel("TBD"), typeSelection("Imports", []))),
                    })),
                })),
                "type": prop(resolvedValueReference(valSel("TBD"), typeSelection("Type Library", [grp("global types")]))),
                "arguments": prop(dictionary(group({
                    "type": prop(taggedUnion({
                        "resolved value": option(component("Value Selection", {})),
                        "containing dictionary": option(component("Containing Dictionary Selection", {})),
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
                //     "type": prop(resolvedValueReference(valSel("TBD")), typeSelection("Type Library", [grp("terminal types")]))),
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
                "option": prop(resolvedValueReference(valSel("TBD"), typeSelection("Type", [tu("tagged union"), grp("options")]))),
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
            "start": prop(resolvedValueReference(valSel("TBD"), typeSelection("Variables", []))),
            "tail": prop(optional(component("Value Selection Tail", {})))
        })),
        "Containing Dictionary Selection": globalType({}, taggedUnion({
            "this": option(group({
                "type": prop(taggedUnion({
                    "non cyclic": option(group({})),
                    "cyclic": option(group({})),
                }))
            })),
            "parameter": option(resolvedValueReference(valSel("TBD"), typeSelection("Parameters", []))),
        })),
        "Global Type Selection": globalType({}, group({
            "import": prop(optional(resolvedValueReference(valSel("TBD"), typeSelection("Imports", [])))),
            "type": prop(resolvedValueReference(valSel("TBD"), typeSelection("Type Library", [grp("global types")]))),

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
                        "global types": aContainingDictionary(parameter("global types")),
                    })),
                    "kind": prop(taggedUnion({
                        "non cyclic": option(group({})),
                        "cyclic": option(group({})),
                    }))
                })),
            })),
        }))),
        "Imports": globalType({}, dictionary(group({}))),
        "Type Library": globalType({}, group({
            "imports": prop(component("Imports", {})),
            "terminal types": prop(component("Terminal Types", {})),
            "global types": prop(dictionary(group({
                "parameters": prop(component("Parameters", {})),
                "variables": prop(component("Variables", {})),
                "type": prop(component("Type", {
                    "global types": aContainingDictionary(parameter("global types")),
                })),
                "result": prop(optional(group({
                    "temp type": prop(component("Global Type Selection", {})),
                    "selection": prop(component("Optional Value Selection Tail", {})),
                })))
            }))),
        })),
        "Type Selection": globalType({
            "global types": pAllSiblings(typeSelection("Type Library", [grp("global types")]))
        }, group({

            "global type": prop(component("Global Type Selection", {})),
            "tail": prop(array(taggedUnion({
                "dictionary": constrainedOption({
                    "out": optionConstraint(valSel("TBD"), "dictionary", typeSelection("Type", []))
                }, group({})),
                "optional": constrainedOption({
                    "out": optionConstraint(valSel("TBD"), "optional", typeSelection("Type", []))
                }, group({})),
                "array": constrainedOption({
                    "out": optionConstraint(valSel("TBD"), "array", typeSelection("Type", []))
                }, group({})),
                "group": constrainedOption({
                    "out": optionConstraint(valSel("TBD"), "group", typeSelection("Type", []))
                }, group({
                    "property": prop(resolvedValueReference(valSel("out"), typeSelection("Type", [tu("group"), grp("properties")])))
                })),
                "tagged union": constrainedOption({
                    "out": optionConstraint(valSel("TBD"), "tagged union", typeSelection("Type", []))
                }, group({
                    "option": prop(resolvedValueReference(valSel("out"), typeSelection("Type", [tu("tagged union"), grp("options")]))),
                })),
            })))
        })),
        "Model": globalType({}, group({
            "type library": prop(component("Type Library", {})),
            "root": prop(resolvedValueReference(valSel("type library", vgrp("global types")), typeSelection("Type Library", [grp("global types")]))),
        })),
    }),
}