import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import {
    typeReference,
    type,
    group,
    member,
    array,
    data,
    dictionary,
    taggedUnion,
    null_,
    optional,
    glossaryParameter,
    boolean,
    string,
    imp,
    ref,
    externalTypeReference,
    sInterfaceMethod,
    sInterfaceReference,
    procedure,
    sInterface,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "common": imp({}),
        "liana": imp({ "Annotation": glossaryParameter("Annotation") }),
        "liana2glossary": imp({ "Annotation": glossaryParameter("Annotation") }),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "CompileParameters": type(group({
                "outputs": member(array(group({
                    "path": member(ref(externalTypeReference("common", "Path"))),
                    "data": member(ref(externalTypeReference("liana2glossary", "MapData"))),
                })))
            })),
            "Error": type(group({
                "message": member(ref(externalTypeReference("common", "String"))),
                // `no such global type: ${$['global type'].key}, (${_keys(tl['global types'])})`,
                // `no such property: ${$.option.key}, (${_keys(opts)})`,
                // `no such property: ${$.property.key}, (${_keys(props)})`,
                // `not a dictionary`,
                // `not a group`,
                // `not a tagged union`,
                // `not an array`,
                // `not optional`,

                "annotation": member(ref(glossaryParameter("Annotation"))),
            })),
            // "Error": type(group({
            //     "type": member(taggedUnion({
            //         "raw": string(),
            //     })),
            //     "annotation": member(glossaryParameter("Annotation")),
            // })),

            // "MapData": type(group({
            //     "mapped library": member(ref(typeReference("Mapped Library"))),
            //     "settings": member(group({
            //         "datamodel": member(optional(group({
            //             "annotations": member(boolean()),
            //             "reference mapping": member(taggedUnion({
            //                 "string": group({}),
            //                 "reference": group({}),
            //                 "reference and string": group({}),
            //             })),
            //         }))),
            //         "visitor interface": member(optional(group({
            //             "datamodel": member(taggedUnion({
            //                 "internal": group({}),
            //                 "exernal": group({
            //                     "location": member(string()),
            //                 }),
            //             })),
            //         }))),
            //         "algorithms": member(group({
            //             "serialize": member(optional(group({
            //                 //data location,
            //             }))),
            //             //resolve
            //         })),
            //     })),
            // })),

        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "OnError": sInterface(sInterfaceMethod(typeReference("Error"))),
        }),
        'algorithms': d({
            "Compile": procedure(data(typeReference("CompileParameters")), sInterfaceReference("OnError"))
        }),
    },

}