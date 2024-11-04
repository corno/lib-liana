import * as pd from 'pareto-core-data'

import {
    string, member, group,
    typeReference,
    type,
    externalTypeReference,
    sfunction,
    data,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
    }),
    'imports': d({
        "common": null,
        "main": null,
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "Typescript Location": type(group({
                "file": member(string()),
                "line": member(number()),
                "column": member(number()),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "CreateErrorMessage": sfunction(externalTypeReference("common", "String"), data(externalTypeReference("main", "Error", { "Annotation": typeReference("Typescript Location") }))),
        }),
    },

}