import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as d_main_ } from "./main/module.data"
import { $ as d_errorMessaging } from "./submodules/errormessaging/module.data"
import { $ as d_tendril } from "./submodules/tendril/module.data"
import { $ as d_liana } from "./submodules/liana/module.data"
import { $ as d_generate_dependencygraph } from "./submodules/dependencygraph/module.data"
import { $ as d_liana_resolved } from "./submodules/liana_resolved/module.data"
import { $ as d_resolve } from "./submodules/resolve/module.data"
import { $ as d_liana_flat } from "./submodules/liana_flat/module.data"
import { $ as d_liana2tendril } from "./submodules/liana2tendril/module.data"
import { $ as d_2alan } from "./submodules/2alan/module.data"
import { $ as d_liana2paretolangdata } from "./submodules/liana2paretolangdata/module.data"
import { $ as d_tendril2glossary } from "./submodules/tendril2glossary/module.data"
import { $ as d_liana2algorithm } from "./submodules/liana2algorithm/module.data"
import { $ as d_liana2glossary } from "./submodules/liana2glossary/module.data"
import { $ as d_liana2api } from "./submodules/liana2api/module.data"
import { $ as d_tendril2algorithm } from "./submodules/tendril2algorithm/module.data"
import { $ as d_algorithm_temp } from "./submodules/algorithm_temp/module.deprectated"
import { $ as d_p2ts_temp } from "./submodules/pareto2typescript_temp/module.data"
import { $ as d_bindings } from "./bindings/moduledefinition.data"

import { external, main, submodule } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"

const d = pd.d

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "Liana",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
        "lib-fountain-pen": null,
        "lib-pareto-filesystem": null,
        "lib-pareto-lang-data": null,
        "lib-pareto-typescript-project": null,
        "res-pareto-array": null,
        "res-pareto-build": null,
        "res-pareto-dictionary": null,
        "res-pareto-foreach": null,
        "res-pareto-resolve": null,
        "res-typescript": null,
    }),
    'type': ['library', {
        'main': d_main_,
        'submodules': d({
            "algorithm_temp": d_algorithm_temp,
            "errorMessaging": d_errorMessaging,
            "p2ts_temp": d_p2ts_temp,
            "generate_dependencygraph": d_generate_dependencygraph,
            "tendril": d_tendril,
            "tendril2glossary": d_tendril2glossary,
            "liana2glossary": d_liana2glossary,
            "liana2algorithm": d_liana2algorithm,

            "liana": d_liana,
            "liana_resolved": d_liana_resolved,
            "resolve": d_resolve,
            "liana_flat": d_liana_flat,
            "liana2tendril": d_liana2tendril,
            "2alan": d_2alan,
            "liana2paretolangdata": d_liana2paretolangdata,
            "liana2api": d_liana2api,
            "tendril2algorithm": d_tendril2algorithm,
        }),

        'bindings': [true, {
            'definition': d_bindings,
            'implementation': ['typescript', null],

        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-typescript": null,
                "lib-fountain-pen": null,
                "lib-pareto-typescript-project": null,
                "res-pareto-dictionary": null,
                "res-pareto-resolve": null,
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'glossary parameters': d({}),
                        'imports': d({}),
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({}),
                },
            },
            'imports': d({}),
        },
    }],
}