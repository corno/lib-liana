import * as pd from 'pareto-core-data'

import { external, main, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "algorithm": external("lib-pareto-typescript-project/dist/submodules/algorithm"),
                "algorithm_temp": sibling("algorithm_temp"),
                "liana": sibling("liana"),
                "main": main(),
                "glossary": external("lib-pareto-typescript-project/dist/submodules/glossary"),
                "api": external("lib-pareto-typescript-project/dist/submodules/api"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "api": external("lib-pareto-typescript-project/dist/submodules/api"),
                "build": external("res-pareto-build"),
                "common": external("glo-pareto-common"),
                "foreach": external("res-pareto-foreach"),
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],
}