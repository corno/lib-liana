import * as pd from 'pareto-core-data'

import {
    data,
    externalTypeReference, glossaryParameter, procedure, sExternalInterfaceReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "fp": null,
        "tendril2glossary": null,
    }),
    'root': {
        'namespaces': d({}),
        'types': d({
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "Serialize": procedure(data(externalTypeReference("tendril2glossary", "Mapped Library", { "Annotation": glossaryParameter("Annotation") })), sExternalInterfaceReference("fp", "Directory")),
        }),
    },

}