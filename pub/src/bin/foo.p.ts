import * as pt from "pareto-core-types"
import * as tostring from "res-pareto-tostring"
import * as collation from "res-pareto-collation"

import * as mpareto from "../modules/pareto"

import { pareto } from "../data/pareto.p";
import { mapToPareto } from "../implementation/public/mapToPareto.p";
import { createWriter } from "../implementation/public/createWriter.p";



export type PEnrichedForEach = <T> (
    $: pt.Array<T>,
    $i: {
        onBegin: () => void
        onEnd: () => void
        onEntry: ($: {
            entry: T,
            isFirst: boolean
        }) => void
    }
) => void


function escapeTypescriptIdentifier($: string): string {
    return $
}

mpareto.serialize(
    mapToPareto(pareto),
    createWriter(
        {
            fp: {
                joinNestedStrings: tostring.joinNestedStrings,
                getArrayAsString: tostring.getArrayAsString,
            }
        }
    ),
    {

        escapeNamespace: ($) => `N${escapeTypescriptIdentifier($.key)}`,
        escapeType: ($) => `T${escapeTypescriptIdentifier($.key)}`,
        escapeImportedType: ($) => `m${escapeTypescriptIdentifier($.module)}.T${escapeTypescriptIdentifier($.type.key)}`,
        escapeTypeParameter: ($) => `P${escapeTypescriptIdentifier($.key)}`,
        escapeInterface: ($) => `I${escapeTypescriptIdentifier($.key)}`,
        escapeImportedInterface: ($) => `m${escapeTypescriptIdentifier($.module)}.I${escapeTypescriptIdentifier($.interface.key)}`,
        escapeDependencyDefinition: ($) => `D${escapeTypescriptIdentifier($.key)}`,

        escapeImportedFunction: ($) => `m${escapeTypescriptIdentifier($.module)}.F${escapeTypescriptIdentifier($.function.key)}`,
        enrichedForEach: ($, $i) => {
            let first = true
            let empty = true
            $.map(($, key) => {
                if (empty) {
                    $i.onBegin()
                }
                empty = false
                $i.onEntry({
                    isFirst: first,
                    key: key,
                    value: $,
                })
                first = false
            })
            if (!empty) {
                $i.onEnd()
            }
        },
        sortedForEach: collation.f_createSortedForEach({ isYinBeforeYang: collation.f_localeIsYinBeforeYang }),
    }
)