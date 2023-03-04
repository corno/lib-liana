import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: gproject.T.Project._ltype.library.main<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
            }),
        },
        'api': {
            'root': api,
            'imports': d({}),
        },
    },
    'implementation': ['typescript', null],
}