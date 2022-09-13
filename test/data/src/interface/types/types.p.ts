import * as pt from "pareto-core-types"

import * as api from "../index"

type Reference<T> = { name: string }

export namespace resolved {
    
    export namespace globalTypes {
        
        export namespace API {
            
            export namespace dependencies {}
            
            export namespace function_declarations {}
            
            export namespace interfaces {}
            
            export type Tdependencies = {}
            
            export type Tfunction_declarations = {}
            
            export type Timports = Reference<TAPI>
            
            export type Tinterfaces = {}
        }
        
        export namespace Interface {
            
            export namespace type {
                
                export namespace component {}
                
                export namespace group {
                    
                    export type Tproperties = globalTypes.TInterface
                }
            }
        }
        
        export namespace Module {
            
            export namespace implementation {
                
                export namespace private_functions {}
                
                export namespace public_functions {}
                
                export type Timports = globalTypes.TInterface
                
                export type Tprivate_functions = {}
                
                export type Tpublic_functions = {}
            }
        }
        
        export namespace Namespace {
            
            export type Tnamespaces = globalTypes.TNamespace
            
            export type Tparameters = null
            
            export type Ttypes = globalTypes.TType
        }
        
        export namespace Type {
            
            export namespace collections {}
            
            export namespace type {
                
                export namespace component {
                    
                    export namespace type {
                        
                        export namespace _import {}
                        
                        export namespace sibling {
                            
                            export type Tnamespace_steps = Reference<TNamespace>
                        }
                    }
                }
                
                export type Tgroup = globalTypes.TType
                
                export type Ttagged_union = globalTypes.TType
            }
            
            export type Tcollections = 
                | [ "dictionary", null ]
                | [ "list", null ]
        }
        
        export type TAPI = {
            readonly 'dependencies': pt.Dictionary<globalTypes.API.Tdependencies>
            readonly 'function declarations': pt.Dictionary<globalTypes.API.Tfunction_declarations>
            readonly 'imports': pt.Dictionary<globalTypes.API.Timports>
            readonly 'interfaces': pt.Dictionary<globalTypes.API.Tinterfaces>
            readonly 'namespace': globalTypes.TNamespace
        }
        
        export type TInterface = {
            readonly 'type': 
                | [ "component", {} ]
                | [ "group", {
                    readonly 'properties': pt.Dictionary<globalTypes.Interface.type.group.Tproperties>
                } ]
        }
        
        export type TModule = {
            readonly 'implementation': {
                readonly 'imports': pt.Dictionary<globalTypes.Module.implementation.Timports>
                readonly 'private functions': pt.Dictionary<globalTypes.Module.implementation.Tprivate_functions>
                readonly 'public functions': pt.Dictionary<globalTypes.Module.implementation.Tpublic_functions>
            }
            readonly 'interface': globalTypes.TAPI
        }
        
        export type TNamespace = {
            readonly 'namespaces': pt.Dictionary<globalTypes.Namespace.Tnamespaces>
            readonly 'parameters': pt.Dictionary<globalTypes.Namespace.Tparameters>
            readonly 'types': pt.Dictionary<globalTypes.Namespace.Ttypes>
        }
        
        export type TType = {
            readonly 'collections': pt.Array<globalTypes.Type.Tcollections>
            readonly 'optional': boolean
            readonly 'type': 
                | [ "boolean", null ]
                | [ "component", 
                    | [ "parameter", Reference<TTypeParameter> ]
                    | [ "type", 
                        | [ "import", {
                            readonly 'global type': Reference<TType>
                            readonly 'module': Reference<TInterface>
                        } ]
                        | [ "sibling", {
                            readonly 'namespace steps': pt.Array<globalTypes.Type.type.component.type.sibling.Tnamespace_steps>
                            readonly 'type': Reference<TType>
                        } ]
                     ]
                 ]
                | [ "group", pt.Dictionary<globalTypes.Type.type.Tgroup> ]
                | [ "null", null ]
                | [ "reference", Reference<TType> ]
                | [ "string", null ]
                | [ "tagged union", pt.Dictionary<globalTypes.Type.type.Ttagged_union> ]
        }
        
        export type TTypeParameter = null
    }
    
    export type Troot = {
        readonly 'root': globalTypes.TModule
    }
}

export namespace unresolved {
    
    export namespace globalTypes {
        
        export namespace API {
            
            export namespace dependencies {}
            
            export namespace function_declarations {}
            
            export namespace interfaces {}
            
            export type Tdependencies = {}
            
            export type Tfunction_declarations = {}
            
            export type Timports = {
                readonly 'annotation': string
                readonly 'name': string
            }
            
            export type Tinterfaces = {}
        }
        
        export namespace Interface {
            
            export namespace type {
                
                export namespace component {}
                
                export namespace group {
                    
                    export type Tproperties = globalTypes.TInterface
                }
            }
        }
        
        export namespace Module {
            
            export namespace implementation {
                
                export namespace private_functions {}
                
                export namespace public_functions {}
                
                export type Timports = globalTypes.TInterface
                
                export type Tprivate_functions = {}
                
                export type Tpublic_functions = {}
            }
        }
        
        export namespace Namespace {
            
            export type Tnamespaces = globalTypes.TNamespace
            
            export type Tparameters = null
            
            export type Ttypes = globalTypes.TType
        }
        
        export namespace Type {
            
            export namespace collections {}
            
            export namespace type {
                
                export namespace component {
                    
                    export namespace type {
                        
                        export namespace _import {}
                        
                        export namespace sibling {
                            
                            export type Tnamespace_steps = {
                                readonly 'annotation': string
                                readonly 'name': string
                            }
                        }
                    }
                }
                
                export type Tgroup = globalTypes.TType
                
                export type Ttagged_union = globalTypes.TType
            }
            
            export type Tcollections = 
                | [ "dictionary", null ]
                | [ "list", null ]
        }
        
        export type TAPI = {
            readonly 'dependencies'?: pt.Dictionary<globalTypes.API.Tdependencies>
            readonly 'function declarations'?: pt.Dictionary<globalTypes.API.Tfunction_declarations>
            readonly 'imports'?: pt.Dictionary<globalTypes.API.Timports>
            readonly 'interfaces'?: pt.Dictionary<globalTypes.API.Tinterfaces>
            readonly 'namespace'?: globalTypes.TNamespace
        }
        
        export type TInterface = {
            readonly 'type'?: 
                | [ "component", {} ]
                | [ "group", {
                    readonly 'properties'?: pt.Dictionary<globalTypes.Interface.type.group.Tproperties>
                } ]
        }
        
        export type TModule = {
            readonly 'implementation'?: {
                readonly 'imports'?: pt.Dictionary<globalTypes.Module.implementation.Timports>
                readonly 'private functions'?: pt.Dictionary<globalTypes.Module.implementation.Tprivate_functions>
                readonly 'public functions'?: pt.Dictionary<globalTypes.Module.implementation.Tpublic_functions>
            }
            readonly 'interface'?: globalTypes.TAPI
        }
        
        export type TNamespace = {
            readonly 'namespaces'?: pt.Dictionary<globalTypes.Namespace.Tnamespaces>
            readonly 'parameters'?: pt.Dictionary<globalTypes.Namespace.Tparameters>
            readonly 'types'?: pt.Dictionary<globalTypes.Namespace.Ttypes>
        }
        
        export type TType = {
            readonly 'collections'?: pt.Array<globalTypes.Type.Tcollections>
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
                            readonly 'namespace steps'?: pt.Array<globalTypes.Type.type.component.type.sibling.Tnamespace_steps>
                            readonly 'type'?: {
                                readonly 'annotation': string
                                readonly 'name': string
                            }
                        } ]
                     ]
                 ]
                | [ "group", pt.Dictionary<globalTypes.Type.type.Tgroup> ]
                | [ "null", null ]
                | [ "reference", {
                    readonly 'annotation': string
                    readonly 'name': string
                } ]
                | [ "string", null ]
                | [ "tagged union", pt.Dictionary<globalTypes.Type.type.Ttagged_union> ]
        }
        
        export type TTypeParameter = null
    }
    
    export type Troot = {
        readonly 'root'?: globalTypes.TModule
    }
}