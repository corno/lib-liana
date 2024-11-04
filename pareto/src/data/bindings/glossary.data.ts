import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import {
    typeReference,
    type,
    group,
    member,
    array,
    data,
    dictionary,
    taggedUnion,
    null_,
    optional,
    glossaryParameter,
    boolean,
    string,
    ref,
    externalTypeReference,
    sInterfaceMethod,
    sInterfaceReference,
    procedure,
    sInterface,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
    }),
    'imports': d({
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
        }),
    },

}