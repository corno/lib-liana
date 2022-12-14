import * as pt from "pareto-core-types"

export type AnnotatedString<PAnnotation> = {
    readonly "name": string
    readonly "annotation": PAnnotation
}

export type Reference<PAnnotation, PType> = {
    name: AnnotatedString<PAnnotation>
    //readonly "type": PType
}

export type SiblingReference<PAnnotation, PType> = {
    readonly "name": AnnotatedString<PAnnotation>
    //readonly "type": () => PType
}

export type TTypeParameter<PAnnotation> = null

export type TGlobalType<PAnnotation> = TLocalType<PAnnotation>
export type TImport<PAnnotation> = string

export type TReferenceType<PAnnotation> =
    | ["parameter", {
        readonly "parameter": Reference<PAnnotation, TTypeParameter<PAnnotation>>
    }]
    | ["type", {
        readonly "type":
        | ["sibling", {
            readonly "namespace steps": pt.Array<Reference<PAnnotation, TNamespace<PAnnotation>>>
            readonly "global type": SiblingReference<PAnnotation, TGlobalType<PAnnotation>>
        }]
        | ["import", {
            readonly "import": Reference<PAnnotation, TImport<PAnnotation>>
            readonly "global type": Reference<PAnnotation, TGlobalType<PAnnotation>>
        }]
        readonly "arguments": pt.Dictionary<TLocalType<PAnnotation>>
    }]

export type TTypeType<PAnnotation> =
    | ["null", {}]
    | ["boolean", {}]
    | ["string", {}]
    | ["group", {
        readonly "properties": pt.Dictionary<{
            readonly "optional": boolean,
            readonly "type": TLocalType<PAnnotation>
        }>
    }]
    | ["component", TReferenceType<PAnnotation>]
    | ["reference", {
        readonly "type": string
    }]
    | ["tagged union", {
        readonly "options": pt.Dictionary<TLocalType<PAnnotation>>
    }]

export type TLocalType<PAnnotation> = {
    readonly "annotation": PAnnotation
    readonly "optional": boolean
    readonly "collections": pt.Array<
        | ["dictionary", null]
        | ["list", null]
    >
    readonly "type": TTypeType<PAnnotation>
}

export type TLocalInterface<PAnnotation> = {
    readonly "annotation": PAnnotation
    readonly "type":
    | ["reference", {
        readonly "type":
        | ["type", {
            readonly "type":
            | ["sibling", {
                readonly "global interface": SiblingReference<PAnnotation, TGlobalInterface<PAnnotation>>
            }]
            | ["import", {
                readonly "import": Reference<PAnnotation, TImport<PAnnotation>>
                readonly "global interface": Reference<PAnnotation, TGlobalInterface<PAnnotation>>
            }]
            readonly "arguments": pt.Dictionary<TLocalType<PAnnotation>>
        }]

    }]
    | ["group", {
        readonly "properties": pt.Dictionary<TLocalInterface<PAnnotation>>
    }]
    | ["method", {
        readonly "type": null | TLocalType<PAnnotation>
        readonly "callback": null | {
            readonly "interface": TLocalInterface<PAnnotation>
            readonly "type":
            | ["managed", {}]
            | ["unmanaged", {}]
        }
    }]
}

export type TGlobalInterface<PAnnotation> = {
    readonly "parameters": pt.Dictionary<TTypeParameter<PAnnotation>>
    readonly "details": TLocalInterface<PAnnotation>
}

export type TFunctionDefinition<PAnnotation> = {

    readonly "type parameters": pt.Dictionary<TTypeParameter<PAnnotation>>
    readonly "type": TLocalType<PAnnotation>
    readonly "interface": null | TLocalInterface<PAnnotation>

    readonly "return type":
    | ["managed", {
        readonly "interface": TLocalInterface<PAnnotation>
    }]
    | ["unmanaged", {
        readonly "type":
        | ["interface", {
            readonly "interface": TLocalInterface<PAnnotation>
        }]
        | ["type", {
            readonly "type": TLocalType<PAnnotation>
            readonly "async": boolean
        }]
        | ["function", {
            readonly "function": Reference<PAnnotation, TFunctionDefinition<PAnnotation>>
        }]
    }]
}

export type TDependencyDefinition<PAnnotation> = {
    readonly "functions": pt.Dictionary<TExternalFunctionReference<PAnnotation>>
}

export type TExternalFunctionReference<PAnnotation> = {
    readonly "import": Reference<PAnnotation, TImport<PAnnotation>>
    readonly "function": Reference<PAnnotation, TFunctionDefinition<PAnnotation>>
}

export type TNamespace<PAnnotation> = {
    readonly "parameters": pt.Dictionary<TTypeParameter<PAnnotation>>
    readonly "namespaces": pt.Dictionary<TNamespace<PAnnotation>>
    readonly "types": pt.Dictionary<TGlobalType<PAnnotation>>

}

export type TInterface<PAnnotation> = {
    readonly "imports": pt.Dictionary<TImport<PAnnotation>>
    readonly "namespace": TNamespace<PAnnotation>
    readonly "interfaces": pt.Dictionary<TGlobalInterface<PAnnotation>>
    readonly "dependencies": pt.Dictionary<TDependencyDefinition<PAnnotation>>
    readonly "functions": pt.Dictionary<TFunctionDefinition<PAnnotation>>
}

export namespace Expression {
    export type TType<PAnnotation> =
        | ["property selection possibly undefined", {
            readonly "name": string
            readonly "undefined": TExpression<PAnnotation>
            readonly "set": TExpression<PAnnotation>
        }]
        | ["call", {
            readonly "function": string
            readonly "data": TExpression<PAnnotation>
            readonly "interfaces": null | TExpression<PAnnotation>
        }]
        | ["change context", {
            'selection': pt.Array<string>
            'expression': TExpression<PAnnotation>
        }]
        | ["group type instantiation", {
            readonly "properties": pt.Dictionary<TExpression<PAnnotation>>
        }]
        | ["key", null]
        | ["null", null]
        | ["panic", {
            readonly "message": string
        }]
        | ["context", {
            tail: pt.Array<string>
        }]
        | ["variable", {
            readonly "variable": string
        }]
        | ["switch", {
            readonly "options": pt.Dictionary<TExpression<PAnnotation>>
        }]
        | ["tagged union instantiation", {
            readonly "state": string
            readonly 'data': TExpression<PAnnotation>
        }]

    export type TCollections<PAnnotation> =
        | ["dictionary", null]
        | ["array", null]
}

export type TExpression<PAnnotation> = {
    readonly 'collections': pt.Array<Expression.TCollections<PAnnotation>>
    readonly "type": Expression.TType<PAnnotation>
}

export type TStatement<PAnnotation> = {
    readonly "type":
    | ["implement me", {
        readonly "message": string
    }]
    | ["panic", {
        readonly "message": string
    }]
    | ["return", {
        readonly "expression": TExpression<PAnnotation>
    }]
    | ["if", {
        readonly "expression": TExpression<PAnnotation>
        readonly "then": TBlock<PAnnotation>
        readonly "else": TBlock<PAnnotation>
    }]
    | ["switch", {
        readonly "type":
        | ["exhaustive", {

            readonly "options": pt.Dictionary<TBlock<PAnnotation>>
        }]
        | ["partial", {
            readonly "options": pt.Dictionary<TBlock<PAnnotation>>
            readonly "leftover": TBlock<PAnnotation>
        }]
    }]
}

export type TBlock<PAnnotation> = {
    readonly "statement": TStatement<PAnnotation>
}

export type TPrivateFunction<PAnnotation> = {
    readonly "sibling dependencies": pt.Dictionary<null>
    readonly "definition": TFunctionDefinition<PAnnotation>
    readonly "implementation": TBlock<PAnnotation>
}
export type TPublicFunctionImplementation<PAnnotation> = {
    readonly "definition": Reference<PAnnotation, TFunctionDefinition<PAnnotation>>
    readonly "implementation": TBlock<PAnnotation>
}

export type TImplementation<PAnnotation> = {
    readonly "public functions": pt.Dictionary<TPublicFunctionImplementation<PAnnotation>>
    readonly "private functions": pt.Dictionary<TPrivateFunction<PAnnotation>>

}

export type TModule<PAnnotation> = {
    readonly "implementation": null | TImplementation<PAnnotation>
    readonly "interface": null | TInterface<PAnnotation>
}

export type Troot<PAnnotation> = {
    readonly "imports": pt.Dictionary<TModule<PAnnotation>>
    readonly "root": TModule<PAnnotation>
}