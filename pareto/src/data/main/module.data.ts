import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as pure } from "./pure.api.data"
import { $ as glossary } from "./glossary.data"
import { external, submodule, tempSubmodule, this_ } from 'lib-pareto-typescript-project/dist/submodules/project/shorthands'

const d = pd.d

export const $: gproject.T.Project._ltype.library.main<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "common": external("glo-pareto-common"),
            "liana": tempSubmodule("liana"),
        }),
    },
    'api': {
        'root': pure,
        'imports': d({
            "this": this_(),
        }),
    },
    'implementation': ['typescript', null],
}