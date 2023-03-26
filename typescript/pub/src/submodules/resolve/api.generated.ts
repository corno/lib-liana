import * as pt from 'pareto-core-types'

import * as g_main from "../../main"
import * as g_this from "./glossary"

export namespace A {
    
    export type resolve = <GAnnotation>($se: {
        readonly 'onError': g_main.SYNC.I.OnError<GAnnotation>
    }, ) => g_this.SYNC.A.F.Resolve<GAnnotation>
}

export type API = {
    readonly 'resolve': A.resolve
}