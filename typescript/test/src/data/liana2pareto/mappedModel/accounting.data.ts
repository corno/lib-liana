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
    parent,
    self,
    sibling,
    parameter,
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
                                "Hoofdcategorie fiscus": prop(reference("X", []/*parent*/)),
                                "Subcategorie fiscus": prop(reference("X", []/*Hoofdcategorie fiscus*/)),
                            }))),
                        }))),
                        "Grootboekrekeningen": prop(dictionary(group({
                            "Hoofdcategorie": prop(reference("X", []/*parent*/)),
                            "Subcategorie": prop(reference("X", []/*Hoofdcategorie*/)),
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
                                "Hoofdcategorie fiscus": prop(reference("X", []/*parent*/)),
                                "Subcategorie fiscus": prop(reference("X", []/*Hoofdcategorie fiscus*/)),
                            }))),
                        }))),
                        "Correctietypes vennootschapsbelasting": prop(dictionary(group({}))),
                        "Grootboekrekeningen": prop(dictionary(group({
                            "Hoofdcategorie": prop(reference("X", []/*parent*/)),
                            "Subcategorie": prop(reference("X", []/*Hoofdcategorie*/)),
                            "Zijde": prop(taggedUnion({
                                "Opbrengsten": group({}),
                                "Kosten": group({
                                    "Correctie op vennootschapsbelasting": prop(taggedUnion({
                                        "Nee": group({}),
                                        "Ja": group({
                                            "Correctietype": prop(reference("X", []/*parent*/)),
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
            "Informele Rekeningen": globalType({}, constrainedDictionary("self", [], group({
                "Grootboekrekening": prop(reference("X", []/*parent*/)),
                "Beginsaldo": prop(terminal("bedrag")),

                "Nieuw": prop(taggedUnion({
                    "Nee": group({
                        "Jaar": prop(reference("X", []/*self*/)),
                        "Rekening": prop(reference("X", []/*Jaar*/)),
                    }),
                    "Ja": group({}),
                })),
            }))),
            "Jaren": globalType({}, dictionary(group({
                "Startdatum boekjaar": prop(terminal("datum")),
                "Eerste boekjaar": prop(taggedUnion({
                    "Nee": group({
                        "Vorig boekjaar": prop(reference("X", []/*self*/)),
                    }),
                    "Ja": group({}),
                })),
                "Beginsaldo Winstreserve": prop(terminal("bedrag")),
                "Afgesloten": prop(taggedUnion({
                    "Nee": group({
                    }),
                    "Ja": group({}),
                })),
                "Grootboekrekening voor resultaat dit jaar": prop(reference("X", []/*parent*/)),
                "Grootboekrekening voor winstreserve": prop(reference("X", []/*parent*/)),
                "Grootboekrekening voor BTW afrondingen": prop(reference("X", []/*parent*/)),
                "Beginsaldo nog aan te geven BTW": prop(terminal("bedrag")),
                "Grootboekrekening voor nog aan te geven BTW": prop(reference("X", []/*parent*/)),
                "Grootboek inkoop saldo": prop(reference("X", []/*parent*/)),
                "Grootboek verkoop saldo": prop(reference("X", []/*parent*/)),
                "Grootboek BTW periode": prop(reference("X", []/*parent*/)),
                "Balans grootboekrekeningen": prop(constrainedDictionary("SELF", [], group({
                    "Type": prop(taggedUnion({
                        "Bankrekening": group({}),
                        "Informele rekening": group({}),
                        "Overig": group({}),
                    })),
                }))),
                "Resultaat grootboekrekeningen": prop(constrainedDictionary("SELF", [], group({
                }))),

                "Informele rekeningen": prop(component("Informele Rekeningen", {})),
                "Overige balans items": prop(dictionary(group({
                    "Beginsaldo": prop(terminal("bedrag")),
                    "Grootboekrekening": prop(reference("X", []/*parent*/)),

                    "Nieuw": prop(taggedUnion({
                        "Nee": group({
                            "Jaar": prop(reference("X", []/*self*/)),
                            "Balans item": prop(reference("X", []/*Jaar*/)),
                        }),
                        "Ja": group({}),
                    })),

                    "Memoriaal boekingen": prop(dictionary(group({
                        "Bedrag": prop(terminal("bedrag")),
                        "Datum": prop(terminal("datum")),
                        "Grootboekrekening": prop(reference("X", []/*parent*/)),
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

                    "1. BTW-categorieen": prop(constrainedDictionary("SELF", [], group({
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
                            "Crediteur": prop(reference("X", []/*parent*/)),
                        }),
                        "Salaris": group({
                            "Ronde": prop(reference("X", []/*parent*/)),
                            "Medewerker": prop(reference("X", []/*parent*/)),
                        }),
                        "Loonheffing": group({
                            "Ronde": prop(reference("X", []/*parent*/)),
                        }),
                        "WBSO": group({
                            "Ronde": prop(reference("X", []/*parent*/)),
                        }),
                    })),
                    "BTW-regime": prop(taggedUnion({
                        "Standaard": group({
                            "BTW-periode": prop(reference("X", []/*parent*/)),
                        }),
                        "Geen BTW van toepassing": group({
                            "BTW-periode": prop(reference("X", []/*parent*/)),
                        }),
                        "Binnenland heffing verlegd": group({
                            "BTW-periode": prop(reference("X", []/*parent*/)),
                        }),
                        "Intracommunautair": group({
                            "BTW-periode": prop(reference("X", []/*parent*/)),
                        }),
                        "Import van buiten de EU": group({
                            "BTW-periode": prop(reference("X", []/*parent*/)),
                        }),
                    })),
                    "Afhandeling": prop(taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": prop(reference("X", []/*parent*/)),
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
                                "Grootboekrekening": prop(reference("X", []/*parent*/)),
                            }),
                            "Balans": group({
                                "Balans item": prop(reference("X", []/*parent*/)),
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
                    "Debiteur": prop(reference("X", []/*parent*/)),
                    "BTW-periode": prop(reference("X", []/*parent*/)),

                    "Contracttype": prop(taggedUnion({
                        "Licentieovereenkomst": group({
                            "Overeenkomst": prop(reference("X", []/*parent*/)),
                        }),
                        "Project": group({
                            "Project": prop(reference("X", []/*parent*/)),
                            "Offerte": prop(reference("X", []/*Project*/)),
                        }),
                    })),

                    "Afhandeling": prop(taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": prop(reference("X", []/*parent*/)),
                        }),
                    })),
                    "Regels": prop(dictionary(group({
                        "Omschrijving": prop(terminal("multiline text")),
                        "Bedrag exclusief BTW": prop(terminal("bedrag")),
                        "Type": prop(taggedUnion({
                            "Opbrengsten": group({
                                "Grootboekrekening": prop(reference("X", []/*parent*/)),
                            }),
                            "Balans": group({
                                "Balans item": prop(reference("X", []/*parent*/)),
                            }),
                        })),
                        "BTW-regime": prop(taggedUnion({
                            "Standaard": group({
                                "BTW-cateogrie": prop(reference("X", []/*parent*/)),
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
                                "Periode": prop(reference("X", []/*parent*/)),
                            }),
                            "Project": group({
                                "Opbrengst": prop(reference("X", []/*parent*/)),
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
                            "Jaar": prop(reference("X", []/*parent*/)),
                            "Rekening": prop(reference("X", []/*parent*/)),
                        }),
                        "Ja": group({}),
                    })),
                    "Grootboekrekening": prop(reference("X", []/*parent*/)),
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
                    "Jaar": prop(reference("X", []/*param:Jaren*/)),
                    "Inkoop": prop(reference("X", []/*Jaar*/)),
                }),
                "Verkoop": group({
                    "Jaar": prop(reference("X", []/*param:Jaren*/)),
                    "Inkoop": prop(reference("X", []/*Jaar*/)),
                }),
                "BTW-periode": group({
                    "Jaar": prop(reference("X", []/*param:Jaren*/)),
                    "BTW-periode": prop(reference("X", []/*Jaar*/)),
                }),
                "Verrekenpost": group({
                    "Verrekenpost": prop(reference("X", []/*param:Verrekenposten*/)),
                }),
                "Informele rekening": group({
                    "Informele rekening": prop(reference("X", []/*param:Informele Rekeningen*/)),
                }),
            })),
        }),
    },
    'root': r("Accounting"),
}