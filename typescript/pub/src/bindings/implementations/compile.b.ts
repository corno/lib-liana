import * as pd from 'pareto-core-dev'

import * as g_main from "../../main"

import * as a_resolve from "../../submodules/resolve"
import * as a_2glossary from "../implementation.generated"
import * as a_main from "res-pareto-main"

import { A, D } from "../api.generated"

export const $$: A.compile = <GAnnotation>($d: D.compile<GAnnotation>) => {
    return ($: g_main.T.CompileParameters<GAnnotation>) => {
        const le = a_main.$r.createErrorLogger()()
        $.outputs.__forEach(($) => {

            a_resolve.$a.resolve<GAnnotation>({
                'onError': ($) => {
                    le.data($.message)
                }
            })($.data['mapped library'].library)

            a_2glossary.$api.generateGlossary<GAnnotation>({
                'getSourceLocation': $d.getSourceLocation,
            })(
                $,
                ($) => {
                    pd.implementMe(`SKDF:SFSKDFL:SDFJ`)
                    //a_main.$r.logError
                }
            )
        })
        le.end()
    }
}
