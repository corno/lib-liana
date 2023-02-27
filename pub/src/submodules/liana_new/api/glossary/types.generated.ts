import * as pt from 'pareto-core-types'


export namespace T {
    
    export namespace Model {
        
        export type root<GPAnnotation> = string
        
        export type type__library<GPAnnotation> = T.Type__Library<GPAnnotation>
    }
    
    export type Model<GPAnnotation> = {
        readonly 'root': string
        readonly 'type library': T.Type__Library<GPAnnotation>
    }
    
    export namespace Reference {}
    
    export type Reference<GPAnnotation> = {}
    
    export namespace String {
        
        export namespace constrained {
            
            export namespace no {
                
                export type _ltype<GPAnnotation> = string
            }
            
            export type no<GPAnnotation> = {
                readonly 'type': string
            }
            
            export type yes<GPAnnotation> = T.Reference<GPAnnotation>
        }
        
        export type constrained<GPAnnotation> = 
            | ['no', {
                readonly 'type': string
            }]
            | ['yes', T.Reference<GPAnnotation>]
    }
    
    export type String<GPAnnotation> = {
        readonly 'constrained': 
            | ['no', {
                readonly 'type': string
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
            
            export type _ltype<GPAnnotation> = string
        }
        
        export type component<GPAnnotation> = {
            readonly 'arguments': pt.Dictionary<{}>
            readonly 'type': string
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
            
            export namespace options {
                
                export type _ltype<GPAnnotation> = T.Type<GPAnnotation>
            }
            
            export type options<GPAnnotation> = {
                readonly 'type': T.Type<GPAnnotation>
            }
        }
        
        export type tagged__union<GPAnnotation> = {
            readonly 'options': {
                readonly 'type': T.Type<GPAnnotation>
            }
        }
    }
    
    export type Type<GPAnnotation> = 
        | ['array', {
            readonly 'type': T.Type<GPAnnotation>
        }]
        | ['boolean', {}]
        | ['component', {
            readonly 'arguments': pt.Dictionary<{}>
            readonly 'type': string
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
            readonly 'options': {
                readonly 'type': T.Type<GPAnnotation>
            }
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
        
        export namespace string__types {
            
            export type D<GPAnnotation> = string
        }
        
        export type string__types<GPAnnotation> = pt.Dictionary<string>
    }
    
    export type Type__Library<GPAnnotation> = {
        readonly 'global types': pt.Dictionary<{
            readonly 'parameters': pt.Dictionary<{}>
            readonly 'type': T.Type<GPAnnotation>
        }>
        readonly 'string types': pt.Dictionary<string>
    }
}