import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../../liana"
import * as g_liana_resolved from "../../../liana_resolved"

export namespace T {
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace Error {
        
        export type annotation<GAnnotation> = GAnnotation
        
        export type message<GAnnotation> = g_common.T.String
    }
    
    export type Error<GAnnotation> = {
        readonly 'annotation': GAnnotation
        readonly 'message': g_common.T.String
    }
}