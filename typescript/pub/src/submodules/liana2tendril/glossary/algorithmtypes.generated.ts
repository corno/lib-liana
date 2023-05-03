import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../liana"
import * as g_tendril from "../../tendril"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Map<GAnnotation> = ($: g_liana.T.Type__Library<GAnnotation>) => g_tendril.T.Type__Library<GAnnotation>
        }
    }
}