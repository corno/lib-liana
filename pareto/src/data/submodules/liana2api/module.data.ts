import * as pd from 'pareto-core-data'

import { external, main, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"


import { $ as pure } from "./pure.api.data"

import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "common": external("glo-pareto-common"),
            "liana": sibling("liana"),
            "main": main(),
            "api": external("lib-pareto-typescript-project/dist/submodules/project"),
            "fs": external("res-pareto-filesystem"),
        }),
    },
    'api': {
        'root': pure,
        'imports': d({
            "api": external("lib-pareto-typescript-project/dist/submodules/project"),
            "build": external("res-pareto-build"),
            "foreach": external("res-pareto-foreach"),
            "fs": external("res-pareto-filesystem"),
            "this": this_(),
        }),
    },
    'implementation': ['typescript', null],

}