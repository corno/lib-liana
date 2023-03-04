import * as pt from 'pareto-core-types'

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
import * as gcommon from "glo-pareto-common"
import * as gliana from "../../../liana"
import * as gmain from "res-pareto-main"

export namespace T {
    
    export type Annotation<GPAnnotation> = GPAnnotation
    
    export namespace GenerateData {
        
        export type data<GPAnnotation> = T.MapData<GPAnnotation>
        
        export type path<GPAnnotation> = gcommon.T.Path
    }
    
    export type GenerateData<GPAnnotation> = {
        readonly 'data': T.MapData<GPAnnotation>
        readonly 'path': gcommon.T.Path
    }
    
    export namespace MapData {
        
        export namespace algorithms {
            
            export namespace serialize {
                
                export namespace O {}
                
                export type O<GPAnnotation> = null
            }
            
            export type serialize<GPAnnotation> = [ false ] | [ true, null]
        }
        
        export type algorithms<GPAnnotation> = {
            readonly 'serialize': [ false ] | [ true, null]
        }
        
        export type model<GPAnnotation> = T.MappedModel<GPAnnotation>
    }
    
    export type MapData<GPAnnotation> = {
        readonly 'algorithms': {
            readonly 'serialize': [ false ] | [ true, null]
        }
        readonly 'model': T.MappedModel<GPAnnotation>
    }
    
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