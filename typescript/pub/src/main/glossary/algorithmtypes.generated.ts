import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_liana2glossary from "../../submodules/liana2glossary"
import * as g_tendril2algorithm from "../../submodules/tendril2algorithm"
import * as g_tendril2glossary from "../../submodules/tendril2glossary"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Nothing<GAnnotation> = null
        
        export type OnError<GAnnotation> = ($: T.Error<GAnnotation>, ) => void
    }
}