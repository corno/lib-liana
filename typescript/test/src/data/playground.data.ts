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
    taggedUnion, terminal, tu, typeSelection, pExternalResolvedValue, externalTypeSelection, resolvedValueReference, dictConstraint, optionConstraint, valSel, result, optionalResult, externalGlobalTypeSelection, globalTypeResult, sgrp, tuResult,
} from "../../.../../../pub/dist/submodules/liana/shorthands"
const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
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
                            "subcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorie fiscus", sgrp("subcategorieen")), typeSelection("Stamdata", [grp("balans"), grp("hoofdcategorieen fiscus"), dict(), grp("subcategorieen")]))),
                        }))),
                    }))),
                    "grootboekrekeningen": prop(dictionary(group({
                        "hoofdcategorie": prop(resolvedValueReference(valSel("hoofdcategorieen"), typeSelection("Stamdata", [grp("balans"), grp("hoofdcategorieen")]))),
                        "subcategorie": prop(resolvedValueReference(valSel("hoofdcategorie", sgrp("subcategorieen")), typeSelection("Stamdata", [grp("balans"), grp("hoofdcategorieen"), dict(), grp("subcategorieen")]))),
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
                            "subcategorie fiscus": prop(resolvedValueReference(valSel("hoofdcategorie fiscus", sgrp("subcategorieen")), typeSelection("Stamdata", [grp("resultaat"), grp("hoofdcategorieen fiscus"), dict(), grp("subcategorieen")]))),
                        }))),
                    }))),
                    "correctietypes vennootschapsbelasting": prop(dictionary(group({}))),
                    "grootboekrekeningen": prop(dictionary(group({
                        "hoofdcategorie": prop(resolvedValueReference(valSel("hoofdcategorieen"), typeSelection("Stamdata", [grp("resultaat"), grp("hoofdcategorieen")]))),
                        "subcategorie": prop(resolvedValueReference(valSel("hoofdcategorie", sgrp("subcategorieen")), typeSelection("Stamdata", [grp("resultaat"), grp("hoofdcategorieen"), dict(), grp("subcategorieen")]))),
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
        }),
    }