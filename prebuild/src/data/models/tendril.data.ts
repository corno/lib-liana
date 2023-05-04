import * as pd from 'pareto-core-data'

import * as g_tendril from "lib-liana/dist/submodules/tendril"

import {
    array,
    resolvedSiblingComponent, constrainedDictionary,
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
    lookupReference,
    t_grp,
    t_tu,
    taggedUnion,
    tempTypeSelection, globalTypeResult
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
        "Dictionary Constraints": globalType(
            dictionary(group({
                "type": prop(resolvedSiblingComponent("Type Selection")),
            }))
        ),
        "Option Constraints": globalType(
            dictionary(group({
                "type": prop(resolvedSiblingComponent("Type Selection")),
                "option": prop(resolvedValueReference(tempTypeSelection("Type", t_grp("type", t_tu("tagged union", t_grp("options")))))),
            }))
        ),
        "Type": globalType(
            group({
                "type": prop(taggedUnion({
                    "nothing": option(group({
                        "result": prop(optional(group({
                            "type": prop(resolvedSiblingComponent("Global Type Selection")),
                        })))
                    })),
                    "terminal": option(group({
                        "terminal": prop(resolvedSiblingComponent("Atom")),
                        "constrained": prop(taggedUnion({
                            "no": option(group({
                            })),
                            "yes": option(group({

                                "type": prop(resolvedSiblingComponent("Type Selection")),
                                "computed": prop(taggedUnion({
                                    "no": option(group({})),
                                    "yes": option(group({})),
                                }))
                            })),
                        })),
                    })),
                    "dictionary": option(group({
                        "key": prop(resolvedSiblingComponent("Atom")),
                        "constraints": prop(resolvedSiblingComponent("Dictionary Constraints")),
                        "type": prop(resolvedSiblingComponent("Type")),
                    })),
                    "array": option(group({
                        "type": prop(resolvedSiblingComponent("Type")),
                    })),
                    "optional": option(group({
                        "type": prop(resolvedSiblingComponent("Type")),
                        "result": prop(optional(group({
                            "type": prop(resolvedSiblingComponent("Global Type Selection")),
                        })))
                    })),
                    "tagged union": option(group({
                        "result": prop(optional(resolvedSiblingComponent("Global Type Selection"))),
                        "options": prop(dictionary(group({
                            "constraints": prop(resolvedSiblingComponent("Option Constraints")),
                            "type": prop(resolvedSiblingComponent("Type")),
                        }))),
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
                            "cyclic sibling": option(group({
                                "type": prop(lookupReference(tempTypeSelection("Type Library", t_grp("global types")))),
                            })),
                        })),
                    })),
                })),
            })
        ),
        "Properties": globalType(
            dictionary(group({
                "type": prop(resolvedSiblingComponent("Type")),
            }))
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
        "Imports": globalType(
            dictionary(group({}))
        ),
        "Global Type": globalType(
            group({
                "type": prop(resolvedSiblingComponent("Type")),
                "result": prop(optional(group({
                    "type": prop(resolvedSiblingComponent("Global Type Selection")),

                }))),
            })
        ),
        "Type Selection Tail": globalType(
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
                "tail": prop(optional(resolvedSiblingComponent("Type Selection Tail")))
            })
        ),
        "Type Selection": globalType(
            group({

                "global type": prop(resolvedSiblingComponent("Global Type Selection")),
                "tail": prop(optional(resolvedSiblingComponent("Type Selection Tail")))
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