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
    globalType,
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
    tempTypeSelection, valSel, globalTypeResult, thisCyclic
} from "lib-liana/dist/submodules/liana/shorthands"

const forwardComponent = component

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'labels': {
        'atom types': pd.d({
            "text": null,
        }),
    },
    'global types': pd.d({
        "Atom": globalType(
            {
                "labels": pResolvedValue("Labels", false),
            },
            group({
                "type": prop(resolvedValueReference(valSel("labels"), tempTypeSelection("Labels", t_grp("atom types")))),
            })
        ),
        "Dictionary Constraints": globalType(
            {},
            dictionary(group({
                "type": prop(component("Type Selection", {
                    "global types": aLookup(lparameter("global types")),
                })),
            }))
        ),
        "Option Constraints": globalType(
            {},
            dictionary(group({
                "type": prop(component("Type Selection", {
                    "global types": aLookup(lparameter("global types")),
                })), //must be tagged union
                "option": prop(resolvedValueReference(valSel("XXXXA"), tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
            }))
        ),
        "Type": globalType(
            {
                "imports": pResolvedValue("Imports", false),
                "labels": pResolvedValue("Labels", false),
            },
            group({
                "type": prop(taggedUnion({
                    "nothing": option(group({
                        "result": prop(optional(group({
                            "type": prop(component("Global Type Selection", {
                                "global types": aLookup(lparameter("global types")),
                            })),
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

                                "type": prop(component("Type Selection", {
                                    "global types": aLookup(lparameter("global types")),
                                })),
                                "computed": prop(taggedUnion({
                                    "no": option(group({})),
                                    "yes": option(group({})),
                                }))
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
                        "type": prop(component("Type", {
                            "global types": aLookup(lparameter("global types")),
                        })),
                    })),
                    "array": option(group({
                        "type": prop(component("Type", {
                            "global types": aLookup(lparameter("global types")),
                        })),
                    })),
                    "optional": option(group({
                        "type": prop(component("Type", {})),
                        "result": prop(optional(group({
                            "type": prop(component("Global Type Selection", {
                                "global types": aLookup(lparameter("global types")),
                            })),
                        })))
                    })),
                    "tagged union": option(group({
                        "result": prop(optional(component("Global Type Selection", {
                            "global types": aLookup(lparameter("global types")),
                        }))),
                        "options": prop(dictionary(group({
                            "constraints": prop(component("Option Constraints", {})),
                            "type": prop(component("Type", {
                                "global types": aLookup(lparameter("global types")),
                            })),
                        }))),
                    })),
                    "group": option(group({
                        "properties": prop(component("Properties", {})),
                    })),
                    "component": option(group({
                        "context": prop(resultTaggedUnion(globalTypeSelection("Type Library"), {
                            "resolved sibling": option(group({
                                "type": prop(resolvedValueReference(valSel("context", s_taggedunion(s_group("global types", s_group("declarations")))), tempTypeSelection("Type Library", t_grp("global types")))),
                            })),
                            "import": option(group({
                                "library": prop(resolvedValueReference(valSel("imports"), tempTypeSelection("Imports"))),
                                "type": prop(resolvedValueReference(valSel("context", s_taggedunion(s_group("global types", s_group("declarations")))), tempTypeSelection("Type Library", t_grp("global types")))),
                            })),
                            "cyclic sibling": option(group({
                                "type": prop(lookupReference(lparameter("TBD"), tempTypeSelection("Type Library", t_grp("global types")))),
                            })),
                        })),
                    })),
                })),
            })
        ),
        "Properties": globalType(
            {},
            dictionary(group({
                "type": prop(component("Type", {
                    "global types": aLookup(lparameter("global types")),
                })),
            }))
        ),
        "Global Type Selection": globalType(
            {},
            group({
                "import": prop(optional(resolvedValueReference(valSel("TBD"), tempTypeSelection("Imports")))),
                "type": prop(resolvedValueReference(valSel("TBD"), tempTypeSelection("Type Library", t_grp("global types")))),
            })
        ),
        "Labels": globalType(
            {},
            group({
                "atom types": prop(dictionary(group({}))),
            })
        ),
        "Imports": globalType(
            {},
            dictionary(group({}))
        ),
        "Global Type": globalType(
            {},
            group({
                "type": prop(component("Type", {})),
                "result": prop(optional(group({
                    "type": prop(component("Global Type Selection", {})),

                }))),
            })
        ),
        "Type Selection Tail": globalType(
            {
                "context": pResolvedValue("Type", false)
            },
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
                "tail": prop(optional(component("Type Selection Tail", {})))
            })
        ),
        "Type Selection": globalType(
            {
                "global types": pCyclicLookup(globalTypeSelection("Global Type Declaration"))
            },
            group({

                "global type": prop(component("Global Type Selection", {})),
                "tail": prop(optional(component("Type Selection Tail", {})))
            })
        ),
        "Type Library": globalType(
            {},
            group({
                "imports": prop(component("Imports", {})),
                "labels": prop(component("Labels", {})),
                "global types": prop(dictionary(component("Global Type", {}))),
            })
        ),
        "Model": globalType(
            {},
            group({
                "type library": prop(component("Type Library", {})),
                "root": prop(resolvedValueReference(valSel("type library", s_group("global types")), tempTypeSelection("Type Library", t_grp("global types")))),
            })
        ),
    }),
}