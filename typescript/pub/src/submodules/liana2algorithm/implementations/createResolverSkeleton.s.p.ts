import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_liana from "../../liana"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.create121Mapper = ($d) => {

    function doType<Annotation>(
        $: g_liana.T.Type<Annotation>,
        $i: g_fp.SYNC.I.Line,
    ) {
        switch ($[0]) {
            case 'array':
                pl.ss($, ($) => {
                    $i.snippet(`$.map(($) => `)
                    doType($.type, $i)
                    $i.snippet(`)`)
                })
                break
            case 'component':
                pl.ss($, ($) => {
                    $i.snippet(`map_${$d.createIdentifier($.type.key)}($)`)
                })
                break
            case 'dictionary':
                pl.ss($, ($) => {
                    $i.snippet(`$.map(($) => `)
                    doType($.type, $i)
                    $i.snippet(`)`)
                })
                break
            case 'group':
                pl.ss($, ($) => {
                    $i.snippet(`({`)
                    $i.indent(($i) => {
                        $.properties.__forEach(() => false, ($, key) => {
                            $i.nestedLine(($i) => {

                                $i.snippet(`'${key}': pl.cc($, ($) => `)
                                doType($.type, $i)
                                $i.snippet(`),`)
                            })
                        })
                    })
                    $i.snippet(`})`)
                })
                break
            case 'optional':
                pl.ss($, ($) => {
                    $i.snippet(`pl.optional(`)
                    $i.indent(($i) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`$,`)
                        })
                        $i.nestedLine(($i) => {
                            $i.snippet(`($) => [true, `)
                            doType($.type, $i)
                            $i.snippet(`],`)
                        })
                        $i.nestedLine(($i) => {
                            $i.snippet(`() => [false],`)
                        })
                    })
                    $i.snippet(`)`)
                })
                break
            case 'tagged union':
                pl.ss($, ($) => {
                    $i.snippet(`pl.cc($, ($) => {`)
                    $i.indent(($i) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`switch ($[0]) {`)
                            $i.indent(($i) => {
                                $.options.__forEach(() => false, ($, key) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`case '${key}': return ['${key}', `)
                                        doType($.type, $i)
                                        $i.snippet(`]`)
                                        
                                    })
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`default: return pl.au($[1])`)

                                })
                            })
                            $i.snippet(`}`)
                        })
                    })
                    $i.snippet(`})`)
                })
                break
            case 'terminal':
                pl.ss($, ($) => {
                    $i.snippet(`$`)
                })
                break
            default: pl.au($[0])
        }
    }
    return <Annotation>($: g_liana.T.Type__Library<Annotation>, $i: g_fp.SYNC.I.Block) => {
        $i.line(`import * as pl from 'pareto-core-lib'`)
        $i.line(`import * as pm from 'pareto-core-map'`)
        $i.line(``)
        $i.line(`import * as g_in from ".."`)
        $i.line(`import * as g_out from ".."`)
        $i.line(``)

        $['global types'].__forEach(() => false, ($, key) => {
            $i.nestedLine(($i) => {
                $i.snippet(`function map_${$d.createIdentifier(key)}($: g_in.T.${$d.createIdentifier(key)}): g_out.T.Element {`)
                $i.indent(($i) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`return `)
                        doType($.type, $i)
                    })
                })
                $i.snippet(`}`)
            })
        })
    }
}