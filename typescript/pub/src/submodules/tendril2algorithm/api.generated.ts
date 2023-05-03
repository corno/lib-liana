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
    
    
    export type mapTendril2States<GAnnotation> = {
        readonly 'decorateDictionaryEntriesWithKey': g_foreach.SYNC.A.F.DecorateDictionaryEntriesWithKey
    }
}

export namespace A {
    
    export type create121Mapper = <GAnnotation>($d: D.create121Mapper<GAnnotation>, ) => g_this.SYNC.A.P.Create121Mapper<GAnnotation>
    
    export type mapTendril2Serializer = <GAnnotation>() => g_this.SYNC.A.F.MapTendril2Serializer<GAnnotation>
    
    export type mapTendril2States = <GAnnotation>($d: D.mapTendril2States<GAnnotation>, ) => g_this.SYNC.A.F.MapTendril2States<GAnnotation>
}

export type API = {
    readonly 'create121Mapper': A.create121Mapper
    readonly 'mapTendril2Serializer': A.mapTendril2Serializer
    readonly 'mapTendril2States': A.mapTendril2States
}