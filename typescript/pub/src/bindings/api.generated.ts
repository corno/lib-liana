import * as pt from 'pareto-core-types'

import * as g_flat from "../submodules/liana_flat"

export type generateAPI = g_liana2api.F.Generate

export type generateGlossary = g_liana2glossary.F.Generate

export type serialize_$flat = g_flat.F.Serialize

export type API = {
    generateAPI: generateAPI
    generateGlossary: generateGlossary
    serialize_flat: serialize_$flat
}