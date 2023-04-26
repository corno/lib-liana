import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fp from "lib-fountain-pen"
import * as g_liana from "../../liana"

export namespace N {}

export namespace T {
    
    export namespace GenerateDependencyGraphParameters {
        
        export type data<GAnnotation> = g_liana.T.Type__Library<GAnnotation>
    }
    
    export type GenerateDependencyGraphParameters<GAnnotation> = {
        readonly 'data': g_liana.T.Type__Library<GAnnotation>
    }
    
    export namespace OutAnnotation {
        
        export type internal<GAnnotation> = string
        
        export type source<GAnnotation> = GAnnotation
    }
    
    export type OutAnnotation<GAnnotation> = 
        | ['internal', string]
        | ['source', GAnnotation]
}