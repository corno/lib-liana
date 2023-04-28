import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../submodules/liana"
import * as g_liana2algorithm from "../../submodules/liana2algorithm"
import * as g_liana2glossary from "../../submodules/liana2glossary"

export namespace N {}

export namespace T {
    
    export namespace CompileParameters {
        
        export namespace outputs {
            
            export namespace A {
                
                export type data<GAnnotation> = g_liana2glossary.T.MapData<GAnnotation>
                
                export type path<GAnnotation> = g_common.T.Path
            }
            
            export type A<GAnnotation> = {
                readonly 'data': g_liana2glossary.T.MapData<GAnnotation>
                readonly 'path': g_common.T.Path
            }
        }
        
        export type outputs<GAnnotation> = pt.Array<{
            readonly 'data': g_liana2glossary.T.MapData<GAnnotation>
            readonly 'path': g_common.T.Path
        }>
    }
    
    export type CompileParameters<GAnnotation> = {
        readonly 'outputs': pt.Array<{
            readonly 'data': g_liana2glossary.T.MapData<GAnnotation>
            readonly 'path': g_common.T.Path
        }>
    }
    
    export namespace Error {
        
        export type annotation<GAnnotation> = GAnnotation
        
        export type message<GAnnotation> = g_common.T.String
    }
    
    export type Error<GAnnotation> = {
        readonly 'annotation': GAnnotation
        readonly 'message': g_common.T.String
    }
    
    export namespace GenerateResolverParameters {
        
        export type data<GAnnotation> = g_liana2algorithm.T.CreateResolverParameters<GAnnotation>
        
        export type path<GAnnotation> = g_common.T.Path
    }
    
    export type GenerateResolverParameters<GAnnotation> = {
        readonly 'data': g_liana2algorithm.T.CreateResolverParameters<GAnnotation>
        readonly 'path': g_common.T.Path
    }
}