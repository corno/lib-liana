import * as pl from 'pareto-core-lib'

import * as g_common from "glo-pareto-common"
import * as g_liana2glossary from "../../submodules/liana2glossary"

import { $$ as t2g } from "./generateGlossaryFromTendril.b"

import { A, D } from "../api.generated"

import * as a_l2t from "../../submodules/liana2tendril"

export const $$: A.generateGlossaryFromLiana = <GAnnotation>($d: D.generateGlossaryFromLiana<GAnnotation>) => {
    return ($: g_liana2glossary.T.GenerateData<GAnnotation>, $i: g_common.SYNC.I.String) => t2g({
        'getSourceLocation': $d.getSourceLocation
    })(
        {
            'path': $.path,
            'data': {
                'settings': $.data.settings,
                'mapped library': {
                    'terminal mapping': $.data['mapped library']['terminal mapping'],
                    'library': a_l2t.$a.map<GAnnotation>()($.data['mapped library'].library)
                }
            }
        },
        $i
    )
}
