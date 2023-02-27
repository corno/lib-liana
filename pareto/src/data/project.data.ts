import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as liana_new } from "./liana/module.generated"
import { $ as liana_flat } from "./modules/liana_flat.data"
import { $ as liana2pareto } from "./modules/liana2pareto.data"

const d = pd.d

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "Liana",
    'license': "TBD",


    'dependencies': d({
        "glo-pareto-common": {},
        "lib-pareto-typescript-project": {},
        "res-pareto-build": {},
    }),
    'type': ['library', {
        'main': {
            'definition': api,
            'implementation': ['manual', {}],
        },
        'submodules': d({
            "liana": liana_new,
            "liana_flat": {
                'definition': liana_flat,
                'implementation': ['manual', {}],
            },
            "liana2pareto": {
                'definition': liana2pareto,
                'implementation': ['manual', {}],
            },
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "lib-fountain-pen": {},
                "lib-pareto-typescript-project": {},
                "res-typescript": {},
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        },

    }],
}