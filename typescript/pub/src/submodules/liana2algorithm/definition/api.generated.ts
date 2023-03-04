import * as pt from 'pareto-core-types'

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
import * as gbuild from "res-pareto-build"
import * as gcommon from "glo-pareto-common"
import * as gforeach from "res-pareto-foreach"
import * as gthis from "./glossary"

export type CcreateLiana2SerializerMapper = ($d: {}) => gthis.FMapLiana2Serializer

export type CcreateLiana2StatesMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
}) => gthis.FMapLiana2States

export type API = {
    createLiana2SerializerMapper: CcreateLiana2SerializerMapper
    createLiana2StatesMapper: CcreateLiana2StatesMapper
}