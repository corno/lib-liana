import * as pd from 'pareto-core-dev'

import * as a_resolve from "../../submodules/resolve"
import * as a_2glossary from "../implementation.generated"
import * as a_main from "res-pareto-main"

import { A } from "../api.generated"

export const $$: A.compile = () => {
    return ($, $i) => {
        $.outputs.__forEach(($) => {

            a_resolve.$a.resolve({
                'onError': $i
            })($.data['mapped model'].model)

            a_2glossary.$api.generateGlossary()(
                $,
                ($) => {
                    pd.implementMe(`SKDF:SFSKDFL:SDFJ`)
                    //a_main.$r.logError
                }
            )
        })
    }
}
