import * as pt from "pareto-core-types"
type Reference<T> = { name: string }

export namespace resolved {
    
    export namespace globalTypes {
        
        export type TInterface = {
            readonly 'type': 
                | [ "component", {} ]
                | [ "group", {
                    readonly 'properties': pt.Dictionary<globalTypes.TInterface>
                } ]
        }
        
        export type TModule = {
            readonly 'implementation': {
                readonly 'private functions': pt.Dictionary<{}>
                readonly 'public functions': pt.Dictionary<{}>
            }
            readonly 'interface': {
                readonly 'dependencies': pt.Dictionary<{}>
                readonly 'function declarations': pt.Dictionary<{}>
                readonly 'imports': pt.Dictionary<Reference<TModule>>
                readonly 'interfaces': pt.Dictionary<{}>
                readonly 'namespace': globalTypes.TNamespace
            }
        }
        
        export type TNamespace = {
            readonly 'namespaces': pt.Dictionary<globalTypes.TNamespace>
            readonly 'parameters': pt.Dictionary<null>
            readonly 'types': pt.Dictionary<globalTypes.TType>
        }
        
        export type TType = {
            readonly 'collections': pt.Array<
                | [ "dictionary", null ]
                | [ "list", null ]
            >
            readonly 'optional': boolean
            readonly 'type': 
                | [ "boolean", null ]
                | [ "component", 
                    | [ "parameter", Reference<TTypeParameter> ]
                    | [ "type", 
                        | [ "import", {
                            readonly 'global type': Reference<TType>
                            readonly 'module': Reference<TModule>
                        } ]
                        | [ "sibling", {
                            readonly 'namespace steps': pt.Array<Reference<TNamespace>>
                            readonly 'type': Reference<TType>
                        } ]
                     ]
                 ]
                | [ "group", pt.Dictionary<globalTypes.TType> ]
                | [ "null", null ]
                | [ "reference", Reference<TType> ]
                | [ "string", null ]
                | [ "tagged union", pt.Dictionary<globalTypes.TType> ]
        }
        
        export type TTypeParameter = null
    }
    
    export type Troot<PAnnotation> = {
        readonly 'imports': pt.Dictionary<globalTypes.TModule>
        readonly 'root': globalTypes.TModule
    }
}

export namespace unresolved {
    
    export namespace globalTypes {
        
        export type TInterface = {
            readonly 'type'?: 
                | [ "component", {} ]
                | [ "group", {
                    readonly 'properties'?: pt.Dictionary<globalTypes.TInterface>
                } ]
        }
        
        export type TModule = {
            readonly 'implementation'?: {
                readonly 'private functions'?: pt.Dictionary<{}>
                readonly 'public functions'?: pt.Dictionary<{}>
            }
            readonly 'interface'?: {
                readonly 'dependencies'?: pt.Dictionary<{}>
                readonly 'function declarations'?: pt.Dictionary<{}>
                readonly 'imports'?: pt.Dictionary<{
                    readonly 'annotation': string
                    readonly 'name': string
                }>
                readonly 'interfaces'?: pt.Dictionary<{}>
                readonly 'namespace'?: globalTypes.TNamespace
            }
        }
        
        export type TNamespace = {
            readonly 'namespaces'?: pt.Dictionary<globalTypes.TNamespace>
            readonly 'parameters'?: pt.Dictionary<null>
            readonly 'types'?: pt.Dictionary<globalTypes.TType>
        }
        
        export type TType = {
            readonly 'collections'?: pt.Array<
                | [ "dictionary", null ]
                | [ "list", null ]
            >
            readonly 'optional'?: boolean
            readonly 'type'?: 
                | [ "boolean", null ]
                | [ "component", 
                    | [ "parameter", {
                        readonly 'annotation': string
                        readonly 'name': string
                    } ]
                    | [ "type", 
                        | [ "import", {
                            readonly 'global type'?: {
                                readonly 'annotation': string
                                readonly 'name': string
                            }
                            readonly 'module'?: {
                                readonly 'annotation': string
                                readonly 'name': string
                            }
                        } ]
                        | [ "sibling", {
                            readonly 'namespace steps'?: pt.Array<{
                                readonly 'annotation': string
                                readonly 'name': string
                            }>
                            readonly 'type'?: {
                                readonly 'annotation': string
                                readonly 'name': string
                            }
                        } ]
                     ]
                 ]
                | [ "group", pt.Dictionary<globalTypes.TType> ]
                | [ "null", null ]
                | [ "reference", {
                    readonly 'annotation': string
                    readonly 'name': string
                } ]
                | [ "string", null ]
                | [ "tagged union", pt.Dictionary<globalTypes.TType> ]
        }
        
        export type TTypeParameter = null
    }
    
    export type Troot<PAnnotation> = {
        readonly 'imports'?: pt.Dictionary<globalTypes.TModule>
        readonly 'root'?: globalTypes.TModule
    }
}