import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createLiana2StatesMapper": algorithm(functionReference("this", {}, "MapLiana2States"), constructor(null, {
            "decorateDictionaryEntriesWithKey": functionReference("foreach", {}, "DecorateDictionaryEntriesWithKey"),
        })),
        "createLiana2SerializerMapper": algorithm(functionReference("this", {}, "MapLiana2Serializer"), constructor(null, {
            //"decorateDictionaryEntriesWithKey": functionReference("this", {}, "foreach", {}, "DecorateDictionaryEntriesWithKey"),
        })),
    }),
}