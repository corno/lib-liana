import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "lib-pareto-lang-data"

import {
    array, constrainedDictionary,
    constrainedState,
    dictionary,
    globalType,
    group,
    state,
    dictionaryConstraint,
    stateConstraint,
    optional,
    prop,
    t_grp,
    t_sg,
    stateGroup,
    typeSelection,
    component,
    typeRef,
    dictionaryReference,
    lookupConstraint,
    cyclicReference,
    lookupReference,
} from "lib-pareto-lang-data/dist/submodules/unresolved/shorthands"


import * as pv from 'pareto-core-dev'

import * as g_pareto_lang_data_settings from "lib-pareto-lang-data/dist/submodules/2submodules"


const d = pd.d
const a = pd.a

export const $: g_pareto_lang_data_settings.T.GenerateSubmodulesParameters = {
    'path': a([`../../pareto/src/data/submodules`]),
    'data': {
        'library': g_pareto_lang_data.$b.resolve({
            'onError': ($) => {
                pv.logDebugMessage($.message[0])
            }
        })({
            'imports': d({}),
            'root': {
                'type library': {
                    'imports': pd.d({}),
                    'atom types': pd.d({
                        "text": null,
                        "identifier": null,
                    }),
                    'global types': pd.d({
                        "Atom Types": globalType(
                            dictionary(group({}))
                        ),
                        "Atom": globalType(
                            group({
                                "type": prop(dictionaryReference(typeSelection("Atom Types"))),
                            })
                        ),
                        "Parameters": globalType(
                            dictionary(group({
                                "type": prop(stateGroup({
                                    "resolved value": state(group({
                                        "type": prop(component(typeRef("Global Type Selection", true))),
                                        "optional": prop(stateGroup({
                                            "no": state(group({})),
                                            "yes": state(group({})),
                                        }))
                                    })),
                                    "lookup": state(group({
                                        "type": prop(component(typeRef("Global Type Selection", true))),
                                        // "kind": prop(stateGroup({
                                        //     "non cyclic": state(group({})),
                                        //     "cyclic": state(group({})),
                                        // }))
                                    })),
                                })),
                            }))
                        ),
                        "Dictionary Constraints": globalType(
                            dictionary(stateGroup({
                                "dictionary": state(group({
                                    "dictionary": prop(component(typeRef("Dictionary Selection", true))),
                                    "dense": prop(stateGroup({
                                        "no": state(group({})),
                                        "yes": state(group({})),
                                    }))
                                })),
                                "lookup": state(component(typeRef("Lookup Selection", true))),
                            }))
                        ),
                        "State Constraints": globalType(
                            dictionary(component(typeRef("State Selection", true)))
                        ),
                        "Property": globalType(
                            group({
                                "type": prop(component(typeRef("Type", true))),
                            })
                        ),
                        "Type": globalType(
                            group({
                                "type": prop(stateGroup({
                                    "array": state(group({
                                        "type": prop(component(typeRef("Type", true))),
                                    })),
                                    "atom": state(group({
                                        "atom": prop(component(typeRef("Atom"))),
                                    })),
                                    "component": state(group({
                                        "type": prop(component(typeRef("Global Type Selection", true))),
                                        "arguments": prop(constrainedDictionary({
                                            "parameter": dictionaryConstraint(typeSelection("Parameters"), true),
                                        }, group({
                                            "type": prop(stateGroup({
                                                "resolved value": state(component(typeRef("Value Selection", true))),
                                                "lookup": state(component(typeRef("Lookup Selection", true))),
                                            })),
                                        }))),
                                    })),
                                    // "cyclic reference": state(group({
                                    //     "atom": prop(component(typeRef("Atom"))),
                                    //     "sibling": component(typeRef("Global Type Selection", true)),
                                    // })),
                                    "dictionary": state(group({
                                        "key": prop(component(typeRef("Atom"))),
                                        "constraints": prop(component(typeRef("Dictionary Constraints"))),
                                        "variables": prop(component(typeRef("Variables"))),
                                        "type": prop(component(typeRef("Type", true))),
                                    })),
                                    "group": state(group({
                                        "variables": prop(component(typeRef("Variables"))),
                                        "properties": prop(dictionary(component(typeRef("Property")))),
                                    })),
                                    "nothing": state(group({
                                        "result": prop(optional(component(typeRef("Value Selection", true))))
                                    })),
                                    "optional": state(group({
                                        "type": prop(component(typeRef("Type", true))),
                                        "result": prop(optional(group({
                                            "set": prop(component(typeRef("Any Value Selection", true))),
                                            "not set": prop(component(typeRef("Value Selection", true))),//validate result is equal to 'set' result
                                        })))
                                    })),
                                    "resolved reference": state(group({
                                        "atom": prop(component(typeRef("Atom"))),
                                        "value": prop(stateGroup({
                                            "dictionary": state(component(typeRef("Dictionary Selection", true))),
                                            "lookup": state(component(typeRef("Lookup Selection", true))),
                                        }))
                                    })),
                                    "state group": state(group({
                                        "result": prop(optional(component(typeRef("Global Type Selection", true)))),
                                        "states": prop(dictionary(group({
                                            "constraints": prop(component(typeRef("State Constraints"))),
                                            "variables": prop(component(typeRef("Variables"))),
                                            "type": prop(component(typeRef("Type", true))),
                                            "result": prop(optional(component(typeRef("Any Value Selection", true))))
                
                                        }))),
                                    })),
                                })),
                            })
                        ),
                        "Imports": globalType(
                            constrainedDictionary(
                                {
                                    "library": lookupConstraint(typeRef("Type Library", true))
                                },
                                group({})
                            )
                        ),
                        "Global Type": globalType(
                            group({
                                "parameters": prop(component(typeRef("Parameters"))),
                                "variables": prop(component(typeRef("Variables"))),
                                "type": prop(component(typeRef("Type"))),
                                "result": prop(optional(component(typeRef("Any Value Selection", true)))),
                            })
                        ),
                        "Global Types": globalType(
                            dictionary(component(typeRef("Global Type")))
                        ),
                        "Variable": globalType(
                            stateGroup({
                                "sibling property": state(lookupReference(typeRef("Property"))),
                                "option constraint": state(dictionaryReference(typeSelection("State Constraints"))),
                                "dictionary constraint": state(dictionaryReference(typeSelection("Dictionary Constraints"))),
                                "parameter": state(dictionaryReference(typeSelection("Parameters"))),
                                "parent variable": state(lookupReference(typeRef("Variable", true))),
                            })
                        ),
                        "Variables": globalType(
                            dictionary(component(typeRef("Variable")))
                        ),
                        "Value Selection Tail": globalType(
                            group({
                                "step type": prop(stateGroup({
                                    "reference": constrainedState({
                                        "reference": stateConstraint(typeSelection("Type", t_grp("type")), "resolved reference")
                                    }, group({
                                    })),
                                    "component": constrainedState({
                                        "component": stateConstraint(typeSelection("Type", t_grp("type")), "component")
                                    }, group({
                                    })),
                                    "state group": constrainedState({
                                        "state group": stateConstraint(typeSelection("Type", t_grp("type")), "state group")
                                    }, group({
                                    })),
                                    "optional": constrainedState({
                                        "optional": stateConstraint(typeSelection("Type", t_grp("type")), "optional")
                                    }, group({
                                    })),
                                    "nothing": constrainedState({
                                        "nothing": stateConstraint(typeSelection("Type", t_grp("type")), "nothing")
                                    }, group({
                                    })),
                                    "group": constrainedState({
                                        "group": stateConstraint(typeSelection("Type", t_grp("type")), "group")
                                    }, group({
                                        "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
                                    })),
                
                
                                    // "dictionary": constrainedState({
                                    //     "dictionary": stateConstraint(typeSelection("Type", t_grp("type")), "dictionary")
                                    // }, group({})),
                                    // "optional": constrainedState({
                                    //     "optional": stateConstraint(typeSelection("Type", t_grp("type")), "optional")
                                    // }, group({})),
                                    // "array": constrainedState({
                                    //     "array": stateConstraint(typeSelection("Type", t_grp("type")), "array")
                                    // }, group({})),
                                    // "group": constrainedState({
                                    //     "group": stateConstraint(typeSelection("Type", t_grp("type")), "group")
                                    // }, group({
                                    //     "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties"))))))))
                                    // })),
                                    // "state group": constrainedState({
                                    //     "state group": stateConstraint(typeSelection("Type", t_grp("type")), "state group")
                                    // }, group({
                                    //     "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))))),
                                    // })),
                                })),
                                "tail": prop(optional(component(typeRef("Value Selection Tail", true))))
                            }),
                        ),
                        "Value Selection": globalType(
                            group({
                                "start": prop(dictionaryReference(typeSelection("Variables"))),
                                "tail": prop(optional(component(typeRef("Value Selection Tail"))))
                            }),
                        ),
                        "Any Value Selection": globalType(
                            group({
                                "start": prop(optional(dictionaryReference(typeSelection("Variables")))),
                                "tail": prop(optional(component(typeRef("Value Selection Tail"))))
                            }),
                        ),
                        "State Selection": globalType(
                            group({
                                "type": prop(component(typeRef("Value Selection"))),
                                "cast": prop(stateGroup({
                                    "state group": constrainedState(
                                        {
                                            "state group": stateConstraint(typeSelection("Type", t_grp("type")), "state group")
                                        },
                                        group({
                                            "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))),
                                        }),
                                    )
                                }))
                            })
                        ),
                        "Dictionary Selection": globalType(
                            group({
                                "type": prop(component(typeRef("Value Selection"))),
                                "cast": prop(stateGroup({
                                    "dictionary": constrainedState(
                                        {
                                            "dictionary": stateConstraint(typeSelection("Type", t_grp("type")), "dictionary")
                                        },
                                        group({}),
                                    )
                                })),
                
                            })
                        ),
                        "Global Type Selection": globalType(
                            stateGroup({
                                "resolved sibling": state(group({
                                    "type": prop(lookupReference(typeRef("Global Type"))),
                                })),
                                "import": state(group({
                                    "library": prop(dictionaryReference(typeSelection("Imports"))),
                                    "type": prop(dictionaryReference(typeSelection("Global Types"))),
                                })),
                            }),
                        ),
                        "Lookup Selection": globalType(
                            stateGroup({
                                "resolved dictionary": state(component(typeRef("Value Selection"))),
                                "this": state(group({
                                    // "type": prop(stateGroup({
                                    //     "non cyclic": state(group({})),
                                    //     "cyclic": state(group({})),
                                    // }))
                                })),
                                "parameter": state(dictionaryReference(typeSelection("Parameters"))),
                            })
                        ),
                        "Type Library": globalType(
                            group({
                                "imports": prop(component(typeRef("Imports"))),
                                "atom types": prop(component(typeRef("Atom Types"))),
                                "global types": prop(component(typeRef("Global Types"))),
                            })
                        ),
                        "Model": globalType(
                            group({
                                "type library": prop(component(typeRef("Type Library"))),
                                "root": prop(dictionaryReference(typeSelection("Global Types"))),
                            })
                        ),
                        "Root": globalType(
                            component(typeRef("Model"))
                        )
                    }),
                },
                'root': {
                    'annotation': pd.getLocationInfo(0),
                    'key': "Root"
                }
            }
        })['type library'],
        'atom mappings': d({
            "identifier": ['string', null],
            "text": ['string', null],
        })
    }

}
