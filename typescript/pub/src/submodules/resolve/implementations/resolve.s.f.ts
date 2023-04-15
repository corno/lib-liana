import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_main from "../../../main"
import * as g_this from "../glossary"
import * as g_common from "glo-pareto-common"
import * as g_liana from "../../liana"
import * as g_liana_resolved from "../../liana_resolved"

import { A } from "../api.generated"

function _keys<T>($: pt.Dictionary<T>): string {
    let out = ""
    $.__mapWithKey(($, key) => {
        out += `${key}, `
    })
    return out
}

function _mapReferenceX<GAnnotation, Type>($: g_common.T.AnnotatedKey<GAnnotation>, $2: Type): g_common.T.AnnotatedKeyReferencePair<GAnnotation, Type> {
    return {
        'annotation': $.annotation,
        'key': $.key,
        'referencedValue': $2,
    }
}
// function _mapReference<GAnnotation>($: g_common.T.AnnotatedKey<GAnnotation>): g_common.T.AnnotatedKey<GAnnotation> {
//     return {
//         'annotation': $.annotation,
//         'key': $.key,
//     }
// }

export const $$: A.resolve = <GAnnotation>($se: {
    readonly onError: g_main.SYNC.I.OnError<GAnnotation>;
}) => {
    //return () => {
    return ($: g_liana.T.Type__Library<GAnnotation>): g_liana_resolved.T.Type__Library<GAnnotation> => {

        const tl = $
        function mapRef($: g_liana.T.Reference<GAnnotation>): g_liana_resolved.T.Reference<GAnnotation> {
            return {
                'type path': mapTypePath($['type path']),
                'type': pl.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'parameter': return pl.ss($, ($) => ['parameter', {
                            'parameter': {
                                'annotation': $.parameter.annotation,
                                'key': $.parameter.key,
                                'constraint': [false],
                            },
                        }])
                        case 'relative': return pl.ss($, ($) => ['relative', null])
                        case 'tbd': return pl.ss($, ($) => ['tbd', null])
                        default: return pl.au($[0])
                    }
                })
            }
        }
        function mapTypePath($: g_liana.T.Type__Path<GAnnotation>): g_liana_resolved.T.Type__Path<GAnnotation> {
            const ann = $['global type'].annotation
            let current: pt.OptionalValue<g_liana.T.Type<GAnnotation>> = tl['global types'].__getEntry(
                $['global type'].key,
                ($): pt.OptionalValue<g_liana.T.Type<GAnnotation>> => [true, $.type],
                () => {
                    $se.onError({
                        'annotation': ann,
                        'message': `no such global type: ${$['global type'].key}, (${_keys(tl['global types'])})`,
                    })
                    return [false]
                }
            )
            const out: g_liana_resolved.T.Type__Path<GAnnotation> = {
                'global type': {
                    'annotation': $['global type'].annotation,
                    'key': $['global type'].key,
                    'constraint': [false],
                },
                'path': $.path.map(($) => {
                    switch ($[0]) {
                        case 'array': return pl.ss($, ($) => {
                            pl.optional(
                                current,
                                ($) => {
                                    if ($[0] !== 'array') {
                                        $se.onError({
                                            'annotation': ann,
                                            'message': `not an array`,
                                        })
                                        current = [false]
                                    } else {
                                        current = [true, $[1].type]
                                    }
                                },
                                () => { }
                            )
                            return ['array', {
                                'annotation': $.annotation,
                                'type': $.type,
                                'constraint': [false],
                            }]
                        })
                        case 'dictionary': return pl.ss($, ($) => {
                            pl.optional(
                                current,
                                ($) => {
                                    if ($[0] !== 'dictionary') {
                                        $se.onError({
                                            'annotation': ann,
                                            'message': `not a dictionary`,
                                        })
                                        current = [false]
                                    } else {
                                        current = [true, $[1].type]
                                    }
                                },
                                () => { }
                            )
                            return ['dictionary', {
                                'annotation': $.annotation,
                                'type': $.type,
                                'constraint': [false],
                            }]
                        })
                        case 'group': return pl.ss($, ($) => {
                            const grp = $
                            pl.optional(
                                current,
                                ($) => {
                                    if ($[0] !== 'group') {
                                        $se.onError({
                                            'annotation': ann,
                                            'message': `not a group`,
                                        })
                                        current = [false]
                                    } else {
                                        const props = $[1].properties
                                        current = $[1].properties.__getEntry(
                                            grp.type.property.key,
                                            ($): pt.OptionalValue<g_liana.T.Type<GAnnotation>> => [true, $.type],
                                            () => {
                                                $se.onError({
                                                    'annotation': grp.type.property.annotation,
                                                    'message': `no such property: ${grp.type.property.key}, (${_keys(props)})`,
                                                })
                                                return [false]
                                            }
                                        )
                                    }
                                },
                                () => { }
                            )
                            return ['group', {
                                'annotation': $.annotation,
                                'type': {
                                    'property': {
                                        'annotation': $.type.property.annotation,
                                        'key': $.type.property.key,
                                        'constraint': [false],
                                    },
                                },
                                'constraint': [false],
                            }]
                        })
                        case 'optional': return pl.ss($, ($) => {
                            pl.optional(
                                current,
                                ($) => {
                                    if ($[0] !== 'optional') {
                                        $se.onError({
                                            'annotation': ann,
                                            'message': `not optional`,
                                        })
                                        current = [false]
                                    } else {
                                        current = [true, $[1].type]
                                    }
                                },
                                () => { }
                            )
                            return ['optional', {
                                'annotation': $.annotation,
                                'type': $.type,
                                'constraint': [false],
                            }]
                        })
                        case 'tagged union': return pl.ss($, ($) => {
                            const tu = $
                            pl.optional(
                                current,
                                ($) => {
                                    if ($[0] !== 'tagged union') {
                                        $se.onError({
                                            'annotation': ann,
                                            'message': `not a tagged union`,
                                        })
                                        current = [false]
                                    } else {
                                        const opts = $[1].options
                                        current = $[1].options.__getEntry(
                                            tu.type.option.key,
                                            ($): pt.OptionalValue<g_liana.T.Type<GAnnotation>> => [true, $.type],
                                            () => {
                                                $se.onError({
                                                    'annotation': tu.type.option.annotation,
                                                    'message': `no such property: ${tu.type.option.key}, (${_keys(opts)})`,
                                                })
                                                return [false]
                                            }
                                        )
                                    }
                                },
                                () => { }
                            )
                            return ['tagged union', {
                                'annotation': $.annotation,
                                'type': {
                                    'option': {
                                        'annotation': $.type.option.annotation,
                                        'key': $.type.option.key,
                                        'constraint': [false],

                                    },
                                },
                                'constraint': [false],
                            }]
                        })
                        default: return pl.au($[0])
                    }
                })
            }

            //MOVE THIS TO REFERENCE


            // if (current !== null) {
            //     if (current[0] !== 'dictionary') {
            //         $i({
            //             'annotation': ann,
            //             'message': `not a dictionary but a ${current[0]}`,
            //         })
            //         current = null
            //     } else {
            //         current = current[1].type
            //     }
            // }
            return out
        }
        function mapTerminal($: g_liana.T.Terminal<GAnnotation>): g_liana_resolved.T.Terminal<GAnnotation> {
            return {
                'constrained': pl.cc($.constrained, ($) => {
                    switch ($[0]) {
                        case 'no': return pl.ss($, ($) => ['no', {
                            'type': {
                                'annotation': $.type.annotation,
                                'key': $.type.key,
                                'constraint': [false],
                            }
                        }])
                        case 'yes': return pl.ss($, ($) => ['yes', mapRef($)])
                        default: return pl.au($[0])
                    }
                })
            }
        }
        function mapType($: g_liana.T.Type<GAnnotation>): g_liana_resolved.T.Type<GAnnotation> {
            switch ($[0]) {
                case 'array': return pl.ss($, ($) => ['array', {
                    'type': mapType($.type)
                }])
                case 'component': return pl.ss($, ($) => ['component', {
                    'type': {
                        'annotation': $.type.annotation,
                        'key': $.type.key,
                        'constraint': [false],
                    },
                    //'tail': pm.wrapRawArray([]),
                    'context': pl.cc($.context, ($) => {
                        switch ($[0]) {
                            case 'import': return pl.ss($, ($) => ['import', {
                                'library': {
                                    'annotation': $.library.annotation,
                                    'key': $.library.key,
                                    'constraint': [false]
                                },
                            }])
                            case 'local': return pl.ss($, ($) => ['local', null])
                            default: return pl.au($[0])
                        }
                    }),
                    'arguments': $.arguments.map(($) => $)
                }])
                case 'dictionary': return pl.ss($, ($) => ['dictionary', {
                    'key': mapTerminal($.key),
                    'type': mapType($.type),
                }])
                case 'group': return pl.ss($, ($) => ['group', {
                    'properties': $.properties.map(($) => ({
                        'type': mapType($.type)
                    }))
                }])
                case 'optional': return pl.ss($, ($) => ['optional', {
                    'type': mapType($.type)
                }])
                case 'tagged union': return pl.ss($, ($) => ['tagged union', {
                    'options': $.options.map(($) => ({
                        'type': mapType($.type),
                        'constrained': ($.constrained[0] === true)
                            ? pl.cc($.constrained[1], ($) => [true, {
                                'type path': mapTypePath($['type path'])
                            }])
                            : [false]
                    })),
                    'default': {
                        'annotation': $.default.annotation,
                        'key': $.default.key,
                        'constraint': [false],
                    }
                }])
                case 'terminal': return pl.ss($, ($) => ['terminal', mapTerminal($)])
                default: return pl.au($[0])
            }
        }
        return {
            'imports': $.imports.map(($) => $),
            'terminal types': $['terminal types'].map(($) => $),
            'global types': $['global types'].map(($) => ({
                'parameters': $.parameters.map(($) => ({
                    'global type': {
                        'annotation': $['global type'].annotation,
                        'key': $['global type'].key,
                        'constraint': [false],
                    }
                })),
                'type': mapType($.type)
            })),
        }
        // return {
        //     'type library': pl.cc($['type library'], ($) => {

        //     }),
        //     'root': pl.cc($.root, ($) => {
        //         // tl['global types'].__getEntry()
        //         return {
        //             'annotation': $.annotation,
        //             key: $.key,
        //         }
        //     })
        // }
    }
}