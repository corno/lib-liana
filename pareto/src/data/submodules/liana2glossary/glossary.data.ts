import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    sdata,
    boolean,
    sfunc,
    type,
    optional,
    reference,
    number,
    glossaryParameter,
    interfaceReference,
    parametrizedTypeReference,
    parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "GenerateData": type(group({
            "data": member(reference("MapData")),
            "path": member(reference("common", "Path")),
        })),
        "MapData": type(group({
            "mapped model": member(parametrizedReference("main", { "Annotation": typeReference("Annotation") }, "MappedModel")),
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
            "source": glossaryParameter("Annotation"),
            "internal": string(),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d({
            "Generate": sfunc(typeReference("GenerateData"), null, null, null),
            "Map": sfunc(typeReference("MapData"), null, null, sdata(parametrizedTypeReference("glossary", { "Annotation": typeReference("OutAnnotation") }, "Glossary"), false)),
        }),

    }],
}