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
                "liana_resolved": sibling("liana_resolved"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "this": this_(),
                "main": main(),
            }),
        },
    },
    'implementation': ['typescript', null],
}