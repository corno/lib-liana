import * as pt from 'pareto-core-types'

import * as g_resolve from "res-pareto-resolve"
import * as g_this from "./glossary"

export namespace D {
    
    export type map = {
        readonly 'resolveDictionary': g_resolve.SYNC.A.F.SafeResolveDictionary
    }
}

export namespace A {
    
    export type map = ($d: D.map, ) => g_this.SYNC.A.F.Map
}

export type API = {
    readonly 'map': A.map
}