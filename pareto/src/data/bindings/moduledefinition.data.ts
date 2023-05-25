import * as pd from 'pareto-core-data'

import {
    external,
    main, submodule, this_
} from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: g_project.T.ModuleDefinition<pd.SourceLocation> = {

    'glossary': {
        'root': glossary,
        'imports': d({
        }),
    },
    'api': {
        'root': api,
        'imports': d({
            "resolve": submodule("resolve"),
            "glossary": external("lib-pareto-typescript-project/dist/submodules/glossary_serialize"),
            "main": main(),
        }),
    },

}