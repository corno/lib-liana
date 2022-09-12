import * as pt from "pareto-core-types"

import * as api from "../index"

type Reference<T> = { name: string }

export namespace resolved {
    
    export namespace globalTypes {
        
        export namespace API {
            
            export namespace dependencies {
                
                export type TtypeXXX = pt.Dictionary<{}>
            }
            
            export namespace function_declarations {
                
                export type TtypeXXX = pt.Dictionary<{}>
            }
            
            export namespace imports {
                
                export type TtypeXXX = pt.Dictionary<Reference<TAPI>>
            }
            
            export namespace interfaces {
                
                export type TtypeXXX = pt.Dictionary<{}>
            }
            
            export namespace namespace {
                
                export type TtypeXXX = globalTypes.TNamespace
            }
            
            export type TtypeXXX = {
                readonly 'dependencies': dependencies.TtypeXXX
                readonly 'function declarations': function_declarations.TtypeXXX
                readonly 'imports': imports.TtypeXXX
                readonly 'interfaces': interfaces.TtypeXXX
                readonly 'namespace': namespace.TtypeXXX
            }
        }
        
        export namespace Interface {
            
            export namespace type {
                
                export namespace component {
                    
                    export type TtypeXXX = {}
                }
                
                export namespace group {
                    
                    export namespace properties {
                        
                        export type TtypeXXX = pt.Dictionary<globalTypes.TInterface>
                    }
                    
                    export type TtypeXXX = {
                        readonly 'properties': properties.TtypeXXX
                    }
                }
                
                export type TtypeXXX = 
                    | [ "component", component.TtypeXXX ]
                    | [ "group", group.TtypeXXX ]
            }
            
            export type TtypeXXX = {
                readonly 'type': type.TtypeXXX
            }
        }
        
        export namespace Module {
            
            export namespace implementation {
                
                export namespace imports {
                    
                    export type TtypeXXX = pt.Dictionary<globalTypes.TInterface>
                }
                
                export namespace private_functions {
                    
                    export type TtypeXXX = pt.Dictionary<{}>
                }
                
                export namespace public_functions {
                    
                    export type TtypeXXX = pt.Dictionary<{}>
                }
                
                export type TtypeXXX = {
                    readonly 'imports': imports.TtypeXXX
                    readonly 'private functions': private_functions.TtypeXXX
                    readonly 'public functions': public_functions.TtypeXXX
                }
            }
            
            export namespace _interface {
                
                export type TtypeXXX = globalTypes.TAPI
            }
            
            export type TtypeXXX = {
                readonly 'implementation': implementation.TtypeXXX
                readonly 'interface': _interface.TtypeXXX
            }
        }
        
        export namespace Namespace {
            
            export namespace namespaces {
                
                export type TtypeXXX = pt.Dictionary<globalTypes.TNamespace>
            }
            
            export namespace parameters {
                
                export type TtypeXXX = pt.Dictionary<null>
            }
            
            export namespace types {
                
                export type TtypeXXX = pt.Dictionary<globalTypes.TType>
            }
            
            export type TtypeXXX = {
                readonly 'namespaces': namespaces.TtypeXXX
                readonly 'parameters': parameters.TtypeXXX
                readonly 'types': types.TtypeXXX
            }
        }
        
        export namespace Type {
            
            export namespace collections {
                
                export namespace dictionary {
                    
                    export type TtypeXXX = null
                }
                
                export namespace list {
                    
                    export type TtypeXXX = null
                }
                
                export type TtypeXXX = pt.Array<
                    | [ "dictionary", dictionary.TtypeXXX ]
                    | [ "list", list.TtypeXXX ]
                >
            }
            
            export namespace optional {
                
                export type TtypeXXX = boolean
            }
            
            export namespace type {
                
                export namespace boolean {
                    
                    export type TtypeXXX = null
                }
                
                export namespace component {
                    
                    export namespace parameter {
                        
                        export type TtypeXXX = Reference<TTypeParameter>
                    }
                    
                    export namespace type {
                        
                        export namespace _import {
                            
                            export namespace global_type {
                                
                                export type TtypeXXX = Reference<TType>
                            }
                            
                            export namespace module {
                                
                                export type TtypeXXX = Reference<TInterface>
                            }
                            
                            export type TtypeXXX = {
                                readonly 'global type': global_type.TtypeXXX
                                readonly 'module': module.TtypeXXX
                            }
                        }
                        
                        export namespace sibling {
                            
                            export namespace namespace_steps {
                                
                                export type TtypeXXX = pt.Array<Reference<TNamespace>>
                            }
                            
                            export namespace type {
                                
                                export type TtypeXXX = Reference<TType>
                            }
                            
                            export type TtypeXXX = {
                                readonly 'namespace steps': namespace_steps.TtypeXXX
                                readonly 'type': type.TtypeXXX
                            }
                        }
                        
                        export type TtypeXXX = 
                            | [ "import", _import.TtypeXXX ]
                            | [ "sibling", sibling.TtypeXXX ]
                    }
                    
                    export type TtypeXXX = 
                        | [ "parameter", parameter.TtypeXXX ]
                        | [ "type", type.TtypeXXX ]
                }
                
                export namespace group {
                    
                    export type TtypeXXX = pt.Dictionary<globalTypes.TType>
                }
                
                export namespace _null {
                    
                    export type TtypeXXX = null
                }
                
                export namespace reference {
                    
                    export type TtypeXXX = Reference<TType>
                }
                
                export namespace string {
                    
                    export type TtypeXXX = null
                }
                
                export namespace tagged_union {
                    
                    export type TtypeXXX = pt.Dictionary<globalTypes.TType>
                }
                
                export type TtypeXXX = 
                    | [ "boolean", boolean.TtypeXXX ]
                    | [ "component", component.TtypeXXX ]
                    | [ "group", group.TtypeXXX ]
                    | [ "null", _null.TtypeXXX ]
                    | [ "reference", reference.TtypeXXX ]
                    | [ "string", string.TtypeXXX ]
                    | [ "tagged union", tagged_union.TtypeXXX ]
            }
            
            export type TtypeXXX = {
                readonly 'collections': collections.TtypeXXX
                readonly 'optional': optional.TtypeXXX
                readonly 'type': type.TtypeXXX
            }
        }
        
        export namespace TypeParameter {
            
            export type TtypeXXX = null
        }
        
        export type TAPI = API.TtypeXXX
        
        export type TInterface = Interface.TtypeXXX
        
        export type TModule = Module.TtypeXXX
        
        export type TNamespace = Namespace.TtypeXXX
        
        export type TType = Type.TtypeXXX
        
        export type TTypeParameter = TypeParameter.TtypeXXX
    }
    
    export namespace root {
        
        export namespace root {
            
            export type TtypeXXX = globalTypes.TModule
        }
        
        export type TtypeXXX = {
            readonly 'root': root.TtypeXXX
        }
    }
    
    export type Troot = root.TtypeXXX
}

export namespace unresolved {
    
    export namespace globalTypes {
        
        export namespace API {
            
            export namespace dependencies {
                
                export type TtypeXXX = pt.Dictionary<{}>
            }
            
            export namespace function_declarations {
                
                export type TtypeXXX = pt.Dictionary<{}>
            }
            
            export namespace imports {
                
                export type TtypeXXX = pt.Dictionary<{
                    readonly 'annotation': string
                    readonly 'name': string
                }>
            }
            
            export namespace interfaces {
                
                export type TtypeXXX = pt.Dictionary<{}>
            }
            
            export namespace namespace {
                
                export type TtypeXXX = globalTypes.TNamespace
            }
            
            export type TtypeXXX = {
                readonly 'dependencies'?: dependencies.TtypeXXX
                readonly 'function declarations'?: function_declarations.TtypeXXX
                readonly 'imports'?: imports.TtypeXXX
                readonly 'interfaces'?: interfaces.TtypeXXX
                readonly 'namespace'?: namespace.TtypeXXX
            }
        }
        
        export namespace Interface {
            
            export namespace type {
                
                export namespace component {
                    
                    export type TtypeXXX = {}
                }
                
                export namespace group {
                    
                    export namespace properties {
                        
                        export type TtypeXXX = pt.Dictionary<globalTypes.TInterface>
                    }
                    
                    export type TtypeXXX = {
                        readonly 'properties'?: properties.TtypeXXX
                    }
                }
                
                export type TtypeXXX = 
                    | [ "component", component.TtypeXXX ]
                    | [ "group", group.TtypeXXX ]
            }
            
            export type TtypeXXX = {
                readonly 'type'?: type.TtypeXXX
            }
        }
        
        export namespace Module {
            
            export namespace implementation {
                
                export namespace imports {
                    
                    export type TtypeXXX = pt.Dictionary<globalTypes.TInterface>
                }
                
                export namespace private_functions {
                    
                    export type TtypeXXX = pt.Dictionary<{}>
                }
                
                export namespace public_functions {
                    
                    export type TtypeXXX = pt.Dictionary<{}>
                }
                
                export type TtypeXXX = {
                    readonly 'imports'?: imports.TtypeXXX
                    readonly 'private functions'?: private_functions.TtypeXXX
                    readonly 'public functions'?: public_functions.TtypeXXX
                }
            }
            
            export namespace _interface {
                
                export type TtypeXXX = globalTypes.TAPI
            }
            
            export type TtypeXXX = {
                readonly 'implementation'?: implementation.TtypeXXX
                readonly 'interface'?: _interface.TtypeXXX
            }
        }
        
        export namespace Namespace {
            
            export namespace namespaces {
                
                export type TtypeXXX = pt.Dictionary<globalTypes.TNamespace>
            }
            
            export namespace parameters {
                
                export type TtypeXXX = pt.Dictionary<null>
            }
            
            export namespace types {
                
                export type TtypeXXX = pt.Dictionary<globalTypes.TType>
            }
            
            export type TtypeXXX = {
                readonly 'namespaces'?: namespaces.TtypeXXX
                readonly 'parameters'?: parameters.TtypeXXX
                readonly 'types'?: types.TtypeXXX
            }
        }
        
        export namespace Type {
            
            export namespace collections {
                
                export namespace dictionary {
                    
                    export type TtypeXXX = null
                }
                
                export namespace list {
                    
                    export type TtypeXXX = null
                }
                
                export type TtypeXXX = pt.Array<
                    | [ "dictionary", dictionary.TtypeXXX ]
                    | [ "list", list.TtypeXXX ]
                >
            }
            
            export namespace optional {
                
                export type TtypeXXX = boolean
            }
            
            export namespace type {
                
                export namespace boolean {
                    
                    export type TtypeXXX = null
                }
                
                export namespace component {
                    
                    export namespace parameter {
                        
                        export type TtypeXXX = {
                            readonly 'annotation': string
                            readonly 'name': string
                        }
                    }
                    
                    export namespace type {
                        
                        export namespace _import {
                            
                            export namespace global_type {
                                
                                export type TtypeXXX = {
                                    readonly 'annotation': string
                                    readonly 'name': string
                                }
                            }
                            
                            export namespace module {
                                
                                export type TtypeXXX = {
                                    readonly 'annotation': string
                                    readonly 'name': string
                                }
                            }
                            
                            export type TtypeXXX = {
                                readonly 'global type'?: global_type.TtypeXXX
                                readonly 'module'?: module.TtypeXXX
                            }
                        }
                        
                        export namespace sibling {
                            
                            export namespace namespace_steps {
                                
                                export type TtypeXXX = pt.Array<{
                                    readonly 'annotation': string
                                    readonly 'name': string
                                }>
                            }
                            
                            export namespace type {
                                
                                export type TtypeXXX = {
                                    readonly 'annotation': string
                                    readonly 'name': string
                                }
                            }
                            
                            export type TtypeXXX = {
                                readonly 'namespace steps'?: namespace_steps.TtypeXXX
                                readonly 'type'?: type.TtypeXXX
                            }
                        }
                        
                        export type TtypeXXX = 
                            | [ "import", _import.TtypeXXX ]
                            | [ "sibling", sibling.TtypeXXX ]
                    }
                    
                    export type TtypeXXX = 
                        | [ "parameter", parameter.TtypeXXX ]
                        | [ "type", type.TtypeXXX ]
                }
                
                export namespace group {
                    
                    export type TtypeXXX = pt.Dictionary<globalTypes.TType>
                }
                
                export namespace _null {
                    
                    export type TtypeXXX = null
                }
                
                export namespace reference {
                    
                    export type TtypeXXX = {
                        readonly 'annotation': string
                        readonly 'name': string
                    }
                }
                
                export namespace string {
                    
                    export type TtypeXXX = null
                }
                
                export namespace tagged_union {
                    
                    export type TtypeXXX = pt.Dictionary<globalTypes.TType>
                }
                
                export type TtypeXXX = 
                    | [ "boolean", boolean.TtypeXXX ]
                    | [ "component", component.TtypeXXX ]
                    | [ "group", group.TtypeXXX ]
                    | [ "null", _null.TtypeXXX ]
                    | [ "reference", reference.TtypeXXX ]
                    | [ "string", string.TtypeXXX ]
                    | [ "tagged union", tagged_union.TtypeXXX ]
            }
            
            export type TtypeXXX = {
                readonly 'collections'?: collections.TtypeXXX
                readonly 'optional'?: optional.TtypeXXX
                readonly 'type'?: type.TtypeXXX
            }
        }
        
        export namespace TypeParameter {
            
            export type TtypeXXX = null
        }
        
        export type TAPI = API.TtypeXXX
        
        export type TInterface = Interface.TtypeXXX
        
        export type TModule = Module.TtypeXXX
        
        export type TNamespace = Namespace.TtypeXXX
        
        export type TType = Type.TtypeXXX
        
        export type TTypeParameter = TypeParameter.TtypeXXX
    }
    
    export namespace root {
        
        export namespace root {
            
            export type TtypeXXX = globalTypes.TModule
        }
        
        export type TtypeXXX = {
            readonly 'root'?: root.TtypeXXX
        }
    }
    
    export type Troot = root.TtypeXXX
}