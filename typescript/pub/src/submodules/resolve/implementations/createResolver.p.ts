import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as gthis from "../definition/glossary"
import * as gcommon from "glo-pareto-common"
import * as gliana from "../../liana"
import * as gliana_resolved from "../../liana_resolved"

import { createResolver } from "../definition/api.generated"

function keys<T>($: pt.Dictionary<T>): string {
    let out = ""
    $.__mapWithKey(($, key) => {
        out += `${key}, `
    })
    return out
}

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
    return <Annotation>($: gliana.T.Model<Annotation>, $i: gthis.B.OnError<Annotation>): gliana_resolved.T.Model<Annotation> => {

        const tl = $['type library']
        return {
            'type library': pl.cc($['type library'], ($) => {
                function mapRef($: gliana.T.Reference<Annotation>): gliana_resolved.T.Reference<Annotation> {
                    const ann = $['global type'].annotation
                    let current: gliana.T.Type<Annotation> | null = tl['global types'].__getEntry(
                        $['global type'].key,
                        ($) => {
                            return $.type
                        },
                        () => {
                            
                            $i({
                                'annotation': ann,
                                'message': `no such global type: ${$['global type'].key}, (${keys(tl['global types'])})`,
                            })
                            return null
                        }
                    )
                    const out: gliana_resolved.T.Reference<Annotation> = {
                        'global type': $['global type'],
                        'path': $.path.map(($) => {
                            switch ($[0]) {
                                case 'array':
                                    return pl.cc($[1], ($) => {
                                        if (current !== null) {
                                            if (current[0] !== 'array') {
                                                $i({
                                                    'annotation': ann,
                                                    'message': `not an array`,
                                                })
                                                current = null
                                            } else {
                                                current = current[1].type
                                            }
                                        }
                                        return ['array', null]
                                    })
                                case 'dictionary':
                                    return pl.cc($[1], ($) => {
                                        if (current !== null) {
                                            if (current[0] !== 'dictionary') {
                                                $i({
                                                    'annotation': ann,
                                                    'message': `not a dictionary`,
                                                })
                                                current = null
                                            } else {
                                                current = current[1].type
                                            }
                                        }
                                        return ['dictionary', null]
                                    })
                                case 'group':
                                    return pl.cc($[1], ($) => {
                                        if (current !== null) {
                                            if (current[0] !== 'group') {
                                                $i({
                                                    'annotation': ann,
                                                    'message': `not a group`,
                                                })
                                                current = null
                                            } else {
                                                const props = current[1].properties
                                                current = current[1].properties.__getEntry(
                                                    $.property.key,
                                                        ($) => {
                                                            return $.type
                                                        },
                                                        () => {
                                                            $i({
                                                                'annotation': $.property.annotation,
                                                                'message': `no such property: ${$.property.key}, (${keys(props)})`,
                                                            })
                                                            return null
                                                        }
                                                    )
                                            }
                                        }
                                        return ['group', {
                                            'property': $.property
                                        }]
                                    })
                                case 'optional':
                                    return pl.cc($[1], ($) => {
                                        if (current !== null) {
                                            if (current[0] !== 'optional') {
                                                $i({
                                                    'annotation': ann,
                                                    'message': `not optional`,
                                                })
                                                current = null
                                            } else {
                                                current = current[1].type
                                            }
                                        }
                                        return ['optional', null]
                                    })
                                case 'tagged union':
                                    return pl.cc($[1], ($) => {
                                        if (current !== null) {
                                            if (current[0] !== 'tagged union') {
                                                $i({
                                                    'annotation': ann,
                                                    'message': `not a tagged union`,
                                                })
                                                current = null
                                            } else {
                                                const opts = current[1].options
                                                current = current[1].options.__getEntry(
                                                    $.option.key,
                                                        ($) => {
                                                            return $
                                                        },
                                                        () => {
                                                            $i({
                                                                'annotation': $.option.annotation,
                                                                'message': `no such property: ${$.option.key}, (${keys(opts)})`,
                                                            })
                                                            return null
                                                        }
                                                    )
                                            }
                                        }
                                        return ['tagged union', {
                                            'option': $.option
                                        }]
                                    })
                                default: return pl.au($[0])
                            }
                        })
                    }
                    
                    if (current !== null) {
                        if (current[0] !== 'dictionary') {
                            $i({
                                'annotation': ann,
                                'message': `not a dictionary but a ${current[0]}`,
                            })
                            current = null
                        } else {
                            current = current[1].type
                        }
                    }
                    return out
                }
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
                                        return ['yes', mapRef($)]
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