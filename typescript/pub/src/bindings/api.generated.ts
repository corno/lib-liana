import * as pt from 'pareto-core-types'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary_serialize"
import * as g_main from "../main"
import * as g_resolve from "../submodules/resolve"

export namespace D {
    
}

export namespace A {
    
    export type resolve = <GAnnotation>() => g_resolve.SYNC.A.F.Resolve<GAnnotation>
}

export type API = {
    readonly 'resolve': A.resolve
}