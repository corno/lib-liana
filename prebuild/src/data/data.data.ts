import * as pd from 'pareto-core-data'
import * as pt from 'pareto-core-types'

import * as gliana2pareto from "lib-liana/dist/submodules/liana2pareto"

import { $ as liana } from "./models/liana.data"

export const $: pt.Array<gliana2pareto.T.GenerateModuleData<pd.SourceLocation>> = pd.a([
    {
        'path': `../../pareto/src/data/submodules/liana`,
        'data': {
            'configuration': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', null],
                }],
                'visitor interface': [true, {
                    'datamodel location': "FIXME"
                }],
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