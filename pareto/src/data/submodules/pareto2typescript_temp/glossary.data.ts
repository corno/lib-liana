import * as pd from 'pareto-core-data'

import {
    data, externalTypeReference, glossaryParameter, imp,
    procedure,
    sExternalInterfaceReference,
    sInterfaceReference, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "fp": imp(),
        "algorithm": imp(),
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
            "SerializeImplementation": procedure(data(externalTypeReference("algorithm", "Implementation", { "Annotation": glossaryParameter("Annotation") })), sExternalInterfaceReference("fp", "Directory")),
        }),
    },
}