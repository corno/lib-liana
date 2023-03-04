import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
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
        
        export type mappedModel<GPAnnotation> = T.MappedModel<GPAnnotation>
        
        export namespace settings {
            
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
            
            export namespace datamodel {
                
                export namespace O {
                    
                    export type annotations<GPAnnotation> = boolean
                    
                    export type properties__optional<GPAnnotation> = boolean
                    
                    export namespace reference__mapping {
                        
                        export namespace reference {}
                        
                        export type reference<GPAnnotation> = null
                        
                        export namespace reference__and__string {}
                        
                        export type reference__and__string<GPAnnotation> = null
                        
                        export namespace _lstring {}
                        
                        export type _lstring<GPAnnotation> = null
                    }
                    
                    export type reference__mapping<GPAnnotation> = 
                        | ['reference', null]
                        | ['reference and string', null]
                        | ['string', null]
                }
                
                export type O<GPAnnotation> = {
                    readonly 'annotations': boolean
                    readonly 'properties optional': boolean
                    readonly 'reference mapping': 
                        | ['reference', null]
                        | ['reference and string', null]
                        | ['string', null]
                }
            }
            
            export type datamodel<GPAnnotation> = [ false ] | [ true, {
                readonly 'annotations': boolean
                readonly 'properties optional': boolean
                readonly 'reference mapping': 
                    | ['reference', null]
                    | ['reference and string', null]
                    | ['string', null]
            }]
            
            export namespace visitor__interface {
                
                export namespace O {
                    
                    export namespace datamodel {
                        
                        export namespace exernal {
                            
                            export type location<GPAnnotation> = string
                        }
                        
                        export type exernal<GPAnnotation> = {
                            readonly 'location': string
                        }
                        
                        export namespace internal {}
                        
                        export type internal<GPAnnotation> = null
                    }
                    
                    export type datamodel<GPAnnotation> = 
                        | ['exernal', {
                            readonly 'location': string
                        }]
                        | ['internal', null]
                }
                
                export type O<GPAnnotation> = {
                    readonly 'datamodel': 
                        | ['exernal', {
                            readonly 'location': string
                        }]
                        | ['internal', null]
                }
            }
            
            export type visitor__interface<GPAnnotation> = [ false ] | [ true, {
                readonly 'datamodel': 
                    | ['exernal', {
                        readonly 'location': string
                    }]
                    | ['internal', null]
            }]
        }
        
        export type settings<GPAnnotation> = {
            readonly 'algorithms': {
                readonly 'serialize': [ false ] | [ true, null]
            }
            readonly 'datamodel': [ false ] | [ true, {
                readonly 'annotations': boolean
                readonly 'properties optional': boolean
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
    
    export type MapData<GPAnnotation> = {
        readonly 'mappedModel': T.MappedModel<GPAnnotation>
        readonly 'settings': {
            readonly 'algorithms': {
                readonly 'serialize': [ false ] | [ true, null]
            }
            readonly 'datamodel': [ false ] | [ true, {
                readonly 'annotations': boolean
                readonly 'properties optional': boolean
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