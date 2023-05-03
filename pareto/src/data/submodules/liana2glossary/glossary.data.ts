import * as pd from 'pareto-core-data'

import {
    boolean, data, dictionary, externalTypeReference, glossaryParameter, group, imp, member, null_, optional, procedure, ref,
    sExternalInterfaceReference, sfunction, sInterface, sInterfaceMethod, sInterfaceReference, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "common": imp(),
        "fs": imp(),
        "glossary": imp(),
        "liana": imp(),
        "tendril2glossary": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "GenerateData": type(group({
                "data": member(ref(typeReference("MapData"))),
                "path": member(ref(externalTypeReference("common", "Path"))),
            })),
            "MapData": type(group({
                "mapped library": member(ref(typeReference("Mapped Library"))),
                "settings": member(ref(externalTypeReference("tendril2glossary", "Mapping Settings", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "Mapped Library": type(group({
                "library": member(ref(externalTypeReference("liana", "Type Library", { "Annotation": glossaryParameter("Annotation") }))),
                "terminal mapping": member(ref(externalTypeReference("tendril2glossary", "Terminal Mapping", { "Annotation": glossaryParameter("Annotation") }))),
            })),
            "OutAnnotation": type(taggedUnion({
                "source": ref(glossaryParameter("Annotation")),
                "internal": string(),
            })),
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "OnWriteFileError": sInterface(sInterfaceMethod(externalTypeReference("fs", "AnnotatedWriteFileError"))),
        }),
        'algorithms': d({
            "Generate": procedure(data(typeReference("GenerateData")), sExternalInterfaceReference("common", "String")),
            // "GenerateAndReport": procedure(data(typeReference("GenerateData")), sInterfaceReference("OnWriteFileError")),
            //"Map": sfunction(externalTypeReference("glossary", "Glossary", { "Annotation": typeReference("OutAnnotation") }), data(typeReference("MapData"))),
        }),
    },

}