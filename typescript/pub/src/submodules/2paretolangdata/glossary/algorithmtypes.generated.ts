import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_in from "../../resolved"
import * as g_out from "lib-pareto-lang-data/dist/submodules/unresolved"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type Map = ($: g_in.T.Type__Library) => g_out.T.Type__Library<g_common.T.Null>
        }
    }
}