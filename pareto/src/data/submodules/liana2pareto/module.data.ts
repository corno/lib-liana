import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': glossary,
        'imports': d({
            "algorithm": "lib-pareto-typescript-project/dist/submodules/algorithm",
            "algorithm_temp": "../../../algorithm_temp",
            "common": "glo-pareto-common",
            "liana": "../../../liana",
            "main": "res-pareto-main",
            "project": "lib-pareto-typescript-project/dist/submodules/project",
        }),
        'api': api,
    },
    'implementation': ['typescript', null],
}