import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/main"

import { $ as liana } from "./models/liana.data"

export const $: g_liana.T.CompileParameters <pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/submodules/liana/glossary.generated.ts`,
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'reference mapping': ['string', null],
                    }],
                    // 'visitor interface': [true, {
                    //     'datamodel': ['internal', null],
                    // }],       
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': liana,
                    'terminal mapping': pd.d({
                        "identifier": ['string', null]
                    }),
                },
            },
        },
        {
            'path': `../../pareto/src/data/submodules/liana_resolved/glossary.generated.ts`,
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'reference mapping': ['reference and string', null],
                    }],
                    // 'visitor interface': [true, {
                    //     'datamodel': ['internal', null],
                    // }],       
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': liana,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null]
                    }),
                },
            },
        }
    ])
}