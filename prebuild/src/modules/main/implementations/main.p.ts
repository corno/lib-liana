import * as gliana2pareto from "lib-liana/dist/submodules/liana2glossary"

import { $ as data } from "../../../data/data.data"

import { main } from "../api"

export const $$: main = ($) => {
    data.__forEach(($) => {
        gliana2pareto.$a.generate($)
    })
}