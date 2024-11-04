import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-dev'

import * as g_test from "lib-pareto-test"

import * as g_pub from "../../../../../../../pub"

export const $$: ($: g_test.T.TestParameters) => g_test.T.TestSet = ($) => {
    // const $tf = g_pub.$r.resolve(
    //     //specify the constructor parameters here
    // )
    pd.logDebugMessage("IMPLEMENT A TESTSET FOR resolve")
    return {
        'elements': pm.wrapRawDictionary({})
    }
}