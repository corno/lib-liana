import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Model {
        
        export namespace root {
            
            export type annotation<GPAnnotation> = GPAnnotation
            
            export type key<GPAnnotation> = string
        }
        
        export type root<GPAnnotation> = {
            readonly 'annotation': GPAnnotation
            readonly 'key': string
        }
        
        export type type__library<GPAnnotation> = T.Type__Library<GPAnnotation>
    }
    
    export type Model<GPAnnotation> = {
        readonly 'root': {
            readonly 'annotation': GPAnnotation
            readonly 'key': string
        }
        readonly 'type library': T.Type__Library<GPAnnotation>
    }
    
    export namespace Reference {}
    
    export type Reference<GPAnnotation> = null
    
    export namespace String {
        
        export namespace constrained {
            
            export namespace no {
                
                export namespace _ltype {
                    
                    export type annotation<GPAnnotation> = GPAnnotation
                    
                    export type key<GPAnnotation> = string
                }
                
                export type _ltype<GPAnnotation> = {
                    readonly 'annotation': GPAnnotation
                    readonly 'key': string
                }
            }
            
            export type no<GPAnnotation> = {
                readonly 'type': {
                    readonly 'annotation': GPAnnotation
                    readonly 'key': string
                }
            }
            
            export type yes<GPAnnotation> = T.Reference<GPAnnotation>
        }
        
        export type constrained<GPAnnotation> = 
            | ['no', {
                readonly 'type': {
                    readonly 'annotation': GPAnnotation
                    readonly 'key': string
                }
            }]
            | ['yes', T.Reference<GPAnnotation>]
    }
    
    export type String<GPAnnotation> = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': {
                    readonly 'annotation': GPAnnotation
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
        
        export type _lboolean<GPAnnotation> = null
        
        export namespace component {
            
            export namespace arguments {
                
                export namespace D {}
                
                export type D<GPAnnotation> = null
            }
            
            export type arguments<GPAnnotation> = pt.Dictionary<null>
            
            export namespace context {
                
                export namespace _limport {
                    
                    export namespace library {
                        
                        export type annotation<GPAnnotation> = GPAnnotation
                        
                        export type key<GPAnnotation> = string
                    }
                    
                    export type library<GPAnnotation> = {
                        readonly 'annotation': GPAnnotation
                        readonly 'key': string
                    }
                }
                
                export type _limport<GPAnnotation> = {
                    readonly 'library': {
                        readonly 'annotation': GPAnnotation
                        readonly 'key': string
                    }
                }
                
                export namespace local {}
                
                export type local<GPAnnotation> = null
            }
            
            export type context<GPAnnotation> = 
                | ['import', {
                    readonly 'library': {
                        readonly 'annotation': GPAnnotation
                        readonly 'key': string
                    }
                }]
                | ['local', null]
            
            export namespace _ltype {
                
                export type annotation<GPAnnotation> = GPAnnotation
                
                export type key<GPAnnotation> = string
            }
            
            export type _ltype<GPAnnotation> = {
                readonly 'annotation': GPAnnotation
                readonly 'key': string
            }
        }
        
        export type component<GPAnnotation> = {
            readonly 'arguments': pt.Dictionary<null>
            readonly 'context': 
                | ['import', {
                    readonly 'library': {
                        readonly 'annotation': GPAnnotation
                        readonly 'key': string
                    }
                }]
                | ['local', null]
            readonly 'type': {
                readonly 'annotation': GPAnnotation
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
                
                export type annotation<GPAnnotation> = GPAnnotation
                
                export type key<GPAnnotation> = string
            }
            
            export type _ldefault<GPAnnotation> = {
                readonly 'annotation': GPAnnotation
                readonly 'key': string
            }
            
            export namespace options {
                
                export type D<GPAnnotation> = T.Type<GPAnnotation>
            }
            
            export type options<GPAnnotation> = pt.Dictionary<T.Type<GPAnnotation>>
        }
        
        export type tagged__union<GPAnnotation> = {
            readonly 'default': {
                readonly 'annotation': GPAnnotation
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Type<GPAnnotation>>
        }
    }
    
    export type Type<GPAnnotation> = 
        | ['array', {
            readonly 'type': T.Type<GPAnnotation>
        }]
        | ['boolean', null]
        | ['component', {
            readonly 'arguments': pt.Dictionary<null>
            readonly 'context': 
                | ['import', {
                    readonly 'library': {
                        readonly 'annotation': GPAnnotation
                        readonly 'key': string
                    }
                }]
                | ['local', null]
            readonly 'type': {
                readonly 'annotation': GPAnnotation
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
                readonly 'annotation': GPAnnotation
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Type<GPAnnotation>>
        }]
    
    export namespace Type__Library {
        
        export namespace global__types {
            
            export namespace D {
                
                export namespace parameters {
                    
                    export namespace D {}
                    
                    export type D<GPAnnotation> = null
                }
                
                export type parameters<GPAnnotation> = pt.Dictionary<null>
                
                export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
            }
            
            export type D<GPAnnotation> = {
                readonly 'parameters': pt.Dictionary<null>
                readonly 'type': T.Type<GPAnnotation>
            }
        }
        
        export type global__types<GPAnnotation> = pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<null>
            readonly 'type': T.Type<GPAnnotation>
        }>
        
        export namespace imports {
            
            export namespace D {}
            
            export type D<GPAnnotation> = null
        }
        
        export type imports<GPAnnotation> = pt.Dictionary<null>
        
        export namespace string__types {
            
            export namespace D {}
            
            export type D<GPAnnotation> = null
        }
        
        export type string__types<GPAnnotation> = pt.Dictionary<null>
    }
    
    export type Type__Library<GPAnnotation> = {
        readonly 'global types': pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<null>
            readonly 'type': T.Type<GPAnnotation>
        }>
        readonly 'imports': pt.Dictionary<null>
        readonly 'string types': pt.Dictionary<null>
    }
}