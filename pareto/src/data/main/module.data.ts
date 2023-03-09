import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as bindings } from "./bindings.api.data"
import { $ as pure } from "./pure.api.data"
import { $ as glossary } from "./glossary.data"
import { external, tempSubmodule, this_ } from 'lib-pareto-typescript-project/dist/submodules/project/shorthands'

const d = pd.d

export const $: gproject.T.Project._ltype.library.main<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "common": external("glo-pareto-common"),
            "liana": tempSubmodule("liana"),
        }),
    },
    'bindings': {
        'api': {
            'root': bindings,
            'imports': d({
                "this": this_(),
            }),
        },
        'implementation': ['typescript', null],

    },
    'pure algorithms': {
        'api': {
            'root': pure,
            'imports': d({
                "this": this_(),
            }),
        },
        'implementation': ['typescript', null],

    },
}