import * as pt from 'pareto-core-types'

import * as g_flat from "../submodules/liana_flat"
import * as g_liana2api from "../submodules/liana2api"
import * as g_liana2glossary from "../submodules/liana2glossary"
import * as g_main from "../main"

export namespace A {
    
    export type compile = <GAnnotation>() => g_main.SYNC.A.P.Compile<GAnnotation>
    
    export type generateAPI = <GAnnotation>() => g_liana2api.SYNC.A.P.Generate<GAnnotation>
    
    export type generateGlossary = <GAnnotation>() => g_liana2glossary.SYNC.A.P.Generate<GAnnotation>
    
    export type serialize_$flat = <GAnnotation>() => g_flat.SYNC.A.P.Serialize<GAnnotation>
}

export type API = {
    readonly 'compile': A.compile
    readonly 'generateAPI': A.generateAPI
    readonly 'generateGlossary': A.generateGlossary
    readonly 'serialize_flat': A.serialize_$flat
}