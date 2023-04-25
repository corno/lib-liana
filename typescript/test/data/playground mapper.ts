import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_in from ".."
import * as g_out from ".."

function map_Stamdata($: g_in.T.Stamdata): g_out.T.Element {
    return ({
        'gebruikers': pl.cc($, ($) => $.map(($) => ({
            'volledige naam': pl.cc($, ($) => $),
        }))),
        'balans': pl.cc($, ($) => ({
            'hoofdcategorieen fiscus': pl.cc($, ($) => $.map(($) => ({
                'zijde': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'activa': return ['activa', ({})]
                        case 'passiva': return ['passiva', ({})]
                        default: return pl.au($[1])
                    }
                })),
                'subcategorieen': pl.cc($, ($) => $.map(($) => ({}))),
            }))),
            'hoofdcategorieen': pl.cc($, ($) => $.map(($) => ({
                'zijde': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'activa': return ['activa', ({})]
                        case 'passiva': return ['passiva', ({})]
                        default: return pl.au($[1])
                    }
                })),
                'subcategorieen': pl.cc($, ($) => $.map(($) => ({
                    'hoofdcategorie fiscus': pl.cc($, ($) => $),
                    'subcategorie fiscus': pl.cc($, ($) => $),
                }))),
            }))),
            'grootboekrekeningen': pl.cc($, ($) => $.map(($) => ({
                'hoofdcategorie': pl.cc($, ($) => $),
                'subcategorie': pl.cc($, ($) => $),
                'zijde': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'activa': return ['activa', ({})]
                        case 'passiva': return ['passiva', ({})]
                        default: return pl.au($[1])
                    }
                })),
            }))),
        })),
        'resultaat': pl.cc($, ($) => ({
            'hoofdcategorieen fiscus': pl.cc($, ($) => $.map(($) => ({
                'zijde': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'kosten': return ['kosten', ({})]
                        case 'opbrengsten': return ['opbrengsten', ({})]
                        default: return pl.au($[1])
                    }
                })),
                'subcategorieen': pl.cc($, ($) => $.map(($) => ({}))),
            }))),
            'hoofdcategorieen': pl.cc($, ($) => $.map(($) => ({
                'zijde': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'kosten': return ['kosten', ({})]
                        case 'opbrengsten': return ['opbrengsten', ({})]
                        default: return pl.au($[1])
                    }
                })),
                'subcategorieen': pl.cc($, ($) => $.map(($) => ({
                    'hoofdcategorie fiscus': pl.cc($, ($) => $),
                    'subcategorie fiscus': pl.cc($, ($) => $),
                }))),
            }))),
            'correctietypes vennootschapsbelasting': pl.cc($, ($) => $.map(($) => ({}))),
            'grootboekrekeningen': pl.cc($, ($) => $.map(($) => ({
                'hoofdcategorie': pl.cc($, ($) => $),
                'subcategorie': pl.cc($, ($) => $),
                'zijde': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'opbrengsten': return ['opbrengsten', ({})]
                        case 'kosten': return ['kosten', ({
                            'correctie op vennootschapsbelasting': pl.cc($, ($) => pl.cc($, ($) => {
                                switch ($[0]) {
                                    case 'nee': return ['nee', ({})]
                                    case 'ja': return ['ja', ({
                                        'correctietype': pl.cc($, ($) => $),
                                    })]
                                    default: return pl.au($[1])
                                }
                            })),
                        })]
                        default: return pl.au($[1])
                    }
                })),
            }))),
        })),
        'BTW-categorieen': pl.cc($, ($) => $.map(($) => ({
            'BTW-heffing': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'nee': return ['nee', ({})]
                    case 'ja': return ['ja', ({
                        'BTW-promillage': pl.cc($, ($) => $),
                    })]
                    default: return pl.au($[1])
                }
            })),
        }))),
        'klanten': pl.cc($, ($) => $.map(($) => ({
            'projecten': pl.cc($, ($) => $.map(($) => ({
                'offertes': pl.cc($, ($) => $.map(($) => ({
                    'opbrengsten': pl.cc($, ($) => $.map(($) => ({
                        'type': pl.cc($, ($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'project': return ['project', ({
                                    'betaaldatum': pl.cc($, ($) => $),
                                    'bedrag': pl.cc($, ($) => $),
                                })]
                                default: return pl.au($[1])
                            }
                        })),
                    }))),
                }))),
            }))),
            'licentieovereenkomsten': pl.cc($, ($) => $.map(($) => ({
                'periodes': pl.cc($, ($) => $.map(($) => ({
                    'bedrag': pl.cc($, ($) => $),
                }))),
            }))),
        }))),
        'medewerkers': pl.cc($, ($) => $.map(($) => ({}))),
        'leveranciers': pl.cc($, ($) => $.map(($) => ({}))),
        'bankrekeningen': pl.cc($, ($) => $.map(($) => ({}))),
        'informele rekeningen': pl.cc($, ($) => $.map(($) => ({}))),
    })
}
function map_Overloop($: g_in.T.Overloop): g_out.T.Element {
    return ({
        'jaren': pl.cc($, ($) => $.map(($) => ({
            'inkopen': pl.cc($, ($) => $.map(($) => ({
                'openstaand': pl.cc($, ($) => $),
            }))),
            'verkopen': pl.cc($, ($) => $.map(($) => ({
                'openstaand': pl.cc($, ($) => $),
            }))),
            'BTW periodes': pl.cc($, ($) => $.map(($) => ({
                'openstaand': pl.cc($, ($) => $),
            }))),
        }))),
        'informele rekeningen': pl.cc($, ($) => $.map(($) => ({
            'eindsaldo': pl.cc($, ($) => $),
        }))),
        'overige balans items': pl.cc($, ($) => $.map(($) => ({
            'eindsaldo': pl.cc($, ($) => $),
        }))),
        'bankrekeningen': pl.cc($, ($) => $.map(($) => ({
            'eindsaldo': pl.cc($, ($) => $),
        }))),
    })
}
function map_Jaarstamdata($: g_in.T.Jaarstamdata): g_out.T.Element {
    return ({
        'balans grootboekrekeningen': pl.cc($, ($) => $.map(($) => ({
            'type': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'bankrekening': return ['bankrekening', ({})]
                    case 'informele rekening': return ['informele rekening', ({})]
                    case 'overig': return ['overig', ({})]
                    default: return pl.au($[1])
                }
            })),
        }))),
        'resultaat grootboekrekeningen': pl.cc($, ($) => $.map(($) => ({}))),
        'informele rekeningen': pl.cc($, ($) => $.map(($) => ({
            'grootboekrekening': pl.cc($, ($) => $),
            'beginsaldo': pl.cc($, ($) => $),
            'nieuw': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'nee': return ['nee', ({
                        'rekening': pl.cc($, ($) => $),
                    })]
                    case 'ja': return ['ja', ({})]
                    default: return pl.au($[1])
                }
            })),
        }))),
        'overige balans items': pl.cc($, ($) => $.map(($) => ({
            'beginsaldo': pl.cc($, ($) => $),
            'grootboekrekening': pl.cc($, ($) => $),
            'nieuw': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'nee': return ['nee', ({
                        'balans item': pl.cc($, ($) => $),
                    })]
                    case 'ja': return ['ja', ({})]
                    default: return pl.au($[1])
                }
            })),
        }))),
        'startdatum boekjaar': pl.cc($, ($) => $),
        'beginsaldo Winstreserve': pl.cc($, ($) => $),
        'afgesloten': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'nee': return ['nee', ({})]
                case 'ja': return ['ja', ({})]
                default: return pl.au($[1])
            }
        })),
        'grootboeken': pl.cc($, ($) => ({
            'resultaat dit jaar': pl.cc($, ($) => $),
            'winstreserve': pl.cc($, ($) => $),
            'BTW afrondingen': pl.cc($, ($) => $),
            'beginsaldo nog aan te geven BTW': pl.cc($, ($) => $),
            'nog aan te geven BTW': pl.cc($, ($) => $),
            'inkoop saldo': pl.cc($, ($) => $),
            'verkoop saldo': pl.cc($, ($) => $),
            'BTW periode': pl.cc($, ($) => $),
        })),
        'bankrekeningen': pl.cc($, ($) => $.map(($) => ({
            'beginsaldo': pl.cc($, ($) => $),
            'nieuw': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'nee': return ['nee', ({
                        'rekening': pl.cc($, ($) => $),
                    })]
                    case 'ja': return ['ja', ({})]
                    default: return pl.au($[1])
                }
            })),
            'grootboekrekening': pl.cc($, ($) => $),
        }))),
    })
}
function map_Boekingen($: g_in.T.Boekingen): g_out.T.Element {
    return ({
        'salarisrondes': pl.cc($, ($) => $.map(($) => ({}))),
        'BTW periodes': pl.cc($, ($) => $.map(($) => ({
            'omschrijving': pl.cc($, ($) => $),
            'status': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'aangegeven': return ['aangegeven', ({
                        'bedrag': pl.cc($, ($) => $),
                        'afronding': pl.cc($, ($) => $),
                        'datum': pl.cc($, ($) => $),
                    })]
                    case 'openstaand': return ['openstaand', ({})]
                    default: return pl.au($[1])
                }
            })),
            '1. BTW-categorieen': pl.cc($, ($) => $.map(($) => ({}))),
            'documenten': pl.cc($, ($) => $.map(($) => ({
                'bestand': pl.cc($, ($) => $),
            }))),
        }))),
        'overige balans items': pl.cc($, ($) => $.map(($) => ({
            'memoriaal boekingen': pl.cc($, ($) => $.map(($) => ({
                'bedrag': pl.cc($, ($) => $),
                'datum': pl.cc($, ($) => $),
                'grootboekrekening': pl.cc($, ($) => $),
                'omschrijving': pl.cc($, ($) => $),
            }))),
        }))),
        'inkopen': pl.cc($, ($) => $.map(($) => ({
            'datum': pl.cc($, ($) => $),
            'brondocument': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'toegevoegd': return ['toegevoegd', $]
                    case 'nog toevoegen': return ['nog toevoegen', ({})]
                    case 'niet van toepassing': return ['niet van toepassing', ({})]
                    case 'ontbreekt': return ['ontbreekt', ({})]
                    default: return pl.au($[1])
                }
            })),
            'type': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'bonnetje': return ['bonnetje', ({})]
                    case 'inkoop': return ['inkoop', ({
                        'crediteur': pl.cc($, ($) => $),
                        'factuurnummer': pl.cc($, ($) => $),
                    })]
                    case 'salaris': return ['salaris', ({
                        'ronde': pl.cc($, ($) => $),
                        'type': pl.cc($, ($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'salaris': return ['salaris', ({
                                    'medewerker': pl.cc($, ($) => $),
                                })]
                                case 'loonheffing': return ['loonheffing', ({})]
                                case 'wBSO': return ['wBSO', ({})]
                                default: return pl.au($[1])
                            }
                        })),
                    })]
                    default: return pl.au($[1])
                }
            })),
            'BTW-regime': pl.cc($, ($) => ({
                'BTW-periode': pl.cc($, ($) => $),
                'type': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'standaard': return ['standaard', ({})]
                        case 'geen BTW van toepassing': return ['geen BTW van toepassing', ({})]
                        case 'binnenland heffing verlegd': return ['binnenland heffing verlegd', ({})]
                        case 'intracommunautair': return ['intracommunautair', ({})]
                        case 'import van buiten de EU': return ['import van buiten de EU', ({})]
                        default: return pl.au($[1])
                    }
                })),
            })),
            'afhandeling': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'mutaties': return ['mutaties', ({})]
                    case 'rekening courant': return ['rekening courant', $]
                    case 'nog te betalen': return ['nog te betalen', ({
                        'betalingstermijn': pl.cc($, ($) => $),
                    })]
                    default: return pl.au($[1])
                }
            })),
            'regels': pl.cc($, ($) => $.map(($) => ({
                'omschrijving': pl.cc($, ($) => $),
                'bedrag': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'bekend': return ['bekend', ({
                            'bedrag inclusief BTW': pl.cc($, ($) => $),
                            'BTW': pl.cc($, ($) => $),
                        })]
                        case 'nog niet bekend': return ['nog niet bekend', ({
                            'aantekeningen': pl.cc($, ($) => $),
                        })]
                        default: return pl.au($[1])
                    }
                })),
                'type': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'kosten': return ['kosten', ({
                            'grootboekrekening': pl.cc($, ($) => $),
                        })]
                        case 'balans': return ['balans', ({
                            'balans item': pl.cc($, ($) => $),
                        })]
                        default: return pl.au($[1])
                    }
                })),
            }))),
        }))),
        'verkopen': pl.cc($, ($) => $.map(($) => ({
            'brondocument': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'nog toevoegen': return ['nog toevoegen', ({})]
                    case 'toegevoegd': return ['toegevoegd', ({
                        'document': pl.cc($, ($) => $),
                    })]
                    default: return pl.au($[1])
                }
            })),
            'betalingstermijn': pl.cc($, ($) => $),
            'debiteur': pl.cc($, ($) => $),
            'BTW-periode': pl.cc($, ($) => $),
            'contracttype': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'licentieovereenkomst': return ['licentieovereenkomst', ({
                        'overeenkomst': pl.cc($, ($) => $),
                    })]
                    case 'project': return ['project', ({
                        'project': pl.cc($, ($) => $),
                        'offerte': pl.cc($, ($) => $),
                    })]
                    default: return pl.au($[1])
                }
            })),
            'afhandeling': pl.cc($, ($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'mutaties': return ['mutaties', ({})]
                    case 'rekening courant': return ['rekening courant', ({
                        'rekening courant': pl.cc($, ($) => $),
                    })]
                    default: return pl.au($[1])
                }
            })),
            'regels': pl.cc($, ($) => $.map(($) => ({
                'omschrijving': pl.cc($, ($) => $),
                'bedrag exclusief BTW': pl.cc($, ($) => $),
                'type': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'opbrengsten': return ['opbrengsten', ({
                            'grootboekrekening': pl.cc($, ($) => $),
                        })]
                        case 'balans': return ['balans', ({
                            'balans item': pl.cc($, ($) => $),
                        })]
                        default: return pl.au($[1])
                    }
                })),
                'BTW-regime': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'standaard': return ['standaard', ({
                            'BTW-cateogrie': pl.cc($, ($) => $),
                        })]
                        case 'binnenland heffing verlegd': return ['binnenland heffing verlegd', ({})]
                        case 'intracommunautair': return ['intracommunautair', ({})]
                        case 'export buiten de EU': return ['export buiten de EU', ({})]
                        case 'installatie of afstandsverkopen binnen de EU': return ['installatie of afstandsverkopen binnen de EU', ({})]
                        default: return pl.au($[1])
                    }
                })),
                'contracttype2': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'los': return ['los', ({})]
                        case 'licentieovereenkomst': return ['licentieovereenkomst', ({
                            'periode': pl.cc($, ($) => $),
                        })]
                        case 'project': return ['project', ({
                            'opbrengst': pl.cc($, ($) => $),
                        })]
                        default: return pl.au($[1])
                    }
                })),
            }))),
        }))),
    })
}
function map_Afhandeling($: g_in.T.Afhandeling): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'overloop': return ['overloop', ({
                'jaar': pl.cc($, ($) => $),
                'type': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'inkoop': return ['inkoop', $]
                        case 'verkoop': return ['verkoop', $]
                        case 'BTW-periode': return ['BTW-periode', $]
                        default: return pl.au($[1])
                    }
                })),
            })]
            case 'inkoop': return ['inkoop', $]
            case 'verkoop': return ['verkoop', $]
            case 'BTW-periode': return ['BTW-periode', $]
            case 'informele rekening': return ['informele rekening', $]
            default: return pl.au($[1])
        }
    })
}
function map_Jaar($: g_in.T.Jaar): g_out.T.Element {
    return ({
        'stamdata': pl.cc($, ($) => map_Stamdata($)),
        'overloop': pl.cc($, ($) => map_Overloop($)),
        'jaarstamdata': pl.cc($, ($) => map_Jaarstamdata($)),
        'boekingen': pl.cc($, ($) => map_Boekingen($)),
        'afhandeling': pl.cc($, ($) => ({
            'verrekenposten': pl.cc($, ($) => $.map(($) => ({
                'mutaties': pl.cc($, ($) => $.map(($) => ({
                    'bedrag': pl.cc($, ($) => $),
                    'afhandeling': pl.cc($, ($) => map_Afhandeling($)),
                }))),
            }))),
            'bankrekeningen': pl.cc($, ($) => $.map(($) => ({
                'mutaties': pl.cc($, ($) => $.map(($) => ({
                    'omschrijving': pl.cc($, ($) => $),
                    'bedrag': pl.cc($, ($) => $),
                    'datum': pl.cc($, ($) => $),
                    'status': pl.cc($, ($) => pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'nog te verwerken': return ['nog te verwerken', ({})]
                            case 'verwerkt': return ['verwerkt', ({
                                'afhandeling': pl.cc($, ($) => pl.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'alg': return ['alg', map_Afhandeling($)]
                                        case 'verrekenpost': return ['verrekenpost', $]
                                        default: return pl.au($[1])
                                    }
                                })),
                            })]
                            default: return pl.au($[1])
                        }
                    })),
                }))),
            }))),
        })),
    })
}