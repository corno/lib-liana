import * as pt from 'pareto-core-types'

import * as g_fp from "lib-fountain-pen"
import * as g_liana from "../../../liana"

export namespace T {
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace MappedModel {
        
        export type model<GAnnotation> = g_liana.T.Model<T.Annotation<GAnnotation>>
        
        export namespace terminal__mapping {
            
            export namespace D {
                
                export type _lboolean<GAnnotation> = null
                
                export type _lnumber<GAnnotation> = null
                
                export type _lstring<GAnnotation> = null
            }
            
            export type D<GAnnotation> = 
                | ['boolean', null]
                | ['number', null]
                | ['string', null]
        }
        
        export type terminal__mapping<GAnnotation> = pt.Dictionary<
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
        >
    }
    
    export type MappedModel<GAnnotation> = {
        readonly 'model': g_liana.T.Model<T.Annotation<GAnnotation>>
        readonly 'terminal mapping': pt.Dictionary<
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
        >
    }
}