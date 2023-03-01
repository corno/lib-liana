import * as pt from 'pareto-core-types'

import * as gbuild from "res-pareto-build"
import * as gcommon from "glo-pareto-common"
import * as gforeach from "res-pareto-foreach"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gthis from "./glossary"

export type CcreateLiana2ParetoMapper = ($d: {
    readonly 'buildDictionary': gbuild.FUnsafeBuildDictionary
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
}) => gthis.FMapLiana2Pareto

export type CcreateLiana2SerializerMapper = ($d: {}) => gthis.FMapLiana2Serializer

export type CcreateLiana2StatesMapper = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
}) => gthis.FMapLiana2States

export type CcreateModuleGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'logError': gcommon.FLog
    readonly 'mapLiana2Pareto': gthis.FMapLiana2Pareto
    readonly 'serializeProject': gproject.FSerializeWithContext
}) => gthis.FGenerateModule

export type CgenerateModule = gthis.FGenerateModule

export type CmapLiana2Pareto = gthis.FMapLiana2Pareto

export type API = {
    createLiana2ParetoMapper: CcreateLiana2ParetoMapper
    createLiana2SerializerMapper: CcreateLiana2SerializerMapper
    createLiana2StatesMapper: CcreateLiana2StatesMapper
    createModuleGenerator: CcreateModuleGenerator
    generateModule: CgenerateModule
    mapLiana2Pareto: CmapLiana2Pareto
}