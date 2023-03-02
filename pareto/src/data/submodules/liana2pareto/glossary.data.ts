import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    boolean,
    func,
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
    'imports': d({
        "algorithm": "lib-pareto-typescript-project/dist/submodules/algorithm",
        "algorithm_temp": "../../../algorithm_temp",
        "common": "glo-pareto-common",
        "liana": "../../../liana",
        "main": "res-pareto-main",
        "project": "lib-pareto-typescript-project/dist/submodules/project",
    }),
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "GenerateModuleData": type(group({
            "data": member(reference("MapLiana2ParetoData")),
            "path": member(reference("common", "Path")),
        })),
        "GenerationConfiguration": type(group({
            "datamodel": member(optional(group({
                "annotations": member(boolean()),
                "properties optional": member(boolean()),
                "reference mapping": member(taggedUnion({
                    "string": group({}),
                    "reference": group({}),
                    "reference and string": group({}),
                }))
            }))),
            "visitor interface": member(optional(group({
                "datamodel location": member(string()),
            }))),
            "algorithms": member(group({
                "serialize": member(optional(group({
                    //data location,
                }))),
                //resolve
            })),
        })),
        "MapLiana2ParetoData": type(group({
            "mappedModel": member(reference("MappedModel")),
            "configuration": member(reference("GenerationConfiguration")),
        })),
        "MappedModel": type(group({
            "model": member(parametrizedReference("liana", { "Annotation": typeReference("Annotation")}, "Model")),
            "stringmapping": member(dictionary(taggedUnion({
                "boolean": null_(),
                "number": null_(),
                "string": null_(),
            }))),
        })),
        "Modules": type(group(({
            "modules": member(dictionary(parametrizedReference("project", { "Annotation": typeReference("Annotation") }, "Module")))
        }))),
        "Module": type(parametrizedReference("project", { "Annotation": typeReference("Annotation") }, "Module")),
        
        "OutAnnotation": type(taggedUnion({
            "source": glossaryParameter("Annotation"),
            "internal": string(),
        })),
    }),
    'interfaces': d({}),
    'functions': d({
        "GenerateModule": func(typeReference("GenerateModuleData"), null, null, null),
        "MapLiana2Pareto": func(typeReference("MapLiana2ParetoData"), null, null, data(typeReference("Module"), false)),
        "MapLiana2States": func(typeReference("MappedModel"), null, null, data(parametrizedTypeReference("algorithm", { "Annotation": typeReference("Annotation") }, "States"), false)),
        "MapLiana2Serializer": func(typeReference("MappedModel"), null, null, data(parametrizedTypeReference("algorithm_temp", { "Annotation": typeReference("OutAnnotation") }, "AlgorithmImplementation"), false)),
    }),
}