import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as gliana2pareto from "lib-liana/dist/submodules/liana2glossary"

import { $ as liana } from "./models/liana.data"

export const $: pt.Array<gliana2pareto.T.GenerateData<pd.SourceLocation>> = pd.a([
    {
        'path': `../../pareto/src/data/submodules/liana/glossary.generated.ts`,
        'data': {
            'settings': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
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
            'mappedModel': {
                'model': liana,

                'stringmapping': pd.d({
                    "identifier": ['string', null]
                }),
            },
        }
    }
])