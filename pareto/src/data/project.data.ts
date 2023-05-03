import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as main_ } from "./main/module.data"
import { $ as errorMessaging } from "./submodules/errormessaging/module.data"
import { $ as tendril } from "./submodules/tendril/module.data"
import { $ as liana } from "./submodules/liana/module.data"
import { $ as a_generate_dependencygraph } from "./submodules/dependencygraph/module.data"
import { $ as liana_resolved } from "./submodules/liana_resolved/module.data"
import { $ as resolve } from "./submodules/resolve/module.data"
import { $ as liana_flat } from "./submodules/liana_flat/module.data"
import { $ as liana2tendril } from "./submodules/liana2tendril/module.data"
import { $ as liana2glossary } from "./submodules/liana2glossary/module.data"
import { $ as tendril2glossary } from "./submodules/tendril2glossary/module.data"
import { $ as liana2api } from "./submodules/liana2api/module.data"
import { $ as liana2algorithm } from "./submodules/liana2algorithm/module.data"
import { $ as algorithm_temp } from "./submodules/algorithm_temp/module.deprectated"
import { $ as p2ts_temp } from "./submodules/pareto2typescript_temp/module.data"
import { $ as bindings } from "./bindings/moduledefinition.data"

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
        "lib-pareto-typescript-project": null,
        "res-pareto-array": null,
        "res-pareto-build": null,
        "res-pareto-dictionary": null,
        "res-pareto-foreach": null,
        "res-pareto-resolve": null,
        "res-typescript": null,
    }),
    'type': ['library', {
        'main': main_,
        'submodules': d({
            "algorithm_temp": algorithm_temp,
            "errorMessaging": errorMessaging,
            "p2ts_temp": p2ts_temp,
            "generate_dependencygraph": a_generate_dependencygraph,
            "tendril": tendril,
            "tendril2glossary": tendril2glossary,

            "liana": liana,
            "liana_resolved": liana_resolved,
            "resolve": resolve,
            "liana_flat": liana_flat,
            "liana2glossary": liana2glossary,
            "liana2tendril": liana2tendril,
            "liana2api": liana2api,
            "liana2algorithm": liana2algorithm,
        }),

        'bindings': [true, {
            'definition': bindings,
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