import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "common": "glo-pareto-common",
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Accounting": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "Bankrekeningen": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Beheer": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Balans": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Grootboekrekeningen": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "key": {
                                                            'optional': false,
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                        },
                                                    })],
                                                },
                                                "Subcategorie": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "key": {
                                                            'optional': false,
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                        },
                                                    })],
                                                },
                                                "Zijde": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Activa": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                        "Passiva": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Subcategorieen": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': false,
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "key": {
                                                                    'optional': false,
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                                },
                                                            })],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'optional': false,
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "key": {
                                                                    'optional': false,
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                                },
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Zijde": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Activa": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                        "Passiva": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Subcategorieen": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': false,
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
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "BTW-heffing": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "BTW-promillage": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                    },
                                                })],
                                                "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                            })],
                                        },
                                    })]],
                                },
                                "Gebruikers": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Volledige naam": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })]],
                                },
                                "Resultaat": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Correctietypes vennootschapsbelasting": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                        },
                                        "Grootboekrekeningen": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Hoofdcategorie": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "key": {
                                                            'optional': false,
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                        },
                                                    })],
                                                },
                                                "Subcategorie": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "key": {
                                                            'optional': false,
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                        },
                                                    })],
                                                },
                                                "Zijde": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Kosten": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "Correctie op vennootschapsbelasting": {
                                                                'optional': false,
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                                    "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                        "Correctietype": {
                                                                            'optional': false,
                                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                                "key": {
                                                                                    'optional': false,
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
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Subcategorieen": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "Hoofdcategorie fiscus": {
                                                            'optional': false,
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "key": {
                                                                    'optional': false,
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                                },
                                                            })],
                                                        },
                                                        "Subcategorie fiscus": {
                                                            'optional': false,
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                "key": {
                                                                    'optional': false,
                                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                                },
                                                            })],
                                                        },
                                                    })]],
                                                },
                                                "Zijde": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                        "Kosten": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                        "Opbrengsten": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                    })],
                                                },
                                            })]],
                                        },
                                        "Hoofdcategorieen fiscus": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Subcategorieen": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                                },
                                                "Zijde": {
                                                    'optional': false,
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
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Jaren": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Jaren",
                                'arguments': d({}),
                            }],
                        },
                        "Klanten": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Licentieovereenkomsten": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Periodes": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Bedrag": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                },
                                            })]],
                                        },
                                    })]],
                                },
                                "Projecten": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Offertes": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "Opbrengsten": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                        "Type": {
                                                            'optional': false,
                                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                                "Project": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                                    "Bedrag": {
                                                                        'optional': false,
                                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                                    },
                                                                    "Betaaldatum": {
                                                                        'optional': false,
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
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Medewerkers": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                    })]
                },
                "Afhandeling": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "BTW-periode": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "BTW-periode": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                            "Jaar": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "Informele rekening": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "Informele rekening": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "Inkoop": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "Inkoop": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                            "Jaar": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "Verkoop": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "Inkoop": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                            "Jaar": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "Verrekenpost": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "Verrekenpost": {
                                'optional': false,
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'optional': false,
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
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                        },
                        "Grootboekrekening": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "key": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Nieuw": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "Jaar": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "key": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    },
                                    "Rekening": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "key": {
                                                'optional': false,
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
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                            })],
                        },
                        "Balans grootboekrekeningen": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Type": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Bankrekening": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Informele rekening": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Overig": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Bankrekeningen": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Beginsaldo": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "key": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })],
                                },
                                "Mutaties": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bedrag": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "Omschrijving": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                        "Status": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Nog te verwerken": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Verwerkt": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Afhandeling": {
                                                        'optional': false,
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
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Jaar": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Rekening": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
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
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                        },
                        "Beginsaldo Winstreserve": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                        },
                        "BTW periodes": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "1. BTW-categorieen": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                },
                                "Documenten": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bestand": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })]],
                                },
                                "Omschrijving": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                                "Status": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Aangegeven": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Afronding": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                            },
                                            "Bedrag": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                            },
                                            "Datum": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                            },
                                        })],
                                        "Openstaand": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "Eerste boekjaar": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "Vorig boekjaar": {
                                        'optional': false,
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "key": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    },
                                })],
                            })],
                        },
                        "Grootboek BTW periode": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "key": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboek inkoop saldo": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "key": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboek verkoop saldo": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "key": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboekrekening voor BTW afrondingen": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "key": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboekrekening voor nog aan te geven BTW": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "key": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboekrekening voor resultaat dit jaar": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "key": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Grootboekrekening voor winstreserve": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "key": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "Informele rekeningen": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Informele Rekeningen",
                                'arguments': d({}),
                            }],
                        },
                        "Inkopen": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Afhandeling": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Mutaties": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Nog te betalen": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Betalingstermijn": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                            },
                                        })],
                                        "Rekening courant": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Rekening courant": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                                "Brondocument": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Niet van toepassing": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Nog toevoegen": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Ontbreekt": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Toegevoegd": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Document": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-regime": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Binnenland heffing verlegd": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Geen BTW van toepassing": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Import van buiten de EU": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Intracommunautair": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Standaard": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "BTW-periode": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                                "Datum": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                },
                                "Regels": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bedrag": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Bekend": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Bedrag inclusief BTW": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                    },
                                                    "BTW": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                                    },
                                                })],
                                                "Nog niet bekend": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Aantekeningen": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                        "Type": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Balans": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Balans item": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "key": {
                                                                'optional': false,
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                                "Kosten": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Grootboekrekening": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "key": {
                                                                'optional': false,
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
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Bonnetje": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Inkoop (met crediteur)": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Crediteur": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Factuurnummer": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                        "Loonheffing": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Ronde": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Salaris": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Medewerker": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Ronde": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "WBSO": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Ronde": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
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
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Beginsaldo": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                },
                                "Grootboekrekening": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "key": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })],
                                },
                                "Memoriaal boekingen": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bedrag": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "Datum": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "Grootboekrekening": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                "key": {
                                                    'optional': false,
                                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                },
                                            })],
                                        },
                                        "Omschrijving": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })]],
                                },
                                "Nieuw": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Ja": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Nee": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Balans item": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Jaar": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
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
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Salarisrondes": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "Startdatum boekjaar": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                        },
                        "Verkopen": {
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Afhandeling": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Mutaties": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Rekening courant": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Rekening courant": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                                "Betalingstermijn": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                },
                                "Brondocument": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Nog toevoegen": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "Toegevoegd": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Document": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    })],
                                },
                                "BTW-periode": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "key": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })],
                                },
                                "Contracttype": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "Licentieovereenkomst": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Overeenkomst": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                        "Project": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "Offerte": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                            "Project": {
                                                'optional': false,
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "key": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                                "Debiteur": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "key": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                    })],
                                },
                                "Regels": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Bedrag exclusief BTW": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['number', {}],
                                        },
                                        "BTW-regime": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Binnenland heffing verlegd": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Export buiten de EU": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Installatie of afstandsverkopen binnen de EU": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Intracommunautair": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Standaard": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "BTW-cateogrie": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "key": {
                                                                'optional': false,
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Contracttype": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Licentieovereenkomst": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Periode": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "key": {
                                                                'optional': false,
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                                "Los": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                                "Project": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Opbrengst": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "key": {
                                                                'optional': false,
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                            })],
                                        },
                                        "Omschrijving": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                        },
                                        "Type": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                                "Balans": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Balans item": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "key": {
                                                                'optional': false,
                                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                                            },
                                                        })],
                                                    },
                                                })],
                                                "Opbrengsten": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                    "Grootboekrekening": {
                                                        'optional': false,
                                                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                                            "key": {
                                                                'optional': false,
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
                            'optional': false,
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "Mutaties": {
                                    'optional': false,
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "Afhandeling": {
                                            'optional': false,
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                                'type': "Afhandeling",
                                                'arguments': d({}),
                                            }],
                                        },
                                        "Bedrag": {
                                            'optional': false,
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
                            'data': ['not set', {}],
                            'interface': ['not set', {}],
                        }],
                        "Afhandeling": ['method', {
                            'data': ['not set', {}],
                            'interface': ['not set', {}],
                        }],
                        "Informele Rekeningen": ['method', {
                            'data': ['not set', {}],
                            'interface': ['not set', {}],
                        }],
                        "Jaren": ['method', {
                            'data': ['not set', {}],
                            'interface': ['not set', {}],
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
                    'managed input interface': ['not set', {}],
                    'output interface': ['set', {
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
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({
                "createSerializer": {
                    'definition': {
                        'context': ['local', {}],
                        'function': "Serialize",
                    },
                    'type': ['constructor', {
                        'configuration data': [false],
                        'dependencies': d({
                            "arrayForEach": {
                                'context': ['import', {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                }],
                                'function': "ArrayForEach",
                            },
                            "dictionaryForEach": {
                                'context': ['import', {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                }],
                                'function': "DictionaryForEach",
                            },
                            "enrichedArrayForEach": {
                                'context': ['import', {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                }],
                                'function': "EnrichedArrayForEach",
                            },
                            "enrichedDictionaryForEach": {
                                'context': ['import', {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                }],
                                'function': "EnrichedDictionaryForEach",
                            },
                        }),
                    }],
                },
            }),
        },
    },
    'implementation': {
        'implementations': d({}),
    },
}