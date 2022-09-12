import * as pt from "pareto-core-types"
import * as pl from "pareto-core-lib"
import * as fp from "lib-fountain-pen"

import * as api from "../../interface"


import { serializeLocalInterface } from "./serializeLocalInterface.p"
import { serializeLocalType } from "./serializeLocalType.p"
import { D2 } from "../../interface"



export function serializeFunctionDefinition<PAnnotation>(
    $: {
        definition: api.TFunctionDefinition<PAnnotation>,
        sign: string,
    },
    $i: fp.ILine,
    $d: D2<PAnnotation>
) {

    $i.snippet(`(`)
    $i.indent(($i) => {
        $i.line(($i) => {
            $i.snippet(`$: `)
            serializeLocalType(
                $.definition.type,
                $i,
                $d.x,
            )
            $i.snippet(`,`)
        })
        if ($.definition.interface !== null) {
            pl.cc($.definition.interface, ($) => {
                $i.line(($i) => {
                    $i.snippet(`$i: `)
                    serializeLocalInterface(
                        $,
                        $i,
                        $d.x,
                    )
                    $i.snippet(`,`)
                })
            })
        }
        // $i.line(($i) => {
        //     $i.snippet(`$d: `)
        //     serializeLocalType(
        //         $.dependencies,
        //         $i,
        //         $d.x,
        //     )
        //     $i.snippet(`,`)
        // })
    })
    $i.snippet(`)${$.sign} `)
    if ($.definition["return type"][0] === "unmanaged") {
        pl.cc($.definition["return type"][1], ($) => {
            switch ($.type[0]) {
                case "function":
                    pl.cc($.type[1], ($) => {
                        $i.snippet(`${$d.x.escapeFunctionDefinition($.function.name.name)}`)
                    })
                    break
                case "interface":
                    pl.cc($.type[1], ($) => {
                        serializeLocalInterface(
                            $.interface,
                            $i,
                            $d.x,
                        )
                    })
                    break
                case "type":
                    pl.cc($.type[1], ($) => {
                        if ($.async) {
                            $i.snippet(`pt.AsyncValue<`)
                            serializeLocalType(
                                $.type,
                                $i,
                                $d.x,
                            )
                            $i.snippet(`>`)
                        } else {
                            serializeLocalType(
                                $.type,
                                $i,
                                $d.x,
                            )
                        }
                    })
                    break
                default: pl.au($.type[0])
            }
        })
    } else {
        $i.snippet(`void`)
    }
}