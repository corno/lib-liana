import * as pd from 'pareto-core-data'

import {
    boolean, data, externalTypeReference, glossaryParameter, group, imp, member, optional, procedure, ref,
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
    }),
    'types': d({
        "GenerateData": type(group({
            "data": member(ref(typeReference("MapData"))),
            "path": member(ref(externalTypeReference("common", "Path"))),
        })),
        "MapData": type(group({
            "mapped library": member(ref(externalTypeReference("main", "Mapped Library"))),
            "settings": member(group({
                "datamodel": member(optional(group({
                    "annotations": member(boolean()),
                    "reference mapping": member(taggedUnion({
                        "string": group({}),
                        "reference": group({}),
                        "reference and string": group({}),
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