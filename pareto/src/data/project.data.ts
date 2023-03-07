import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as main } from "./main/module.data"
import { $ as errorMessaging } from "./submodules/errormessaging/module.data"
import { $ as liana } from "./submodules/liana/module.data"
import { $ as liana_resolved } from "./submodules/liana_resolved/module.data"
import { $ as resolve } from "./submodules/resolve/module.data"
import { $ as liana_flat } from "./submodules/liana_flat/module.data"
import { $ as liana2glossary } from "./submodules/liana2glossary/module.data"
import { $ as liana2api } from "./submodules/liana2api/module.data"
import { $ as liana2algorithm} from "./submodules/liana2algorithm/module.data"
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
        "lib-pareto-filesystem": null,
    }),
    'type': ['library', {
        'main': main,
        'submodules': d({
            "algorithm_temp": algorithm_temp,
            "errorMessaging":errorMessaging,
            "p2ts_temp":p2ts_temp,
            "liana": liana,
            "liana_resolved": liana_resolved,
            "resolve": resolve,
            "liana_flat": liana_flat,
            "liana2glossary": liana2glossary,
            "liana2api": liana2api,
            "liana2algorithm": liana2algorithm,
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
                'parameters': d({}),
                'types': d({}),
                'builders': d({}),
                'interfaces': d({}),
                'functions': d({}),
            },
            'imports': d({}),
        },

    }],
}