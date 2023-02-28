import * as pd from 'pareto-core-data'

import { functionReference, constructor, algorithm, typeReference } from "lib-pareto-typescript-project/dist/submodules/api/shorthands"

import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
const d = pd.d

export const $: gapi.T.API<pd.SourceLocation> = {
    'imports': d({
        "liana2pareto": "../../liana2pareto",
        "pareto2typescript": "lib-pareto-typescript-project/dist/submodules/pareto2typescript",
        "tostring": "res-pareto-tostring",
        "foreach": "res-pareto-foreach",
        "ts": "res-typescript",
        "this": "./glossary",
    }),
    'algorithms': d({
        "createSerializer": algorithm(functionReference("this", {}, "Serialize"), constructor(null, {
            "createIdentifier": functionReference("ts", {}, "CreateIdentifier"),
            "joinNestedStrings": functionReference("tostring", {}, "JoinNestedStrings"),
            "mapLiana2States": functionReference("liana2pareto", {}, "MapLiana2States"),
            "serializeStates": functionReference("pareto2typescript", {}, "SerializeStates"),
            "dictionaryForEach": functionReference("foreach", {}, "DictionaryForEach")
        })),
        "serialize": algorithm(functionReference("this", {}, "Serialize")),
    })
}