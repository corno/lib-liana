import * as pt from "pareto-core-types"

import * as collation from "api-pareto-collation"

import {  TNamespace } from "../types/types.p"



export type PEnrichedDictionaryForEach = <T> (
    $: pt.Dictionary<T>,
    $i: {
        onEmpty: () => void
        onNotEmpty: ($c: ($i: ($: {
            key: string
            value: T,
            isFirst: boolean
        }) => void) => void) => void
    }
) => void

export type PEnrichedArrayForEach = <T> (
    $: pt.Array<T>,
    $i: {
        onEmpty: () => void
        onNotEmpty: ($c: ($i: ($: {
            value: T,
            isFirst: boolean
        }) => void) => void) => void
    }
) => void

export type TKeyValuePair<T> = {
    key: string,
    value: T
}

export type DDependencies = {
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

    // getTypeParameters: (
    //     $: TNamespace<PAnnotation>,
    // ) => pt.Array<string>
    escapeTypescriptIdentifier: ($: string) => string
    escapeQuotedStringWithQuotes: ($: string) => string
    escapeQuotedString: ($: string) => string
    escapePrivateFunction: ($: string) => string
    escapePublicFunctionImplementation: ($: string) => string

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
    escapeFunctionDefinition: ($: string) => string

    escapeImportedFunction: ($: {
        module: string,
        function: string,
    }) => string

    enrichedArrayForEach: PEnrichedArrayForEach,
    enrichedDictionaryForEach: PEnrichedDictionaryForEach,
    sortedForEach: collation.FSortedForEach
}

export type D2 = {
    getTypeParameters: <PAnnotation>(
        $: TNamespace<PAnnotation>,
    ) => pt.Array<string>
    x: DDependencies
}