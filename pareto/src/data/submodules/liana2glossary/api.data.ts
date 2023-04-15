import * as pd from 'pareto-core-data'

import { algorithm, dependent, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        // "createGenerator": algorithm(procedure("this", {}, "GenerateAndReport"), { "Annotation": "Annotation" }, dependent(null, {
        //     // "decorateDictionaryEntriesWithKey": sfunction("foreach", {}, "DecorateDictionaryEntriesWithKey"),
        //     // "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
        //     "map": sfunction("this", { "XAnnotation": "GAnnotation" }, "Map"),
        //     "serialize": procedure("serializeGlossary", { "Annotation": "GAnnotation" }, "Serialize"),
        // }, {})),
        "map": algorithm(sfunction("this", {}, "Map"), { "Annotation": "Annotation" }, dependent(null, {
            "decorateDictionaryEntriesWithKey": sfunction("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            "buildDictionary": sfunction("build", {}, "BuildUnsafeDictionary"),
            "filter": sfunction("dictionary", {}, "Filter"),
            "merge": sfunction("array", {}, "Merge"),
            "push": sfunction("array", {}, "Push"),
        }, {})),
    }),
}