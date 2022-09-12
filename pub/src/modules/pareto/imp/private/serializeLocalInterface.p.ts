import * as pl from "pareto-core-lib"
import * as fp from "lib-fountain-pen"

import * as api from "../../interface"
import { DDependencies } from "../../interface"
import { serializeLocalType } from "./serializeLocalType.p"

export function serializeLocalInterface<PAnnotation>(
    $: api.TLocalInterface<PAnnotation>,
    $i: fp.ILine,
    $d: DDependencies<PAnnotation>,
) {
    switch ($.type[0]) {
        case "group":
            pl.cc($.type[1], ($) => {
                $i.snippet(`{`)
                $i.indent(($i) => {
                    $d.sortedForEach(
                        $.properties,
                        ($) => {
                            $i.line(($i) => {
                                $i.snippet(`readonly '${$.key}': `)
                                serializeLocalInterface(
                                    $.value,
                                    $i,
                                    $d,
                                )
                            })
                        }
                    )
                })
                $i.snippet(`}`)
            })
            break
        case "method":
            pl.cc($.type[1], ($) => {
                $i.snippet(`(`)
                $i.indent(($i) => {
                    if ($.type !== null) {
                        pl.cc($.type, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`$: `)
                                serializeLocalType(
                                    {
                                        type: $,
                                        relative: false,
                                    },
                                    $i,
                                    $d,
                                )
                                $i.snippet(`,`)
                            })
                        })
                    }
                    if ($.callback !== null) {
                        pl.cc($.callback, ($) => {
                            $i.line(($i) => {
                                $i.snippet(`$c: ($i: `)
                                serializeLocalInterface(
                                    $.interface,
                                    $i,
                                    $d,
                                )
                                $i.snippet(`) => void,`)
                            })
                        })
                    }
                })
                $i.snippet(`) => void`)
            })
            break
        case "reference":
            pl.cc($.type[1], ($) => {

            })
            break
        default: pl.au($.type[0])
    }
}