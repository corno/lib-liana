import * as pd from 'pareto-core-data'

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import {
    typeReference,
    sfunc,
    type,
    group,
    member,
    array,
    reference,
    parametrizedReference,
    dictionary,
    taggedUnion,
    null_,
    optional,
    glossaryParameter,
    boolean,
    string,
    builderReference,
    builderMethod,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "CompileParameters": type(group({
            "outputs": member(array(group({
                "path": member(reference("common", "Path")),
                "data": member(reference("MapData")),
            })))
        })),
        "Error": type(group({
            "message": member(reference("common", "String")),
            "annotation": member(glossaryParameter("Annotation")),
        })),
        // "Error": type(group({
        //     "type": member(taggedUnion({
        //         "raw": string(),
        //     })),
        //     "annotation": member(glossaryParameter("Annotation")),
        // })),

        "MapData": type(group({
            "mapped model": member(reference("MappedModel")),
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
        "MappedModel": type(group({
            "model": member(parametrizedReference("liana", { "Annotation": typeReference("Annotation") }, "Model")),
            "terminal mapping": member(dictionary(taggedUnion({
                "boolean": null_(),
                "number": null_(),
                "string": null_(),
            }))),
        })),
    }),
    'type': ['synchronous', {
        'builders': d({
            "OnError": builderMethod(typeReference("Error"))
        }),
        'functions': d({
            "Compile": sfunc(typeReference("CompileParameters"), null, builderReference("OnError"), null)
        }),

    }],
}