import * as pd from 'pareto-core-data'

import {
    boolean, data, dictionary, externalTypeReference, glossaryParameter, group, imp, member, null_, optional, procedure, ref,
    sExternalInterfaceReference, sfunction, sInterface, sInterfaceMethod, sInterfaceReference, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "common": imp({}),
        "fs": imp({}),
        "glossary": imp({ "Annotation": typeReference("OutAnnotation") }),
        "main": imp({ "Annotation": glossaryParameter("Annotation") }),
        "liana": imp({ "Annotation": glossaryParameter("Annotation") }),
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
                "settings": member(group({
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
                    "visitor interface": member(optional(group({
                        "datamodel": member(taggedUnion({
                            "internal": group({}),
                            "exernal": group({
                                "location": member(string()),
                            }),
                        })),
                    }))),
                    "algorithms": member(group({
                        "serialize": member(optional(group({
                            //data location,
                        }))),
                        //resolve
                    })),
                })),
            })),
            "Mapped Library": type(group({
                "library": member(ref(externalTypeReference("liana", "Type Library"))),
                "terminal mapping": member(dictionary(taggedUnion({
                    "boolean": null_(),
                    "number": null_(),
                    "string": null_(),
                }))),
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
            "GenerateAndReport": procedure(data(typeReference("GenerateData")), sInterfaceReference("OnWriteFileError")),
            "Map": sfunction(externalTypeReference("glossary", "Glossary"), data(typeReference("MapData"))),
        }),
    },

}