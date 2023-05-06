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
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "common": imp(),
        "liana2glossary": imp(),
        "tendril2glossary": imp(),
        "tendril2algorithm": imp(),
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
            "CompileParameters": type(group({
                "outputs": member(array(group({
                    "path": member(ref(externalTypeReference("common", "Path"))),
                    "data": member(taggedUnion({
                        "liana": ref(externalTypeReference("liana2glossary", "MapData", { "Annotation": glossaryParameter("Annotation") })),
                        "tendril": ref(externalTypeReference("tendril2glossary", "MapData", { "Annotation": glossaryParameter("Annotation") }))
                    })),
                })))
            })),
            // "CompileModelParameters": type(group({
            //     "path": member(ref(externalTypeReference("common", "Path"))),
            //     //"library": member(ref(externalTypeReference("liana", "Type Library", {}, { "Annotation": glossaryParameter("Annotation") }))),
            //     "library": member(ref(externalTypeReference("liana", "Type Library", { "XAnnotation": glossaryParameter("XAnnotation") }))),

            //     "terminal mapping": member(dictionary(taggedUnion({
            //         "boolean": null_(),
            //         "number": null_(),
            //         "string": null_(),
            //     }))),
            //     "resolver": member(optional(group({
            //         "path": member(ref(externalTypeReference("common", "Path"))),
            //     })))
            
            // })),
            "GenerateResolverParameters": type(group({
                "path": member(ref(externalTypeReference("common", "Path"))),
                "data": member(ref(externalTypeReference("tendril2algorithm", "CreateResolverParameters", { "Annotation": glossaryParameter("Annotation") }))),
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
            "Nothing": sInterface(['group', { 'members': pd.d({}) }]),
        }),
        'algorithms': d({
            "Compile": procedure(data(typeReference("CompileParameters")), sInterfaceReference("OnError")),
            //"CompileModel": procedure(data(typeReference("CompileModelParameters")), sInterfaceReference("OnError")),
            "GenerateResolver": procedure(data(typeReference("GenerateResolverParameters")), sInterfaceReference("Nothing")),
        }),
    },

}