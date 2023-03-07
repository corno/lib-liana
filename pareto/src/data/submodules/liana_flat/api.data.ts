import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'algorithms': d({
        "createSerializer": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
            "joinNestedStrings": functionReference("tostring", {}, "JoinNestedStrings"),
            "serializeStates": functionReference("pareto2typescript", {}, "SerializeStates"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach"),
        })),
        "serialize": algorithm(functionReference("this", {}, "Serialize")),
    }),
}