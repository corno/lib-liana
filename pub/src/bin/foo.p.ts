import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as tostring from "res-pareto-tostring"
import * as collation from "res-pareto-collation"
import * as fs from "res-pareto-filesystem"

import * as mpareto from "../modules/pareto"

import { pareto } from "../data/pareto.p";
import { mapToPareto } from "../implementation/public/mapToPareto.p";
import { createWriter } from "../implementation/public/createWriter.p";



function escapeTypescriptIdentifier($: string): string {
    return $
}

mpareto.serialize(
    mapToPareto(pareto).root,
    createWriter(
        ["..", "test", "data", "src"],
        {
            fp: {
                joinNestedStrings: tostring.joinNestedStrings,
                getArrayAsString: tostring.getArrayAsString,
            },
            fs: {
                writeFile: fs.writeFile,
            }
        },
        () => { }
    ),
    {
        escapeQuotedString: ($) => `"${$}"`,
        escapePrivateFunction: ($) => `${$}`, //do spaces, reserved words etcetera
        escapePublicFunctionImplementation: ($) => `${$}`, //do spaces, reserved words etcetera
        escapeNamespace: ($) => `${escapeTypescriptIdentifier($)}`,
        escapeType: ($) => `T${escapeTypescriptIdentifier($)}`,
        escapeImportedType: ($) => `m${escapeTypescriptIdentifier($.module)}.T${escapeTypescriptIdentifier($.type)}`,
        escapeTypeParameter: ($) => `P${escapeTypescriptIdentifier($)}`,
        escapeInterface: ($) => `I${escapeTypescriptIdentifier($)}`,
        escapeImportedInterface: ($) => `m${escapeTypescriptIdentifier($.module)}.I${escapeTypescriptIdentifier($.interface)}`,
        escapeDependencyDefinition: ($) => `D${escapeTypescriptIdentifier($)}`,

        escapeImportedFunction: ($) => `m${escapeTypescriptIdentifier($.module)}.F${escapeTypescriptIdentifier($.function)}`,
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
        sortedForEach: collation.f_createSortedForEach({ isYinBeforeYang: collation.f_localeIsYinBeforeYang }),
    }
)