import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_in from ".."
import * as g_out from ".."

function map_Block($: g_in.T.Block): g_out.T.Block {
    return pl.cc($, ($) => {
        const temp_variables = map_Variables($)
        const temp_statements = $.map(($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'block': return ['block', map_Block($)]
                case 'call': return ['call', pl.cc($, ($) => {
                    const temp__lfunction = map_Expression($)
                    const temp_type__arguments = map_Type($)
                    const temp_arguments = map_Expression($)
                    return {
                        'function': temp__lfunction,
                        'type arguments': temp_type__arguments,
                        'arguments': temp_arguments,
                    }
                })]
                case 'for': return ['for', pl.cc($, ($) => {
                    const temp_initializer = map_Variables($)
                    const temp_condition = map_Expression($)
                    const temp_incrementer = map_Expression($)
                    const temp_block = map_Block($)
                    return {
                        'initializer': temp_initializer,
                        'condition': temp_condition,
                        'incrementer': temp_incrementer,
                        'block': temp_block,
                    }
                })]
                case 'if': return ['if', pl.cc($, ($) => {
                    const temp_condition = map_Expression($)
                    const temp_then = map_Block($)
                    const temp__lelse = pl.optional(
                        $,
                        ($) => [true, map_Block($)],
                        () => [false],
                    )
                    return {
                        'condition': temp_condition,
                        'then': temp_then,
                        'else': temp__lelse,
                    }
                })]
                case 'minus assign': return ['minus assign', pl.cc($, ($) => {
                    const temp_variable = map_Data__Path($)
                    const temp_right__hand__side = map_Expression($)
                    return {
                        'variable': temp_variable,
                        'right hand side': temp_right__hand__side,
                    }
                })]
                case 'plus assign': return ['plus assign', pl.cc($, ($) => {
                    const temp_variable = map_Data__Path($)
                    const temp_right__hand__side = map_Expression($)
                    return {
                        'variable': temp_variable,
                        'right hand side': temp_right__hand__side,
                    }
                })]
                case 'return': return ['return', pl.cc($, ($) => {
                    const temp_expression = pl.optional(
                        $,
                        ($) => [true, map_Expression($)],
                        () => [false],
                    )
                    return {
                        'expression': temp_expression,
                    }
                })]
                case 'switch': return ['switch', pl.cc($, ($) => {
                    const temp_condition = map_Expression($)
                    const temp_cases = $.map(($) => pl.cc($, ($) => {
                        const temp_block = map_Block($)
                        return {
                            'block': temp_block,
                        }
                    }))
                    const temp__ldefault = pl.optional(
                        $,
                        ($) => [true, map_Block($)],
                        () => [false],
                    )
                    return {
                        'condition': temp_condition,
                        'cases': temp_cases,
                        'default': temp__ldefault,
                    }
                })]
                case 'while': return ['while', pl.cc($, ($) => {
                    const temp_condition = map_Expression($)
                    const temp_block = map_Block($)
                    return {
                        'condition': temp_condition,
                        'block': temp_block,
                    }
                })]
                default: return pl.au($[1])
            }
        }))
        return {
            'variables': temp_variables,
            'statements': temp_statements,
        }
    })
}
function map_Data__Path($: g_in.T.Data__Path): g_out.T.Data__Path {
    return pl.cc($, ($) => {
        const temp_variable = {
            'annotation': $.annotation,
            'key': $.key,
            'constraint': [FIXME],
        }
        const temp_tail = $.map(($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'call': return ['call', pl.cc($, ($) => {
                    const temp__lfunction = map_Data__Path($)
                    const temp_type__arguments = map_Type($)
                    const temp_arguments = map_Expression($)
                    return {
                        'function': temp__lfunction,
                        'type arguments': temp_type__arguments,
                        'arguments': temp_arguments,
                    }
                })]
                case 'property': return ['property', {
                    'annotation': $.annotation,
                    'key': $.key,
                    'constraint': [FIXME],
                }]
                default: return pl.au($[1])
            }
        }))
        return {
            'variable': temp_variable,
            'tail': temp_tail,
        }
    })
}
function map_Expression($: g_in.T.Expression): g_out.T.Expression {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'array literal': return ['array literal', $.map(($) => map_Expression($))]
            case 'object literal': return ['object literal', pl.cc($, ($) => {
                const temp_properties = $.map(($) => map_Expression($))
                return {
                    'properties': temp_properties,
                }
            })]
            case 'function': return ['function', pl.cc($, ($) => {
                const temp_arguments = $.map(($) => pl.cc($, ($) => {
                    return {}
                }))
                const temp_block = map_Block($)
                return {
                    'arguments': temp_arguments,
                    'block': temp_block,
                }
            })]
            case 'and': return ['and', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'or': return ['or', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'false': return ['false', pl.cc($, ($) => {
                return {}
            })]
            case 'not': return ['not', map_Expression($)]
            case 'true': return ['true', pl.cc($, ($) => {
                return {}
            })]
            case 'string equals': return ['string equals', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'string not equals': return ['string not equals', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'number equals': return ['number equals', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'number not equals': return ['number not equals', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'greater than': return ['greater than', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'less than': return ['less than', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'minus': return ['minus', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'plus': return ['plus', pl.cc($, ($) => {
                const temp_left__hand__side = map_Expression($)
                const temp_right__hand__side = map_Expression($)
                return {
                    'left hand side': temp_left__hand__side,
                    'right hand side': temp_right__hand__side,
                }
            })]
            case 'predecrement': return ['predecrement', map_Expression($)]
            case 'preincrement': return ['preincrement', map_Expression($)]
            case 'postdecrement': return ['postdecrement', map_Expression($)]
            case 'postincrement': return ['postincrement', map_Expression($)]
            case 'numeric literal': return ['numeric literal', $]
            case 'string literal': return ['string literal', $]
            case 'conditional': return ['conditional', pl.cc($, ($) => {
                const temp_test = map_Expression($)
                const temp__ltrue = map_Expression($)
                const temp__lfalse = map_Expression($)
                return {
                    'test': temp_test,
                    'true': temp__ltrue,
                    'false': temp__lfalse,
                }
            })]
            case 'null': return ['null', pl.cc($, ($) => {
                return {}
            })]
            case 'symbol': return ['symbol', map_Data__Path($)]
            default: return pl.au($[1])
        }
    })
}
function map_FunctionSignature($: g_in.T.FunctionSignature): g_out.T.FunctionSignature {
    return pl.cc($, ($) => {
        const temp_type__parameters = map_Type__Parameters($)
        const temp_paramerters = $.map(($) => pl.cc($, ($) => {
            const temp__ltype = map_Type($)
            return {
                'type': temp__ltype,
            }
        }))
        const temp_return__type = pl.optional(
            $,
            ($) => [true, map_Type($)],
            () => [false],
        )
        return {
            'type parameters': temp_type__parameters,
            'paramerters': temp_paramerters,
            'return type': temp_return__type,
        }
    })
}
function map_GlobalTypes($: g_in.T.GlobalTypes): g_out.T.GlobalTypes {
    return $.map(($) => pl.cc($, ($) => {
        const temp__ltype = pl.cc($, ($) => {
            switch ($[0]) {
                case 'namespace': return ['namespace', pl.cc($, ($) => {
                    const temp_types = map_GlobalTypes($)
                    return {
                        'types': temp_types,
                    }
                })]
                case 'type definition': return ['type definition', pl.cc($, ($) => {
                    const temp_parameters = map_Type__Parameters($)
                    const temp__ltype = map_Type($)
                    return {
                        'parameters': temp_parameters,
                        'type': temp__ltype,
                    }
                })]
                default: return pl.au($[1])
            }
        })
        return {
            'type': temp__ltype,
        }
    }))
}
function map_SourceFile($: g_in.T.SourceFile): g_out.T.SourceFile {
    return pl.cc($, ($) => {
        const temp_types = map_GlobalTypes($)
        const temp_symbols = map_Symbols($)
        return {
            'types': temp_types,
            'symbols': temp_symbols,
        }
    })
}
function map_Symbols($: g_in.T.Symbols): g_out.T.Symbols {
    return $.map(($) => pl.cc($, ($) => {
        switch ($[0]) {
            case 'namespace': return ['namespace', pl.cc($, ($) => {
                const temp_symbols = map_Symbols($)
                return {
                    'symbols': temp_symbols,
                }
            })]
            case 'variable': return ['variable', pl.cc($, ($) => {
                return {}
            })]
            case 'function': return ['function', pl.cc($, ($) => {
                const temp_signature = pl.cc($, ($) => {
                    const temp_type__path = map_Type__Path($)
                    return {
                        'type path': temp_type__path,
                    }
                })
                const temp_block = map_Block($)
                return {
                    'signature': temp_signature,
                    'block': temp_block,
                }
            })]
            default: return pl.au($[1])
        }
    }))
}
function map_Type($: g_in.T.Type): g_out.T.Type {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'array': return ['array', map_Type($)]
            case 'boolean': return ['boolean', pl.cc($, ($) => {
                return {}
            })]
            case 'function': return ['function', map_FunctionSignature($)]
            case 'group': return ['group', pl.cc($, ($) => {
                const temp_properties = pl.cc($, ($) => {
                    const temp__ltype = map_Type($)
                    return {
                        'type': temp__ltype,
                    }
                })
                return {
                    'properties': temp_properties,
                }
            })]
            case 'null': return ['null', pl.cc($, ($) => {
                return {}
            })]
            case 'number': return ['number', pl.cc($, ($) => {
                return {}
            })]
            case 'optional': return ['optional', map_Type($)]
            case 'reference': return ['reference', pl.cc($, ($) => {
                const temp_path = $.map(($) => {
                    'annotation': $.annotation,
                    'key': $.key,
                    'constraint': [FIXME],
                })
                return {
                    'path': temp_path,
                }
            })]
            case 'string': return ['string', pl.cc($, ($) => {
                return {}
            })]
            case 'tagged union': return ['tagged union', $.map(($) => map_Type($))]
            default: return pl.au($[1])
        }
    })
}
function map_Type__Path($: g_in.T.Type__Path): g_out.T.Type__Path {
    return pl.cc($, ($) => {
        const temp_namespaces = $.map(($) => {
            'annotation': $.annotation,
            'key': $.key,
            'constraint': [FIXME],
        })
        const temp__ltype = {
            'annotation': $.annotation,
            'key': $.key,
            'constraint': [FIXME],
        }
        const temp_parameters = $.map(($) => map_Type($))
        return {
            'namespaces': temp_namespaces,
            'type': temp__ltype,
            'parameters': temp_parameters,
        }
    })
}
function map_Type__Parameters($: g_in.T.Type__Parameters): g_out.T.Type__Parameters {
    return $.map(($) => map_Type($))
}
function map_Variable($: g_in.T.Variable): g_out.T.Variable {
    return pl.cc($, ($) => {
        const temp__ltype = map_Type($)
        return {
            'type': temp__ltype,
        }
    })
}
function map_Variables($: g_in.T.Variables): g_out.T.Variables {
    return $.map(($) => pl.cc($, ($) => {
        const temp_handle = map_Variable($)
        const temp_initializer = map_Expression($)
        return {
            'handle': temp_handle,
            'initializer': temp_initializer,
        }
    }))
}