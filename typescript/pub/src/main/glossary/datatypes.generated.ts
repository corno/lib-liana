import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_liana2glossary from "../../submodules/liana2glossary"
import * as g_tendril2algorithm from "../../submodules/tendril2algorithm"
import * as g_tendril2glossary from "../../submodules/tendril2glossary"

export namespace N {}

export namespace T {
    
    export namespace Error {
        
        export type annotation<GAnnotation> = GAnnotation
        
        export type message<GAnnotation> = g_common.T.String
    }
    
    export type Error<GAnnotation> = {
        readonly 'annotation': GAnnotation
        readonly 'message': g_common.T.String
    }
}