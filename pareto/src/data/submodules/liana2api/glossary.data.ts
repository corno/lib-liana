import * as pd from 'pareto-core-data'

import {
    boolean,
    data,
    dictionary,
    externalTypeReference, glossaryParameter, group, member, null_, optional, procedure, ref, sExternalInterfaceReference, sfunction, sInterface, sInterfaceMethod, sInterfaceReference, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "common": null,
        "fs": null,
        "tendril2glossary": null,
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "GenerateData": type(group({
                "data": member(ref(externalTypeReference("tendril2glossary", "MapData", { "Annotation": glossaryParameter("Annotation") }))),
                "path": member(ref(externalTypeReference("common", "Path"))),
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
            //"GenerateAndReport": sfunc(typeReference("GenerateData"), null, builderReference("OnWriteFileError"), null),
            //"Map": sfunction(externalTypeReference("api", "API", { "Annotation": typeReference("OutAnnotation") }), data(typeReference("MapData"))),
        }),
    },

}