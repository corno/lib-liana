import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from ".."
import * as g_out from ".."

function map_Address__Selection<Annotation>(
    $: g_in.T.Address__Selection<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Address__Selection<Annotation> {
    const content = pl.cc($, ($) => {
        const $p_variable: g_out.T.Address__Selection.content.variable<Annotation> = pl.cc($['variable'], ($) => pl.cc($, ($) => {
            const key = $.key
            const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = tempoptional/*3*/(
                $v_stack,
                ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D<Annotation>>>(
                    key,
                    ($) => [true, $],
                    () => {
                        $se.error("no such entry")
                        return [false]
                    },
                ),
                () => [false],
            )
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        }))
        const $v_variable: pt.OptionalValue<g_out.T.Address__Selection.content.variable<Annotation>> = [true, $p_variable]
        const $p_tail: g_out.T.Address__Selection.content.tail<Annotation> = pl.cc($['tail'], ($) => map_Address__Selection__Tail<Annotation>(
            $,
            tempoptional/*3*/(
                $v_variable,
                ($) => tempoptional/*1*/(
                    $.constraint,
                    ($) => pl.cc($['type'], ($) => tempoptional(
                        $.result,
                        ($) => [true, $],
                        () => [false],
                    )),
                    () => [false],
                ),
                () => [false],
            ),//$v_current__address
            tempoptional/*3*/(
                $v_global__types,
                ($) => [true, $],
                () => [false],
            ),//$v_global__types
            tempoptional/*3*/(
                $v_stack,
                ($) => [true, $],
                () => [false],
            ),//$v_stack
        ))
        const $v_tail: pt.OptionalValue<g_out.T.Address__Selection.content.tail<Annotation>> = [true, $p_tail]
        return {
            'tail': $p_tail,
            'variable': $p_variable,
        }
    })
    return {
        content: content,
        result: pl.cc(content, ($) => pl.cc($['tail'], ($) => tempoptional(
            $.result,
            ($) => [true, $],
            () => [false],
        ))),
    }
}
function map_Address__Selection__Tail<Annotation>(
    $: g_in.T.Address__Selection__Tail<Annotation>,
    $v_current__address: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_variable__stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Address__Selection__Tail<Annotation> {
    const content = tempoptional/*4*/(
        $,
        ($): g_out.T.Address__Selection__Tail.content<Annotation> => [true, pl.cc($, ($) => {
            const $p_step: g_out.T.Address__Selection__Tail.content.O.step<Annotation> = pl.cc($['step'], ($) => pl.cc($, ($): g_out.T.Address__Selection__Tail.content.O.step<Annotation> => {
                switch ($[0]) {
                    case 'call': return pl.ss($, ($) => ['call', pl.cc($, ($) => {
                        const $v_address__function: g_out_typesystem.T.Type.address__function<Annotation> = pl.cc($, ($) => {
                            const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = tempoptional/*3*/(
                                $v_current__address,
                                ($) => [true, $],
                                () => [false],
                            )
                            return tempoptional(
                                x,
                                ($) => {
                                    if ($[0] === 'address function') {
                                        return [true, $[1]]
                                    } else {
                                        $se.error("option constraint")
                                        return [false]
                                    }
                                },
                                () => [false],
                            )
                        })
                        return {
                            'annotation': $.annotation,
                            'constraints': {
                                'address function': $v_address__function,
                            },
                            'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                const $p_type__arguments: g_out.T.Address__Selection__Tail.content.O.step.call._ltype.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Type__Arguments<Annotation>(
                                    $,
                                    tempoptional/*3*/(
                                        $v_global__types,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v_global__types
                                    tempoptional/*3*/(
                                        $v__lfunction,
                                        ($) => [true, $],
                                        () => [false],
                                    ),//$v__ltype
                                ))
                                const $v_type__arguments: pt.OptionalValue<g_out.T.Address__Selection__Tail.content.O.step.call._ltype.type__arguments<Annotation>> = [true, $p_type__arguments]
                                const $p_arguments: g_out.T.Address__Selection__Tail.content.O.step.call._ltype.arguments<Annotation> = pl.cc($['arguments'], ($) => $.map(($) => pl.cc($, ($) => {
                                    const $v_parameter: g_out_typesystem.T.Parameters.D<Annotation> = tempoptional/*3*/(
                                        $v_address__function,
                                        ($) => pl.cc($['parameters'], ($) => [true, $]),
                                        () => [false],
                                    )
                                    return {
                                        'annotation': $.annotation,
                                        'constraints': {
                                            'parameter': $v_parameter,
                                        },
                                        'content': pl.cc($.content, ($) => map_Expression<Annotation>(
                                            $,
                                            tempoptional/*3*/(
                                                $v_global__types,
                                                ($) => [true, $],
                                                () => [false],
                                            ),//$v_global__types
                                            tempoptional/*3*/(
                                                $v_stack,
                                                ($) => [true, $],
                                                () => [false],
                                            ),//$v_stack
                                            tempoptional/*3*/(
                                                $v_parameter,
                                                ($) => pl.cc($['type'], ($) => tempoptional(
                                                    $.result,
                                                    ($) => [true, $],
                                                    () => [false],
                                                )),
                                                () => [false],
                                            ),//$v__ltype
                                        )),
                                    }
                                })))
                                const $v_arguments: pt.OptionalValue<g_out.T.Address__Selection__Tail.content.O.step.call._ltype.arguments<Annotation>> = [true, $p_arguments]
                                return {
                                    'arguments': $p_arguments,
                                    'type arguments': $p_type__arguments,
                                }
                            })),
                        }
                    })])
                    case 'property': return pl.ss($, ($) => ['property', pl.cc($, ($) => {
                        const $v_group: g_out_typesystem.T.Type.group<Annotation> = pl.cc($, ($) => {
                            const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = tempoptional/*3*/(
                                $v_current__address,
                                ($) => [true, $],
                                () => [false],
                            )
                            return tempoptional(
                                x,
                                ($) => {
                                    if ($[0] === 'group') {
                                        return [true, $[1]]
                                    } else {
                                        $se.error("option constraint")
                                        return [false]
                                    }
                                },
                                () => [false],
                            )
                        })
                        return {
                            'annotation': $.annotation,
                            'constraints': {
                                'group': $v_group,
                            },
                            'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out_typesystem.T.Type.group.properties.D<Annotation>> = tempoptional/*3*/(
                                    $v_group,
                                    ($) => pl.cc($['properties'], ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Type.group.properties.D<Annotation>>>(
                                        key,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    )),
                                    () => [false],
                                )
                                return {
                                    'annotation': $.annotation,
                                    'constraint': constraint,
                                    'key': $.key,
                                }
                            })),
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v_step: pt.OptionalValue<g_out.T.Address__Selection__Tail.content.O.step<Annotation>> = [true, $p_step]
            const $p_tail: g_out.T.Address__Selection__Tail.content.O.tail<Annotation> = pl.cc($['tail'], ($) => map_Address__Selection__Tail<Annotation>(
                $,
            ))
            const $v_tail: pt.OptionalValue<g_out.T.Address__Selection__Tail.content.O.tail<Annotation>> = [true, $p_tail]
            return {
                'step': $p_step,
                'tail': $p_tail,
            }
        })],
        () => [false],
    )
    return {
        content: content,
        result: pl.cc(content, ($) => tempoptional(
            $.result,
            ($) => [true, $],
            () => [false],
        )),
    }
}
function map_Expression<Annotation>(
    $: g_in.T.Expression<Annotation>,
    $v_expected__type: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Expression<Annotation> {
    return pl.cc($, ($): g_out.T.Expression<Annotation> => {
        switch ($[0]) {
            case 'string': return pl.ss($, ($) => ['string', pl.cc($, ($) => {
                const $v_out: g_out_typesystem.T.Type._lstring<Annotation> = pl.cc($, ($) => {
                    const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = tempoptional/*3*/(
                        $v__ltype,
                        ($) => [true, $],
                        () => [false],
                    )
                    return tempoptional(
                        x,
                        ($) => {
                            if ($[0] === 'string') {
                                return [true, $[1]]
                            } else {
                                $se.error("option constraint")
                                return [false]
                            }
                        },
                        () => [false],
                    )
                })
                return {
                    'annotation': $.annotation,
                    'constraints': {
                        'out': $v_out,
                    },
                    'content': pl.cc($.content, ($) => map_String__Expression<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_global__types,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_global__types
                        tempoptional/*3*/(
                            $v_stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_stack
                    )),
                }
            })])
            default: return pl.au($[0])
        }
    })
}
function map_String__Expression<Annotation>(
    $: g_in.T.String__Expression<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.String__Expression<Annotation> {
    return pl.cc($, ($): g_out.T.String__Expression<Annotation> => {
        switch ($[0]) {
            case 'string literal': return pl.ss($, ($) => ['string literal', $])
            default: return pl.au($[0])
        }
    })
}
function map_Type__Arguments<Annotation>(
    $: g_in.T.Type__Arguments<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
    $v_type__parameters: pt.OptionalValue<g_out_typesystem.T.Type__Parameters<Annotation>>,
): g_out.T.Type__Arguments<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const $v_x: g_out_typesystem.T.Type__Parameters.D<Annotation> = tempoptional/*3*/(
            $v_type__parameters,
            ($) => [true, $],
            () => [false],
        )
        return {
            'annotation': $.annotation,
            'constraints': {
                'x': $v_x,
            },
            'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                const $p__ltype: g_out.T.Type__Arguments.D.content._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Selection<Annotation>(
                    $,
                    tempoptional/*3*/(
                        $v_global__types,
                        ($) => [true, $],
                        () => [false],
                    ),//$v_global__types
                ))
                const $v__ltype: pt.OptionalValue<g_out.T.Type__Arguments.D.content._ltype<Annotation>> = [true, $p__ltype]
                return {
                    'type': $p__ltype,
                }
            })),
        }
    }))
}
function map_Type__Selection<Annotation>(
    $: g_in.T.Type__Selection<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
): g_out.T.Type__Selection<Annotation> {
    return pl.cc($, ($) => {
        const $p_arguments: g_out.T.Type__Selection.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Type__Arguments<Annotation>(
            $,
            tempoptional/*3*/(
                $v_global__types,
                ($) => [true, $],
                () => [false],
            ),//$v_global__types
            tempoptional/*3*/(
                $v__ltype,
                ($) => [true, $],
                () => [false],
            ),//$v__ltype
        ))
        const $v_arguments: pt.OptionalValue<g_out.T.Type__Selection.arguments<Annotation>> = [true, $p_arguments]
        return {
            'arguments': $p_arguments,
        }
    })
}
function map_Type__Selection__Tail<Annotation>(
    $: g_in.T.Type__Selection__Tail<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
): g_out.T.Type__Selection__Tail<Annotation> {
    const content = tempoptional/*4*/(
        $,
        ($): g_out.T.Type__Selection__Tail.content<Annotation> => [true, pl.cc($, ($) => {
            const $p_tail: g_out.T.Type__Selection__Tail.content.O.tail<Annotation> = pl.cc($['tail'], ($) => map_Type__Selection__Tail<Annotation>(
                $,
                tempoptional/*3*/(
                    $v_global__types,
                    ($) => [true, $],
                    () => [false],
                ),//$v_global__types
            ))
            const $v_tail: pt.OptionalValue<g_out.T.Type__Selection__Tail.content.O.tail<Annotation>> = [true, $p_tail]
            return {
                'tail': $p_tail,
            }
        })],
        () => [false],
    )
    return {
        content: content,
        result: pl.cc(content, ($) => tempoptional(
            $.result,
            ($) => [true, $],
            () => [false],
        )),
    }
}
function map_Variables<Annotation>(
    $: g_in.T.Variables<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_parameters: pt.OptionalValue<g_out_typesystem.T.Parameters<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Variables<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const $p__ltype: g_out.T.Variables.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Variables.D._ltype<Annotation> => {
            switch ($[0]) {
                case 'local': return pl.ss($, ($) => ['local', pl.cc($, ($) => {
                    const $p__ltype: g_out.T.Variables.D._ltype.local._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                        const key = $.key
                        const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = tempoptional/*3*/(
                            $v_global__types,
                            ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>>>(
                                key,
                                ($) => [true, $],
                                () => {
                                    $se.error("no such entry")
                                    return [false]
                                },
                            ),
                            () => [false],
                        )
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    const $v__ltype: pt.OptionalValue<g_out.T.Variables.D._ltype.local._ltype<Annotation>> = [true, $p__ltype]
                    const $p_initializer: g_out.T.Variables.D._ltype.local.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Expression<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v__ltype,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_expected__type
                        tempoptional/*3*/(
                            $v_global__types,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_global__types
                        tempoptional/*3*/(
                            $v_stack,
                            ($) => [true, $],
                            () => [false],
                        ),//$v_stack
                    ))
                    const $v_initializer: pt.OptionalValue<g_out.T.Variables.D._ltype.local.initializer<Annotation>> = [true, $p_initializer]
                    return {
                        'initializer': $p_initializer,
                        'type': $p__ltype,
                    }
                })])
                case 'parameter': return pl.ss($, ($) => ['parameter', pl.cc($, ($) => {
                    const $p_parameter: g_out.T.Variables.D._ltype.parameter.parameter<Annotation> = pl.cc($['parameter'], ($) => pl.cc($, ($) => {
                        const key = $.key
                        const constraint: pt.OptionalValue<g_out_typesystem.T.Parameters.D<Annotation>> = tempoptional/*3*/(
                            $v_parameters,
                            ($) => $.__getEntry<pt.OptionalValue<g_out_typesystem.T.Parameters.D<Annotation>>>(
                                key,
                                ($) => [true, $],
                                () => {
                                    $se.error("no such entry")
                                    return [false]
                                },
                            ),
                            () => [false],
                        )
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    const $v_parameter: pt.OptionalValue<g_out.T.Variables.D._ltype.parameter.parameter<Annotation>> = [true, $p_parameter]
                    return {
                        'parameter': $p_parameter,
                    }
                })])
                case 'stack': return pl.ss($, ($) => ['stack', pl.cc($, ($) => {
                    return null
                })])
                default: return pl.au($[0])
            }
        }))
        const $v__ltype: pt.OptionalValue<g_out.T.Variables.D._ltype<Annotation>> = [true, $p__ltype]
        return {
            'type': $p__ltype,
        }
    }))
}