import * as pd from 'pareto-core-data'

import * as gliana from "lib-liana/dist/main"

import { $ as liana } from "./models/liana.data"

export const $: gliana.T.CompileParameters <pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/submodules/liana/glossary.generated.ts`,
            'data': {
                'settings': {
                    'datamodel': [true, {
                        'annotations': true,
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
                'mapped model': {
                    'model': liana,
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
                    'datamodel': [true, {
                        'annotations': true,
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
                'mapped model': {
                    'model': liana,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null]
                    }),
                },
            },
        }
    ])
}