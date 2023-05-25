import * as pd from 'pareto-core-data'
import * as pv from 'pareto-core-dev'

import * as a_liana from "lib-liana"
import * as a_liana_error from "lib-liana/dist/submodules/errorMessaging"
import * as a_main from "res-pareto-main"
import * as a_pld from "lib-pareto-lang-data"


import { $ as d_liana } from "../../../data/models/model.data"

import { A } from "../api.generated"

export const $$: A.main = ($) => {
    //pv.logDebugMessage("REENABLE")


    const x = a_pld.$b.generateSubmodules()
    
    x(d_liana, null)

}