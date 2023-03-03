import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as main } from "./main/module.data"
import { $ as liana_new } from "./liana/module.generated"
import { $ as liana_flat } from "./submodules/liana_flat/module.data"
import { $ as liana2pareto } from "./submodules/liana2pareto/module.data"
import { $ as algorithm_temp } from "./submodules/algorithm_temp/module.deprectated"
import { $ as p2ts_temp } from "./submodules/pareto2typescript_temp/module.data"

const d = pd.d

export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "Liana",
    'license': "TBD",


    'dependencies': d({
        "glo-pareto-common": null,
        "lib-pareto-typescript-project": null,
        "res-pareto-build": null,
        "lib-fountain-pen": null,
    }),
    'type': ['library', {
        'main': main,
        'submodules': d({
            "algorithm_temp": algorithm_temp,
            "p2ts_temp":p2ts_temp,
            "liana": liana_new,
            "liana_flat": liana_flat,
            "liana2pareto": liana2pareto,
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "lib-fountain-pen": null,
                "lib-pareto-typescript-project": null,

                //temporary:
                "res-pareto-foreach": null,
                "res-typescript": null,
            }),
            'glossary': {
                'functions': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
            'imports': d({}),
        },

    }],
}