import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_main from "../../../main"
import * as g_tendril from "../../tendril"

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
        }
        
        export type settings<GAnnotation> = {
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
        }
    }
    
    export type MapData<GAnnotation> = {
        readonly 'mapped library': T.Mapped__Library<GAnnotation>
        readonly 'settings': {
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
        }
    }
    
    export namespace Mapped__Library {
        
        export type library<GAnnotation> = g_tendril.T.Type__Library<GAnnotation>
        
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
        readonly 'library': g_tendril.T.Type__Library<GAnnotation>
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