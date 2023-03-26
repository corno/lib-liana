import * as pd from 'pareto-core-data'

import { algorithm, constructor, dependent, procedure, sfunction } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
const d = pd.d

export const $: g_project.T.ModuleDefinition.api.root<pd.SourceLocation> = {
    'algorithms': d({
        "serialize": algorithm(procedure("this", {}, "Serialize"), { "Annotation": "Annotation" }, dependent(null, {
            "createIdentifier": sfunction("ts", {}, "CreateIdentifier"),
            "joinNestedStrings": sfunction("tostring", {}, "JoinNestedStrings"),
            //"serializeStates": procedure("pareto2typescript", {}, "SerializeStates"),
            "dictionaryForEach": procedure("foreach", {}, "DictionaryForEach"),
        }, {})),
    }),
}