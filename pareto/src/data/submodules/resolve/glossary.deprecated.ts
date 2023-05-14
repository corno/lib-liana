import * as pd from 'pareto-core-data'

import { data, dictionary, externalTypeReference, glossaryParameter, group, imp, member, number, procedure, ref, sExternalInterfaceReference, sInterface, sInterfaceMethod, sfunction, string, taggedUnion, type, typeReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "in": imp(),
        "out": imp(),
    }),

        'glossary parameters': d({
            "Annotation": null,
        }),

        'root': {
            'namespaces': d({}),
            'types': d({
                "Error": type(group({
                    "annotation": member(ref(glossaryParameter("Annotation"))),
                    "message": member(taggedUnion({
                        "no such entry": group({
                            "key": member(string())
                        }),
                        "not the right state": group({
                            "expected": member(string()),
                            "found": member(string())
                        })
                    }))
                })),
                "Resolve Parameters": type(group({
                    "root": member(ref(externalTypeReference("in", "Root", { "Annotation": glossaryParameter("Annotation"), }))),
                    "imports": member(dictionary(ref(externalTypeReference("out", "Type Library"))))

                }))
            }),
        },
        'asynchronous': {
            'interfaces': d({}),
            'algorithms': d({}),
        },
        'synchronous': {
            'interfaces': d({
                "OnError": sInterface(sInterfaceMethod(typeReference("Error")))
            }),
            'algorithms': d({
                "Resolve": sfunction(externalTypeReference("out", "Root"), data(typeReference("Resolve Parameters"))),
            }),
        },
}