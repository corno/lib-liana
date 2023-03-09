import * as pd from 'pareto-core-data'

import { external, main, sibling, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"



import { $ as bindings } from "./bindings.api.data"
import { $ as pure } from "./pure.api.data"

import { $ as glossary } from "./glossary.data"

const d = pd.d

export const $: gproject.T.Project._ltype.library.submodules.D<pd.SourceLocation> = {
    'glossary': {
        'root': glossary,
        'imports': d({
            "common": external("glo-pareto-common"),
            "liana": sibling("liana"),
            "main": main(),
            "glossary": external("lib-pareto-typescript-project/dist/submodules/glossary"),
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
                "build": external("res-pareto-build"),
                "foreach": external("res-pareto-foreach"),
                "fs": external("res-pareto-filesystem"),
                "serializeGlossary": external("lib-pareto-typescript-project/dist/submodules/glossary_serialize"),
                "this": this_(),
            }),
        },
        'implementation': ['typescript', null],
    
    },
    
}