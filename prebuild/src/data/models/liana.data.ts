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
    t_grp,
    option,
    optionConstraint,
    optional, pAllSiblings, pNonCyclicSiblings, pResolvedValue, parameter, prop,
    resolvedValueReference, siblingReference,
    taggedUnion, t_tu, tempTypeSelection, valSel, sgrp, globalTypeSelection, ref, staggedunion, resultTaggedUnion, globalTypeResult, scomponent, soptional, optionalResult
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
            "type": prop(resolvedValueReference(valSel("labels"), tempTypeSelection("Labels", [t_grp("atom types")]))),
        })),
        "Variables": globalType({
            "parameters": pResolvedValue("Parameters", true),
            "option constraints": pResolvedValue("Option Constraints", true),
            "dictionary constraints": pResolvedValue("Dictionary Constraints", true),
            "parent variables": pResolvedValue("Variables", true),
            "siblings": pNonCyclicSiblings(globalTypeSelection("Properties"))
        }, dictionary(taggedUnion({
            "option constraint": option(resolvedValueReference(valSel("option constraints"), tempTypeSelection("Option Constraints", []))),
            "dictionary constraint": option(resolvedValueReference(valSel("dictionary constraints"), tempTypeSelection("Dictionary Constraints", []))),
            "parameter": option(resolvedValueReference(valSel("parameters"), tempTypeSelection("Parameters", []))),
            "parent variable": option(resolvedValueReference(valSel("parent variables"), tempTypeSelection("Variables", []))),
            "sibling": option(siblingReference(parameter("siblings"), tempTypeSelection("Properties", []))),
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
            "option": prop(resolvedValueReference(valSel("XXXXA"), tempTypeSelection("Type", [t_grp("type"), t_tu("tagged union"), t_grp("options")]))),
        }))),
        "Type": globalType({
            "imports": pResolvedValue("Imports", false),
            "labels": pResolvedValue("Labels", false),
            "all global types": pAllSiblings(globalTypeSelection("Global Type")),
            "noncyclic global types": pNonCyclicSiblings(globalTypeSelection("Global Type")),
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
                        "set": prop(component("Any Value Selection", {})),
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
                        "result": prop(optional(component("Any Value Selection", {})))
                    }))),
                    "default": prop(resolvedValueReference(valSel("options"), tempTypeSelection("Type", [t_grp("type"), t_tu("tagged union"), t_grp("options")]))),
                })),
                "group": option(group({
                    "properties": prop(component("Properties", {})),
                })),
                "component": option(group({
                    "context": prop(resultTaggedUnion(globalTypeSelection("Type Library"), {
                        "local": option(group({})),
                        "import": option(group({
                            "library": prop(resolvedValueReference(valSel("imports"), tempTypeSelection("Imports", []))),
                        })),
                    })),
                    "type": prop(resolvedValueReference(valSel("context", staggedunion(sgrp("global types"))), tempTypeSelection("Type Library", [t_grp("global types")]))),
                    "arguments": prop(constrainedDictionary({
                        "parameter": dictConstraint(valSel("type", ref(sgrp("parameters"))), tempTypeSelection("Parameters", []))
                    }, group({
                        "type": prop(taggedUnion({
                            "resolved value": option(component("Value Selection", {})),
                            "containing dictionary": option(component("Containing Dictionary Selection", {})),
                        })),
                    }))),
                })),
            })),
        })),
        "Properties": globalType({}, dictionary(group({
            "variables": prop(component("Variables", {})),
            "type": prop(component("Type", {
                "global types": aContainingDictionary(parameter("global types")),
            })),
        }))),
        "Value Selection Tail": globalType({
            "type": pResolvedValue("Type", false),
        }, group({
            "step type": prop(resultTaggedUnion(globalTypeSelection("Type"), {
                "reference": constrainedOption({
                    "reference": optionConstraint(valSel("type"), "terminal", tempTypeSelection("Type", [t_grp("type")]))
                }, group({
                })),
                "component": constrainedOption({
                    "component": optionConstraint(valSel("type"), "component", tempTypeSelection("Type", [t_grp("type")]))
                }, group({
                })),
                "tagged union": constrainedOption({
                    "tagged union": optionConstraint(valSel("type"), "tagged union", tempTypeSelection("Type", [t_grp("type")]))
                }, group({
                })),
                "optional": constrainedOption({
                    "optional": optionConstraint(valSel("type"), "optional", tempTypeSelection("Type", [t_grp("type")]))
                }, group({
                })),
                "nothing": constrainedOption({
                    "nothing": optionConstraint(valSel("type"), "nothing", tempTypeSelection("Type", [t_grp("type")]))
                }, group({
                })),
                "group": constrainedOption({
                    "group": optionConstraint(valSel("type"), "group", tempTypeSelection("Type", [t_grp("type")]))
                }, group({
                    "property": prop(resolvedValueReference(valSel("group"), tempTypeSelection("Properties", []))),
                })),
            })),
            "tail": prop(optional(component("Value Selection Tail", {
                "type": aResolvedValue(valSel("step type", staggedunion()))
            }), optionalResult(globalTypeSelection("Type"), scomponent(), valSel("step type")))),
        }), globalTypeResult(globalTypeSelection("Type"), sgrp("tail", soptional()))),
        "Any Value Selection": globalType({
            "type": pResolvedValue("Type", false),
        }, group({
            "start": prop(optional(resolvedValueReference(valSel("TBD"), tempTypeSelection("Variables", [])))),
            "tail": prop(optional(component("Value Selection Tail", {})))
        })),
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
                "option": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Type", [t_grp("type"), t_tu("tagged union"), t_grp("options")]))),
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
            "start": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Variables", []))),
            "tail": prop(optional(component("Value Selection Tail", {})))
        })),
        "Containing Dictionary Selection": globalType({}, taggedUnion({
            "this": option(group({
                "type": prop(taggedUnion({
                    "non cyclic": option(group({})),
                    "cyclic": option(group({})),
                }))
            })),
            "parameter": option(resolvedValueReference(valSel("TBD"), tempTypeSelection("Parameters", []))),
        })),
        "Global Type Selection": globalType({}, group({
            "import": prop(optional(resolvedValueReference(valSel("TBD"), tempTypeSelection("Imports", [])))),
            "type": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Type Library", [t_grp("global types")]))),

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
        "Global Type": globalType({}, group({
            "parameters": prop(component("Parameters", {})),
            "variables": prop(component("Variables", {})),
            "type": prop(component("Type", {
                "global types": aContainingDictionary(parameter("global types")),
            })),
            "result": prop(optional(group({
                "temp type": prop(component("Global Type Selection", {})),
                "selection": prop(component("Any Value Selection", {})),
            })))
        })),
        "Type Library": globalType({}, group({
            "imports": prop(component("Imports", {})),
            "labels": prop(component("Labels", {})),
            "global types": prop(dictionary(component("Global Type", {}))),
        })),
        "Temp Type Selection Tail": globalType({
            "context": pResolvedValue("Type", false)
        }, group({
            "step type": prop(resultTaggedUnion(globalTypeSelection("Type"), {
                "dictionary": constrainedOption({
                    "dictionary": optionConstraint(valSel("type"), "dictionary", tempTypeSelection("Type", [t_grp("type")]))
                }, group({})),
                "optional": constrainedOption({
                    "optional": optionConstraint(valSel("type"), "optional", tempTypeSelection("Type", [t_grp("type")]))
                }, group({})),
                "array": constrainedOption({
                    "array": optionConstraint(valSel("type"), "array", tempTypeSelection("Type", [t_grp("type")]))
                }, group({})),
                "group": constrainedOption({
                    "group": optionConstraint(valSel("type"), "group", tempTypeSelection("Type", [t_grp("type")]))
                }, group({
                    "property": prop(resolvedValueReference(valSel("group"), tempTypeSelection("Properties", [])))
                })),
                "tagged union": constrainedOption({
                    "tagged union": optionConstraint(valSel("type"), "tagged union", tempTypeSelection("Type", [t_grp("type")]))
                }, group({
                    "option": prop(resolvedValueReference(valSel("tagged union"), tempTypeSelection("Type", [t_grp("type"), t_tu("tagged union"), t_grp("options")]))),
                })),
            })),
        })),
        "Temp Type Selection": globalType({
            "global types": pAllSiblings(globalTypeSelection("Global Type"))
        }, group({

            "global type": prop(component("Global Type Selection", {})),
            "tail": prop(array(component("Temp Type Selection Tail", {})))
        })),
        "Model": globalType({}, group({
            "type library": prop(component("Type Library", {})),
            "root": prop(resolvedValueReference(valSel("type library", sgrp("global types")), tempTypeSelection("Type Library", [t_grp("global types")]))),
        })),
    }),
}