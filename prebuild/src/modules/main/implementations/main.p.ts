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
            const reset = "\x1b[0m"
            const red = "\x1b[31m"
            const green = "\x1b[32m"
            const yellow = "\x1b[33m"
            const magenta = "\x1b[35m"

            pv.logDebugMessage(`${magenta}${$.annotation.file}${reset}:${yellow}${$.annotation.line}:${$.annotation.column}${reset} - ${red}error${reset} ${$.message}`)
        })

    })
}