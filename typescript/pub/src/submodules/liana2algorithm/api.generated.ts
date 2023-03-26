import * as pt from 'pareto-core-types'

import * as g_api from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_build from "res-pareto-build"
import * as g_common from "glo-pareto-common"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"

export namespace A {
    
    export type mapLiana2Serializer = <GAnnotation>() => g_this.SYNC.A.F.MapLiana2Serializer<GAnnotation>
    
    export type mapLiana2States = <GAnnotation>($d: {
        readonly 'decorateDictionaryEntriesWithKey': g_foreach.SYNC.A.F.DecorateDictionaryEntriesWithKey
    }, ) => g_this.SYNC.A.F.MapLiana2States<GAnnotation>
}

export type API = {
    readonly 'mapLiana2Serializer': A.mapLiana2Serializer
    readonly 'mapLiana2States': A.mapLiana2States
}