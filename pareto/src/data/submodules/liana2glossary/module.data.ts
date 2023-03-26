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
                "main": main(),
                "glossary": external("lib-pareto-typescript-project/dist/submodules/glossary"),
                "fs": external("res-pareto-filesystem"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "build": external("res-pareto-build"),
                "foreach": external("res-pareto-foreach"),
                "fs": external("res-pareto-filesystem"),
                "serializeGlossary": external("lib-pareto-typescript-project/dist/submodules/glossary_serialize"),
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],

}