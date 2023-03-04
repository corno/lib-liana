import * as pl from 'pareto-core-lib'

import * as gfp from "lib-fountain-pen"

import {createGenerator } from "../definition/api.generated"

export const $$: createGenerator = ($d) => {
    return ($) => {
        gfp.$a.createFile(
            {
                onError: $d.logError,
            },
        )(
            $.path,
            ($i) => {
                $d.serialize(
                    $d.map($.data),
                    $i,
                )
            }
        )
    }
}