import * as pd from 'pareto-core-data'

import * as gliana2pareto from "../../../../../pub/dist/submodules/liana2pareto"
import {
    d,
    r,
    array,
    boolean,
    component,
    constrainedDictionary,
    dictionary,
    globalType,
    group,
    reference,
    string,
    taggedUnion,
    prop,
} from "../../../../../pub/dist/submodules/liana/shorthands"



export const $: gliana2pareto.T.MappedModel<pd.SourceLocation> = {
    'stringmapping': pd.d({
        "bedrag": ['number', null],
        "bestand": ['string', null],
        "dagen": ['number', null],
        "datum": ['number', null],
        "multiline text": ['string', null],
        "promillage": ['number', null],
        "identifier": ['string', null],
        "single line text": ['string', null],
    }),
    'model': {
        'string types': d({
            "bedrag": null,
            "bestand": null,
            "dagen": null,
            "datum": null,
            "multiline text": null,
            "promillage": null,
            "identifier": null,
            "single line text": null,
        }),
        'global types': d({
            "Accounting": globalType({}, group({
                "Beheer": prop(group({
                    "Gebruikers": prop(dictionary(group({
                        "Volledige naam": prop(string("single line text")),
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
                                "Hoofdcategorie fiscus": prop(reference(['parent', null], [])),
                                "Subcategorie fiscus": prop(reference(['sibling', "Hoofdcategorie fiscus"], [])),
                            }))),
                        }))),
                        "Grootboekrekeningen": prop(dictionary(group({
                            "Hoofdcategorie": prop(reference(['parent', null], [])),
                            "Subcategorie": prop(reference(['sibling', "Hoofdcategorie"], [])),
                            "Zijde": prop(taggedUnion({
                                "Activa": group({}),
                                "Passiva": group({}),
                            })),
                        })))
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
                                "Hoofdcategorie fiscus": prop(reference(['parent', null], [])),
                                "Subcategorie fiscus": prop(reference(['sibling', "Hoofdcategorie fiscus"], [])),
                            }))),
                        }))),
                        "Correctietypes vennootschapsbelasting": prop(dictionary(group({}))),
                        "Grootboekrekeningen": prop(dictionary(group({
                            "Hoofdcategorie": prop(reference(['parent', null], [])),
                            "Subcategorie": prop(reference(['sibling', "Hoofdcategorie"], [])),
                            "Zijde": prop(taggedUnion({
                                "Opbrengsten": group({}),
                                "Kosten": group({
                                    "Correctie op vennootschapsbelasting": prop(taggedUnion({
                                        "Nee": group({}),
                                        "Ja": group({
                                            "Correctietype": prop(reference(['parent', null], []))
                                        })
                                    }))
                                }),
                            })),
                        }))),
                    })),
                    "BTW-categorieen": prop(dictionary(group({
                        "BTW-heffing": prop(taggedUnion({
                            "Nee": group({}),
                            "Ja": group({
                                "BTW-promillage": prop(string("promillage"))
                            }),
                        }))
                    })))
                })),
                "Klanten": prop(dictionary(group({
                    "Projecten": prop(dictionary(group({
                        "Offertes": prop(dictionary(group({
                            "Opbrengsten": prop(dictionary(group({
                                "Type": prop(taggedUnion({
                                    "Project": group({
                                        "Betaaldatum": prop(string("datum")),
                                        "Bedrag": prop(string("bedrag")),
                                    })
                                })),
                            })))
                        })))
                    }))),
                    "Licentieovereenkomsten": prop(dictionary(group({
                        "Periodes": prop(dictionary(group({
                            "Bedrag": prop(string("bedrag")),
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
            "Informele Rekeningen": globalType({}, constrainedDictionary(['self', null], [], group({
                "Grootboekrekening": prop(reference(['parent', null], [])),
                "Beginsaldo": prop(string("bedrag")),

                "Nieuw": prop(taggedUnion({
                    "Nee": group({
                        "Jaar": prop(reference(['self', null], [])),
                        "Rekening": prop(reference(['sibling', "Jaar"], [])),
                    }),
                    "Ja": group({}),
                })),
            }))),
            "Jaren": globalType({}, dictionary(group({
                "Startdatum boekjaar": prop(string("datum")),
                "Eerste boekjaar": prop(taggedUnion({
                    "Nee": group({
                        "Vorig boekjaar": prop(reference(['self', null], []))
                    }),
                    "Ja": group({}),
                })),
                "Beginsaldo Winstreserve": prop(string("bedrag")),
                "Afgesloten": prop(taggedUnion({
                    "Nee": group({
                    }),
                    "Ja": group({}),
                })),
                "Grootboekrekening voor resultaat dit jaar": prop(reference(['parent', null], [])),
                "Grootboekrekening voor winstreserve": prop(reference(['parent', null], [])),
                "Grootboekrekening voor BTW afrondingen": prop(reference(['parent', null], [])),
                "Beginsaldo nog aan te geven BTW": prop(string("bedrag")),
                "Grootboekrekening voor nog aan te geven BTW": prop(reference(['parent', null], [])),
                "Grootboek inkoop saldo": prop(reference(['parent', null], [])),
                "Grootboek verkoop saldo": prop(reference(['parent', null], [])),
                "Grootboek BTW periode": prop(reference(['parent', null], [])),
                "Balans grootboekrekeningen": prop(constrainedDictionary(['self', null], [], group({
                    "Type": prop(taggedUnion({
                        "Bankrekening": group({}),
                        "Informele rekening": group({}),
                        "Overig": group({}),
                    })),
                }))),
                "Resultaat grootboekrekeningen": prop(constrainedDictionary(['self', null], [], group({
                }))),

                "Informele rekeningen": prop(component("Informele Rekeningen", {})),
                "Overige balans items": prop(dictionary(group({
                    "Beginsaldo": prop(string("bedrag")),
                    "Grootboekrekening": prop(reference(['parent', null], [])),

                    "Nieuw": prop(taggedUnion({
                        "Nee": group({
                            "Jaar": prop(reference(['self', null], [])),
                            "Balans item": prop(reference(['sibling', "Jaar"], [])),
                        }),
                        "Ja": group({}),
                    })),

                    "Memoriaal boekingen": prop(dictionary(group({
                        "Bedrag": prop(string("bedrag")),
                        "Datum": prop(string("datum")),
                        "Grootboekrekening": prop(reference(['parent', null], [])),
                        "Omschrijving": prop(string("multiline text")),
                    }))),
                }))),
                "BTW periodes": prop(dictionary(group({
                    "Omschrijving": prop(string("multiline text")),
                    "Status": prop(taggedUnion({
                        "Aangegeven": group({
                            "Bedrag": prop(string("bedrag")),
                            "Afronding": prop(string("bedrag")),
                            "Datum": prop(string("datum")),
                        }),
                        "Openstaand": group({}),
                    })),

                    "1. BTW-categorieen": prop(constrainedDictionary(['self', null], [], group({
                    }))),
                    "Documenten": prop(dictionary(group({
                        "Bestand": prop(string("bestand"))
                    }))),
                }))),
                "Salarisrondes": prop(dictionary(group({
                }))),
                "Inkopen": prop(dictionary(group({
                    "Datum": prop(string("datum")),
                    "Brondocument": prop(taggedUnion({
                        "Toegevoegd": group({
                            "Document": prop(string("bestand")),
                        }),
                        "Nog toevoegen": group({}),
                        "Niet van toepassing": group({}),
                        "Ontbreekt": group({}),
                    })),
                    "Type": prop(taggedUnion({
                        "Bonnetje": group({
                        }),
                        "Inkoop (met crediteur)": group({
                            "Factuurnummer": prop(string("identifier")),
                            "Crediteur": prop(reference(['parent', null], [])),
                        }),
                        "Salaris": group({
                            "Ronde": prop(reference(['parent', null], [])),
                            "Medewerker": prop(reference(['parent', null], [])),
                        }),
                        "Loonheffing": group({
                            "Ronde": prop(reference(['parent', null], [])),
                        }),
                        "WBSO": group({
                            "Ronde": prop(reference(['parent', null], [])),
                        }),
                    })),
                    "BTW-regime": prop(taggedUnion({
                        "Standaard": group({
                            "BTW-periode": prop(reference(['parent', null], [])),
                        }),
                        "Geen BTW van toepassing": group({
                            "BTW-periode": prop(reference(['parent', null], [])),
                        }),
                        "Binnenland heffing verlegd": group({
                            "BTW-periode": prop(reference(['parent', null], [])),
                        }),
                        "Intracommunautair": group({
                            "BTW-periode": prop(reference(['parent', null], [])),
                        }),
                        "Import van buiten de EU": group({
                            "BTW-periode": prop(reference(['parent', null], [])),
                        }),
                    })),
                    "Afhandeling": prop(taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": prop(reference(['parent', null], [])),
                        }),
                        "Nog te betalen": group({
                            "Betalingstermijn": prop(string("dagen")),
                        }),
                    })),
                    "Regels": prop(dictionary(group({
                        "Omschrijving": prop(string("multiline text")),
                        "Bedrag": prop(taggedUnion({
                            "Bekend": group({
                                "Bedrag inclusief BTW": prop(string("bedrag")),
                                "BTW": prop(string("bedrag")),
                            }),
                            "Nog niet bekend": group({
                                "Aantekeningen": prop(string("multiline text"))
                            }),
                        })),
                        "Type": prop(taggedUnion({
                            "Kosten": group({
                                "Grootboekrekening": prop(reference(['parent', null], [])),
                            }),
                            "Balans": group({
                                "Balans item": prop(reference(['parent', null], [])),
                            }),
                        })),
                    }))),
                }))),
                "Verkopen": prop(dictionary(group({
                    "Brondocument": prop(taggedUnion({
                        "Nog toevoegen": group({
                        }),
                        "Toegevoegd": group({
                            "Document": prop(string("bestand"))
                        }),
                    })),
                    "Betalingstermijn": prop(string("dagen")),
                    "Debiteur": prop(reference(['parent', null], [])),
                    "BTW-periode": prop(reference(['parent', null], [])),

                    "Contracttype": prop(taggedUnion({
                        "Licentieovereenkomst": group({
                            "Overeenkomst": prop(reference(['parent', null], [])),
                        }),
                        "Project": group({
                            "Project": prop(reference(['parent', null], [])),
                            "Offerte": prop(reference(['sibling', "Project"], [])),
                        }),
                    })),

                    "Afhandeling": prop(taggedUnion({
                        "Mutaties": group({
                        }),
                        "Rekening courant": group({
                            "Rekening courant": prop(reference(['parent', null], [])),
                        }),
                    })),
                    "Regels": prop(dictionary(group({
                        "Omschrijving": prop(string("multiline text")),
                        "Bedrag exclusief BTW": prop(string("bedrag")),
                        "Type": prop(taggedUnion({
                            "Opbrengsten": group({
                                "Grootboekrekening": prop(reference(['parent', null], [])),
                            }),
                            "Balans": group({
                                "Balans item": prop(reference(['parent', null], [])),
                            }),
                        })),
                        "BTW-regime": prop(taggedUnion({
                            "Standaard": group({
                                "BTW-cateogrie": prop(reference(['parent', null], [])),
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
                                "Periode": prop(reference(['parent', null], [])),
                            }),
                            "Project": group({
                                "Opbrengst": prop(reference(['parent', null], [])),
                            }),
                        })),
                    }))),
                }))),
                "Verrekenposten": prop(dictionary(group({
                    "Mutaties": prop(dictionary(group({
                        "Bedrag": prop(string("bedrag")),
                        "Afhandeling": prop(component("Afhandeling", {}))
                    }))),
                }))),
                "Bankrekeningen": prop(dictionary(group({
                    "Beginsaldo": prop(string("bedrag")),
                    "Nieuw": prop(taggedUnion({
                        "Nee": group({
                            "Jaar": prop(reference(['parent', null], [])),
                            "Rekening": prop(reference(['parent', null], [])),
                        }),
                        "Ja": group({}),
                    })),
                    "Grootboekrekening": prop(reference(['parent', null], [])),
                    "Mutaties": prop(dictionary(group({
                        "Omschrijving": prop(string("multiline text")),
                        "Bedrag": prop(string("bedrag")),
                        "Datum": prop(string("datum")),
                        "Status": prop(taggedUnion({
                            "Nog te verwerken": group({}),
                            "Verwerkt": group({
                                "Afhandeling": prop(component("Afhandeling", {}))
                            })
                        }))
                    }))),
                }))),
            }))),
            //"Afhandeling": globalType(["Informele Rekeningen", "Jaren", "Verrekenposten"), taggedUnion({
            "Afhandeling": globalType({}, taggedUnion({
                "Inkoop": group({
                    "Jaar": prop(reference(['parameter', "Jaren"], [])),
                    "Inkoop": prop(reference(['sibling', "Jaar"], [])),
                }),
                "Verkoop": group({
                    "Jaar": prop(reference(['parameter', "Jaren"], [])),
                    "Inkoop": prop(reference(['sibling', "Jaar"], [])),
                }),
                "BTW-periode": group({
                    "Jaar": prop(reference(['parameter', "Jaren"], [])),
                    "BTW-periode": prop(reference(['sibling', "Jaar"], [])),
                }),
                "Verrekenpost": group({
                    "Verrekenpost": prop(reference(['parameter', "Verrekenposten"], [])),
                }),
                "Informele rekening": group({
                    "Informele rekening": prop(reference(['parameter', "Informele Rekeningen"], [])),
                }),
            }))
        }),
        'root': r("Accounting"),
    }
}