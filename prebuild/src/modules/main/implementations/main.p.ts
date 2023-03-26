import * as pv from 'pareto-core-dev'
import * as pd from 'pareto-core-data'

import * as g_error from "lib-liana/dist/submodules/errorMessaging"
import * as g_main from "lib-liana/dist/main"

import { $ as data } from "../../../data/data.data"

import { main } from "../api"

export const $$: main = ($) => {
    pv.logDebugMessage(`REENABLE`)
    // const err = g_error.$a.createErrorMessageCreator({}) 
    // g_main.$a.compile(data, ($) => {
    //     pv.logDebugMessage(err($))
    // })
}