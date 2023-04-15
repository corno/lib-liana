import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_liana from "../../liana"
import * as g_liana2api from "../../liana2api"
import * as g_main from "../../../main"

export namespace N {}

export namespace T {
    
    export namespace GenerateData {
        
        export type data<GAnnotation> = T.MapData<GAnnotation>
        
        export type path<GAnnotation> = g_common.T.Path
    }
    
    export type GenerateData<GAnnotation> = {
        readonly 'data': T.MapData<GAnnotation>
        readonly 'path': g_common.T.Path
    }
    
    export namespace MapData {
        
        export type mapped__library<GAnnotation> = T.Mapped__Library<GAnnotation>
        
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
            
            export type annotations<GAnnotation> = boolean
            
            export namespace datamodel {
                
                export namespace O {
                    
                    export namespace constraints__mapping {
                        
                        export namespace constraints {
                            
                            export namespace O {
                                
                                export namespace optional {}
                                
                                export type optional<GAnnotation> = null
                                
                                export namespace required {}
                                
                                export type required<GAnnotation> = null
                            }
                            
                            export type O<GAnnotation> = 
                                | ['optional', null]
                                | ['required', null]
                        }
                        
                        export type constraints<GAnnotation> = [ false ] | [ true, 
                            | ['optional', null]
                            | ['required', null]
                        ]
                        
                        export type terminal__values<GAnnotation> = boolean
                    }
                    
                    export type constraints__mapping<GAnnotation> = {
                        readonly 'constraints': [ false ] | [ true, 
                            | ['optional', null]
                            | ['required', null]
                        ]
                        readonly 'terminal values': boolean
                    }
                }
                
                export type O<GAnnotation> = {
                    readonly 'constraints mapping': {
                        readonly 'constraints': [ false ] | [ true, 
                            | ['optional', null]
                            | ['required', null]
                        ]
                        readonly 'terminal values': boolean
                    }
                }
            }
            
            export type datamodel<GAnnotation> = [ false ] | [ true, {
                readonly 'constraints mapping': {
                    readonly 'constraints': [ false ] | [ true, 
                        | ['optional', null]
                        | ['required', null]
                    ]
                    readonly 'terminal values': boolean
                }
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
            readonly 'annotations': boolean
            readonly 'datamodel': [ false ] | [ true, {
                readonly 'constraints mapping': {
                    readonly 'constraints': [ false ] | [ true, 
                        | ['optional', null]
                        | ['required', null]
                    ]
                    readonly 'terminal values': boolean
                }
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
        readonly 'mapped library': T.Mapped__Library<GAnnotation>
        readonly 'settings': {
            readonly 'algorithms': {
                readonly 'serialize': [ false ] | [ true, null]
            }
            readonly 'annotations': boolean
            readonly 'datamodel': [ false ] | [ true, {
                readonly 'constraints mapping': {
                    readonly 'constraints': [ false ] | [ true, 
                        | ['optional', null]
                        | ['required', null]
                    ]
                    readonly 'terminal values': boolean
                }
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
    
    export namespace Mapped__Library {
        
        export type library<GAnnotation> = g_liana.T.Type__Library<GAnnotation>
        
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
    
    export type Mapped__Library<GAnnotation> = {
        readonly 'library': g_liana.T.Type__Library<GAnnotation>
        readonly 'terminal mapping': pt.Dictionary<
            | ['boolean', null]
            | ['number', null]
            | ['string', null]
        >
    }
    
    export namespace OutAnnotation {
        
        export type internal<GAnnotation> = string
        
        export type source<GAnnotation> = GAnnotation
    }
    
    export type OutAnnotation<GAnnotation> = 
        | ['internal', string]
        | ['source', GAnnotation]
}