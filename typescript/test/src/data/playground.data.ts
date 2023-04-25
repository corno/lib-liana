import * as pd from 'pareto-core-data'
import * as g_liana from "../../.../../../pub/dist/submodules/liana"
import {
    aResolvedValue,
    aContainingDictionary,
    array,
    component, constrainedDictionary,
    constrainedOption,
    dict,
    dictionary,
    globalType, globalTypeSelection, group,
    grp,
    option, optional, pAllSiblings, pNonCyclicSiblings, pResolvedValue, parameter, prop,
    taggedUnion, terminal, tu, typeSelection, pExternalResolvedValue, externalTypeSelection, resolvedValueReference, dictConstraint, optionConstraint, valSel, scomponent, staggedunion, optionalResult, externalGlobalTypeSelection, globalTypeResult, sgrp, ref, siblingReference, resultTaggedUnion, soptional,
} from "../../.../../../pub/dist/submodules/liana/shorthands"
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
        "Stamdata": globalType({}, group({
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
                        "hoofdcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorieen fiscus"), typeSelection("Stamdata", [grp("balans"), grp("hoofdcategorieen fiscus")]))),
                        "subcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorie fiscus", ref(sgrp("subcategorieen"))), typeSelection("Stamdata", [grp("balans"), grp("hoofdcategorieen fiscus"), dict(), grp("subcategorieen")]))),
                    }))),
                }))),
                "grootboekrekeningen": prop(dictionary(group({
                    "hoofdcategorie": prop(resolvedValueReference(valSel("hoofdcategorieen"), typeSelection("Stamdata", [grp("balans"), grp("hoofdcategorieen")]))),
                    "subcategorie": prop(resolvedValueReference(valSel("hoofdcategorie", ref(sgrp("subcategorieen"))), typeSelection("Stamdata", [grp("balans"), grp("hoofdcategorieen"), dict(), grp("subcategorieen")]))),
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
                        "hoofdcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorieen fiscus"), typeSelection("Stamdata", [grp("resultaat"), grp("hoofdcategorieen fiscus")]))),
                        "subcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorie fiscus", ref(sgrp("subcategorieen"))), typeSelection("Stamdata", [grp("resultaat"), grp("hoofdcategorieen fiscus"), dict(), grp("subcategorieen")]))),
                    }))),
                }))),
                "correctietypes vennootschapsbelasting": prop(dictionary(group({}))),
                "grootboekrekeningen": prop(dictionary(group({
                    "hoofdcategorie": prop(resolvedValueReference(valSel("hoofdcategorieen"), typeSelection("Stamdata", [grp("resultaat"), grp("hoofdcategorieen")]))),
                    "subcategorie": prop(resolvedValueReference(valSel("hoofdcategorie", ref(sgrp("subcategorieen"))), typeSelection("Stamdata", [grp("resultaat"), grp("hoofdcategorieen"), dict(), grp("subcategorieen")]))),
                    "zijde": prop(taggedUnion({
                        "opbrengsten": option(group({})),
                        "kosten": option(group({
                            "correctie op vennootschapsbelasting": prop(taggedUnion({
                                "nee": option(group({})),
                                "ja": option(group({
                                    "correctietype": prop(resolvedValueReference(valSel("correctietypes vennootschapsbelasting"), typeSelection("Stamdata", [grp("resultaat"), grp("correctietypes vennootschapsbelasting")]))),
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
        })),
        "Overloop": globalType({
            "stamdata": pResolvedValue("Stamdata", false),
        }, group({
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
        })),
        "Jaarstamdata": globalType({
            "stamdata": pResolvedValue("Stamdata", false),
            "overloop": pResolvedValue("Overloop", false),
        }, group({
            "balans grootboekrekeningen": prop(constrainedDictionary({
                //typePath("Stamdata", [grp("balans"), grp("grootboekrekeningen")]), tbd()
            }, group({
                "type": prop(taggedUnion({
                    "bankrekening": option(group({})),
                    "informele rekening": option(group({})),
                    "overig": option(group({})),
                })),
            }))),
            "resultaat grootboekrekeningen": prop(constrainedDictionary({
                //typePath("Stamdata", [grp("resultaat"), grp("grootboekrekeningen")]), tbd()
            }, group({
            }))),
            "informele rekeningen": prop(constrainedDictionary({
                //typePath("Stamdata", [grp("informele rekeningen")]), tbd()
            }, group({
                "grootboekrekening": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
                "beginsaldo": prop(terminal("bedrag")),
                "nieuw": prop(taggedUnion({
                    "nee": option(group({
                        "rekening": prop(resolvedValueReference(valSel("overloop", sgrp("informele rekeningen")), typeSelection("Overloop", [grp("informele rekeningen")]))),
                    })),
                    "ja": option(group({})),
                })),
            }))),
            "overige balans items": prop(dictionary(group({
                "beginsaldo": prop(terminal("bedrag")),
                "grootboekrekening": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
                "nieuw": prop(taggedUnion({
                    "nee": option(group({
                        "balans item": prop(resolvedValueReference(valSel("overloop", sgrp("overige balans items")), typeSelection("Overloop", [grp("overige balans items")]))),
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
                "resultaat dit jaar": prop(resolvedValueReference(valSel("resultaat grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("resultaat grootboekrekeningen")]))),
                "winstreserve": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
                "BTW afrondingen": prop(resolvedValueReference(valSel("resultaat grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("resultaat grootboekrekeningen")]))),
                "beginsaldo nog aan te geven BTW": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
                "nog aan te geven BTW": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
                "inkoop saldo": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
                "verkoop saldo": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
                "BTW periode": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
            })),
            "bankrekeningen": prop(dictionary(group({
                "beginsaldo": prop(terminal("bedrag")),
                "nieuw": prop(taggedUnion({
                    "nee": option(group({
                        "rekening": prop(resolvedValueReference(valSel("overloop", sgrp("bankrekeningen")), typeSelection("Overloop", [grp("bankrekeningen")]))),
                    })),
                    "ja": option(group({})),
                })),
                "grootboekrekening": prop(resolvedValueReference(valSel("balans grootboekrekeningen"), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
            }))),
        })),
        "Boekingen": globalType({
            "stamdata": pResolvedValue("Stamdata", false),
            "jaarstamdata": pResolvedValue("Jaarstamdata", false),
            "overloop": pResolvedValue("Overloop", false),
        }, group({
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
                    //valSel("XXXX"), typeSelection("Stamdata", [grp("BTW-categorieen")])
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
                    "grootboekrekening": prop(resolvedValueReference(valSel("jaarstamdata", sgrp("balans grootboekrekeningen")), typeSelection("Jaarstamdata", [grp("balans grootboekrekeningen")]))),
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
                        "crediteur": prop(resolvedValueReference(valSel("stamdata", sgrp("leveranciers")), typeSelection("Stamdata", [grp("leveranciers")]))),
                        "factuurnummer": prop(terminal("identifier")),
                    })),
                    "salaris": option(group({
                        "ronde": prop(resolvedValueReference(valSel("salarisrondes"), typeSelection("Boekingen", [grp("salarisrondes")]))),
                        "type": prop(taggedUnion({
                            "salaris": option(group({
                                "medewerker": prop(resolvedValueReference(valSel("stamdata", sgrp("medewerkers")), typeSelection("Stamdata", [grp("medewerkers")]))),
                            })),
                            "loonheffing": option(group({})),
                            "wBSO": option(group({})),
                        }))
                    })),
                })),
                "BTW-regime": prop(group({
                    "BTW-periode": prop(resolvedValueReference(valSel("BTW periodes"), typeSelection("Boekingen", [grp("BTW periodes")]))),
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
                    "rekening courant": option(resolvedValueReference(valSel("jaarstamdata", sgrp("informele rekeningen")), typeSelection("Jaarstamdata", [grp("informele rekeningen")]))),
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
                            "grootboekrekening": prop(resolvedValueReference(valSel("jaarstamdata", sgrp("resultaat grootboekrekeningen")), typeSelection("Jaarstamdata", [grp("resultaat grootboekrekeningen")]))),
                        })),
                        "balans": option(group({
                            "balans item": prop(resolvedValueReference(valSel("jaarstamdata", sgrp("overige balans items")), typeSelection("Jaarstamdata", [grp("overige balans items")]))),
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
                "debiteur": prop(resolvedValueReference(valSel("stamdata", sgrp("klanten")), typeSelection("Stamdata", [grp("klanten")]))),
                "BTW-periode": prop(resolvedValueReference(valSel("BTW periodes"), typeSelection("Boekingen", [grp("BTW periodes")]))),

                "contracttype": prop(taggedUnion({
                    "licentieovereenkomst": option(group({
                        "overeenkomst": prop(resolvedValueReference(valSel("debiteur", ref(sgrp("licentieovereenkomsten"))), typeSelection("Stamdata", [grp("klanten"), dict(), grp("licentieovereenkomsten")]))),
                    })),
                    "project": option(group({
                        "project": prop(resolvedValueReference(valSel("debiteur", ref(sgrp("projecten"))), typeSelection("Stamdata", [grp("klanten"), dict(), grp("projecten")]))),
                        "offerte": prop(resolvedValueReference(valSel("project", ref(sgrp("offertes"))), typeSelection("Stamdata", [grp("klanten"), dict(), grp("projecten"), dict(), grp("offertes")]))),
                    })),
                })),

                "afhandeling": prop(taggedUnion({
                    "mutaties": option(group({
                    })),
                    "rekening courant": option(group({
                        "rekening courant": prop(resolvedValueReference(valSel("jaarstamdata", sgrp("informele rekeningen")), typeSelection("Jaarstamdata", [grp("informele rekeningen")]))),
                    })),
                })),
                "regels": prop(dictionary(group({
                    "omschrijving": prop(terminal("multiline text")),
                    "bedrag exclusief BTW": prop(terminal("bedrag")),
                    "type": prop(taggedUnion({
                        "opbrengsten": option(group({
                            "grootboekrekening": prop(resolvedValueReference(valSel("jaarstamdata", sgrp("resultaat grootboekrekeningen")), typeSelection("Jaarstamdata", [grp("resultaat grootboekrekeningen")]))),
                        })),
                        "balans": option(group({
                            "balans item": prop(resolvedValueReference(valSel("jaarstamdata", sgrp("overige balans items")), typeSelection("Jaarstamdata", [grp("overige balans items")]))),
                        })),
                    })),
                    "BTW-regime": prop(taggedUnion({
                        "standaard": option(group({
                            "BTW-cateogrie": prop(resolvedValueReference(valSel("BTW-periode", ref(sgrp("1. BTW-categorieen"))), typeSelection("Boekingen", [grp("BTW periodes"), dict(), grp("1. BTW-categorieen")]))),
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
                            "parent": optionConstraint(valSel("contracttype"), "licentieovereenkomst", typeSelection("Boekingen", [grp("verkopen"), dict(), grp("contracttype")]))
                        }, group({
                            "periode": prop(resolvedValueReference(valSel("parent", sgrp("overeenkomst", ref(sgrp("periodes")))), typeSelection("Stamdata", [grp("klanten"), dict(), grp("licentieovereenkomsten"), dict(), grp("periodes")]))),
                        })),
                        "project": constrainedOption({
                            "parent": optionConstraint(valSel("contracttype"), "project", typeSelection("Boekingen", [grp("verkopen"), dict(), grp("contracttype")]))
                        }, group({
                            "opbrengst": prop(resolvedValueReference(valSel("parent", sgrp("offerte", ref(sgrp("opbrengsten")))), typeSelection("Stamdata", [grp("klanten"), dict(), grp("projecten"), dict(), grp("offertes"), dict(), grp("opbrengsten")]))),
                        })),
                    })),
                }))),
            }))),
        })),
        "Afhandeling": globalType({
            "jaarstamdata": pResolvedValue("Jaarstamdata", false),
            "boekingen": pResolvedValue("Boekingen", false),
            "overloop": pResolvedValue("Overloop", false),
        }, taggedUnion({
            "overloop": option(group({
                "jaar": prop(resolvedValueReference(valSel("overloop", sgrp("jaren")), typeSelection("Overloop", [grp("jaren")]))),
                "type": prop(taggedUnion({
                    "inkoop": option(resolvedValueReference(valSel("jaar", ref(sgrp("inkopen"))), typeSelection("Overloop", [grp("jaren"), dict(), grp("inkopen")]))),
                    "verkoop": option(resolvedValueReference(valSel("jaar", ref(sgrp("verkopen"))), typeSelection("Overloop", [grp("jaren"), dict(), grp("verkopen")]))),
                    "BTW-periode": option(resolvedValueReference(valSel("jaar", ref(sgrp("BTW periodes"))), typeSelection("Overloop", [grp("jaren"), dict(), grp("BTW periodes")]))),
                }))
            })),
            "inkoop": option(resolvedValueReference(valSel("boekingen", sgrp("inkopen")), typeSelection("Boekingen", [grp("inkopen")]))),
            "verkoop": option(resolvedValueReference(valSel("boekingen", sgrp("verkopen")), typeSelection("Boekingen", [grp("verkopen")]))),
            "BTW-periode": option(resolvedValueReference(valSel("boekingen", sgrp("BTW periodes")), typeSelection("Boekingen", [grp("BTW periodes")]))),
            "informele rekening": option(resolvedValueReference(valSel("jaarstamdata", sgrp("informele rekeningen")), typeSelection("Jaarstamdata", [grp("informele rekeningen")]))),
        })),
        "Jaar": globalType({}, group({
            "stamdata": prop(component("Stamdata", {})),
            "overloop": prop(component("Overloop", {
                "stamdata": aResolvedValue(valSel("stamdata")),
            })),
            "jaarstamdata": prop(component("Jaarstamdata", {
                "overloop": aResolvedValue(valSel("overloop")),
                "stamdata": aResolvedValue(valSel("stamdata")),
            })),
            "boekingen": prop(component("Boekingen", {
                "stamdata": aResolvedValue(valSel("stamdata")),
                "jaarstamdata": aResolvedValue(valSel("jaarstamdata")),
                "overloop": aResolvedValue(valSel("overloop")),
            })),
            "afhandeling": prop(group({
                "verrekenposten": prop(dictionary(group({
                    "mutaties": prop(dictionary(group({
                        "bedrag": prop(terminal("bedrag")),
                        "afhandeling": prop(component("Afhandeling", {
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
                                    "alg": option(component("Afhandeling", {
                                        "boekingen": aResolvedValue(valSel("boekingen")),
                                        "jaarstamdata": aResolvedValue(valSel("jaarstamdata")),
                                        "overloop": aResolvedValue(valSel("overloop")),
                                    })),
                                    "verrekenpost": option(resolvedValueReference(valSel("verrekenposten"), typeSelection("Jaar", [grp("afhandeling"), grp("verrekenposten")]))),
                                })),
                            })),
                        })),
                    }))),
                }))),
            })),
        })),
    }),
}