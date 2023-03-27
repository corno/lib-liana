import * as pl from 'pareto-core-lib'

import * as g_main from "../../../main"
import * as g_algorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as g_liana from "../../liana"

import { A } from "../api.generated"

export const $$: A.mapLiana2States = ($d) => {
    return <Annotation>($: g_main.T.Mapped__Library<Annotation>) => {
        const terminalMapping = $['terminal mapping']
        return $.library['global types'].map(($) => {
            function mapType($: g_liana.T.Type<Annotation>): g_algorithm.T.Type<Annotation> {
                switch ($[0]) {
                    case 'array':
                        return pl.cc($[1], ($) => {
                            return ['array', mapType($.type)]
                        })
                    case 'optional':
                        return pl.cc($[1], ($) => {
                            return ['optional', mapType($.type)]
                        })
                    case 'component':
                        return pl.cc($[1], ($) => {
                            return ['reference', $.type.key]
                        })
                    case 'dictionary':
                        return pl.cc($[1], ($) => {
                            return ['dictionary', mapType($.type)]
                        })
                    case 'group':
                        return pl.cc($[1], ($) => {
                            return ['group', $.properties.map(($) => {
                                return {
                                    'type': mapType($.type),
                                }
                            })]
                        })
                    case 'terminal':
                        return pl.cc($[1], ($) => {
                            switch ($.constrained[0]) {
                                case 'no':
                                    return pl.cc($.constrained[1], ($) => {
                                        return terminalMapping.__getEntry(
                                            $.type.key,
                                            ($) => {
                                                switch ($[0]) {
                                                    case 'boolean':
                                                        return pl.cc($[1], ($) => {
                                                            return ['boolean', null]
                                                        })
                                                    case 'number':
                                                        return pl.cc($[1], ($) => {
                                                            return ['number', null]
                                                        })
                                                    case 'string':
                                                        return pl.cc($[1], ($) => {
                                                            return ['string', null]
                                                        })
                                                    default: return pl.au($[0])
                                                }
                                            },
                                            () => {
                                                pl.panic(`MISSING STRING MAPPING: ${$.type}`)
                                            }
                                        )
                                    })
                                case 'yes':
                                    return pl.cc($.constrained[1], ($) => {
                                        return ['string', null]

                                        // return ['template', {
                                        //     'template': "Reference",
                                        //     'context': ['local', null],
                                        //     'arguments': d({
                                        //         "RererencedType": ref("FIXMEFIXMEFIXME")
                                        //     }),
                                        // }]
                                    })
                                default: return pl.au($.constrained[0])
                            }
                        })
                    case 'tagged union':
                        return pl.cc($[1], ($) => {
                            return ['taggedUnion', $.options.map(($) => {
                                return mapType($.type)
                            })]
                        })
                    default: return pl.au($[0])
                }

            }
            return mapType($.type)
        })
    }
}