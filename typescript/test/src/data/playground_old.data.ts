import * as pd from 'pareto-core-data'
import * as g_tendril2algorithm from "../../../pub/dist/submodules/tendril2algorithm"
import * as g_liana from "../../../pub/dist/submodules/liana"
import {
    aResolvedValue,
    constrainedDictionary,
    constrainedOption, dictConstraint,
    dictionary, externalGlobalTypeSelection,
    globalTypeSelection,
    group,
    nothing, nothingResult,
    option, optionConstraint, optional,
    optionalResult,
    pExternalResolvedValue,
    pResolvedValue,
    globalType,
    prop,
    resolvedValueReference,
    resultTaggedUnion,
    s_component,
    s_reference,
    s_group,
    s_nothing,
    s_optional, s_taggedunion,
    t_dict,
    t_grp,
    t_tu,
    taggedUnion,
    tempExternalTypeSelection,
    tempTypeSelection,
    terminal,
    valSel,
    tailSel,
    varSel,
    lookupReference,
    thisNonCyclic,
    aLookup,
    lparameter,
    array,
    pCyclicLookup,
    pNonCyclicLookup,
    resolvedSiblingComponent
} from "../../../pub/dist/submodules/liana/shorthands"
const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': pd.d({}),
    'labels': {
        'atom types': pd.d({
            "bedrag": null,
            "bestand": null,
            "dagen": null,
            "datum": null,
            "multiline text": null,
            "promillage": null,
            "identifier": null,
            "single line text": null,
        }),
    },
    'global types': pd.d({
        "Stamdata": globalType(
            {},
            group({
                "gebruikers": prop(dictionary(group({
                    "volledige naam": prop(terminal("single line text")),
                }))),
                "balans": prop(group({
                    "hoofdcategorieen fiscus": prop(dictionary(group({
                        "zijde": prop(taggedUnion({
                            "activa": option(group({})),
                            "passiva": option(group({})),
                        })),
                        "subcategorieen": prop(dictionary(group({}))),
                    }))),
                    "hoofdcategorieen": prop(dictionary(group({
                        "zijde": prop(taggedUnion({
                            "activa": option(group({})),
                            "passiva": option(group({})),
                        })),
                        "subcategorieen": prop(dictionary(group({
                            "hoofdcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorieen fiscus"), tempTypeSelection("Stamdata", t_grp("balans", t_grp("hoofdcategorieen fiscus"))))),
                            "subcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorie fiscus", s_reference(s_group("subcategorieen"))), tempTypeSelection("Stamdata", t_grp("balans", t_grp("hoofdcategorieen fiscus", t_dict(t_grp("subcategorieen"))))))),
                        }))),
                    }))),
                    "grootboekrekeningen": prop(dictionary(group({
                        "hoofdcategorie": prop(resolvedValueReference(valSel("hoofdcategorieen"), tempTypeSelection("Stamdata", t_grp("balans", t_grp("hoofdcategorieen"))))),
                        "subcategorie": prop(resolvedValueReference(valSel("hoofdcategorie", s_reference(s_group("subcategorieen"))), tempTypeSelection("Stamdata", t_grp("balans", t_grp("hoofdcategorieen", t_dict(t_grp("subcategorieen"))))))),
                        "zijde": prop(taggedUnion({
                            "activa": option(group({})),
                            "passiva": option(group({})),
                        })),
                    }))),
                })),
                "resultaat": prop(group({
                    "hoofdcategorieen fiscus": prop(dictionary(group({
                        "zijde": prop(taggedUnion({
                            "kosten": option(group({})),
                            "opbrengsten": option(group({})),
                        })),
                        "subcategorieen": prop(dictionary(group({}))),
                    }))),
                    "hoofdcategorieen": prop(dictionary(group({
                        "zijde": prop(taggedUnion({
                            "kosten": option(group({})),
                            "opbrengsten": option(group({})),
                        })),
                        "subcategorieen": prop(dictionary(group({
                            "hoofdcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorieen fiscus"), tempTypeSelection("Stamdata", t_grp("resultaat", t_grp("hoofdcategorieen fiscus"))))),
                            "subcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorie fiscus", s_reference(s_group("subcategorieen"))), tempTypeSelection("Stamdata", t_grp("resultaat", t_grp("hoofdcategorieen fiscus", t_dict(t_grp("subcategorieen"))))))),
                        }))),
                    }))),
                    "correctietypes vennootschapsbelasting": prop(dictionary(group({}))),
                    "grootboekrekeningen": prop(dictionary(group({
                        "hoofdcategorie": prop(resolvedValueReference(valSel("hoofdcategorieen"), tempTypeSelection("Stamdata", t_grp("resultaat", t_grp("hoofdcategorieen"))))),
                        "subcategorie": prop(resolvedValueReference(valSel("hoofdcategorie", s_reference(s_group("subcategorieen"))), tempTypeSelection("Stamdata", t_grp("resultaat", t_grp("hoofdcategorieen", t_dict(t_grp("subcategorieen"))))))),
                        "zijde": prop(taggedUnion({
                            "opbrengsten": option(group({})),
                            "kosten": option(group({
                                "correctie op vennootschapsbelasting": prop(taggedUnion({
                                    "nee": option(group({})),
                                    "ja": option(group({
                                        "correctietype": prop(resolvedValueReference(valSel("correctietypes vennootschapsbelasting"), tempTypeSelection("Stamdata", t_grp("resultaat", t_grp("correctietypes vennootschapsbelasting"))))),
                                    })),
                                })),
                            })),
                        })),
                    }))),
                })),
                "BTW-categorieen": prop(dictionary(group({
                    "BTW-heffing": prop(taggedUnion({
                        "nee": option(group({})),
                        "ja": option(group({
                            "BTW-promillage": prop(terminal("promillage")),
                        })),
                    })),
                }))),
                "klanten": prop(dictionary(group({
                    "projecten": prop(dictionary(group({
                        "offertes": prop(dictionary(group({
                            "opbrengsten": prop(dictionary(group({
                                "type": prop(taggedUnion({
                                    "project": option(group({
                                        "betaaldatum": prop(terminal("datum")),
                                        "bedrag": prop(terminal("bedrag")),
                                    })),
                                })),
                            }))),
                        }))),
                    }))),
                    "licentieovereenkomsten": prop(dictionary(group({
                        "periodes": prop(dictionary(group({
                            "bedrag": prop(terminal("bedrag")),
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
                        "openstaand": prop(terminal("bedrag"))
                    }))),
                    "verkopen": prop(dictionary(group({
                        "openstaand": prop(terminal("bedrag"))
                    }))),
                    "BTW periodes": prop(dictionary(group({
                        "openstaand": prop(terminal("bedrag"))
                    }))),
                }))),
                "informele rekeningen": prop(dictionary(group({
                    "eindsaldo": prop(terminal("bedrag"))
                }))),
                "overige balans items": prop(dictionary(group({
                    "eindsaldo": prop(terminal("bedrag"))
                }))),
                "bankrekeningen": prop(dictionary(group({
                    "eindsaldo": prop(terminal("bedrag"))
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
                    "type": prop(taggedUnion({
                        "bankrekening": option(group({})),
                        "informele rekening": option(group({})),
                        "overig": option(group({})),
                    })),
                }))),
                "resultaat grootboekrekeningen": prop(constrainedDictionary({
                    //typePath("Stamdata", t_grp("resultaat", t_grp("grootboekrekeningen"))), tbd()
                }, group({
                }))),
                "informele rekeningen": prop(constrainedDictionary({
                    //typePath("Stamdata", t_grp("informele rekeningen")), tbd()
                }, group({
                    "grootboekrekening": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
                    "beginsaldo": prop(terminal("bedrag")),
                    "nieuw": prop(taggedUnion({
                        "nee": option(group({
                            "rekening": prop(resolvedValueReference(valSel("overloop", s_group("informele rekeningen")), tempTypeSelection("Overloop", t_grp("informele rekeningen")))),
                        })),
                        "ja": option(group({})),
                    })),
                }))),
                "overige balans items": prop(dictionary(group({
                    "beginsaldo": prop(terminal("bedrag")),
                    "grootboekrekening": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
                    "nieuw": prop(taggedUnion({
                        "nee": option(group({
                            "balans item": prop(resolvedValueReference(valSel("overloop", s_group("overige balans items")), tempTypeSelection("Overloop", t_grp("overige balans items")))),
                        })),
                        "ja": option(group({})),
                    })),
                }))),
                "startdatum boekjaar": prop(terminal("datum")),
                "beginsaldo Winstreserve": prop(terminal("bedrag")),
                "afgesloten": prop(taggedUnion({
                    "nee": option(group({
                    })),
                    "ja": option(group({})),
                })),
                "grootboeken": prop(group({
                    "resultaat dit jaar": prop(resolvedValueReference(valSel("resultaat grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("resultaat grootboekrekeningen")))),
                    "winstreserve": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
                    "BTW afrondingen": prop(resolvedValueReference(valSel("resultaat grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("resultaat grootboekrekeningen")))),
                    "beginsaldo nog aan te geven BTW": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
                    "nog aan te geven BTW": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
                    "inkoop saldo": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
                    "verkoop saldo": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
                    "BTW periode": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
                })),
                "bankrekeningen": prop(dictionary(group({
                    "beginsaldo": prop(terminal("bedrag")),
                    "nieuw": prop(taggedUnion({
                        "nee": option(group({
                            "rekening": prop(resolvedValueReference(valSel("overloop", s_group("bankrekeningen")), tempTypeSelection("Overloop", t_grp("bankrekeningen")))),
                        })),
                        "ja": option(group({})),
                    })),
                    "grootboekrekening": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
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
                    "omschrijving": prop(terminal("multiline text")),
                    "status": prop(taggedUnion({
                        "aangegeven": option(group({
                            "bedrag": prop(terminal("bedrag")),
                            "afronding": prop(terminal("bedrag")),
                            "datum": prop(terminal("datum")),
                        })),
                        "openstaand": option(group({})),
                    })),
                    "1. BTW-categorieen": prop(constrainedDictionary({
                        //valSel("XXXX"), tempTypeSelection("Stamdata", t_grp("BTW-categorieen"))
                    }, group({
                    }))),
                    "documenten": prop(dictionary(group({
                        "bestand": prop(terminal("bestand")),
                    }))),
                }))),
                "overige balans items": prop(dictionary(group({ //constrain
                    "memoriaal boekingen": prop(dictionary(group({
                        "bedrag": prop(terminal("bedrag")),
                        "datum": prop(terminal("datum")),
                        "grootboekrekening": prop(resolvedValueReference(valSel("jaarstamdata", s_group("balans grootboekrekeningen")), tempTypeSelection("Jaarstamdata", t_grp("balans grootboekrekeningen")))),
                        "omschrijving": prop(terminal("multiline text")),
                    }))),
                }))),
                "inkopen": prop(dictionary(group({
                    "datum": prop(terminal("datum")),
                    "brondocument": prop(taggedUnion({
                        "toegevoegd": option(terminal("bestand")),
                        "nog toevoegen": option(group({})),
                        "niet van toepassing": option(group({})),
                        "ontbreekt": option(group({})),
                    })),
                    "type": prop(taggedUnion({
                        "bonnetje": option(group({})),
                        "inkoop": option(group({
                            "crediteur": prop(resolvedValueReference(valSel("stamdata", s_group("leveranciers")), tempTypeSelection("Stamdata", t_grp("leveranciers")))),
                            "factuurnummer": prop(terminal("identifier")),
                        })),
                        "salaris": option(group({
                            "ronde": prop(resolvedValueReference(valSel("salarisrondes"), tempTypeSelection("Boekingen", t_grp("salarisrondes")))),
                            "type": prop(taggedUnion({
                                "salaris": option(group({
                                    "medewerker": prop(resolvedValueReference(valSel("stamdata", s_group("medewerkers")), tempTypeSelection("Stamdata", t_grp("medewerkers")))),
                                })),
                                "loonheffing": option(group({})),
                                "wBSO": option(group({})),
                            }))
                        })),
                    })),
                    "BTW-regime": prop(group({
                        "BTW-periode": prop(resolvedValueReference(valSel("BTW periodes"), tempTypeSelection("Boekingen", t_grp("BTW periodes")))),
                        "type": prop(taggedUnion({
                            "standaard": option(group({})),
                            "geen BTW van toepassing": option(group({})),
                            "binnenland heffing verlegd": option(group({})),
                            "intracommunautair": option(group({})),
                            "import van buiten de EU": option(group({})),
                        }))
                    })),
                    "afhandeling": prop(taggedUnion({
                        "mutaties": option(group({})),
                        "rekening courant": option(resolvedValueReference(valSel("jaarstamdata", s_group("informele rekeningen")), tempTypeSelection("Jaarstamdata", t_grp("informele rekeningen")))),
                        "nog te betalen": option(group({
                            "betalingstermijn": prop(terminal("dagen")),
                        })),
                    })),
                    "regels": prop(dictionary(group({
                        "omschrijving": prop(terminal("multiline text")),
                        "bedrag": prop(taggedUnion({
                            "bekend": option(group({
                                "bedrag inclusief BTW": prop(terminal("bedrag")),
                                "BTW": prop(terminal("bedrag")),
                            })),
                            "nog niet bekend": option(group({
                                "aantekeningen": prop(terminal("multiline text")),
                            })),
                        })),
                        "type": prop(taggedUnion({
                            "kosten": option(group({
                                "grootboekrekening": prop(resolvedValueReference(valSel("jaarstamdata", s_group("resultaat grootboekrekeningen")), tempTypeSelection("Jaarstamdata", t_grp("resultaat grootboekrekeningen")))),
                            })),
                            "balans": option(group({
                                "balans item": prop(resolvedValueReference(valSel("jaarstamdata", s_group("overige balans items")), tempTypeSelection("Jaarstamdata", t_grp("overige balans items")))),
                            })),
                        })),
                    }))),
                }))),
                "verkopen": prop(dictionary(group({
                    "brondocument": prop(taggedUnion({
                        "nog toevoegen": option(group({
                        })),
                        "toegevoegd": option(group({
                            "document": prop(terminal("bestand")),
                        })),
                    })),
                    "betalingstermijn": prop(terminal("dagen")),
                    "debiteur": prop(resolvedValueReference(valSel("stamdata", s_group("klanten")), tempTypeSelection("Stamdata", t_grp("klanten")))),
                    "BTW-periode": prop(resolvedValueReference(valSel("BTW periodes"), tempTypeSelection("Boekingen", t_grp("BTW periodes")))),

                    "contracttype": prop(taggedUnion({
                        "licentieovereenkomst": option(group({
                            "overeenkomst": prop(resolvedValueReference(valSel("debiteur", s_reference(s_group("licentieovereenkomsten"))), tempTypeSelection("Stamdata", t_grp("klanten", t_dict(t_grp("licentieovereenkomsten")))))),
                        })),
                        "project": option(group({
                            "project": prop(resolvedValueReference(valSel("debiteur", s_reference(s_group("projecten"))), tempTypeSelection("Stamdata", t_grp("klanten", t_dict(t_grp("projecten")))))),
                            "offerte": prop(resolvedValueReference(valSel("project", s_reference(s_group("offertes"))), tempTypeSelection("Stamdata", t_grp("klanten", t_dict(t_grp("projecten", t_dict(t_grp("offertes")))))))),
                        })),
                    })),

                    "afhandeling": prop(taggedUnion({
                        "mutaties": option(group({
                        })),
                        "rekening courant": option(group({
                            "rekening courant": prop(resolvedValueReference(valSel("jaarstamdata", s_group("informele rekeningen")), tempTypeSelection("Jaarstamdata", t_grp("informele rekeningen")))),
                        })),
                    })),
                    "regels": prop(dictionary(group({
                        "omschrijving": prop(terminal("multiline text")),
                        "bedrag exclusief BTW": prop(terminal("bedrag")),
                        "type": prop(taggedUnion({
                            "opbrengsten": option(group({
                                "grootboekrekening": prop(resolvedValueReference(valSel("jaarstamdata", s_group("resultaat grootboekrekeningen")), tempTypeSelection("Jaarstamdata", t_grp("resultaat grootboekrekeningen")))),
                            })),
                            "balans": option(group({
                                "balans item": prop(resolvedValueReference(valSel("jaarstamdata", s_group("overige balans items")), tempTypeSelection("Jaarstamdata", t_grp("overige balans items")))),
                            })),
                        })),
                        "BTW-regime": prop(taggedUnion({
                            "standaard": option(group({
                                "BTW-cateogrie": prop(resolvedValueReference(valSel("BTW-periode", s_reference(s_group("1. BTW-categorieen"))), tempTypeSelection("Boekingen", t_grp("BTW periodes", t_dict(t_grp("1. BTW-categorieen")))))),
                            })),
                            "binnenland heffing verlegd": option(group({
                            })),
                            "intracommunautair": option(group({
                            })),
                            "export buiten de EU": option(group({
                            })),
                            "installatie of afstandsverkopen binnen de EU": option(group({
                            })),
                        })),
                        "contracttype2": prop(taggedUnion({
                            "los": option(group({
                            })),
                            "licentieovereenkomst": constrainedOption({
                                "parent": optionConstraint(valSel("contracttype"), "licentieovereenkomst", tempTypeSelection("Boekingen", t_grp("verkopen", t_dict(t_grp("contracttype")))))
                            }, group({
                                "periode": prop(resolvedValueReference(valSel("parent", s_group("overeenkomst", s_reference(s_group("periodes")))), tempTypeSelection("Stamdata", t_grp("klanten", t_dict(t_grp("licentieovereenkomsten", t_dict(t_grp("periodes")))))))),
                            })),
                            "project": constrainedOption({
                                "parent": optionConstraint(valSel("contracttype"), "project", tempTypeSelection("Boekingen", t_grp("verkopen", t_dict(t_grp("contracttype")))))
                            }, group({
                                "opbrengst": prop(resolvedValueReference(valSel("parent", s_group("offerte", s_reference(s_group("opbrengsten")))), tempTypeSelection("Stamdata", t_grp("klanten", t_dict(t_grp("projecten", t_dict(t_grp("offertes", t_dict(t_grp("opbrengsten")))))))))),
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
            taggedUnion({
                "overloop": option(group({
                    "jaar": prop(resolvedValueReference(valSel("overloop", s_group("jaren")), tempTypeSelection("Overloop", t_grp("jaren")))),
                    "type": prop(taggedUnion({
                        "inkoop": option(resolvedValueReference(valSel("jaar", s_reference(s_group("inkopen"))), tempTypeSelection("Overloop", t_grp("jaren", t_dict(t_grp("inkopen")))))),
                        "verkoop": option(resolvedValueReference(valSel("jaar", s_reference(s_group("verkopen"))), tempTypeSelection("Overloop", t_grp("jaren", t_dict(t_grp("verkopen")))))),
                        "BTW-periode": option(resolvedValueReference(valSel("jaar", s_reference(s_group("BTW periodes"))), tempTypeSelection("Overloop", t_grp("jaren", t_dict(t_grp("BTW periodes")))))),
                    }))
                })),
                "inkoop": option(resolvedValueReference(valSel("boekingen", s_group("inkopen")), tempTypeSelection("Boekingen", t_grp("inkopen")))),
                "verkoop": option(resolvedValueReference(valSel("boekingen", s_group("verkopen")), tempTypeSelection("Boekingen", t_grp("verkopen")))),
                "BTW-periode": option(resolvedValueReference(valSel("boekingen", s_group("BTW periodes")), tempTypeSelection("Boekingen", t_grp("BTW periodes")))),
                "informele rekening": option(resolvedValueReference(valSel("jaarstamdata", s_group("informele rekeningen")), tempTypeSelection("Jaarstamdata", t_grp("informele rekeningen")))),
            })
        ),
        "Jaar": globalType(
            {

            },
            group({
                "stamdata": prop(resolvedSiblingComponent("Stamdata", {})),
                "overloop": prop(resolvedSiblingComponent("Overloop", {
                    "stamdata": aResolvedValue(valSel("stamdata")),
                })),
                "jaarstamdata": prop(resolvedSiblingComponent("Jaarstamdata", {
                    "overloop": aResolvedValue(valSel("overloop")),
                    "stamdata": aResolvedValue(valSel("stamdata")),
                })),
                "boekingen": prop(resolvedSiblingComponent("Boekingen", {
                    "stamdata": aResolvedValue(valSel("stamdata")),
                    "jaarstamdata": aResolvedValue(valSel("jaarstamdata")),
                    "overloop": aResolvedValue(valSel("overloop")),
                })),
                "afhandeling": prop(group({
                    "verrekenposten": prop(dictionary(group({
                        "mutaties": prop(dictionary(group({
                            "bedrag": prop(terminal("bedrag")),
                            "afhandeling": prop(resolvedSiblingComponent("Afhandeling", {
                                "boekingen": aResolvedValue(valSel("boekingen")),
                                "jaarstamdata": aResolvedValue(valSel("jaarstamdata")),
                                "overloop": aResolvedValue(valSel("overloop")),
                            })),
                        }))),
                    }))),
                    "bankrekeningen": prop(dictionary(group({
                        "mutaties": prop(dictionary(group({
                            "omschrijving": prop(terminal("multiline text")),
                            "bedrag": prop(terminal("bedrag")),
                            "datum": prop(terminal("datum")),
                            "status": prop(taggedUnion({
                                "nog te verwerken": option(group({})),
                                "verwerkt": option(group({
                                    "afhandeling": prop(taggedUnion({
                                        "alg": option(resolvedSiblingComponent("Afhandeling", {
                                            "boekingen": aResolvedValue(valSel("boekingen")),
                                            "jaarstamdata": aResolvedValue(valSel("jaarstamdata")),
                                            "overloop": aResolvedValue(valSel("overloop")),
                                        })),
                                        "verrekenpost": option(resolvedValueReference(valSel("verrekenposten"), tempTypeSelection("Jaar", t_grp("afhandeling", t_grp("verrekenposten"))))),
                                    })),
                                })),
                            })),
                        }))),
                    }))),
                })),
            })
        ),
    }),
}