import * as pt from "pareto-core-types"

import * as collation from "api-pareto-collation"

import { TGlobalInterface, TGlobalType, TImport, TTypeParameter, TDependencyDefinition, TFunctionDefinition, TNamespace } from "../types/types.p"


export type PEnrichedForEach = <T> (
    $: pt.Dictionary<T>,
    $i: {
        onBegin: () => void
        onEnd: () => void
        onEntry: ($: {
            key: string
            value: T,
            isFirst: boolean
        }) => void
    }
) => void

export type TKeyValuePair<T> = {
    key: string,
    value: T
}

export type DDependencies<PAnnotation> = {
    // escapeType: ($: TKeyValuePair<TGlobalType<PAnnotation>>) => string
    // escapeNamespace: ($: TKeyValuePair<TNamespace<PAnnotation>>) => string
    // escapeImportedType: ($: {
    //     module: TImport<PAnnotation>,
    //     type: TKeyValuePair<TGlobalType<PAnnotation>>,
    // }) => string
    // escapeTypeParameter: ($: TKeyValuePair<TTypeParameter<PAnnotation>>) => string
    // escapeInterface: ($: TKeyValuePair<TGlobalInterface<PAnnotation>>) => string
    // escapeImportedInterface: ($: {
    //     module: TImport<PAnnotation>,
    //     interface: TKeyValuePair<TGlobalInterface<PAnnotation>>,
    // }) => string
    // escapeDependencyDefinition: ($: TKeyValuePair<TDependencyDefinition<PAnnotation>>) => string

    // escapeImportedFunction: ($: {
    //     module: TImport<PAnnotation>,
    //     function: TKeyValuePair<TFunctionDefinition<PAnnotation>>,
    // }) => string


    escapeType: ($: string) => string
    escapeNamespace: ($: string) => string
    escapeImportedType: ($: {
        module: string,
        type: string,
    }) => string
    escapeTypeParameter: ($: string) => string
    escapeInterface: ($: string) => string
    escapeImportedInterface: ($: {
        module: string,
        interface: string,
    }) => string
    escapeDependencyDefinition: ($: string) => string

    escapeImportedFunction: ($: {
        module: string,
        function: string,
    }) => string




    enrichedForEach: PEnrichedForEach,
    sortedForEach: collation.PSortedForEach
}