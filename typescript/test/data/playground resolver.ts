import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from ".."
import * as g_out from ".."

function map_Reference<Annotation>($: g_in.T.Reference<Annotation>, $x: {
    'global types': pt.Lookup<pt.ComputedValue<g_out.T.Type__Library.global__types.D<Annotation>>>
}): g_out.T.Reference<Annotation> {
    return pl.cc($, ($) => {
        const temp_temp__type__path: g_out.T.Reference.temp__type__path<Annotation> = pl.cc($['temp type path'], ($) => map_Type__Selection<Annotation>($, {
            'global types': $x['global types'],
        }))
        const temp_referencee__type: g_out.T.Reference.referencee__type<Annotation> = pl.cc($['referencee type'], ($) => pl.cc($, ($): g_out.T.Reference.referencee__type<Annotation> => {
            switch ($[0]) {
                case 'resolved value': return pl.ss($, ($) => ['resolved value', pl.cc($, ($) => {
                    const temp_selection: g_out.T.Reference.referencee__type.resolved__value.selection<Annotation> = pl.cc($['selection'], ($) => map_Value__Selection<Annotation>($))
                    return {
                        'selection': temp_selection,
                    }
                })])
                case 'sibling': return pl.ss($, ($) => ['sibling', pl.cc($, ($) => {
                    const temp_selection: g_out.T.Reference.referencee__type.sibling.selection<Annotation> = pl.cc($['selection'], ($) => map_Containing__Dictionary__Selection<Annotation>($))
                    return {
                        'selection': temp_selection,
                    }
                })])
                default: return pl.au($[0])
            }
        }))
        return {
            'temp type path': temp_temp__type__path,
            'referencee type': temp_referencee__type,
        }
    })
}
function map_Selection<Annotation>($: g_in.T.Selection<Annotation>, $x: {
    'type': pt.OptionalValue<g_out.T.Type<Annotation>>
}): g_out.T.Selection<Annotation> {
    return pl.cc($, ($): g_out.T.Selection<Annotation> => {
        switch ($[0]) {
            case 'reference': return pl.ss($, ($) => ['reference', pl.cc($, ($) => {
                return null
            })])
            case 'component': return pl.ss($, ($) => ['component', pl.cc($, ($) => {
                const temp_type__name: g_out.T.Selection.component.type__name<Annotation> = pl.cc($['type name'], ($) => $)
                return {
                    'type name': temp_type__name,
                }
            })])
            case 'array': return pl.ss($, ($) => ['array', pl.cc($, ($) => {
                const temp_not__empty: g_out.T.Selection.array.not__empty<Annotation> = pl.cc($['not empty'], ($) => map_Selection<Annotation>($))
                const temp_empty: g_out.T.Selection.array.empty<Annotation> = pl.cc($['empty'], ($) => map_Selection<Annotation>($))
                return {
                    'not empty': temp_not__empty,
                    'empty': temp_empty,
                }
            })])
            case 'tagged union': return pl.ss($, ($) => ['tagged union', $.map(($) => map_Selection<Annotation>($))])
            case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                const temp_property: g_out.T.Selection.group.property<Annotation> = pl.cc($['property'], ($) => pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out.T.Type.group.properties.D<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const temp_selection: g_out.T.Selection.group.selection<Annotation> = pl.cc($['selection'], ($) => map_Selection<Annotation>($))
                return {
                    'property': temp_property,
                    'selection': temp_selection,
                }
            })])
            default: return pl.au($[0])
        }
    })
}
function map_Terminal<Annotation>($: g_in.T.Terminal<Annotation>, $x: {
    'global types': pt.Lookup<pt.ComputedValue<g_out.T.Type__Library.global__types.D<Annotation>>>
    'terminal types': pt.OptionalValue<g_out.T.Terminal__Types<Annotation>>
}): g_out.T.Terminal<Annotation> {
    return pl.cc($, ($) => {
        const temp_constrained: g_out.T.Terminal.constrained<Annotation> = pl.cc($['constrained'], ($) => pl.cc($, ($): g_out.T.Terminal.constrained<Annotation> => {
            switch ($[0]) {
                case 'no': return pl.ss($, ($) => ['no', pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Terminal.constrained.no._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                        const constraint: pt.OptionalValue<g_out.T.Terminal__Types.D<Annotation>> = [false]
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    return {
                        'type': temp__ltype,
                    }
                })])
                case 'yes': return pl.ss($, ($) => ['yes', map_Reference<Annotation>($, {
                    'global types': $v['global types'],
                })])
                default: return pl.au($[0])
            }
        }))
        return {
            'constrained': temp_constrained,
        }
    })
}
function map_Variables<Annotation>($: g_in.T.Variables<Annotation>, $x: {
    'parameters': pt.OptionalValue<pt.OptionalValue<g_out.T.Parameters<Annotation>>>
    'parent variables': pt.OptionalValue<pt.OptionalValue<g_out.T.Variables<Annotation>>>
    'siblings': pt.Lookup<g_out.T.Type.group.properties.D<Annotation>>
}): g_out.T.Variables<Annotation> {
    return $.map(($) => pl.cc($, ($): g_out.T.Variables.D<Annotation> => {
        switch ($[0]) {
            case 'parameter': return pl.ss($, ($) => ['parameter', pl.cc($, ($) => {
                const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D.parameters.D<Annotation>> = [false]
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })])
            case 'parent variable': return pl.ss($, ($) => ['parent variable', pl.cc($, ($) => {
                const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D.parameters.D<Annotation>> = [false]
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })])
            case 'sibling': return pl.ss($, ($) => ['sibling', pl.cc($, ($) => {
                const constraint: pt.OptionalValue<g_out.T.Type.group.properties.D<Annotation>> = [false]
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })])
            default: return pl.au($[0])
        }
    }))
}
function map_Type<Annotation>($: g_in.T.Type<Annotation>, $x: {
    'global types': pt.Lookup<pt.ComputedValue<g_out.T.Type__Library.global__types.D<Annotation>>>
    'imports': pt.OptionalValue<g_out.T.Imports<Annotation>>
}): g_out.T.Type<Annotation> {
    return pl.cc($, ($): g_out.T.Type<Annotation> => {
        switch ($[0]) {
            case 'terminal': return pl.ss($, ($) => ['terminal', map_Terminal<Annotation>($, {
                'global types': $x['global types'],
            })])
            case 'dictionary': return pl.ss($, ($) => ['dictionary', pl.cc($, ($) => {
                const temp_key: g_out.T.Type.dictionary.key<Annotation> = pl.cc($['key'], ($) => map_Terminal<Annotation>($, {
                    'global types': $x['global types'],
                }))
                const temp__ltype: g_out.T.Type.dictionary._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($, {
                    'global types': $x['global types'],
                }))
                const temp_autofill: g_out.T.Type.dictionary.autofill<Annotation> = pl.cc($['autofill'], ($) => $.map(($) => pl.cc($, ($) => {
                    const temp_source: g_out.T.Type.dictionary.autofill.A.source<Annotation> = pl.cc($['source'], ($) => map_Value__Selection<Annotation>($))
                    const temp_initializer: g_out.T.Type.dictionary.autofill.A.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Type__Initializer<Annotation>($))
                    return {
                        'source': temp_source,
                        'initializer': temp_initializer,
                    }
                })))
                return {
                    'key': temp_key,
                    'type': temp__ltype,
                    'autofill': temp_autofill,
                }
            })])
            case 'array': return pl.ss($, ($) => ['array', pl.cc($, ($) => {
                const temp__ltype: g_out.T.Type.array._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($, {
                    'global types': $x['global types'],
                }))
                const temp_constraint: g_out.T.Type.array.constraint<Annotation> = pl.cc($['constraint'], ($) => pl.optional(
                    $,
                    ($): g_out.T.Type.array.constraint<Annotation> => [true, pl.cc($, ($) => {
                        const temp_temp__type: g_out.T.Type.array.constraint.O.temp__type<Annotation> = pl.cc($['temp type'], ($) => map_Type__Selection<Annotation>($, {
                            'global types': $x['global types'],
                        }))
                        const temp_initial__value: g_out.T.Type.array.constraint.O.initial__value<Annotation> = pl.cc($['initial value'], ($) => map_Selection<Annotation>($))
                        const temp_element__value: g_out.T.Type.array.constraint.O.element__value<Annotation> = pl.cc($['element value'], ($) => map_Selection<Annotation>($))
                        return {
                            'temp type': temp_temp__type,
                            'initial value': temp_initial__value,
                            'element value': temp_element__value,
                        }
                    })],
                    () => [false],
                ))
                return {
                    'type': temp__ltype,
                    'constraint': temp_constraint,
                }
            })])
            case 'optional': return pl.ss($, ($) => ['optional', pl.cc($, ($) => {
                const temp__ltype: g_out.T.Type.optional._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($))
                return {
                    'type': temp__ltype,
                }
            })])
            case 'tagged union': return pl.ss($, ($) => ['tagged union', pl.cc($, ($) => {
                const temp_options: g_out.T.Type.tagged__union.options<Annotation> = pl.cc($['options'], ($) => $.map(($) => pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Type.tagged__union.options.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($, {
                        'global types': $x['global types'],
                    }))
                    const temp_constraint: g_out.T.Type.tagged__union.options.D.constraint<Annotation> = pl.cc($['constraint'], ($) => pl.optional(
                        $,
                        ($): g_out.T.Type.tagged__union.options.D.constraint<Annotation> => [true, pl.cc($, ($) => {
                            const temp__ltype: g_out.T.Type.tagged__union.options.D.constraint.O._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Selection<Annotation>($, {
                                'global types': $x['global types'],
                            }))
                            const temp_option: g_out.T.Type.tagged__union.options.D.constraint.O.option<Annotation> = pl.cc($['option'], ($) => pl.cc($, ($) => {
                                const constraint: pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>> = [false]
                                return {
                                    'annotation': $.annotation,
                                    'constraint': constraint,
                                    'key': $.key,
                                }
                            }))
                            return {
                                'type': temp__ltype,
                                'option': temp_option,
                            }
                        })],
                        () => [false],
                    ))
                    return {
                        'type': temp__ltype,
                        'constraint': temp_constraint,
                    }
                })))
                const temp__ldefault: g_out.T.Type.tagged__union._ldefault<Annotation> = pl.cc($['default'], ($) => pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const temp_constraint: g_out.T.Type.tagged__union.constraint<Annotation> = pl.cc($['constraint'], ($) => pl.optional(
                    $,
                    ($): g_out.T.Type.tagged__union.constraint<Annotation> => [true, pl.cc($, ($) => {
                        const temp__ltype: g_out.T.Type.tagged__union.constraint.O._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Selection<Annotation>($, {
                            'global types': $x['global types'],
                        }))
                        const temp_options: g_out.T.Type.tagged__union.constraint.O.options<Annotation> = pl.cc($['options'], ($) => $.map(($) => pl.cc($, ($) => {
                            const constraint: pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>> = [false]
                            return {
                                'annotation': $.annotation,
                                'constraint': constraint,
                                'type': pl.cc($.type, ($) => map_Selection<Annotation>($)),
                            }
                        })))
                        return {
                            'type': temp__ltype,
                            'options': temp_options,
                        }
                    })],
                    () => [false],
                ))
                return {
                    'options': temp_options,
                    'default': temp__ldefault,
                    'constraint': temp_constraint,
                }
            })])
            case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                const temp_properties: g_out.T.Type.group.properties<Annotation> = pl.cc($['properties'], ($) => $.map(($) => pl.cc($, ($) => {
                    const temp_variables: g_out.T.Type.group.properties.D.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>($))
                    const temp__ltype: g_out.T.Type.group.properties.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($, {
                        'global types': $x['global types'],
                    }))
                    return {
                        'variables': temp_variables,
                        'type': temp__ltype,
                    }
                })))
                return {
                    'properties': temp_properties,
                }
            })])
            case 'component': return pl.ss($, ($) => ['component', pl.cc($, ($) => {
                const temp_context: g_out.T.Type.component.context<Annotation> = pl.cc($['context'], ($) => pl.cc($, ($): g_out.T.Type.component.context<Annotation> => {
                    switch ($[0]) {
                        case 'local': return pl.ss($, ($) => ['local', pl.cc($, ($) => {
                            return null
                        })])
                        case 'import': return pl.ss($, ($) => ['import', pl.cc($, ($) => {
                            const temp_library: g_out.T.Type.component.context._limport.library<Annotation> = pl.cc($['library'], ($) => pl.cc($, ($) => {
                                const constraint: pt.OptionalValue<g_out.T.Type__Library.imports.D<Annotation>> = [false]
                                return {
                                    'annotation': $.annotation,
                                    'constraint': constraint,
                                    'key': $.key,
                                }
                            }))
                            return {
                                'library': temp_library,
                            }
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const temp__ltype: g_out.T.Type.component._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const temp_arguments: g_out.T.Type.component.arguments<Annotation> = pl.cc($['arguments'], ($) => $.map(($) => pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Type.component.arguments.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Type.component.arguments.D._ltype<Annotation> => {
                        switch ($[0]) {
                            case 'resolved value': return pl.ss($, ($) => ['resolved value', map_Value__Selection<Annotation>($)])
                            case 'sibling': return pl.ss($, ($) => ['sibling', map_Containing__Dictionary__Selection<Annotation>($)])
                            default: return pl.au($[0])
                        }
                    }))
                    return {
                        'type': temp__ltype,
                    }
                })))
                return {
                    'context': temp_context,
                    'type': temp__ltype,
                    'arguments': temp_arguments,
                }
            })])
            default: return pl.au($[0])
        }
    })
}
function map_Reference__Initializer<Annotation>($: g_in.T.Reference__Initializer<Annotation>): g_out.T.Reference__Initializer<Annotation> {
    return pl.cc($, ($) => {
        return null
    })
}
function map_Terminal__Initializer<Annotation>($: g_in.T.Terminal__Initializer<Annotation>): g_out.T.Terminal__Initializer<Annotation> {
    return pl.cc($, ($) => {
        const temp_constrained: g_out.T.Terminal__Initializer.constrained<Annotation> = pl.cc($['constrained'], ($) => pl.cc($, ($): g_out.T.Terminal__Initializer.constrained<Annotation> => {
            switch ($[0]) {
                case 'yes': return pl.ss($, ($) => ['yes', map_Reference__Initializer<Annotation>($)])
                default: return pl.au($[0])
            }
        }))
        return {
            'constrained': temp_constrained,
        }
    })
}
function map_Type__Initializer<Annotation>($: g_in.T.Type__Initializer<Annotation>): g_out.T.Type__Initializer<Annotation> {
    return pl.cc($, ($): g_out.T.Type__Initializer<Annotation> => {
        switch ($[0]) {
            case 'terminal': return pl.ss($, ($) => ['terminal', map_Terminal__Initializer<Annotation>($)])
            case 'optional': return pl.ss($, ($) => ['optional', pl.cc($, ($) => {
                const temp__ltype: g_out.T.Type__Initializer.optional._ltype<Annotation> = pl.cc($['type'], ($) => pl.optional(
                    $,
                    ($): g_out.T.Type__Initializer.optional._ltype<Annotation> => [true, map_Type__Initializer<Annotation>($)],
                    () => [false],
                ))
                return {
                    'type': temp__ltype,
                }
            })])
            case 'tagged union': return pl.ss($, ($) => ['tagged union', pl.cc($, ($) => {
                const temp_option: g_out.T.Type__Initializer.tagged__union.option<Annotation> = pl.cc($['option'], ($) => pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const temp_data: g_out.T.Type__Initializer.tagged__union.data<Annotation> = pl.cc($['data'], ($) => map_Type__Initializer<Annotation>($))
                return {
                    'option': temp_option,
                    'data': temp_data,
                }
            })])
            case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                const temp_properties: g_out.T.Type__Initializer.group.properties<Annotation> = pl.cc($['properties'], ($) => $.map(($) => pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Type__Initializer.group.properties.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Initializer<Annotation>($))
                    return {
                        'type': temp__ltype,
                    }
                })))
                return {
                    'properties': temp_properties,
                }
            })])
            case 'component': return pl.ss($, ($) => ['component', map_Type__Initializer<Annotation>($)])
            default: return pl.au($[0])
        }
    })
}
function map_Value__Selection<Annotation>($: g_in.T.Value__Selection<Annotation>): g_out.T.Value__Selection<Annotation> {
    return pl.cc($, ($) => {
        const temp_start: g_out.T.Value__Selection.start<Annotation> = pl.cc($['start'], ($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        }))
        const temp_tail: g_out.T.Value__Selection.tail<Annotation> = pl.cc($['tail'], ($) => $.map(($) => pl.cc($, ($): g_out.T.Value__Selection.tail.A<Annotation> => {
            switch ($[0]) {
                case 'tagged union': return pl.ss($, ($) => ['tagged union', pl.cc($, ($) => {
                    const temp_option: g_out.T.Value__Selection.tail.A.tagged__union.option<Annotation> = pl.cc($['option'], ($) => pl.cc($, ($) => {
                        const constraint: pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>> = [false]
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    return {
                        'option': temp_option,
                    }
                })])
                default: return pl.au($[0])
            }
        })))
        return {
            'start': temp_start,
            'tail': temp_tail,
        }
    })
}
function map_Containing__Dictionary__Selection<Annotation>($: g_in.T.Containing__Dictionary__Selection<Annotation>): g_out.T.Containing__Dictionary__Selection<Annotation> {
    return pl.cc($, ($): g_out.T.Containing__Dictionary__Selection<Annotation> => {
        switch ($[0]) {
            case 'this': return pl.ss($, ($) => ['this', pl.cc($, ($) => {
                const temp__ltype: g_out.T.Containing__Dictionary__Selection._lthis._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Containing__Dictionary__Selection._lthis._ltype<Annotation> => {
                    switch ($[0]) {
                        case 'non cyclic': return pl.ss($, ($) => ['non cyclic', pl.cc($, ($) => {
                            return null
                        })])
                        case 'cyclic': return pl.ss($, ($) => ['cyclic', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                return {
                    'type': temp__ltype,
                }
            })])
            case 'parameter': return pl.ss($, ($) => ['parameter', pl.cc($, ($) => {
                const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D.parameters.D<Annotation>> = [false]
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })])
            default: return pl.au($[0])
        }
    })
}
function map_Global__Type__Selection<Annotation>($: g_in.T.Global__Type__Selection<Annotation>): g_out.T.Global__Type__Selection<Annotation> {
    return pl.cc($, ($) => {
        const temp__limport: g_out.T.Global__Type__Selection._limport<Annotation> = pl.cc($['import'], ($) => pl.optional(
            $,
            ($): g_out.T.Global__Type__Selection._limport<Annotation> => [true, pl.cc($, ($) => {
                const constraint: pt.OptionalValue<g_out.T.Type__Library.imports.D<Annotation>> = [false]
                return {
                    'annotation': $.annotation,
                    'constraint': constraint,
                    'key': $.key,
                }
            })],
            () => [false],
        ))
        const temp__ltype: g_out.T.Global__Type__Selection._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        }))
        return {
            'import': temp__limport,
            'type': temp__ltype,
        }
    })
}
function map_Terminal__Types<Annotation>($: g_in.T.Terminal__Types<Annotation>): g_out.T.Terminal__Types<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        return null
    }))
}
function map_Parameters<Annotation>($: g_in.T.Parameters<Annotation>): g_out.T.Parameters<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const temp__ltype: g_out.T.Parameters.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Parameters.D._ltype<Annotation> => {
            switch ($[0]) {
                case 'resolved value': return pl.ss($, ($) => ['resolved value', pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Parameters.D._ltype.resolved__value._ltype<Annotation> = pl.cc($['type'], ($) => map_Global__Type__Selection<Annotation>($))
                    const temp_optional: g_out.T.Parameters.D._ltype.resolved__value.optional<Annotation> = pl.cc($['optional'], ($) => pl.cc($, ($): g_out.T.Parameters.D._ltype.resolved__value.optional<Annotation> => {
                        switch ($[0]) {
                            case 'no': return pl.ss($, ($) => ['no', pl.cc($, ($) => {
                                return null
                            })])
                            case 'yes': return pl.ss($, ($) => ['yes', pl.cc($, ($) => {
                                return null
                            })])
                            default: return pl.au($[0])
                        }
                    }))
                    return {
                        'type': temp__ltype,
                        'optional': temp_optional,
                    }
                })])
                case 'siblings': return pl.ss($, ($) => ['siblings', pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Parameters.D._ltype.siblings._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Selection<Annotation>($, {
                        'global types': $x['global types'],
                    }))
                    const temp_kind: g_out.T.Parameters.D._ltype.siblings.kind<Annotation> = pl.cc($['kind'], ($) => pl.cc($, ($): g_out.T.Parameters.D._ltype.siblings.kind<Annotation> => {
                        switch ($[0]) {
                            case 'non cyclic': return pl.ss($, ($) => ['non cyclic', pl.cc($, ($) => {
                                return null
                            })])
                            case 'cyclic': return pl.ss($, ($) => ['cyclic', pl.cc($, ($) => {
                                return null
                            })])
                            default: return pl.au($[0])
                        }
                    }))
                    return {
                        'type': temp__ltype,
                        'kind': temp_kind,
                    }
                })])
                default: return pl.au($[0])
            }
        }))
        return {
            'type': temp__ltype,
        }
    }))
}
function map_Imports<Annotation>($: g_in.T.Imports<Annotation>): g_out.T.Imports<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        return null
    }))
}
function map_Type__Library<Annotation>($: g_in.T.Type__Library<Annotation>): g_out.T.Type__Library<Annotation> {
    return pl.cc($, ($) => {
        const temp_imports: g_out.T.Type__Library.imports<Annotation> = pl.cc($['imports'], ($) => map_Imports<Annotation>($))
        const temp_terminal__types: g_out.T.Type__Library.terminal__types<Annotation> = pl.cc($['terminal types'], ($) => map_Terminal__Types<Annotation>($))
        const temp_global__types: g_out.T.Type__Library.global__types<Annotation> = pl.cc($['global types'], ($) => $.map(($) => pl.cc($, ($) => {
            const temp_parameters: g_out.T.Type__Library.global__types.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Parameters<Annotation>($))
            const temp_variables: g_out.T.Type__Library.global__types.D.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>($))
            const temp__ltype: g_out.T.Type__Library.global__types.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($, {
                'global types': $x['global types'],
            }))
            const temp_result: g_out.T.Type__Library.global__types.D.result<Annotation> = pl.cc($['result'], ($) => pl.optional(
                $,
                ($): g_out.T.Type__Library.global__types.D.result<Annotation> => [true, pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Type__Library.global__types.D.result.O._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                        const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>> = [false]
                        return {
                            'annotation': $.annotation,
                            'constraint': constraint,
                            'key': $.key,
                        }
                    }))
                    const temp_selection: g_out.T.Type__Library.global__types.D.result.O.selection<Annotation> = pl.cc($['selection'], ($) => map_Selection<Annotation>($))
                    return {
                        'type': temp__ltype,
                        'selection': temp_selection,
                    }
                })],
                () => [false],
            ))
            return {
                'parameters': temp_parameters,
                'variables': temp_variables,
                'type': temp__ltype,
                'result': temp_result,
            }
        })))
        return {
            'imports': temp_imports,
            'terminal types': temp_terminal__types,
            'global types': temp_global__types,
        }
    })
}
function map_Type__Selection<Annotation>($: g_in.T.Type__Selection<Annotation>, $x: {
    'global types': pt.Lookup<pt.ComputedValue<g_out.T.Type__Library.global__types.D<Annotation>>>
}): g_out.T.Type__Selection<Annotation> {
    return pl.cc($, ($) => {
        const temp_global__type: g_out.T.Type__Selection.global__type<Annotation> = pl.cc($['global type'], ($) => map_Global__Type__Selection<Annotation>($))
        const temp_tail: g_out.T.Type__Selection.tail<Annotation> = pl.cc($['tail'], ($) => $.map(($) => pl.cc($, ($): g_out.T.Type__Selection.tail.A<Annotation> => {
            switch ($[0]) {
                case 'dictionary': return pl.ss($, ($) => ['dictionary', ])
                case 'optional': return pl.ss($, ($) => ['optional', ])
                case 'array': return pl.ss($, ($) => ['array', ])
                case 'group': return pl.ss($, ($) => ['group', ])
                default: return pl.au($[0])
            }
        })))
        return {
            'global type': temp_global__type,
            'tail': temp_tail,
        }
    })
}
function map_Model<Annotation>($: g_in.T.Model<Annotation>): g_out.T.Model<Annotation> {
    return pl.cc($, ($) => {
        const temp_type__library: g_out.T.Model.type__library<Annotation> = pl.cc($['type library'], ($) => map_Type__Library<Annotation>($))
        const temp_root: g_out.T.Model.root<Annotation> = pl.cc($['root'], ($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        }))
        return {
            'type library': temp_type__library,
            'root': temp_root,
        }
    })
}