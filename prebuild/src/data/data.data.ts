import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/main"

import { $ as liana_new } from "./models/liana_old.data"
import { $ as tendril } from "./models/tendril.data"
import { $ as resolve_function_signatures } from "./models/resolve function signatures"

export const $: g_liana.T.CompileParameters <pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': pd.a([`../../pareto/src/data/submodules/liana/glossary.generated.ts`]),
            'data': ['tendril', {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [false]
                        },
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
                    'library': liana_new,
                    'terminal mapping': pd.d({
                        "identifier": ['string', null]
                    }),
                },
            }],
        },
        {
            'path': pd.a([`../../pareto/src/data/submodules/liana_resolved/glossary.generated.ts`]),
            'data': ['tendril',  {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [true, ['optional', null]]
                        },
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
                    'library': liana_new,

                    'terminal mapping': pd.d({
                        "identifier": ['string', null]
                    }),
                },
            }],
        },
        {
            'path': pd.a([`../../pareto/src/data/submodules/tendril/glossary.generated.ts`]),
            'data': ['tendril', {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [false]
                        },
                    }],     
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': tendril,
                    'terminal mapping': pd.d({
                        "identifier": ['string', null]
                    }),
                },
            }],
        },
        {
            'path': pd.a([`../../pareto/src/data/submodules/resolve_function_signatures/glossary.generated.ts`]),
            'data': ['tendril', {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [false]
                        },
                    }],     
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': resolve_function_signatures,
                    'terminal mapping': pd.d({
                        "identifier": ['string', null]
                    }),
                },
            }],
        },
    ])
}