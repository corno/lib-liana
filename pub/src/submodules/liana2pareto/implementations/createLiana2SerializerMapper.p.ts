import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pd from 'pareto-core-dev'
import * as ps from 'pareto-core-state'

import * as gapi from "../api"
import * as galgorithm from "../../algorithm_temp"
import * as gliana from "../../liana"


import { CcreateLiana2SerializerMapper } from "../api"

export const $$: CcreateLiana2SerializerMapper = ($d) => {
    return <Annotation>($: gapi.T.MappedModel<gapi.T.OutAnnotation<Annotation>>) => {
        const stringMapping = $.stringmapping
        type OutAnnotation = gapi.T.OutAnnotation<Annotation>
        return {
            'constructor': false,
            'type': ['procedure', {
                'block': {
                    //'innerFunctions': pm.wrapRawDictionary<galgorithm.T.ProcedureBlock.innerFunctions.D<OutAnnotation>>({}),
                    'innerFunctions': $.model['type library']['global types'].map<galgorithm.T.ProcedureBlock.innerFunctions.D<OutAnnotation>>(($) => {
                        function mapType($: gliana.T.Type<Annotation>): galgorithm.T.ProcedureBlock<OutAnnotation> {
                            return {
                                'innerFunctions': pm.wrapRawDictionary<galgorithm.T.ProcedureBlock.innerFunctions.D<OutAnnotation>>({}),
                                'statements': pm.wrapRawArray([
                                    pl.cc($, ($): galgorithm.T.ProcedureBlock.statements.A<OutAnnotation> => {
                                        switch ($[0]) {
                                            case 'array':
                                                return pl.cc($[1], ($): galgorithm.T.ProcedureBlock.statements.A<OutAnnotation> => {
                                                    return ['interfaceCall', {
                                                        'child path': pm.wrapRawArray(["array"]),
                                                        'data': [false],
                                                        'callback': [false],
                                                    }]
                                                })
                                            case 'boolean':
                                                return pl.cc($[1], ($) => {
                                                    return ['interfaceCall', {
                                                        'child path': pm.wrapRawArray(["boolean"]),
                                                        'data': [false],
                                                        'callback': [false],
                                                    }]
                                                })
                                            case 'component':
                                                return pl.cc($[1], ($) => {
                                                    return ['interfaceCall', {
                                                        'child path': pm.wrapRawArray(["component"]),
                                                        'data': [false],
                                                        'callback': [false],
                                                    }]
                                                })
                                            case 'dictionary':
                                                return pl.cc($[1], ($) => {
                                                    return ['interfaceCall', {
                                                        'child path': pm.wrapRawArray(["dictionary"]),
                                                        'data': [false],
                                                        'callback': [false],
                                                    }]
                                                })
                                            case 'group':
                                                return pl.cc($[1], ($) => {
                                                    const sb = ps.createArrayBuilder<galgorithm.T.ProcedureBlock.statements.A<OutAnnotation>>()
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
                                                            'innerFunctions': pm.wrapRawDictionary<galgorithm.T.ProcedureBlock.innerFunctions.D<OutAnnotation>>({}),
                                                            'statements': sb.getArray()
                                                        }],
                                                    }]
                                                })
                                            case 'optional':
                                                return pl.cc($[1], ($) => {
                                                    return ['interfaceCall', {
                                                        'child path': pm.wrapRawArray(["optional"]),
                                                        'data': [false],
                                                        'callback': [false],
                                                    }]
                                                })
                                            case 'string':
                                                return pl.cc($[1], ($) => {
                                                    switch ($.constrained[0]) {
                                                        case 'no':
                                                            return pl.cc($.constrained[1], ($) => {
                                                                return pl.cc(stringMapping.__unsafeGetEntry($.type.key), ($) => {
                                                                    switch ($[0]) {
                                                                        case 'boolean':
                                                                            return pl.cc($[1], ($) => {
                                                                                return ['interfaceCall', {
                                                                                    'child path': pm.wrapRawArray(["boolean"]),
                                                                                    'data': [false],
                                                                                    'callback': [false],
                                                                                }]
                                                                            })
                                                                        case 'number':
                                                                            return pl.cc($[1], ($) => {
                                                                                return ['interfaceCall', {
                                                                                    'child path': pm.wrapRawArray(["number"]),
                                                                                    'data': [false],
                                                                                    'callback': [false],
                                                                                }]
                                                                            })
                                                                        case 'string':
                                                                            return pl.cc($[1], ($) => {
                                                                                return ['interfaceCall', {
                                                                                    'child path': pm.wrapRawArray(["string"]),
                                                                                    'data': [false],
                                                                                    'callback': [false],
                                                                                }]
                                                                            })
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
                                                            })
                                                        case 'yes':
                                                            return pl.cc($.constrained[1], ($) => {
                                                                return ['interfaceCall', {
                                                                    'child path': pm.wrapRawArray(["string"]),
                                                                    'data': [false],
                                                                    'callback': [false],
                                                                }]
                                                            })
                                                        default: return pl.au($.constrained[0])
                                                    }
                                                })
                                            case 'tagged union':
                                                return pl.cc($[1], ($) => {
                                                    return ['interfaceCall', {
                                                        'child path': pm.wrapRawArray(["tagged union"]),
                                                        'data': [false],
                                                        'callback': [false],
                                                    }]
                                                })
                                            default: return pl.au($[0])
                                        }
                                    })
                                ]),
                            }
                        }
                        return {
                            'type': ['procedure', {
                                'block': mapType($.type)

                            }]
                        }
                    }),
                    'statements': pm.wrapRawArray([]),
                }
            }]
        }
    }
}