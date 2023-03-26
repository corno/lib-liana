import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"


import { $ as pure } from "./pure.api.data"

import { $ as glossary } from "./glossary.generated"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
        }),
    },
        'api': {
            'root': pure,
            'imports': d({
            }),
        },
        'implementation': ['typescript', null],


}