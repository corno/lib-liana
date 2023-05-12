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
                "in": sibling("liana"),
                "out": external("lib-pareto-lang-data/dist/submodules/unresolved"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({

                // "array": external("res-pareto-array"),
                // "build": external("res-pareto-build"),
                "resolve": external("res-pareto-resolve"),
                // "dictionary": external("res-pareto-dictionary"),
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],

}