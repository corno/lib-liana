import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from ".."
import * as g_out from ".."

function map_Block<Annotation>($: g_in.T.Block<Annotation>, $x: {
    'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
    'stack': pt.OptionalValue<g_out.T.Variables<Annotation>>
}): g_out.T.Block<Annotation> {
    return pl.cc($, ($) => {
        const temp_variables: g_out.T.Block.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>($, {
            'stack': $x['stack'],
        }))
        const temp_statements: g_out.T.Block.statements<Annotation> = pl.cc($['statements'], ($) => map_Statements<Annotation>($, {
            'global types': $x['global types'],
            'stack': $x['stack'],
        }))
        return {
            'variables': temp_variables,
            'statements': temp_statements,
        }
    })
}
function map_Boolean__Expression<Annotation>($: g_in.T.Boolean__Expression<Annotation>, $x: {
    'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
    'stack': pt.OptionalValue<g_out.T.Variables<Annotation>>
}): g_out.T.Boolean__Expression<Annotation> {
    return pl.cc($, ($): g_out.T.Boolean__Expression<Annotation> => {
        switch ($[0]) {
            case 'and': return pl.ss($, ($) => ['and', pl.cc($, ($) => {
                const temp_left__hand__side: g_out.T.Boolean__Expression.and.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                const temp_right__hand__side: g_out.T.Boolean__Expression.and.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })])
            case 'or': return pl.ss($, ($) => ['or', pl.cc($, ($) => {
                const temp_left__hand__side: g_out.T.Boolean__Expression.or.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                const temp_right__hand__side: g_out.T.Boolean__Expression.or.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Boolean__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })])
            case 'false': return pl.ss($, ($) => ['false', pl.cc($, ($) => {
                return null
            })])
            case 'not': return pl.ss($, ($) => ['not', map_Boolean__Expression__Or__Selection<Annotation>($, {
                'global types': $x['global types'],
                'stack': $x['stack'],
            })])
            case 'true': return pl.ss($, ($) => ['true', pl.cc($, ($) => {
                return null
            })])
            case 'string equals': return pl.ss($, ($) => ['string equals', pl.cc($, ($) => {
                const temp_left__hand__side: g_out.T.Boolean__Expression.string__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_String__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                const temp_right__hand__side: g_out.T.Boolean__Expression.string__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_String__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })])
            case 'string not equals': return pl.ss($, ($) => ['string not equals', pl.cc($, ($) => {
                const temp_left__hand__side: g_out.T.Boolean__Expression.string__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_String__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                const temp_right__hand__side: g_out.T.Boolean__Expression.string__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_String__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })])
            case 'number equals': return pl.ss($, ($) => ['number equals', pl.cc($, ($) => {
                const temp_left__hand__side: g_out.T.Boolean__Expression.number__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                const temp_right__hand__side: g_out.T.Boolean__Expression.number__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })])
            case 'number not equals': return pl.ss($, ($) => ['number not equals', pl.cc($, ($) => {
                const temp_left__hand__side: g_out.T.Boolean__Expression.number__not__equals.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                const temp_right__hand__side: g_out.T.Boolean__Expression.number__not__equals.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })])
            case 'greater than': return pl.ss($, ($) => ['greater than', pl.cc($, ($) => {
                const temp_left__hand__side: g_out.T.Boolean__Expression.greater__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                const temp_right__hand__side: g_out.T.Boolean__Expression.greater__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })])
            case 'less than': return pl.ss($, ($) => ['less than', pl.cc($, ($) => {
                const temp_left__hand__side: g_out.T.Boolean__Expression.less__than.left__hand__side<Annotation> = pl.cc($['left hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                const temp_right__hand__side: g_out.T.Boolean__Expression.less__than.right__hand__side<Annotation> = pl.cc($['right hand side'], ($) => map_Numerical__Expression__Or__Selection<Annotation>($, {
                    'global types': $x['global types'],
                    'stack': $x['stack'],
                }))
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })])
            default: return pl.au($[0])
        }
    })
}
function map_String__Expression<Annotation>($: g_in.T.String__Expression<Annotation>, $x: {
    'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
    'stack': pt.OptionalValue<g_out.T.Variables<Annotation>>
}): g_out.T.String__Expression<Annotation> {
    return pl.cc($, ($): g_out.T.String__Expression<Annotation> => {
        switch ($[0]) {
            case 'string literal': return pl.ss($, ($) => ['string literal', $])
            default: return pl.au($[0])
        }
    })
}
function map_String__Expression__Or__Selection<Annotation>($: g_in.T.String__Expression__Or__Selection<Annotation>, $x: {
    'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
    'stack': pt.OptionalValue<g_out.T.Variables<Annotation>>
}): g_out.T.String__Expression__Or__Selection<Annotation> {
    return pl.cc($, ($): g_out.T.String__Expression__Or__Selection<Annotation> => {
        switch ($[0]) {
            case 'expression': return pl.ss($, ($) => ['expression', map_String__Expression<Annotation>($, {
                'global types': $x['global types'],
                'stack': $x['stack'],
            })])
            case 'selection': return pl.ss($, ($) => ['selection', map_Data__Path<Annotation>($, {
                'global types': $x['global types'],
                'stack': $x['stack'],
            })])
            default: return pl.au($[0])
        }
    })
}
function map_Symbols<Annotation>($: g_in.T.Symbols<Annotation>, $x: {
    'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
}): g_out.T.Symbols<Annotation> {
    return $.map(($) => pl.cc($, ($): g_out.T.Symbols.D<Annotation> => {
        switch ($[0]) {
            case 'namespace': return pl.ss($, ($) => ['namespace', pl.cc($, ($) => {
                const temp_symbols: g_out.T.Symbols.D.namespace.symbols<Annotation> = pl.cc($['symbols'], ($) => map_Symbols<Annotation>($, {
                    'global types': $x['global types'],
                }))
                return {
                    'symbols': temp_symbols,
                }
            })])
            case 'symbol': return pl.ss($, ($) => ['symbol', pl.cc($, ($) => {
                const temp_type__path: g_out.T.Symbols.D._lsymbol.type__path<Annotation> = pl.cc($['type path'], ($) => map_Type__Path<Annotation>($, {
                    'global types': $x['global types'],
                }))
                return {
                    'type path': temp_type__path,
                }
            })])
            default: return pl.au($[0])
        }
    }))
}
function map_Type__Arguments<Annotation>($: g_in.T.Type__Arguments<Annotation>, $x: {
    'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
}): g_out.T.Type__Arguments<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const constraint: pt.OptionalValue<g_out_typesystem.T.Type__Parameters.D<Annotation>> = [false]
        return {
            'annotation': $.annotation,
            'constraint': constraint,
            'type': pl.cc($.type, ($) => pl.cc($, ($) => {
                const temp__ltype: g_out.T.Type__Arguments.D._ltype._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Path<Annotation>($, {
                    'global types': $x['global types'],
                }))
                return {
                    'type': temp__ltype,
                }
            })),
        }
    }))
}
function map_Type__Path<Annotation>($: g_in.T.Type__Path<Annotation>, $x: {
    'global types': pt.OptionalValue<g_out_typesystem.T.Global__Types<Annotation>>
}): g_out.T.Type__Path<Annotation> {
    return pl.cc($, ($) => {
        const temp_namespaces: g_out.T.Type__Path.namespaces<Annotation> = pl.cc($['namespaces'], ($) => $.map(($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        })))
        const temp__ltype: g_out.T.Type__Path._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        }))
        const temp_arguments: g_out.T.Type__Path.arguments<Annotation> = pl.cc($['arguments'], ($) => map_Type__Arguments<Annotation>($, {
            'global types': $x['global types'],
        }))
        return {
            'namespaces': temp_namespaces,
            'type': temp__ltype,
            'arguments': temp_arguments,
        }
    })
}
function map_Variables<Annotation>($: g_in.T.Variables<Annotation>): g_out.T.Variables<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const temp__ltype: g_out.T.Variables.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out_typesystem.T.Global__Types.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        }))
        const temp_initializer: g_out.T.Variables.D.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Expression<Annotation>($, {
            'global types': $x['global types'],
            'stack': $x['stack'],
            'type': [false],
        }))
        return {
            'type': temp__ltype,
            'initializer': temp_initializer,
        }
    }))
}