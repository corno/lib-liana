import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"

export type createResolver = ($d: {}) => g_this.F.Resolve

export type API = {
    createResolver: createResolver
}