import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"

import { $ as glossary } from "./glossary.data"
import { external, main, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "fp": external("lib-fountain-pen"),
                "liana": sibling("liana"),
                "liana2glossary": sibling("liana2glossary"),
                "main": main(),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "pareto2typescript": external("lib-pareto-typescript-project/dist/submodules/pareto2typescript"),
                "tostring": external("res-pareto-tostring"),
                "foreach": external("res-pareto-foreach"),
                "ts": external("res-typescript"),
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],


}