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
    parametrizedReference,
    builderReference,
    builderMethod
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "Error": type(group({
            "message": member(reference("common", "String")),
            "annotation": member(glossaryParameter("Annotation")),
        }))
    }),
    'builders': d({
        "OnError": builderMethod(typeReference("Error"))
    }),
    'interfaces': d({}),
    'functions': d({
        "Resolve": func(parametrizedTypeReference("liana", { "Annotation": typeReference("Annotation") }, "Model"), null, builderReference("OnError"), data(parametrizedTypeReference("liana_resolved", { "Annotation": typeReference("Annotation") }, "Model"), false)),
    }),
}