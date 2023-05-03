import * as pl from 'pareto-core-lib'

import * as g_algorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as g_tendril from "../../tendril"
import * as g_tendril2glossary from "../../tendril2glossary"

import { A } from "../api.generated"

export const $$: A.mapTendril2States = ($d) => {
    return <Annotation>($: g_tendril2glossary.T.Mapped__Library<Annotation>) => {
        const terminalMapping = $['terminal mapping']
        function mapType($: g_tendril.T.Type<Annotation>): g_algorithm.T.Type<Annotation> {
            return pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => ['array', mapType($.type)])
                    case 'nothing': return pl.ss($, ($) => ['null', null])//IS THIS CORRECT?
                    case 'optional': return pl.ss($, ($) => ['optional', mapType($.type)])
                    case 'component': return pl.ss($, ($): g_algorithm.T.Type<Annotation> => ['reference', pl.cc($.context, ($): g_algorithm.T.Type.reference<Annotation> => {
                        switch ($[0]) {
                            case 'cyclic sibling': return pl.ss($, ($) => $.type.key)
                            case 'resolved sibling': return pl.ss($, ($) => $.type.key)
                            case 'import': return pl.ss($, ($) => $.type.key)
                            default: return pl.au($[0])
                        }
                    })])
                    case 'dictionary': return pl.ss($, ($) => ['dictionary', mapType($.type)])
                    case 'group': return pl.ss($, ($) => ['group', $.properties.map(($) => ({
                        'type': mapType($.type),
                    }))])
                    case 'terminal': return pl.ss($, ($) => {
                        return pl.cc($.terminal, ($) => terminalMapping.__getEntry(
                            $.type.key,
                            ($) => {
                                switch ($[0]) {
                                    case 'boolean': return pl.ss($, ($) => (['boolean', null]))
                                    case 'number': return pl.ss($, ($) => (['number', null]))
                                    case 'string': return pl.ss($, ($) => (['string', null]))
                                    default: return pl.au($[0])
                                }
                            },
                            () => pl.panic(`MISSING TERMINAL MAPPING: ${$.type}`)
                        ))
                    })
                    case 'tagged union': return pl.ss($, ($) => ['taggedUnion', $.options.map(($) => mapType($.type))])
                    default: return pl.au($[0])
                }

            })
        }
        return $.library['global types'].map(($) => mapType($.type))
    }
}