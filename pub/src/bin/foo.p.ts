import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"

import * as tostring from "res-pareto-tostring"
import * as collation from "res-pareto-collation"
import * as fs from "res-pareto-filesystem"

import * as mpareto from "../modules/pareto"

import { pareto } from "../data/pareto.p";
import { mapToPareto } from "../implementation/public/mapToPareto.p"
import { createWriter } from "../implementation/public/createWriter.p"

import * as res from "../../../tempRes"

mpareto.serialize(
    mapToPareto(
        pareto,
        {
            joinDictionaries: res.joinDictionaries,
            arrayIsEmpty: ($) => {
                let found = false
                $.forEach(($) => {
                    found = true
                })
                return !found
            }
        },
    ).root,
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
        sortedForEach: collation.f_createSortedForEach({ isYinBeforeYang: collation.f_localeIsYinBeforeYang }),
    }
)