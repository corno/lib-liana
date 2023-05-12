import * as pd from 'pareto-core-dev'
import * as pl from 'pareto-core-lib'

import * as g_main from "../../main"

import * as a_resolve from "../../submodules/resolve"
import * as a_2glossary from "../implementation.generated"
import * as a_main from "res-pareto-main"

import { A, D } from "../api.generated"

export const $$: A.compile = <GAnnotation>($d: D.compile<GAnnotation>) => {
    return ($: g_main.T.CompileParameters<GAnnotation>) => {
        const le = a_main.$r.createErrorLogger().construct()
        $.outputs.__forEach(($) => {

            // a_resolve.$a.resolve<GAnnotation>({
            //     'onError': ($) => {
            //         le.data($.message)
            //     }
            // })($.data['mapped library'].library)
            const path = $.path
            pl.cc($.data, ($) => {
                switch ($[0]) {
                    case 'liana':
                        pl.ss($, ($) => {

                            a_2glossary.$api.generateGlossaryFromLiana<GAnnotation>({
                                'serializeAnnotation': $d.serializeAnnotation,
                            })(
                                {
                                    'data': $,
                                    'path': path,
                                },
                                ($) => {
                                    pd.implementMe(`SKDF:SFSKDFL:SDFJ`)
                                    //a_main.$r.logError
                                }
                            )
                        })
                        break
                    case 'tendril':
                        pl.ss($, ($) => {

                            a_2glossary.$api.generateGlossaryFromTendril<GAnnotation>({
                                'serializeAnnotation': $d.serializeAnnotation,
                            })(
                                {
                                    'data': $,
                                    'path': path,
                                },
                                ($) => {
                                    pd.implementMe(`SKDF:SFSKDFL:SDFJ`)
                                    //a_main.$r.logError
                                }
                            )
                        })
                        break
                    default: pl.au($[0])
                }
            })

        })
        le.end()
    }
}
