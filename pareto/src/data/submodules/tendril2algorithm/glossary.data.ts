import * as pd from 'pareto-core-data'

import {
    data, dictionary, externalTypeReference, glossaryParameter, group, member, optional, procedure, ref, sExternalInterfaceReference, sInterfaceReference, sfunction, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "algorithm": null,
        "algorithm_temp": null,
        "fp": null,
        "liana": null,
        "tendril2glossary": null,
    }),
    'root': {
        'namespaces': d({}),
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
            "CreateResolverParameters": type(group({
                "model": member(ref(externalTypeReference("liana", "Model", { "Annotation": glossaryParameter("Annotation") }))),
                "in": member(string()),
                "out": member(group({
                    "root": member(string()),
                    "subs": member(dictionary(string())),
                })),
            }))
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "MapTendril2States": sfunction(externalTypeReference("algorithm", "States", { "Annotation": typeReference("OutAnnotation") }), data(externalTypeReference("tendril2glossary", "Mapped Library", { "Annotation": glossaryParameter("Annotation") }))),
            "MapTendril2Serializer": sfunction(externalTypeReference("algorithm_temp", "AlgorithmImplementation", { "Annotation": typeReference("OutAnnotation") }), data(externalTypeReference("tendril2glossary", "Mapped Library", { "Annotation": glossaryParameter("Annotation") }))),
            "Create121Mapper": procedure(data(externalTypeReference("liana", "Type Library", { "Annotation": glossaryParameter("Annotation") })), sExternalInterfaceReference("fp", "Block")),
            //"CreateResolver": procedure(data(typeReference("CreateResolverParameters")), sExternalInterfaceReference("fp", "Block")),
        }),
    },

}