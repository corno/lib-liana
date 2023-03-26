import * as pt from 'pareto-core-types'

import * as g_algorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as g_algorithm_temp from "../../algorithm_temp"
import * as g_api from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_liana from "../../liana"
import * as g_main from "../../../main"

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
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace OutAnnotation {
        
        export type internal<GAnnotation> = string
        
        export type source<GAnnotation> = GAnnotation
    }
    
    export type OutAnnotation<GAnnotation> = 
        | ['internal', string]
        | ['source', GAnnotation]
}