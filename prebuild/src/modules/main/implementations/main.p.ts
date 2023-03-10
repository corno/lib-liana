import * as pv from 'pareto-core-dev'
import * as pd from 'pareto-core-data'

import * as gerror from "lib-liana/dist/submodules/errorMessaging"
import * as gmain from "lib-liana/dist/main"

import { $ as data } from "../../../data/data.data"

import { main } from "../api"

export const $$: main = ($) => {
    const err = gerror.$a.createErrorMessageCreator({}) 
    pv.logDebugMessage("REENABLE")
    // gmain.$a.compile(data, ($) => {
    //     pv.logDebugMessage(err($))
    // })
}