import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'
import * as pm from 'pareto-core-map'
import * as pv from 'pareto-core-dev'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"
import * as g_pub from "../../../../../pub/dist"
import * as g_liana from "../../../../../pub/dist/submodules/liana"
import * as g_resolve from "../../../../../pub/dist/submodules/resolve"
import * as g_coll from "res-pareto-collation"
import * as g_foreach from "res-pareto-foreach"

const d = pm.wrapRawDictionary

import { $ as simpleModel } from "../../../data/liana/model/simpleModel.data"
import { $ as accountingModel } from "../../../data/liana2pareto/mappedModel/accounting.data"

import { A } from "../api.generated"

export const $$: A.getTestSet = ($) => {
    const $XXX = $

    // const resolve = g_liana.$a.createResolver({
    //     'onError': ($) => {
    //         pv.logDebugMessage($)
    //     }
    // })

    // const writer = g_fp.$b.createDirectory(

    //     [$XXX.testDirectory, 'flat'],

    //     ($i) => {
    //         // g_pub.$b.serialize_flat(
    //         //     {
    //         //         'terminal mapping': pm.wrapRawDictionary({
    //         //             "bedrag": ['number', null],
    //         //             "bestand": ['string', null],
    //         //             "dagen": ['number', null],
    //         //             "datum": ['number', null],
    //         //             "multiline text": ['string', null],
    //         //             "promillage": ['number', null],
    //         //             "identifier": ['string', null],
    //         //             "single line text": ['string', null],
    //         //         }),
    //         //         'model': accountingModel,
    //         //     },
    //         //     $i
    //         // )
    //     },
    //     {
    //         'nodes': {
    //             'manualNode': () => {
    //                 pv.logDebugMessage("FIXME")

    //             },
    //             'superfluousNode': ($) => {
    //                 pv.logDebugMessage(g_fp.$a.createSuperfluousNodeMessage($))

    //             }
    //         },
    //         'readDirError': () => {
    //             pv.logDebugMessage("FIXME")

    //         },
    //         'writeFileError': () => {
    //             pv.logDebugMessage("FIXME")
    //         }
    //     }
    //     // {
    //     // onError: ($) => {
    //     //     pv.logDebugMessage(g_fs.$a.createWriteFileErrorMessage($.error))
    //     // },
    // )
    // let count = 0
    // g_resolve.$a.createResolver({})(accountingModel, ($) => {
    //     count += 1
    //     const reset = "\x1b[0m"
    //     const lightRed = "\x1b[91m"
    //     const green = "\x1b[32m"
    //     const yellow = "\x1b[33m"
    //     const lightBlue = "\x1b[94m"

    //     pv.logDebugMessage(`${lightBlue}${$.annotation.file}${reset}:${yellow}${$.annotation.line}:${$.annotation.column}${reset} - ${lightRed}error${reset} ${$.message}`)
    // })

    //pv.logDebugMessage(`${count} errors`)

    function x<Annotation>($: g_liana.T.Model<Annotation>) {
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
    // g_liana2pareto.$a.generateModule({
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
    // g_liana2pareto.$a.generateModule({
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
    // const serializer = g_liana2pareto.$a.createLiana2SerializerMapper({
    // })(accountingModel)
    // const a = g_foreach.$r.arrayForEach
    // const d = g_foreach.$r.createDictionaryForEach({
    //     'compare': g_coll.$r.localeIsABeforeB,
    // })
    // const ea = g_foreach.$r.enrichedArrayForEach
    // const ed = g_foreach.$r.createEnrichedDictionaryForEach({
    //     'compare': g_coll.$r.localeIsABeforeB,
    // })

    // g_fp.$a.createDirectory({
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
    //             'createIdentifier': g_ts.$a.createIdentifier,
    //             'createApostrophedString': g_ts.$a.createApostrophedString,
    //             'createBacktickedString': g_ts.$a.createBacktickedString,
    //             'createQuotedString': g_ts.$a.createQuotedString,
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

    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
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