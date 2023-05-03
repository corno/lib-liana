import * as pt from 'pareto-core-types'

import * as g_algorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as g_algorithm_temp from "../../algorithm_temp"
import * as g_api from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_fp from "lib-fountain-pen"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_liana from "../../liana"
import * as g_main from "../../../main"
import * as g_tendril2glossary from "../../tendril2glossary"

export namespace N {}

export namespace T {
    
    export namespace AlgorithmSettings {
        
        export namespace serialize {
            
            export namespace O {}
            
            export type O<GAnnotation> = null
        }
        
        export type serialize<GAnnotation> = [ false ] | [ true, null]
    }
    
    export type AlgorithmSettings<GAnnotation> = {
        readonly 'serialize': [ false ] | [ true, null]
    }
    
    export namespace CreateResolverParameters {
        
        export type _lin<GAnnotation> = string
        
        export type model<GAnnotation> = g_liana.T.Model<GAnnotation>
        
        export namespace out {
            
            export type root<GAnnotation> = string
            
            export namespace subs {
                
                export type D<GAnnotation> = string
            }
            
            export type subs<GAnnotation> = pt.Dictionary<string>
        }
        
        export type out<GAnnotation> = {
            readonly 'root': string
            readonly 'subs': pt.Dictionary<string>
        }
    }
    
    export type CreateResolverParameters<GAnnotation> = {
        readonly 'in': string
        readonly 'model': g_liana.T.Model<GAnnotation>
        readonly 'out': {
            readonly 'root': string
            readonly 'subs': pt.Dictionary<string>
        }
    }
    
    export namespace OutAnnotation {
        
        export type internal<GAnnotation> = string
        
        export type source<GAnnotation> = GAnnotation
    }
    
    export type OutAnnotation<GAnnotation> = 
        | ['internal', string]
        | ['source', GAnnotation]
}