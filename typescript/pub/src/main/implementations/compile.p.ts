import * as pd from 'pareto-core-dev'

import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gglossary_serialize from "lib-pareto-typescript-project/dist/submodules/glossary_serialize"
import * as gresolve from "../../submodules/resolve"
import * as gbuild from "res-pareto-build"
import * as gmain from "res-pareto-main"
import * as gfs from "lib-pareto-filesystem"

import { $a } from ".."

import { compile } from "../definition/api.generated"

export const $$: compile = ($, $i) => {

    $.outputs.__forEach(($) => {
        gresolve.$a.createResolver({})($.data['mapped model'].model, $i)
    })
}
