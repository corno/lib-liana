import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"
import { external, tempSubmodule, this_ } from 'lib-pareto-typescript-project/dist/submodules/project/shorthands'

const d = pd.d

export const $: g_project.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "common": external("glo-pareto-common"),
                "liana": tempSubmodule("liana"),
                "tendril2glossary": tempSubmodule("tendril2glossary"),
                "liana2glossary": tempSubmodule("liana2glossary"),
                "tendril2algorithm": tempSubmodule("tendril2algorithm"),
            }),
        },
        'api': {
            'root': api,
            'imports': d({
                "this": this_(),
            }),
        },
    },
    'implementation': ['typescript', null],
}