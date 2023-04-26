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
    taggedUnion, terminal, tu, typeSelection, valSel, sgrp, dict, globalTypeSelection, ref, staggedunion, resultTaggedUnion, globalTypeResult, scomponent, soptional, optionalResult
} from "lib-liana/dist/submodules/liana/shorthands"

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'labels': {

        'atom types': pd.d({
            "text": null,
        }),
    },
    'global types': pd.d({
        "Atom": globalType({
            "labels": pResolvedValue("Labels", false),
        }, group({
            "type": prop(resolvedValueReference(valSel("labels"), typeSelection("Labels", [grp("atom types")]))),
        })),
        "Variables": globalType({
            "parameters": pResolvedValue("Parameters", true),
            "option constraints": pResolvedValue("Option Constraints", true),
            "dictionary constraints": pResolvedValue("Dictionary Constraints", true),
            "parent variables": pResolvedValue("Variables", true),
            "siblings": pNonCyclicSiblings(typeSelection("Type", [grp("type"), tu("group"), grp("properties")]))
        }, dictionary(taggedUnion({
            "option constraint": option(resolvedValueReference(valSel("option constraints"), typeSelection("Option Constraints", []))),
            "dictionary constraint": option(resolvedValueReference(valSel("dictionary constraints"), typeSelection("Dictionary Constraints", []))),
            "parameter": option(resolvedValueReference(valSel("parameters"), typeSelection("Parameters", []))),
            "parent variable": option(resolvedValueReference(valSel("parent variables"), typeSelection("Variables", []))),
            "sibling": option(siblingReference(parameter("siblings"), typeSelection("Type", [grp("type"), tu("group"), grp("properties")]))),
        }))),
        "Dictionary Constraints": globalType({}, dictionary(group({
            "temp type": prop(component("Temp Type Selection", {
                "global types": aContainingDictionary(parameter("global types")),
            })),
            "selection": prop(component("Value Selection", {})),
        }))),
        "Option Constraints": globalType({}, dictionary(group({
            "temp type": prop(component("Temp Type Selection", {
                "global types": aContainingDictionary(parameter("global types")),
            })), //must be tagged union
            "selection": prop(component("Value Selection", {})),
            "option": prop(resolvedValueReference(valSel("XXXXA"), typeSelection("Type", [grp("type"), tu("tagged union"), grp("options")]))),
        }))),
        "Type": globalType({
            "imports": pResolvedValue("Imports", false),
            "labels": pResolvedValue("Labels", false),
            "all global types": pAllSiblings(typeSelection("Type Library", [grp("global types")])),
            "noncyclic global types": pNonCyclicSiblings(typeSelection("Type Library", [grp("global types")])),
        }, group({
            "classes": prop(constrainedDictionary({}, group({}))),
            "type": prop(taggedUnion({
                "nothing": option(group({
                    "result": prop(optional(group({
                        "temp type": prop(component("Global Type Selection", {
                            "global types": aContainingDictionary(parameter("global types")),
                        })),
                        "selection": prop(component("Value Selection", {})),
                    })))
                })),
                "terminal": option(group({
                    "terminal": prop(component("Atom", {
                        "labels": aResolvedValue(valSel("labels")),
                        "global types": aContainingDictionary(parameter("global types")),
                    })),
                    "constrained": prop(taggedUnion({
                        "no": option(group({
                        })),
                        "yes": option(group({
                            "referencee type": prop(taggedUnion({
                                "resolved value": option(group({
                                    "temp type": prop(component("Temp Type Selection", {
                                        "global types": aContainingDictionary(parameter("global types")),
                                    })),
                                    "selection": prop(component("Value Selection", {})),
                                })),
                                "sibling": option(group({
                                    "temp type": prop(component("Temp Type Selection", {
                                        "global types": aContainingDictionary(parameter("global types")),
                                    })),
                                    "selection": prop(component("Containing Dictionary Selection", {})),
                                })),
                            })),
                        })),
                    })),
                })),
                "dictionary": option(group({
                    "key": prop(component("Atom", {
                        "labels": aResolvedValue(valSel("labels")),
                        "global types": aContainingDictionary(parameter("global types")),
                    })),
                    "constraints": prop(component("Dictionary Constraints", {
                        "global types": aContainingDictionary(parameter("global types")),
                    })),
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
                    //     "temp type": prop(component("Temp Type Selection", {
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
                        "temp type": prop(component("Global Type Selection", {
                            "global types": aContainingDictionary(parameter("global types")),
                        })),
                        "set": prop(component("Optional Value Selection Tail", {})),
                        "not set": prop(component("Value Selection", {})),//validate result is equal to 'set' result
                    })))
                })),
                "tagged union": option(group({
                    "result": prop(optional(component("Global Type Selection", {
                        "global types": aContainingDictionary(parameter("global types")),
                    }))),
                    "options": prop(dictionary(group({
                        "constraints": prop(component("Option Constraints", {})),
                        "variables": prop(component("Variables", {})),
                        "type": prop(component("Type", {
                            "global types": aContainingDictionary(parameter("global types")),
                        })),
                        "result": prop(optional(component("Optional Value Selection Tail", {})))
                    }))),
                    "default": prop(resolvedValueReference(valSel("options"), typeSelection("Type", [grp("type"), tu("tagged union"), grp("options")]))),
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
                    "context": prop(resultTaggedUnion(globalTypeSelection("Type Library"), {
                        "local": option(group({})),
                        "import": option(group({
                            "library": prop(resolvedValueReference(valSel("imports"), typeSelection("Imports", []))),
                        })),
                    })),
                    "type": prop(resolvedValueReference(valSel("context", staggedunion(sgrp("global types"))), typeSelection("Type Library", [grp("global types")]))),
                    "arguments": prop(constrainedDictionary({
                        "parameter": dictConstraint(valSel("type", ref(sgrp("parameters"))), typeSelection("Parameters", []))
                    }, group({
                        "type": prop(taggedUnion({
                            "resolved value": option(component("Value Selection", {})),
                            "containing dictionary": option(component("Containing Dictionary Selection", {})),
                        })),
                    }))),
                })),
            })),
        })),
        "Value Selection Tail": globalType({
            "type": pResolvedValue("Type", false),
        }, group({
            "step type": prop(resultTaggedUnion(globalTypeSelection("Type"), {
                "reference": constrainedOption({
                    "reference": optionConstraint(valSel("type"), "terminal", typeSelection("Type", [grp("type")]))
                }, group({
                })),
                "component": constrainedOption({
                    "component": optionConstraint(valSel("type"), "component", typeSelection("Type", [grp("type")]))
                }, group({
                })),
                "tagged union": constrainedOption({
                    "tagged union": optionConstraint(valSel("type"), "tagged union", typeSelection("Type", [grp("type")]))
                }, group({
                })),
                "optional": constrainedOption({
                    "optional": optionConstraint(valSel("type"), "optional", typeSelection("Type", [grp("type")]))
                }, group({
                })),
                "nothing": constrainedOption({
                    "nothing": optionConstraint(valSel("type"), "nothing", typeSelection("Type", [grp("type")]))
                }, group({
                })),
                "group": constrainedOption({
                    "group": optionConstraint(valSel("type"), "group", typeSelection("Type", [grp("type")]))
                }, group({
                    "property": prop(resolvedValueReference(valSel("group"), typeSelection("Type", [grp("type"), tu("group"), grp("properties")]))),
                })),
            })),
            "tail": prop(optional(component("Value Selection Tail", {
                "type": aResolvedValue(valSel("step type", staggedunion()))
            }), optionalResult(globalTypeSelection("Type"), scomponent(), valSel("step type")))),
        }), globalTypeResult(globalTypeSelection("Type"), sgrp("tail", soptional()))),
        "Optional Value Selection Tail": globalType({
            "type": pResolvedValue("Type", false),
        }, optional(component("Value Selection Tail", {}))),
        "Reference Initializer": globalType({
        }, group({
            //FIXME
        })),
        "Atom Initializer": globalType({
        }, group({
            "constrained": prop(taggedUnion({
                // "no": option(group({
                //     "type": prop(resolvedValueReference(valSel("TBD")), typeSelection("Type Library", [grp("labels")]))),
                // })),
                "yes": option(component("Reference Initializer", {
                })),
            })),
        })),
        "Type Initializer": globalType({}, taggedUnion({
            "terminal": option(component("Atom Initializer", {
            })),
            // "dictionary": option(group({
            //     "key": prop(component("Atom Initializer", {
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
            //         "Temp Type Selection": prop(component("Temp Type Selection", {
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
                "option": prop(resolvedValueReference(valSel("TBD"), typeSelection("Type", [grp("type"), tu("tagged union"), grp("options")]))),
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
        "Labels": globalType({}, group({
            "atom types": prop(dictionary(group({}))),
        })),
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
                    "type": prop(component("Global Type Selection", {
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
            "labels": prop(component("Labels", {})),
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
        "Temp Type Selection Tail": globalType({
            "context": pResolvedValue("Type", false)
        }, group({
            "step type": prop(resultTaggedUnion(globalTypeSelection("Type"), {
                "dictionary": constrainedOption({
                    "dictionary": optionConstraint(valSel("type"), "dictionary", typeSelection("Type", [grp("type")]))
                }, group({})),
                "optional": constrainedOption({
                    "optional": optionConstraint(valSel("type"), "optional", typeSelection("Type", [grp("type")]))
                }, group({})),
                "array": constrainedOption({
                    "array": optionConstraint(valSel("type"), "array", typeSelection("Type", [grp("type")]))
                }, group({})),
                "group": constrainedOption({
                    "group": optionConstraint(valSel("type"), "group", typeSelection("Type", [grp("type")]))
                }, group({
                    "property": prop(resolvedValueReference(valSel("group"), typeSelection("Type", [grp("type"), tu("group"), grp("properties")])))
                })),
                "tagged union": constrainedOption({
                    "tagged union": optionConstraint(valSel("type"), "tagged union", typeSelection("Type", [grp("type")]))
                }, group({
                    "option": prop(resolvedValueReference(valSel("tagged union"), typeSelection("Type", [grp("type"), tu("tagged union"), grp("options")]))),
                })),
            })),
        })),
        "Temp Type Selection": globalType({
            "global types": pAllSiblings(typeSelection("Type Library", [grp("global types")]))
        }, group({

            "global type": prop(component("Global Type Selection", {})),
            "tail": prop(array(component("Temp Type Selection Tail", {})))
        })),
        "Model": globalType({}, group({
            "type library": prop(component("Type Library", {})),
            "root": prop(resolvedValueReference(valSel("type library", sgrp("global types")), typeSelection("Type Library", [grp("global types")]))),
        })),
    }),
}