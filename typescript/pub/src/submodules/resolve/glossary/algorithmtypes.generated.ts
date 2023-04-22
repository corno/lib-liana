import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_resolved from "../../liana"
import * as g_unresolved from "../../liana_resolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Error<GAnnotation> = ($: T.Error<GAnnotation>, ) => void
    }
    
    export namespace A {
        
        
        export namespace F {
            export type Resolve<GAnnotation> = ($: g_unresolved.T.Type__Library<GAnnotation>) => g_resolved.T.Type__Library<GAnnotation>
        }
    }
}