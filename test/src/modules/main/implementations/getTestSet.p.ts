import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pm from 'pareto-core-map'
import * as pv from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"
import * as gliana_flat from "../../../../../pub/dist/submodules/liana_flat"
import * as gliana from "../../../../../pub/dist/submodules/liana"
import * as gliana2pareto from "../../../../../pub/dist/submodules/liana2pareto"
import * as gfp from "lib-fountain-pen"
import * as gpub from "../../../../../pub"

const d = pm.wrapRawDictionary

import { $ as simpleModel } from "../../../data/liana/model/simpleModel.data"
import { $ as glossary } from "../../../data/liana/model/glossary.data"
import { $ as accountingModel } from "../../../data/liana2pareto/mappedModel/accounting.data"

import { CgetTestSet } from "../api"

export const $$: CgetTestSet = ($) => {
    const $XXX = $

    // const resolve = gliana.$a.createResolver({
    //     'onError': ($) => {
    //         pv.logDebugMessage($)
    //     }
    // })

    const writer = gfp.$a.createWriter({
        onError: ($) => {
            pv.logDebugMessage($)
        },
        reportSuperfluousNode: ($) => {
            pv.logDebugMessage(gfp.$a.createSuperfluousNodeMessage($))
        },
    })
    writer([$XXX.testDirectory, 'flat'], ($i) => {
        gliana_flat.$a.serialize(accountingModel, $i)
    })

    function x<Annotation>($: gliana.T.Model<Annotation>) {
        // const res = resolve($)
        // switch (res[0]) {
        //     case false:
        //         //pv.logDebugMessage(`NOT SET`)
        //         break
        //     case true:
        //         pl.cc(res[1], ($) => {
        //             //pv.logDebugMessage(`SET`)

        //             //pv.logDebugMessage(`has errors? ${$['has errors']}`)
        //         })
        //         break
        //     default: pl.au(res[0])
        // }
    }
    // x(lianaModel)
    x(accountingModel.model)
    x(simpleModel)

    const mappedGlossary = gliana2pareto.$a.mapLiana2Pareto({
        'mappedModel': {

            'model': glossary,

            'stringmapping': pm.wrapRawDictionary({
                "identifier": ['string', null]
            }),
        },
        'configuration': {

            'datamodel': [true, {
                'annotations': true,
                'properties optional': false,
                'reference mapping': ['string', {}],
            }],
            'visitor interface': [true, {
                'datamodel location': "FSSDF",
            }],
            'algorithms': {},
        },

    })
    gliana2pareto.$a.generateModule({
        'path': [`${$XXX.testDirectory}/liana/glossary`],
        'data': {
            'configuration': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', {}],
                }],
                'visitor interface': [true, {
                    'datamodel location': "FSSDF",
                }],
                'algorithms': {},
            },
            'mappedModel': {
                'model': glossary,

                'stringmapping': pm.wrapRawDictionary({
                    "identifier": ['string', null]
                }),
            },
        },
    })
    gliana2pareto.$a.generateModule({
        'path': [`${$XXX.testDirectory}/liana/accounting`],
        'data': {
            'configuration': {
                'datamodel': [true, {
                    'annotations': true,
                    'properties optional': false,
                    'reference mapping': ['string', {}],
                }],
                'visitor interface': [true, {
                    'datamodel location': "FSSDF",
                }],
                'algorithms': {},
            },
            'mappedModel': accountingModel,
        },
    })

    // mserialize.$a.createModuleDefinitionSerializer({

    // })(mliana2pareto.$a.createLiana2paretoMapper({})(model), )
    // mliana2pareto.$a.createLiana2paretoMapper({})(model)

    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ['test', {
                type: ['short string', {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    //test that a failing test indeed fails!!! now it will make the program exit with an error code
    createTest(
        "TODO: ACTUALLY TEST THE LIB",
        "TODO: ACTUALLY TEST THE LIB",
        "TODO: ACTUALLY TEST THE LIB",
    )

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
