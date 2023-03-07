import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    boolean,
    func,
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
    'builders': d({
    }),
    'interfaces': d({}),
    'functions': d({
        "CreateErrorMessage": func(parametrizedTypeReference("main", { "Annotation": typeReference("Typescript Location") }, "Error"), null, null, data(typeReference("common", "String"), false)),
    }),
}