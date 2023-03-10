import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createGenerator": algorithm(functionReference("this", {}, "GenerateAndReport"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
            "map": functionReference("this", {}, "Map"),
            "serialize": functionReference("serializeGlossary", {}, "Serialize"),
        })),
        "createMapper": algorithm(functionReference("this", {}, "Map"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            "buildDictionary": functionReference("build", {}, "UnsafeBuildDictionary"),
        })),
    }),
}