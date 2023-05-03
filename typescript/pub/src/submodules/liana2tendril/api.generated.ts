import * as pt from 'pareto-core-types'

import * as g_resolve from "res-pareto-resolve"
import * as g_this from "./glossary"

export namespace D {
    
    export type map<GAnnotation> = {
        readonly 'resolveDictionary': g_resolve.SYNC.A.F.SafeResolveDictionary
    }
}

export namespace A {
    
    export type map = <GAnnotation>($d: D.map<GAnnotation>, ) => g_this.SYNC.A.F.Map<GAnnotation>
}

export type API = {
    readonly 'map': A.map
}