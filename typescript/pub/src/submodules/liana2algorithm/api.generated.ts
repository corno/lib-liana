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
    
    export type createResolver<GAnnotation> = {
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
        readonly 'filter': g_dictionary.SYNC.A.F.Filter
        readonly 'isEmpty': g_dictionary.SYNC.A.F.IsEmpty
        readonly 'sortTopologically': g_resolve.SYNC.A.F.SortTopologically
    }
}

export namespace A {
    
    export type createResolver = <GAnnotation>($d: D.createResolver<GAnnotation>, ) => g_this.SYNC.A.P.CreateResolver<GAnnotation>
}

export type API = {
    readonly 'createResolver': A.createResolver
}