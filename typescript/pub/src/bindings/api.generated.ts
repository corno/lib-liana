import * as pt from 'pareto-core-types'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary_serialize"
import * as g_liana2api from "../submodules/liana2api"
import * as g_liana2glossary from "../submodules/liana2glossary"
import * as g_main from "../main"
import * as g_resolve from "../submodules/resolve"
import * as g_tendril2glossary from "../submodules/tendril2glossary"

export namespace D {
    
}

export namespace A {
    
    export type resolve = <GAnnotation>() => g_resolve.SYNC.A.F.Resolve<GAnnotation>
}

export type API = {
    readonly 'resolve': A.resolve
}