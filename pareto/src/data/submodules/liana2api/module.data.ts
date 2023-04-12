import * as pd from 'pareto-core-data'

import { external, main, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"
import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"


import { $ as api } from "./api.data"

import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "common": external("glo-pareto-common"),
                "liana": sibling("liana"),
                "liana2glossary": sibling("liana2glossary"),
                "main": main(),
                "pareto": external("lib-pareto-typescript-project"),
                "fs": external("res-pareto-filesystem"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                //"pareto": external("lib-pareto-typescript-project"),
                "build": external("res-pareto-build"),
                "foreach": external("res-pareto-foreach"),
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],

}