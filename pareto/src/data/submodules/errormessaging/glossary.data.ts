import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    boolean,
    sfunc,
    type,
    optional,
    reference,
    number,
    glossaryParameter,
    interfaceReference,
    parametrizedTypeReference,
    parametrizedReference,
    builderReference,
    builderMethod,
    parametrizedBuilderReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
    }),
    'types': d({
        "Typescript Location": type(group({
            "file": member(string()),
            "line": member(string()),
            "column": member(string()),
        })),
    }),
    "type": ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "CreateErrorMessage": sfunc(parametrizedTypeReference("main", { "Annotation": typeReference("Typescript Location") }, "Error"), null, null, sdata(typeReference("common", "String"))),
        }),

    }],
}