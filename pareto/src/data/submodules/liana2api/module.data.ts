import * as pd from 'pareto-core-data'

import { external, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "common": external("glo-pareto-common"),
                "liana": sibling("liana"),
                "main": external("res-pareto-main"),
                "api": external("lib-pareto-typescript-project/dist/submodules/api"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "api": external("lib-pareto-typescript-project/dist/submodules/api"),
                "build": external("res-pareto-build"),
                "foreach": external("res-pareto-foreach"),
                "fs": external("res-pareto-filesystem"),
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],
}