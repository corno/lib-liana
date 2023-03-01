import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({
                "createSerializer": {
                    'definition': {
                        'context': {
                            'glossary': "XXXXXX",
                            'arguments': d({}),
                        },
                        'function': "Serialize",
                    },
                    'type': ['constructor', {
                        'configuration data': [false],
                        'dependencies': d({
                            "arrayForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "ArrayForEach",
                            },
                            "dictionaryForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "DictionaryForEach",
                            },
                            "enrichedArrayForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "EnrichedArrayForEach",
                            },
                            "enrichedDictionaryForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "EnrichedDictionaryForEach",
                            },
                        }),
                    }],
                },
            }),
        },
        'glossary': {
            'imports': d({
                "common": "glo-pareto-common",
                "fp": "lib-fountain-pen",
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Accounting": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "Bankrekeningen": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Beheer": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Balans": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Grootboekrekeningen": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Hoofdcategorie": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "annotation": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                        },
                                                        "key": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                        },
                                                    })],
                                                },
                                                "Subcategorie": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "annotation": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                        },
                                                        "key": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                        },
                                                    })],
                                                },
                                                "Zijde": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Activa": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                        "Passiva": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Subcategorieen": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "annotation": {
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                                },
                                                                "key": {
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                                },
                                                            })],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "annotation": {
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                                },
                                                                "key": {
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                                },
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Zijde": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Activa": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                        "Passiva": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Subcategorieen": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Activa": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                        "Passiva": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                    })],
                                },
                                "BTW-categorieen": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "BTW-heffing": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "BTW-promillage": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                    },
                                                })],
                                                "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                            })],
                                        },
                                    })]],
                                },
                                "Gebruikers": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Volledige naam": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })]],
                                },
                                "Resultaat": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Correctietypes vennootschapsbelasting": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                        },
                                        "Grootboekrekeningen": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Hoofdcategorie": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "annotation": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                        },
                                                        "key": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                        },
                                                    })],
                                                },
                                                "Subcategorie": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "annotation": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                        },
                                                        "key": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                        },
                                                    })],
                                                },
                                                "Zijde": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Kosten": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "Correctie op vennootschapsbelasting": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                                    "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                        "Correctietype": {
                                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                                "annotation": {
                                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                                                },
                                                                                "key": {
                                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                                                },
                                                                            })],
                                                                        },
                                                                    })],
                                                                    "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                                })],
                                                            },
                                                        })],
                                                        "Opbrengsten": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Subcategorieen": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "annotation": {
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                                },
                                                                "key": {
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                                },
                                                            })],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "annotation": {
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                                },
                                                                "key": {
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                                },
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Zijde": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Kosten": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                        "Opbrengsten": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Subcategorieen": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Kosten": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                        "Opbrengsten": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                    })],
                                },
                            })],
                        },
                        "Informele rekeningen": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Jaren": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Jaren",
                                'arguments': d({}),
                            }],
                        },
                        "Klanten": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Licentieovereenkomsten": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Periodes": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Bedrag": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                },
                                            })]],
                                        },
                                    })]],
                                },
                                "Projecten": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Offertes": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Opbrengsten": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "Type": {
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                                "Project": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                    "Bedrag": {
                                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                                    },
                                                                    "Betaaldatum": {
                                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                                    },
                                                                })],
                                                            })],
                                                        },
                                                    })]],
                                                },
                                            })]],
                                        },
                                    })]],
                                },
                            })]],
                        },
                        "Leveranciers": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Medewerkers": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                    })]
                },
                "Afhandeling": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "BTW-periode": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "BTW-periode": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                            "Jaar": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "Informele rekening": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "Informele rekening": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "Inkoop": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "Inkoop": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                            "Jaar": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "Verkoop": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "Inkoop": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                            "Jaar": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "Verrekenpost": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "Verrekenpost": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                    })]
                },
                "Informele Rekeningen": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "Beginsaldo": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                        },
                        "Grootboekrekening": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                },
                                "key": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Nieuw": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "Jaar": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "annotation": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                            },
                                            "key": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    },
                                    "Rekening": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "annotation": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                            },
                                            "key": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    },
                                })],
                            })],
                        },
                    })]]
                },
                "Jaren": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "Afgesloten": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                            })],
                        },
                        "Balans grootboekrekeningen": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Type": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Bankrekening": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Informele rekening": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Overig": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Bankrekeningen": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Beginsaldo": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "annotation": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                        },
                                        "key": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })],
                                },
                                "Mutaties": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bedrag": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "Datum": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "Omschrijving": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                        "Status": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Nog te verwerken": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Verwerkt": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Afhandeling": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                                            'type': "Afhandeling",
                                                            'arguments': d({}),
                                                        }],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                                "Nieuw": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Jaar": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Rekening": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                            })]],
                        },
                        "Beginsaldo nog aan te geven BTW": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                        },
                        "Beginsaldo Winstreserve": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                        },
                        "BTW periodes": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "1. BTW-categorieen": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                },
                                "Documenten": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bestand": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })]],
                                },
                                "Omschrijving": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                                "Status": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Aangegeven": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Afronding": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                            },
                                            "Bedrag": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                            },
                                            "Datum": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                            },
                                        })],
                                        "Openstaand": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Eerste boekjaar": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "Vorig boekjaar": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "annotation": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                            },
                                            "key": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    },
                                })],
                            })],
                        },
                        "Grootboek BTW periode": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                },
                                "key": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboek inkoop saldo": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                },
                                "key": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboek verkoop saldo": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                },
                                "key": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboekrekening voor BTW afrondingen": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                },
                                "key": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboekrekening voor nog aan te geven BTW": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                },
                                "key": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboekrekening voor resultaat dit jaar": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                },
                                "key": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboekrekening voor winstreserve": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "annotation": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                },
                                "key": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Informele rekeningen": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Informele Rekeningen",
                                'arguments': d({}),
                            }],
                        },
                        "Inkopen": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Afhandeling": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Mutaties": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Nog te betalen": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Betalingstermijn": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                            },
                                        })],
                                        "Rekening courant": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Rekening courant": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                                "Brondocument": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Niet van toepassing": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Nog toevoegen": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Ontbreekt": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Toegevoegd": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Document": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-regime": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Binnenland heffing verlegd": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Geen BTW van toepassing": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Import van buiten de EU": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Intracommunautair": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Standaard": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                                "Datum": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                },
                                "Regels": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bedrag": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Bekend": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Bedrag inclusief BTW": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                    },
                                                    "BTW": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                    },
                                                })],
                                                "Nog niet bekend": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Aantekeningen": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                        "Type": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Balans": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Balans item": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "annotation": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                            },
                                                            "key": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                                "Kosten": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Grootboekrekening": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "annotation": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                            },
                                                            "key": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                                "Type": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Bonnetje": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Inkoop (met crediteur)": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Crediteur": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Factuurnummer": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                        "Loonheffing": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Ronde": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Salaris": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Medewerker": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Ronde": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "WBSO": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Ronde": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                            })]],
                        },
                        "Overige balans items": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Beginsaldo": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "annotation": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                        },
                                        "key": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })],
                                },
                                "Memoriaal boekingen": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bedrag": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "Datum": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "Grootboekrekening": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "annotation": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                },
                                                "key": {
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                },
                                            })],
                                        },
                                        "Omschrijving": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })]],
                                },
                                "Nieuw": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Balans item": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Jaar": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                            })]],
                        },
                        "Resultaat grootboekrekeningen": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Salarisrondes": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Startdatum boekjaar": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                        },
                        "Verkopen": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Afhandeling": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Mutaties": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Rekening courant": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Rekening courant": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                                "Betalingstermijn": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                },
                                "Brondocument": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Nog toevoegen": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Toegevoegd": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Document": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-periode": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "annotation": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                        },
                                        "key": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })],
                                },
                                "Contracttype": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Licentieovereenkomst": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Overeenkomst": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Project": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Offerte": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Project": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "annotation": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                    },
                                                    "key": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                                "Debiteur": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "annotation": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                        },
                                        "key": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })],
                                },
                                "Regels": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bedrag exclusief BTW": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "BTW-regime": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Binnenland heffing verlegd": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Export buiten de EU": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Installatie of afstandsverkopen binnen de EU": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Intracommunautair": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Standaard": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "BTW-cateogrie": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "annotation": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                            },
                                                            "key": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Contracttype": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Licentieovereenkomst": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Periode": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "annotation": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                            },
                                                            "key": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                                "Los": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Project": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Opbrengst": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "annotation": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                            },
                                                            "key": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                        "Type": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Balans": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Balans item": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "annotation": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                            },
                                                            "key": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                                "Opbrengsten": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Grootboekrekening": {
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "annotation": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                                            },
                                                            "key": {
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                            })],
                                        },
                                    })]],
                                },
                            })]],
                        },
                        "Verrekenposten": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Mutaties": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Afhandeling": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                                'type': "Afhandeling",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "Bedrag": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                    })]],
                                },
                            })]],
                        },
                    })]]
                },
            }),
            'interfaces': d({
                "Visitor": ['group', {
                    'members': d({
                        "Accounting": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "Afhandeling": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "Informele Rekeningen": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "Jaren": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                    }),
                }],
            }),
            'functions': d({
                "Serialize": {
                    'data': {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                        'type': "Accounting",
                        'arguments': d({}),
                    },
                    'managed input interface': [false],
                    'output interface': [true, {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['import', {
                            'glossary': "fp",
                            'arguments': d({}),
                        }],
                        'interface': "Line",
                    }],
                    'return type': ['nothing', {}],
                },
            }),
        },
    },
    'implementation': ['typescript', {}],
}