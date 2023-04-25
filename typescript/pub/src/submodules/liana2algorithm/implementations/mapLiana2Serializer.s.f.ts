import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as ps from 'pareto-core-state'

import * as g_this from "../glossary"
import * as g_algorithm from "../../algorithm_temp"
import * as g_liana from "../../liana"
import * as g_liana2glossary from "../../liana2glossary"
import * as g_main from "../../../main"


import { A } from "../api.generated"

export const $$: A.mapLiana2Serializer = () => {
    return <Annotation>($: g_liana2glossary.T.Mapped__Library<Annotation>) => {
        const terminalMapping = $['terminal mapping']
        type OutAnnotation = g_this.T.OutAnnotation<Annotation>
        function mapType($: g_liana.T.Type<Annotation>): g_algorithm.T.ProcedureBlock<OutAnnotation> {
            return {
                'innerFunctions': pm.wrapRawDictionary<g_algorithm.T.ProcedureBlock.innerFunctions.D<OutAnnotation>>({}),
                'statements': pm.wrapRawArray([
                    pl.cc($, ($): g_algorithm.T.ProcedureBlock.statements.A<OutAnnotation> => {
                        return pl.cc($.type, ($) => {
                            switch ($[0]) {
                                case 'array': return pl.ss($, ($): g_algorithm.T.ProcedureBlock.statements.A<OutAnnotation> => ['interfaceCall', {
                                    'child path': pm.wrapRawArray(["array"]),
                                    'data': [false],
                                    'callback': [false],
                                }])
                                case 'component': return pl.ss($, ($) => ['interfaceCall', {
                                    'child path': pm.wrapRawArray(["component"]),
                                    'data': [false],
                                    'callback': [false],
                                }])
                                case 'dictionary': return pl.ss($, ($) => ['interfaceCall', {
                                    'child path': pm.wrapRawArray(["dictionary"]),
                                    'data': [false],
                                    'callback': [false],
                                }])
                                case 'group': return pl.ss($, ($) => {
                                    const sb = ps.createArrayBuilder<g_algorithm.T.ProcedureBlock.statements.A<OutAnnotation>>()
                                    $.properties.__forEach(() => false, ($, key) => {
                                        sb.push(['interfaceCall', {
                                            'child path': pm.wrapRawArray(["property"]),
                                            'data': [true, ['string literal', key]],
                                            'callback': [true, mapType($.type)],
                                        }])
                                    })
                                    sb.push(['interfaceCall', {
                                        'child path': pm.wrapRawArray(["end"]),
                                        'data': [false],
                                        'callback': [false],
                                    }])
                                    return ['interfaceCall', {
                                        'child path': pm.wrapRawArray(["group"]),
                                        'data': [false],
                                        'callback': [true, {
                                            'innerFunctions': pm.wrapRawDictionary<g_algorithm.T.ProcedureBlock.innerFunctions.D<OutAnnotation>>({}),
                                            'statements': sb.getArray()
                                        }],
                                    }]
                                })
                                case 'optional': return pl.ss($, ($) => ['interfaceCall', {
                                    'child path': pm.wrapRawArray(["optional"]),
                                    'data': [false],
                                    'callback': [false],
                                }])
                                case 'terminal': return pl.ss($, ($) => {
                                    const term = $.terminal
                                    switch ($.constrained[0]) {
                                        case 'no': return pl.ss($.constrained, ($) => pl.cc(terminalMapping.__unsafeGetEntry(term.type.key), ($) => {
                                            switch ($[0]) {
                                                case 'boolean': return pl.ss($, ($) => ['interfaceCall', {
                                                    'child path': pm.wrapRawArray(["boolean"]),
                                                    'data': [false],
                                                    'callback': [false],
                                                }])
                                                case 'number': return pl.ss($, ($) => ['interfaceCall', {
                                                    'child path': pm.wrapRawArray(["number"]),
                                                    'data': [false],
                                                    'callback': [false],
                                                }])
                                                case 'string': return pl.ss($, ($) => ['interfaceCall', {
                                                    'child path': pm.wrapRawArray(["string"]),
                                                    'data': [false],
                                                    'callback': [false],
                                                }])
                                                default: return pl.au($[0])
                                            }
                                        })
                                            // return stringMapping.__unsafeGetEntry(
                                            //     $.type.key,
                                            //     () => {
                                            //         return ['interfaceCall', {
                                            //             'child path': pm.wrapRawArray(["string"]),
                                            //             'data': [false],
                                            //             'callback': [false],
                                            //         }]
    
                                            //     },
                                            //     () => {
                                            //         return ['interfaceCall', {
                                            //             'child path': pm.wrapRawArray(["string"]),
                                            //             'data': [false],
                                            //             'callback': [false],
                                            //         }]
    
                                            //     }
                                            // )
                                        )
                                        case 'yes': return pl.ss($.constrained, ($) => ['interfaceCall', {
                                            'child path': pm.wrapRawArray(["string"]),
                                            'data': [false],
                                            'callback': [false],
                                        }])
                                        default: return pl.au($.constrained[0])
                                    }
                                })
                                case 'tagged union': return pl.ss($, ($) => ['interfaceCall', {
                                    'child path': pm.wrapRawArray(["tagged union"]),
                                    'data': [false],
                                    'callback': [false],
                                }]
                                )
                                default: return pl.au($[0])
                            }
                          
                        })
                    })
                ]),
            }
        }
        return {
            'constructor': false,
            'type': ['procedure', {
                'block': {
                    //'innerFunctions': pm.wrapRawDictionary<g_algorithm.T.ProcedureBlock.innerFunctions.D<OutAnnotation>>({}),
                    'innerFunctions': $.library['global types'].map<g_algorithm.T.ProcedureBlock.innerFunctions.D<OutAnnotation>>(($) => ({
                        'type': ['procedure', {
                            'block': mapType($.type)
                        }]
                    })),
                    'statements': pm.wrapRawArray([]),
                }
            }]
        }
    }
}