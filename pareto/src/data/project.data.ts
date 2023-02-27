import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as api } from "./api.data"
import { $ as liana_new } from "./liana/module.generated"
import { $ as liana_flat } from "./modules/liana_flat.data"
import { $ as liana2pareto } from "./modules/liana2pareto.data"
import { $ as algorithm_temp } from "./algorithm_temp.deprecated"
import { $ as p2ts_temp } from "./pareto2typescript_temp.data"

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
            "algorithm_temp": {
                'definition': algorithm_temp,
                'implementation': ['manual', {}],
            },
            "p2ts_temp": {
                'definition': p2ts_temp,
                'implementation': ['manual', {}],
            },
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

                //temporary:
                "res-pareto-foreach": {},
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