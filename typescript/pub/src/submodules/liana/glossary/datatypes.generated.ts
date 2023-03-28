import * as pt from 'pareto-core-types'


export namespace N {
    
    export namespace Model {
        
        export namespace N {}
        
        export namespace T {}
    }
    
    export namespace Reference {
        
        export namespace N {}
        
        export namespace T {}
    }
    
    export namespace Terminal {
        
        export namespace N {}
        
        export namespace T {}
    }
    
    export namespace Type {
        
        export namespace N {}
        
        export namespace T {}
    }
    
    export namespace Type_$_$Library {
        
        export namespace N {}
        
        export namespace T {}
    }
    
    export namespace Type_$_$Path {
        
        export namespace N {}
        
        export namespace T {}
    }
}

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
        
        export namespace _ltype {
            
            export namespace parameter {
                
                export namespace parameter {
                    
                    export type annotation<GAnnotation> = GAnnotation
                    
                    export type key<GAnnotation> = string
                }
                
                export type parameter<GAnnotation> = {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }
            
            export type parameter<GAnnotation> = {
                readonly 'parameter': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }
            
            export namespace relative {}
            
            export type relative<GAnnotation> = null
            
            export namespace tbd {}
            
            export type tbd<GAnnotation> = null
        }
        
        export type _ltype<GAnnotation> = 
            | ['parameter', {
                readonly 'parameter': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }]
            | ['relative', null]
            | ['tbd', null]
        
        export type type__path<GAnnotation> = T.Type__Path<GAnnotation>
    }
    
    export type Reference<GAnnotation> = {
        readonly 'type': 
            | ['parameter', {
                readonly 'parameter': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }]
            | ['relative', null]
            | ['tbd', null]
        readonly 'type path': T.Type__Path<GAnnotation>
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
                
                export namespace D {
                    
                    export namespace constrained {
                        
                        export namespace O {
                            
                            export type type__path<GAnnotation> = T.Type__Path<GAnnotation>
                        }
                        
                        export type O<GAnnotation> = {
                            readonly 'type path': T.Type__Path<GAnnotation>
                        }
                    }
                    
                    export type constrained<GAnnotation> = [ false ] | [ true, {
                        readonly 'type path': T.Type__Path<GAnnotation>
                    }]
                    
                    export type _ltype<GAnnotation> = T.Type<GAnnotation>
                }
                
                export type D<GAnnotation> = {
                    readonly 'constrained': [ false ] | [ true, {
                        readonly 'type path': T.Type__Path<GAnnotation>
                    }]
                    readonly 'type': T.Type<GAnnotation>
                }
            }
            
            export type options<GAnnotation> = pt.Dictionary<{
                readonly 'constrained': [ false ] | [ true, {
                    readonly 'type path': T.Type__Path<GAnnotation>
                }]
                readonly 'type': T.Type<GAnnotation>
            }>
        }
        
        export type tagged__union<GAnnotation> = {
            readonly 'default': {
                readonly 'annotation': GAnnotation
                readonly 'key': string
            }
            readonly 'options': pt.Dictionary<{
                readonly 'constrained': [ false ] | [ true, {
                    readonly 'type path': T.Type__Path<GAnnotation>
                }]
                readonly 'type': T.Type<GAnnotation>
            }>
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
            readonly 'options': pt.Dictionary<{
                readonly 'constrained': [ false ] | [ true, {
                    readonly 'type path': T.Type__Path<GAnnotation>
                }]
                readonly 'type': T.Type<GAnnotation>
            }>
        }]
        | ['terminal', T.Terminal<GAnnotation>]
    
    export namespace Type__Library {
        
        export namespace global__types {
            
            export namespace D {
                
                export namespace parameters {
                    
                    export namespace D {
                        
                        export namespace global__type {
                            
                            export type annotation<GAnnotation> = GAnnotation
                            
                            export type key<GAnnotation> = string
                        }
                        
                        export type global__type<GAnnotation> = {
                            readonly 'annotation': GAnnotation
                            readonly 'key': string
                        }
                    }
                    
                    export type D<GAnnotation> = {
                        readonly 'global type': {
                            readonly 'annotation': GAnnotation
                            readonly 'key': string
                        }
                    }
                }
                
                export type parameters<GAnnotation> = pt.Dictionary<{
                    readonly 'global type': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }>
                
                export type _ltype<GAnnotation> = T.Type<GAnnotation>
            }
            
            export type D<GAnnotation> = {
                readonly 'parameters': pt.Dictionary<{
                    readonly 'global type': {
                        readonly 'annotation': GAnnotation
                        readonly 'key': string
                    }
                }>
                readonly 'type': T.Type<GAnnotation>
            }
        }
        
        export type global__types<GAnnotation> = pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<{
                readonly 'global type': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }>
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
            readonly 'parameters': pt.Dictionary<{
                readonly 'global type': {
                    readonly 'annotation': GAnnotation
                    readonly 'key': string
                }
            }>
            readonly 'type': T.Type<GAnnotation>
        }>
        readonly 'imports': pt.Dictionary<null>
        readonly 'terminal types': pt.Dictionary<null>
    }
    
    export namespace Type__Path {
        
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
    
    export type Type__Path<GAnnotation> = {
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
}