import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pm from 'pareto-core-map'
import * as pv from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"
import * as g_pub from "../../../../../pub"
import * as gliana_flat from "../../../../../pub/dist/submodules/liana_flat"
import * as gliana from "../../../../../pub/dist/submodules/liana"
import * as gresolve from "../../../../../pub/dist/submodules/resolve"
import * as gfp from "lib-fountain-pen"
import * as gfs from "lib-pareto-filesystem"
import * as gcoll from "res-pareto-collation"
import * as gforeach from "res-pareto-foreach"

const d = pm.wrapRawDictionary

import { $ as simpleModel } from "../../../data/liana/model/simpleModel.data"
import { $ as accountingModel } from "../../../data/liana2pareto/mappedModel/accounting.data"

import { getTestSet } from "../api.generated"

export const $$: getTestSet = ($) => {
    const $XXX = $

    // const resolve = gliana.$a.createResolver({
    //     'onError': ($) => {
    //         pv.logDebugMessage($)
    //     }
    // })

    const writer = gfp.$b.createDirectory(

        [$XXX.testDirectory, 'flat'],

        ($i) => {
            g_pub.$b.serialize_flat(
                {
                    'terminal mapping': pm.wrapRawDictionary({
                        "bedrag": ['number', null],
                        "bestand": ['string', null],
                        "dagen": ['number', null],
                        "datum": ['number', null],
                        "multiline text": ['string', null],
                        "promillage": ['number', null],
                        "identifier": ['string', null],
                        "single line text": ['string', null],
                    }),
                    'model': accountingModel,
                },
                $i
            )
        },
        {
            'nodes': {
                'manualNode': () => {
                    pv.logDebugMessage("FIXME")

                },
                'superfluousNode': ($) => {
                    pv.logDebugMessage(gfp.$a.createSuperfluousNodeMessage($))

                }
            },
            'readDirError': () => {
                pv.logDebugMessage("FIXME")

            },
            'writeFileError': () => {
                pv.logDebugMessage("FIXME")
            }
        }
        // {
        // onError: ($) => {
        //     pv.logDebugMessage(gfs.$a.createWriteFileErrorMessage($.error))
        // },
    )
    let count = 0
    gresolve.$a.createResolver({})(accountingModel, ($) => {
        count += 1
        const reset = "\x1b[0m"
        const lightRed = "\x1b[91m"
        const green = "\x1b[32m"
        const yellow = "\x1b[33m"
        const lightBlue = "\x1b[94m"

        pv.logDebugMessage(`${lightBlue}${$.annotation.file}${reset}:${yellow}${$.annotation.line}:${$.annotation.column}${reset} - ${lightRed}error${reset} ${$.message}`)
    })

    pv.logDebugMessage(`${count} errors`)

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
    x(accountingModel)
    x(simpleModel)

    // const mappedGlossary = gliana2glossary.$a.({
    //     'mappedModel': {

    //         'model': glossary,

    //         'stringmapping': pm.wrapRawDictionary({
    //             "identifier": ['string', null]
    //         }),
    //     },
    //     'configuration': {

    //         'datamodel': [true, {
    //             'annotations': true,
    //             'properties optional': false,
    //             'reference mapping': ['string', null],
    //         }],
    //         'visitor interface': [true, {
    //             'datamodel location': "FSSDF",
    //         }],
    //         'algorithms': {
    //             'serialize': [true, null],
    //         },
    //     },

    // })
    // gliana2pareto.$a.generateModule({
    //     'path': [`${$XXX.testDirectory}/liana/glossary`],
    //     'data': {
    //         'configuration': {
    //             'datamodel': [true, {
    //                 'annotations': true,
    //                 'properties optional': false,
    //                 'reference mapping': ['string', null],
    //             }],
    //             'visitor interface': [true, {
    //                 'datamodel location': "FSSDF",
    //             }],
    //             'algorithms': {
    //                 'serialize': [true, null],
    //             },
    //         },
    //         'mappedModel': {
    //             'model': glossary,

    //             'stringmapping': pm.wrapRawDictionary({
    //                 "identifier": ['string', null]
    //             }),
    //         },
    //     },
    // })
    // gliana2pareto.$a.generateModule({
    //     'path': [`${$XXX.testDirectory}/liana/accounting`],
    //     'data': {
    //         'configuration': {
    //             'datamodel': [true, {
    //                 'annotations': true,
    //                 'properties optional': false,
    //                 'reference mapping': ['string', null],
    //             }],
    //             'visitor interface': [true, {
    //                 'datamodel location': "FSSDF",
    //             }],
    //             'algorithms': {
    //                 'serialize': [true, null],
    //             },
    //         },
    //         'mappedModel': accountingModel,
    //     },
    // })
    // const serializer = gliana2pareto.$a.createLiana2SerializerMapper({
    // })(accountingModel)
    const a = gforeach.$r.arrayForEach
    const d = gforeach.$r.createDictionaryForEach({
        'compare': gcoll.$r.localeIsABeforeB,
    })
    const ea = gforeach.$r.enrichedArrayForEach
    const ed = gforeach.$r.createEnrichedDictionaryForEach({
        'compare': gcoll.$r.localeIsABeforeB,
    })

    // gfp.$a.createDirectory({
    //     'onError': ($) => {
    //         pv.logDebugMessage($)
    //     },
    //     'reportSuperfluousNode': ($) => {
    //         pv.logDebugMessage($.name)
    //     },
    // })(
    //     [$.testDirectory, "SERIALIZER.ts"],
    //     ($i) => {
    //         gp2ts.$a.createImplementationSerializer({
    //             'arrayForEach': a,
    //             'dictionaryForEach': d,
    //             'enrichedArrayForEach': ea,
    //             'enrichedDictionaryForEach': ed,
    //             'createIdentifier': gts.$a.createIdentifier,
    //             'createApostrophedString': gts.$a.createApostrophedString,
    //             'createBacktickedString': gts.$a.createBacktickedString,
    //             'createQuotedString': gts.$a.createQuotedString,
    //         })(
    //             {
    //                 'implementations': pm.wrapRawDictionary({
    //                     "serializer": serializer,
    //                 })
    //             },
    //             $i
    //         )
    //     }
    // )



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

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}
