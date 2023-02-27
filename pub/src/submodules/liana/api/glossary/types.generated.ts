import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Model {
        
        export namespace root {
            
            export type key<GPAnnotation> = string
        }
        
        export type root<GPAnnotation> = {
            readonly 'key': string
        }
        
        export type type__library<GPAnnotation> = T.Type__Library<GPAnnotation>
    }
    
    export type Model<GPAnnotation> = {
        readonly 'root': {
            readonly 'key': string
        }
        readonly 'type library': T.Type__Library<GPAnnotation>
    }
    
    export namespace Reference {}
    
    export type Reference<GPAnnotation> = {}
    
    export namespace String {
        
        export namespace constrained {
            
            export namespace no {
                
                export namespace _ltype {
                    
                    export type key<GPAnnotation> = string
                }
                
                export type _ltype<GPAnnotation> = {
                    readonly 'key': string
                }
            }
            
            export type no<GPAnnotation> = {
                readonly 'type': {
                    readonly 'key': string
                }
            }
            
            export type yes<GPAnnotation> = T.Reference<GPAnnotation>
        }
        
        export type constrained<GPAnnotation> = 
            | ['no', {
                readonly 'type': {
                    readonly 'key': string
                }
            }]
            | ['yes', T.Reference<GPAnnotation>]
    }
    
    export type String<GPAnnotation> = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': {
                    readonly 'key': string
                }
            }]
            | ['yes', T.Reference<GPAnnotation>]
    }
    
    export namespace Type {
        
        export namespace array {
            
            export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
        }
        
        export type array<GPAnnotation> = {
            readonly 'type': T.Type<GPAnnotation>
        }
        
        export namespace _lboolean {}
        
        export type _lboolean<GPAnnotation> = {}
        
        export namespace component {
            
            export namespace arguments {
                
                export namespace D {}
                
                export type D<GPAnnotation> = {}
            }
            
            export type arguments<GPAnnotation> = pt.Dictionary<{}>
            
            export namespace context {
                
                export namespace _limport {
                    
                    export namespace library {
                        
                        export type key<GPAnnotation> = string
                    }
                    
                    export type library<GPAnnotation> = {
                        readonly 'key': string
                    }
                }
                
                export type _limport<GPAnnotation> = {
                    readonly 'library': {
                        readonly 'key': string
                    }
                }
                
                export namespace local {}
                
                export type local<GPAnnotation> = {}
            }
            
            export type context<GPAnnotation> = 
                | ['import', {
                    readonly 'library': {
                        readonly 'key': string
                    }
                }]
                | ['local', {}]
            
            export namespace _ltype {
                
                export type key<GPAnnotation> = string
            }
            
            export type _ltype<GPAnnotation> = {
                readonly 'key': string
            }
        }
        
        export type component<GPAnnotation> = {
            readonly 'arguments': pt.Dictionary<{}>
            readonly 'context': 
                | ['import', {
                    readonly 'library': {
                        readonly 'key': string
                    }
                }]
                | ['local', {}]
            readonly 'type': {
                readonly 'key': string
            }
        }
        
        export namespace dictionary {
            
            export type key<GPAnnotation> = T.String<GPAnnotation>
            
            export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
        }
        
        export type dictionary<GPAnnotation> = {
            readonly 'key': T.String<GPAnnotation>
            readonly 'type': T.Type<GPAnnotation>
        }
        
        export namespace group {
            
            export namespace properties {
                
                export namespace D {
                    
                    export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
                }
                
                export type D<GPAnnotation> = {
                    readonly 'type': T.Type<GPAnnotation>
                }
            }
            
            export type properties<GPAnnotation> = pt.Dictionary<{
                readonly 'type': T.Type<GPAnnotation>
            }>
        }
        
        export type group<GPAnnotation> = {
            readonly 'properties': pt.Dictionary<{
                readonly 'type': T.Type<GPAnnotation>
            }>
        }
        
        export namespace optional {
            
            export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
        }
        
        export type optional<GPAnnotation> = {
            readonly 'type': T.Type<GPAnnotation>
        }
        
        export type _lstring<GPAnnotation> = T.String<GPAnnotation>
        
        export namespace tagged__union {
            
            export namespace _ldefault {
                
                export type key<GPAnnotation> = string
            }
            
            export type _ldefault<GPAnnotation> = {
                readonly 'key': string
            }
            
            export namespace options {
                
                export type D<GPAnnotation> = T.Type<GPAnnotation>
            }
            
            export type options<GPAnnotation> = pt.Dictionary<T.Type<GPAnnotation>>
        }
        
        export type tagged__union<GPAnnotation> = {
            readonly 'default': {
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Type<GPAnnotation>>
        }
    }
    
    export type Type<GPAnnotation> = 
        | ['array', {
            readonly 'type': T.Type<GPAnnotation>
        }]
        | ['boolean', {}]
        | ['component', {
            readonly 'arguments': pt.Dictionary<{}>
            readonly 'context': 
                | ['import', {
                    readonly 'library': {
                        readonly 'key': string
                    }
                }]
                | ['local', {}]
            readonly 'type': {
                readonly 'key': string
            }
        }]
        | ['dictionary', {
            readonly 'key': T.String<GPAnnotation>
            readonly 'type': T.Type<GPAnnotation>
        }]
        | ['group', {
            readonly 'properties': pt.Dictionary<{
                readonly 'type': T.Type<GPAnnotation>
            }>
        }]
        | ['optional', {
            readonly 'type': T.Type<GPAnnotation>
        }]
        | ['string', T.String<GPAnnotation>]
        | ['tagged union', {
            readonly 'default': {
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Type<GPAnnotation>>
        }]
    
    export namespace Type__Library {
        
        export namespace global__types {
            
            export namespace D {
                
                export namespace parameters {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = {}
                }
                
                export type parameters<GPAnnotation> = pt.Dictionary<{}>
                
                export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'parameters': pt.Dictionary<{}>
                readonly 'type': T.Type<GPAnnotation>
            }
        }
        
        export type global__types<GPAnnotation> = pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<{}>
            readonly 'type': T.Type<GPAnnotation>
        }>
        
        export namespace imports {
            
            export namespace D {}
            
            export type D<GPAnnotation> = {}
        }
        
        export type imports<GPAnnotation> = pt.Dictionary<{}>
        
        export namespace string__types {
            
            export namespace D {}
            
            export type D<GPAnnotation> = {}
        }
        
        export type string__types<GPAnnotation> = pt.Dictionary<{}>
    }
    
    export type Type__Library<GPAnnotation> = {
        readonly 'global types': pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<{}>
            readonly 'type': T.Type<GPAnnotation>
        }>
        readonly 'imports': pt.Dictionary<{}>
        readonly 'string types': pt.Dictionary<{}>
    }
}