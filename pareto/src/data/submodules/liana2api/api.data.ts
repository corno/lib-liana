import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "generate": algorithm(functionReference("this", {}, "Generate")),
        "createGenerator": algorithm(functionReference("this", {}, "Generate"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            "logError": functionReference("fs", {}, "HandleWriteFileError"),
            "map": functionReference("this", {}, "Map"),
            "serialize": functionReference("api", {}, "Serialize"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
        })),
        "createMapper": algorithm(functionReference("this", {}, "Map"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            "buildDictionary": functionReference("build", {}, "UnsafeBuildDictionary"),
        })),
    }),
}