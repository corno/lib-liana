import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../submodules/liana"
import * as g_liana2glossary from "../../submodules/liana2glossary"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type OnError<GAnnotation> = ($: T.Error<GAnnotation>, ) => void
    }
    
    export namespace A {
        
        
        export namespace P {
            export type Compile<GAnnotation> = ($: T.CompileParameters<GAnnotation>, $i: SYNC.I.OnError<GAnnotation>) => void
        }
    }
}