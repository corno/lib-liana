import * as pt from 'pareto-core-types'

import * as g_api from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_build from "res-pareto-build"
import * as g_common from "glo-pareto-common"
import * as g_dictionary from "res-pareto-dictionary"
import * as g_foreach from "res-pareto-foreach"
import * as g_resolve from "res-pareto-resolve"
import * as g_this from "./glossary"
import * as g_ts from "res-typescript"

export namespace D {
    
    export type create121Mapper<GAnnotation> = {
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
    }
    
    export type createResolverSkeleton<GAnnotation> = {
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
        readonly 'filter': g_dictionary.SYNC.A.F.Filter
        readonly 'isEmpty': g_dictionary.SYNC.A.F.IsEmpty
        readonly 'sortTopologically': g_resolve.SYNC.A.F.SortTopologically
    }
    
    
    export type mapLiana2States<GAnnotation> = {
        readonly 'decorateDictionaryEntriesWithKey': g_foreach.SYNC.A.F.DecorateDictionaryEntriesWithKey
    }
}

export namespace A {
    
    export type create121Mapper = <GAnnotation>($d: D.create121Mapper<GAnnotation>, ) => g_this.SYNC.A.P.Create121Mapper<GAnnotation>
    
    export type createResolverSkeleton = <GAnnotation>($d: D.createResolverSkeleton<GAnnotation>, ) => g_this.SYNC.A.P.CreateResolverSkeleton<GAnnotation>
    
    export type mapLiana2Serializer = <GAnnotation>() => g_this.SYNC.A.F.MapLiana2Serializer<GAnnotation>
    
    export type mapLiana2States = <GAnnotation>($d: D.mapLiana2States<GAnnotation>, ) => g_this.SYNC.A.F.MapLiana2States<GAnnotation>
}

export type API = {
    readonly 'create121Mapper': A.create121Mapper
    readonly 'createResolverSkeleton': A.createResolverSkeleton
    readonly 'mapLiana2Serializer': A.mapLiana2Serializer
    readonly 'mapLiana2States': A.mapLiana2States
}