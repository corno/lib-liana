import * as pt from 'pareto-core-types'

import * as gbuild from "res-pareto-build"
import * as gforeach from "res-pareto-foreach"
import * as gfs from "res-pareto-filesystem"
import * as gserializeGlossary from "lib-pareto-typescript-project/dist/submodules/glossary_serialize_temp"
import * as gthis from "./glossary"

export type CcreateGenerator = ($d: {
    readonly 'decorateDictionaryEntriesWithKey': gforeach.FDecorateDictionaryEntriesWithKey
    readonly 'dictionaryForEach': gforeach.FDictionaryForEach
    readonly 'logError': gfs.FHandleWriteFileError
    readonly 'map': gthis.FMap
    readonly 'serialize': gserializeGlossary.FSerialize
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