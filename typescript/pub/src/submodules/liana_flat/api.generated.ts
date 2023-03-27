import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_pareto2typescript from "lib-pareto-typescript-project/dist/submodules/pareto2typescript"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"
import * as g_ts from "res-typescript"

export namespace D {
    
    export type serialize<GAnnotation> = {
        readonly 'createIdentifier': g_ts.SYNC.A.F.CreateIdentifier
        readonly 'dictionaryForEach': g_foreach.SYNC.A.P.DictionaryForEach
        readonly 'joinNestedStrings': g_tostring.SYNC.A.F.JoinNestedStrings
    }
}

export namespace A {
    
    export type serialize = <GAnnotation>($d: D.serialize<GAnnotation>, ) => g_this.SYNC.A.P.Serialize<GAnnotation>
}

export type API = {
    readonly 'serialize': A.serialize
}