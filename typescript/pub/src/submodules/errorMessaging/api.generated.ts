import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace A {
    
    export type createErrorMessage = () => g_this.SYNC.A.F.CreateErrorMessage
}

export type API = {
    readonly 'createErrorMessage': A.createErrorMessage
}