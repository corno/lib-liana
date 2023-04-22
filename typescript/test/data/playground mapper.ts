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