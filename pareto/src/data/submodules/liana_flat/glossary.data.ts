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
    parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "fp": "lib-fountain-pen",
        "liana": "../../../liana",
        "liana2pareto": "../../../liana2pareto",
    }),
    'parameters': d({
        "Annotation": {},
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
    }),
    'interfaces': d({}),
    'functions': d({
        "Serialize": func(parametrizedTypeReference("liana2pareto", { "Annotation": typeReference("Annotation") }, "MappedModel"), null, interfaceReference("fp", "Directory"), null),
    }),
}