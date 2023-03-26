import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_algorithm from "../../algorithm_temp"
import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace P {
            export type SerializeImplementation<GAnnotation> = ($: g_algorithm.T.Implementation<GAnnotation>, $i: g_fp.SYNC.I.Directory) => void
        }
    }
}