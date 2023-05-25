import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

import { $ as d_main } from "./main/module.data"


import { $ as d_resolved } from "./submodules/resolved/module.data"
import { $ as d_unresolved } from "./submodules/unresolved/module.data"
import { $ as d_possiblyresolved } from "./submodules/possiblyresolved/module.data"

import { $ as d_errorMessaging } from "./submodules/errormessaging/module.data"
import { $ as d_generate_dependencygraph } from "./submodules/dependencygraph/module.data"
import { $ as d_resolve } from "./submodules/resolve/module.data"
import { $ as d_2paretolangdata } from "./submodules/2paretolangdata/module.data"
import { $ as d_bindings } from "./bindings/moduledefinition.data"

const d = pd.d

export const $: g_project.T.Project<pd.SourceLocation | null> = {
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
        'main': d_main,
        'submodules': d({


            "unresolved": d_unresolved,
            "resolved": d_resolved,
            "possiblyresolved": d_possiblyresolved,

            "resolve": d_resolve,

            "errorMessaging": d_errorMessaging,
            "generate_dependencygraph": d_generate_dependencygraph,

            "2paretolangdata": d_2paretolangdata,
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