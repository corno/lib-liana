import * as pd from 'pareto-core-data'

import {
    typeReference,
    sdata,
    sfunc,
    type,
    glossaryParameter,
    parametrizedTypeReference,
    parametrizedBuilderReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
    }),
    'type': ['synchronous', {
        'builders': d({
        }),
        'functions': d({
            "Resolve": sfunc(parametrizedTypeReference("liana", { "Annotation": typeReference("Annotation") }, "Model"), null, parametrizedBuilderReference("main", { "Annotation": typeReference("Annotation") }, "OnError"), sdata(parametrizedTypeReference("liana_resolved", { "Annotation": typeReference("Annotation") }, "Model"), false)),
        }),

    }]
}