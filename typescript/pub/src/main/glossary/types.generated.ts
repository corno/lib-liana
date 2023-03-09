import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_liana from "../../submodules/liana"

export namespace T {
    
    export type Annotation<GAnnotation> = GAnnotation
    
    export namespace CompileParameters {
        
        export namespace outputs {
            
            export namespace A {
                
                export type data<GAnnotation> = T.MapData<GAnnotation>
                
                export type path<GAnnotation> = g_common.T.Path
            }
            
            export type A<GAnnotation> = {
                readonly 'data': T.MapData<GAnnotation>
                readonly 'path': g_common.T.Path
            }
        }
        
        export type outputs<GAnnotation> = pt.Array<{
            readonly 'data': T.MapData<GAnnotation>
            readonly 'path': g_common.T.Path
        }>
    }
    
    export type CompileParameters<GAnnotation> = {
        readonly 'outputs': pt.Array<{
            readonly 'data': T.MapData<GAnnotation>
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
    
    export namespace MapData {
        
        export type mapped__model<GAnnotation> = T.MappedModel<GAnnotation>
        
        export namespace settings {
            
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
            
            export namespace datamodel {
                
                export namespace O {
                    
                    export type annotations<GAnnotation> = boolean
                    
                    export namespace reference__mapping {
                        
                        export namespace reference {}
                        
                        export type reference<GAnnotation> = null
                        
                        export namespace reference__and__string {}
                        
                        export type reference__and__string<GAnnotation> = null
                        
                        export namespace _lstring {}
                        
                        export type _lstring<GAnnotation> = null
                    }
                    
                    export type reference__mapping<GAnnotation> = 
                        | ['reference', null]
                        | ['reference and string', null]
                        | ['string', null]
                }
                
                export type O<GAnnotation> = {
                    readonly 'annotations': boolean
                    readonly 'reference mapping': 
                        | ['reference', null]
                        | ['reference and string', null]
                        | ['string', null]
                }
            }
            
            export type datamodel<GAnnotation> = [ false ] | [ true, {
                readonly 'annotations': boolean
                readonly 'reference mapping': 
                    | ['reference', null]
                    | ['reference and string', null]
                    | ['string', null]
            }]
            
            export namespace visitor__interface {
                
                export namespace O {
                    
                    export namespace datamodel {
                        
                        export namespace exernal {
                            
                            export type location<GAnnotation> = string
                        }
                        
                        export type exernal<GAnnotation> = {
                            readonly 'location': string
                        }
                        
                        export namespace internal {}
                        
                        export type internal<GAnnotation> = null
                    }
                    
                    export type datamodel<GAnnotation> = 
                        | ['exernal', {
                            readonly 'location': string
                        }]
                        | ['internal', null]
                }
                
                export type O<GAnnotation> = {
                    readonly 'datamodel': 
                        | ['exernal', {
                            readonly 'location': string
                        }]
                        | ['internal', null]
                }
            }
            
            export type visitor__interface<GAnnotation> = [ false ] | [ true, {
                readonly 'datamodel': 
                    | ['exernal', {
                        readonly 'location': string
                    }]
                    | ['internal', null]
            }]
        }
        
        export type settings<GAnnotation> = {
            readonly 'algorithms': {
                readonly 'serialize': [ false ] | [ true, null]
            }
            readonly 'datamodel': [ false ] | [ true, {
                readonly 'annotations': boolean
                readonly 'reference mapping': 
                    | ['reference', null]
                    | ['reference and string', null]
                    | ['string', null]
            }]
            readonly 'visitor interface': [ false ] | [ true, {
                readonly 'datamodel': 
                    | ['exernal', {
                        readonly 'location': string
                    }]
                    | ['internal', null]
            }]
        }
    }
    
    export type MapData<GAnnotation> = {
        readonly 'mapped model': T.MappedModel<GAnnotation>
        readonly 'settings': {
            readonly 'algorithms': {
                readonly 'serialize': [ false ] | [ true, null]
            }
            readonly 'datamodel': [ false ] | [ true, {
                readonly 'annotations': boolean
                readonly 'reference mapping': 
                    | ['reference', null]
                    | ['reference and string', null]
                    | ['string', null]
            }]
            readonly 'visitor interface': [ false ] | [ true, {
                readonly 'datamodel': 
                    | ['exernal', {
                        readonly 'location': string
                    }]
                    | ['internal', null]
            }]
        }
    }
    
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