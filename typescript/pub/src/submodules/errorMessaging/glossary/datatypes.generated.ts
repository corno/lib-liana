import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../liana"
import * as g_liana_resolved from "../../liana_resolved"
import * as g_main from "../../../main"

export namespace N {}

export namespace T {
    
    export namespace Typescript__Location {
        
        export type column = number
        
        export type file = string
        
        export type line = number
    }
    
    export type Typescript__Location = {
        readonly 'column': number
        readonly 'file': string
        readonly 'line': number
    }
}