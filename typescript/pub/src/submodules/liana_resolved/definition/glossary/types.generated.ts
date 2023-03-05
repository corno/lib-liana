import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace Model {
        
        export namespace root {
            
            export type annotation<GAnnotation> = GAnnotation
            
            export type key<GAnnotation> = string
        }
        
        export type root<GAnnotation> = {
            readonly 'annotation': GAnnotation
            readonly 'key': string
        }
        
        export type type__library<GAnnotation> = T.Type__Library<GAnnotation>
    }
    
    export type Model<GAnnotation> = {
        readonly 'root': {
            readonly 'annotation': GAnnotation
            readonly 'key': string
        }
        readonly 'type library': T.Type__Library<GAnnotation>
    }
    
    export namespace Reference {
        
        export namespace global__type {
            
            export type annotation<GAnnotation> = GAnnotation
            
            export type key<GAnnotation> = string
        }
        
        export type global__type<GAnnotation> = {
            readonly 'annotation': GAnnotation
            readonly 'key': string
        }
        
        export namespace path {
            
            export namespace A {
                
                export namespace array {}
                
                export type array<GAnnotation> = null
                
                export namespace dictionary {}
                
                export type dictionary<GAnnotation> = null
                
                export namespace group {
                    
                    export namespace property {
                        
                        export type annotation<GAnnotation> = GAnnotation
                        
                        export type key<GAnnotation> = string
                    }
                    
                    export type property<GAnnotation> = {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }
                
                export type group<GAnnotation> = {
                    readonly 'property': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }
                
                export namespace optional {}
                
                export type optional<GAnnotation> = null
                
                export namespace tagged__union {
                    
                    export namespace option {
                        
                        export type annotation<GAnnotation> = GAnnotation
                        
                        export type key<GAnnotation> = string
                    }
                    
                    export type option<GAnnotation> = {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }
                
                export type tagged__union<GAnnotation> = {
                    readonly 'option': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }
            }
            
            export type A<GAnnotation> = 
                | ['array', null]
                | ['dictionary', null]
                | ['group', {
                    readonly 'property': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }]
                | ['optional', null]
                | ['tagged union', {
                    readonly 'option': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }]
        }
        
        export type path<GAnnotation> = pt.Array<
            | ['array', null]
            | ['dictionary', null]
            | ['group', {
                readonly 'property': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }]
            | ['optional', null]
            | ['tagged union', {
                readonly 'option': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }]
        >
    }
    
    export type Reference<GAnnotation> = {
        readonly 'global type': {
            readonly 'annotation': GAnnotation
            readonly 'key': string
        }
        readonly 'path': pt.Array<
            | ['array', null]
            | ['dictionary', null]
            | ['group', {
                readonly 'property': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }]
            | ['optional', null]
            | ['tagged union', {
                readonly 'option': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }]
        >
    }
    
    export namespace Terminal {
        
        export namespace constrained {
            
            export namespace no {
                
                export namespace _ltype {
                    
                    export type annotation<GAnnotation> = GAnnotation
                    
                    export type key<GAnnotation> = string
                }
                
                export type _ltype<GAnnotation> = {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }
            
            export type no<GAnnotation> = {
                readonly 'type': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }
            
            export type yes<GAnnotation> = T.Reference<GAnnotation>
        }
        
        export type constrained<GAnnotation> = 
            | ['no', {
                readonly 'type': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }]
            | ['yes', T.Reference<GAnnotation>]
    }
    
    export type Terminal<GAnnotation> = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }]
            | ['yes', T.Reference<GAnnotation>]
    }
    
    export namespace Type {
        
        export namespace array {
            
            export type _ltype<GAnnotation> = T.Type<GAnnotation>
        }
        
        export type array<GAnnotation> = {
            readonly 'type': T.Type<GAnnotation>
        }
        
        export namespace component {
            
            export namespace arguments {
                
                export namespace D {}
                
                export type D<GAnnotation> = null
            }
            
            export type arguments<GAnnotation> = pt.Dictionary<null>
            
            export namespace context {
                
                export namespace _limport {
                    
                    export namespace library {
                        
                        export type annotation<GAnnotation> = GAnnotation
                        
                        export type key<GAnnotation> = string
                    }
                    
                    export type library<GAnnotation> = {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }
                
                export type _limport<GAnnotation> = {
                    readonly 'library': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }
                
                export namespace local {}
                
                export type local<GAnnotation> = null
            }
            
            export type context<GAnnotation> = 
                | ['import', {
                    readonly 'library': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }]
                | ['local', null]
            
            export namespace _ltype {
                
                export type annotation<GAnnotation> = GAnnotation
                
                export type key<GAnnotation> = string
            }
            
            export type _ltype<GAnnotation> = {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
        }
        
        export type component<GAnnotation> = {
            readonly 'arguments': pt.Dictionary<null>
            readonly 'context': 
                | ['import', {
                    readonly 'library': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }]
                | ['local', null]
            readonly 'type': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
        }
        
        export namespace dictionary {
            
            export type key<GAnnotation> = T.Terminal<GAnnotation>
            
            export type _ltype<GAnnotation> = T.Type<GAnnotation>
        }
        
        export type dictionary<GAnnotation> = {
            readonly 'key': T.Terminal<GAnnotation>
            readonly 'type': T.Type<GAnnotation>
        }
        
        export namespace group {
            
            export namespace properties {
                
                export namespace D {
                    
                    export type _ltype<GAnnotation> = T.Type<GAnnotation>
                }
                
                export type D<GAnnotation> = {
                    readonly 'type': T.Type<GAnnotation>
                }
            }
            
            export type properties<GAnnotation> = pt.Dictionary<{
                readonly 'type': T.Type<GAnnotation>
            }>
        }
        
        export type group<GAnnotation> = {
            readonly 'properties': pt.Dictionary<{
                readonly 'type': T.Type<GAnnotation>
            }>
        }
        
        export namespace optional {
            
            export type _ltype<GAnnotation> = T.Type<GAnnotation>
        }
        
        export type optional<GAnnotation> = {
            readonly 'type': T.Type<GAnnotation>
        }
        
        export namespace tagged__union {
            
            export namespace _ldefault {
                
                export type annotation<GAnnotation> = GAnnotation
                
                export type key<GAnnotation> = string
            }
            
            export type _ldefault<GAnnotation> = {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
            
            export namespace options {
                
                export type D<GAnnotation> = T.Type<GAnnotation>
            }
            
            export type options<GAnnotation> = pt.Dictionary<T.Type<GAnnotation>>
        }
        
        export type tagged__union<GAnnotation> = {
            readonly 'default': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Type<GAnnotation>>
        }
        
        export type terminal<GAnnotation> = T.Terminal<GAnnotation>
    }
    
    export type Type<GAnnotation> = 
        | ['array', {
            readonly 'type': T.Type<GAnnotation>
        }]
        | ['component', {
            readonly 'arguments': pt.Dictionary<null>
            readonly 'context': 
                | ['import', {
                    readonly 'library': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }]
                | ['local', null]
            readonly 'type': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
        }]
        | ['dictionary', {
            readonly 'key': T.Terminal<GAnnotation>
            readonly 'type': T.Type<GAnnotation>
        }]
        | ['group', {
            readonly 'properties': pt.Dictionary<{
                readonly 'type': T.Type<GAnnotation>
            }>
        }]
        | ['optional', {
            readonly 'type': T.Type<GAnnotation>
        }]
        | ['tagged union', {
            readonly 'default': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<T.Type<GAnnotation>>
        }]
        | ['terminal', T.Terminal<GAnnotation>]
    
    export namespace Type__Library {
        
        export namespace global__types {
            
            export namespace D {
                
                export namespace parameters {
                    
                    export namespace D {}
                    
                    export type D<GAnnotation> = null
                }
                
                export type parameters<GAnnotation> = pt.Dictionary<null>
                
                export type _ltype<GAnnotation> = T.Type<GAnnotation>
            }
            
            export type D<GAnnotation> = {
                readonly 'parameters': pt.Dictionary<null>
                readonly 'type': T.Type<GAnnotation>
            }
        }
        
        export type global__types<GAnnotation> = pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<null>
            readonly 'type': T.Type<GAnnotation>
        }>
        
        export namespace imports {
            
            export namespace D {}
            
            export type D<GAnnotation> = null
        }
        
        export type imports<GAnnotation> = pt.Dictionary<null>
        
        export namespace terminal__types {
            
            export namespace D {}
            
            export type D<GAnnotation> = null
        }
        
        export type terminal__types<GAnnotation> = pt.Dictionary<null>
    }
    
    export type Type__Library<GAnnotation> = {
        readonly 'global types': pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<null>
            readonly 'type': T.Type<GAnnotation>
        }>
        readonly 'imports': pt.Dictionary<null>
        readonly 'terminal types': pt.Dictionary<null>
    }
}