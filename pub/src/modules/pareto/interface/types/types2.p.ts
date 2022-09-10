import * as pt from "pareto-core-types"

export namespace NglobalTypes {
    
    export type TInterface = {
        readonly 'type': 
            | [ "component", {} ]
            | [ "group", {
                readonly 'properties': pt.Dictionary<NglobalTypes.TInterface>
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
            readonly 'imports': pt.Dictionary<NglobalTypes.TModule>
            readonly 'interfaces': pt.Dictionary<{}>
            readonly 'namespace': NglobalTypes.TNamespace
        }
    }
    
    export type TNamespace = {
        readonly 'namespaces': pt.Dictionary<NglobalTypes.TNamespace>
        readonly 'parameters': pt.Dictionary<null>
        readonly 'types': pt.Dictionary<NglobalTypes.TType>
    }
    
    export type TType = {
        readonly 'collections': pt.Array<
            | [ "dictionary", null ]
            | [ "list", null ]
        >
        readonly 'type': 
            | [ "boolean", null ]
            | [ "component", {} ]
            | [ "group", {
                readonly 'properties': pt.Dictionary<NglobalTypes.TType>
            } ]
            | [ "null", null ]
            | [ "string", null ]
            | [ "taggedUnion", {
                readonly 'options': pt.Dictionary<NglobalTypes.TType>
            } ]
            | [ "undefined", null ]
    }
}

export type Troot<PAnnotation> = NglobalTypes.TModule