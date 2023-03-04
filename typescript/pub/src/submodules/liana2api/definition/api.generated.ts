import * as pt from 'pareto-core-types'

import * as g_api from "lib-pareto-typescript-project/dist/submodules/api"
import * as g_build from "res-pareto-build"
import * as g_foreach from "res-pareto-foreach"
import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"

export type createGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': g_foreach.F.DecorateDictionaryEntriesWithKey
    readonly 'dictionaryForEach': g_foreach.F.DictionaryForEach
    readonly 'logError': g_fs.F.HandleWriteFileError
    readonly 'map': g_this.F.Map
    readonly 'serialize': g_api.F.Serialize
}) => g_this.F.Generate

export type createMapper = ($d: {
    readonly 'buildDictionary': g_build.F.UnsafeBuildDictionary
    readonly 'decorateDictionaryEntriesWithKey': g_foreach.F.DecorateDictionaryEntriesWithKey
}) => g_this.F.Map

export type generate = g_this.F.Generate

export type API = {
    createGenerator: createGenerator
    createMapper: createMapper
    generate: generate
}