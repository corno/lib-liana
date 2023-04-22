import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from ".."
import * as g_out from ".."

function map_Containing__Dictionary__Selection<Annotation>(
    $: g_in.T.Containing__Dictionary__Selection<Annotation>,
): g_out.T.Containing__Dictionary__Selection<Annotation> {
    return pl.cc($, ($): g_out.T.Containing__Dictionary__Selection<Annotation> => {
        switch ($[0]) {
            case 'parameter': return pl.ss($, ($) => ['parameter', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Parameters.D<Annotation>> = pl.optional/*3*/(
                    $v_TBD,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Parameters.D<Annotation>>>(
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
            })])
            case 'this': return pl.ss($, ($) => ['this', pl.cc($, ($) => {
                const $p__ltype: g_out.T.Containing__Dictionary__Selection._lthis._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Containing__Dictionary__Selection._lthis._ltype<Annotation> => {
                    switch ($[0]) {
                        case 'cyclic': return pl.ss($, ($) => ['cyclic', pl.cc($, ($) => {
                            return null
                        })])
                        case 'non cyclic': return pl.ss($, ($) => ['non cyclic', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v__ltype: pt.OptionalValue<g_out.T.Containing__Dictionary__Selection._lthis._ltype<Annotation>> = [true, $p__ltype]
                return {
                    'type': $p__ltype,
                }
            })])
            default: return pl.au($[0])
        }
    })
}
function map_Dictionary__Constraints<Annotation>(
    $: g_in.T.Dictionary__Constraints<Annotation>,
): g_out.T.Dictionary__Constraints<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const $p_temp__type__path: g_out.T.Dictionary__Constraints.D.temp__type__path<Annotation> = pl.cc($['temp type path'], ($) => map_Type__Selection<Annotation>(
            $,
            /*$v_global__types: */$v_global__types,
        ))
        const $v_temp__type__path: pt.OptionalValue<g_out.T.Dictionary__Constraints.D.temp__type__path<Annotation>> = [true, $p_temp__type__path]
        const $p_selection: g_out.T.Dictionary__Constraints.D.selection<Annotation> = pl.cc($['selection'], ($) => map_Value__Selection<Annotation>(
            $,
        ))
        const $v_selection: pt.OptionalValue<g_out.T.Dictionary__Constraints.D.selection<Annotation>> = [true, $p_selection]
        return {
            'selection': $p_selection,
            'temp type path': $p_temp__type__path,
        }
    }))
}
function map_Global__Type__Selection<Annotation>(
    $: g_in.T.Global__Type__Selection<Annotation>,
): g_out.T.Global__Type__Selection<Annotation> {
    return pl.cc($, ($) => {
        const $p__limport: g_out.T.Global__Type__Selection._limport<Annotation> = pl.cc($['import'], ($) => pl.optional/*4*/(
            $,
            ($): g_out.T.Global__Type__Selection._limport<Annotation> => [true, pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Imports.D<Annotation>> = pl.optional/*3*/(
                    $v_TBD,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Imports.D<Annotation>>>(
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
            })],
            () => [false],
        ))
        const $v__limport: pt.OptionalValue<g_out.T.Global__Type__Selection._limport<Annotation>> = [true, $p__limport]
        const $p__ltype: g_out.T.Global__Type__Selection._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
            const key = $.key
            const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>> = pl.optional/*3*/(
                $v_TBD,
                ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>>>(
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
        const $v__ltype: pt.OptionalValue<g_out.T.Global__Type__Selection._ltype<Annotation>> = [true, $p__ltype]
        return {
            'import': $p__limport,
            'type': $p__ltype,
        }
    })
}
function map_Imports<Annotation>(
    $: g_in.T.Imports<Annotation>,
): g_out.T.Imports<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        return null
    }))
}
function map_Model<Annotation>(
    $: g_in.T.Model<Annotation>,
): g_out.T.Model<Annotation> {
    return pl.cc($, ($) => {
        const $p_type__library: g_out.T.Model.type__library<Annotation> = pl.cc($['type library'], ($) => map_Type__Library<Annotation>(
            $,
        ))
        const $v_type__library: pt.OptionalValue<g_out.T.Model.type__library<Annotation>> = [true, $p_type__library]
        const $p_root: g_out.T.Model.root<Annotation> = pl.cc($['root'], ($) => pl.cc($, ($) => {
            const key = $.key
            const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>> = pl.optional/*3*/(
                $v_type__library,
                ($) => pl.cc($['global types'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>>>(
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
        }))
        const $v_root: pt.OptionalValue<g_out.T.Model.root<Annotation>> = [true, $p_root]
        return {
            'root': $p_root,
            'type library': $p_type__library,
        }
    })
}
function map_Option__Constraints<Annotation>(
    $: g_in.T.Option__Constraints<Annotation>,
): g_out.T.Option__Constraints<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const $p__ltype: g_out.T.Option__Constraints.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Selection<Annotation>(
            $,
            /*$v_global__types: */$v_global__types,
        ))
        const $v__ltype: pt.OptionalValue<g_out.T.Option__Constraints.D._ltype<Annotation>> = [true, $p__ltype]
        const $p_selection: g_out.T.Option__Constraints.D.selection<Annotation> = pl.cc($['selection'], ($) => map_Value__Selection<Annotation>(
            $,
        ))
        const $v_selection: pt.OptionalValue<g_out.T.Option__Constraints.D.selection<Annotation>> = [true, $p_selection]
        const $p_option: g_out.T.Option__Constraints.D.option<Annotation> = pl.cc($['option'], ($) => pl.cc($, ($) => {
            const key = $.key
            const constraint: pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>> = pl.optional/*3*/(
                $v_XXXXA,
                ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>>>(
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
        const $v_option: pt.OptionalValue<g_out.T.Option__Constraints.D.option<Annotation>> = [true, $p_option]
        return {
            'option': $p_option,
            'selection': $p_selection,
            'type': $p__ltype,
        }
    }))
}
function map_Optional__Value__Selection__Tail<Annotation>(
    $: g_in.T.Optional__Value__Selection__Tail<Annotation>,
    $v__ltype: pt.OptionalValue<g_out.T.Type<Annotation>>,
): g_out.T.Optional__Value__Selection__Tail<Annotation> {
    return pl.optional/*4*/(
        $,
        ($): g_out.T.Optional__Value__Selection__Tail<Annotation> => [true, map_Value__Selection__Tail<Annotation>(
            $,
        )],
        () => [false],
    )
}
function map_Parameters<Annotation>(
    $: g_in.T.Parameters<Annotation>,
): g_out.T.Parameters<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const $p__ltype: g_out.T.Parameters.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Parameters.D._ltype<Annotation> => {
            switch ($[0]) {
                case 'resolved value': return pl.ss($, ($) => ['resolved value', pl.cc($, ($) => {
                    const $p__ltype: g_out.T.Parameters.D._ltype.resolved__value._ltype<Annotation> = pl.cc($['type'], ($) => map_Global__Type__Selection<Annotation>(
                        $,
                    ))
                    const $v__ltype: pt.OptionalValue<g_out.T.Parameters.D._ltype.resolved__value._ltype<Annotation>> = [true, $p__ltype]
                    const $p_optional: g_out.T.Parameters.D._ltype.resolved__value.optional<Annotation> = pl.cc($['optional'], ($) => pl.cc($, ($): g_out.T.Parameters.D._ltype.resolved__value.optional<Annotation> => {
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
                    const $v_optional: pt.OptionalValue<g_out.T.Parameters.D._ltype.resolved__value.optional<Annotation>> = [true, $p_optional]
                    return {
                        'optional': $p_optional,
                        'type': $p__ltype,
                    }
                })])
                case 'siblings': return pl.ss($, ($) => ['siblings', pl.cc($, ($) => {
                    const $p__ltype: g_out.T.Parameters.D._ltype.siblings._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Selection<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                    ))
                    const $v__ltype: pt.OptionalValue<g_out.T.Parameters.D._ltype.siblings._ltype<Annotation>> = [true, $p__ltype]
                    const $p_kind: g_out.T.Parameters.D._ltype.siblings.kind<Annotation> = pl.cc($['kind'], ($) => pl.cc($, ($): g_out.T.Parameters.D._ltype.siblings.kind<Annotation> => {
                        switch ($[0]) {
                            case 'cyclic': return pl.ss($, ($) => ['cyclic', pl.cc($, ($) => {
                                return null
                            })])
                            case 'non cyclic': return pl.ss($, ($) => ['non cyclic', pl.cc($, ($) => {
                                return null
                            })])
                            default: return pl.au($[0])
                        }
                    }))
                    const $v_kind: pt.OptionalValue<g_out.T.Parameters.D._ltype.siblings.kind<Annotation>> = [true, $p_kind]
                    return {
                        'kind': $p_kind,
                        'type': $p__ltype,
                    }
                })])
                default: return pl.au($[0])
            }
        }))
        const $v__ltype: pt.OptionalValue<g_out.T.Parameters.D._ltype<Annotation>> = [true, $p__ltype]
        return {
            'type': $p__ltype,
        }
    }))
}
function map_Reference__Initializer<Annotation>(
    $: g_in.T.Reference__Initializer<Annotation>,
): g_out.T.Reference__Initializer<Annotation> {
    return pl.cc($, ($) => {
        return null
    })
}
function map_Terminal<Annotation>(
    $: g_in.T.Terminal<Annotation>,
    $v_terminal__types: pt.OptionalValue<g_out.T.Terminal__Types<Annotation>>,
): g_out.T.Terminal<Annotation> {
    return pl.cc($, ($) => {
        const $p__ltype: g_out.T.Terminal._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
            const key = $.key
            const constraint: pt.OptionalValue<g_out.T.Terminal__Types.D<Annotation>> = pl.optional/*3*/(
                $v_terminal__types,
                ($) => $.__getEntry<pt.OptionalValue<g_out.T.Terminal__Types.D<Annotation>>>(
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
        const $v__ltype: pt.OptionalValue<g_out.T.Terminal._ltype<Annotation>> = [true, $p__ltype]
        return {
            'type': $p__ltype,
        }
    })
}
function map_Terminal__Initializer<Annotation>(
    $: g_in.T.Terminal__Initializer<Annotation>,
): g_out.T.Terminal__Initializer<Annotation> {
    return pl.cc($, ($) => {
        const $p_constrained: g_out.T.Terminal__Initializer.constrained<Annotation> = pl.cc($['constrained'], ($) => pl.cc($, ($): g_out.T.Terminal__Initializer.constrained<Annotation> => {
            switch ($[0]) {
                case 'yes': return pl.ss($, ($) => ['yes', map_Reference__Initializer<Annotation>(
                    $,
                )])
                default: return pl.au($[0])
            }
        }))
        const $v_constrained: pt.OptionalValue<g_out.T.Terminal__Initializer.constrained<Annotation>> = [true, $p_constrained]
        return {
            'constrained': $p_constrained,
        }
    })
}
function map_Terminal__Types<Annotation>(
    $: g_in.T.Terminal__Types<Annotation>,
): g_out.T.Terminal__Types<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        return null
    }))
}
function map_Type<Annotation>(
    $: g_in.T.Type<Annotation>,
    $v_all__global__types: pt.Lookup<pt.ComputedValue<g_out.T.Type__Library.global__types.D<Annotation>>>,
    $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
    $v_noncyclic__global__types: pt.Lookup<g_out.T.Type__Library.global__types.D<Annotation>>,
    $v_terminal__types: pt.OptionalValue<g_out.T.Terminal__Types<Annotation>>,
): g_out.T.Type<Annotation> {
    return pl.cc($, ($): g_out.T.Type<Annotation> => {
        switch ($[0]) {
            case 'array': return pl.ss($, ($) => ['array', pl.cc($, ($) => {
                const $p__ltype: g_out.T.Type.array._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                ))
                const $v__ltype: pt.OptionalValue<g_out.T.Type.array._ltype<Annotation>> = [true, $p__ltype]
                return {
                    'type': $p__ltype,
                }
            })])
            case 'component': return pl.ss($, ($) => ['component', pl.cc($, ($) => {
                const $p_context: g_out.T.Type.component.context<Annotation> = pl.cc($['context'], ($) => pl.cc($, ($): g_out.T.Type.component.context<Annotation> => {
                    switch ($[0]) {
                        case 'import': return pl.ss($, ($) => ['import', pl.cc($, ($) => {
                            const $p_library: g_out.T.Type.component.context._limport.library<Annotation> = pl.cc($['library'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Imports.D<Annotation>> = pl.optional/*3*/(
                                    $v_imports,
                                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Imports.D<Annotation>>>(
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
                            const $v_library: pt.OptionalValue<g_out.T.Type.component.context._limport.library<Annotation>> = [true, $p_library]
                            return {
                                'library': $p_library,
                            }
                        })])
                        case 'local': return pl.ss($, ($) => ['local', pl.cc($, ($) => {
                            return null
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_context: pt.OptionalValue<g_out.T.Type.component.context<Annotation>> = [true, $p_context]
                const $p__ltype: g_out.T.Type.component._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>> = pl.optional/*3*/(
                        $v_context,
                        ($) => pl.optional/*2*/(
                            $.result,
                            ($) => pl.cc($['global types'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type__Library.global__types.D<Annotation>>>(
                                key,
                                ($) => [true, $],
                                () => {
                                    $se.error("no such entry")
                                    return [false]
                                },
                            )),
                            () => [false],
                        ),
                        () => [false],
                    )
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                }))
                const $v__ltype: pt.OptionalValue<g_out.T.Type.component._ltype<Annotation>> = [true, $p__ltype]
                const $p_arguments: g_out.T.Type.component.arguments<Annotation> = pl.cc($['arguments'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $v_parameter: g_out.T.Parameters.D<Annotation> = pl.optional/*3*/(
                        $v__ltype,
                        ($) => pl.optional/*1*/(
                            $.constraint,
                            ($) => pl.cc($['parameters'], ($) => [true, $]),
                            () => [false],
                        ),
                        () => [false],
                    )
                    return {
                        'annotation': $.annotation,
                        'constraints': {
                            'parameter': $v_parameter,
                        },
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            const $p__ltype: g_out.T.Type.component.arguments.D.content._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Type.component.arguments.D.content._ltype<Annotation> => {
                                switch ($[0]) {
                                    case 'containing dictionary': return pl.ss($, ($) => ['containing dictionary', map_Containing__Dictionary__Selection<Annotation>(
                                        $,
                                    )])
                                    case 'resolved value': return pl.ss($, ($) => ['resolved value', map_Value__Selection<Annotation>(
                                        $,
                                    )])
                                    default: return pl.au($[0])
                                }
                            }))
                            const $v__ltype: pt.OptionalValue<g_out.T.Type.component.arguments.D.content._ltype<Annotation>> = [true, $p__ltype]
                            return {
                                'type': $p__ltype,
                            }
                        })),
                    }
                })))
                const $v_arguments: pt.OptionalValue<g_out.T.Type.component.arguments<Annotation>> = [true, $p_arguments]
                return {
                    'arguments': $p_arguments,
                    'context': $p_context,
                    'type': $p__ltype,
                }
            })])
            case 'dictionary': return pl.ss($, ($) => ['dictionary', pl.cc($, ($) => {
                const $p_key: g_out.T.Type.dictionary.key<Annotation> = pl.cc($['key'], ($) => map_Terminal<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_terminal__types: */pl.optional/*3*/(
                        $v_terminal__types,
                        ($) => [true, $],
                        () => [false],
                    ),
                ))
                const $v_key: pt.OptionalValue<g_out.T.Type.dictionary.key<Annotation>> = [true, $p_key]
                const $p_constraints: g_out.T.Type.dictionary.constraints<Annotation> = pl.cc($['constraints'], ($) => map_Dictionary__Constraints<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                ))
                const $v_constraints: pt.OptionalValue<g_out.T.Type.dictionary.constraints<Annotation>> = [true, $p_constraints]
                const $p_variables: g_out.T.Type.dictionary.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                    $,
                ))
                const $v_variables: pt.OptionalValue<g_out.T.Type.dictionary.variables<Annotation>> = [true, $p_variables]
                const $p__ltype: g_out.T.Type.dictionary._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                ))
                const $v__ltype: pt.OptionalValue<g_out.T.Type.dictionary._ltype<Annotation>> = [true, $p__ltype]
                const $p_autofill: g_out.T.Type.dictionary.autofill<Annotation> = pl.cc($['autofill'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p_source: g_out.T.Type.dictionary.autofill.A.source<Annotation> = pl.cc($['source'], ($) => map_Value__Selection<Annotation>(
                        $,
                    ))
                    const $v_source: pt.OptionalValue<g_out.T.Type.dictionary.autofill.A.source<Annotation>> = [true, $p_source]
                    const $p_initializer: g_out.T.Type.dictionary.autofill.A.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Type__Initializer<Annotation>(
                        $,
                    ))
                    const $v_initializer: pt.OptionalValue<g_out.T.Type.dictionary.autofill.A.initializer<Annotation>> = [true, $p_initializer]
                    return {
                        'initializer': $p_initializer,
                        'source': $p_source,
                    }
                })))
                const $v_autofill: pt.OptionalValue<g_out.T.Type.dictionary.autofill<Annotation>> = [true, $p_autofill]
                return {
                    'autofill': $p_autofill,
                    'constraints': $p_constraints,
                    'key': $p_key,
                    'type': $p__ltype,
                    'variables': $p_variables,
                }
            })])
            case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                const $p_properties: g_out.T.Type.group.properties<Annotation> = pl.cc($['properties'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p_variables: g_out.T.Type.group.properties.D.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                        $,
                    ))
                    const $v_variables: pt.OptionalValue<g_out.T.Type.group.properties.D.variables<Annotation>> = [true, $p_variables]
                    const $p__ltype: g_out.T.Type.group.properties.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                    ))
                    const $v__ltype: pt.OptionalValue<g_out.T.Type.group.properties.D._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'type': $p__ltype,
                        'variables': $p_variables,
                    }
                })))
                const $v_properties: pt.OptionalValue<g_out.T.Type.group.properties<Annotation>> = [true, $p_properties]
                return {
                    'properties': $p_properties,
                }
            })])
            case 'optional': return pl.ss($, ($) => ['optional', pl.cc($, ($) => {
                const $p__ltype: g_out.T.Type.optional._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                    $,
                ))
                const $v__ltype: pt.OptionalValue<g_out.T.Type.optional._ltype<Annotation>> = [true, $p__ltype]
                const $p_result: g_out.T.Type.optional.result<Annotation> = pl.cc($['result'], ($) => pl.optional/*4*/(
                    $,
                    ($): g_out.T.Type.optional.result<Annotation> => [true, pl.cc($, ($) => {
                        const $p__ltype: g_out.T.Type.optional.result.O._ltype<Annotation> = pl.cc($['type'], ($) => map_Global__Type__Selection<Annotation>(
                            $,
                            /*$v_global__types: */$v_global__types,
                        ))
                        const $v__ltype: pt.OptionalValue<g_out.T.Type.optional.result.O._ltype<Annotation>> = [true, $p__ltype]
                        const $p__lset: g_out.T.Type.optional.result.O._lset<Annotation> = pl.cc($['set'], ($) => map_Optional__Value__Selection__Tail<Annotation>(
                            $,
                        ))
                        const $v__lset: pt.OptionalValue<g_out.T.Type.optional.result.O._lset<Annotation>> = [true, $p__lset]
                        const $p_not__set: g_out.T.Type.optional.result.O.not__set<Annotation> = pl.cc($['not set'], ($) => map_Value__Selection<Annotation>(
                            $,
                        ))
                        const $v_not__set: pt.OptionalValue<g_out.T.Type.optional.result.O.not__set<Annotation>> = [true, $p_not__set]
                        return {
                            'not set': $p_not__set,
                            'set': $p__lset,
                            'type': $p__ltype,
                        }
                    })],
                    () => [false],
                ))
                const $v_result: pt.OptionalValue<g_out.T.Type.optional.result<Annotation>> = [true, $p_result]
                return {
                    'result': $p_result,
                    'type': $p__ltype,
                }
            })])
            case 'tagged union': return pl.ss($, ($) => ['tagged union', pl.cc($, ($) => {
                const $p_options: g_out.T.Type.tagged__union.options<Annotation> = pl.cc($['options'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p_constraints: g_out.T.Type.tagged__union.options.D.constraints<Annotation> = pl.cc($['constraints'], ($) => map_Option__Constraints<Annotation>(
                        $,
                    ))
                    const $v_constraints: pt.OptionalValue<g_out.T.Type.tagged__union.options.D.constraints<Annotation>> = [true, $p_constraints]
                    const $p_variables: g_out.T.Type.tagged__union.options.D.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                        $,
                    ))
                    const $v_variables: pt.OptionalValue<g_out.T.Type.tagged__union.options.D.variables<Annotation>> = [true, $p_variables]
                    const $p__ltype: g_out.T.Type.tagged__union.options.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                        $,
                        /*$v_global__types: */$v_global__types,
                    ))
                    const $v__ltype: pt.OptionalValue<g_out.T.Type.tagged__union.options.D._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'constraints': $p_constraints,
                        'type': $p__ltype,
                        'variables': $p_variables,
                    }
                })))
                const $v_options: pt.OptionalValue<g_out.T.Type.tagged__union.options<Annotation>> = [true, $p_options]
                const $p__ldefault: g_out.T.Type.tagged__union._ldefault<Annotation> = pl.cc($['default'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>> = pl.optional/*3*/(
                        $v_options,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>>>(
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
                const $v__ldefault: pt.OptionalValue<g_out.T.Type.tagged__union._ldefault<Annotation>> = [true, $p__ldefault]
                const $p_result: g_out.T.Type.tagged__union.result<Annotation> = pl.cc($['result'], ($) => pl.optional/*4*/(
                    $,
                    ($): g_out.T.Type.tagged__union.result<Annotation> => [true, pl.cc($, ($) => {
                        const $p__ltype: g_out.T.Type.tagged__union.result.O._ltype<Annotation> = pl.cc($['type'], ($) => map_Global__Type__Selection<Annotation>(
                            $,
                            /*$v_global__types: */$v_global__types,
                        ))
                        const $v__ltype: pt.OptionalValue<g_out.T.Type.tagged__union.result.O._ltype<Annotation>> = [true, $p__ltype]
                        const $p_options: g_out.T.Type.tagged__union.result.O.options<Annotation> = pl.cc($['options'], ($) => $.map(($) => map_Optional__Value__Selection__Tail<Annotation>(
                            $,
                        )))
                        const $v_options: pt.OptionalValue<g_out.T.Type.tagged__union.result.O.options<Annotation>> = [true, $p_options]
                        return {
                            'options': $p_options,
                            'type': $p__ltype,
                        }
                    })],
                    () => [false],
                ))
                const $v_result: pt.OptionalValue<g_out.T.Type.tagged__union.result<Annotation>> = [true, $p_result]
                return {
                    'default': $p__ldefault,
                    'options': $p_options,
                    'result': $p_result,
                }
            })])
            case 'terminal': return pl.ss($, ($) => ['terminal', pl.cc($, ($) => {
                const $p_terminal: g_out.T.Type.terminal.terminal<Annotation> = pl.cc($['terminal'], ($) => map_Terminal<Annotation>(
                    $,
                    /*$v_global__types: */$v_global__types,
                    /*$v_terminal__types: */pl.optional/*3*/(
                        $v_terminal__types,
                        ($) => [true, $],
                        () => [false],
                    ),
                ))
                const $v_terminal: pt.OptionalValue<g_out.T.Type.terminal.terminal<Annotation>> = [true, $p_terminal]
                const $p_constrained: g_out.T.Type.terminal.constrained<Annotation> = pl.cc($['constrained'], ($) => pl.cc($, ($): g_out.T.Type.terminal.constrained<Annotation> => {
                    switch ($[0]) {
                        case 'no': return pl.ss($, ($) => ['no', pl.cc($, ($) => {
                            return null
                        })])
                        case 'yes': return pl.ss($, ($) => ['yes', pl.cc($, ($) => {
                            const $p_temp__type__path: g_out.T.Type.terminal.constrained.yes.temp__type__path<Annotation> = pl.cc($['temp type path'], ($) => map_Type__Selection<Annotation>(
                                $,
                                /*$v_global__types: */$v_global__types,
                            ))
                            const $v_temp__type__path: pt.OptionalValue<g_out.T.Type.terminal.constrained.yes.temp__type__path<Annotation>> = [true, $p_temp__type__path]
                            const $p_referencee__type: g_out.T.Type.terminal.constrained.yes.referencee__type<Annotation> = pl.cc($['referencee type'], ($) => pl.cc($, ($): g_out.T.Type.terminal.constrained.yes.referencee__type<Annotation> => {
                                switch ($[0]) {
                                    case 'resolved value': return pl.ss($, ($) => ['resolved value', pl.cc($, ($) => {
                                        const $p_selection: g_out.T.Type.terminal.constrained.yes.referencee__type.resolved__value.selection<Annotation> = pl.cc($['selection'], ($) => map_Value__Selection<Annotation>(
                                            $,
                                        ))
                                        const $v_selection: pt.OptionalValue<g_out.T.Type.terminal.constrained.yes.referencee__type.resolved__value.selection<Annotation>> = [true, $p_selection]
                                        return {
                                            'selection': $p_selection,
                                        }
                                    })])
                                    case 'sibling': return pl.ss($, ($) => ['sibling', pl.cc($, ($) => {
                                        const $p_selection: g_out.T.Type.terminal.constrained.yes.referencee__type.sibling.selection<Annotation> = pl.cc($['selection'], ($) => map_Containing__Dictionary__Selection<Annotation>(
                                            $,
                                        ))
                                        const $v_selection: pt.OptionalValue<g_out.T.Type.terminal.constrained.yes.referencee__type.sibling.selection<Annotation>> = [true, $p_selection]
                                        return {
                                            'selection': $p_selection,
                                        }
                                    })])
                                    default: return pl.au($[0])
                                }
                            }))
                            const $v_referencee__type: pt.OptionalValue<g_out.T.Type.terminal.constrained.yes.referencee__type<Annotation>> = [true, $p_referencee__type]
                            return {
                                'referencee type': $p_referencee__type,
                                'temp type path': $p_temp__type__path,
                            }
                        })])
                        default: return pl.au($[0])
                    }
                }))
                const $v_constrained: pt.OptionalValue<g_out.T.Type.terminal.constrained<Annotation>> = [true, $p_constrained]
                return {
                    'constrained': $p_constrained,
                    'terminal': $p_terminal,
                }
            })])
            default: return pl.au($[0])
        }
    })
}
function map_Type__Initializer<Annotation>(
    $: g_in.T.Type__Initializer<Annotation>,
): g_out.T.Type__Initializer<Annotation> {
    return pl.cc($, ($): g_out.T.Type__Initializer<Annotation> => {
        switch ($[0]) {
            case 'component': return pl.ss($, ($) => ['component', map_Type__Initializer<Annotation>(
                $,
            )])
            case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                const $p_properties: g_out.T.Type__Initializer.group.properties<Annotation> = pl.cc($['properties'], ($) => $.map(($) => pl.cc($, ($) => {
                    const $p__ltype: g_out.T.Type__Initializer.group.properties.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Initializer<Annotation>(
                        $,
                    ))
                    const $v__ltype: pt.OptionalValue<g_out.T.Type__Initializer.group.properties.D._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'type': $p__ltype,
                    }
                })))
                const $v_properties: pt.OptionalValue<g_out.T.Type__Initializer.group.properties<Annotation>> = [true, $p_properties]
                return {
                    'properties': $p_properties,
                }
            })])
            case 'optional': return pl.ss($, ($) => ['optional', pl.cc($, ($) => {
                const $p__ltype: g_out.T.Type__Initializer.optional._ltype<Annotation> = pl.cc($['type'], ($) => pl.optional/*4*/(
                    $,
                    ($): g_out.T.Type__Initializer.optional._ltype<Annotation> => [true, map_Type__Initializer<Annotation>(
                        $,
                    )],
                    () => [false],
                ))
                const $v__ltype: pt.OptionalValue<g_out.T.Type__Initializer.optional._ltype<Annotation>> = [true, $p__ltype]
                return {
                    'type': $p__ltype,
                }
            })])
            case 'tagged union': return pl.ss($, ($) => ['tagged union', pl.cc($, ($) => {
                const $p_option: g_out.T.Type__Initializer.tagged__union.option<Annotation> = pl.cc($['option'], ($) => pl.cc($, ($) => {
                    const key = $.key
                    const constraint: pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>> = pl.optional/*3*/(
                        $v_TBD,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>>>(
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
                const $v_option: pt.OptionalValue<g_out.T.Type__Initializer.tagged__union.option<Annotation>> = [true, $p_option]
                const $p_data: g_out.T.Type__Initializer.tagged__union.data<Annotation> = pl.cc($['data'], ($) => map_Type__Initializer<Annotation>(
                    $,
                ))
                const $v_data: pt.OptionalValue<g_out.T.Type__Initializer.tagged__union.data<Annotation>> = [true, $p_data]
                return {
                    'data': $p_data,
                    'option': $p_option,
                }
            })])
            case 'terminal': return pl.ss($, ($) => ['terminal', map_Terminal__Initializer<Annotation>(
                $,
            )])
            default: return pl.au($[0])
        }
    })
}
function map_Type__Library<Annotation>(
    $: g_in.T.Type__Library<Annotation>,
): g_out.T.Type__Library<Annotation> {
    return pl.cc($, ($) => {
        const $p_imports: g_out.T.Type__Library.imports<Annotation> = pl.cc($['imports'], ($) => map_Imports<Annotation>(
            $,
        ))
        const $v_imports: pt.OptionalValue<g_out.T.Type__Library.imports<Annotation>> = [true, $p_imports]
        const $p_terminal__types: g_out.T.Type__Library.terminal__types<Annotation> = pl.cc($['terminal types'], ($) => map_Terminal__Types<Annotation>(
            $,
        ))
        const $v_terminal__types: pt.OptionalValue<g_out.T.Type__Library.terminal__types<Annotation>> = [true, $p_terminal__types]
        const $p_global__types: g_out.T.Type__Library.global__types<Annotation> = pl.cc($['global types'], ($) => $.map(($) => pl.cc($, ($) => {
            const $p_parameters: g_out.T.Type__Library.global__types.D.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Parameters<Annotation>(
                $,
            ))
            const $v_parameters: pt.OptionalValue<g_out.T.Type__Library.global__types.D.parameters<Annotation>> = [true, $p_parameters]
            const $p_variables: g_out.T.Type__Library.global__types.D.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                $,
            ))
            const $v_variables: pt.OptionalValue<g_out.T.Type__Library.global__types.D.variables<Annotation>> = [true, $p_variables]
            const $p__ltype: g_out.T.Type__Library.global__types.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                $,
                /*$v_global__types: */$v_global__types,
            ))
            const $v__ltype: pt.OptionalValue<g_out.T.Type__Library.global__types.D._ltype<Annotation>> = [true, $p__ltype]
            const $p_result: g_out.T.Type__Library.global__types.D.result<Annotation> = pl.cc($['result'], ($) => pl.optional/*4*/(
                $,
                ($): g_out.T.Type__Library.global__types.D.result<Annotation> => [true, pl.cc($, ($) => {
                    const $p_temp__type: g_out.T.Type__Library.global__types.D.result.O.temp__type<Annotation> = pl.cc($['temp type'], ($) => map_Global__Type__Selection<Annotation>(
                        $,
                    ))
                    const $v_temp__type: pt.OptionalValue<g_out.T.Type__Library.global__types.D.result.O.temp__type<Annotation>> = [true, $p_temp__type]
                    const $p_selection: g_out.T.Type__Library.global__types.D.result.O.selection<Annotation> = pl.cc($['selection'], ($) => map_Optional__Value__Selection__Tail<Annotation>(
                        $,
                    ))
                    const $v_selection: pt.OptionalValue<g_out.T.Type__Library.global__types.D.result.O.selection<Annotation>> = [true, $p_selection]
                    return {
                        'selection': $p_selection,
                        'temp type': $p_temp__type,
                    }
                })],
                () => [false],
            ))
            const $v_result: pt.OptionalValue<g_out.T.Type__Library.global__types.D.result<Annotation>> = [true, $p_result]
            return {
                'parameters': $p_parameters,
                'result': $p_result,
                'type': $p__ltype,
                'variables': $p_variables,
            }
        })))
        const $v_global__types: pt.OptionalValue<g_out.T.Type__Library.global__types<Annotation>> = [true, $p_global__types]
        return {
            'global types': $p_global__types,
            'imports': $p_imports,
            'terminal types': $p_terminal__types,
        }
    })
}
function map_Type__Selection<Annotation>(
    $: g_in.T.Type__Selection<Annotation>,
    $v_global__types: pt.Lookup<pt.ComputedValue<g_out.T.Type__Library.global__types.D<Annotation>>>,
): g_out.T.Type__Selection<Annotation> {
    return pl.cc($, ($) => {
        const $p_global__type: g_out.T.Type__Selection.global__type<Annotation> = pl.cc($['global type'], ($) => map_Global__Type__Selection<Annotation>(
            $,
        ))
        const $v_global__type: pt.OptionalValue<g_out.T.Type__Selection.global__type<Annotation>> = [true, $p_global__type]
        const $p_tail: g_out.T.Type__Selection.tail<Annotation> = pl.cc($['tail'], ($) => $.map(($) => map_Type__Selection__Tail<Annotation>(
            $,
        )))
        const $v_tail: pt.OptionalValue<g_out.T.Type__Selection.tail<Annotation>> = [true, $p_tail]
        return {
            'global type': $p_global__type,
            'tail': $p_tail,
        }
    })
}
function map_Type__Selection__Tail<Annotation>(
    $: g_in.T.Type__Selection__Tail<Annotation>,
    $v_context: pt.OptionalValue<g_out.T.Type<Annotation>>,
): g_out.T.Type__Selection__Tail<Annotation> {
    return pl.cc($, ($) => {
        const $p_step__type: g_out.T.Type__Selection__Tail.step__type<Annotation> = pl.cc($['step type'], ($) => pl.cc($, ($): g_out.T.Type__Selection__Tail.step__type<Annotation> => {
            switch ($[0]) {
                case 'array': return pl.ss($, ($) => ['array', pl.cc($, ($) => {
                    const $v_out: g_out.T.Type.array<Annotation> = pl.cc($, ($) => {
                        const x: pt.OptionalValue<g_out.T.Type<Annotation>> = pl.optional/*3*/(
                            $v__ltype,
                            ($) => [true, $],
                            () => [false],
                        )
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
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            return null
                        })),
                    }
                })])
                case 'dictionary': return pl.ss($, ($) => ['dictionary', pl.cc($, ($) => {
                    const $v_out: g_out.T.Type.dictionary<Annotation> = pl.cc($, ($) => {
                        const x: pt.OptionalValue<g_out.T.Type<Annotation>> = pl.optional/*3*/(
                            $v__ltype,
                            ($) => [true, $],
                            () => [false],
                        )
                        return pl.optional(
                            x,
                            ($) => {
                                if ($[0] === 'dictionary') {
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
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            return null
                        })),
                    }
                })])
                case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                    const $v_out: g_out.T.Type.group<Annotation> = pl.cc($, ($) => {
                        const x: pt.OptionalValue<g_out.T.Type<Annotation>> = pl.optional/*3*/(
                            $v__ltype,
                            ($) => [true, $],
                            () => [false],
                        )
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
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            const $p_property: g_out.T.Type__Selection__Tail.step__type.group._ltype.property<Annotation> = pl.cc($['property'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Type.group.properties.D<Annotation>> = pl.optional/*3*/(
                                    $v_out,
                                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type.group.properties.D<Annotation>>>(
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
                            const $v_property: pt.OptionalValue<g_out.T.Type__Selection__Tail.step__type.group._ltype.property<Annotation>> = [true, $p_property]
                            return {
                                'property': $p_property,
                            }
                        })),
                    }
                })])
                case 'optional': return pl.ss($, ($) => ['optional', pl.cc($, ($) => {
                    const $v_out: g_out.T.Type.optional<Annotation> = pl.cc($, ($) => {
                        const x: pt.OptionalValue<g_out.T.Type<Annotation>> = pl.optional/*3*/(
                            $v__ltype,
                            ($) => [true, $],
                            () => [false],
                        )
                        return pl.optional(
                            x,
                            ($) => {
                                if ($[0] === 'optional') {
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
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            return null
                        })),
                    }
                })])
                case 'tagged union': return pl.ss($, ($) => ['tagged union', pl.cc($, ($) => {
                    const $v_out: g_out.T.Type.tagged__union<Annotation> = pl.cc($, ($) => {
                        const x: pt.OptionalValue<g_out.T.Type<Annotation>> = pl.optional/*3*/(
                            $v_TBD,
                            ($) => [true, $],
                            () => [false],
                        )
                        return pl.optional(
                            x,
                            ($) => {
                                if ($[0] === 'tagged union') {
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
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            const $p_option: g_out.T.Type__Selection__Tail.step__type.tagged__union._ltype.option<Annotation> = pl.cc($['option'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>> = pl.optional/*3*/(
                                    $v_out,
                                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type.tagged__union.options.D<Annotation>>>(
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
                            const $v_option: pt.OptionalValue<g_out.T.Type__Selection__Tail.step__type.tagged__union._ltype.option<Annotation>> = [true, $p_option]
                            return {
                                'option': $p_option,
                            }
                        })),
                    }
                })])
                default: return pl.au($[0])
            }
        }))
        const $v_step__type: pt.OptionalValue<g_out.T.Type__Selection__Tail.step__type<Annotation>> = [true, $p_step__type]
        return {
            'step type': $p_step__type,
        }
    })
}
function map_Value__Selection<Annotation>(
    $: g_in.T.Value__Selection<Annotation>,
): g_out.T.Value__Selection<Annotation> {
    return pl.cc($, ($) => {
        const $p_start: g_out.T.Value__Selection.start<Annotation> = pl.cc($['start'], ($) => pl.cc($, ($) => {
            const key = $.key
            const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = pl.optional/*3*/(
                $v_TBD,
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
        const $v_start: pt.OptionalValue<g_out.T.Value__Selection.start<Annotation>> = [true, $p_start]
        const $p_tail: g_out.T.Value__Selection.tail<Annotation> = pl.cc($['tail'], ($) => pl.optional/*4*/(
            $,
            ($): g_out.T.Value__Selection.tail<Annotation> => [true, map_Value__Selection__Tail<Annotation>(
                $,
            )],
            () => [false],
        ))
        const $v_tail: pt.OptionalValue<g_out.T.Value__Selection.tail<Annotation>> = [true, $p_tail]
        return {
            'start': $p_start,
            'tail': $p_tail,
        }
    })
}
function map_Value__Selection__Tail<Annotation>(
    $: g_in.T.Value__Selection__Tail<Annotation>,
    $v__ltype: pt.OptionalValue<g_out.T.Type<Annotation>>,
): g_out.T.Value__Selection__Tail<Annotation> {
    return pl.cc($, ($) => {
        const $p_step__type: g_out.T.Value__Selection__Tail.step__type<Annotation> = pl.cc($['step type'], ($) => pl.cc($, ($): g_out.T.Value__Selection__Tail.step__type<Annotation> => {
            switch ($[0]) {
                case 'component': return pl.ss($, ($) => ['component', pl.cc($, ($) => {
                    const $v_component: g_out.T.Type.component<Annotation> = pl.cc($, ($) => {
                        const x: pt.OptionalValue<g_out.T.Type<Annotation>> = pl.optional/*3*/(
                            $v__ltype,
                            ($) => [true, $],
                            () => [false],
                        )
                        return pl.optional(
                            x,
                            ($) => {
                                if ($[0] === 'component') {
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
                            'component': $v_component,
                        },
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            return null
                        })),
                    }
                })])
                case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                    const $v_group: g_out.T.Type.group<Annotation> = pl.cc($, ($) => {
                        const x: pt.OptionalValue<g_out.T.Type<Annotation>> = pl.optional/*3*/(
                            $v__ltype,
                            ($) => [true, $],
                            () => [false],
                        )
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
                            'group': $v_group,
                        },
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            const $p_property: g_out.T.Value__Selection__Tail.step__type.group._ltype.property<Annotation> = pl.cc($['property'], ($) => pl.cc($, ($) => {
                                const key = $.key
                                const constraint: pt.OptionalValue<g_out.T.Type.group.properties.D<Annotation>> = pl.optional/*3*/(
                                    $v_group,
                                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type.group.properties.D<Annotation>>>(
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
                            const $v_property: pt.OptionalValue<g_out.T.Value__Selection__Tail.step__type.group._ltype.property<Annotation>> = [true, $p_property]
                            return {
                                'property': $p_property,
                            }
                        })),
                    }
                })])
                case 'reference': return pl.ss($, ($) => ['reference', pl.cc($, ($) => {
                    const $v_reference: g_out.T.Type.terminal<Annotation> = pl.cc($, ($) => {
                        const x: pt.OptionalValue<g_out.T.Type<Annotation>> = pl.optional/*3*/(
                            $v__ltype,
                            ($) => [true, $],
                            () => [false],
                        )
                        return pl.optional(
                            x,
                            ($) => {
                                if ($[0] === 'terminal') {
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
                            'reference': $v_reference,
                        },
                        'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                            return null
                        })),
                    }
                })])
                case 'result': return pl.ss($, ($) => ['result', pl.cc($, ($) => {
                    return null
                })])
                default: return pl.au($[0])
            }
        }))
        const $v_step__type: pt.OptionalValue<g_out.T.Value__Selection__Tail.step__type<Annotation>> = [true, $p_step__type]
        const $p_tail: g_out.T.Value__Selection__Tail.tail<Annotation> = pl.cc($['tail'], ($) => pl.optional/*4*/(
            $,
            ($): g_out.T.Value__Selection__Tail.tail<Annotation> => [true, map_Value__Selection__Tail<Annotation>(
                $,
                /*$v__ltype: */pl.optional/*3*/(
                    $v_step__type,
                    ($) => pl.optional/*2*/(
                        $.result,
                        ($) => [true, $],
                        () => [false],
                    ),
                    () => [false],
                ),
            )],
            () => [false],
        ))
        const $v_tail: pt.OptionalValue<g_out.T.Value__Selection__Tail.tail<Annotation>> = [true, $p_tail]
        return {
            'step type': $p_step__type,
            'tail': $p_tail,
        }
    })
}
function map_Variables<Annotation>(
    $: g_in.T.Variables<Annotation>,
    $v_dictionary__constraints: pt.OptionalValue<pt.OptionalValue<g_out.T.Dictionary__Constraints<Annotation>>>,
    $v_option__constraints: pt.OptionalValue<pt.OptionalValue<g_out.T.Option__Constraints<Annotation>>>,
    $v_parameters: pt.OptionalValue<pt.OptionalValue<g_out.T.Parameters<Annotation>>>,
    $v_parent__variables: pt.OptionalValue<pt.OptionalValue<g_out.T.Variables<Annotation>>>,
    $v_siblings: pt.Lookup<g_out.T.Type.group.properties.D<Annotation>>,
): g_out.T.Variables<Annotation> {
    return $.map(($) => pl.cc($, ($): g_out.T.Variables.D<Annotation> => {
        switch ($[0]) {
            case 'dictionary constraint': return pl.ss($, ($) => ['dictionary constraint', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Dictionary__Constraints.D<Annotation>> = pl.optional/*3*/(
                    $v_dictionary__constraints,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Dictionary__Constraints.D<Annotation>>>(
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
            })])
            case 'option constraint': return pl.ss($, ($) => ['option constraint', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Option__Constraints.D<Annotation>> = pl.optional/*3*/(
                    $v_option__constraints,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Option__Constraints.D<Annotation>>>(
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
            })])
            case 'parameter': return pl.ss($, ($) => ['parameter', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Parameters.D<Annotation>> = pl.optional/*3*/(
                    $v_parameters,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Parameters.D<Annotation>>>(
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
            })])
            case 'parent variable': return pl.ss($, ($) => ['parent variable', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = pl.optional/*3*/(
                    $v_parent__variables,
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
            })])
            case 'sibling': return pl.ss($, ($) => ['sibling', pl.cc($, ($) => {
                const key = $.key
                const constraint: pt.OptionalValue<g_out.T.Type.group.properties.D<Annotation>> = FIXME
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