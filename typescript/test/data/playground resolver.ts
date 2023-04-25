import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from ".."
import * as g_out from ".."

function map_Afhandeling<Annotation>(
    $: g_in.T.Afhandeling<Annotation>,
    $v_boekingen: pt.OptionalValue<g_out.T.Boekingen<Annotation>>,
    $v_jaarstamdata: pt.OptionalValue<g_out.T.Jaarstamdata<Annotation>>,
    $v_overloop: pt.OptionalValue<g_out.T.Overloop<Annotation>>,
): g_out.T.Afhandeling<Annotation> {
    return pl.cc($, ($): g_out.T.Afhandeling<Annotation> => {
        switch ($[0]) {
            case 'BTW-periode': return pl.ss($, ($) => ['BTW-periode', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D<Annotation>> = pl.optional/*3*/(
                    $v_boekingen,
                    ($) => pl.cc($['BTW periodes'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    )),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })])
            case 'informele rekening': return pl.ss($, ($) => ['informele rekening', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_jaarstamdata,
                    ($) => pl.cc($['informele rekeningen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    )),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })])
            case 'inkoop': return pl.ss($, ($) => ['inkoop', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Boekingen.inkopen.D<Annotation>> = pl.optional/*3*/(
                    $v_boekingen,
                    ($) => pl.cc($['inkopen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Boekingen.inkopen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    )),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })])
            case 'overloop': return pl.ss($, ($) => ['overloop', pl.cc($, ($) => {
                const $p_jaar: g_out.T.Afhandeling.overloop.jaar<Annotation> = pl.cc($['jaar'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Overloop.jaren.D<Annotation>> = pl.optional/*3*/(
                        $v_overloop,
                        ($) => pl.cc($['jaren'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Overloop.jaren.D<Annotation>>>(
                            key,
                            ($) => [true, $],
                            () => {
                                $se.error("no such entry")
                                return [false]
                            },
                        )),
                        () => [false],
                    )
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const $v_jaar: pt.OptionalValue<g_out.T.Afhandeling.overloop.jaar<Annotation>> = [true, $p_jaar]
                const $p__ltype: g_out.T.Afhandeling.overloop._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Afhandeling.overloop._ltype<Annotation> => {
                    switch ($[0]) {
                        case 'BTW-periode': return pl.ss($, ($) => ['BTW-periode', pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Overloop.jaren.D.BTW__periodes.D<Annotation>> = pl.optional/*3*/(
                                $v_jaar,
                                ($) => pl.optional/*1*/(
                                    $.constraint,
                                    ($) => pl.cc($['BTW periodes'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Overloop.jaren.D.BTW__periodes.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                ),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        })])
                        case 'inkoop': return pl.ss($, ($) => ['inkoop', pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Overloop.jaren.D.inkopen.D<Annotation>> = pl.optional/*3*/(
                                $v_jaar,
                                ($) => pl.optional/*1*/(
                                    $.constraint,
                                    ($) => pl.cc($['inkopen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Overloop.jaren.D.inkopen.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                ),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        })])
                        case 'verkoop': return pl.ss($, ($) => ['verkoop', pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Overloop.jaren.D.verkopen.D<Annotation>> = pl.optional/*3*/(
                                $v_jaar,
                                ($) => pl.optional/*1*/(
                                    $.constraint,
                                    ($) => pl.cc($['verkopen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Overloop.jaren.D.verkopen.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                ),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v__ltype: pt.OptionalValue<g_out.T.Afhandeling.overloop._ltype<Annotation>> = [true, $p__ltype]
                return {
                    'jaar': $p_jaar,
                    'type': $p__ltype,
                }
            })])
            case 'verkoop': return pl.ss($, ($) => ['verkoop', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Boekingen.verkopen.D<Annotation>> = pl.optional/*3*/(
                    $v_boekingen,
                    ($) => pl.cc($['verkopen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Boekingen.verkopen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    )),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })])
            default: return pl.au($[0])
        }
    })
}
function map_Boekingen<Annotation>(
    $: g_in.T.Boekingen<Annotation>,
    $v_jaarstamdata: pt.OptionalValue<g_out.T.Jaarstamdata<Annotation>>,
    $v_overloop: pt.OptionalValue<g_out.T.Overloop<Annotation>>,
    $v_stamdata: pt.OptionalValue<g_out.T.Stamdata<Annotation>>,
): g_out.T.Boekingen<Annotation> {
    return pl.cc($, ($) => {
        const $p_salarisrondes: g_out.T.Boekingen.salarisrondes<Annotation> = pl.cc($['salarisrondes'], ($) => $.map(($) => pl.cc($, ($) => {
            return null
        })))
        const $v_salarisrondes: pt.OptionalValue<g_out.T.Boekingen.salarisrondes<Annotation>> = [true, $p_salarisrondes]
        const $p_BTW__periodes: g_out.T.Boekingen.BTW__periodes<Annotation> = pl.cc($['BTW periodes'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_omschrijving: g_out.T.Boekingen.BTW__periodes.D.omschrijving<Annotation> = pl.cc($['omschrijving'], ($) => $)
            const $v_omschrijving: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D.omschrijving<Annotation>> = [true, $p_omschrijving]
            const $p_status: g_out.T.Boekingen.BTW__periodes.D.status<Annotation> = pl.cc($['status'], ($) => pl.cc($, ($): g_out.T.Boekingen.BTW__periodes.D.status<Annotation> => {
                switch ($[0]) {
                    case 'aangegeven': return pl.ss($, ($) => ['aangegeven', pl.cc($, ($) => {
                        const $p_bedrag: g_out.T.Boekingen.BTW__periodes.D.status.aangegeven.bedrag<Annotation> = pl.cc($['bedrag'], ($) => $)
                        const $v_bedrag: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D.status.aangegeven.bedrag<Annotation>> = [true, $p_bedrag]
                        const $p_afronding: g_out.T.Boekingen.BTW__periodes.D.status.aangegeven.afronding<Annotation> = pl.cc($['afronding'], ($) => $)
                        const $v_afronding: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D.status.aangegeven.afronding<Annotation>> = [true, $p_afronding]
                        const $p_datum: g_out.T.Boekingen.BTW__periodes.D.status.aangegeven.datum<Annotation> = pl.cc($['datum'], ($) => $)
                        const $v_datum: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D.status.aangegeven.datum<Annotation>> = [true, $p_datum]
                        return {
                            'afronding': $p_afronding,
                            'bedrag': $p_bedrag,
                            'datum': $p_datum,
                        }
                    })])
                    case 'openstaand': return pl.ss($, ($) => ['openstaand', pl.cc($, ($) => {
                        return null
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_status: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D.status<Annotation>> = [true, $p_status]
            const $p__1_pe__BTW_micategorieen: g_out.T.Boekingen.BTW__periodes.D._1_pe__BTW_micategorieen<Annotation> = pl.cc($['1. BTW-categorieen'], ($) => $.map(($) => pl.cc($, ($) => {
                return null
            })))
            const $v__1_pe__BTW_micategorieen: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D._1_pe__BTW_micategorieen<Annotation>> = [true, $p__1_pe__BTW_micategorieen]
            const $p_documenten: g_out.T.Boekingen.BTW__periodes.D.documenten<Annotation> = pl.cc($['documenten'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_bestand: g_out.T.Boekingen.BTW__periodes.D.documenten.D.bestand<Annotation> = pl.cc($['bestand'], ($) => $)
                const $v_bestand: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D.documenten.D.bestand<Annotation>> = [true, $p_bestand]
                return {
                    'bestand': $p_bestand,
                }
            })))
            const $v_documenten: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D.documenten<Annotation>> = [true, $p_documenten]
            return {
                '1. BTW-categorieen': $p__1_pe__BTW_micategorieen,
                'documenten': $p_documenten,
                'omschrijving': $p_omschrijving,
                'status': $p_status,
            }
        })))
        const $v_BTW__periodes: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes<Annotation>> = [true, $p_BTW__periodes]
        const $p_overige__balans__items: g_out.T.Boekingen.overige__balans__items<Annotation> = pl.cc($['overige balans items'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_memoriaal__boekingen: g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen<Annotation> = pl.cc($['memoriaal boekingen'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_bedrag: g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen.D.bedrag<Annotation> = pl.cc($['bedrag'], ($) => $)
                const $v_bedrag: pt.OptionalValue<g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen.D.bedrag<Annotation>> = [true, $p_bedrag]
                const $p_datum: g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen.D.datum<Annotation> = pl.cc($['datum'], ($) => $)
                const $v_datum: pt.OptionalValue<g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen.D.datum<Annotation>> = [true, $p_datum]
                const $p_grootboekrekening: g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen.D.grootboekrekening<Annotation> = pl.cc($['grootboekrekening'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                        $v_jaarstamdata,
                        ($) => pl.cc($['balans grootboekrekeningen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                            key,
                            ($) => [true, $],
                            () => {
                                $se.error("no such entry")
                                return [false]
                            },
                        )),
                        () => [false],
                    )
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const $v_grootboekrekening: pt.OptionalValue<g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen.D.grootboekrekening<Annotation>> = [true, $p_grootboekrekening]
                const $p_omschrijving: g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen.D.omschrijving<Annotation> = pl.cc($['omschrijving'], ($) => $)
                const $v_omschrijving: pt.OptionalValue<g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen.D.omschrijving<Annotation>> = [true, $p_omschrijving]
                return {
                    'bedrag': $p_bedrag,
                    'datum': $p_datum,
                    'grootboekrekening': $p_grootboekrekening,
                    'omschrijving': $p_omschrijving,
                }
            })))
            const $v_memoriaal__boekingen: pt.OptionalValue<g_out.T.Boekingen.overige__balans__items.D.memoriaal__boekingen<Annotation>> = [true, $p_memoriaal__boekingen]
            return {
                'memoriaal boekingen': $p_memoriaal__boekingen,
            }
        })))
        const $v_overige__balans__items: pt.OptionalValue<g_out.T.Boekingen.overige__balans__items<Annotation>> = [true, $p_overige__balans__items]
        const $p_inkopen: g_out.T.Boekingen.inkopen<Annotation> = pl.cc($['inkopen'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_datum: g_out.T.Boekingen.inkopen.D.datum<Annotation> = pl.cc($['datum'], ($) => $)
            const $v_datum: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.datum<Annotation>> = [true, $p_datum]
            const $p_brondocument: g_out.T.Boekingen.inkopen.D.brondocument<Annotation> = pl.cc($['brondocument'], ($) => pl.cc($, ($): g_out.T.Boekingen.inkopen.D.brondocument<Annotation> => {
                switch ($[0]) {
                    case 'niet van toepassing': return pl.ss($, ($) => ['niet van toepassing', pl.cc($, ($) => {
                        return null
                    })])
                    case 'nog toevoegen': return pl.ss($, ($) => ['nog toevoegen', pl.cc($, ($) => {
                        return null
                    })])
                    case 'ontbreekt': return pl.ss($, ($) => ['ontbreekt', pl.cc($, ($) => {
                        return null
                    })])
                    case 'toegevoegd': return pl.ss($, ($) => ['toegevoegd', $])
                    default: return pl.au($[0])
                }
            }))
            const $v_brondocument: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.brondocument<Annotation>> = [true, $p_brondocument]
            const $p__ltype: g_out.T.Boekingen.inkopen.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Boekingen.inkopen.D._ltype<Annotation> => {
                switch ($[0]) {
                    case 'bonnetje': return pl.ss($, ($) => ['bonnetje', pl.cc($, ($) => {
                        return null
                    })])
                    case 'inkoop': return pl.ss($, ($) => ['inkoop', pl.cc($, ($) => {
                        const $p_crediteur: g_out.T.Boekingen.inkopen.D._ltype.inkoop.crediteur<Annotation> = pl.cc($['crediteur'], ($) => pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Stamdata.leveranciers.D<Annotation>> = pl.optional/*3*/(
                                $v_stamdata,
                                ($) => pl.cc($['leveranciers'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.leveranciers.D<Annotation>>>(
                                    key,
                                    ($) => [true, $],
                                    () => {
                                        $se.error("no such entry")
                                        return [false]
                                    },
                                )),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_crediteur: pt.OptionalValue<g_out.T.Boekingen.inkopen.D._ltype.inkoop.crediteur<Annotation>> = [true, $p_crediteur]
                        const $p_factuurnummer: g_out.T.Boekingen.inkopen.D._ltype.inkoop.factuurnummer<Annotation> = pl.cc($['factuurnummer'], ($) => $)
                        const $v_factuurnummer: pt.OptionalValue<g_out.T.Boekingen.inkopen.D._ltype.inkoop.factuurnummer<Annotation>> = [true, $p_factuurnummer]
                        return {
                            'crediteur': $p_crediteur,
                            'factuurnummer': $p_factuurnummer,
                        }
                    })])
                    case 'salaris': return pl.ss($, ($) => ['salaris', pl.cc($, ($) => {
                        const $p_ronde: g_out.T.Boekingen.inkopen.D._ltype.salaris.ronde<Annotation> = pl.cc($['ronde'], ($) => pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Boekingen.salarisrondes.D<Annotation>> = pl.optional/*3*/(
                                $v_salarisrondes,
                                ($) => $.__getEntry<pt.OptionalValue<g_out.T.Boekingen.salarisrondes.D<Annotation>>>(
                                    key,
                                    ($) => [true, $],
                                    () => {
                                        $se.error("no such entry")
                                        return [false]
                                    },
                                ),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_ronde: pt.OptionalValue<g_out.T.Boekingen.inkopen.D._ltype.salaris.ronde<Annotation>> = [true, $p_ronde]
                        const $p__ltype: g_out.T.Boekingen.inkopen.D._ltype.salaris._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Boekingen.inkopen.D._ltype.salaris._ltype<Annotation> => {
                            switch ($[0]) {
                                case 'loonheffing': return pl.ss($, ($) => ['loonheffing', pl.cc($, ($) => {
                                    return null
                                })])
                                case 'salaris': return pl.ss($, ($) => ['salaris', pl.cc($, ($) => {
                                    const $p_medewerker: g_out.T.Boekingen.inkopen.D._ltype.salaris._ltype.salaris.medewerker<Annotation> = pl.cc($['medewerker'], ($) => pl.cc($, ($) => {
                                        const key = $.key
                                        const constraint: pt.OptionalValue<g_out.T.Stamdata.medewerkers.D<Annotation>> = pl.optional/*3*/(
                                            $v_stamdata,
                                            ($) => pl.cc($['medewerkers'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.medewerkers.D<Annotation>>>(
                                                key,
                                                ($) => [true, $],
                                                () => {
                                                    $se.error("no such entry")
                                                    return [false]
                                                },
                                            )),
                                            () => [false],
                                        )
                                        return {
                                            'annotation': $.annotation,
                                            'constraint': constraint,
                                            'key': $.key,
                                        }
                                    }))
                                    const $v_medewerker: pt.OptionalValue<g_out.T.Boekingen.inkopen.D._ltype.salaris._ltype.salaris.medewerker<Annotation>> = [true, $p_medewerker]
                                    return {
                                        'medewerker': $p_medewerker,
                                    }
                                })])
                                case 'wBSO': return pl.ss($, ($) => ['wBSO', pl.cc($, ($) => {
                                    return null
                                })])
                                default: return pl.au($[0])
                            }
                        }))
                        const $v__ltype: pt.OptionalValue<g_out.T.Boekingen.inkopen.D._ltype.salaris._ltype<Annotation>> = [true, $p__ltype]
                        return {
                            'ronde': $p_ronde,
                            'type': $p__ltype,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v__ltype: pt.OptionalValue<g_out.T.Boekingen.inkopen.D._ltype<Annotation>> = [true, $p__ltype]
            const $p_BTW_miregime: g_out.T.Boekingen.inkopen.D.BTW_miregime<Annotation> = pl.cc($['BTW-regime'], ($) => pl.cc($, ($) => {
                const $p_BTW_miperiode: g_out.T.Boekingen.inkopen.D.BTW_miregime.BTW_miperiode<Annotation> = pl.cc($['BTW-periode'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D<Annotation>> = pl.optional/*3*/(
                        $v_BTW__periodes,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D<Annotation>>>(
                            key,
                            ($) => [true, $],
                            () => {
                                $se.error("no such entry")
                                return [false]
                            },
                        ),
                        () => [false],
                    )
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const $v_BTW_miperiode: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.BTW_miregime.BTW_miperiode<Annotation>> = [true, $p_BTW_miperiode]
                const $p__ltype: g_out.T.Boekingen.inkopen.D.BTW_miregime._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Boekingen.inkopen.D.BTW_miregime._ltype<Annotation> => {
                    switch ($[0]) {
                        case 'binnenland heffing verlegd': return pl.ss($, ($) => ['binnenland heffing verlegd', pl.cc($, ($) => {
                            return null
                        })])
                        case 'geen BTW van toepassing': return pl.ss($, ($) => ['geen BTW van toepassing', pl.cc($, ($) => {
                            return null
                        })])
                        case 'import van buiten de EU': return pl.ss($, ($) => ['import van buiten de EU', pl.cc($, ($) => {
                            return null
                        })])
                        case 'intracommunautair': return pl.ss($, ($) => ['intracommunautair', pl.cc($, ($) => {
                            return null
                        })])
                        case 'standaard': return pl.ss($, ($) => ['standaard', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v__ltype: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.BTW_miregime._ltype<Annotation>> = [true, $p__ltype]
                return {
                    'BTW-periode': $p_BTW_miperiode,
                    'type': $p__ltype,
                }
            }))
            const $v_BTW_miregime: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.BTW_miregime<Annotation>> = [true, $p_BTW_miregime]
            const $p_afhandeling: g_out.T.Boekingen.inkopen.D.afhandeling<Annotation> = pl.cc($['afhandeling'], ($) => pl.cc($, ($): g_out.T.Boekingen.inkopen.D.afhandeling<Annotation> => {
                switch ($[0]) {
                    case 'mutaties': return pl.ss($, ($) => ['mutaties', pl.cc($, ($) => {
                        return null
                    })])
                    case 'nog te betalen': return pl.ss($, ($) => ['nog te betalen', pl.cc($, ($) => {
                        const $p_betalingstermijn: g_out.T.Boekingen.inkopen.D.afhandeling.nog__te__betalen.betalingstermijn<Annotation> = pl.cc($['betalingstermijn'], ($) => $)
                        const $v_betalingstermijn: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.afhandeling.nog__te__betalen.betalingstermijn<Annotation>> = [true, $p_betalingstermijn]
                        return {
                            'betalingstermijn': $p_betalingstermijn,
                        }
                    })])
                    case 'rekening courant': return pl.ss($, ($) => ['rekening courant', pl.cc($, ($) => {
                        const key = $.key
                        const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D<Annotation>> = pl.optional/*3*/(
                            $v_jaarstamdata,
                            ($) => pl.cc($['informele rekeningen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D<Annotation>>>(
                                key,
                                ($) => [true, $],
                                () => {
                                    $se.error("no such entry")
                                    return [false]
                                },
                            )),
                            () => [false],
                        )
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_afhandeling: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.afhandeling<Annotation>> = [true, $p_afhandeling]
            const $p_regels: g_out.T.Boekingen.inkopen.D.regels<Annotation> = pl.cc($['regels'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_omschrijving: g_out.T.Boekingen.inkopen.D.regels.D.omschrijving<Annotation> = pl.cc($['omschrijving'], ($) => $)
                const $v_omschrijving: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.regels.D.omschrijving<Annotation>> = [true, $p_omschrijving]
                const $p_bedrag: g_out.T.Boekingen.inkopen.D.regels.D.bedrag<Annotation> = pl.cc($['bedrag'], ($) => pl.cc($, ($): g_out.T.Boekingen.inkopen.D.regels.D.bedrag<Annotation> => {
                    switch ($[0]) {
                        case 'bekend': return pl.ss($, ($) => ['bekend', pl.cc($, ($) => {
                            const $p_bedrag__inclusief__BTW: g_out.T.Boekingen.inkopen.D.regels.D.bedrag.bekend.bedrag__inclusief__BTW<Annotation> = pl.cc($['bedrag inclusief BTW'], ($) => $)
                            const $v_bedrag__inclusief__BTW: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.regels.D.bedrag.bekend.bedrag__inclusief__BTW<Annotation>> = [true, $p_bedrag__inclusief__BTW]
                            const $p_BTW: g_out.T.Boekingen.inkopen.D.regels.D.bedrag.bekend.BTW<Annotation> = pl.cc($['BTW'], ($) => $)
                            const $v_BTW: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.regels.D.bedrag.bekend.BTW<Annotation>> = [true, $p_BTW]
                            return {
                                'bedrag inclusief BTW': $p_bedrag__inclusief__BTW,
                                'BTW': $p_BTW,
                            }
                        })])
                        case 'nog niet bekend': return pl.ss($, ($) => ['nog niet bekend', pl.cc($, ($) => {
                            const $p_aantekeningen: g_out.T.Boekingen.inkopen.D.regels.D.bedrag.nog__niet__bekend.aantekeningen<Annotation> = pl.cc($['aantekeningen'], ($) => $)
                            const $v_aantekeningen: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.regels.D.bedrag.nog__niet__bekend.aantekeningen<Annotation>> = [true, $p_aantekeningen]
                            return {
                                'aantekeningen': $p_aantekeningen,
                            }
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_bedrag: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.regels.D.bedrag<Annotation>> = [true, $p_bedrag]
                const $p__ltype: g_out.T.Boekingen.inkopen.D.regels.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Boekingen.inkopen.D.regels.D._ltype<Annotation> => {
                    switch ($[0]) {
                        case 'balans': return pl.ss($, ($) => ['balans', pl.cc($, ($) => {
                            const $p_balans__item: g_out.T.Boekingen.inkopen.D.regels.D._ltype.balans.balans__item<Annotation> = pl.cc($['balans item'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.overige__balans__items.D<Annotation>> = pl.optional/*3*/(
                                    $v_jaarstamdata,
                                    ($) => pl.cc($['overige balans items'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.overige__balans__items.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                )
                                return {
                                    'annotation': $.annotation,
                                    'constraint': constraint,
                                    'key': $.key,
                                }
                            }))
                            const $v_balans__item: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.regels.D._ltype.balans.balans__item<Annotation>> = [true, $p_balans__item]
                            return {
                                'balans item': $p_balans__item,
                            }
                        })])
                        case 'kosten': return pl.ss($, ($) => ['kosten', pl.cc($, ($) => {
                            const $p_grootboekrekening: g_out.T.Boekingen.inkopen.D.regels.D._ltype.kosten.grootboekrekening<Annotation> = pl.cc($['grootboekrekening'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.resultaat__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                                    $v_jaarstamdata,
                                    ($) => pl.cc($['resultaat grootboekrekeningen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.resultaat__grootboekrekeningen.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                )
                                return {
                                    'annotation': $.annotation,
                                    'constraint': constraint,
                                    'key': $.key,
                                }
                            }))
                            const $v_grootboekrekening: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.regels.D._ltype.kosten.grootboekrekening<Annotation>> = [true, $p_grootboekrekening]
                            return {
                                'grootboekrekening': $p_grootboekrekening,
                            }
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v__ltype: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.regels.D._ltype<Annotation>> = [true, $p__ltype]
                return {
                    'bedrag': $p_bedrag,
                    'omschrijving': $p_omschrijving,
                    'type': $p__ltype,
                }
            })))
            const $v_regels: pt.OptionalValue<g_out.T.Boekingen.inkopen.D.regels<Annotation>> = [true, $p_regels]
            return {
                'afhandeling': $p_afhandeling,
                'brondocument': $p_brondocument,
                'BTW-regime': $p_BTW_miregime,
                'datum': $p_datum,
                'regels': $p_regels,
                'type': $p__ltype,
            }
        })))
        const $v_inkopen: pt.OptionalValue<g_out.T.Boekingen.inkopen<Annotation>> = [true, $p_inkopen]
        const $p_verkopen: g_out.T.Boekingen.verkopen<Annotation> = pl.cc($['verkopen'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_brondocument: g_out.T.Boekingen.verkopen.D.brondocument<Annotation> = pl.cc($['brondocument'], ($) => pl.cc($, ($): g_out.T.Boekingen.verkopen.D.brondocument<Annotation> => {
                switch ($[0]) {
                    case 'nog toevoegen': return pl.ss($, ($) => ['nog toevoegen', pl.cc($, ($) => {
                        return null
                    })])
                    case 'toegevoegd': return pl.ss($, ($) => ['toegevoegd', pl.cc($, ($) => {
                        const $p_document: g_out.T.Boekingen.verkopen.D.brondocument.toegevoegd.document<Annotation> = pl.cc($['document'], ($) => $)
                        const $v_document: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.brondocument.toegevoegd.document<Annotation>> = [true, $p_document]
                        return {
                            'document': $p_document,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_brondocument: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.brondocument<Annotation>> = [true, $p_brondocument]
            const $p_betalingstermijn: g_out.T.Boekingen.verkopen.D.betalingstermijn<Annotation> = pl.cc($['betalingstermijn'], ($) => $)
            const $v_betalingstermijn: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.betalingstermijn<Annotation>> = [true, $p_betalingstermijn]
            const $p_debiteur: g_out.T.Boekingen.verkopen.D.debiteur<Annotation> = pl.cc($['debiteur'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Stamdata.klanten.D<Annotation>> = pl.optional/*3*/(
                    $v_stamdata,
                    ($) => pl.cc($['klanten'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.klanten.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    )),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_debiteur: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.debiteur<Annotation>> = [true, $p_debiteur]
            const $p_BTW_miperiode: g_out.T.Boekingen.verkopen.D.BTW_miperiode<Annotation> = pl.cc($['BTW-periode'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D<Annotation>> = pl.optional/*3*/(
                    $v_BTW__periodes,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_BTW_miperiode: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.BTW_miperiode<Annotation>> = [true, $p_BTW_miperiode]
            const $p_contracttype: g_out.T.Boekingen.verkopen.D.contracttype<Annotation> = pl.cc($['contracttype'], ($) => pl.cc($, ($): g_out.T.Boekingen.verkopen.D.contracttype<Annotation> => {
                switch ($[0]) {
                    case 'licentieovereenkomst': return pl.ss($, ($) => ['licentieovereenkomst', pl.cc($, ($) => {
                        const $p_overeenkomst: g_out.T.Boekingen.verkopen.D.contracttype.licentieovereenkomst.overeenkomst<Annotation> = pl.cc($['overeenkomst'], ($) => pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Stamdata.klanten.D.licentieovereenkomsten.D<Annotation>> = pl.optional/*3*/(
                                $v_debiteur,
                                ($) => pl.optional/*1*/(
                                    $.constraint,
                                    ($) => pl.cc($['licentieovereenkomsten'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.klanten.D.licentieovereenkomsten.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                ),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_overeenkomst: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.contracttype.licentieovereenkomst.overeenkomst<Annotation>> = [true, $p_overeenkomst]
                        return {
                            'overeenkomst': $p_overeenkomst,
                        }
                    })])
                    case 'project': return pl.ss($, ($) => ['project', pl.cc($, ($) => {
                        const $p_project: g_out.T.Boekingen.verkopen.D.contracttype.project.project<Annotation> = pl.cc($['project'], ($) => pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D<Annotation>> = pl.optional/*3*/(
                                $v_debiteur,
                                ($) => pl.optional/*1*/(
                                    $.constraint,
                                    ($) => pl.cc($['projecten'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                ),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_project: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.contracttype.project.project<Annotation>> = [true, $p_project]
                        const $p_offerte: g_out.T.Boekingen.verkopen.D.contracttype.project.offerte<Annotation> = pl.cc($['offerte'], ($) => pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D.offertes.D<Annotation>> = pl.optional/*3*/(
                                $v_project,
                                ($) => pl.optional/*1*/(
                                    $.constraint,
                                    ($) => pl.cc($['offertes'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D.offertes.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                ),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_offerte: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.contracttype.project.offerte<Annotation>> = [true, $p_offerte]
                        return {
                            'offerte': $p_offerte,
                            'project': $p_project,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_contracttype: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.contracttype<Annotation>> = [true, $p_contracttype]
            const $p_afhandeling: g_out.T.Boekingen.verkopen.D.afhandeling<Annotation> = pl.cc($['afhandeling'], ($) => pl.cc($, ($): g_out.T.Boekingen.verkopen.D.afhandeling<Annotation> => {
                switch ($[0]) {
                    case 'mutaties': return pl.ss($, ($) => ['mutaties', pl.cc($, ($) => {
                        return null
                    })])
                    case 'rekening courant': return pl.ss($, ($) => ['rekening courant', pl.cc($, ($) => {
                        const $p_rekening__courant: g_out.T.Boekingen.verkopen.D.afhandeling.rekening__courant.rekening__courant<Annotation> = pl.cc($['rekening courant'], ($) => pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D<Annotation>> = pl.optional/*3*/(
                                $v_jaarstamdata,
                                ($) => pl.cc($['informele rekeningen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D<Annotation>>>(
                                    key,
                                    ($) => [true, $],
                                    () => {
                                        $se.error("no such entry")
                                        return [false]
                                    },
                                )),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_rekening__courant: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.afhandeling.rekening__courant.rekening__courant<Annotation>> = [true, $p_rekening__courant]
                        return {
                            'rekening courant': $p_rekening__courant,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_afhandeling: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.afhandeling<Annotation>> = [true, $p_afhandeling]
            const $p_regels: g_out.T.Boekingen.verkopen.D.regels<Annotation> = pl.cc($['regels'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_omschrijving: g_out.T.Boekingen.verkopen.D.regels.D.omschrijving<Annotation> = pl.cc($['omschrijving'], ($) => $)
                const $v_omschrijving: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D.omschrijving<Annotation>> = [true, $p_omschrijving]
                const $p_bedrag__exclusief__BTW: g_out.T.Boekingen.verkopen.D.regels.D.bedrag__exclusief__BTW<Annotation> = pl.cc($['bedrag exclusief BTW'], ($) => $)
                const $v_bedrag__exclusief__BTW: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D.bedrag__exclusief__BTW<Annotation>> = [true, $p_bedrag__exclusief__BTW]
                const $p__ltype: g_out.T.Boekingen.verkopen.D.regels.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Boekingen.verkopen.D.regels.D._ltype<Annotation> => {
                    switch ($[0]) {
                        case 'balans': return pl.ss($, ($) => ['balans', pl.cc($, ($) => {
                            const $p_balans__item: g_out.T.Boekingen.verkopen.D.regels.D._ltype.balans.balans__item<Annotation> = pl.cc($['balans item'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.overige__balans__items.D<Annotation>> = pl.optional/*3*/(
                                    $v_jaarstamdata,
                                    ($) => pl.cc($['overige balans items'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.overige__balans__items.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                )
                                return {
                                    'annotation': $.annotation,
                                    'constraint': constraint,
                                    'key': $.key,
                                }
                            }))
                            const $v_balans__item: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D._ltype.balans.balans__item<Annotation>> = [true, $p_balans__item]
                            return {
                                'balans item': $p_balans__item,
                            }
                        })])
                        case 'opbrengsten': return pl.ss($, ($) => ['opbrengsten', pl.cc($, ($) => {
                            const $p_grootboekrekening: g_out.T.Boekingen.verkopen.D.regels.D._ltype.opbrengsten.grootboekrekening<Annotation> = pl.cc($['grootboekrekening'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.resultaat__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                                    $v_jaarstamdata,
                                    ($) => pl.cc($['resultaat grootboekrekeningen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.resultaat__grootboekrekeningen.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                )
                                return {
                                    'annotation': $.annotation,
                                    'constraint': constraint,
                                    'key': $.key,
                                }
                            }))
                            const $v_grootboekrekening: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D._ltype.opbrengsten.grootboekrekening<Annotation>> = [true, $p_grootboekrekening]
                            return {
                                'grootboekrekening': $p_grootboekrekening,
                            }
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v__ltype: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D._ltype<Annotation>> = [true, $p__ltype]
                const $p_BTW_miregime: g_out.T.Boekingen.verkopen.D.regels.D.BTW_miregime<Annotation> = pl.cc($['BTW-regime'], ($) => pl.cc($, ($): g_out.T.Boekingen.verkopen.D.regels.D.BTW_miregime<Annotation> => {
                    switch ($[0]) {
                        case 'binnenland heffing verlegd': return pl.ss($, ($) => ['binnenland heffing verlegd', pl.cc($, ($) => {
                            return null
                        })])
                        case 'export buiten de EU': return pl.ss($, ($) => ['export buiten de EU', pl.cc($, ($) => {
                            return null
                        })])
                        case 'installatie of afstandsverkopen binnen de EU': return pl.ss($, ($) => ['installatie of afstandsverkopen binnen de EU', pl.cc($, ($) => {
                            return null
                        })])
                        case 'intracommunautair': return pl.ss($, ($) => ['intracommunautair', pl.cc($, ($) => {
                            return null
                        })])
                        case 'standaard': return pl.ss($, ($) => ['standaard', pl.cc($, ($) => {
                            const $p_BTW_micateogrie: g_out.T.Boekingen.verkopen.D.regels.D.BTW_miregime.standaard.BTW_micateogrie<Annotation> = pl.cc($['BTW-cateogrie'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D._1_pe__BTW_micategorieen.D<Annotation>> = pl.optional/*3*/(
                                    $v_BTW_miperiode,
                                    ($) => pl.optional/*1*/(
                                        $.constraint,
                                        ($) => pl.cc($['1. BTW-categorieen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Boekingen.BTW__periodes.D._1_pe__BTW_micategorieen.D<Annotation>>>(
                                            key,
                                            ($) => [true, $],
                                            () => {
                                                $se.error("no such entry")
                                                return [false]
                                            },
                                        )),
                                        () => [false],
                                    ),
                                    () => [false],
                                )
                                return {
                                    'annotation': $.annotation,
                                    'constraint': constraint,
                                    'key': $.key,
                                }
                            }))
                            const $v_BTW_micateogrie: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D.BTW_miregime.standaard.BTW_micateogrie<Annotation>> = [true, $p_BTW_micateogrie]
                            return {
                                'BTW-cateogrie': $p_BTW_micateogrie,
                            }
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_BTW_miregime: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D.BTW_miregime<Annotation>> = [true, $p_BTW_miregime]
                const $p_contracttype2: g_out.T.Boekingen.verkopen.D.regels.D.contracttype2<Annotation> = pl.cc($['contracttype2'], ($) => pl.cc($, ($): g_out.T.Boekingen.verkopen.D.regels.D.contracttype2<Annotation> => {
                    switch ($[0]) {
                        case 'licentieovereenkomst': return pl.ss($, ($) => ['licentieovereenkomst', pl.cc($, ($) => {
                            const $v_parent: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.contracttype.licentieovereenkomst<Annotation>> = pl.cc($, ($) => {
                                const x: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.contracttype<Annotation>> = pl.optional/*3*/(
                                    $v_contracttype,
                                    ($) => [true, $],
                                    () => [false],
                                )
                                return pl.optional(
                                    x,
                                    ($) => {
                                        if ($[0] === 'licentieovereenkomst') {
                                            return [true, $[1]]
                                        } else {
                                            $se.error("option constraint")
                                            return [false]
                                        }
                                    },
                                    () => [false],
                                )
                            })
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'parent': $v_parent,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    const $p_periode: g_out.T.Boekingen.verkopen.D.regels.D.contracttype2.licentieovereenkomst.content.periode<Annotation> = pl.cc($['periode'], ($) => pl.cc($, ($) => {
                                        const key = $.key
                                        const constraint: pt.OptionalValue<g_out.T.Stamdata.klanten.D.licentieovereenkomsten.D.periodes.D<Annotation>> = pl.optional/*3*/(
                                            $v_parent,
                                            ($) => pl.cc($['overeenkomst'], ($) => pl.optional/*1*/(
                                                $.constraint,
                                                ($) => pl.cc($['periodes'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.klanten.D.licentieovereenkomsten.D.periodes.D<Annotation>>>(
                                                    key,
                                                    ($) => [true, $],
                                                    () => {
                                                        $se.error("no such entry")
                                                        return [false]
                                                    },
                                                )),
                                                () => [false],
                                            )),
                                            () => [false],
                                        )
                                        return {
                                            'annotation': $.annotation,
                                            'constraint': constraint,
                                            'key': $.key,
                                        }
                                    }))
                                    const $v_periode: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D.contracttype2.licentieovereenkomst.content.periode<Annotation>> = [true, $p_periode]
                                    return {
                                        'periode': $p_periode,
                                    }
                                })),
                            }
                        })])
                        case 'los': return pl.ss($, ($) => ['los', pl.cc($, ($) => {
                            return null
                        })])
                        case 'project': return pl.ss($, ($) => ['project', pl.cc($, ($) => {
                            const $v_parent: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.contracttype.project<Annotation>> = pl.cc($, ($) => {
                                const x: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.contracttype<Annotation>> = pl.optional/*3*/(
                                    $v_contracttype,
                                    ($) => [true, $],
                                    () => [false],
                                )
                                return pl.optional(
                                    x,
                                    ($) => {
                                        if ($[0] === 'project') {
                                            return [true, $[1]]
                                        } else {
                                            $se.error("option constraint")
                                            return [false]
                                        }
                                    },
                                    () => [false],
                                )
                            })
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'parent': $v_parent,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    const $p_opbrengst: g_out.T.Boekingen.verkopen.D.regels.D.contracttype2.project.content.opbrengst<Annotation> = pl.cc($['opbrengst'], ($) => pl.cc($, ($) => {
                                        const key = $.key
                                        const constraint: pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten.D<Annotation>> = pl.optional/*3*/(
                                            $v_parent,
                                            ($) => pl.cc($['offerte'], ($) => pl.optional/*1*/(
                                                $.constraint,
                                                ($) => pl.cc($['opbrengsten'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten.D<Annotation>>>(
                                                    key,
                                                    ($) => [true, $],
                                                    () => {
                                                        $se.error("no such entry")
                                                        return [false]
                                                    },
                                                )),
                                                () => [false],
                                            )),
                                            () => [false],
                                        )
                                        return {
                                            'annotation': $.annotation,
                                            'constraint': constraint,
                                            'key': $.key,
                                        }
                                    }))
                                    const $v_opbrengst: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D.contracttype2.project.content.opbrengst<Annotation>> = [true, $p_opbrengst]
                                    return {
                                        'opbrengst': $p_opbrengst,
                                    }
                                })),
                            }
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_contracttype2: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels.D.contracttype2<Annotation>> = [true, $p_contracttype2]
                return {
                    'bedrag exclusief BTW': $p_bedrag__exclusief__BTW,
                    'BTW-regime': $p_BTW_miregime,
                    'contracttype2': $p_contracttype2,
                    'omschrijving': $p_omschrijving,
                    'type': $p__ltype,
                }
            })))
            const $v_regels: pt.OptionalValue<g_out.T.Boekingen.verkopen.D.regels<Annotation>> = [true, $p_regels]
            return {
                'afhandeling': $p_afhandeling,
                'betalingstermijn': $p_betalingstermijn,
                'brondocument': $p_brondocument,
                'BTW-periode': $p_BTW_miperiode,
                'contracttype': $p_contracttype,
                'debiteur': $p_debiteur,
                'regels': $p_regels,
            }
        })))
        const $v_verkopen: pt.OptionalValue<g_out.T.Boekingen.verkopen<Annotation>> = [true, $p_verkopen]
        return {
            'BTW periodes': $p_BTW__periodes,
            'inkopen': $p_inkopen,
            'overige balans items': $p_overige__balans__items,
            'salarisrondes': $p_salarisrondes,
            'verkopen': $p_verkopen,
        }
    })
}
function map_Jaar<Annotation>(
    $: g_in.T.Jaar<Annotation>,
): g_out.T.Jaar<Annotation> {
    return pl.cc($, ($) => {
        const $p_stamdata: g_out.T.Jaar.stamdata<Annotation> = pl.cc($['stamdata'], ($) => map_Stamdata<Annotation>(
            $,
        ))
        const $v_stamdata: pt.OptionalValue<g_out.T.Jaar.stamdata<Annotation>> = [true, $p_stamdata]
        const $p_overloop: g_out.T.Jaar.overloop<Annotation> = pl.cc($['overloop'], ($) => map_Overloop<Annotation>(
            $,
            /*$v_stamdata: */pl.optional/*3*/(
                $v_stamdata,
                ($) => [true, $],
                () => [false],
            ),
        ))
        const $v_overloop: pt.OptionalValue<g_out.T.Jaar.overloop<Annotation>> = [true, $p_overloop]
        const $p_jaarstamdata: g_out.T.Jaar.jaarstamdata<Annotation> = pl.cc($['jaarstamdata'], ($) => map_Jaarstamdata<Annotation>(
            $,
            /*$v_overloop: */pl.optional/*3*/(
                $v_overloop,
                ($) => [true, $],
                () => [false],
            ),
            /*$v_stamdata: */pl.optional/*3*/(
                $v_stamdata,
                ($) => [true, $],
                () => [false],
            ),
        ))
        const $v_jaarstamdata: pt.OptionalValue<g_out.T.Jaar.jaarstamdata<Annotation>> = [true, $p_jaarstamdata]
        const $p_boekingen: g_out.T.Jaar.boekingen<Annotation> = pl.cc($['boekingen'], ($) => map_Boekingen<Annotation>(
            $,
            /*$v_jaarstamdata: */pl.optional/*3*/(
                $v_jaarstamdata,
                ($) => [true, $],
                () => [false],
            ),
            /*$v_overloop: */pl.optional/*3*/(
                $v_overloop,
                ($) => [true, $],
                () => [false],
            ),
            /*$v_stamdata: */pl.optional/*3*/(
                $v_stamdata,
                ($) => [true, $],
                () => [false],
            ),
        ))
        const $v_boekingen: pt.OptionalValue<g_out.T.Jaar.boekingen<Annotation>> = [true, $p_boekingen]
        const $p_afhandeling: g_out.T.Jaar.afhandeling<Annotation> = pl.cc($['afhandeling'], ($) => pl.cc($, ($) => {
            const $p_verrekenposten: g_out.T.Jaar.afhandeling.verrekenposten<Annotation> = pl.cc($['verrekenposten'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_mutaties: g_out.T.Jaar.afhandeling.verrekenposten.D.mutaties<Annotation> = pl.cc($['mutaties'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p_bedrag: g_out.T.Jaar.afhandeling.verrekenposten.D.mutaties.D.bedrag<Annotation> = pl.cc($['bedrag'], ($) => $)
                    const $v_bedrag: pt.OptionalValue<g_out.T.Jaar.afhandeling.verrekenposten.D.mutaties.D.bedrag<Annotation>> = [true, $p_bedrag]
                    const $p_afhandeling: g_out.T.Jaar.afhandeling.verrekenposten.D.mutaties.D.afhandeling<Annotation> = pl.cc($['afhandeling'], ($) => map_Afhandeling<Annotation>(
                        $,
                        /*$v_boekingen: */pl.optional/*3*/(
                            $v_boekingen,
                            ($) => [true, $],
                            () => [false],
                        ),
                        /*$v_jaarstamdata: */pl.optional/*3*/(
                            $v_jaarstamdata,
                            ($) => [true, $],
                            () => [false],
                        ),
                        /*$v_overloop: */pl.optional/*3*/(
                            $v_overloop,
                            ($) => [true, $],
                            () => [false],
                        ),
                    ))
                    const $v_afhandeling: pt.OptionalValue<g_out.T.Jaar.afhandeling.verrekenposten.D.mutaties.D.afhandeling<Annotation>> = [true, $p_afhandeling]
                    return {
                        'afhandeling': $p_afhandeling,
                        'bedrag': $p_bedrag,
                    }
                })))
                const $v_mutaties: pt.OptionalValue<g_out.T.Jaar.afhandeling.verrekenposten.D.mutaties<Annotation>> = [true, $p_mutaties]
                return {
                    'mutaties': $p_mutaties,
                }
            })))
            const $v_verrekenposten: pt.OptionalValue<g_out.T.Jaar.afhandeling.verrekenposten<Annotation>> = [true, $p_verrekenposten]
            const $p_bankrekeningen: g_out.T.Jaar.afhandeling.bankrekeningen<Annotation> = pl.cc($['bankrekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_mutaties: g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties<Annotation> = pl.cc($['mutaties'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p_omschrijving: g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.omschrijving<Annotation> = pl.cc($['omschrijving'], ($) => $)
                    const $v_omschrijving: pt.OptionalValue<g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.omschrijving<Annotation>> = [true, $p_omschrijving]
                    const $p_bedrag: g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.bedrag<Annotation> = pl.cc($['bedrag'], ($) => $)
                    const $v_bedrag: pt.OptionalValue<g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.bedrag<Annotation>> = [true, $p_bedrag]
                    const $p_datum: g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.datum<Annotation> = pl.cc($['datum'], ($) => $)
                    const $v_datum: pt.OptionalValue<g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.datum<Annotation>> = [true, $p_datum]
                    const $p_status: g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.status<Annotation> = pl.cc($['status'], ($) => pl.cc($, ($): g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.status<Annotation> => {
                        switch ($[0]) {
                            case 'nog te verwerken': return pl.ss($, ($) => ['nog te verwerken', pl.cc($, ($) => {
                                return null
                            })])
                            case 'verwerkt': return pl.ss($, ($) => ['verwerkt', pl.cc($, ($) => {
                                const $p_afhandeling: g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.status.verwerkt.afhandeling<Annotation> = pl.cc($['afhandeling'], ($) => pl.cc($, ($): g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.status.verwerkt.afhandeling<Annotation> => {
                                    switch ($[0]) {
                                        case 'alg': return pl.ss($, ($) => ['alg', map_Afhandeling<Annotation>(
                                            $,
                                            /*$v_boekingen: */pl.optional/*3*/(
                                                $v_boekingen,
                                                ($) => [true, $],
                                                () => [false],
                                            ),
                                            /*$v_jaarstamdata: */pl.optional/*3*/(
                                                $v_jaarstamdata,
                                                ($) => [true, $],
                                                () => [false],
                                            ),
                                            /*$v_overloop: */pl.optional/*3*/(
                                                $v_overloop,
                                                ($) => [true, $],
                                                () => [false],
                                            ),
                                        )])
                                        case 'verrekenpost': return pl.ss($, ($) => ['verrekenpost', pl.cc($, ($) => {
                                            const key = $.key
                                            const constraint: pt.OptionalValue<g_out.T.Jaar.afhandeling.verrekenposten.D<Annotation>> = pl.optional/*3*/(
                                                $v_verrekenposten,
                                                ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaar.afhandeling.verrekenposten.D<Annotation>>>(
                                                    key,
                                                    ($) => [true, $],
                                                    () => {
                                                        $se.error("no such entry")
                                                        return [false]
                                                    },
                                                ),
                                                () => [false],
                                            )
                                            return {
                                                'annotation': $.annotation,
                                                'constraint': constraint,
                                                'key': $.key,
                                            }
                                        })])
                                        default: return pl.au($[0])
                                    }
                                }))
                                const $v_afhandeling: pt.OptionalValue<g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.status.verwerkt.afhandeling<Annotation>> = [true, $p_afhandeling]
                                return {
                                    'afhandeling': $p_afhandeling,
                                }
                            })])
                            default: return pl.au($[0])
                        }
                    }))
                    const $v_status: pt.OptionalValue<g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties.D.status<Annotation>> = [true, $p_status]
                    return {
                        'bedrag': $p_bedrag,
                        'datum': $p_datum,
                        'omschrijving': $p_omschrijving,
                        'status': $p_status,
                    }
                })))
                const $v_mutaties: pt.OptionalValue<g_out.T.Jaar.afhandeling.bankrekeningen.D.mutaties<Annotation>> = [true, $p_mutaties]
                return {
                    'mutaties': $p_mutaties,
                }
            })))
            const $v_bankrekeningen: pt.OptionalValue<g_out.T.Jaar.afhandeling.bankrekeningen<Annotation>> = [true, $p_bankrekeningen]
            return {
                'bankrekeningen': $p_bankrekeningen,
                'verrekenposten': $p_verrekenposten,
            }
        }))
        const $v_afhandeling: pt.OptionalValue<g_out.T.Jaar.afhandeling<Annotation>> = [true, $p_afhandeling]
        return {
            'afhandeling': $p_afhandeling,
            'boekingen': $p_boekingen,
            'jaarstamdata': $p_jaarstamdata,
            'overloop': $p_overloop,
            'stamdata': $p_stamdata,
        }
    })
}
function map_Jaarstamdata<Annotation>(
    $: g_in.T.Jaarstamdata<Annotation>,
    $v_overloop: pt.OptionalValue<g_out.T.Overloop<Annotation>>,
    $v_stamdata: pt.OptionalValue<g_out.T.Stamdata<Annotation>>,
): g_out.T.Jaarstamdata<Annotation> {
    return pl.cc($, ($) => {
        const $p_balans__grootboekrekeningen: g_out.T.Jaarstamdata.balans__grootboekrekeningen<Annotation> = pl.cc($['balans grootboekrekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p__ltype: g_out.T.Jaarstamdata.balans__grootboekrekeningen.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Jaarstamdata.balans__grootboekrekeningen.D._ltype<Annotation> => {
                switch ($[0]) {
                    case 'bankrekening': return pl.ss($, ($) => ['bankrekening', pl.cc($, ($) => {
                        return null
                    })])
                    case 'informele rekening': return pl.ss($, ($) => ['informele rekening', pl.cc($, ($) => {
                        return null
                    })])
                    case 'overig': return pl.ss($, ($) => ['overig', pl.cc($, ($) => {
                        return null
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v__ltype: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D._ltype<Annotation>> = [true, $p__ltype]
            return {
                'type': $p__ltype,
            }
        })))
        const $v_balans__grootboekrekeningen: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen<Annotation>> = [true, $p_balans__grootboekrekeningen]
        const $p_resultaat__grootboekrekeningen: g_out.T.Jaarstamdata.resultaat__grootboekrekeningen<Annotation> = pl.cc($['resultaat grootboekrekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
            return null
        })))
        const $v_resultaat__grootboekrekeningen: pt.OptionalValue<g_out.T.Jaarstamdata.resultaat__grootboekrekeningen<Annotation>> = [true, $p_resultaat__grootboekrekeningen]
        const $p_informele__rekeningen: g_out.T.Jaarstamdata.informele__rekeningen<Annotation> = pl.cc($['informele rekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_grootboekrekening: g_out.T.Jaarstamdata.informele__rekeningen.D.grootboekrekening<Annotation> = pl.cc($['grootboekrekening'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_balans__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_grootboekrekening: pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D.grootboekrekening<Annotation>> = [true, $p_grootboekrekening]
            const $p_beginsaldo: g_out.T.Jaarstamdata.informele__rekeningen.D.beginsaldo<Annotation> = pl.cc($['beginsaldo'], ($) => $)
            const $v_beginsaldo: pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D.beginsaldo<Annotation>> = [true, $p_beginsaldo]
            const $p_nieuw: g_out.T.Jaarstamdata.informele__rekeningen.D.nieuw<Annotation> = pl.cc($['nieuw'], ($) => pl.cc($, ($): g_out.T.Jaarstamdata.informele__rekeningen.D.nieuw<Annotation> => {
                switch ($[0]) {
                    case 'ja': return pl.ss($, ($) => ['ja', pl.cc($, ($) => {
                        return null
                    })])
                    case 'nee': return pl.ss($, ($) => ['nee', pl.cc($, ($) => {
                        const $p_rekening: g_out.T.Jaarstamdata.informele__rekeningen.D.nieuw.nee.rekening<Annotation> = pl.cc($['rekening'], ($) => pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Overloop.informele__rekeningen.D<Annotation>> = pl.optional/*3*/(
                                $v_overloop,
                                ($) => pl.cc($['informele rekeningen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Overloop.informele__rekeningen.D<Annotation>>>(
                                    key,
                                    ($) => [true, $],
                                    () => {
                                        $se.error("no such entry")
                                        return [false]
                                    },
                                )),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_rekening: pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D.nieuw.nee.rekening<Annotation>> = [true, $p_rekening]
                        return {
                            'rekening': $p_rekening,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_nieuw: pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen.D.nieuw<Annotation>> = [true, $p_nieuw]
            return {
                'beginsaldo': $p_beginsaldo,
                'grootboekrekening': $p_grootboekrekening,
                'nieuw': $p_nieuw,
            }
        })))
        const $v_informele__rekeningen: pt.OptionalValue<g_out.T.Jaarstamdata.informele__rekeningen<Annotation>> = [true, $p_informele__rekeningen]
        const $p_overige__balans__items: g_out.T.Jaarstamdata.overige__balans__items<Annotation> = pl.cc($['overige balans items'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_beginsaldo: g_out.T.Jaarstamdata.overige__balans__items.D.beginsaldo<Annotation> = pl.cc($['beginsaldo'], ($) => $)
            const $v_beginsaldo: pt.OptionalValue<g_out.T.Jaarstamdata.overige__balans__items.D.beginsaldo<Annotation>> = [true, $p_beginsaldo]
            const $p_grootboekrekening: g_out.T.Jaarstamdata.overige__balans__items.D.grootboekrekening<Annotation> = pl.cc($['grootboekrekening'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_balans__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_grootboekrekening: pt.OptionalValue<g_out.T.Jaarstamdata.overige__balans__items.D.grootboekrekening<Annotation>> = [true, $p_grootboekrekening]
            const $p_nieuw: g_out.T.Jaarstamdata.overige__balans__items.D.nieuw<Annotation> = pl.cc($['nieuw'], ($) => pl.cc($, ($): g_out.T.Jaarstamdata.overige__balans__items.D.nieuw<Annotation> => {
                switch ($[0]) {
                    case 'ja': return pl.ss($, ($) => ['ja', pl.cc($, ($) => {
                        return null
                    })])
                    case 'nee': return pl.ss($, ($) => ['nee', pl.cc($, ($) => {
                        const $p_balans__item: g_out.T.Jaarstamdata.overige__balans__items.D.nieuw.nee.balans__item<Annotation> = pl.cc($['balans item'], ($) => pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Overloop.overige__balans__items.D<Annotation>> = pl.optional/*3*/(
                                $v_overloop,
                                ($) => pl.cc($['overige balans items'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Overloop.overige__balans__items.D<Annotation>>>(
                                    key,
                                    ($) => [true, $],
                                    () => {
                                        $se.error("no such entry")
                                        return [false]
                                    },
                                )),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_balans__item: pt.OptionalValue<g_out.T.Jaarstamdata.overige__balans__items.D.nieuw.nee.balans__item<Annotation>> = [true, $p_balans__item]
                        return {
                            'balans item': $p_balans__item,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_nieuw: pt.OptionalValue<g_out.T.Jaarstamdata.overige__balans__items.D.nieuw<Annotation>> = [true, $p_nieuw]
            return {
                'beginsaldo': $p_beginsaldo,
                'grootboekrekening': $p_grootboekrekening,
                'nieuw': $p_nieuw,
            }
        })))
        const $v_overige__balans__items: pt.OptionalValue<g_out.T.Jaarstamdata.overige__balans__items<Annotation>> = [true, $p_overige__balans__items]
        const $p_startdatum__boekjaar: g_out.T.Jaarstamdata.startdatum__boekjaar<Annotation> = pl.cc($['startdatum boekjaar'], ($) => $)
        const $v_startdatum__boekjaar: pt.OptionalValue<g_out.T.Jaarstamdata.startdatum__boekjaar<Annotation>> = [true, $p_startdatum__boekjaar]
        const $p_beginsaldo__Winstreserve: g_out.T.Jaarstamdata.beginsaldo__Winstreserve<Annotation> = pl.cc($['beginsaldo Winstreserve'], ($) => $)
        const $v_beginsaldo__Winstreserve: pt.OptionalValue<g_out.T.Jaarstamdata.beginsaldo__Winstreserve<Annotation>> = [true, $p_beginsaldo__Winstreserve]
        const $p_afgesloten: g_out.T.Jaarstamdata.afgesloten<Annotation> = pl.cc($['afgesloten'], ($) => pl.cc($, ($): g_out.T.Jaarstamdata.afgesloten<Annotation> => {
            switch ($[0]) {
                case 'ja': return pl.ss($, ($) => ['ja', pl.cc($, ($) => {
                    return null
                })])
                case 'nee': return pl.ss($, ($) => ['nee', pl.cc($, ($) => {
                    return null
                })])
                default: return pl.au($[0])
            }
        }))
        const $v_afgesloten: pt.OptionalValue<g_out.T.Jaarstamdata.afgesloten<Annotation>> = [true, $p_afgesloten]
        const $p_grootboeken: g_out.T.Jaarstamdata.grootboeken<Annotation> = pl.cc($['grootboeken'], ($) => pl.cc($, ($) => {
            const $p_resultaat__dit__jaar: g_out.T.Jaarstamdata.grootboeken.resultaat__dit__jaar<Annotation> = pl.cc($['resultaat dit jaar'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.resultaat__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_resultaat__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.resultaat__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_resultaat__dit__jaar: pt.OptionalValue<g_out.T.Jaarstamdata.grootboeken.resultaat__dit__jaar<Annotation>> = [true, $p_resultaat__dit__jaar]
            const $p_winstreserve: g_out.T.Jaarstamdata.grootboeken.winstreserve<Annotation> = pl.cc($['winstreserve'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_balans__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_winstreserve: pt.OptionalValue<g_out.T.Jaarstamdata.grootboeken.winstreserve<Annotation>> = [true, $p_winstreserve]
            const $p_BTW__afrondingen: g_out.T.Jaarstamdata.grootboeken.BTW__afrondingen<Annotation> = pl.cc($['BTW afrondingen'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.resultaat__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_resultaat__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.resultaat__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_BTW__afrondingen: pt.OptionalValue<g_out.T.Jaarstamdata.grootboeken.BTW__afrondingen<Annotation>> = [true, $p_BTW__afrondingen]
            const $p_beginsaldo__nog__aan__te__geven__BTW: g_out.T.Jaarstamdata.grootboeken.beginsaldo__nog__aan__te__geven__BTW<Annotation> = pl.cc($['beginsaldo nog aan te geven BTW'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_balans__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_beginsaldo__nog__aan__te__geven__BTW: pt.OptionalValue<g_out.T.Jaarstamdata.grootboeken.beginsaldo__nog__aan__te__geven__BTW<Annotation>> = [true, $p_beginsaldo__nog__aan__te__geven__BTW]
            const $p_nog__aan__te__geven__BTW: g_out.T.Jaarstamdata.grootboeken.nog__aan__te__geven__BTW<Annotation> = pl.cc($['nog aan te geven BTW'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_balans__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_nog__aan__te__geven__BTW: pt.OptionalValue<g_out.T.Jaarstamdata.grootboeken.nog__aan__te__geven__BTW<Annotation>> = [true, $p_nog__aan__te__geven__BTW]
            const $p_inkoop__saldo: g_out.T.Jaarstamdata.grootboeken.inkoop__saldo<Annotation> = pl.cc($['inkoop saldo'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_balans__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_inkoop__saldo: pt.OptionalValue<g_out.T.Jaarstamdata.grootboeken.inkoop__saldo<Annotation>> = [true, $p_inkoop__saldo]
            const $p_verkoop__saldo: g_out.T.Jaarstamdata.grootboeken.verkoop__saldo<Annotation> = pl.cc($['verkoop saldo'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_balans__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_verkoop__saldo: pt.OptionalValue<g_out.T.Jaarstamdata.grootboeken.verkoop__saldo<Annotation>> = [true, $p_verkoop__saldo]
            const $p_BTW__periode: g_out.T.Jaarstamdata.grootboeken.BTW__periode<Annotation> = pl.cc($['BTW periode'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_balans__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_BTW__periode: pt.OptionalValue<g_out.T.Jaarstamdata.grootboeken.BTW__periode<Annotation>> = [true, $p_BTW__periode]
            return {
                'beginsaldo nog aan te geven BTW': $p_beginsaldo__nog__aan__te__geven__BTW,
                'BTW afrondingen': $p_BTW__afrondingen,
                'BTW periode': $p_BTW__periode,
                'inkoop saldo': $p_inkoop__saldo,
                'nog aan te geven BTW': $p_nog__aan__te__geven__BTW,
                'resultaat dit jaar': $p_resultaat__dit__jaar,
                'verkoop saldo': $p_verkoop__saldo,
                'winstreserve': $p_winstreserve,
            }
        }))
        const $v_grootboeken: pt.OptionalValue<g_out.T.Jaarstamdata.grootboeken<Annotation>> = [true, $p_grootboeken]
        const $p_bankrekeningen: g_out.T.Jaarstamdata.bankrekeningen<Annotation> = pl.cc($['bankrekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_beginsaldo: g_out.T.Jaarstamdata.bankrekeningen.D.beginsaldo<Annotation> = pl.cc($['beginsaldo'], ($) => $)
            const $v_beginsaldo: pt.OptionalValue<g_out.T.Jaarstamdata.bankrekeningen.D.beginsaldo<Annotation>> = [true, $p_beginsaldo]
            const $p_nieuw: g_out.T.Jaarstamdata.bankrekeningen.D.nieuw<Annotation> = pl.cc($['nieuw'], ($) => pl.cc($, ($): g_out.T.Jaarstamdata.bankrekeningen.D.nieuw<Annotation> => {
                switch ($[0]) {
                    case 'ja': return pl.ss($, ($) => ['ja', pl.cc($, ($) => {
                        return null
                    })])
                    case 'nee': return pl.ss($, ($) => ['nee', pl.cc($, ($) => {
                        const $p_rekening: g_out.T.Jaarstamdata.bankrekeningen.D.nieuw.nee.rekening<Annotation> = pl.cc($['rekening'], ($) => pl.cc($, ($) => {
                            const key = $.key
                            const constraint: pt.OptionalValue<g_out.T.Overloop.bankrekeningen.D<Annotation>> = pl.optional/*3*/(
                                $v_overloop,
                                ($) => pl.cc($['bankrekeningen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Overloop.bankrekeningen.D<Annotation>>>(
                                    key,
                                    ($) => [true, $],
                                    () => {
                                        $se.error("no such entry")
                                        return [false]
                                    },
                                )),
                                () => [false],
                            )
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'key': $.key,
                            }
                        }))
                        const $v_rekening: pt.OptionalValue<g_out.T.Jaarstamdata.bankrekeningen.D.nieuw.nee.rekening<Annotation>> = [true, $p_rekening]
                        return {
                            'rekening': $p_rekening,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_nieuw: pt.OptionalValue<g_out.T.Jaarstamdata.bankrekeningen.D.nieuw<Annotation>> = [true, $p_nieuw]
            const $p_grootboekrekening: g_out.T.Jaarstamdata.bankrekeningen.D.grootboekrekening<Annotation> = pl.cc($['grootboekrekening'], ($) => pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>> = pl.optional/*3*/(
                    $v_balans__grootboekrekeningen,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Jaarstamdata.balans__grootboekrekeningen.D<Annotation>>>(
                        key,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ),
                    () => [false],
                )
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            }))
            const $v_grootboekrekening: pt.OptionalValue<g_out.T.Jaarstamdata.bankrekeningen.D.grootboekrekening<Annotation>> = [true, $p_grootboekrekening]
            return {
                'beginsaldo': $p_beginsaldo,
                'grootboekrekening': $p_grootboekrekening,
                'nieuw': $p_nieuw,
            }
        })))
        const $v_bankrekeningen: pt.OptionalValue<g_out.T.Jaarstamdata.bankrekeningen<Annotation>> = [true, $p_bankrekeningen]
        return {
            'afgesloten': $p_afgesloten,
            'balans grootboekrekeningen': $p_balans__grootboekrekeningen,
            'bankrekeningen': $p_bankrekeningen,
            'beginsaldo Winstreserve': $p_beginsaldo__Winstreserve,
            'grootboeken': $p_grootboeken,
            'informele rekeningen': $p_informele__rekeningen,
            'overige balans items': $p_overige__balans__items,
            'resultaat grootboekrekeningen': $p_resultaat__grootboekrekeningen,
            'startdatum boekjaar': $p_startdatum__boekjaar,
        }
    })
}
function map_Overloop<Annotation>(
    $: g_in.T.Overloop<Annotation>,
    $v_stamdata: pt.OptionalValue<g_out.T.Stamdata<Annotation>>,
): g_out.T.Overloop<Annotation> {
    return pl.cc($, ($) => {
        const $p_jaren: g_out.T.Overloop.jaren<Annotation> = pl.cc($['jaren'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_inkopen: g_out.T.Overloop.jaren.D.inkopen<Annotation> = pl.cc($['inkopen'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_openstaand: g_out.T.Overloop.jaren.D.inkopen.D.openstaand<Annotation> = pl.cc($['openstaand'], ($) => $)
                const $v_openstaand: pt.OptionalValue<g_out.T.Overloop.jaren.D.inkopen.D.openstaand<Annotation>> = [true, $p_openstaand]
                return {
                    'openstaand': $p_openstaand,
                }
            })))
            const $v_inkopen: pt.OptionalValue<g_out.T.Overloop.jaren.D.inkopen<Annotation>> = [true, $p_inkopen]
            const $p_verkopen: g_out.T.Overloop.jaren.D.verkopen<Annotation> = pl.cc($['verkopen'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_openstaand: g_out.T.Overloop.jaren.D.verkopen.D.openstaand<Annotation> = pl.cc($['openstaand'], ($) => $)
                const $v_openstaand: pt.OptionalValue<g_out.T.Overloop.jaren.D.verkopen.D.openstaand<Annotation>> = [true, $p_openstaand]
                return {
                    'openstaand': $p_openstaand,
                }
            })))
            const $v_verkopen: pt.OptionalValue<g_out.T.Overloop.jaren.D.verkopen<Annotation>> = [true, $p_verkopen]
            const $p_BTW__periodes: g_out.T.Overloop.jaren.D.BTW__periodes<Annotation> = pl.cc($['BTW periodes'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_openstaand: g_out.T.Overloop.jaren.D.BTW__periodes.D.openstaand<Annotation> = pl.cc($['openstaand'], ($) => $)
                const $v_openstaand: pt.OptionalValue<g_out.T.Overloop.jaren.D.BTW__periodes.D.openstaand<Annotation>> = [true, $p_openstaand]
                return {
                    'openstaand': $p_openstaand,
                }
            })))
            const $v_BTW__periodes: pt.OptionalValue<g_out.T.Overloop.jaren.D.BTW__periodes<Annotation>> = [true, $p_BTW__periodes]
            return {
                'BTW periodes': $p_BTW__periodes,
                'inkopen': $p_inkopen,
                'verkopen': $p_verkopen,
            }
        })))
        const $v_jaren: pt.OptionalValue<g_out.T.Overloop.jaren<Annotation>> = [true, $p_jaren]
        const $p_informele__rekeningen: g_out.T.Overloop.informele__rekeningen<Annotation> = pl.cc($['informele rekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_eindsaldo: g_out.T.Overloop.informele__rekeningen.D.eindsaldo<Annotation> = pl.cc($['eindsaldo'], ($) => $)
            const $v_eindsaldo: pt.OptionalValue<g_out.T.Overloop.informele__rekeningen.D.eindsaldo<Annotation>> = [true, $p_eindsaldo]
            return {
                'eindsaldo': $p_eindsaldo,
            }
        })))
        const $v_informele__rekeningen: pt.OptionalValue<g_out.T.Overloop.informele__rekeningen<Annotation>> = [true, $p_informele__rekeningen]
        const $p_overige__balans__items: g_out.T.Overloop.overige__balans__items<Annotation> = pl.cc($['overige balans items'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_eindsaldo: g_out.T.Overloop.overige__balans__items.D.eindsaldo<Annotation> = pl.cc($['eindsaldo'], ($) => $)
            const $v_eindsaldo: pt.OptionalValue<g_out.T.Overloop.overige__balans__items.D.eindsaldo<Annotation>> = [true, $p_eindsaldo]
            return {
                'eindsaldo': $p_eindsaldo,
            }
        })))
        const $v_overige__balans__items: pt.OptionalValue<g_out.T.Overloop.overige__balans__items<Annotation>> = [true, $p_overige__balans__items]
        const $p_bankrekeningen: g_out.T.Overloop.bankrekeningen<Annotation> = pl.cc($['bankrekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_eindsaldo: g_out.T.Overloop.bankrekeningen.D.eindsaldo<Annotation> = pl.cc($['eindsaldo'], ($) => $)
            const $v_eindsaldo: pt.OptionalValue<g_out.T.Overloop.bankrekeningen.D.eindsaldo<Annotation>> = [true, $p_eindsaldo]
            return {
                'eindsaldo': $p_eindsaldo,
            }
        })))
        const $v_bankrekeningen: pt.OptionalValue<g_out.T.Overloop.bankrekeningen<Annotation>> = [true, $p_bankrekeningen]
        return {
            'bankrekeningen': $p_bankrekeningen,
            'informele rekeningen': $p_informele__rekeningen,
            'jaren': $p_jaren,
            'overige balans items': $p_overige__balans__items,
        }
    })
}
function map_Stamdata<Annotation>(
    $: g_in.T.Stamdata<Annotation>,
): g_out.T.Stamdata<Annotation> {
    return pl.cc($, ($) => {
        const $p_gebruikers: g_out.T.Stamdata.gebruikers<Annotation> = pl.cc($['gebruikers'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_volledige__naam: g_out.T.Stamdata.gebruikers.D.volledige__naam<Annotation> = pl.cc($['volledige naam'], ($) => $)
            const $v_volledige__naam: pt.OptionalValue<g_out.T.Stamdata.gebruikers.D.volledige__naam<Annotation>> = [true, $p_volledige__naam]
            return {
                'volledige naam': $p_volledige__naam,
            }
        })))
        const $v_gebruikers: pt.OptionalValue<g_out.T.Stamdata.gebruikers<Annotation>> = [true, $p_gebruikers]
        const $p_balans: g_out.T.Stamdata.balans<Annotation> = pl.cc($['balans'], ($) => pl.cc($, ($) => {
            const $p_hoofdcategorieen__fiscus: g_out.T.Stamdata.balans.hoofdcategorieen__fiscus<Annotation> = pl.cc($['hoofdcategorieen fiscus'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_zijde: g_out.T.Stamdata.balans.hoofdcategorieen__fiscus.D.zijde<Annotation> = pl.cc($['zijde'], ($) => pl.cc($, ($): g_out.T.Stamdata.balans.hoofdcategorieen__fiscus.D.zijde<Annotation> => {
                    switch ($[0]) {
                        case 'activa': return pl.ss($, ($) => ['activa', pl.cc($, ($) => {
                            return null
                        })])
                        case 'passiva': return pl.ss($, ($) => ['passiva', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_zijde: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen__fiscus.D.zijde<Annotation>> = [true, $p_zijde]
                const $p_subcategorieen: g_out.T.Stamdata.balans.hoofdcategorieen__fiscus.D.subcategorieen<Annotation> = pl.cc($['subcategorieen'], ($) => $.map(($) => pl.cc($, ($) => {
                    return null
                })))
                const $v_subcategorieen: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen__fiscus.D.subcategorieen<Annotation>> = [true, $p_subcategorieen]
                return {
                    'subcategorieen': $p_subcategorieen,
                    'zijde': $p_zijde,
                }
            })))
            const $v_hoofdcategorieen__fiscus: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen__fiscus<Annotation>> = [true, $p_hoofdcategorieen__fiscus]
            const $p_hoofdcategorieen: g_out.T.Stamdata.balans.hoofdcategorieen<Annotation> = pl.cc($['hoofdcategorieen'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_zijde: g_out.T.Stamdata.balans.hoofdcategorieen.D.zijde<Annotation> = pl.cc($['zijde'], ($) => pl.cc($, ($): g_out.T.Stamdata.balans.hoofdcategorieen.D.zijde<Annotation> => {
                    switch ($[0]) {
                        case 'activa': return pl.ss($, ($) => ['activa', pl.cc($, ($) => {
                            return null
                        })])
                        case 'passiva': return pl.ss($, ($) => ['passiva', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_zijde: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen.D.zijde<Annotation>> = [true, $p_zijde]
                const $p_subcategorieen: g_out.T.Stamdata.balans.hoofdcategorieen.D.subcategorieen<Annotation> = pl.cc($['subcategorieen'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p_hoofdcategorie__fiscus: g_out.T.Stamdata.balans.hoofdcategorieen.D.subcategorieen.D.hoofdcategorie__fiscus<Annotation> = pl.cc($['hoofdcategorie fiscus'], ($) => pl.cc($, ($) => {
                        const key = $.key
                        const constraint: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen__fiscus.D<Annotation>> = pl.optional/*3*/(
                            $v_hoofdcategorieen__fiscus,
                            ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen__fiscus.D<Annotation>>>(
                                key,
                                ($) => [true, $],
                                () => {
                                    $se.error("no such entry")
                                    return [false]
                                },
                            ),
                            () => [false],
                        )
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    const $v_hoofdcategorie__fiscus: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen.D.subcategorieen.D.hoofdcategorie__fiscus<Annotation>> = [true, $p_hoofdcategorie__fiscus]
                    const $p_subcategorie__fiscus: g_out.T.Stamdata.balans.hoofdcategorieen.D.subcategorieen.D.subcategorie__fiscus<Annotation> = pl.cc($['subcategorie fiscus'], ($) => pl.cc($, ($) => {
                        const key = $.key
                        const constraint: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen__fiscus.D.subcategorieen.D<Annotation>> = pl.optional/*3*/(
                            $v_hoofdcategorie__fiscus,
                            ($) => pl.optional/*1*/(
                                $.constraint,
                                ($) => pl.cc($['subcategorieen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen__fiscus.D.subcategorieen.D<Annotation>>>(
                                    key,
                                    ($) => [true, $],
                                    () => {
                                        $se.error("no such entry")
                                        return [false]
                                    },
                                )),
                                () => [false],
                            ),
                            () => [false],
                        )
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    const $v_subcategorie__fiscus: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen.D.subcategorieen.D.subcategorie__fiscus<Annotation>> = [true, $p_subcategorie__fiscus]
                    return {
                        'hoofdcategorie fiscus': $p_hoofdcategorie__fiscus,
                        'subcategorie fiscus': $p_subcategorie__fiscus,
                    }
                })))
                const $v_subcategorieen: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen.D.subcategorieen<Annotation>> = [true, $p_subcategorieen]
                return {
                    'subcategorieen': $p_subcategorieen,
                    'zijde': $p_zijde,
                }
            })))
            const $v_hoofdcategorieen: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen<Annotation>> = [true, $p_hoofdcategorieen]
            const $p_grootboekrekeningen: g_out.T.Stamdata.balans.grootboekrekeningen<Annotation> = pl.cc($['grootboekrekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_hoofdcategorie: g_out.T.Stamdata.balans.grootboekrekeningen.D.hoofdcategorie<Annotation> = pl.cc($['hoofdcategorie'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen.D<Annotation>> = pl.optional/*3*/(
                        $v_hoofdcategorieen,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen.D<Annotation>>>(
                            key,
                            ($) => [true, $],
                            () => {
                                $se.error("no such entry")
                                return [false]
                            },
                        ),
                        () => [false],
                    )
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const $v_hoofdcategorie: pt.OptionalValue<g_out.T.Stamdata.balans.grootboekrekeningen.D.hoofdcategorie<Annotation>> = [true, $p_hoofdcategorie]
                const $p_subcategorie: g_out.T.Stamdata.balans.grootboekrekeningen.D.subcategorie<Annotation> = pl.cc($['subcategorie'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen.D.subcategorieen.D<Annotation>> = pl.optional/*3*/(
                        $v_hoofdcategorie,
                        ($) => pl.optional/*1*/(
                            $.constraint,
                            ($) => pl.cc($['subcategorieen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.balans.hoofdcategorieen.D.subcategorieen.D<Annotation>>>(
                                key,
                                ($) => [true, $],
                                () => {
                                    $se.error("no such entry")
                                    return [false]
                                },
                            )),
                            () => [false],
                        ),
                        () => [false],
                    )
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const $v_subcategorie: pt.OptionalValue<g_out.T.Stamdata.balans.grootboekrekeningen.D.subcategorie<Annotation>> = [true, $p_subcategorie]
                const $p_zijde: g_out.T.Stamdata.balans.grootboekrekeningen.D.zijde<Annotation> = pl.cc($['zijde'], ($) => pl.cc($, ($): g_out.T.Stamdata.balans.grootboekrekeningen.D.zijde<Annotation> => {
                    switch ($[0]) {
                        case 'activa': return pl.ss($, ($) => ['activa', pl.cc($, ($) => {
                            return null
                        })])
                        case 'passiva': return pl.ss($, ($) => ['passiva', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_zijde: pt.OptionalValue<g_out.T.Stamdata.balans.grootboekrekeningen.D.zijde<Annotation>> = [true, $p_zijde]
                return {
                    'hoofdcategorie': $p_hoofdcategorie,
                    'subcategorie': $p_subcategorie,
                    'zijde': $p_zijde,
                }
            })))
            const $v_grootboekrekeningen: pt.OptionalValue<g_out.T.Stamdata.balans.grootboekrekeningen<Annotation>> = [true, $p_grootboekrekeningen]
            return {
                'grootboekrekeningen': $p_grootboekrekeningen,
                'hoofdcategorieen': $p_hoofdcategorieen,
                'hoofdcategorieen fiscus': $p_hoofdcategorieen__fiscus,
            }
        }))
        const $v_balans: pt.OptionalValue<g_out.T.Stamdata.balans<Annotation>> = [true, $p_balans]
        const $p_resultaat: g_out.T.Stamdata.resultaat<Annotation> = pl.cc($['resultaat'], ($) => pl.cc($, ($) => {
            const $p_hoofdcategorieen__fiscus: g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus<Annotation> = pl.cc($['hoofdcategorieen fiscus'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_zijde: g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus.D.zijde<Annotation> = pl.cc($['zijde'], ($) => pl.cc($, ($): g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus.D.zijde<Annotation> => {
                    switch ($[0]) {
                        case 'kosten': return pl.ss($, ($) => ['kosten', pl.cc($, ($) => {
                            return null
                        })])
                        case 'opbrengsten': return pl.ss($, ($) => ['opbrengsten', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_zijde: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus.D.zijde<Annotation>> = [true, $p_zijde]
                const $p_subcategorieen: g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus.D.subcategorieen<Annotation> = pl.cc($['subcategorieen'], ($) => $.map(($) => pl.cc($, ($) => {
                    return null
                })))
                const $v_subcategorieen: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus.D.subcategorieen<Annotation>> = [true, $p_subcategorieen]
                return {
                    'subcategorieen': $p_subcategorieen,
                    'zijde': $p_zijde,
                }
            })))
            const $v_hoofdcategorieen__fiscus: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus<Annotation>> = [true, $p_hoofdcategorieen__fiscus]
            const $p_hoofdcategorieen: g_out.T.Stamdata.resultaat.hoofdcategorieen<Annotation> = pl.cc($['hoofdcategorieen'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_zijde: g_out.T.Stamdata.resultaat.hoofdcategorieen.D.zijde<Annotation> = pl.cc($['zijde'], ($) => pl.cc($, ($): g_out.T.Stamdata.resultaat.hoofdcategorieen.D.zijde<Annotation> => {
                    switch ($[0]) {
                        case 'kosten': return pl.ss($, ($) => ['kosten', pl.cc($, ($) => {
                            return null
                        })])
                        case 'opbrengsten': return pl.ss($, ($) => ['opbrengsten', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_zijde: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen.D.zijde<Annotation>> = [true, $p_zijde]
                const $p_subcategorieen: g_out.T.Stamdata.resultaat.hoofdcategorieen.D.subcategorieen<Annotation> = pl.cc($['subcategorieen'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p_hoofdcategorie__fiscus: g_out.T.Stamdata.resultaat.hoofdcategorieen.D.subcategorieen.D.hoofdcategorie__fiscus<Annotation> = pl.cc($['hoofdcategorie fiscus'], ($) => pl.cc($, ($) => {
                        const key = $.key
                        const constraint: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus.D<Annotation>> = pl.optional/*3*/(
                            $v_hoofdcategorieen__fiscus,
                            ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus.D<Annotation>>>(
                                key,
                                ($) => [true, $],
                                () => {
                                    $se.error("no such entry")
                                    return [false]
                                },
                            ),
                            () => [false],
                        )
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    const $v_hoofdcategorie__fiscus: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen.D.subcategorieen.D.hoofdcategorie__fiscus<Annotation>> = [true, $p_hoofdcategorie__fiscus]
                    const $p_subcategorie__fiscus: g_out.T.Stamdata.resultaat.hoofdcategorieen.D.subcategorieen.D.subcategorie__fiscus<Annotation> = pl.cc($['subcategorie fiscus'], ($) => pl.cc($, ($) => {
                        const key = $.key
                        const constraint: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus.D.subcategorieen.D<Annotation>> = pl.optional/*3*/(
                            $v_hoofdcategorie__fiscus,
                            ($) => pl.optional/*1*/(
                                $.constraint,
                                ($) => pl.cc($['subcategorieen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen__fiscus.D.subcategorieen.D<Annotation>>>(
                                    key,
                                    ($) => [true, $],
                                    () => {
                                        $se.error("no such entry")
                                        return [false]
                                    },
                                )),
                                () => [false],
                            ),
                            () => [false],
                        )
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    const $v_subcategorie__fiscus: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen.D.subcategorieen.D.subcategorie__fiscus<Annotation>> = [true, $p_subcategorie__fiscus]
                    return {
                        'hoofdcategorie fiscus': $p_hoofdcategorie__fiscus,
                        'subcategorie fiscus': $p_subcategorie__fiscus,
                    }
                })))
                const $v_subcategorieen: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen.D.subcategorieen<Annotation>> = [true, $p_subcategorieen]
                return {
                    'subcategorieen': $p_subcategorieen,
                    'zijde': $p_zijde,
                }
            })))
            const $v_hoofdcategorieen: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen<Annotation>> = [true, $p_hoofdcategorieen]
            const $p_correctietypes__vennootschapsbelasting: g_out.T.Stamdata.resultaat.correctietypes__vennootschapsbelasting<Annotation> = pl.cc($['correctietypes vennootschapsbelasting'], ($) => $.map(($) => pl.cc($, ($) => {
                return null
            })))
            const $v_correctietypes__vennootschapsbelasting: pt.OptionalValue<g_out.T.Stamdata.resultaat.correctietypes__vennootschapsbelasting<Annotation>> = [true, $p_correctietypes__vennootschapsbelasting]
            const $p_grootboekrekeningen: g_out.T.Stamdata.resultaat.grootboekrekeningen<Annotation> = pl.cc($['grootboekrekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_hoofdcategorie: g_out.T.Stamdata.resultaat.grootboekrekeningen.D.hoofdcategorie<Annotation> = pl.cc($['hoofdcategorie'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen.D<Annotation>> = pl.optional/*3*/(
                        $v_hoofdcategorieen,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen.D<Annotation>>>(
                            key,
                            ($) => [true, $],
                            () => {
                                $se.error("no such entry")
                                return [false]
                            },
                        ),
                        () => [false],
                    )
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const $v_hoofdcategorie: pt.OptionalValue<g_out.T.Stamdata.resultaat.grootboekrekeningen.D.hoofdcategorie<Annotation>> = [true, $p_hoofdcategorie]
                const $p_subcategorie: g_out.T.Stamdata.resultaat.grootboekrekeningen.D.subcategorie<Annotation> = pl.cc($['subcategorie'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen.D.subcategorieen.D<Annotation>> = pl.optional/*3*/(
                        $v_hoofdcategorie,
                        ($) => pl.optional/*1*/(
                            $.constraint,
                            ($) => pl.cc($['subcategorieen'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.resultaat.hoofdcategorieen.D.subcategorieen.D<Annotation>>>(
                                key,
                                ($) => [true, $],
                                () => {
                                    $se.error("no such entry")
                                    return [false]
                                },
                            )),
                            () => [false],
                        ),
                        () => [false],
                    )
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const $v_subcategorie: pt.OptionalValue<g_out.T.Stamdata.resultaat.grootboekrekeningen.D.subcategorie<Annotation>> = [true, $p_subcategorie]
                const $p_zijde: g_out.T.Stamdata.resultaat.grootboekrekeningen.D.zijde<Annotation> = pl.cc($['zijde'], ($) => pl.cc($, ($): g_out.T.Stamdata.resultaat.grootboekrekeningen.D.zijde<Annotation> => {
                    switch ($[0]) {
                        case 'kosten': return pl.ss($, ($) => ['kosten', pl.cc($, ($) => {
                            const $p_correctie__op__vennootschapsbelasting: g_out.T.Stamdata.resultaat.grootboekrekeningen.D.zijde.kosten.correctie__op__vennootschapsbelasting<Annotation> = pl.cc($['correctie op vennootschapsbelasting'], ($) => pl.cc($, ($): g_out.T.Stamdata.resultaat.grootboekrekeningen.D.zijde.kosten.correctie__op__vennootschapsbelasting<Annotation> => {
                                switch ($[0]) {
                                    case 'ja': return pl.ss($, ($) => ['ja', pl.cc($, ($) => {
                                        const $p_correctietype: g_out.T.Stamdata.resultaat.grootboekrekeningen.D.zijde.kosten.correctie__op__vennootschapsbelasting.ja.correctietype<Annotation> = pl.cc($['correctietype'], ($) => pl.cc($, ($) => {
                                            const key = $.key
                                            const constraint: pt.OptionalValue<g_out.T.Stamdata.resultaat.correctietypes__vennootschapsbelasting.D<Annotation>> = pl.optional/*3*/(
                                                $v_correctietypes__vennootschapsbelasting,
                                                ($) => $.__getEntry<pt.OptionalValue<g_out.T.Stamdata.resultaat.correctietypes__vennootschapsbelasting.D<Annotation>>>(
                                                    key,
                                                    ($) => [true, $],
                                                    () => {
                                                        $se.error("no such entry")
                                                        return [false]
                                                    },
                                                ),
                                                () => [false],
                                            )
                                            return {
                                                'annotation': $.annotation,
                                                'constraint': constraint,
                                                'key': $.key,
                                            }
                                        }))
                                        const $v_correctietype: pt.OptionalValue<g_out.T.Stamdata.resultaat.grootboekrekeningen.D.zijde.kosten.correctie__op__vennootschapsbelasting.ja.correctietype<Annotation>> = [true, $p_correctietype]
                                        return {
                                            'correctietype': $p_correctietype,
                                        }
                                    })])
                                    case 'nee': return pl.ss($, ($) => ['nee', pl.cc($, ($) => {
                                        return null
                                    })])
                                    default: return pl.au($[0])
                                }
                            }))
                            const $v_correctie__op__vennootschapsbelasting: pt.OptionalValue<g_out.T.Stamdata.resultaat.grootboekrekeningen.D.zijde.kosten.correctie__op__vennootschapsbelasting<Annotation>> = [true, $p_correctie__op__vennootschapsbelasting]
                            return {
                                'correctie op vennootschapsbelasting': $p_correctie__op__vennootschapsbelasting,
                            }
                        })])
                        case 'opbrengsten': return pl.ss($, ($) => ['opbrengsten', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_zijde: pt.OptionalValue<g_out.T.Stamdata.resultaat.grootboekrekeningen.D.zijde<Annotation>> = [true, $p_zijde]
                return {
                    'hoofdcategorie': $p_hoofdcategorie,
                    'subcategorie': $p_subcategorie,
                    'zijde': $p_zijde,
                }
            })))
            const $v_grootboekrekeningen: pt.OptionalValue<g_out.T.Stamdata.resultaat.grootboekrekeningen<Annotation>> = [true, $p_grootboekrekeningen]
            return {
                'correctietypes vennootschapsbelasting': $p_correctietypes__vennootschapsbelasting,
                'grootboekrekeningen': $p_grootboekrekeningen,
                'hoofdcategorieen': $p_hoofdcategorieen,
                'hoofdcategorieen fiscus': $p_hoofdcategorieen__fiscus,
            }
        }))
        const $v_resultaat: pt.OptionalValue<g_out.T.Stamdata.resultaat<Annotation>> = [true, $p_resultaat]
        const $p_BTW_micategorieen: g_out.T.Stamdata.BTW_micategorieen<Annotation> = pl.cc($['BTW-categorieen'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_BTW_miheffing: g_out.T.Stamdata.BTW_micategorieen.D.BTW_miheffing<Annotation> = pl.cc($['BTW-heffing'], ($) => pl.cc($, ($): g_out.T.Stamdata.BTW_micategorieen.D.BTW_miheffing<Annotation> => {
                switch ($[0]) {
                    case 'ja': return pl.ss($, ($) => ['ja', pl.cc($, ($) => {
                        const $p_BTW_mipromillage: g_out.T.Stamdata.BTW_micategorieen.D.BTW_miheffing.ja.BTW_mipromillage<Annotation> = pl.cc($['BTW-promillage'], ($) => $)
                        const $v_BTW_mipromillage: pt.OptionalValue<g_out.T.Stamdata.BTW_micategorieen.D.BTW_miheffing.ja.BTW_mipromillage<Annotation>> = [true, $p_BTW_mipromillage]
                        return {
                            'BTW-promillage': $p_BTW_mipromillage,
                        }
                    })])
                    case 'nee': return pl.ss($, ($) => ['nee', pl.cc($, ($) => {
                        return null
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_BTW_miheffing: pt.OptionalValue<g_out.T.Stamdata.BTW_micategorieen.D.BTW_miheffing<Annotation>> = [true, $p_BTW_miheffing]
            return {
                'BTW-heffing': $p_BTW_miheffing,
            }
        })))
        const $v_BTW_micategorieen: pt.OptionalValue<g_out.T.Stamdata.BTW_micategorieen<Annotation>> = [true, $p_BTW_micategorieen]
        const $p_klanten: g_out.T.Stamdata.klanten<Annotation> = pl.cc($['klanten'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_projecten: g_out.T.Stamdata.klanten.D.projecten<Annotation> = pl.cc($['projecten'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_offertes: g_out.T.Stamdata.klanten.D.projecten.D.offertes<Annotation> = pl.cc($['offertes'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p_opbrengsten: g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten<Annotation> = pl.cc($['opbrengsten'], ($) => $.map(($) => pl.cc($, ($) => {
                        const $p__ltype: g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten.D._ltype<Annotation> => {
                            switch ($[0]) {
                                case 'project': return pl.ss($, ($) => ['project', pl.cc($, ($) => {
                                    const $p_betaaldatum: g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten.D._ltype.project.betaaldatum<Annotation> = pl.cc($['betaaldatum'], ($) => $)
                                    const $v_betaaldatum: pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten.D._ltype.project.betaaldatum<Annotation>> = [true, $p_betaaldatum]
                                    const $p_bedrag: g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten.D._ltype.project.bedrag<Annotation> = pl.cc($['bedrag'], ($) => $)
                                    const $v_bedrag: pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten.D._ltype.project.bedrag<Annotation>> = [true, $p_bedrag]
                                    return {
                                        'bedrag': $p_bedrag,
                                        'betaaldatum': $p_betaaldatum,
                                    }
                                })])
                                default: return pl.au($[0])
                            }
                        }))
                        const $v__ltype: pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten.D._ltype<Annotation>> = [true, $p__ltype]
                        return {
                            'type': $p__ltype,
                        }
                    })))
                    const $v_opbrengsten: pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D.offertes.D.opbrengsten<Annotation>> = [true, $p_opbrengsten]
                    return {
                        'opbrengsten': $p_opbrengsten,
                    }
                })))
                const $v_offertes: pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten.D.offertes<Annotation>> = [true, $p_offertes]
                return {
                    'offertes': $p_offertes,
                }
            })))
            const $v_projecten: pt.OptionalValue<g_out.T.Stamdata.klanten.D.projecten<Annotation>> = [true, $p_projecten]
            const $p_licentieovereenkomsten: g_out.T.Stamdata.klanten.D.licentieovereenkomsten<Annotation> = pl.cc($['licentieovereenkomsten'], ($) => $.map(($) => pl.cc($, ($) => {
                const $p_periodes: g_out.T.Stamdata.klanten.D.licentieovereenkomsten.D.periodes<Annotation> = pl.cc($['periodes'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p_bedrag: g_out.T.Stamdata.klanten.D.licentieovereenkomsten.D.periodes.D.bedrag<Annotation> = pl.cc($['bedrag'], ($) => $)
                    const $v_bedrag: pt.OptionalValue<g_out.T.Stamdata.klanten.D.licentieovereenkomsten.D.periodes.D.bedrag<Annotation>> = [true, $p_bedrag]
                    return {
                        'bedrag': $p_bedrag,
                    }
                })))
                const $v_periodes: pt.OptionalValue<g_out.T.Stamdata.klanten.D.licentieovereenkomsten.D.periodes<Annotation>> = [true, $p_periodes]
                return {
                    'periodes': $p_periodes,
                }
            })))
            const $v_licentieovereenkomsten: pt.OptionalValue<g_out.T.Stamdata.klanten.D.licentieovereenkomsten<Annotation>> = [true, $p_licentieovereenkomsten]
            return {
                'licentieovereenkomsten': $p_licentieovereenkomsten,
                'projecten': $p_projecten,
            }
        })))
        const $v_klanten: pt.OptionalValue<g_out.T.Stamdata.klanten<Annotation>> = [true, $p_klanten]
        const $p_medewerkers: g_out.T.Stamdata.medewerkers<Annotation> = pl.cc($['medewerkers'], ($) => $.map(($) => pl.cc($, ($) => {
            return null
        })))
        const $v_medewerkers: pt.OptionalValue<g_out.T.Stamdata.medewerkers<Annotation>> = [true, $p_medewerkers]
        const $p_leveranciers: g_out.T.Stamdata.leveranciers<Annotation> = pl.cc($['leveranciers'], ($) => $.map(($) => pl.cc($, ($) => {
            return null
        })))
        const $v_leveranciers: pt.OptionalValue<g_out.T.Stamdata.leveranciers<Annotation>> = [true, $p_leveranciers]
        const $p_bankrekeningen: g_out.T.Stamdata.bankrekeningen<Annotation> = pl.cc($['bankrekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
            return null
        })))
        const $v_bankrekeningen: pt.OptionalValue<g_out.T.Stamdata.bankrekeningen<Annotation>> = [true, $p_bankrekeningen]
        const $p_informele__rekeningen: g_out.T.Stamdata.informele__rekeningen<Annotation> = pl.cc($['informele rekeningen'], ($) => $.map(($) => pl.cc($, ($) => {
            return null
        })))
        const $v_informele__rekeningen: pt.OptionalValue<g_out.T.Stamdata.informele__rekeningen<Annotation>> = [true, $p_informele__rekeningen]
        return {
            'balans': $p_balans,
            'bankrekeningen': $p_bankrekeningen,
            'BTW-categorieen': $p_BTW_micategorieen,
            'gebruikers': $p_gebruikers,
            'informele rekeningen': $p_informele__rekeningen,
            'klanten': $p_klanten,
            'leveranciers': $p_leveranciers,
            'medewerkers': $p_medewerkers,
            'resultaat': $p_resultaat,
        }
    })
}