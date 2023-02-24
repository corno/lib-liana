import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as liana } from "./modules/liana.data"
import { $ as liana_resolved } from "./modules/liana_resolved.data"
import { $ as liana_flat } from "./modules/liana_flat.data"
import { $ as liana2pareto } from "./modules/liana2pareto.data"

const d = pd.d

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "Liana",
    'license': "ISC",


    'dependencies': d({
        "lib-pareto-typescript-project": {},
    }),
    'type': ['library', {
        'main': {
            'definition': api,
        },
        'submodules': d({
            "liana": {
                'definition': liana,
            },
            "liana_resolved": {
                'definition': liana_resolved,
            },
            "liana_flat": {
                'definition': liana_flat,
            },
            "liana2pareto": {
                'definition': liana2pareto,
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