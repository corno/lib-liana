import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    aLookup,
    aResolvedValue,
    array,
    component, constrainedDictionary,
    constrainedOption,
    dictConstraint,
    dictionary,
    globalTypeDeclaration,
    globalTypeDefinition,
    globalTypeSelection,
    group,
    option,
    optionConstraint,
    optional,
    optionalResult,
    pCyclicLookup, pNonCyclicLookup, pResolvedValue, lparameter, prop,
    resolvedValueReference,
    resultTaggedUnion,
    s_component,
    s_group,
    s_optional,
    s_reference, s_taggedunion,
    lookupReference,
    t_grp,
    t_tu,
    taggedUnion,
    tailSel,
    tempTypeSelection, valSel
} from "lib-liana/dist/submodules/liana/shorthands"

const forwardComponent = component

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'labels': {
        'atom types': pd.d({
            "text": null,
        }),
    },
    'global types': {
        'declarations': pd.d({
            "Labels": globalTypeDeclaration({}),
            "Atom": globalTypeDeclaration({
                "labels": pResolvedValue("Labels", false),
            }),
            "Parameters": globalTypeDeclaration({}),
            "Dictionary Constraints": globalTypeDeclaration({}),
            "Option Constraints": globalTypeDeclaration({}),
            "Properties": globalTypeDeclaration({}),
            "Variables": globalTypeDeclaration({
                "parameters": pResolvedValue("Parameters", true),
                "option constraints": pResolvedValue("Option Constraints", true),
                "dictionary constraints": pResolvedValue("Dictionary Constraints", true),
                "parent variables": pResolvedValue("Variables", true),//Circular
                "lookup": pNonCyclicLookup(globalTypeSelection("Properties"))
            }),

            "Imports": globalTypeDeclaration({}),
            "Type": globalTypeDeclaration({
                "imports": pResolvedValue("Imports", false),
                "labels": pResolvedValue("Labels", false),
                //"all global types": pAllSiblings(globalTypeSelection("Global Type")),
                //"noncyclic global types": pNonCyclicSiblings(globalTypeSelection("Global Type")),
            }),

            "Value Selection Tail": globalTypeDeclaration(
                {
                    "type": pResolvedValue("Type", false),
                },
                globalTypeSelection("Type"),
            ),
            "Any Value Selection": globalTypeDeclaration({
                "type": pResolvedValue("Type", false),
            }),
            "Value Selection": globalTypeDeclaration({}),
            // "Reference Initializer": globalTypeDeclaration({}),
            // "Atom Initializer": globalTypeDeclaration({}),
            // "Type Initializer": globalTypeDeclaration({}),
            "Lookup Selection": globalTypeDeclaration({}),
            "Global Type Selection": globalTypeDeclaration({}),
            "Global Type Declaration": globalTypeDeclaration({}),
            "Global Type Definition": globalTypeDeclaration({}),
            "Temp Type Selection Tail": globalTypeDeclaration({
                "context": pResolvedValue("Type", false)
            }),
            "Temp Type Selection": globalTypeDeclaration({
                "global types": pCyclicLookup(globalTypeSelection("Global Type Declaration"))
            }),
            "Type Library": globalTypeDeclaration({}),
            "Model": globalTypeDeclaration({}),
        }),
        'definitions': pd.d({
            "Atom": globalTypeDefinition(
                group({
                    "type": prop(resolvedValueReference(valSel("labels"), tempTypeSelection("Labels", t_grp("atom types")))),
                })
            ),
            "Variables": globalTypeDefinition(
                dictionary(taggedUnion({
                    "option constraint": option(resolvedValueReference(valSel("option constraints"), tempTypeSelection("Option Constraints"))),
                    "dictionary constraint": option(resolvedValueReference(valSel("dictionary constraints"), tempTypeSelection("Dictionary Constraints"))),
                    "parameter": option(resolvedValueReference(valSel("parameters"), tempTypeSelection("Parameters"))),
                    "parent variable": option(resolvedValueReference(valSel("parent variables"), tempTypeSelection("Variables"))),
                    "lookup": option(lookupReference(lparameter("lookup"), tempTypeSelection("Properties"))),
                }))
            ),
            "Dictionary Constraints": globalTypeDefinition(
                dictionary(group({
                    "temp type": prop(component("Temp Type Selection", {
                        "global types": aLookup(lparameter("global types")),
                    })),
                    "selection": prop(component("Value Selection", {})),
                }))
            ),
            "Option Constraints": globalTypeDefinition(
                dictionary(group({
                    "temp type": prop(component("Temp Type Selection", {
                        "global types": aLookup(lparameter("global types")),
                    })), //must be tagged union
                    "selection": prop(component("Value Selection", {})),
                    "option": prop(resolvedValueReference(valSel("XXXXA"), tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
                }))
            ),
            "Type": globalTypeDefinition(
                group({
                    "classes": prop(constrainedDictionary({}, group({}))),
                    "type": prop(taggedUnion({
                        "nothing": option(group({
                            "result": prop(optional(group({
                                "temp type": prop(component("Global Type Selection", {
                                    "global types": aLookup(lparameter("global types")),
                                })),
                                "selection": prop(component("Value Selection", {})),
                            })))
                        })),
                        "terminal": option(group({
                            "terminal": prop(component("Atom", {
                                "labels": aResolvedValue(valSel("labels")),
                                "global types": aLookup(lparameter("global types")),
                            })),
                            "constrained": prop(taggedUnion({
                                "no": option(group({
                                })),
                                "yes": option(group({
                                    "referencee type": prop(taggedUnion({
                                        "resolved value": option(group({
                                            "temp type": prop(component("Temp Type Selection", {
                                                "global types": aLookup(lparameter("global types")),
                                            })),
                                            "selection": prop(component("Value Selection", {})),
                                        })),
                                        "lookup": option(group({
                                            "temp type": prop(component("Temp Type Selection", {
                                                "global types": aLookup(lparameter("global types")),
                                            })),
                                            "selection": prop(component("Lookup Selection", {})),
                                        })),
                                    })),
                                })),
                            })),
                        })),
                        "dictionary": option(group({
                            "key": prop(component("Atom", {
                                "labels": aResolvedValue(valSel("labels")),
                                "global types": aLookup(lparameter("global types")),
                            })),
                            "constraints": prop(component("Dictionary Constraints", {
                                "global types": aLookup(lparameter("global types")),
                            })),
                            "variables": prop(component("Variables", {})),
                            "type": prop(component("Type", {
                                "global types": aLookup(lparameter("global types")),
                            })),
                            // "autofill": prop(array(group({
                            //     "source": prop(component("Value Selection", {})),
                            //     "initializer": prop(component("Type Initializer", {}))
                            // })))
                        })),
                        "array": option(group({
                            // "constraints": prop(dictionary(group({
                            //     "temp type": prop(component("Temp Type Selection", {
                            //         "global types": aLookup(lparameter("global types")),
                            //     })), //derive form initial value?
                            //     "initial value": prop(component("Selection", {})),
                            //     "element value": prop(component("Selection", {})),
                            // }))),
                            "type": prop(component("Type", {
                                "global types": aLookup(lparameter("global types")),
                            })),
                        })),
                        "optional": option(group({
                            "type": prop(component("Type", {})),
                            "result": prop(optional(group({
                                "temp type": prop(component("Global Type Selection", {
                                    "global types": aLookup(lparameter("global types")),
                                })),
                                "set": prop(component("Any Value Selection", {})),
                                "not set": prop(component("Value Selection", {})),//validate result is equal to 'set' result
                            })))
                        })),
                        "tagged union": option(group({
                            "result": prop(optional(component("Global Type Selection", {
                                "global types": aLookup(lparameter("global types")),
                            }))),
                            "options": prop(dictionary(group({
                                "constraints": prop(component("Option Constraints", {})),
                                "variables": prop(component("Variables", {})),
                                "type": prop(component("Type", {
                                    "global types": aLookup(lparameter("global types")),
                                })),
                                "result": prop(optional(component("Any Value Selection", {})))
                            }))),
                            "default": prop(resolvedValueReference(valSel("options"), tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
                        })),
                        "group": option(group({
                            "properties": prop(component("Properties", {})),
                        })),
                        "component": option(group({
                            "context": prop(resultTaggedUnion(globalTypeSelection("Type Library"), {
                                "local": option(group({})),
                                "import": option(group({
                                    "library": prop(resolvedValueReference(valSel("imports"), tempTypeSelection("Imports"))),
                                })),
                            })),
                            "type": prop(resolvedValueReference(valSel("context", s_taggedunion(s_group("global types", s_group("declarations")))), tempTypeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
                            "arguments": prop(constrainedDictionary({
                                "parameter": dictConstraint(valSel("type", s_reference(s_group("parameters"))), tempTypeSelection("Parameters"))
                            }, group({
                                "type": prop(taggedUnion({
                                    "resolved value": option(component("Value Selection", {})),
                                    "lookup": option(component("Lookup Selection", {})),
                                })),
                            }))),
                        })),
                    })),
                })
            ),
            "Properties": globalTypeDefinition(
                dictionary(group({
                    "variables": prop(component("Variables", {})),
                    "type": prop(component("Type", {
                        "global types": aLookup(lparameter("global types")),
                    })),
                }))
            ),
            "Value Selection Tail": globalTypeDefinition(
                group({
                    "step type": prop(resultTaggedUnion(globalTypeSelection("Type"), {
                        "reference": constrainedOption({
                            "reference": optionConstraint(valSel("type"), "terminal", tempTypeSelection("Type", t_grp("type")))
                        }, group({
                        })),
                        "component": constrainedOption({
                            "component": optionConstraint(valSel("type"), "component", tempTypeSelection("Type", t_grp("type")))
                        }, group({
                        })),
                        "tagged union": constrainedOption({
                            "tagged union": optionConstraint(valSel("type"), "tagged union", tempTypeSelection("Type", t_grp("type")))
                        }, group({
                        })),
                        "optional": constrainedOption({
                            "optional": optionConstraint(valSel("type"), "optional", tempTypeSelection("Type", t_grp("type")))
                        }, group({
                        })),
                        "nothing": constrainedOption({
                            "nothing": optionConstraint(valSel("type"), "nothing", tempTypeSelection("Type", t_grp("type")))
                        }, group({
                        })),
                        "group": constrainedOption({
                            "group": optionConstraint(valSel("type"), "group", tempTypeSelection("Type", t_grp("type")))
                        }, group({
                            "property": prop(resolvedValueReference(valSel("group"), tempTypeSelection("Properties"))),
                        })),
                    })),
                    "tail": prop(optional(component("Value Selection Tail", {
                        "type": aResolvedValue(valSel("step type", s_taggedunion()))
                    }), optionalResult(globalTypeSelection("Type"), tailSel(s_component()), valSel("step type")))),
                }),
                tailSel(s_group("tail", s_optional()))
            ),
            "Any Value Selection": globalTypeDefinition(
                group({
                    "start": prop(optional(resolvedValueReference(valSel("TBD"), tempTypeSelection("Variables")))),
                    "tail": prop(optional(component("Value Selection Tail", {})))
                })
            ),
            "Value Selection": globalTypeDefinition(
                group({
                    "start": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Variables"))),
                    "tail": prop(optional(component("Value Selection Tail", {})))
                })
            ),
            // "Reference Initializer": globalTypeDefinition(
            //     group({
            //         //FIXME
            //     })),
            // "Atom Initializer": globalTypeDefinition(
            //     group({
            //         "constrained": prop(taggedUnion({
            //             // "no": option(group({
            //             //     "type": prop(resolvedValueReference(valSel("TBD")), typeSelection("Type Library", [grp("labels")]))),
            //             // })),
            //             "yes": option(component("Reference Initializer", {
            //             })),
            //         })),
            //     })
            // ),
            // "Type Initializer": globalTypeDefinition(
            //     taggedUnion({
            //         "terminal": option(component("Atom Initializer", {
            //         })),
            //         // "dictionary": option(group({
            //         //     "key": prop(component("Atom Initializer", {
            //         //         "global types": aSibling(lparameter("global types")),
            //         //     })),
            //         //     "type": prop(component("Type", {
            //         //         "global types": aSibling(lparameter("global types")),
            //         //     })),
            //         //     "autofill": prop(array(group({
            //         //         "source": prop(component("Path", {})),
            //         //         "initializer": prop(component("Type Initializer", {}))
            //         //     })))
            //         // })),
            //         // "array": option(group({
            //         //     "type": prop(component("Type", {
            //         //         "global types": aSibling(lparameter("global types")),
            //         //     })),
            //         //     "constraint": prop(optional(group({
            //         //         "Temp Type Selection": prop(component("Temp Type Selection", {
            //         //             "global types": aSibling(lparameter("global types")),
            //         //         })), //derive form initial value?
            //         //         "initial value": prop(component("Selection", {})),
            //         //         "element value": prop(component("Selection", {})),
            //         //     })))
            //         // })),
            //         "optional": option(group({
            //             "type": prop(optional(component("Type Initializer", {}))),
            //         })),
            //         "tagged union": option(group({
            //             "option": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
            //             "data": prop(component("Type Initializer", {}))
            //         })),
            //         "group": option(group({
            //             "properties": prop(dictionary(group({
            //                 "type": prop(component("Type Initializer", {
            //                 })),
            //             }))),
            //         })),
            //         "component": option(component("Type Initializer", {})),
            //     })
            // ),
            "Lookup Selection": globalTypeDefinition(
                taggedUnion({
                    "resolved dictionary": option(component("Value Selection", {})),
                    "this": option(group({
                        "type": prop(taggedUnion({
                            "non cyclic": option(group({})),
                            "cyclic": option(group({})),
                        }))
                    })),
                    "parameter": option(resolvedValueReference(valSel("TBD"), tempTypeSelection("Parameters"))),
                })
            ),
            "Global Type Selection": globalTypeDefinition(
                group({
                    "import": prop(optional(resolvedValueReference(valSel("TBD"), tempTypeSelection("Imports")))),
                    "type": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
                })
            ),
            "Labels": globalTypeDefinition(
                group({
                    "atom types": prop(dictionary(group({}))),
                })
            ),
            "Parameters": globalTypeDefinition(
                dictionary(group({
                    "type": prop(taggedUnion({
                        "resolved value": option(group({
                            "type": prop(component("Global Type Selection", {})),
                            "optional": prop(taggedUnion({
                                "no": option(group({})),
                                "yes": option(group({})),
                            }))
                        })),
                        "lookup": option(group({
                            "type": prop(component("Global Type Selection", {
                                "global types": aLookup(lparameter("global types")),
                            })),
                            "kind": prop(taggedUnion({
                                "non cyclic": option(group({})),
                                "cyclic": option(group({})),
                            }))
                        })),
                    })),
                }))
            ),
            "Imports": globalTypeDefinition(
                dictionary(group({}))
            ),
            "Global Type Declaration": globalTypeDefinition(
                group({
                    "parameters": prop(component("Parameters", {})),
                    "result": prop(optional(component("Global Type Selection", {}))),
                })
            ),
            "Global Type Definition": globalTypeDefinition(
                group({
                    "variables": prop(component("Variables", {})),
                    "type": prop(component("Type", {
                        "global types": aLookup(lparameter("global types")),
                    })),
                    "result": prop(optional(component("Any Value Selection", {}))),
                })
            ),
            "Temp Type Selection Tail": globalTypeDefinition(
                group({
                    "step type": prop(resultTaggedUnion(globalTypeSelection("Type"), {
                        "dictionary": constrainedOption({
                            "dictionary": optionConstraint(valSel("type"), "dictionary", tempTypeSelection("Type", t_grp("type")))
                        }, group({})),
                        "optional": constrainedOption({
                            "optional": optionConstraint(valSel("type"), "optional", tempTypeSelection("Type", t_grp("type")))
                        }, group({})),
                        "array": constrainedOption({
                            "array": optionConstraint(valSel("type"), "array", tempTypeSelection("Type", t_grp("type")))
                        }, group({})),
                        "group": constrainedOption({
                            "group": optionConstraint(valSel("type"), "group", tempTypeSelection("Type", t_grp("type")))
                        }, group({
                            "property": prop(resolvedValueReference(valSel("group"), tempTypeSelection("Properties")))
                        })),
                        "tagged union": constrainedOption({
                            "tagged union": optionConstraint(valSel("type"), "tagged union", tempTypeSelection("Type", t_grp("type")))
                        }, group({
                            "option": prop(resolvedValueReference(valSel("tagged union"), tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
                        })),
                    })),
                    "tail": prop(optional(component("Temp Type Selection Tail", {})))
                })
            ),
            "Temp Type Selection": globalTypeDefinition(
                group({

                    "global type": prop(component("Global Type Selection", {})),
                    "tail": prop(optional(component("Temp Type Selection Tail", {})))
                })
            ),
            "Type Library": globalTypeDefinition(
                group({
                    "imports": prop(component("Imports", {})),
                    "labels": prop(component("Labels", {})),
                    "global types": prop(group({
                        "declarations": prop(dictionary(component("Global Type Declaration", {}))),
                        "definitions": prop(dictionary(component("Global Type Definition", {}))),
                    })),
                })
            ),
            "Model": globalTypeDefinition(
                group({
                    "type library": prop(component("Type Library", {})),
                    "root": prop(resolvedValueReference(valSel("type library", s_group("global types", s_group("definitions"))), tempTypeSelection("Type Library", t_grp("global types", t_grp("definitions"))))),
                })
            ),
        }),
    }
}