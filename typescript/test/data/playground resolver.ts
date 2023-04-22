import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from ".."
import * as g_out from ".."

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