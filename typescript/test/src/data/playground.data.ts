import * as pd from 'pareto-core-data'

import * as g_liana from "../../../pub/dist/submodules/unresolved"

import {
    globalType,
    dictionary,
    group,
    prop,
    state,
    atom,
    stateGroup,
    pResolvedValue,
    component,
    typeRef,

    constrainedState, stateConstraint, v_ref,
    aResolvedValue,
    valueSelection,
    dictionaryReference,
    v_grp,
    constrainedDictionary,
    typeLibrary,
} from "../../../pub/dist/submodules/unresolved/shorthands"

export const $: g_liana.T.Type__Library<pd.SourceLocation> = typeLibrary(
    {},
    {
        "bedrag": null,
        "bestand": null,
        "dagen": null,
        "datum": null,
        "multiline text": null,
        "promillage": null,
        "identifier": null,
        "single line text": null,
    },
    {
        "Stamdata": globalType(
            {},
            group({
                "gebruikers": prop(dictionary(group({
                    "volledige naam": prop(atom("single line text")),
                }))),
                "balans": prop(group({
                    "hoofdcategorieen fiscus": prop(dictionary(group({
                        "zijde": prop(stateGroup({
                            "activa": state(group({})),
                            "passiva": state(group({})),
                        })),
                        "subcategorieen": prop(dictionary(group({}))),
                    }))),
                    "hoofdcategorieen": prop(dictionary(group({
                        "zijde": prop(stateGroup({
                            "activa": state(group({})),
                            "passiva": state(group({})),
                        })),
                        "subcategorieen": prop(dictionary(group({
                            "hoofdcategorie fiscus": prop(dictionaryReference(valueSelection("hoofdcategorieen fiscus"))),
                            "subcategorie fiscus": prop(dictionaryReference(valueSelection("hoofdcategorie fiscus", v_ref(v_grp("subcategorieen"))))),
                        }))),
                    }))),
                    "grootboekrekeningen": prop(dictionary(group({
                        "hoofdcategorie": prop(dictionaryReference(valueSelection("hoofdcategorieen"))),
                        "subcategorie": prop(dictionaryReference(valueSelection("hoofdcategorie", v_ref(v_grp("subcategorieen"))))),
                        "zijde": prop(stateGroup({
                            "activa": state(group({})),
                            "passiva": state(group({})),
                        })),
                    }))),
                })),
                "resultaat": prop(group({
                    "hoofdcategorieen fiscus": prop(dictionary(group({
                        "zijde": prop(stateGroup({
                            "kosten": state(group({})),
                            "opbrengsten": state(group({})),
                        })),
                        "subcategorieen": prop(dictionary(group({}))),
                    }))),
                    "hoofdcategorieen": prop(dictionary(group({
                        "zijde": prop(stateGroup({
                            "kosten": state(group({})),
                            "opbrengsten": state(group({})),
                        })),
                        "subcategorieen": prop(dictionary(group({
                            "hoofdcategorie fiscus": prop(dictionaryReference(valueSelection("hoofdcategorieen fiscus"))),
                            "subcategorie fiscus": prop(dictionaryReference(valueSelection("hoofdcategorie fiscus", v_ref(v_grp("subcategorieen"))))),
                        }))),
                    }))),
                    "correctietypes vennootschapsbelasting": prop(dictionary(group({}))),
                    "grootboekrekeningen": prop(dictionary(group({
                        "hoofdcategorie": prop(dictionaryReference(valueSelection("hoofdcategorieen"))),
                        "subcategorie": prop(dictionaryReference(valueSelection("hoofdcategorie", v_ref(v_grp("subcategorieen"))))),
                        "zijde": prop(stateGroup({
                            "opbrengsten": state(group({})),
                            "kosten": state(group({
                                "correctie op vennootschapsbelasting": prop(stateGroup({
                                    "nee": state(group({})),
                                    "ja": state(group({
                                        "correctietype": prop(dictionaryReference(valueSelection("correctietypes vennootschapsbelasting"))),
                                    })),
                                })),
                            })),
                        })),
                    }))),
                })),
                "BTW-categorieen": prop(dictionary(group({
                    "BTW-heffing": prop(stateGroup({
                        "nee": state(group({})),
                        "ja": state(group({
                            "BTW-promillage": prop(atom("promillage")),
                        })),
                    })),
                }))),
                "klanten": prop(dictionary(group({
                    "projecten": prop(dictionary(group({
                        "offertes": prop(dictionary(group({
                            "opbrengsten": prop(dictionary(group({
                                "type": prop(stateGroup({
                                    "project": state(group({
                                        "betaaldatum": prop(atom("datum")),
                                        "bedrag": prop(atom("bedrag")),
                                    })),
                                })),
                            }))),
                        }))),
                    }))),
                    "licentieovereenkomsten": prop(dictionary(group({
                        "periodes": prop(dictionary(group({
                            "bedrag": prop(atom("bedrag")),
                        }))),
                    }))),
                }))),
                "medewerkers": prop(dictionary(group({}))),
                "leveranciers": prop(dictionary(group({}))),
                "bankrekeningen": prop(dictionary(group({}))),
                "informele rekeningen": prop(dictionary(group({}))),
            })
        ),
        "Overloop": globalType(
            {
                "stamdata": pResolvedValue("Stamdata", false),
            },
            group({
                "jaren": prop(dictionary(group({
                    "inkopen": prop(dictionary(group({
                        "openstaand": prop(atom("bedrag"))
                    }))),
                    "verkopen": prop(dictionary(group({
                        "openstaand": prop(atom("bedrag"))
                    }))),
                    "BTW periodes": prop(dictionary(group({
                        "openstaand": prop(atom("bedrag"))
                    }))),
                }))),
                "informele rekeningen": prop(dictionary(group({
                    "eindsaldo": prop(atom("bedrag"))
                }))),
                "overige balans items": prop(dictionary(group({
                    "eindsaldo": prop(atom("bedrag"))
                }))),
                "bankrekeningen": prop(dictionary(group({
                    "eindsaldo": prop(atom("bedrag"))
                }))),
            })
        ),
        "Jaarstamdata": globalType(
            {
                "stamdata": pResolvedValue("Stamdata", false),
                "overloop": pResolvedValue("Overloop", false),
            },
            group({
                "balans grootboekrekeningen": prop(constrainedDictionary({
                    //typePath("Stamdata", t_grp("balans", t_grp("grootboekrekeningen"))), tbd()
                }, group({
                    "type": prop(stateGroup({
                        "bankrekening": state(group({})),
                        "informele rekening": state(group({})),
                        "overig": state(group({})),
                    })),
                }))),
                "resultaat grootboekrekeningen": prop(constrainedDictionary({
                    //typePath("Stamdata", t_grp("resultaat", t_grp("grootboekrekeningen"))), tbd()
                }, group({
                }))),
                "informele rekeningen": prop(constrainedDictionary({
                    //typePath("Stamdata", t_grp("informele rekeningen")), tbd()
                }, group({
                    "grootboekrekening": prop(dictionaryReference(valueSelection("balans grootboekrekeningen"))),
                    "beginsaldo": prop(atom("bedrag")),
                    "nieuw": prop(stateGroup({
                        "nee": state(group({
                            "rekening": prop(dictionaryReference(valueSelection("overloop", v_grp("informele rekeningen")))),
                        })),
                        "ja": state(group({})),
                    })),
                }))),
                "overige balans items": prop(dictionary(group({
                    "beginsaldo": prop(atom("bedrag")),
                    "grootboekrekening": prop(dictionaryReference(valueSelection("balans grootboekrekeningen"))),
                    "nieuw": prop(stateGroup({
                        "nee": state(group({
                            "balans item": prop(dictionaryReference(valueSelection("overloop", v_grp("overige balans items")))),
                        })),
                        "ja": state(group({})),
                    })),
                }))),
                "startdatum boekjaar": prop(atom("datum")),
                "beginsaldo Winstreserve": prop(atom("bedrag")),
                "afgesloten": prop(stateGroup({
                    "nee": state(group({
                    })),
                    "ja": state(group({})),
                })),
                "grootboeken": prop(group({
                    "resultaat dit jaar": prop(dictionaryReference(valueSelection("resultaat grootboekrekeningen"))),
                    "winstreserve": prop(dictionaryReference(valueSelection("balans grootboekrekeningen"))),
                    "BTW afrondingen": prop(dictionaryReference(valueSelection("resultaat grootboekrekeningen"))),
                    "beginsaldo nog aan te geven BTW": prop(dictionaryReference(valueSelection("balans grootboekrekeningen"))),
                    "nog aan te geven BTW": prop(dictionaryReference(valueSelection("balans grootboekrekeningen"))),
                    "inkoop saldo": prop(dictionaryReference(valueSelection("balans grootboekrekeningen"))),
                    "verkoop saldo": prop(dictionaryReference(valueSelection("balans grootboekrekeningen"))),
                    "BTW periode": prop(dictionaryReference(valueSelection("balans grootboekrekeningen"))),
                })),
                "bankrekeningen": prop(dictionary(group({
                    "beginsaldo": prop(atom("bedrag")),
                    "nieuw": prop(stateGroup({
                        "nee": state(group({
                            "rekening": prop(dictionaryReference(valueSelection("overloop", v_grp("bankrekeningen")))),
                        })),
                        "ja": state(group({})),
                    })),
                    "grootboekrekening": prop(dictionaryReference(valueSelection("balans grootboekrekeningen"))),
                }))),
            })
        ),
        "Boekingen": globalType(
            {
                "stamdata": pResolvedValue("Stamdata", false),
                "jaarstamdata": pResolvedValue("Jaarstamdata", false),
                "overloop": pResolvedValue("Overloop", false),
            },
            group({
                "salarisrondes": prop(dictionary(group({
                }))),
                "BTW periodes": prop(dictionary(group({
                    "omschrijving": prop(atom("multiline text")),
                    "status": prop(stateGroup({
                        "aangegeven": state(group({
                            "bedrag": prop(atom("bedrag")),
                            "afronding": prop(atom("bedrag")),
                            "datum": prop(atom("datum")),
                        })),
                        "openstaand": state(group({})),
                    })),
                    "1. BTW-categorieen": prop(constrainedDictionary({
                        //valueSelection("XXXX"), tempTypeSelection("Stamdata", t_grp("BTW-categorieen"))
                    }, group({
                    }))),
                    "documenten": prop(dictionary(group({
                        "bestand": prop(atom("bestand")),
                    }))),
                }))),
                "overige balans items": prop(dictionary(group({ //constrain
                    "memoriaal boekingen": prop(dictionary(group({
                        "bedrag": prop(atom("bedrag")),
                        "datum": prop(atom("datum")),
                        "grootboekrekening": prop(dictionaryReference(valueSelection("jaarstamdata", v_grp("balans grootboekrekeningen")))),
                        "omschrijving": prop(atom("multiline text")),
                    }))),
                }))),
                "inkopen": prop(dictionary(group({
                    "datum": prop(atom("datum")),
                    "brondocument": prop(stateGroup({
                        "toegevoegd": state(atom("bestand")),
                        "nog toevoegen": state(group({})),
                        "niet van toepassing": state(group({})),
                        "ontbreekt": state(group({})),
                    })),
                    "type": prop(stateGroup({
                        "bonnetje": state(group({})),
                        "inkoop": state(group({
                            "crediteur": prop(dictionaryReference(valueSelection("stamdata", v_grp("leveranciers")))),
                            "factuurnummer": prop(atom("identifier")),
                        })),
                        "salaris": state(group({
                            "ronde": prop(dictionaryReference(valueSelection("salarisrondes"))),
                            "type": prop(stateGroup({
                                "salaris": state(group({
                                    "medewerker": prop(dictionaryReference(valueSelection("stamdata", v_grp("medewerkers")))),
                                })),
                                "loonheffing": state(group({})),
                                "wBSO": state(group({})),
                            }))
                        })),
                    })),
                    "BTW-regime": prop(group({
                        "BTW-periode": prop(dictionaryReference(valueSelection("BTW periodes"))),
                        "type": prop(stateGroup({
                            "standaard": state(group({})),
                            "geen BTW van toepassing": state(group({})),
                            "binnenland heffing verlegd": state(group({})),
                            "intracommunautair": state(group({})),
                            "import van buiten de EU": state(group({})),
                        }))
                    })),
                    "afhandeling": prop(stateGroup({
                        "mutaties": state(group({})),
                        "rekening courant": state(dictionaryReference(valueSelection("jaarstamdata", v_grp("informele rekeningen")))),
                        "nog te betalen": state(group({
                            "betalingstermijn": prop(atom("dagen")),
                        })),
                    })),
                    "regels": prop(dictionary(group({
                        "omschrijving": prop(atom("multiline text")),
                        "bedrag": prop(stateGroup({
                            "bekend": state(group({
                                "bedrag inclusief BTW": prop(atom("bedrag")),
                                "BTW": prop(atom("bedrag")),
                            })),
                            "nog niet bekend": state(group({
                                "aantekeningen": prop(atom("multiline text")),
                            })),
                        })),
                        "type": prop(stateGroup({
                            "kosten": state(group({
                                "grootboekrekening": prop(dictionaryReference(valueSelection("jaarstamdata", v_grp("resultaat grootboekrekeningen")))),
                            })),
                            "balans": state(group({
                                "balans item": prop(dictionaryReference(valueSelection("jaarstamdata", v_grp("overige balans items")))),
                            })),
                        })),
                    }))),
                }))),
                "verkopen": prop(dictionary(group({
                    "brondocument": prop(stateGroup({
                        "nog toevoegen": state(group({
                        })),
                        "toegevoegd": state(group({
                            "document": prop(atom("bestand")),
                        })),
                    })),
                    "betalingstermijn": prop(atom("dagen")),
                    "debiteur": prop(dictionaryReference(valueSelection("stamdata", v_grp("klanten")))),
                    "BTW-periode": prop(dictionaryReference(valueSelection("BTW periodes"))),

                    "contracttype": prop(stateGroup({
                        "licentieovereenkomst": state(group({
                            "overeenkomst": prop(dictionaryReference(valueSelection("debiteur", v_ref(v_grp("licentieovereenkomsten"))))),
                        })),
                        "project": state(group({
                            "project": prop(dictionaryReference(valueSelection("debiteur", v_ref(v_grp("projecten"))))),
                            "offerte": prop(dictionaryReference(valueSelection("project", v_ref(v_grp("offertes"))))),
                        })),
                    })),

                    "afhandeling": prop(stateGroup({
                        "mutaties": state(group({
                        })),
                        "rekening courant": state(group({
                            "rekening courant": prop(dictionaryReference(valueSelection("jaarstamdata", v_grp("informele rekeningen")))),
                        })),
                    })),
                    "regels": prop(dictionary(group({
                        "omschrijving": prop(atom("multiline text")),
                        "bedrag exclusief BTW": prop(atom("bedrag")),
                        "type": prop(stateGroup({
                            "opbrengsten": state(group({
                                "grootboekrekening": prop(dictionaryReference(valueSelection("jaarstamdata", v_grp("resultaat grootboekrekeningen")))),
                            })),
                            "balans": state(group({
                                "balans item": prop(dictionaryReference(valueSelection("jaarstamdata", v_grp("overige balans items")))),
                            })),
                        })),
                        "BTW-regime": prop(stateGroup({
                            "standaard": state(group({
                                "BTW-cateogrie": prop(dictionaryReference(valueSelection("BTW-periode", v_ref(v_grp("1. BTW-categorieen"))))),
                            })),
                            "binnenland heffing verlegd": state(group({
                            })),
                            "intracommunautair": state(group({
                            })),
                            "export buiten de EU": state(group({
                            })),
                            "installatie of afstandsverkopen binnen de EU": state(group({
                            })),
                        })),
                        "contracttype2": prop(stateGroup({
                            "los": state(group({
                            })),
                            "licentieovereenkomst": constrainedState({
                                "parent": stateConstraint(valueSelection("contracttype"), "licentieovereenkomst")
                            }, group({
                                "periode": prop(dictionaryReference(valueSelection("parent", v_grp("overeenkomst", v_ref(v_grp("periodes")))))),
                            })),
                            "project": constrainedState({
                                "parent": stateConstraint(valueSelection("contracttype"), "project")
                            }, group({
                                "opbrengst": prop(dictionaryReference(valueSelection("parent", v_grp("offerte", v_ref(v_grp("opbrengsten")))))),
                            })),
                        })),
                    }))),
                }))),
            })
        ),
        "Afhandeling": globalType(
            {
                "jaarstamdata": pResolvedValue("Jaarstamdata", false),
                "boekingen": pResolvedValue("Boekingen", false),
                "overloop": pResolvedValue("Overloop", false),
            },
            stateGroup({
                "overloop": state(group({
                    "jaar": prop(dictionaryReference(valueSelection("overloop", v_grp("jaren")))),
                    "type": prop(stateGroup({
                        "inkoop": state(dictionaryReference(valueSelection("jaar", v_ref(v_grp("inkopen"))))),
                        "verkoop": state(dictionaryReference(valueSelection("jaar", v_ref(v_grp("verkopen"))))),
                        "BTW-periode": state(dictionaryReference(valueSelection("jaar", v_ref(v_grp("BTW periodes"))))),
                    }))
                })),
                "inkoop": state(dictionaryReference(valueSelection("boekingen", v_grp("inkopen")))),
                "verkoop": state(dictionaryReference(valueSelection("boekingen", v_grp("verkopen")))),
                "BTW-periode": state(dictionaryReference(valueSelection("boekingen", v_grp("BTW periodes")))),
                "informele rekening": state(dictionaryReference(valueSelection("jaarstamdata", v_grp("informele rekeningen")))),
            })
        ),
        "Jaar": globalType(
            {

            },
            group({
                "stamdata": prop(component(typeRef("Stamdata"), {})),
                "overloop": prop(component(typeRef("Overloop"), {
                    "stamdata": aResolvedValue(valueSelection("stamdata")),
                })),
                "jaarstamdata": prop(component(typeRef("Jaarstamdata"), {
                    "overloop": aResolvedValue(valueSelection("overloop")),
                    "stamdata": aResolvedValue(valueSelection("stamdata")),
                })),
                "boekingen": prop(component(typeRef("Boekingen"), {
                    "stamdata": aResolvedValue(valueSelection("stamdata")),
                    "jaarstamdata": aResolvedValue(valueSelection("jaarstamdata")),
                    "overloop": aResolvedValue(valueSelection("overloop")),
                })),
                "afhandeling": prop(group({
                    "verrekenposten": prop(dictionary(group({
                        "mutaties": prop(dictionary(group({
                            "bedrag": prop(atom("bedrag")),
                            "afhandeling": prop(component(typeRef("Afhandeling"), {
                                "boekingen": aResolvedValue(valueSelection("boekingen")),
                                "jaarstamdata": aResolvedValue(valueSelection("jaarstamdata")),
                                "overloop": aResolvedValue(valueSelection("overloop")),
                            })),
                        }))),
                    }))),
                    "bankrekeningen": prop(dictionary(group({
                        "mutaties": prop(dictionary(group({
                            "omschrijving": prop(atom("multiline text")),
                            "bedrag": prop(atom("bedrag")),
                            "datum": prop(atom("datum")),
                            "status": prop(stateGroup({
                                "nog te verwerken": state(group({})),
                                "verwerkt": state(group({
                                    "afhandeling": prop(stateGroup({
                                        "alg": state(component(typeRef("Afhandeling"), {
                                            "boekingen": aResolvedValue(valueSelection("boekingen")),
                                            "jaarstamdata": aResolvedValue(valueSelection("jaarstamdata")),
                                            "overloop": aResolvedValue(valueSelection("overloop")),
                                        })),
                                        "verrekenpost": state(dictionaryReference(valueSelection("verrekenposten"))),
                                    })),
                                })),
                            })),
                        }))),
                    }))),
                })),
            })
        ),
    },
)