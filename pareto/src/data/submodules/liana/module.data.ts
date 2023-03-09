import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"


import { $ as bindings } from "./bindings.api.data"
import { $ as pure } from "./pure.api.data"

import { $ as glossary } from "./glossary.generated"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
        }),
    },
    'bindings': {
        'api': {
            'root': bindings,
            'imports': d({
            }),
        },
        'implementation': ['typescript', null],
    },
    'pure algorithms': {
        'api': {
            'root': pure,
            'imports': d({
            }),
        },
        'implementation': ['typescript', null],
    },


}