import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_pareto2typescript from "lib-pareto-typescript-project/dist/submodules/pareto2typescript"
import * as g_this from "../glossary"
import * as g_tostring from "res-pareto-tostring"
import * as g_ts from "res-typescript"

export type createSerializer = ($d: {
    readonly 'createIdentifier': g_ts.F.CreateIdentifier
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'joinNestedStrings': g_tostring.F.JoinNestedStrings
    readonly 'serializeStates': g_pareto2typescript.F.SerializeStates
}) => g_this.F.Serialize

export type API = {
    createSerializer: createSerializer
}