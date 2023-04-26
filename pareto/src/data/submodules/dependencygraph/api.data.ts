import * as pd from 'pareto-core-data'

import { algorithm, dependent, constructor, sfunction, procedure } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "generateDependencyGraph": algorithm(procedure("this", {}, "GenerateDependencyGraph"), { "Annotation": "Annotation" }, dependent(null, {
            // "decorateDictionaryEntriesWithKey": sfunction("foreach", {}, "DecorateDictionaryEntriesWithKey"),
            // "map": sfunction("this", { "Annotation": "Annotation" }, "Map"),
            // "serialize": sfunction("api", {}, "Serialize"),
            // "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
        }, {})),
        // "map": algorithm(sfunction("this", {}, "Map"), {}, dependent(null, {
        //     "decorateDictionaryEntriesWithKey": sfunction("foreach", {}, "DecorateDictionaryEntriesWithKey"),
        //     "buildDictionary": sfunction("build", {}, "BuildUnsafeDictionary"),
        // }, {})),
    }),
}