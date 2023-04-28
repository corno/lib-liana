import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.generateDependencyGraph = () => {
    return ($, $i) => {
        $i.nestedLine(($i) => {
            $i.snippet(`digraph G {`)
            $i.indent(($i) => {
                $.data['global types'].__forEach(() => false, ($, key) => {
                    $i.line(`"${key}"`)

                    $.definition.parameters.__forEach(() => false, ($, paramKey) => {
                        pl.cc($.type, ($) => {
                            switch ($[0]) {
                                case 'resolved value':
                                    pl.ss($, ($) => {
                                        $.type.type.key
                                        $i.line(`"${key}" -> "${ $.type.type.key}"`)
                                    })
                                    break
                                case 'siblings':
                                    pl.ss($, ($) => {

                                        $i.line(`"${key}" -> "${ $.type.type.key}" [color="red"]`)
                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })
                    })
                })
            })
            $i.snippet(`}`)
        })
    }
}