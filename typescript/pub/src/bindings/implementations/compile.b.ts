import * as pd from 'pareto-core-dev'

import * as g_main from "../../main"

import * as a_resolve from "../../submodules/resolve"
import * as a_2glossary from "../implementation.generated"
import * as a_main from "res-pareto-main"

import { A } from "../api.generated"

export const $$: A.compile = () => {
    return <GAnnotation>($: g_main.T.CompileParameters<GAnnotation>) => {
        const le = a_main.$r.createErrorLogger()()
        $.outputs.__forEach(($) => {

            a_resolve.$a.resolve<GAnnotation>({
                'onError': ($) => {
                    le.data($.message)
                }
            })($.data['mapped model'].model)

            a_2glossary.$api.generateGlossary()(
                $,
                ($) => {
                    pd.implementMe(`SKDF:SFSKDFL:SDFJ`)
                    //a_main.$r.logError
                }
            )
        })
        le()

        
    }
}
