import * as pd from 'pareto-core-data'

import {
    data, externalTypeReference, glossaryParameter, group, imp, member, optional, ref, sfunction, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "algorithm": imp({ "Annotation": typeReference("OutAnnotation") }),
        "algorithm_temp": imp({ "Annotation": typeReference("OutAnnotation") }),
        "main": imp({ "Annotation": glossaryParameter("Annotation") }),
    }),
    'types': d({
        "AlgorithmSettings": type(group({
            "serialize": member(optional(group({
                //data location,
            }))),
        })),

        "OutAnnotation": type(taggedUnion({
            "source": ref(glossaryParameter("Annotation")),
            "internal": string(),
        })),
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "MapLiana2States": sfunction(externalTypeReference("algorithm", "States"), data(externalTypeReference("main", "MappedModel"))),
            "MapLiana2Serializer": sfunction(externalTypeReference("algorithm_temp", "AlgorithmImplementation"), data(externalTypeReference("main", "MappedModel"))),
        }),
    },

}