import * as pd from 'pareto-core-data'

import * as g_liana from "../../../../../pub/dist/submodules/liana"
import {
    d,
    r,
    array,
    component,
    constrainedDictionary,
    dictionary,
    globalType,
    group,
    terminal,
    taggedUnion,
    prop,
    grp,
    dict,
    typeSelection,
    option,
} from "../../../../../pub/dist/submodules/liana/shorthands"



export const $: g_liana.T.Model<pd.SourceLocation> = {
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
            // "Accounting": globalType({}, group({
            //     "Beheer": prop(group({
            //         "Gebruikers": prop(dictionary(group({
            //             "Volledige naam": prop(terminal("single line text")),
            //         }))),
            //         "Balans": prop(group({
            //             "Hoofdcategorieen fiscus": prop(dictionary(group({
            //                 "Zijde": prop(taggedUnion({
            //                     "Activa": option(group({})),
            //                     "Passiva": option(group({})),
            //                 })),
            //                 "Subcategorieen": prop(dictionary(group({}))),
            //             }))),
            //             "Hoofdcategorieen": prop(dictionary(group({
            //                 "Zijde": prop(taggedUnion({
            //                     "Activa": option(group({})),
            //                     "Passiva": option(group({})),
            //                 })),
            //                 "Subcategorieen": prop(dictionary(group({
            //                     "Hoofdcategorie fiscus": prop(reference(typeSelection("Accounting", [grp("Beheer"), grp("Balans"), grp("Hoofdcategorieen fiscus")]), tbd())),
            //                     "Subcategorie fiscus": prop(reference(typeSelection("Accounting", [grp("Beheer"), grp("Balans"), grp("Hoofdcategorieen fiscus"), dict(), grp("Subcategorieen")]), tbd())),
            //                 }))),
            //             }))),
            //             "Grootboekrekeningen": prop(dictionary(group({
            //                 "Hoofdcategorie": prop(reference(typeSelection("Accounting", [grp("Beheer"), grp("Balans"), grp("Hoofdcategorieen")]), tbd())),
            //                 "Subcategorie": prop(reference(typeSelection("Accounting", [grp("Beheer"), grp("Balans"), grp("Hoofdcategorieen"), dict(), grp("Subcategorieen")]), tbd())),
            //                 "Zijde": prop(taggedUnion({
            //                     "Activa": option(group({})),
            //                     "Passiva": option(group({})),
            //                 })),
            //             }))),
            //         })),
            //         "Resultaat": prop(group({
            //             "Hoofdcategorieen fiscus": prop(dictionary(group({
            //                 "Zijde": prop(taggedUnion({
            //                     "Kosten": option(group({})),
            //                     "Opbrengsten": option(group({})),
            //                 })),
            //                 "Subcategorieen": prop(dictionary(group({}))),
            //             }))),
            //             "Hoofdcategorieen": prop(dictionary(group({
            //                 "Zijde": prop(taggedUnion({
            //                     "Kosten": option(group({})),
            //                     "Opbrengsten": option(group({})),
            //                 })),
            //                 "Subcategorieen": prop(dictionary(group({
            //                     "Hoofdcategorie fiscus": prop(reference(typeSelection("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Hoofdcategorieen fiscus")]), tbd())),
            //                     "Subcategorie fiscus": prop(reference(typeSelection("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Hoofdcategorieen fiscus"), dict(), grp("Subcategorieen")]), tbd())),
            //                 }))),
            //             }))),
            //             "Correctietypes vennootschapsbelasting": prop(dictionary(group({}))),
            //             "Grootboekrekeningen": prop(dictionary(group({
            //                 "Hoofdcategorie": prop(reference(typeSelection("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Hoofdcategorieen")]), tbd())),
            //                 "Subcategorie": prop(reference(typeSelection("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Hoofdcategorieen"), dict(), grp("Subcategorieen")]), tbd())),
            //                 "Zijde": prop(taggedUnion({
            //                     "Opbrengsten": option(group({})),
            //                     "Kosten": option(group({
            //                         "Correctie op vennootschapsbelasting": prop(taggedUnion({
            //                             "Nee": option(group({})),
            //                             "Ja": option(group({
            //                                 "Correctietype": prop(reference(typeSelection("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Correctietypes vennootschapsbelasting")]), tbd())),
            //                             })),
            //                         })),
            //                     })),
            //                 })),
            //             }))),
            //         })),
            //         "BTW-categorieen": prop(dictionary(group({
            //             "BTW-heffing": prop(taggedUnion({
            //                 "Nee": option(group({})),
            //                 "Ja": option(group({
            //                     "BTW-promillage": prop(terminal("promillage")),
            //                 })),
            //             })),
            //         }))),
            //     })),
            //     "Klanten": prop(dictionary(group({
            //         "Projecten": prop(dictionary(group({
            //             "Offertes": prop(dictionary(group({
            //                 "Opbrengsten": prop(dictionary(group({
            //                     "Type": prop(taggedUnion({
            //                         "Project": option(group({
            //                             "Betaaldatum": prop(terminal("datum")),
            //                             "Bedrag": prop(terminal("bedrag")),
            //                         })),
            //                     })),
            //                 }))),
            //             }))),
            //         }))),
            //         "Licentieovereenkomsten": prop(dictionary(group({
            //             "Periodes": prop(dictionary(group({
            //                 "Bedrag": prop(terminal("bedrag")),
            //             }))),
            //         }))),
            //     }))),
            //     "Medewerkers": prop(dictionary(group({}))),
            //     "Leveranciers": prop(dictionary(group({}))),
            //     "Bankrekeningen": prop(dictionary(group({}))),
            //     "Informele rekeningen": prop(dictionary(group({}))),
            //     "Jaren": prop(
            //         // "Beheer",
            //         // "Klanten",
            //         // "Medewerkers",
            //         // "Leveranciers",
            //         // "Bankrekeningen",
            //         // "Informele rekeningen",
            //         component("Jaren", {})),
            // })),
            // "Informele Rekeningen": globalType({}, constrainedDictionary(typeSelection("Accounting", [grp("Informele rekeningen")]), tbd(), group({
            //     "Grootboekrekening": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),
            //     "Beginsaldo": prop(terminal("bedrag")),

            //     "Nieuw": prop(taggedUnion({
            //         "Nee": option(group({
            //             "Jaar": prop(reference(typeSelection("Jaren", []), tbd())),
            //             "Rekening": prop(reference(typeSelection("Informele Rekeningen", []), tbd())),
            //         })),
            //         "Ja": option(group({})),
            //     })),
            // }))),
            // "Jaren": globalType({}, dictionary(group({
            //     "Startdatum boekjaar": prop(terminal("datum")),
            //     "Eerste boekjaar": prop(taggedUnion({
            //         "Nee": option(group({
            //             "Vorig boekjaar": prop(reference(typeSelection("Jaren", []), tbd())),
            //         })),
            //         "Ja": option(group({})),
            //     })),
            //     "Beginsaldo Winstreserve": prop(terminal("bedrag")),
            //     "Afgesloten": prop(taggedUnion({
            //         "Nee": option(group({
            //         })),
            //         "Ja": option(group({})),
            //     })),
            //     "Balans grootboekrekeningen": prop(constrainedDictionary(typeSelection("Accounting", [grp("Beheer"), grp("Balans"), grp("Grootboekrekeningen")]), tbd(), group({
            //         "Type": prop(taggedUnion({
            //             "Bankrekening": option(group({})),
            //             "Informele rekening": option(group({})),
            //             "Overig": option(group({})),
            //         })),
            //     }))),
            //     "Resultaat grootboekrekeningen": prop(constrainedDictionary(typeSelection("Accounting", [grp("Beheer"), grp("Resultaat"), grp("Grootboekrekeningen")]), tbd(), group({
            //     }))),
            //     "Grootboekrekening voor resultaat dit jaar": prop(reference(typeSelection("Jaren", [dict(), grp("Resultaat grootboekrekeningen")]), tbd())),
            //     "Grootboekrekening voor winstreserve": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),
            //     "Grootboekrekening voor BTW afrondingen": prop(reference(typeSelection("Jaren", [dict(), grp("Resultaat grootboekrekeningen")]), tbd())),
            //     "Beginsaldo nog aan te geven BTW": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),
            //     "Grootboekrekening voor nog aan te geven BTW": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),
            //     "Grootboek inkoop saldo": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),
            //     "Grootboek verkoop saldo": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),
            //     "Grootboek BTW periode": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),


            //     "Informele rekeningen": prop(component("Informele Rekeningen", {})),
            //     "Overige balans items": prop(dictionary(group({
            //         "Beginsaldo": prop(terminal("bedrag")),
            //         "Grootboekrekening": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),

            //         "Nieuw": prop(taggedUnion({
            //             "Nee": option(group({
            //                 "Jaar": prop(reference(typeSelection("Jaren", []), tbd())),
            //                 "Balans item": prop(reference(typeSelection("Jaren", [dict(), grp("Overige balans items")]), tbd())),
            //             })),
            //             "Ja": option(group({})),
            //         })),

            //         "Memoriaal boekingen": prop(dictionary(group({
            //             "Bedrag": prop(terminal("bedrag")),
            //             "Datum": prop(terminal("datum")),
            //             "Grootboekrekening": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),
            //             "Omschrijving": prop(terminal("multiline text")),
            //         }))),
            //     }))),
            //     "BTW periodes": prop(dictionary(group({
            //         "Omschrijving": prop(terminal("multiline text")),
            //         "Status": prop(taggedUnion({
            //             "Aangegeven": option(group({
            //                 "Bedrag": prop(terminal("bedrag")),
            //                 "Afronding": prop(terminal("bedrag")),
            //                 "Datum": prop(terminal("datum")),
            //             })),
            //             "Openstaand": option(group({})),
            //         })),

            //         "1. BTW-categorieen": prop(constrainedDictionary(typeSelection("Accounting", [grp("Beheer"), grp("BTW-categorieen")]), tbd(), group({
            //         }))),
            //         "Documenten": prop(dictionary(group({
            //             "Bestand": prop(terminal("bestand")),
            //         }))),
            //     }))),
            //     "Salarisrondes": prop(dictionary(group({
            //     }))),
            //     "Inkopen": prop(dictionary(group({
            //         "Datum": prop(terminal("datum")),
            //         "Brondocument": prop(taggedUnion({
            //             "Toegevoegd": option(group({
            //                 "Document": prop(terminal("bestand")),
            //             })),
            //             "Nog toevoegen": option(group({})),
            //             "Niet van toepassing": option(group({})),
            //             "Ontbreekt": option(group({})),
            //         })),
            //         "Type": prop(taggedUnion({
            //             "Bonnetje": option(group({
            //             })),
            //             "Inkoop (met crediteur)": option(group({
            //                 "Factuurnummer": prop(terminal("identifier")),
            //                 "Crediteur": prop(reference(typeSelection("Accounting", [grp("Leveranciers")]), tbd())),
            //             })),
            //             "Salaris": option(group({
            //                 "Ronde": prop(reference(typeSelection("Jaren", [dict(), grp("Salarisrondes")]), tbd())),
            //                 "Medewerker": prop(reference(typeSelection("Accounting", [grp("Medewerkers")]), tbd())),
            //             })),
            //             "Loonheffing": option(group({
            //                 "Ronde": prop(reference(typeSelection("Jaren", [dict(), grp("Salarisrondes")]), tbd())),
            //             })),
            //             "WBSO": option(group({
            //                 "Ronde": prop(reference(typeSelection("Jaren", [dict(), grp("Salarisrondes")]), tbd())),
            //             })),
            //         })),
            //         "BTW-regime": prop(taggedUnion({
            //             "Standaard": option(group({
            //                 "BTW-periode": prop(reference(typeSelection("Jaren", [dict(), grp("BTW periodes")]), tbd())),
            //             })),
            //             "Geen BTW van toepassing": option(group({
            //                 "BTW-periode": prop(reference(typeSelection("Jaren", [dict(), grp("BTW periodes")]), tbd())),
            //             })),
            //             "Binnenland heffing verlegd": option(group({
            //                 "BTW-periode": prop(reference(typeSelection("Jaren", [dict(), grp("BTW periodes")]), tbd())),
            //             })),
            //             "Intracommunautair": option(group({
            //                 "BTW-periode": prop(reference(typeSelection("Jaren", [dict(), grp("BTW periodes")]), tbd())),
            //             })),
            //             "Import van buiten de EU": option(group({
            //                 "BTW-periode": prop(reference(typeSelection("Jaren", [dict(), grp("BTW periodes")]), tbd())),
            //             })),
            //         })),
            //         "Afhandeling": prop(taggedUnion({
            //             "Mutaties": option(group({
            //             })),
            //             "Rekening courant": option(group({
            //                 "Rekening courant": prop(reference(typeSelection("Informele Rekeningen", []), tbd())),
            //             })),
            //             "Nog te betalen": option(group({
            //                 "Betalingstermijn": prop(terminal("dagen")),
            //             })),
            //         })),
            //         "Regels": prop(dictionary(group({
            //             "Omschrijving": prop(terminal("multiline text")),
            //             "Bedrag": prop(taggedUnion({
            //                 "Bekend": option(group({
            //                     "Bedrag inclusief BTW": prop(terminal("bedrag")),
            //                     "BTW": prop(terminal("bedrag")),
            //                 })),
            //                 "Nog niet bekend": option(group({
            //                     "Aantekeningen": prop(terminal("multiline text")),
            //                 })),
            //             })),
            //             "Type": prop(taggedUnion({
            //                 "Kosten": option(group({
            //                     "Grootboekrekening": prop(reference(typeSelection("Jaren", [dict(), grp("Resultaat grootboekrekeningen")]), tbd())),
            //                 })),
            //                 "Balans": option(group({
            //                     "Balans item": prop(reference(typeSelection("Jaren", [dict(), grp("Overige balans items")]), tbd())),
            //                 })),
            //             })),
            //         }))),
            //     }))),
            //     "Verkopen": prop(dictionary(group({
            //         "Brondocument": prop(taggedUnion({
            //             "Nog toevoegen": option(group({
            //             })),
            //             "Toegevoegd": option(group({
            //                 "Document": prop(terminal("bestand")),
            //             })),
            //         })),
            //         "Betalingstermijn": prop(terminal("dagen")),
            //         "Debiteur": prop(reference(typeSelection("Accounting", [grp("Klanten")]), tbd())),
            //         "BTW-periode": prop(reference(typeSelection("Jaren", [dict(), grp("BTW periodes")]), tbd())),

            //         "Contracttype": prop(taggedUnion({
            //             "Licentieovereenkomst": option(group({
            //                 "Overeenkomst": prop(reference(typeSelection("Accounting", [grp("Klanten"), dict(), grp("Licentieovereenkomsten")]), tbd())),
            //             })),
            //             "Project": option(group({
            //                 "Project": prop(reference(typeSelection("Accounting", [grp("Klanten"), dict(), grp("Projecten")]), tbd())),
            //                 "Offerte": prop(reference(typeSelection("Accounting", [grp("Klanten"), dict(), grp("Projecten"), dict(), grp("Offertes")]), tbd())),
            //             })),
            //         })),

            //         "Afhandeling": prop(taggedUnion({
            //             "Mutaties": option(group({
            //             })),
            //             "Rekening courant": option(group({
            //                 "Rekening courant": prop(reference(typeSelection("Informele Rekeningen", []), tbd())),
            //             })),
            //         })),
            //         "Regels": prop(dictionary(group({
            //             "Omschrijving": prop(terminal("multiline text")),
            //             "Bedrag exclusief BTW": prop(terminal("bedrag")),
            //             "Type": prop(taggedUnion({
            //                 "Opbrengsten": option(group({
            //                     "Grootboekrekening": prop(reference(typeSelection("Jaren", [dict(), grp("Resultaat grootboekrekeningen")]), tbd())),
            //                 })),
            //                 "Balans": option(group({
            //                     "Balans item": prop(reference(typeSelection("Jaren", [dict(), grp("Overige balans items")]), tbd())),
            //                 })),
            //             })),
            //             "BTW-regime": prop(taggedUnion({
            //                 "Standaard": option(group({
            //                     "BTW-cateogrie": prop(reference(typeSelection("Jaren", [dict(), grp("BTW periodes"), dict(), grp("1. BTW-categorieen")]), tbd())),
            //                 })),
            //                 "Binnenland heffing verlegd": option(group({
            //                 })),
            //                 "Intracommunautair": option(group({
            //                 })),
            //                 "Export buiten de EU": option(group({
            //                 })),
            //                 "Installatie of afstandsverkopen binnen de EU": option(group({
            //                 })),
            //             })),
            //             "Contracttype": prop(taggedUnion({
            //                 "Los": option(group({
            //                 })),
            //                 "Licentieovereenkomst": option(group({
            //                     "Periode": prop(reference(typeSelection("Accounting", [grp("Klanten"), dict(), grp("Licentieovereenkomsten"), dict(), grp("Periodes")]), tbd())),
            //                 })),
            //                 "Project": option(group({
            //                     "Opbrengst": prop(reference(typeSelection("Accounting", [grp("Klanten"), dict(), grp("Projecten"), dict(), grp("Offertes"), dict(), grp("Opbrengsten")]), tbd())),
            //                 })),
            //             })),
            //         }))),
            //     }))),
            //     "Verrekenposten": prop(dictionary(group({
            //         "Mutaties": prop(dictionary(group({
            //             "Bedrag": prop(terminal("bedrag")),
            //             "Afhandeling": prop(component("Afhandeling", {})),
            //         }))),
            //     }))),
            //     "Bankrekeningen": prop(dictionary(group({
            //         "Beginsaldo": prop(terminal("bedrag")),
            //         "Nieuw": prop(taggedUnion({
            //             "Nee": option(group({
            //                 "Jaar": prop(reference(typeSelection("Jaren", []), tbd())),
            //                 "Rekening": prop(reference(typeSelection("Jaren", [dict(), grp("Bankrekeningen")]), tbd())),
            //             })),
            //             "Ja": option(group({})),
            //         })),
            //         "Grootboekrekening": prop(reference(typeSelection("Jaren", [dict(), grp("Balans grootboekrekeningen")]), tbd())),
            //         "Mutaties": prop(dictionary(group({
            //             "Omschrijving": prop(terminal("multiline text")),
            //             "Bedrag": prop(terminal("bedrag")),
            //             "Datum": prop(terminal("datum")),
            //             "Status": prop(taggedUnion({
            //                 "Nog te verwerken": option(group({})),
            //                 "Verwerkt": option(group({
            //                     "Afhandeling": prop(component("Afhandeling", {})),
            //                 })),
            //             })),
            //         }))),
            //     }))),
            // }))),
            // //"Afhandeling": globalType(["Informele Rekeningen", "Jaren", "Verrekenposten"), taggedUnion({
            // "Afhandeling": globalType({}, taggedUnion({
            //     "Inkoop": option(group({
            //         "Jaar": prop(reference(typeSelection("Jaren", []), tbd())),
            //         "Inkoop": prop(reference(typeSelection("Jaren", [dict(), grp("Inkopen")]), tbd())),
            //     })),
            //     "Verkoop": option(group({
            //         "Jaar": prop(reference(typeSelection("Jaren", []), tbd())),
            //         "Inkoop": prop(reference(typeSelection("Jaren", [dict(), grp("Verkopen")]), tbd())),
            //     })),
            //     "BTW-periode": option(group({
            //         "Jaar": prop(reference(typeSelection("Jaren", []), tbd())),
            //         "BTW-periode": prop(reference(typeSelection("Jaren", [dict(), grp("BTW periodes")]), tbd())),
            //     })),
            //     "Verrekenpost": option(group({
            //         "Verrekenpost": prop(reference(typeSelection("Jaren", [dict(), grp("Verrekenposten")]), tbd())),
            //     })),
            //     "Informele rekening": option(group({
            //         "Informele rekening": prop(reference(typeSelection("Informele Rekeningen", []), tbd())),
            //     })),
            // })),
        }),
    },
    'root': r("Accounting"),
}