import * as api from "../interface"

import * as pareto from "../modules/pareto"
import * as collation from "res-pareto-collation"


import * as res from "../../../tempRes"


export const ddeps: pareto.DDependencies = {
    escapeTypescriptIdentifier: res.escapeTypescriptIdentifier,
    escapeQuotedStringWithQuotes: ($) => `"${$}"`,
    escapeQuotedString: ($) => `${$}`,
    escapePrivateFunction: ($) => `${$}`, //do spaces, reserved words etcetera
    escapePublicFunctionImplementation: ($) => `${$}`, //do spaces, reserved words etcetera
    escapeNamespace: ($) => `${res.escapeTypescriptIdentifier($)}`,
    escapeType: ($) => `T${res.escapeTypescriptIdentifier($)}`,
    escapeImportedType: ($) => `m${res.escapeTypescriptIdentifier($.module)}.T${res.escapeTypescriptIdentifier($.type)}`,
    escapeTypeParameter: ($) => `P${res.escapeTypescriptIdentifier($)}`,
    escapeInterface: ($) => `I${res.escapeTypescriptIdentifier($)}`,
    escapeImportedInterface: ($) => `m${res.escapeTypescriptIdentifier($.module)}.I${res.escapeTypescriptIdentifier($.interface)}`,
    escapeDependencyDefinition: ($) => `D${res.escapeTypescriptIdentifier($)}`,
    escapeFunctionDefinition: ($) => `F${res.escapeTypescriptIdentifier($)}`,

    escapeImportedFunction: ($) => `m${res.escapeTypescriptIdentifier($.module)}.F${res.escapeTypescriptIdentifier($.function)}`,
    enrichedDictionaryForEach: ($, $i) => {
        let empty = true
        $.map(($) => {
            empty = false
        })
        if (empty) {
            $i.onEmpty()
        } else {
            $i.onNotEmpty(($i) => {
                let first = true
                $.map(($, key) => {
                    $i({
                        isFirst: first,
                        key: key,
                        value: $,
                    })
                    first = false
                })
            })
        }
    },
    enrichedArrayForEach: ($, $i) => {
        let empty = true
        $.map(($) => {
            empty = false
        })
        if (empty) {
            $i.onEmpty()
        } else {
            $i.onNotEmpty(($i) => {
                let first = true
                $.map(($) => {
                    $i({
                        isFirst: first,
                        value: $,
                    })
                    first = false
                })
            })
        }
    },
    sortedForEach: collation.fCreateSortedForEach({ isYinBeforeYang: collation.fLocaleIsYinBeforeYang }),
}