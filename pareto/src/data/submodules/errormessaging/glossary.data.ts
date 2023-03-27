import * as pd from 'pareto-core-data'

import {
    string, member, group,
    typeReference,
    type,
    externalTypeReference,
    imp,
    sfunction,
    data,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'imports': d({
        "common": imp({}),
        "main": imp({ "Annotation": typeReference("Typescript Location") }),
    }),
    'types': d({
        "Typescript Location": type(group({
            "file": member(string()),
            "line": member(string()),
            "column": member(string()),
        })),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "CreateErrorMessage": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("main", "Error"))),
        }),
    },

}