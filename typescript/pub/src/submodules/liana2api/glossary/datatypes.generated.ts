import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"
import * as g_liana from "../../liana"
import * as g_main from "../../../main"
import * as g_pareto from "lib-pareto-typescript-project"

export namespace N {}

export namespace T {
    
    export namespace GenerateData {
        
        export type data<GAnnotation> = T.MapData<GAnnotation>
        
        export type path<GAnnotation> = g_common.T.Path
    }
    
    export type GenerateData<GAnnotation> = {
        readonly 'data': T.MapData<GAnnotation>
        readonly 'path': g_common.T.Path
    }
    
    export namespace MapData {
        
        export namespace algorithms {
            
            export namespace serialize {
                
                export namespace O {}
                
                export type O<GAnnotation> = null
            }
            
            export type serialize<GAnnotation> = [ false ] | [ true, null]
        }
        
        export type algorithms<GAnnotation> = {
            readonly 'serialize': [ false ] | [ true, null]
        }
        
        export type model<GAnnotation> = g_main.T.Mapped__Library<GAnnotation>
    }
    
    export type MapData<GAnnotation> = {
        readonly 'algorithms': {
            readonly 'serialize': [ false ] | [ true, null]
        }
        readonly 'model': g_main.T.Mapped__Library<GAnnotation>
    }
    
    export namespace OutAnnotation {
        
        export type internal<GAnnotation> = string
        
        export type source<GAnnotation> = GAnnotation
    }
    
    export type OutAnnotation<GAnnotation> = 
        | ['internal', string]
        | ['source', GAnnotation]
}