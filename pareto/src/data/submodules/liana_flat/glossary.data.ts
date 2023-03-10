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
    builderReference,
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
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d({
            "Serialize": sfunc(parametrizedTypeReference("main",{ "Annotation": typeReference("Annotation")}, "MappedModel"), null, builderReference("fp", "Directory"), null),
        }),

    }],
}