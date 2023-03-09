import * as gresolve from "../../../submodules/resolve"
import * as gl2g from "../../../submodules/liana2glossary"

import { compile } from "../api.generated"

export const $$: compile = ($, $i) => {

    $.outputs.__forEach(($) => {
        gresolve.$a.createResolver({})($.data['mapped model'].model, $i)
        gl2g.$b.generate($)
    })
}
