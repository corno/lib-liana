import * as pt from 'pareto-core-types'

import * as g_api from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_build from "res-pareto-build"
import * as g_common from "glo-pareto-common"
import * as g_foreach from "res-pareto-foreach"
import * as g_this from "./glossary"

export type createLiana2SerializerMapper = ($d: {}) => g_this.F.MapLiana2Serializer

export type createLiana2StatesMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': g_foreach.F.DecorateDictionaryEntriesWithKey
}) => g_this.F.MapLiana2States

export type API = {
    createLiana2SerializerMapper: createLiana2SerializerMapper
    createLiana2StatesMapper: createLiana2StatesMapper
}