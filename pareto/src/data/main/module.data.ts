import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as glossary } from "./glossary.data"
import { external, tempSubmodule, this_ } from 'lib-pareto-typescript-project/dist/submodules/project/shorthands'

const d = pd.d

export const $: gproject.T.Project._ltype.library.main<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'root': glossary,
            'imports': d({
                "common": external("glo-pareto-common"),
                "liana": tempSubmodule("liana"),
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