import * as pt from 'pareto-core-types'

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
import * as gbuild from "res-pareto-build"
import * as gforeach from "res-pareto-foreach"
import * as gfs from "res-pareto-filesystem"
import * as gthis from "./glossary"

export type CcreateGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'logError': gfs.FHandleWriteFileError
    readonly 'map': gthis.FMap
    readonly 'serialize': gapi.FSerialize
}) => gthis.FGenerate

export type CcreateMapper = ($d: {
    readonly 'buildDictionary': gbuild.FUnsafeBuildDictionary
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
}) => gthis.FMap

export type Cgenerate = gthis.FGenerate

export type API = {
    createGenerator: CcreateGenerator
    createMapper: CcreateMapper
    generate: Cgenerate
}