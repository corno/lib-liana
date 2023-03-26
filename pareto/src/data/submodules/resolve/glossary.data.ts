import * as pd from 'pareto-core-data'

import {
    data, externalTypeReference, glossaryParameter,
    imp, sfunction,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "liana": imp({ "Annotation": glossaryParameter("Annotation") }),
        "liana_resolved": imp({ "Annotation": glossaryParameter("Annotation") }),
    }),
    'types': d({
    }),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Resolve": sfunction(externalTypeReference("liana_resolved", "Model"), data(externalTypeReference("liana", "Model"))),
        }),
    },

}