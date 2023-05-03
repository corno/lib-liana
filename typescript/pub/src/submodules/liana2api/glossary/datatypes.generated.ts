import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"
import * as g_liana from "../../liana"
import * as g_main from "../../../main"
import * as g_pareto from "lib-pareto-typescript-project"
import * as g_tendril2glossary from "../../tendril2glossary"

export namespace N {}

export namespace T {
    
    export namespace GenerateData {
        
        export type data<GAnnotation> = g_tendril2glossary.T.MapData<GAnnotation>
        
        export type path<GAnnotation> = g_common.T.Path
    }
    
    export type GenerateData<GAnnotation> = {
        readonly 'data': g_tendril2glossary.T.MapData<GAnnotation>
        readonly 'path': g_common.T.Path
    }
    
    export namespace OutAnnotation {
        
        export type internal<GAnnotation> = string
        
        export type source<GAnnotation> = GAnnotation
    }
    
    export type OutAnnotation<GAnnotation> = 
        | ['internal', string]
        | ['source', GAnnotation]
}