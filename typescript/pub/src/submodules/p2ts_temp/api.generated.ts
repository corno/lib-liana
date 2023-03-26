import * as pt from 'pareto-core-types'

import * as g_collation from "res-pareto-collation"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"
import * as g_ts from "res-typescript"

export namespace A {
    
    export type serializeImplementation = <GAnnotation>($d: {
        readonly 'arrayForEach': g_foreach.SYNC.A.P.ArrayForEach
        readonly 'createApostrophedString': g_ts.SYNC.A.F.CreateApostrophedString
        readonly 'createBacktickedString': g_ts.SYNC.A.F.CreateBacktickedString
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'createQuotedString': g_ts.SYNC.A.F.CreateQuotedString
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'enrichedArrayForEach': g_foreach.SYNC.A.P.EnrichedArrayForEach
        readonly 'enrichedDictionaryForEach': g_foreach.SYNC.A.P.EnrichedDictionaryForEach
    }, ) => g_this.SYNC.A.P.SerializeImplementation<GAnnotation>
}

export type API = {
    readonly 'serializeImplementation': A.serializeImplementation
}