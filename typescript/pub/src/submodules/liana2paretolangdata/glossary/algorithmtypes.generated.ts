import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_in from "../../liana"
import * as g_out from "lib-pareto-lang-data/dist/submodules/unresolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Map<GAnnotation> = ($: g_in.T.Type__Library<GAnnotation>) => g_out.T.Type__Library<GAnnotation>
        }
    }
}