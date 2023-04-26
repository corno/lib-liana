import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_liana from "../../liana"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace P {
            export type GenerateDependencyGraph<GAnnotation> = ($: T.GenerateDependencyGraphParameters<GAnnotation>, $i: g_fp.SYNC.I.Block) => void
        }
    }
}