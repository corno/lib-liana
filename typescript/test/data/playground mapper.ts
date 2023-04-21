import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_in from ".."
import * as g_out from ".."

function map_Block($: g_in.T.Block): g_out.T.Element {
    return ({
        'variables': pl.cc($, ($) => map_Variables($)),
        'statements': pl.cc($, ($) => map_Statements($)),
    })
}
function map_Boolean__Expression($: g_in.T.Boolean__Expression): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'and': return ['and', ({
                'left hand side': pl.cc($, ($) => map_Boolean__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_Boolean__Expression__Or__Selection($)),
            })]
            case 'or': return ['or', ({
                'left hand side': pl.cc($, ($) => map_Boolean__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_Boolean__Expression__Or__Selection($)),
            })]
            case 'false': return ['false', ({})]
            case 'not': return ['not', map_Boolean__Expression__Or__Selection($)]
            case 'true': return ['true', ({})]
            case 'string equals': return ['string equals', ({
                'left hand side': pl.cc($, ($) => map_String__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_String__Expression__Or__Selection($)),
            })]
            case 'string not equals': return ['string not equals', ({
                'left hand side': pl.cc($, ($) => map_String__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_String__Expression__Or__Selection($)),
            })]
            case 'number equals': return ['number equals', ({
                'left hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
            })]
            case 'number not equals': return ['number not equals', ({
                'left hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
            })]
            case 'greater than': return ['greater than', ({
                'left hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
            })]
            case 'less than': return ['less than', ({
                'left hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
            })]
            default: return pl.au($[1])
        }
    })
}
function map_Boolean__Expression__Or__Selection($: g_in.T.Boolean__Expression__Or__Selection): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'expression': return ['expression', map_Boolean__Expression($)]
            case 'selection': return ['selection', map_Data__Path($)]
            default: return pl.au($[1])
        }
    })
}
function map_Data__Path__Tail($: g_in.T.Data__Path__Tail): g_out.T.Element {
    return pl.optional(
        $,
        ($) => [true, pl.cc($, ($) => {
            switch ($[0]) {
                case 'call': return ['call', ({
                    'function': pl.cc($, ($) => map_Data__Path($)),
                    'type arguments': pl.cc($, ($) => map_Type__Arguments($)),
                    'arguments': pl.cc($, ($) => map_Data__Path($)),
                })]
                case 'property': return ['property', $]
                default: return pl.au($[1])
            }
        })],
        () => [false],
    )
}
function map_Data__Path($: g_in.T.Data__Path): g_out.T.Element {
    return ({
        'variable': pl.cc($, ($) => $),
        'tail': pl.cc($, ($) => map_Data__Path__Tail($)),
    })
}
function map_Expression($: g_in.T.Expression): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'array literal': return ['array literal', $.map(($) => map_Expression($))]
            case 'object literal': return ['object literal', ({
                'properties': pl.cc($, ($) => $.map(($) => map_Expression($))),
            })]
            case 'function': return ['function', ({
                'parameters': pl.cc($, ($) => $.map(($) => ({}))),
                'variables': pl.cc($, ($) => map_Variables($)),
                'statements': pl.cc($, ($) => map_Statements($)),
            })]
            case 'boolean': return ['boolean', map_Boolean__Expression($)]
            case 'numerical': return ['numerical', map_Numerical__Expression($)]
            case 'string': return ['string', map_String__Expression($)]
            case 'conditional': return ['conditional', ({
                'test': pl.cc($, ($) => map_Boolean__Expression__Or__Selection($)),
                'true': pl.cc($, ($) => map_Expression($)),
                'false': pl.cc($, ($) => map_Expression($)),
            })]
            case 'null': return ['null', ({})]
            case 'symbol': return ['symbol', map_Data__Path($)]
            default: return pl.au($[1])
        }
    })
}
function map_Numerical__Expression($: g_in.T.Numerical__Expression): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'minus': return ['minus', ({
                'left hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
            })]
            case 'plus': return ['plus', ({
                'left hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
                'right hand side': pl.cc($, ($) => map_Numerical__Expression__Or__Selection($)),
            })]
            case 'predecrement': return ['predecrement', map_Numerical__Expression__Or__Selection($)]
            case 'preincrement': return ['preincrement', map_Numerical__Expression__Or__Selection($)]
            case 'postdecrement': return ['postdecrement', map_Numerical__Expression__Or__Selection($)]
            case 'postincrement': return ['postincrement', map_Numerical__Expression__Or__Selection($)]
            case 'numeric literal': return ['numeric literal', $]
            default: return pl.au($[1])
        }
    })
}
function map_Numerical__Expression__Or__Selection($: g_in.T.Numerical__Expression__Or__Selection): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'expression': return ['expression', map_Numerical__Expression($)]
            case 'selection': return ['selection', map_Data__Path($)]
            default: return pl.au($[1])
        }
    })
}
function map_SourceFile($: g_in.T.SourceFile): g_out.T.Element {
    return ({
        'symbols': pl.cc($, ($) => map_Symbols($)),
    })
}
function map_Assign($: g_in.T.Assign): g_out.T.Element {
    return ({
        'variable': pl.cc($, ($) => map_Data__Path($)),
        'right hand side': pl.cc($, ($) => map_Expression($)),
    })
}
function map_Statements($: g_in.T.Statements): g_out.T.Element {
    return $.map(($) => pl.cc($, ($) => {
        switch ($[0]) {
            case 'block': return ['block', map_Block($)]
            case 'call': return ['call', ({
                'function': pl.cc($, ($) => map_Data__Path($)),
                'type arguments': pl.cc($, ($) => map_Type__Arguments($)),
                'arguments': pl.cc($, ($) => $.map(($) => map_Expression($))),
            })]
            case 'for': return ['for', ({
                'condition': pl.cc($, ($) => map_Boolean__Expression($)),
                'incrementer': pl.cc($, ($) => map_Assign($)),
                'block': pl.cc($, ($) => map_Block($)),
            })]
            case 'if': return ['if', ({
                'condition': pl.cc($, ($) => map_Boolean__Expression__Or__Selection($)),
                'then': pl.cc($, ($) => map_Block($)),
                'else': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, map_Block($)],
                    () => [false],
                )),
            })]
            case 'assign': return ['assign', map_Assign($)]
            case 'minus assign': return ['minus assign', ({
                'target': pl.cc($, ($) => map_Data__Path($)),
                'right hand side': pl.cc($, ($) => map_Expression($)),
            })]
            case 'plus assign': return ['plus assign', ({
                'target': pl.cc($, ($) => map_Data__Path($)),
                'right hand side': pl.cc($, ($) => map_Expression($)),
            })]
            case 'return': return ['return', ({
                'expression': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, map_Expression($)],
                    () => [false],
                )),
            })]
            case 'switch': return ['switch', ({
                'condition': pl.cc($, ($) => map_Data__Path($)),
                'cases': pl.cc($, ($) => $.map(($) => ({
                    'block': pl.cc($, ($) => map_Block($)),
                }))),
                'default': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, map_Block($)],
                    () => [false],
                )),
            })]
            case 'while': return ['while', ({
                'condition': pl.cc($, ($) => map_Boolean__Expression__Or__Selection($)),
                'block': pl.cc($, ($) => map_Block($)),
            })]
            default: return pl.au($[1])
        }
    }))
}
function map_String__Expression($: g_in.T.String__Expression): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'string literal': return ['string literal', $]
            default: return pl.au($[1])
        }
    })
}
function map_String__Expression__Or__Selection($: g_in.T.String__Expression__Or__Selection): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'expression': return ['expression', map_String__Expression($)]
            case 'selection': return ['selection', map_Data__Path($)]
            default: return pl.au($[1])
        }
    })
}
function map_Symbols($: g_in.T.Symbols): g_out.T.Element {
    return $.map(($) => pl.cc($, ($) => {
        switch ($[0]) {
            case 'namespace': return ['namespace', ({
                'symbols': pl.cc($, ($) => map_Symbols($)),
            })]
            case 'symbol': return ['symbol', ({
                'type path': pl.cc($, ($) => map_Type__Path($)),
            })]
            default: return pl.au($[1])
        }
    }))
}
function map_Type__Arguments($: g_in.T.Type__Arguments): g_out.T.Element {
    return $.map(($) => ({
        'type': pl.cc($, ($) => map_Type__Path($)),
    }))
}
function map_Type__Path($: g_in.T.Type__Path): g_out.T.Element {
    return ({
        'namespaces': pl.cc($, ($) => $.map(($) => $)),
        'type': pl.cc($, ($) => $),
        'arguments': pl.cc($, ($) => map_Type__Arguments($)),
    })
}
function map_Variables($: g_in.T.Variables): g_out.T.Element {
    return $.map(($) => ({
        'type': pl.cc($, ($) => pl.cc($, ($) => {
            switch ($[0]) {
                case 'parameter': return ['parameter', ({})]
                case 'stack': return ['stack', ({})]
                case 'local': return ['local', ({
                    'type': pl.cc($, ($) => $),
                    'initializer': pl.cc($, ($) => map_Expression($)),
                })]
                default: return pl.au($[1])
            }
        })),
    }))
}