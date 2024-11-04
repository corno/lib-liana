import * as pd from 'pareto-core-data'

import {
    boolean, data, dictionary, externalTypeReference, glossaryParameter, group, member, null_, optional, procedure, ref,
    sExternalInterfaceReference, sfunction, sInterface, sInterfaceMethod, sInterfaceReference, string, taggedUnion, type, typeReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "common": null,
        "fs": null,
        "glossary": null,
        "liana": null,
        "tendril": null,
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
        'interfaces': d({
        }),
        'algorithms': d({
            "Map": sfunction(externalTypeReference("tendril", "Type Library", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("liana", "Type Library", { "Annotation": glossaryParameter("Annotation") }))),
        }),
    },

}