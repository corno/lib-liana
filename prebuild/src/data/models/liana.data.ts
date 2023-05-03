import * as pd from 'pareto-core-data'

import * as g_tendril from "lib-liana/dist/submodules/tendril"

import {
    constrainedDictionary,
    constrainedOption,
    dictConstraint,
    dictionary,
    globalType,
    globalTypeSelection,
    group,
    option,
    optionConstraint,
    optional,
    optionalResult,
    prop,
    resolvedValueReference,
    resultTaggedUnion,
    t_grp,
    t_tu,
    taggedUnion,
    tempTypeSelection, globalTypeResult, lookupReference, resolvedSiblingComponent
} from "lib-liana/dist/submodules/tendril/shorthands"

export const $: g_tendril.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'labels': {
        'atom types': pd.d({
            "text": null,
        }),
    },
    'global types': pd.d({
        "Atom": globalType(
            group({
                "type": prop(resolvedValueReference(tempTypeSelection("Labels", t_grp("atom types")))),
            })
        ),
        "Variables": globalType(
            dictionary(taggedUnion({
                "option constraint": option(resolvedValueReference(tempTypeSelection("Option Constraints"))),
                "dictionary constraint": option(resolvedValueReference(tempTypeSelection("Dictionary Constraints"))),
                "parameter": option(resolvedValueReference(tempTypeSelection("Parameters"))),
                "parent variable": option(resolvedValueReference(tempTypeSelection("Variables"))),
                //"lookup": option(lookupReference(lparameter("lookup"), tempTypeSelection("Properties"))),
            }))
        ),
        "Dictionary Constraints": globalType(
            dictionary(group({
                "temp type": prop(resolvedSiblingComponent("Temp Type Selection")),
                "selection": prop(resolvedSiblingComponent("Value Selection")),
            }))
        ),
        "Option Constraints": globalType(
            dictionary(group({
                "temp type": prop(resolvedSiblingComponent("Temp Type Selection")),
                "selection": prop(resolvedSiblingComponent("Value Selection")),
                "option": prop(resolvedValueReference(tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
            }))
        ),
        "Type": globalType(
            group({
                "classes": prop(constrainedDictionary({}, group({}))),
                "type": prop(taggedUnion({
                    "nothing": option(group({
                        "result": prop(optional(group({
                            "temp type": prop(resolvedSiblingComponent("Global Type Selection")),
                            "selection": prop(resolvedSiblingComponent("Value Selection")),
                        })))
                    })),
                    "terminal": option(group({
                        "terminal": prop(resolvedSiblingComponent("Atom")),
                        "constrained": prop(taggedUnion({
                            "no": option(group({
                            })),
                            "yes": option(group({
                                "referencee type": prop(taggedUnion({
                                    "resolved value": option(group({
                                        "temp type": prop(resolvedSiblingComponent("Temp Type Selection")),
                                        "selection": prop(resolvedSiblingComponent("Value Selection")),
                                    })),
                                    "lookup": option(group({
                                        "temp type": prop(resolvedSiblingComponent("Temp Type Selection")),
                                        "selection": prop(resolvedSiblingComponent("Lookup Selection")),
                                    })),
                                })),
                            })),
                        })),
                    })),
                    "dictionary": option(group({
                        "key": prop(resolvedSiblingComponent("Atom")),
                        "constraints": prop(resolvedSiblingComponent("Dictionary Constraints")),
                        "variables": prop(resolvedSiblingComponent("Variables")),
                        "type": prop(resolvedSiblingComponent("Type")),
                        // "autofill": prop(array(group({
                        //     "source": prop(resolvedSiblingComponent("Value Selection")),
                        //     "initializer": prop(resolvedSiblingComponent("Type Initializer"))
                        // })))
                    })),
                    "array": option(group({
                        // "constraints": prop(dictionary(group({
                        //     "temp type": prop(resolvedSiblingComponent("Temp Type Selection", {
                        //         "global types": aLookup(lparameter("global types")),
                        //     })), //derive form initial value?
                        //     "initial value": prop(resolvedSiblingComponent("Selection")),
                        //     "element value": prop(resolvedSiblingComponent("Selection")),
                        // }))),
                        "type": prop(resolvedSiblingComponent("Type")),
                    })),
                    "optional": option(group({
                        "type": prop(resolvedSiblingComponent("Type")),
                        "result": prop(optional(group({
                            "temp type": prop(resolvedSiblingComponent("Global Type Selection")),
                            "set": prop(resolvedSiblingComponent("Any Value Selection")),
                            "not set": prop(resolvedSiblingComponent("Value Selection")),//validate result is equal to 'set' result
                        })))
                    })),
                    "tagged union": option(group({
                        "result": prop(optional(resolvedSiblingComponent("Global Type Selection"))),
                        "options": prop(dictionary(group({
                            "constraints": prop(resolvedSiblingComponent("Option Constraints")),
                            "variables": prop(resolvedSiblingComponent("Variables")),
                            "type": prop(resolvedSiblingComponent("Type")),
                            "result": prop(optional(resolvedSiblingComponent("Any Value Selection")))
                        }))),
                        "default": prop(resolvedValueReference(tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
                    })),
                    "group": option(group({
                        "properties": prop(resolvedSiblingComponent("Properties")),
                    })),
                    "component": option(group({
                        "context": prop(resultTaggedUnion(globalTypeSelection("Type Library"), {
                            "resolved sibling": option(group({
                                "type": prop(resolvedValueReference(tempTypeSelection("Type Library", t_grp("global types")))),
                            })),
                            "import": option(group({
                                "library": prop(resolvedValueReference(tempTypeSelection("Imports"))),
                                "type": prop(resolvedValueReference(tempTypeSelection("Type Library", t_grp("global types")))),
                            })),
                            //cyclic siblings are not possible!!
                        })),
                        "arguments": prop(constrainedDictionary({
                            "parameter": dictConstraint(tempTypeSelection("Parameters"))
                        }, group({
                            "type": prop(taggedUnion({
                                "resolved value": option(resolvedSiblingComponent("Value Selection")),
                                "lookup": option(resolvedSiblingComponent("Lookup Selection")),
                            })),
                        }))),
                    })),
                })),
            })
        ),
        "Properties": globalType(
            dictionary(group({
                "variables": prop(resolvedSiblingComponent("Variables")),
                "type": prop(resolvedSiblingComponent("Type")),
            }))
        ),
        "Value Selection Tail": globalType(
            group({
                "step type": prop(resultTaggedUnion(globalTypeSelection("Type"), {
                    "reference": constrainedOption({
                        "reference": optionConstraint(tempTypeSelection("Type", t_grp("type")), "terminal")
                    }, group({
                    })),
                    "component": constrainedOption({
                        "component": optionConstraint(tempTypeSelection("Type", t_grp("type")), "component")
                    }, group({
                    })),
                    "tagged union": constrainedOption({
                        "tagged union": optionConstraint(tempTypeSelection("Type", t_grp("type")), "tagged union")
                    }, group({
                    })),
                    "optional": constrainedOption({
                        "optional": optionConstraint(tempTypeSelection("Type", t_grp("type")), "optional")
                    }, group({
                    })),
                    "nothing": constrainedOption({
                        "nothing": optionConstraint(tempTypeSelection("Type", t_grp("type")), "nothing")
                    }, group({
                    })),
                    "group": constrainedOption({
                        "group": optionConstraint(tempTypeSelection("Type", t_grp("type")), "group")
                    }, group({
                        "property": prop(resolvedValueReference(tempTypeSelection("Properties"))),
                    })),
                })),
                "tail": prop(optional(resolvedSiblingComponent("Value Selection Tail"), optionalResult(globalTypeSelection("Type")))),
            }),
            globalTypeResult(
                globalTypeSelection("Type")
            )
        ),
        "Any Value Selection": globalType(
            group({
                "start": prop(optional(resolvedValueReference(tempTypeSelection("Variables")))),
                "tail": prop(optional(resolvedSiblingComponent("Value Selection Tail")))
            })
        ),
        "Value Selection": globalType(
            group({
                "start": prop(resolvedValueReference(tempTypeSelection("Variables"))),
                "tail": prop(optional(resolvedSiblingComponent("Value Selection Tail")))
            })
        ),
        // "Reference Initializer": globalType(
        //     group({
        //         //FIXME
        //     })),
        // "Atom Initializer": globalType(
        //     group({
        //         "constrained": prop(taggedUnion({
        //             // "no": option(group({
        //             //     "type": prop(resolvedValueReference(valSel("TBD")), typeSelection("Type Library", [grp("labels")]))),
        //             // })),
        //             "yes": option(resolvedSiblingComponent("Reference Initializer", {
        //             })),
        //         })),
        //     })
        // ),
        // "Type Initializer": globalType(
        //     taggedUnion({
        //         "terminal": option(resolvedSiblingComponent("Atom Initializer", {
        //         })),
        //         // "dictionary": option(group({
        //         //     "key": prop(resolvedSiblingComponent("Atom Initializer", {
        //         //         "global types": aSibling(lparameter("global types")),
        //         //     })),
        //         //     "type": prop(resolvedSiblingComponent("Type", {
        //         //         "global types": aSibling(lparameter("global types")),
        //         //     })),
        //         //     "autofill": prop(array(group({
        //         //         "source": prop(resolvedSiblingComponent("Path")),
        //         //         "initializer": prop(resolvedSiblingComponent("Type Initializer"))
        //         //     })))
        //         // })),
        //         // "array": option(group({
        //         //     "type": prop(resolvedSiblingComponent("Type", {
        //         //         "global types": aSibling(lparameter("global types")),
        //         //     })),
        //         //     "constraint": prop(optional(group({
        //         //         "Temp Type Selection": prop(resolvedSiblingComponent("Temp Type Selection", {
        //         //             "global types": aSibling(lparameter("global types")),
        //         //         })), //derive form initial value?
        //         //         "initial value": prop(resolvedSiblingComponent("Selection")),
        //         //         "element value": prop(resolvedSiblingComponent("Selection")),
        //         //     })))
        //         // })),
        //         "optional": option(group({
        //             "type": prop(optional(resolvedSiblingComponent("Type Initializer"))),
        //         })),
        //         "tagged union": option(group({
        //             "option": prop(resolvedValueReference(tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
        //             "data": prop(resolvedSiblingComponent("Type Initializer"))
        //         })),
        //         "group": option(group({
        //             "properties": prop(dictionary(group({
        //                 "type": prop(resolvedSiblingComponent("Type Initializer", {
        //                 })),
        //             }))),
        //         })),
        //         "component": option(resolvedSiblingComponent("Type Initializer")),
        //     })
        // ),
        "Lookup Selection": globalType(
            taggedUnion({
                "resolved dictionary": option(resolvedSiblingComponent("Value Selection")),
                "this": option(group({
                    "type": prop(taggedUnion({
                        "non cyclic": option(group({})),
                        "cyclic": option(group({})),
                    }))
                })),
                "parameter": option(resolvedValueReference(tempTypeSelection("Parameters"))),
            })
        ),
        "Global Type Selection": globalType(
            group({
                "import": prop(optional(resolvedValueReference(tempTypeSelection("Imports")))),
                "type": prop(resolvedValueReference(tempTypeSelection("Type Library", t_grp("global types")))),
            })
        ),
        "Labels": globalType(
            group({
                "atom types": prop(dictionary(group({}))),
            })
        ),
        "Parameters": globalType(
            dictionary(group({
                "type": prop(taggedUnion({
                    "resolved value": option(group({
                        "type": prop(resolvedSiblingComponent("Global Type Selection")),
                        "optional": prop(taggedUnion({
                            "no": option(group({})),
                            "yes": option(group({})),
                        }))
                    })),
                    "lookup": option(group({
                        "type": prop(resolvedSiblingComponent("Global Type Selection")),
                        "kind": prop(taggedUnion({
                            "non cyclic": option(group({})),
                            "cyclic": option(group({})),
                        }))
                    })),
                })),
            }))
        ),
        "Imports": globalType(
            dictionary(group({}))
        ),
        "Global Type": globalType(
            group({
                "parameters": prop(resolvedSiblingComponent("Parameters")),
                "variables": prop(resolvedSiblingComponent("Variables")),
                "type": prop(resolvedSiblingComponent("Type")),
                "result": prop(optional(group({
                    "type": prop(resolvedSiblingComponent("Global Type Selection")),
                    "selection": prop(resolvedSiblingComponent("Any Value Selection")),

                }))),
            })
        ),
        "Temp Type Selection Tail": globalType(
            group({
                "step type": prop(resultTaggedUnion(globalTypeSelection("Type"), {
                    "dictionary": constrainedOption({
                        "dictionary": optionConstraint(tempTypeSelection("Type", t_grp("type")), "dictionary")
                    }, group({})),
                    "optional": constrainedOption({
                        "optional": optionConstraint(tempTypeSelection("Type", t_grp("type")), "optional")
                    }, group({})),
                    "array": constrainedOption({
                        "array": optionConstraint(tempTypeSelection("Type", t_grp("type")), "array")
                    }, group({})),
                    "group": constrainedOption({
                        "group": optionConstraint(tempTypeSelection("Type", t_grp("type")), "group")
                    }, group({
                        "property": prop(resolvedValueReference(tempTypeSelection("Properties")))
                    })),
                    "tagged union": constrainedOption({
                        "tagged union": optionConstraint(tempTypeSelection("Type", t_grp("type")), "tagged union")
                    }, group({
                        "option": prop(resolvedValueReference(tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
                    })),
                })),
                "tail": prop(optional(resolvedSiblingComponent("Temp Type Selection Tail")))
            })
        ),
        "Temp Type Selection": globalType(
            group({

                "global type": prop(resolvedSiblingComponent("Global Type Selection")),
                "tail": prop(optional(resolvedSiblingComponent("Temp Type Selection Tail")))
            })
        ),
        "Type Library": globalType(
            group({
                "imports": prop(resolvedSiblingComponent("Imports")),
                "labels": prop(resolvedSiblingComponent("Labels")),
                "global types": prop(dictionary(resolvedSiblingComponent("Global Type"))),
            })
        ),
        "Model": globalType(
            group({
                "type library": prop(resolvedSiblingComponent("Type Library")),
                "root": prop(resolvedValueReference(tempTypeSelection("Type Library", t_grp("global types")))),
            })
        ),
    }),
}