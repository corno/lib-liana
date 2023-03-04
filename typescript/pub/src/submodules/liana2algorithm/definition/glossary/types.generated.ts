import * as pt from 'pareto-core-types'

import * as galgorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as galgorithm_temp from "../../../algorithm_temp"
import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as gliana from "../../../liana"
import * as gmain from "res-pareto-main"

export namespace T {
    
    export namespace AlgorithmSettings {
        
        export namespace serialize {
            
            export namespace O {}
            
            export type O<GPAnnotation> = null
        }
        
        export type serialize<GPAnnotation> = [ false ] | [ true, null]
    }
    
    export type AlgorithmSettings<GPAnnotation> = {
        readonly 'serialize': [ false ] | [ true, null]
    }
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace MappedModel {
        
        export type model<GPAnnotation> = gliana.T.Model<T.Annotation<GPAnnotation>>
        
        export namespace stringmapping {
            
            export namespace D {
                
                export type _lboolean<GPAnnotation> = null
                
                export type _lnumber<GPAnnotation> = null
                
                export type _lstring<GPAnnotation> = null
            }
            
            export type D<GPAnnotation> = 
                | ['boolean', null]
                | ['number', null]
                | ['string', null]
        }
        
        export type stringmapping<GPAnnotation> = pt.Dictionary<
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
        >
    }
    
    export type MappedModel<GPAnnotation> = {
        readonly 'model': gliana.T.Model<T.Annotation<GPAnnotation>>
        readonly 'stringmapping': pt.Dictionary<
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
        >
    }
    
    export namespace OutAnnotation {
        
        export type internal<GPAnnotation> = string
        
        export type source<GPAnnotation> = GPAnnotation
    }
    
    export type OutAnnotation<GPAnnotation> = 
        | ['internal', string]
        | ['source', GPAnnotation]
}