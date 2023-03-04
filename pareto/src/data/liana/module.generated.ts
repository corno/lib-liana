import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import { external } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

import { $ as glossary } from "./glossary.generated"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "common": external("glo-pareto-common"),
            }),
        },
        'api': {
            'root': {
                'algorithms': d({}),

            },
            'imports': d({}),
        },
    },
    'implementation': ['typescript', null],
}