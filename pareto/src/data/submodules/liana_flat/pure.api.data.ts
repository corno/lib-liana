import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.Module.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "createSerializer": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
            "joinNestedStrings": functionReference("tostring", {}, "JoinNestedStrings"),
            "serializeStates": functionReference("pareto2typescript", {}, "SerializeStates"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
        })),
    }),
}