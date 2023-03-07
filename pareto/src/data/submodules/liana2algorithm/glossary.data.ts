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
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "AlgorithmSettings": type(group({
            "serialize": member(optional(group({
                //data location,
            }))),
        })),

        "OutAnnotation": type(taggedUnion({
            "source": glossaryParameter("Annotation"),
            "internal": string(),
        })),
    }),
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({
        "MapLiana2States": func(parametrizedTypeReference("main", { "Annotation": typeReference("Annotation") }, "MappedModel"), null, null, data(parametrizedTypeReference("algorithm", { "Annotation": typeReference("OutAnnotation") }, "States"), false)),
        "MapLiana2Serializer": func(parametrizedTypeReference("main", { "Annotation": typeReference("Annotation") }, "MappedModel"), null, null, data(parametrizedTypeReference("algorithm_temp", { "Annotation": typeReference("OutAnnotation") }, "AlgorithmImplementation"), false)),
    }),
}