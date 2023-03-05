import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'

import * as gcommon from "glo-pareto-common"
import * as gliana from "../../liana"
import * as gliana_resolved from "../../liana_resolved"

import { createResolver } from "../definition/api.generated"

function mapReferenceX<Annotation, Type>($: gcommon.T.AnnotatedKey<Annotation>, $2: Type): gcommon.T.AnnotatedKeyReferencePair<Annotation, Type> {
    return {
        'annotation': $.annotation,
        'key': $.key,
        'referencedValue': $2,
    }
}
function mapReference<Annotation>($: gcommon.T.AnnotatedKey<Annotation>): gcommon.T.AnnotatedKey<Annotation> {
    return {
        'annotation': $.annotation,
        'key': $.key,
    }
}

export const $$: createResolver = ($d) => {
    return <Annotation>($: gliana.T.Model<Annotation>): gliana_resolved.T.Model<Annotation> => {
        return {
            'type library': pl.cc($['type library'], ($) => {
                function mapTerminal($: gliana.T.Terminal<Annotation>): gliana_resolved.T.Terminal<Annotation> {
                    return {
                        'constrained': pl.cc($.constrained, ($) => {
                            switch ($[0]) {
                                case 'no':
                                    return pl.cc($[1], ($) => {
                                        return ['no', {
                                            'type': mapReference($.type)
                                        }]
                                    })
                                case 'yes':
                                    return pl.cc($[1], ($) => {
                                        return ['yes', {
                                            'global type': $['global type'],
                                            'path': $.path.map(($) => {
                                                switch ($[0]) {
                                                    case 'array':
                                                        return pl.cc($[1], ($) => {
                                                            return ['array', null]
                                                        })
                                                    case 'dictionary':
                                                        return pl.cc($[1], ($) => {
                                                            return ['dictionary', null]
                                                        })
                                                    case 'group':
                                                        return pl.cc($[1], ($) => {
                                                            return ['group', {
                                                                'property': $.property
                                                            }]
                                                        })
                                                    case 'optional':
                                                        return pl.cc($[1], ($) => {
                                                            return ['optional', null]
                                                        })
                                                    case 'tagged union':
                                                        return pl.cc($[1], ($) => {
                                                            return ['tagged union', {
                                                                'option': $.option
                                                            }]
                                                        })
                                                    default: return pl.au($[0])
                                                }
                                            })
                                        }]
                                    })
                                default: return pl.au($[0])
                            }
                        })
                    }
                }
                function mapType($: gliana.T.Type<Annotation>): gliana_resolved.T.Type<Annotation> {
                    switch ($[0]) {
                        case 'array':
                            return pl.cc($[1], ($) => {
                                return ['array', {
                                    'type': mapType($.type)
                                }]
                            })
                        case 'component':
                            return pl.cc($[1], ($) => {
                                return ['component', {
                                    'type': mapReference($.type),
                                    'context': pl.cc($.context, ($) => {
                                        switch ($[0]) {
                                            case 'import':
                                                return pl.cc($[1], ($) => {
                                                    return ['import', {
                                                        'library': $.library,
                                                    }]
                                                })
                                            case 'local':
                                                return pl.cc($[1], ($) => {
                                                    return ['local', null]
                                                })
                                            default: return pl.au($[0])
                                        }
                                    }),
                                    'arguments': $.arguments.map(($) => {
                                        return $
                                    })
                                }]
                            })
                        case 'dictionary':
                            return pl.cc($[1], ($) => {
                                return ['dictionary', {
                                    'key': mapTerminal($.key),
                                    'type': mapType($.type),
                                }]
                            })
                        case 'group':
                            return pl.cc($[1], ($) => {
                                return ['group', {
                                    'properties': $.properties.map(($) => {
                                        return {
                                            'type': mapType($.type)
                                        }
                                    })
                                }]
                            })
                        case 'optional':
                            return pl.cc($[1], ($) => {
                                return ['optional', {
                                    'type': mapType($.type)
                                }]
                            })
                        case 'tagged union':
                            return pl.cc($[1], ($) => {
                                return ['tagged union', {
                                    'options': $.options.map(($) => {
                                        return mapType($)
                                    }),
                                    'default': mapReference($.default)
                                }]
                            })
                        case 'terminal':
                            return pl.cc($[1], ($) => {
                                return ['terminal', mapTerminal($)]
                            })
                        default: return pl.au($[0])
                    }
                }
                return {
                    'imports': $.imports.map(($) => {
                        return $
                    }),
                    'terminal types': $['terminal types'].map(($) => {
                        return $
                    }),
                    'global types': $['global types'].map(($) => {
                        return {
                            'parameters': $.parameters.map(($) => {
                                return $
                            }),
                            'type': mapType($.type)
                        }
                    }),
                }
            }),
            'root': pl.cc($.root, ($) => {
                return {
                    'annotation': $.annotation,
                    key: $.key,
                }
            })
        }
    }
}