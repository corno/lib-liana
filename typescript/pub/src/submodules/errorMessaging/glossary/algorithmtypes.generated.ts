import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../liana"
import * as g_liana_resolved from "../../liana_resolved"
import * as g_main from "../../../main"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type CreateErrorMessage = ($: g_main.T.Error<T.Typescript__Location>) => g_common.T.String
        }
    }
}