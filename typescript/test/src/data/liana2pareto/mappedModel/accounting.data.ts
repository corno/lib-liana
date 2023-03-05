import * as pd from 'pareto-core-data'

import * as gliana from "../../../../../pub/dist/submodules/liana"
import {
    d,
    r,
    array,
    component,
    constrainedDictionary,
    dictionary,
    globalType,
    group,
    reference,
    terminal,
    taggedUnion,
    prop,
    grp,
    dict,
} from "../../../../../pub/dist/submodules/liana/shorthands"



export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': pd.d({}),
        'terminal types': pd.d({
            "bedrag": null,
            "bestand": null,
            "dagen": null,
            "datum": null,
            "multiline text": null,
            "promillage": null,
            "identifier": null,
            "single line text": null,
        }),
        'global types': pd.d({
            "Accounting": globalType({}, group({
                "Beheer": prop(group({
                    "Gebruikers": prop(dictionary(group({
                        "Volledige naam": prop(terminal("single line text")),
                    }))),
                    "Balans": prop(group({
                        "Hoofdcategorieen fiscus": prop(dictionary(group({
                            "Zijde": prop(taggedUnion({
                                "Activa": group({}),
                                "Passiva": group({}),
                            })),
                            "Subcategorieen": prop(dictionary(group({}))),
                        }))),
                        "Hoofdcategorieen": prop(dictionary(group({
                            "Zijde": prop(taggedUnion({
                                "Activa": group({}),
                                "Passiva": group({}),
                            })),
                            "Subcategorieen": prop(dictionary(group({
                                "Hoofdcategorie fiscus": prop(reference("Accounting", [grp("Beheer"), grp("Balans"), grp("Hoofdcategorieen fiscus")])),
                                "Subcategorie fiscus": prop(reference("Accounting", [grp("Beheer"), grp("Balans"), grp("Hoofdcategorieen fiscus"), dict(), grp("Subcategorieen")])),
                            }))),
                        }))),
                        "Grootboekrekeningen": prop(dictionary(group({
                            "Hoofdcategorie": prop(reference("Accounting", [grp("Beheer"), grp("Balans"), grp("Hoofdcategorieen")])),
                            "Subcategorie": prop(reference("Accounting", [grp("Beheer"), grp("Balans"), grp("Hoofdcategorieen"), dict(), grp("Subcategorieen")])),
                            "Zijde": prop(taggedUnion({
                                "Activa": group({}),
                                "Passiva": group({}),
                            })),
                        }))),
                    })),
                    "Resultaat": prop(group({
                        "Hoofdcategorieen fiscus": prop(dictionary(group({
                            "Zijde": prop(taggedUnion({
                                "Kosten": group({}),
                                "Opbrengsten": group({}),
                            })),
                            "Subcategorieen": prop(dictionary(group({}))),
                        }))),
                        "Hoofdcategorieen": prop(dictionary(group({
                            "Zijde": prop(taggedUnion({
                                "Kosten": group({}),
                                "Opbrengsten": group({}),
                            })),
                            "Subcategorieen": prop(dictionary(group({
                                "Hoofdcategorie fiscus": prop(reference("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Hoofdcategorieen fiscus")])),
                                "Subcategorie fiscus": prop(reference("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Hoofdcategorieen fiscus"), dict(), grp("Subcategorieen")])),
                            }))),
                        }))),
                        "Correctietypes vennootschapsbelasting": prop(dictionary(group({}))),
                        "Grootboekrekeningen": prop(dictionary(group({
                            "Hoofdcategorie": prop(reference("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Hoofdcategorieen")])),
                            "Subcategorie": prop(reference("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Hoofdcategorieen"), dict(), grp("Subcategorieen")])),
                            "Zijde": prop(taggedUnion({
                                "Opbrengsten": group({}),
                                "Kosten": group({
                                    "Correctie op vennootschapsbelasting": prop(taggedUnion({
                                        "Nee": group({}),
                                        "Ja": group({
                                            "Correctietype": prop(reference("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Correctietypes vennootschapsbelasting")]/*parent*/)),
                                        }),
                                    })),
                                }),
                            })),
                        }))),
                    })),
                    "BTW-categorieen": prop(dictionary(group({
                        "BTW-heffing": prop(taggedUnion({
                            "Nee": group({}),
                            "Ja": group({
                                "BTW-promillage": prop(terminal("promillage")),
                            }),
                        })),
                    }))),
                })),
                "Klanten": prop(dictionary(group({
                    "Projecten": prop(dictionary(group({
                        "Offertes": prop(dictionary(group({
                            "Opbrengsten": prop(dictionary(group({
                                "Type": prop(taggedUnion({
                                    "Project": group({
                                        "Betaaldatum": prop(terminal("datum")),
                                        "Bedrag": prop(terminal("bedrag")),
                                    }),
                                })),
                            }))),
                        }))),
                    }))),
                    "Licentieovereenkomsten": prop(dictionary(group({
                        "Periodes": prop(dictionary(group({
                            "Bedrag": prop(terminal("bedrag")),
                        }))),
                    }))),
                }))),
                "Medewerkers": prop(dictionary(group({}))),
                "Leveranciers": prop(dictionary(group({}))),
                "Bankrekeningen": prop(dictionary(group({}))),
                "Informele rekeningen": prop(dictionary(group({}))),
                "Jaren": prop(
                    // "Beheer",
                    // "Klanten",
                    // "Medewerkers",
                    // "Leveranciers",
                    // "Bankrekeningen",
                    // "Informele rekeningen",
                    component("Jaren", {})),
            })),
            "Informele Rekeningen": globalType({}, constrainedDictionary("Accounting", [grp("Informele rekeningen")], group({
                "Grootboekrekening": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")])),
                "Beginsaldo": prop(terminal("bedrag")),

                "Nieuw": prop(taggedUnion({
                    "Nee": group({
                        "Jaar": prop(reference("Jaren", [])),
                        "Rekening": prop(reference("Informele Rekeningen", [])),
                    }),
                    "Ja": group({}),
                })),
            }))),
            "Jaren": globalType({}, dictionary(group({
                "Startdatum boekjaar": prop(terminal("datum")),
                "Eerste boekjaar": prop(taggedUnion({
                    "Nee": group({
                        "Vorig boekjaar": prop(reference("Jaren", [])),
                    }),
                    "Ja": group({}),
                })),
                "Beginsaldo Winstreserve": prop(terminal("bedrag")),
                "Afgesloten": prop(taggedUnion({
                    "Nee": group({
                    }),
                    "Ja": group({}),
                })),
                "Balans grootboekrekeningen": prop(constrainedDictionary("Accounting", [grp("Beheer"), grp("Balans"), grp("Grootboekrekeningen")], group({
                    "Type": prop(taggedUnion({
                        "Bankrekening": group({}),
                        "Informele rekening": group({}),
                        "Overig": group({}),
                    })),
                }))),
                "Resultaat grootboekrekeningen": prop(constrainedDictionary("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Grootboekrekeningen")], group({
                }))),
                "Grootboekrekening voor resultaat dit jaar": prop(reference("Jaren", [dict(), grp("Resultaat grootboekrekeningen")])),
                "Grootboekrekening voor winstreserve": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")])),
                "Grootboekrekening voor BTW afrondingen": prop(reference("Jaren", [dict(), grp("Resultaat grootboekrekeningen")])),
                "Beginsaldo nog aan te geven BTW": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")])),
                "Grootboekrekening voor nog aan te geven BTW": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")])),
                "Grootboek inkoop saldo": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")])),
                "Grootboek verkoop saldo": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")])),
                "Grootboek BTW periode": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")])),


                "Informele rekeningen": prop(component("Informele Rekeningen", {})),
                "Overige balans items": prop(dictionary(group({
                    "Beginsaldo": prop(terminal("bedrag")),
                    "Grootboekrekening": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")])),

                    "Nieuw": prop(taggedUnion({
                        "Nee": group({
                            "Jaar": prop(reference("Jaren", [])),
                            "Balans item": prop(reference("Jaren", [dict(), grp("Overige balans items")])),
                        }),
                        "Ja": group({}),
                    })),

                    "Memoriaal boekingen": prop(dictionary(group({
                        "Bedrag": prop(terminal("bedrag")),
                        "Datum": prop(terminal("datum")),
                        "Grootboekrekening": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")]/*parent*/)),
                        "Omschrijving": prop(terminal("multiline text")),
                    }))),
                }))),
                "BTW periodes": prop(dictionary(group({
                    "Omschrijving": prop(terminal("multiline text")),
                    "Status": prop(taggedUnion({
                        "Aangegeven": group({
                            "Bedrag": prop(terminal("bedrag")),
                            "Afronding": prop(terminal("bedrag")),
                            "Datum": prop(terminal("datum")),
                        }),
                        "Openstaand": group({}),
                    })),

                    "1. BTW-categorieen": prop(constrainedDictionary("Accounting", [grp("Beheer"), grp("BTW-categorieen")], group({
                    }))),
                    "Documenten": prop(dictionary(group({
                        "Bestand": prop(terminal("bestand")),
                    }))),
                }))),
                "Salarisrondes": prop(dictionary(group({
                }))),
                "Inkopen": prop(dictionary(group({
                    "Datum": prop(terminal("datum")),
                    "Brondocument": prop(taggedUnion({
                        "Toegevoegd": group({
                            "Document": prop(terminal("bestand")),
                        }),
                        "Nog toevoegen": group({}),
                        "Niet van toepassing": group({}),
                        "Ontbreekt": group({}),
                    })),
                    "Type": prop(taggedUnion({
                        "Bonnetje": group({
                        }),
                        "Inkoop (met crediteur)": group({
                            "Factuurnummer": prop(terminal("identifier")),
                            "Crediteur": prop(reference("Accounting", [grp("Leveranciers")])),
                        }),
                        "Salaris": group({
                            "Ronde": prop(reference("Jaren", [dict(), grp("Salarisrondes")])),
                            "Medewerker": prop(reference("Accounting", [grp("Medewerkers")])),
                        }),
                        "Loonheffing": group({
                            "Ronde": prop(reference("Jaren", [dict(), grp("Salarisrondes")])),
                        }),
                        "WBSO": group({
                            "Ronde": prop(reference("Jaren", [dict(), grp("Salarisrondes")])),
                        }),
                    })),
                    "BTW-regime": prop(taggedUnion({
                        "Standaard": group({
                            "BTW-periode": prop(reference("Jaren", [dict(), grp("BTW periodes")])),
                        }),
                        "Geen BTW van toepassing": group({
                            "BTW-periode": prop(reference("Jaren", [dict(), grp("BTW periodes")])),
                        }),
                        "Binnenland heffing verlegd": group({
                            "BTW-periode": prop(reference("Jaren", [dict(), grp("BTW periodes")])),
                        }),
                        "Intracommunautair": group({
                            "BTW-periode": prop(reference("Jaren", [dict(), grp("BTW periodes")])),
                        }),
                        "Import van buiten de EU": group({
                            "BTW-periode": prop(reference("Jaren", [dict(), grp("BTW periodes")])),
                        }),
                    })),
                    "Afhandeling": prop(taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": prop(reference("Informele Rekeningen", [])),
                        }),
                        "Nog te betalen": group({
                            "Betalingstermijn": prop(terminal("dagen")),
                        }),
                    })),
                    "Regels": prop(dictionary(group({
                        "Omschrijving": prop(terminal("multiline text")),
                        "Bedrag": prop(taggedUnion({
                            "Bekend": group({
                                "Bedrag inclusief BTW": prop(terminal("bedrag")),
                                "BTW": prop(terminal("bedrag")),
                            }),
                            "Nog niet bekend": group({
                                "Aantekeningen": prop(terminal("multiline text")),
                            }),
                        })),
                        "Type": prop(taggedUnion({
                            "Kosten": group({
                                "Grootboekrekening": prop(reference("Jaren", [dict(), grp("Resultaat grootboekrekeningen")])),
                            }),
                            "Balans": group({
                                "Balans item": prop(reference("Jaren", [dict(), grp("Overige balans items")])),
                            }),
                        })),
                    }))),
                }))),
                "Verkopen": prop(dictionary(group({
                    "Brondocument": prop(taggedUnion({
                        "Nog toevoegen": group({
                        }),
                        "Toegevoegd": group({
                            "Document": prop(terminal("bestand")),
                        }),
                    })),
                    "Betalingstermijn": prop(terminal("dagen")),
                    "Debiteur": prop(reference("Accounting", [grp("Klanten")])),
                    "BTW-periode": prop(reference("Jaren", [dict(), grp("BTW periodes")])),

                    "Contracttype": prop(taggedUnion({
                        "Licentieovereenkomst": group({
                            "Overeenkomst": prop(reference("Accounting", [grp("Klanten"), dict(), grp("Licentieovereenkomsten")])),
                        }),
                        "Project": group({
                            "Project": prop(reference("Accounting", [grp("Klanten"), dict(), grp("Projecten")])),
                            "Offerte": prop(reference("Accounting", [grp("Klanten"), dict(), grp("Projecten"), dict(), grp("Offertes")])),
                        }),
                    })),

                    "Afhandeling": prop(taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": prop(reference("Informele Rekeningen", [])),
                        }),
                    })),
                    "Regels": prop(dictionary(group({
                        "Omschrijving": prop(terminal("multiline text")),
                        "Bedrag exclusief BTW": prop(terminal("bedrag")),
                        "Type": prop(taggedUnion({
                            "Opbrengsten": group({
                                "Grootboekrekening": prop(reference("Jaren", [dict(), grp("Resultaat grootboekrekeningen")])),
                            }),
                            "Balans": group({
                                "Balans item": prop(reference("Jaren", [dict(), grp("Overige balans items")])),
                            }),
                        })),
                        "BTW-regime": prop(taggedUnion({
                            "Standaard": group({
                                "BTW-cateogrie": prop(reference("Jaren", [dict(), grp("BTW periodes"), dict(), grp("1. BTW-categorieen")])),
                            }),
                            "Binnenland heffing verlegd": group({
                            }),
                            "Intracommunautair": group({
                            }),
                            "Export buiten de EU": group({
                            }),
                            "Installatie of afstandsverkopen binnen de EU": group({
                            }),
                        })),
                        "Contracttype": prop(taggedUnion({
                            "Los": group({
                            }),
                            "Licentieovereenkomst": group({
                                "Periode": prop(reference("Accounting", [grp("Klanten"), dict(), grp("Licentieovereenkomsten"), dict(), grp("Periodes")])),
                            }),
                            "Project": group({
                                "Opbrengst": prop(reference("Accounting", [grp("Klanten"), dict(), grp("Projecten"), dict(), grp("Offertes"), dict(), grp("Opbrengsten")])),
                            }),
                        })),
                    }))),
                }))),
                "Verrekenposten": prop(dictionary(group({
                    "Mutaties": prop(dictionary(group({
                        "Bedrag": prop(terminal("bedrag")),
                        "Afhandeling": prop(component("Afhandeling", {})),
                    }))),
                }))),
                "Bankrekeningen": prop(dictionary(group({
                    "Beginsaldo": prop(terminal("bedrag")),
                    "Nieuw": prop(taggedUnion({
                        "Nee": group({
                            "Jaar": prop(reference("Jaren", [])),
                            "Rekening": prop(reference("Jaren", [dict(), grp("Bankrekeningen")])),
                        }),
                        "Ja": group({}),
                    })),
                    "Grootboekrekening": prop(reference("Jaren", [dict(), grp("Balans grootboekrekeningen")])),
                    "Mutaties": prop(dictionary(group({
                        "Omschrijving": prop(terminal("multiline text")),
                        "Bedrag": prop(terminal("bedrag")),
                        "Datum": prop(terminal("datum")),
                        "Status": prop(taggedUnion({
                            "Nog te verwerken": group({}),
                            "Verwerkt": group({
                                "Afhandeling": prop(component("Afhandeling", {})),
                            }),
                        })),
                    }))),
                }))),
            }))),
            //"Afhandeling": globalType(["Informele Rekeningen", "Jaren", "Verrekenposten"), taggedUnion({
            "Afhandeling": globalType({}, taggedUnion({
                "Inkoop": group({
                    "Jaar": prop(reference("Jaren", [])),
                    "Inkoop": prop(reference("Jaren", [dict(), grp("Inkopen")])),
                }),
                "Verkoop": group({
                    "Jaar": prop(reference("Jaren", [])),
                    "Inkoop": prop(reference("Jaren", [dict(), grp("Verkopen")])),
                }),
                "BTW-periode": group({
                    "Jaar": prop(reference("Jaren", [])),
                    "BTW-periode": prop(reference("Jaren", [dict(), grp("BTW periodes")])),
                }),
                "Verrekenpost": group({
                    "Verrekenpost": prop(reference("Jaren", [dict(), grp("Verrekenposten")])),
                }),
                "Informele rekening": group({
                    "Informele rekening": prop(reference("Informele Rekeningen", [])),
                }),
            })),
        }),
    },
    'root': r("Accounting"),
}