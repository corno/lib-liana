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
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d({
            "MapLiana2States": sfunc(parametrizedTypeReference("main", { "Annotation": typeReference("Annotation") }, "MappedModel"), null, null, sdata(parametrizedTypeReference("algorithm", { "Annotation": typeReference("OutAnnotation") }, "States"), false)),
            "MapLiana2Serializer": sfunc(parametrizedTypeReference("main", { "Annotation": typeReference("Annotation") }, "MappedModel"), null, null, sdata(parametrizedTypeReference("algorithm_temp", { "Annotation": typeReference("OutAnnotation") }, "AlgorithmImplementation"), false)),
        }),

    }],
}