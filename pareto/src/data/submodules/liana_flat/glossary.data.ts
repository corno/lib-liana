import * as pd from 'pareto-core-data'

import {
    data,
    externalTypeReference, glossaryParameter, imp, procedure, sExternalInterfaceReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "fp": imp({}),
        "main": imp({ "Annotation": glossaryParameter("Annotation") }),
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
            "Serialize": procedure(data(externalTypeReference("main", "Mapped Library")), sExternalInterfaceReference("fp", "Directory")),
        }),
    },

}