import * as pd from 'pareto-core-data'
import {
    string,
    null_,
    reference,
    array, dictionary, group, member, taggedUnion, types, typeReference, interfaceReference, method, func, data, type, glossaryParameter, parametrizedReference
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import { definitionReference, constructor, algorithm } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands"

import * as gmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pd.d

export const $: gmoduleDefinition.T.ModuleDefinition<pd.SourceLocation> = {
    'glossary': {
        'parameters': d({
            "Annotation": {}
        }),
        'imports': d({
        }),
        'types': d({
        }),
        'interfaces': d({
        }),
        'functions': d({   }),
    },
    'api': {
        'imports': d({     }),
        'algorithms': d({   })
    },
}