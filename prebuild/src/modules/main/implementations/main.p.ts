import * as pv from 'pareto-core-dev'
import * as pd from 'pareto-core-data'

import * as gliana2pareto from "lib-liana/dist/submodules/liana2glossary"
import * as gresolve from "lib-liana/dist/submodules/resolve"

import { $ as data } from "../../../data/data.data"

import { main } from "../api"

export const $$: main = ($) => {
    data.__forEach(($) => {
        gliana2pareto.$a.generate($)
        gresolve.$a.createResolver({})($.data['mapped model'].model, ($) => {
            pv.logDebugMessage(`${$.message} @ ${$.annotation.file}:${$.annotation.line}:${$.annotation.column}`)
        })

    })
}