import * as pl from 'pareto-core-lib'

import * as gfp from "lib-fountain-pen"

import { createGenerator } from "../api.generated"

export const $$: createGenerator = ($d) => {
    return ($, $i) => {
        gfp.$b.createFile(
            $.path,
            ($i) => {
                $d.serialize(
                    $d.map($.data),
                    $i,
                )
            },
            $i,
        )
    }
}