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
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "algorithm": "../../../algorithm_temp",
        "common": "glo-pareto-common",
        "fp": "lib-fountain-pen",
    }),
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
    }),
    'interfaces': d({
    }),
    'functions': d({
        "SerializeImplementation": func(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "Implementation"), null, interfaceReference("fp", "Directory"), null),
    }),
}