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
                "algorithm": external("lib-pareto-typescript-project/dist/submodules/algorithm"),
                "algorithm_temp": sibling("algorithm_temp"),
                "liana": sibling("liana"),
                "liana2glossary": sibling("liana2glossary"),
                "main": main(),
                "fp": external("lib-fountain-pen"),
                "glossary": external("lib-pareto-typescript-project/dist/submodules/glossary"),
                "api": external("lib-pareto-typescript-project/dist/submodules/project"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "api": external("lib-pareto-typescript-project/dist/submodules/project"),
                "build": external("res-pareto-build"),
                "common": external("glo-pareto-common"),
                "dictionary": external("res-pareto-dictionary"),
                "foreach": external("res-pareto-foreach"),
                "resolve": external("res-pareto-resolve"),
                "this": this_(),
                "ts": external("res-typescript"),
            }),
        },
    },
    'implementation': ['typescript', null],
}