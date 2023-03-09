import * as gresolve from "../../../submodules/resolve"

import { compile } from "../api.generated"

export const $$: compile = ($, $i) => {

    $.outputs.__forEach(($) => {
        gresolve.$a.createResolver({})($.data['mapped model'].model, $i)
    })
}
