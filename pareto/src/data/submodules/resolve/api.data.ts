import * as pd from 'pareto-core-data'

import { algorithm, dependent, sfunction, sSideEffect } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "resolve": algorithm(sfunction("this", {}, "Resolve"), { "Annotation": "Annotation" }, dependent(null, {
            //"decorateDictionaryEntriesWithKey": functionReference("this", {}, "foreach", {}, "DecorateDictionaryEntriesWithKey"),
        }, {
            "onError": sSideEffect("main", { "Annotation": "Annotation" }, "OnError"),
        })),
    }),
}