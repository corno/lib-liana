import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
}

export namespace A {
    
    export type resolve = <GAnnotation>($se: {
        readonly 'error': g_this.SYNC.I.Error<GAnnotation>
    }) => g_this.SYNC.A.F.Resolve<GAnnotation>
}

export type API = {
    readonly 'resolve': A.resolve
}