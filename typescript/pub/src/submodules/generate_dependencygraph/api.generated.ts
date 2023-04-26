import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type generateDependencyGraph = <GAnnotation>() => g_this.SYNC.A.P.GenerateDependencyGraph<GAnnotation>
}

export type API = {
    readonly 'generateDependencyGraph': A.generateDependencyGraph
}