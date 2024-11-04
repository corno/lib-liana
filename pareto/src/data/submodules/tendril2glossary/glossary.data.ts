import * as pd from 'pareto-core-data'

import {
    boolean, data, dictionary, externalTypeReference, glossaryParameter, group, member, null_, optional, procedure, ref,
    sExternalInterfaceReference, sfunction, sInterface, sInterfaceMethod, sInterfaceReference, string, taggedUnion, type, typeReference
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
        "glossary": null,
        "tendril": null,
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "GenerateData": type(group({
                "data": member(ref(typeReference("MapData"))),
                "path": member(ref(externalTypeReference("common", "Path"))),
            })),
            "Mapping Settings": type(group({
                "annotations": member(boolean()),
                "datamodel": member(optional(group({
                    "constraints mapping": member(group({
                        "terminal values": member(boolean()),
                        "constraints": member(optional(taggedUnion({
                            "optional": group({}),
                            "required": group({}),
                        }))),
                    })),
                }))),
                // "visitor interface": member(optional(group({
                //     "datamodel": member(taggedUnion({
                //         "internal": group({}),
                //         "exernal": group({
                //             "location": member(string()),
                //         }),
                //     })),
                // }))),
                // "algorithms": member(group({
                //     "serialize": member(optional(group({
                //         //data location,
                //     }))),
                //     //resolve
                // })),
            })),
            "MapData": type(group({
                "mapped library": member(ref(typeReference("Mapped Library"))),
                "settings": member(ref(typeReference("Mapping Settings"))),
            })),
            "Mapped Library": type(group({
                "library": member(ref(externalTypeReference("tendril", "Type Library", { "Annotation": glossaryParameter("Annotation") }))),
                "terminal mapping": member(ref(typeReference("Terminal Mapping"))),
            })),
            "Terminal Mapping": type(dictionary(taggedUnion({
                "boolean": null_(),
                "number": null_(),
                "string": null_(),
            }))),
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
            "GenerateAndReport": procedure(data(typeReference("GenerateData")), sInterfaceReference("OnWriteFileError")),
            "Map": sfunction(externalTypeReference("glossary", "Glossary", { "Annotation": typeReference("OutAnnotation") }), data(typeReference("MapData"))),
        }),
    },

}