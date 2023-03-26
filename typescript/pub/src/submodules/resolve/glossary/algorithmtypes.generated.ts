import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../liana"
import * as g_liana_resolved from "../../liana_resolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Resolve<GAnnotation> = ($: g_liana.T.Model<GAnnotation>) => g_liana_resolved.T.Model<GAnnotation>
        }
    }
}