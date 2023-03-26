import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createGenerator": algorithm(functionReference("this", {}, "GenerateAndReport"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
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