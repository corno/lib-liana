import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "fp": external("lib-fountain-pen"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                // "collation": "res-pareto-collation",
                // "foreach": external("res-pareto-foreach"),
            }),
        },
    },
    'implementation': ['typescript', null],
}