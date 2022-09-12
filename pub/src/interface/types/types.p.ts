import * as pt from "pareto-core-types"

export type Reference<PAnnotation, PType> = {
    readonly "name": string
    readonly "annotation": PAnnotation
    readonly "type": PType
}

export type SiblingReference<PAnnotation, PType> = {
    readonly "name": string
    readonly "annotation": PAnnotation
    //readonly "type": () => PType
}

export type TTypeParameter<PAnnotation> = null

export type TImport<PAnnotation> = string

export type TProperty<PAnnotation> = {
    readonly "sibling dependencies": pt.Dictionary<null>
    readonly "type": TLocalType<PAnnotation>
}

export type TCollection =
    | ["dictionary", null]
    | ["list", null]


export type TLocalType<PAnnotation> = {
    readonly "annotation": PAnnotation
    readonly "optional": boolean
    readonly "collections": pt.Array<TCollection>
    readonly "type":
    | ["null", {}]
    | ["boolean", {}]
    | ["string", {
        readonly "reference"?: string
    }]
    | ["group", {
        readonly "properties": pt.Dictionary<TProperty<PAnnotation>>
    }]
    | ["component", {
        readonly "type":
        | ["parameter", {
            readonly "parameter": Reference<PAnnotation, TTypeParameter<PAnnotation>>
        }]
        | ["type", {
            readonly "global type": SiblingReference<PAnnotation, TLocalType<PAnnotation>>
            readonly "arguments": pt.Dictionary<TLocalType<PAnnotation>>
        }]
    }]
    | ["tagged union", {
        readonly "options": pt.Dictionary<TLocalType<PAnnotation>>
    }]
}

export type TGlobalTypeParameter<PAnnotation> = {
        
}

export type TGlobalType<PAnnotation> = {
    siblingDependencies: pt.Dictionary<null>
    parameters: pt.Dictionary<TGlobalTypeParameter<PAnnotation>>
    type: TLocalType<PAnnotation>
}

export type TSchema<PAnnotation> = {
    readonly "global types": pt.Dictionary<TGlobalType<PAnnotation>>
    readonly "root": TLocalType<PAnnotation>
}