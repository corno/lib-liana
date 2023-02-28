import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'imports': d({
        "build": "res-pareto-build",
        "common": "glo-pareto-common",
        "foreach": "res-pareto-foreach",
        "project": "lib-pareto-typescript-project/dist/submodules/project",
        "this": "./glossary",
    }),
    'algorithms': d({
        "generateModule": algorithm(functionReference("this", {}, "GenerateModule")),
        "createModuleGenerator": algorithm(functionReference("this", {}, "GenerateModule"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            "logError": functionReference("common", {}, "Log"),
            "mapLiana2Pareto": functionReference("this", {}, "MapLiana2Pareto"),
            "serializeProject": functionReference("project", {}, "SerializeWithContext"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
        })),
        "createLiana2ParetoMapper": algorithm(functionReference("this", {}, "MapLiana2Pareto"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            "buildDictionary": functionReference("build", {}, "UnsafeBuildDictionary"),
        })),
        "mapLiana2Pareto": algorithm(functionReference("this", {}, "MapLiana2Pareto")),
        "createLiana2StatesMapper": algorithm(functionReference("this", {}, "MapLiana2States"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
        })),
        "createLiana2SerializerMapper": algorithm(functionReference("this", {}, "MapLiana2Serializer"), constructor(null, {
            //"decorateDictionaryEntriesWithKey": functionReference("this", {}, "foreach", {}, "DecorateDictionaryEntriesWithKey"),
        })),
    })
}