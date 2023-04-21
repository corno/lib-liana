import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from ".."
import * as g_out from ".."

function map_Assign<Annotation>(
    $: g_in.T.Assign<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Assign<Annotation> {
    return pl.cc($, ($) => {
        const $v_right__hand__side: g_out.T.Assign.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>(
            $,
            /*$v_global__types: */$v_global__types,
            /*$v_stack: */$v_stack,
            /*$v__ltype: */$v__ltype,
        ))
        const $v_variable: g_out.T.Assign.variable<Annotation> = pl.cc($['variable'], ($) => map_Data__Path<Annotation>(
            $,
            /*$v_global__types: */$v_global__types,
            /*$v_stack: */$v_stack,
        ))
        return {
            'right hand side': $v_right__hand__side,
            'variable': $v_variable,
        }
    })
}
function map_Block<Annotation>(
    $: g_in.T.Block<Annotation>,
    $v__lfunction: pt.OptionalValue<g_out_typesystem.T.Function<Annotation>>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Block<Annotation> {
    return pl.cc($, ($) => {
        const $v_statements: g_out.T.Block.statements<Annotation> = pl.cc($['statements'], ($) => map_Statements<Annotation>(
            $,
            /*$v__lfunction: */$v__lfunction,
            /*$v_global__types: */$v_global__types,
            /*$v_stack: */$v_variables,
        ))
        const $v_variables: g_out.T.Block.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
            $,
            /*$v_global__types: */$v_global__types,
            /*$v_stack: */$v_stack,
        ))
        return {
            'statements': $v_statements,
            'variables': $v_variables,
        }
    })
}
function map_Boolean__Expression<Annotation>(
    $: g_in.T.Boolean__Expression<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Boolean__Expression<Annotation> {
    return pl.cc($, ($): g_out.T.Boolean__Expression<Annotation> => {
        switch ($[0]) {
            case 'and': return pl.ss($, ($) => ['and', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Boolean__Expression.and.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Boolean__Expression.and.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'false': return pl.ss($, ($) => ['false', pl.cc($, ($) => {
                return null
            })])
            case 'greater than': return pl.ss($, ($) => ['greater than', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Boolean__Expression.greater__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Boolean__Expression.greater__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'less than': return pl.ss($, ($) => ['less than', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Boolean__Expression.less__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Boolean__Expression.less__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'not': return pl.ss($, ($) => ['not', map_Boolean__Expression__Or__Selection<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            case 'number equals': return pl.ss($, ($) => ['number equals', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Boolean__Expression.number__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Boolean__Expression.number__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'number not equals': return pl.ss($, ($) => ['number not equals', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Boolean__Expression.number__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Boolean__Expression.number__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'or': return pl.ss($, ($) => ['or', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Boolean__Expression.or.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Boolean__Expression.or.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'string equals': return pl.ss($, ($) => ['string equals', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Boolean__Expression.string__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_String__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Boolean__Expression.string__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_String__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'string not equals': return pl.ss($, ($) => ['string not equals', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Boolean__Expression.string__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_String__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Boolean__Expression.string__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_String__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'true': return pl.ss($, ($) => ['true', pl.cc($, ($) => {
                return null
            })])
            default: return pl.au($[0])
        }
    })
}
function map_Boolean__Expression__Or__Selection<Annotation>(
    $: g_in.T.Boolean__Expression__Or__Selection<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Boolean__Expression__Or__Selection<Annotation> {
    return pl.cc($, ($): g_out.T.Boolean__Expression__Or__Selection<Annotation> => {
        switch ($[0]) {
            case 'expression': return pl.ss($, ($) => ['expression', map_Boolean__Expression<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            case 'selection': return pl.ss($, ($) => ['selection', pl.cc($, ($) => {
                const $v_out: g_out_typesystem.T.Type._lboolean<Annotation> = pl.cc($, ($) => {
                    const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = $v_TBD
                    return pl.optional(
                        x,
                        ($) => {
                            if ($[0] === 'boolean') {
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
                    'type': pl.cc($.type, ($) => map_Data__Path<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                    )),
                }
            })])
            default: return pl.au($[0])
        }
    })
}
function map_Data__Path<Annotation>(
    $: g_in.T.Data__Path<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Data__Path<Annotation> {
    return pl.cc($, ($) => {
        const $v_tail: g_out.T.Data__Path.tail<Annotation> = pl.cc($['tail'], ($) => $.map(($) => pl.cc($, ($): g_out.T.Data__Path.tail.A<Annotation> => {
            switch ($[0]) {
                case 'call': return pl.ss($, ($) => ['call', pl.cc($, ($) => {
                    const $v_arguments: g_out.T.Data__Path.tail.A.call.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Data__Path<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                    ))
                    const $v__lfunction: g_out.T.Data__Path.tail.A.call._lfunction<Annotation> = pl.cc($['function'], ($) => map_Data__Path<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                    ))
                    const $v_type__arguments: g_out.T.Data__Path.tail.A.call.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Type__Arguments<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v__ltype: */$v__lfunction,
                    ))
                    return {
                        'arguments': $v_arguments,
                        'function': $v__lfunction,
                        'type arguments': $v_type__arguments,
                    }
                })])
                case 'property': return pl.ss($, ($) => ['property', pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out_typesystem.T.Type.group.properties.D<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                })])
                default: return pl.au($[0])
            }
        })))
        const $v_variable: g_out.T.Data__Path.variable<Annotation> = pl.cc($['variable'], ($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        }))
        return {
            'tail': $v_tail,
            'variable': $v_variable,
        }
    })
}
function map_Expression<Annotation>(
    $: g_in.T.Expression<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
    $v__ltype: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>>,
): g_out.T.Expression<Annotation> {
    return pl.cc($, ($): g_out.T.Expression<Annotation> => {
        switch ($[0]) {
            case 'array literal': return pl.ss($, ($) => ['array literal', pl.cc($, ($) => {
                const $v_out: g_out_typesystem.T.Type.array<Annotation> = pl.cc($, ($) => {
                    const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = $v_TBD
                    return pl.optional(
                        x,
                        ($) => {
                            if ($[0] === 'array') {
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
                    'type': pl.cc($.type, ($) => $.map(($) => map_Expression<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                        /*$v__ltype: */$v_out,
                    ))),
                }
            })])
            case 'boolean': return pl.ss($, ($) => ['boolean', pl.cc($, ($) => {
                const $v_out: g_out_typesystem.T.Type._lboolean<Annotation> = pl.cc($, ($) => {
                    const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = $v_TBD
                    return pl.optional(
                        x,
                        ($) => {
                            if ($[0] === 'boolean') {
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
                    'type': pl.cc($.type, ($) => map_Boolean__Expression<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                    )),
                }
            })])
            case 'conditional': return pl.ss($, ($) => ['conditional', pl.cc($, ($) => {
                const $v__lfalse: g_out.T.Expression.conditional._lfalse<Annotation> = pl.cc($['false'], ($) => map_Expression<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                    /*$v__ltype: */$v__ltype,
                ))
                const $v_test: g_out.T.Expression.conditional.test<Annotation> = pl.cc($['test'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v__ltrue: g_out.T.Expression.conditional._ltrue<Annotation> = pl.cc($['true'], ($) => map_Expression<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                    /*$v__ltype: */$v__ltype,
                ))
                return {
                    'false': $v__lfalse,
                    'test': $v_test,
                    'true': $v__ltrue,
                }
            })])
            case 'function': return pl.ss($, ($) => ['function', pl.cc($, ($) => {
                const $v_out: g_out_typesystem.T.Type._lfunction<Annotation> = pl.cc($, ($) => {
                    const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = $v_TBD
                    return pl.optional(
                        x,
                        ($) => {
                            if ($[0] === 'function') {
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
                    'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                        const $v_parameters: g_out.T.Expression._lfunction._ltype.parameters<Annotation> = pl.cc($['parameters'], ($) => $.map(($) => pl.cc($, ($) => {
                            return null
                        })))
                        const $v_statements: g_out.T.Expression._lfunction._ltype.statements<Annotation> = pl.cc($['statements'], ($) => map_Statements<Annotation>(
                            $,
                            /*$v__lfunction: */$v_out,
                            /*$v_global__types: */$v_global__types,
                            /*$v_stack: */$v_variables,
                        ))
                        const $v_variables: g_out.T.Expression._lfunction._ltype.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                            $,
                            /*$v_global__types: */$v_global__types,
                            /*$v_stack: */$v_stack,
                        ))
                        return {
                            'parameters': $v_parameters,
                            'statements': $v_statements,
                            'variables': $v_variables,
                        }
                    })),
                }
            })])
            case 'null': return pl.ss($, ($) => ['null', pl.cc($, ($) => {
                const $v_out: g_out_typesystem.T.Type._lnull<Annotation> = pl.cc($, ($) => {
                    const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = $v_TBD
                    return pl.optional(
                        x,
                        ($) => {
                            if ($[0] === 'null') {
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
                    'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                        return null
                    })),
                }
            })])
            case 'numerical': return pl.ss($, ($) => ['numerical', pl.cc($, ($) => {
                const $v_out: g_out_typesystem.T.Type._lnumber<Annotation> = pl.cc($, ($) => {
                    const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = $v_TBD
                    return pl.optional(
                        x,
                        ($) => {
                            if ($[0] === 'number') {
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
                    'type': pl.cc($.type, ($) => map_Numerical__Expression<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                    )),
                }
            })])
            case 'object literal': return pl.ss($, ($) => ['object literal', pl.cc($, ($) => {
                const $v_out: g_out_typesystem.T.Type.group<Annotation> = pl.cc($, ($) => {
                    const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = $v_TBD
                    return pl.optional(
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
                        'out': $v_out,
                    },
                    'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                        const $v_properties: g_out.T.Expression.object__literal._ltype.properties<Annotation> = pl.cc($['properties'], ($) => $.map(($) => pl.cc($, ($) => {
                            const $v_X: g_out_typesystem.T.Type.group.properties<Annotation> = $v_XXX
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'X': $v_X,
                                },
                                'type': pl.cc($.type, ($) => map_Expression<Annotation>(
                                    $,
                                    /*$v_global__types: */$v_global__types,
                                    /*$v_stack: */$v_stack,
                                    /*$v__ltype: */$v_out,
                                )),
                            }
                        })))
                        return {
                            'properties': $v_properties,
                        }
                    })),
                }
            })])
            case 'string': return pl.ss($, ($) => ['string', pl.cc($, ($) => {
                const $v_out: g_out_typesystem.T.Type._lstring<Annotation> = pl.cc($, ($) => {
                    const x: pt.OptionalValue<g_out_typesystem.T.Type<Annotation>> = $v_TBD
                    return pl.optional(
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
                    'type': pl.cc($.type, ($) => map_String__Expression<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                    )),
                }
            })])
            case 'symbol': return pl.ss($, ($) => ['symbol', map_Data__Path<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            default: return pl.au($[0])
        }
    })
}
function map_Numerical__Expression<Annotation>(
    $: g_in.T.Numerical__Expression<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Numerical__Expression<Annotation> {
    return pl.cc($, ($): g_out.T.Numerical__Expression<Annotation> => {
        switch ($[0]) {
            case 'minus': return pl.ss($, ($) => ['minus', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Numerical__Expression.minus.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Numerical__Expression.minus.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'numeric literal': return pl.ss($, ($) => ['numeric literal', $])
            case 'plus': return pl.ss($, ($) => ['plus', pl.cc($, ($) => {
                const $v_left__hand__side: g_out.T.Numerical__Expression.plus.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_right__hand__side: g_out.T.Numerical__Expression.plus.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'left hand side': $v_left__hand__side,
                    'right hand side': $v_right__hand__side,
                }
            })])
            case 'postdecrement': return pl.ss($, ($) => ['postdecrement', map_Numerical__Expression__Or__Selection<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            case 'postincrement': return pl.ss($, ($) => ['postincrement', map_Numerical__Expression__Or__Selection<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            case 'predecrement': return pl.ss($, ($) => ['predecrement', map_Numerical__Expression__Or__Selection<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            case 'preincrement': return pl.ss($, ($) => ['preincrement', map_Numerical__Expression__Or__Selection<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            default: return pl.au($[0])
        }
    })
}
function map_Numerical__Expression__Or__Selection<Annotation>(
    $: g_in.T.Numerical__Expression__Or__Selection<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Numerical__Expression__Or__Selection<Annotation> {
    return pl.cc($, ($): g_out.T.Numerical__Expression__Or__Selection<Annotation> => {
        switch ($[0]) {
            case 'expression': return pl.ss($, ($) => ['expression', map_Numerical__Expression<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            case 'selection': return pl.ss($, ($) => ['selection', map_Data__Path<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            default: return pl.au($[0])
        }
    })
}
function map_SourceFile<Annotation>(
    $: g_in.T.SourceFile<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
): g_out.T.SourceFile<Annotation> {
    return pl.cc($, ($) => {
        const $v_symbols: g_out.T.SourceFile.symbols<Annotation> = pl.cc($['symbols'], ($) => map_Symbols<Annotation>(
            $,
            /*$v_global__types: */$v_global__types,
        ))
        return {
            'symbols': $v_symbols,
        }
    })
}
function map_Statements<Annotation>(
    $: g_in.T.Statements<Annotation>,
    $v__lfunction: pt.OptionalValue<g_out_typesystem.T.Function<Annotation>>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Statements<Annotation> {
    return $.map(($) => pl.cc($, ($): g_out.T.Statements.A<Annotation> => {
        switch ($[0]) {
            case 'assign': return pl.ss($, ($) => ['assign', map_Assign<Annotation>(
                $,
            )])
            case 'block': return pl.ss($, ($) => ['block', map_Block<Annotation>(
                $,
                /*$v__lfunction: */$v__lfunction,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            case 'call': return pl.ss($, ($) => ['call', pl.cc($, ($) => {
                const $v_arguments: g_out.T.Statements.A.call.arguments<Annotation> = pl.cc($['arguments'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $v_parameter: g_out_typesystem.T.Function.parameters<Annotation> = $v__lfunction
                    return {
                        'annotation': $.annotation,
                        'constraints': {
                            'parameter': $v_parameter,
                        },
                        'type': pl.cc($.type, ($) => map_Expression<Annotation>(
                            $,
                            /*$v_global__types: */$v_global__types,
                            /*$v_stack: */$v_stack,
                            /*$v__ltype: */$v_parameter,
                        )),
                    }
                })))
                const $v__lfunction: g_out.T.Statements.A.call._lfunction<Annotation> = pl.cc($['function'], ($) => map_Data__Path<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_type__arguments: g_out.T.Statements.A.call.type__arguments<Annotation> = pl.cc($['type arguments'], ($) => map_Type__Arguments<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_type__parameters: */$v__lfunction,
                ))
                return {
                    'arguments': $v_arguments,
                    'function': $v__lfunction,
                    'type arguments': $v_type__arguments,
                }
            })])
            case 'for': return pl.ss($, ($) => ['for', pl.cc($, ($) => {
                const $v_block: g_out.T.Statements.A._lfor.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>(
                    $,
                    /*$v__lfunction: */$v__lfunction,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_condition: g_out.T.Statements.A._lfor.condition<Annotation> = pl.cc($['condition'], ($) => map_Boolean__Expression<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_incrementer: g_out.T.Statements.A._lfor.incrementer<Annotation> = pl.cc($['incrementer'], ($) => map_Assign<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'block': $v_block,
                    'condition': $v_condition,
                    'incrementer': $v_incrementer,
                }
            })])
            case 'if': return pl.ss($, ($) => ['if', pl.cc($, ($) => {
                const $v_condition: g_out.T.Statements.A._lif.condition<Annotation> = pl.cc($['condition'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v__lelse: g_out.T.Statements.A._lif._lelse<Annotation> = pl.cc($['else'], ($) => pl.optional(
                    $,
                    ($): g_out.T.Statements.A._lif._lelse<Annotation> => [true, map_Block<Annotation>(
                        $,
                        /*$v__lfunction: */$v__lfunction,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                    )],
                    () => [false],
                ))
                const $v_then: g_out.T.Statements.A._lif.then<Annotation> = pl.cc($['then'], ($) => map_Block<Annotation>(
                    $,
                    /*$v__lfunction: */$v__lfunction,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'condition': $v_condition,
                    'else': $v__lelse,
                    'then': $v_then,
                }
            })])
            case 'minus assign': return pl.ss($, ($) => ['minus assign', pl.cc($, ($) => {
                const $v_right__hand__side: g_out.T.Statements.A.minus__assign.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                    /*$v__ltype: */$v_variable,
                ))
                const $v_variable: g_out.T.Statements.A.minus__assign.variable<Annotation> = pl.cc($['variable'], ($) => map_Data__Path<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'right hand side': $v_right__hand__side,
                    'variable': $v_variable,
                }
            })])
            case 'plus assign': return pl.ss($, ($) => ['plus assign', pl.cc($, ($) => {
                const $v_right__hand__side: g_out.T.Statements.A.plus__assign.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Expression<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                    /*$v__ltype: */$v_variable,
                ))
                const $v_variable: g_out.T.Statements.A.plus__assign.variable<Annotation> = pl.cc($['variable'], ($) => map_Data__Path<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'right hand side': $v_right__hand__side,
                    'variable': $v_variable,
                }
            })])
            case 'return': return pl.ss($, ($) => ['return', pl.cc($, ($) => {
                const $v_expression: g_out.T.Statements.A._lreturn.expression<Annotation> = pl.cc($['expression'], ($) => pl.optional(
                    $,
                    ($): g_out.T.Statements.A._lreturn.expression<Annotation> => [true, map_Expression<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                        /*$v__ltype: */$v__lfunction,
                    )],
                    () => [false],
                ))
                return {
                    'expression': $v_expression,
                }
            })])
            case 'switch': return pl.ss($, ($) => ['switch', pl.cc($, ($) => {
                const $v_cases: g_out.T.Statements.A._lswitch.cases<Annotation> = pl.cc($['cases'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $v_foo: g_out_typesystem.T.Type.tagged__union<Annotation> = $v_condition
                    return {
                        'annotation': $.annotation,
                        'constraints': {
                            'foo': $v_foo,
                        },
                        'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                            const $v_block: g_out.T.Statements.A._lswitch.cases.D._ltype.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>(
                                $,
                                /*$v__lfunction: */$v__lfunction,
                                /*$v_global__types: */$v_global__types,
                                /*$v_stack: */$v_stack,
                            ))
                            return {
                                'block': $v_block,
                            }
                        })),
                    }
                })))
                const $v_condition: g_out.T.Statements.A._lswitch.condition<Annotation> = pl.cc($['condition'], ($) => map_Data__Path<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v__ldefault: g_out.T.Statements.A._lswitch._ldefault<Annotation> = pl.cc($['default'], ($) => pl.optional(
                    $,
                    ($): g_out.T.Statements.A._lswitch._ldefault<Annotation> => [true, map_Block<Annotation>(
                        $,
                        /*$v__lfunction: */$v__lfunction,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                    )],
                    () => [false],
                ))
                return {
                    'cases': $v_cases,
                    'condition': $v_condition,
                    'default': $v__ldefault,
                }
            })])
            case 'while': return pl.ss($, ($) => ['while', pl.cc($, ($) => {
                const $v_block: g_out.T.Statements.A._lwhile.block<Annotation> = pl.cc($['block'], ($) => map_Block<Annotation>(
                    $,
                    /*$v__lfunction: */$v__lfunction,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                const $v_condition: g_out.T.Statements.A._lwhile.condition<Annotation> = pl.cc($['condition'], ($) => map_Boolean__Expression__Or__Selection<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_stack: */$v_stack,
                ))
                return {
                    'block': $v_block,
                    'condition': $v_condition,
                }
            })])
            default: return pl.au($[0])
        }
    }))
}
function map_String__Expression<Annotation>(
    $: g_in.T.String__Expression<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.String__Expression<Annotation> {
    return pl.cc($, ($): g_out.T.String__Expression<Annotation> => {
        switch ($[0]) {
            case 'string literal': return pl.ss($, ($) => ['string literal', $])
            default: return pl.au($[0])
        }
    })
}
function map_String__Expression__Or__Selection<Annotation>(
    $: g_in.T.String__Expression__Or__Selection<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.String__Expression__Or__Selection<Annotation> {
    return pl.cc($, ($): g_out.T.String__Expression__Or__Selection<Annotation> => {
        switch ($[0]) {
            case 'expression': return pl.ss($, ($) => ['expression', map_String__Expression<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            case 'selection': return pl.ss($, ($) => ['selection', map_Data__Path<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
                /*$v_stack: */$v_stack,
            )])
            default: return pl.au($[0])
        }
    })
}
function map_Symbols<Annotation>(
    $: g_in.T.Symbols<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
): g_out.T.Symbols<Annotation> {
    return $.map(($) => pl.cc($, ($): g_out.T.Symbols.D<Annotation> => {
        switch ($[0]) {
            case 'namespace': return pl.ss($, ($) => ['namespace', pl.cc($, ($) => {
                const $v_symbols: g_out.T.Symbols.D.namespace.symbols<Annotation> = pl.cc($['symbols'], ($) => map_Symbols<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                ))
                return {
                    'symbols': $v_symbols,
                }
            })])
            case 'symbol': return pl.ss($, ($) => ['symbol', pl.cc($, ($) => {
                const $v_type__path: g_out.T.Symbols.D._lsymbol.type__path<Annotation> = pl.cc($['type path'], ($) => map_Type__Path<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                ))
                return {
                    'type path': $v_type__path,
                }
            })])
            default: return pl.au($[0])
        }
    }))
}
function map_Type__Arguments<Annotation>(
    $: g_in.T.Type__Arguments<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_type__parameters: pt.OptionalValue<g_out_typesystem.T.Type__Parameters<Annotation>>,
): g_out.T.Type__Arguments<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const $v_x: g_out_typesystem.T.Type__Parameters<Annotation> = $v_type__parameters
        return {
            'annotation': $.annotation,
            'constraints': {
                'x': $v_x,
            },
            'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                const $v__ltype: g_out.T.Type__Arguments.D._ltype._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Path<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                ))
                return {
                    'type': $v__ltype,
                }
            })),
        }
    }))
}
function map_Type__Path<Annotation>(
    $: g_in.T.Type__Path<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
): g_out.T.Type__Path<Annotation> {
    return pl.cc($, ($) => {
        const $v_arguments: g_out.T.Type__Path.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Type__Arguments<Annotation>(
            $,
            /*$v_global__types: */$v_global__types,
            /*$v__ltype: */$v__ltype,
        ))
        const $v_namespaces: g_out.T.Type__Path.namespaces<Annotation> = pl.cc($['namespaces'], ($) => $.map(($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        })))
        const $v__ltype: g_out.T.Type__Path._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        }))
        return {
            'arguments': $v_arguments,
            'namespaces': $v_namespaces,
            'type': $v__ltype,
        }
    })
}
function map_Variables<Annotation>(
    $: g_in.T.Variables<Annotation>,
    $v_global__types: pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>,
    $v_stack: pt.OptionalValue<g_out.T.Variables<Annotation>>,
): g_out.T.Variables<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const $v__ltype: g_out.T.Variables.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Variables.D._ltype<Annotation> => {
            switch ($[0]) {
                case 'local': return pl.ss($, ($) => ['local', pl.cc($, ($) => {
                    const $v_initializer: g_out.T.Variables.D._ltype.local.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Expression<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                        /*$v_stack: */$v_stack,
                        /*$v__ltype: */$v__ltype,
                    ))
                    const $v__ltype: g_out.T.Variables.D._ltype.local._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                        const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = [false]
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    return {
                        'initializer': $v_initializer,
                        'type': $v__ltype,
                    }
                })])
                case 'parameter': return pl.ss($, ($) => ['parameter', pl.cc($, ($) => {
                    return null
                })])
                case 'stack': return pl.ss($, ($) => ['stack', pl.cc($, ($) => {
                    return null
                })])
                default: return pl.au($[0])
            }
        }))
        return {
            'type': $v__ltype,
        }
    }))
}