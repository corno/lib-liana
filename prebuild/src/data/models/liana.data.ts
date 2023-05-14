import * as pd from 'pareto-core-data'

import * as g_pareto_lang_data from "lib-pareto-lang-data"

import {
    array, constrainedDictionary,
    dictionary,
    globalType,
    group,
    state,
    dictionaryConstraint,
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
    constraint,
    t_dict,
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
                pv.logDebugMessage(`XX: ${$.message[0]}`)
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
                                "type": prop(component(typeRef("Global Type Selection", true))),
                                "optional": prop(stateGroup({
                                    "no": state(group({})),
                                    "yes": state(group({})),
                                }))
                                // "type": prop(stateGroup({
                                //     "resolved value": state(group({
                                //     })),
                                //     // "lookup": state(group({
                                //     //     "type": prop(component(typeRef("Global Type Selection", true))),
                                //     //     // "kind": prop(stateGroup({
                                //     //     //     "non cyclic": state(group({})),
                                //     //     //     "cyclic": state(group({})),
                                //     //     // }))
                                //     // })),
                                // })),
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
                                //"lookup": state(component(typeRef("Lookup Selection", true))),
                            }))
                        ),
                        "State Constraints": globalType(
                            dictionary(component(typeRef("State Selection", true)))
                        ),
                        "Property": globalType(
                            group({
                                "variables": prop(component(typeRef("Variables", true))),
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
                                                "resolved value": state(component(typeRef("No Context Value Selection", true))),
                                                //"lookup": state(component(typeRef("Lookup Selection", true))),
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
                                        "properties": prop(dictionary(component(typeRef("Property")))),
                                    })),
                                    "nothing": state(group({
                                    })),
                                    "optional": state(group({
                                        "constraints": prop(component(typeRef("State Constraints"))),
                                        "variables": prop(component(typeRef("Variables"))),
                                        "type": prop(component(typeRef("Type", true))),
                                    })),
                                    "resolved reference": state(group({
                                        "atom": prop(component(typeRef("Atom"))),
                                        "dictionary": prop(component(typeRef("Dictionary Selection", true))),
                                    })),
                                    "state group": state(group({
                                        "states": prop(dictionary(group({
                                            "constraints": prop(component(typeRef("State Constraints"))),
                                            "variables": prop(component(typeRef("Variables"))),
                                            "type": prop(component(typeRef("Type", true))),
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
                                "state constraint": state(dictionaryReference(typeSelection("State Constraints"))),
                                "dictionary constraint": state(dictionaryReference(typeSelection("Dictionary Constraints"))),
                                "parameter": state(group({
                                    "parameter": prop(dictionaryReference(typeSelection("Parameters"))),
                                    //"resolved value": prop(constraint(typeSelection("Parameters", t_dict(t_grp("type", t_sg("resolved value"))))))
                                })),
                                "parent variable": state(lookupReference(typeRef("Variable", true))),
                            })
                        ),
                        "Variables": globalType(
                            dictionary(component(typeRef("Variable")))
                        ),
                        "Value Selection Tail": globalType(
                            stateGroup({
                                "reference": state(group({
                                    "reference": prop(constraint(typeSelection("Type", t_grp("type", t_sg("resolved reference"))))),
                                    "tail": prop(optional(component(typeRef("Value Selection Tail", true))))
                                })),
                                "component": state(group({
                                    "component": prop(constraint(typeSelection("Type", t_grp("type", t_sg("component"))))),
                                    "tail": prop(optional(component(typeRef("Value Selection Tail", true))))

                                })),
                                "state group": state(group({
                                    "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
                                    "result type": prop(component(typeRef("Global Type Selection", true))),
                                    "states": prop(constrainedDictionary(
                                        {
                                            "state": dictionaryConstraint(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))), true)
                                        },
                                        component(typeRef("Any Value Selection", true))
                                    ))
                                })),
                                // "optional": state(group({
                                //     "optional": prop(constraint(typeSelection("Type", t_grp("type", t_sg("optional"))))),
                                //     "set": prop(component(typeRef("Any Value Selection", true))),
                                //     "not set": prop(component(typeRef("No Context Value Selection", true))),//validate result is equal to 'set' result
                                // })),
                                "group": state(group({
                                    "group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("group"))))),
                                    "property": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("group", t_grp("properties")))))),
                                    "tail": prop(optional(component(typeRef("Value Selection Tail", true))))
                                })),


                            }),
                        ),
                        "No Context Value Selection": globalType(
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
                                "type": prop(component(typeRef("No Context Value Selection"))),
                                "state group": prop(constraint(typeSelection("Type", t_grp("type", t_sg("state group"))))),
                                "state": prop(dictionaryReference(typeSelection("Type", t_grp("type", t_sg("state group", t_grp("states")))))),
                            })
                        ),
                        "Dictionary Selection": globalType(
                            group({
                                "type": prop(component(typeRef("No Context Value Selection"))),
                                "dictionary": prop(constraint(typeSelection("Type", t_grp("type", t_sg("dictionary"))))),
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
                        // "Lookup Selection": globalType(
                        //     stateGroup({
                        //         "resolved dictionary": state(component(typeRef("No Context Value Selection"))),
                        //         "this": state(group({
                        //             "containing dictionary": prop(constraint(typeSelection("Type", t_grp("type", t_sg("dictionary"))))),
                        //         })),
                        //         "parameter": state(group({
                        //             "parameter": prop(dictionaryReference(typeSelection("Parameters"))),
                        //             //"lookup": prop(constraint(typeSelection("Parameters", t_dict(t_grp("type", t_sg("lookup"))))))
                        //         })),
                        //     })
                        // ),
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
