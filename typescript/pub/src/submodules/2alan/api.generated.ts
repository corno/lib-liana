import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type map = <GAnnotation>() => g_this.SYNC.A.P.Map<GAnnotation>
}

export type API = {
    readonly 'map': A.map
}