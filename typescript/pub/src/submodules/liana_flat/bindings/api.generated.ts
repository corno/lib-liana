import * as pt from 'pareto-core-types'

import * as g_foreach from "res-pareto-foreach"
import * as g_pareto2typescript from "lib-pareto-typescript-project/dist/submodules/pareto2typescript"
import * as g_this from "../glossary"
import * as g_tostring from "res-pareto-tostring"
import * as g_ts from "res-typescript"

export type serialize = g_this.F.Serialize

export type API = {
    serialize: serialize
}