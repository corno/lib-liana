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

export type TLocalType<PAnnotation> = {
    readonly "annotation": PAnnotation
    readonly "optional": boolean
    readonly "type":
    | ["null", {}]
    | ["boolean", {}]
    | ["string", {
        readonly "reference"?: string
    }]
    | ["dictionary", TLocalType<PAnnotation>]
    | ["group", {
        readonly "properties": pt.Dictionary<TLocalType<PAnnotation>>
    }]
    | ["list", TLocalType<PAnnotation>]
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

export type TSchema<PAnnotation> = {
    readonly "global types": pt.Dictionary<TLocalType<PAnnotation>>
    readonly "root": TLocalType<PAnnotation>
}