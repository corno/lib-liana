import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from "../../lowlevel_implementation"
import * as g_out from "../../lowlevel_implementation_possiblyresolved"
import * as g_out_typesystem from "../../lowlevel_typesystem_possiblyresolved"

import { A } from "../api.generated"

function tempoptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => pt.OptionalValue<RT>,
    b: () => pt.OptionalValue<RT>,
): pt.OptionalValue<RT> {
    return tempoptional($, a, b)
}
export const $$: A.resolve = ($d, $se) => {
    
    function map_Any__Value__Selection<Annotation>(
        $: g_in.T.Any__Value__Selection<Annotation>,
        $v__ltype: pt.OptionalValue<g_out.T.Type<Annotation>>,
    ): g_out.T.Any__Value__Selection<Annotation> {
        return pl.cc($, ($) => {
            const $p_start: g_out.T.Any__Value__Selection.start<Annotation> = pl.cc($['start'], ($) => tempoptional/*4*/(
                $,
                ($): g_out.T.Any__Value__Selection.start<Annotation> => [true, pl.cc($, ($) => {
                    const refkey = $.key
                    const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = tempoptional/*3*/(
                        $v_TBD,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D<Annotation>>>(
                            refkey,
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
            const $v_start: pt.OptionalValue<g_out.T.Any__Value__Selection.start<Annotation>> = [true, $p_start]
            const $p_tail: g_out.T.Any__Value__Selection.tail<Annotation> = pl.cc($['tail'], ($) => tempoptional/*4*/(
                $,
                ($): g_out.T.Any__Value__Selection.tail<Annotation> => [true, map_Value__Selection__Tail<Annotation>(
                    $,
                )],
                () => [false],
            ))
            const $v_tail: pt.OptionalValue<g_out.T.Any__Value__Selection.tail<Annotation>> = [true, $p_tail]
            return {
                'start': $p_start,
                'tail': $p_tail,
            }
        })
    }
    
    function map_Atom<Annotation>(
        $: g_in.T.Atom<Annotation>,
        $v_labels: pt.OptionalValue<g_out.T.Labels<Annotation>>,
    ): g_out.T.Atom<Annotation> {
        return pl.cc($, ($) => {
            const $p__ltype: g_out.T.Atom._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                const refkey = $.key
                const constraint: pt.OptionalValue<g_out.T.Labels.atom__types.D<Annotation>> = tempoptional/*3*/(
                    $v_labels,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Labels.atom__types.D<Annotation>>>(
                        refkey,
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
            const $v__ltype: pt.OptionalValue<g_out.T.Atom._ltype<Annotation>> = [true, $p__ltype]
            return {
                'type': $p__ltype,
            }
        })
    }
    
    function map_Atom__Initializer<Annotation>(
        $: g_in.T.Atom__Initializer<Annotation>,
    ): g_out.T.Atom__Initializer<Annotation> {
        return pl.cc($, ($) => {
            const $p_constrained: g_out.T.Atom__Initializer.constrained<Annotation> = pl.cc($['constrained'], ($) => pl.cc($, ($): g_out.T.Atom__Initializer.constrained<Annotation> => {
                switch ($[0]) {
                    case 'yes': return pl.ss($, ($) => ['yes', map_Reference__Initializer<Annotation>(
                        $,
                    )])
                    default: return pl.au($[0])
                }
            }))
            const $v_constrained: pt.OptionalValue<g_out.T.Atom__Initializer.constrained<Annotation>> = [true, $p_constrained]
            return {
                'constrained': $p_constrained,
            }
        })
    }
    
    function map_Dictionary__Constraints<Annotation>(
        $: g_in.T.Dictionary__Constraints<Annotation>,
    ): g_out.T.Dictionary__Constraints<Annotation> {
        return $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
            const $p_temp__type: g_out.T.Dictionary__Constraints.D.temp__type<Annotation> = pl.cc($['temp type'], ($) => map_Temp__Type__Selection<Annotation>(
                $,
                $v_global__types,//$v_global__types
            ))
            const $v_temp__type: pt.OptionalValue<g_out.T.Dictionary__Constraints.D.temp__type<Annotation>> = [true, $p_temp__type]
            const $p_selection: g_out.T.Dictionary__Constraints.D.selection<Annotation> = pl.cc($['selection'], ($) => map_Value__Selection<Annotation>(
                $,
            ))
            const $v_selection: pt.OptionalValue<g_out.T.Dictionary__Constraints.D.selection<Annotation>> = [true, $p_selection]
            return {
                'selection': $p_selection,
                'temp type': $p_temp__type,
            }
        }))})
    }
    
    function map_Global__Type__Declaration<Annotation>(
        $: g_in.T.Global__Type__Declaration<Annotation>,
    ): g_out.T.Global__Type__Declaration<Annotation> {
        return pl.cc($, ($) => {
            const $p_parameters: g_out.T.Global__Type__Declaration.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Parameters<Annotation>(
                $,
            ))
            const $v_parameters: pt.OptionalValue<g_out.T.Global__Type__Declaration.parameters<Annotation>> = [true, $p_parameters]
            const $p_result: g_out.T.Global__Type__Declaration.result<Annotation> = pl.cc($['result'], ($) => tempoptional/*4*/(
                $,
                ($): g_out.T.Global__Type__Declaration.result<Annotation> => [true, map_Global__Type__Selection<Annotation>(
                    $,
                )],
                () => [false],
            ))
            const $v_result: pt.OptionalValue<g_out.T.Global__Type__Declaration.result<Annotation>> = [true, $p_result]
            return {
                'parameters': $p_parameters,
                'result': $p_result,
            }
        })
    }
    
    function map_Global__Type__Definition<Annotation>(
        $: g_in.T.Global__Type__Definition<Annotation>,
    ): g_out.T.Global__Type__Definition<Annotation> {
        return pl.cc($, ($) => {
            const $p_variables: g_out.T.Global__Type__Definition.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                $,
            ))
            const $v_variables: pt.OptionalValue<g_out.T.Global__Type__Definition.variables<Annotation>> = [true, $p_variables]
            const $p__ltype: g_out.T.Global__Type__Definition._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                $,
                $v_global__types,//$v_global__types
            ))
            const $v__ltype: pt.OptionalValue<g_out.T.Global__Type__Definition._ltype<Annotation>> = [true, $p__ltype]
            const $p_result: g_out.T.Global__Type__Definition.result<Annotation> = pl.cc($['result'], ($) => tempoptional/*4*/(
                $,
                ($): g_out.T.Global__Type__Definition.result<Annotation> => [true, map_Any__Value__Selection<Annotation>(
                    $,
                )],
                () => [false],
            ))
            const $v_result: pt.OptionalValue<g_out.T.Global__Type__Definition.result<Annotation>> = [true, $p_result]
            return {
                'result': $p_result,
                'type': $p__ltype,
                'variables': $p_variables,
            }
        })
    }
    
    function map_Global__Type__Selection<Annotation>(
        $: g_in.T.Global__Type__Selection<Annotation>,
    ): g_out.T.Global__Type__Selection<Annotation> {
        return pl.cc($, ($) => {
            const $p__limport: g_out.T.Global__Type__Selection._limport<Annotation> = pl.cc($['import'], ($) => tempoptional/*4*/(
                $,
                ($): g_out.T.Global__Type__Selection._limport<Annotation> => [true, pl.cc($, ($) => {
                    const refkey = $.key
                    const constraint: pt.OptionalValue<g_out.T.Imports.D<Annotation>> = tempoptional/*3*/(
                        $v_TBD,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Imports.D<Annotation>>>(
                            refkey,
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
                const refkey = $.key
                const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.definitions.D<Annotation>> = tempoptional/*3*/(
                    $v_TBD,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type__Library.global__types.definitions.D<Annotation>>>(
                        refkey,
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
        return $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
            return null
        }))})
    }
    
    function map_Labels<Annotation>(
        $: g_in.T.Labels<Annotation>,
    ): g_out.T.Labels<Annotation> {
        return pl.cc($, ($) => {
            const $p_atom__types: g_out.T.Labels.atom__types<Annotation> = pl.cc($['atom types'], ($) => $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                return null
            }))}))
            const $v_atom__types: pt.OptionalValue<g_out.T.Labels.atom__types<Annotation>> = [true, $p_atom__types]
            return {
                'atom types': $p_atom__types,
            }
        })
    }
    
    function map_Lookup__Selection<Annotation>(
        $: g_in.T.Lookup__Selection<Annotation>,
    ): g_out.T.Lookup__Selection<Annotation> {
        return pl.cc($, ($): g_out.T.Lookup__Selection<Annotation> => {
            switch ($[0]) {
                case 'parameter': return pl.ss($, ($) => ['parameter', pl.cc($, ($) => {
                    const refkey = $.key
                    const constraint: pt.OptionalValue<g_out.T.Parameters.D<Annotation>> = tempoptional/*3*/(
                        $v_TBD,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Parameters.D<Annotation>>>(
                            refkey,
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
                case 'resolved dictionary': return pl.ss($, ($) => ['resolved dictionary', map_Value__Selection<Annotation>(
                    $,
                )])
                case 'this': return pl.ss($, ($) => ['this', pl.cc($, ($) => {
                    const $p__ltype: g_out.T.Lookup__Selection._lthis._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Lookup__Selection._lthis._ltype<Annotation> => {
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
                    const $v__ltype: pt.OptionalValue<g_out.T.Lookup__Selection._lthis._ltype<Annotation>> = [true, $p__ltype]
                    return {
                        'type': $p__ltype,
                    }
                })])
                default: return pl.au($[0])
            }
        })
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
                const refkey = $.key
                const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.definitions.D<Annotation>> = tempoptional/*3*/(
                    $v_type__library,
                    ($) => pl.cc($['global types'], ($) => pl.cc($['definitions'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type__Library.global__types.definitions.D<Annotation>>>(
                        refkey,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    ))),
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
        return $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
            const $p_temp__type: g_out.T.Option__Constraints.D.temp__type<Annotation> = pl.cc($['temp type'], ($) => map_Temp__Type__Selection<Annotation>(
                $,
                $v_global__types,//$v_global__types
            ))
            const $v_temp__type: pt.OptionalValue<g_out.T.Option__Constraints.D.temp__type<Annotation>> = [true, $p_temp__type]
            const $p_selection: g_out.T.Option__Constraints.D.selection<Annotation> = pl.cc($['selection'], ($) => map_Value__Selection<Annotation>(
                $,
            ))
            const $v_selection: pt.OptionalValue<g_out.T.Option__Constraints.D.selection<Annotation>> = [true, $p_selection]
            const $p_option: g_out.T.Option__Constraints.D.option<Annotation> = pl.cc($['option'], ($) => pl.cc($, ($) => {
                const refkey = $.key
                const constraint: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D<Annotation>> = tempoptional/*3*/(
                    $v_XXXXA,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D<Annotation>>>(
                        refkey,
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
                'temp type': $p_temp__type,
            }
        }))})
    }
    
    function map_Parameters<Annotation>(
        $: g_in.T.Parameters<Annotation>,
    ): g_out.T.Parameters<Annotation> {
        return $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
            const $p__ltype: g_out.T.Parameters.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Parameters.D._ltype<Annotation> => {
                switch ($[0]) {
                    case 'lookup': return pl.ss($, ($) => ['lookup', pl.cc($, ($) => {
                        const $p__ltype: g_out.T.Parameters.D._ltype.lookup._ltype<Annotation> = pl.cc($['type'], ($) => map_Global__Type__Selection<Annotation>(
                            $,
                            $v_global__types,//$v_global__types
                        ))
                        const $v__ltype: pt.OptionalValue<g_out.T.Parameters.D._ltype.lookup._ltype<Annotation>> = [true, $p__ltype]
                        const $p_kind: g_out.T.Parameters.D._ltype.lookup.kind<Annotation> = pl.cc($['kind'], ($) => pl.cc($, ($): g_out.T.Parameters.D._ltype.lookup.kind<Annotation> => {
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
                        const $v_kind: pt.OptionalValue<g_out.T.Parameters.D._ltype.lookup.kind<Annotation>> = [true, $p_kind]
                        return {
                            'kind': $p_kind,
                            'type': $p__ltype,
                        }
                    })])
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
                    default: return pl.au($[0])
                }
            }))
            const $v__ltype: pt.OptionalValue<g_out.T.Parameters.D._ltype<Annotation>> = [true, $p__ltype]
            return {
                'type': $p__ltype,
            }
        }))})
    }
    
    function map_Properties<Annotation>(
        $: g_in.T.Properties<Annotation>,
    ): g_out.T.Properties<Annotation> {
        return $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
            const $p_variables: g_out.T.Properties.D.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                $,
            ))
            const $v_variables: pt.OptionalValue<g_out.T.Properties.D.variables<Annotation>> = [true, $p_variables]
            const $p__ltype: g_out.T.Properties.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                $,
                $v_global__types,//$v_global__types
            ))
            const $v__ltype: pt.OptionalValue<g_out.T.Properties.D._ltype<Annotation>> = [true, $p__ltype]
            return {
                'type': $p__ltype,
                'variables': $p_variables,
            }
        }))})
    }
    
    function map_Reference__Initializer<Annotation>(
        $: g_in.T.Reference__Initializer<Annotation>,
    ): g_out.T.Reference__Initializer<Annotation> {
        return pl.cc($, ($) => {
            return null
        })
    }
    
    function map_Temp__Type__Selection<Annotation>(
        $: g_in.T.Temp__Type__Selection<Annotation>,
        $v_global__types: pt.Lookup<pt.ComputedValue<g_out.T.Global__Type__Declaration<Annotation>>>,
    ): g_out.T.Temp__Type__Selection<Annotation> {
        return pl.cc($, ($) => {
            const $p_global__type: g_out.T.Temp__Type__Selection.global__type<Annotation> = pl.cc($['global type'], ($) => map_Global__Type__Selection<Annotation>(
                $,
            ))
            const $v_global__type: pt.OptionalValue<g_out.T.Temp__Type__Selection.global__type<Annotation>> = [true, $p_global__type]
            const $p_tail: g_out.T.Temp__Type__Selection.tail<Annotation> = pl.cc($['tail'], ($) => tempoptional/*4*/(
                $,
                ($): g_out.T.Temp__Type__Selection.tail<Annotation> => [true, map_Temp__Type__Selection__Tail<Annotation>(
                    $,
                )],
                () => [false],
            ))
            const $v_tail: pt.OptionalValue<g_out.T.Temp__Type__Selection.tail<Annotation>> = [true, $p_tail]
            return {
                'global type': $p_global__type,
                'tail': $p_tail,
            }
        })
    }
    
    function map_Temp__Type__Selection__Tail<Annotation>(
        $: g_in.T.Temp__Type__Selection__Tail<Annotation>,
        $v_context: pt.OptionalValue<g_out.T.Type<Annotation>>,
    ): g_out.T.Temp__Type__Selection__Tail<Annotation> {
        return pl.cc($, ($) => {
            const $p_step__type: g_out.T.Temp__Type__Selection__Tail.step__type<Annotation> = pl.cc($['step type'], ($) => pl.cc($, ($): g_out.T.Temp__Type__Selection__Tail.step__type<Annotation> => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => {
                        const /*option constraint*/$v_array: pt.OptionalValue<g_out.T.Type._ltype.array<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.array<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'array')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['array', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'array': $v_array,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    return null
                                })),
                            }
                        })]
                    })
                    case 'dictionary': return pl.ss($, ($) => {
                        const /*option constraint*/$v_dictionary: pt.OptionalValue<g_out.T.Type._ltype.dictionary<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.dictionary<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'dictionary')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['dictionary', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'dictionary': $v_dictionary,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    return null
                                })),
                            }
                        })]
                    })
                    case 'group': return pl.ss($, ($) => {
                        const /*option constraint*/$v_group: pt.OptionalValue<g_out.T.Type._ltype.group<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.group<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'group')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['group', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'group': $v_group,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    const $p_property: g_out.T.Temp__Type__Selection__Tail.step__type.group.content.property<Annotation> = pl.cc($['property'], ($) => pl.cc($, ($) => {
                                        const refkey = $.key
                                        const constraint: pt.OptionalValue<g_out.T.Properties.D<Annotation>> = tempoptional/*3*/(
                                            $v_group,
                                            ($) => $.__getEntry<pt.OptionalValue<g_out.T.Properties.D<Annotation>>>(
                                                refkey,
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
                                    const $v_property: pt.OptionalValue<g_out.T.Temp__Type__Selection__Tail.step__type.group.content.property<Annotation>> = [true, $p_property]
                                    return {
                                        'property': $p_property,
                                    }
                                })),
                            }
                        })]
                    })
                    case 'optional': return pl.ss($, ($) => {
                        const /*option constraint*/$v_optional: pt.OptionalValue<g_out.T.Type._ltype.optional<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.optional<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'optional')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['optional', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'optional': $v_optional,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    return null
                                })),
                            }
                        })]
                    })
                    case 'tagged union': return pl.ss($, ($) => {
                        const /*option constraint*/$v_tagged__union: pt.OptionalValue<g_out.T.Type._ltype.tagged__union<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.tagged__union<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'tagged union')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['tagged union', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'tagged union': $v_tagged__union,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    const $p_option: g_out.T.Temp__Type__Selection__Tail.step__type.tagged__union.content.option<Annotation> = pl.cc($['option'], ($) => pl.cc($, ($) => {
                                        const refkey = $.key
                                        const constraint: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D<Annotation>> = tempoptional/*3*/(
                                            $v_tagged__union,
                                            ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D<Annotation>>>(
                                                refkey,
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
                                    const $v_option: pt.OptionalValue<g_out.T.Temp__Type__Selection__Tail.step__type.tagged__union.content.option<Annotation>> = [true, $p_option]
                                    return {
                                        'option': $p_option,
                                    }
                                })),
                            }
                        })]
                    })
                    default: return pl.au($[0])
                }
            }))
            const $v_step__type: pt.OptionalValue<g_out.T.Temp__Type__Selection__Tail.step__type<Annotation>> = [true, $p_step__type]
            const $p_tail: g_out.T.Temp__Type__Selection__Tail.tail<Annotation> = pl.cc($['tail'], ($) => tempoptional/*4*/(
                $,
                ($): g_out.T.Temp__Type__Selection__Tail.tail<Annotation> => [true, map_Temp__Type__Selection__Tail<Annotation>(
                    $,
                )],
                () => [false],
            ))
            const $v_tail: pt.OptionalValue<g_out.T.Temp__Type__Selection__Tail.tail<Annotation>> = [true, $p_tail]
            return {
                'step type': $p_step__type,
                'tail': $p_tail,
            }
        })
    }
    
    function map_Type<Annotation>(
        $: g_in.T.Type<Annotation>,
        $v_imports: pt.OptionalValue<g_out.T.Imports<Annotation>>,
        $v_labels: pt.OptionalValue<g_out.T.Labels<Annotation>>,
    ): g_out.T.Type<Annotation> {
        return pl.cc($, ($) => {
            const $p_classes: g_out.T.Type.classes<Annotation> = pl.cc($['classes'], ($) => $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                return null
            }))}))
            const $v_classes: pt.OptionalValue<g_out.T.Type.classes<Annotation>> = [true, $p_classes]
            const $p__ltype: g_out.T.Type._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Type._ltype<Annotation> => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($) => ['array', pl.cc($, ($) => {
                        const $p__ltype: g_out.T.Type._ltype.array._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                            $,
                            $v_global__types,//$v_global__types
                        ))
                        const $v__ltype: pt.OptionalValue<g_out.T.Type._ltype.array._ltype<Annotation>> = [true, $p__ltype]
                        return {
                            'type': $p__ltype,
                        }
                    })])
                    case 'component': return pl.ss($, ($) => ['component', pl.cc($, ($) => {
                        const $p_context: g_out.T.Type._ltype.component.context<Annotation> = pl.cc($['context'], ($) => pl.cc($, ($): g_out.T.Type._ltype.component.context<Annotation> => {
                            switch ($[0]) {
                                case 'import': return pl.ss($, ($) => ['import', pl.cc($, ($) => {
                                    const $p_library: g_out.T.Type._ltype.component.context._limport.library<Annotation> = pl.cc($['library'], ($) => pl.cc($, ($) => {
                                        const refkey = $.key
                                        const constraint: pt.OptionalValue<g_out.T.Imports.D<Annotation>> = tempoptional/*3*/(
                                            $v_imports,
                                            ($) => $.__getEntry<pt.OptionalValue<g_out.T.Imports.D<Annotation>>>(
                                                refkey,
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
                                    const $v_library: pt.OptionalValue<g_out.T.Type._ltype.component.context._limport.library<Annotation>> = [true, $p_library]
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
                        const $v_context: pt.OptionalValue<g_out.T.Type._ltype.component.context<Annotation>> = [true, $p_context]
                        const $p__ltype: g_out.T.Type._ltype.component._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
                            const refkey = $.key
                            const constraint: pt.OptionalValue<g_out.T.Type__Library.global__types.definitions.D<Annotation>> = tempoptional/*3*/(
                                $v_context,
                                ($) => tempoptional(
                                    $.result,
                                    ($) => pl.cc($['global types'], ($) => pl.cc($['declarations'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type__Library.global__types.definitions.D<Annotation>>>(
                                        refkey,
                                        ($) => [true, $],
                                        () => {
                                            $se.error("no such entry")
                                            return [false]
                                        },
                                    ))),
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
                        const $v__ltype: pt.OptionalValue<g_out.T.Type._ltype.component._ltype<Annotation>> = [true, $p__ltype]
                        const $p_arguments: g_out.T.Type._ltype.component.arguments<Annotation> = pl.cc($['arguments'], ($) => $d.resolveDictionary($, { 'map': ($, $l) => {
                            const entrykey = $.key
                            return pl.cc($.value, ($) => {
                                const /*dict constraint*/$v_parameter: pt.OptionalValue<g_out.T.Parameters.D<Annotation>> = tempoptional/*3*/(
                                    $v__ltype,
                                    ($) => tempoptional/*1*/(
                                        $.constraint,
                                        ($) => pl.cc($['parameters'], ($) => $.__getEntry<pt.OptionalValue<g_out.T.Parameters.D<Annotation>>>(
                                            entryskey,
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
                                    'constraints': {
                                        'parameter': $v_parameter,
                                    },
                                    'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                        const $p__ltype: g_out.T.Type._ltype.component.arguments.D.content._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Type._ltype.component.arguments.D.content._ltype<Annotation> => {
                                            switch ($[0]) {
                                                case 'lookup': return pl.ss($, ($) => ['lookup', map_Lookup__Selection<Annotation>(
                                                    $,
                                                )])
                                                case 'resolved value': return pl.ss($, ($) => ['resolved value', map_Value__Selection<Annotation>(
                                                    $,
                                                )])
                                                default: return pl.au($[0])
                                            }
                                        }))
                                        const $v__ltype: pt.OptionalValue<g_out.T.Type._ltype.component.arguments.D.content._ltype<Annotation>> = [true, $p__ltype]
                                        return {
                                            'type': $p__ltype,
                                        }
                                    })),
                                }
                            })
                        }}))
                        const $v_arguments: pt.OptionalValue<g_out.T.Type._ltype.component.arguments<Annotation>> = [true, $p_arguments]
                        return {
                            'arguments': $p_arguments,
                            'context': $p_context,
                            'type': $p__ltype,
                        }
                    })])
                    case 'dictionary': return pl.ss($, ($) => ['dictionary', pl.cc($, ($) => {
                        const $p_key: g_out.T.Type._ltype.dictionary.key<Annotation> = pl.cc($['key'], ($) => map_Atom<Annotation>(
                            $,
                            $v_global__types,//$v_global__types
                            tempoptional/*3*/(
                                $v_labels,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_labels
                        ))
                        const $v_key: pt.OptionalValue<g_out.T.Type._ltype.dictionary.key<Annotation>> = [true, $p_key]
                        const $p_constraints: g_out.T.Type._ltype.dictionary.constraints<Annotation> = pl.cc($['constraints'], ($) => map_Dictionary__Constraints<Annotation>(
                            $,
                            $v_global__types,//$v_global__types
                        ))
                        const $v_constraints: pt.OptionalValue<g_out.T.Type._ltype.dictionary.constraints<Annotation>> = [true, $p_constraints]
                        const $p_variables: g_out.T.Type._ltype.dictionary.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                            $,
                        ))
                        const $v_variables: pt.OptionalValue<g_out.T.Type._ltype.dictionary.variables<Annotation>> = [true, $p_variables]
                        const $p__ltype: g_out.T.Type._ltype.dictionary._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                            $,
                            $v_global__types,//$v_global__types
                        ))
                        const $v__ltype: pt.OptionalValue<g_out.T.Type._ltype.dictionary._ltype<Annotation>> = [true, $p__ltype]
                        const $p_autofill: g_out.T.Type._ltype.dictionary.autofill<Annotation> = pl.cc($['autofill'], ($) => $.map(($) => pl.cc($, ($) => {
                            const $p_source: g_out.T.Type._ltype.dictionary.autofill.A.source<Annotation> = pl.cc($['source'], ($) => map_Value__Selection<Annotation>(
                                $,
                            ))
                            const $v_source: pt.OptionalValue<g_out.T.Type._ltype.dictionary.autofill.A.source<Annotation>> = [true, $p_source]
                            const $p_initializer: g_out.T.Type._ltype.dictionary.autofill.A.initializer<Annotation> = pl.cc($['initializer'], ($) => map_Type__Initializer<Annotation>(
                                $,
                            ))
                            const $v_initializer: pt.OptionalValue<g_out.T.Type._ltype.dictionary.autofill.A.initializer<Annotation>> = [true, $p_initializer]
                            return {
                                'initializer': $p_initializer,
                                'source': $p_source,
                            }
                        })))
                        const $v_autofill: pt.OptionalValue<g_out.T.Type._ltype.dictionary.autofill<Annotation>> = [true, $p_autofill]
                        return {
                            'autofill': $p_autofill,
                            'constraints': $p_constraints,
                            'key': $p_key,
                            'type': $p__ltype,
                            'variables': $p_variables,
                        }
                    })])
                    case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                        const $p_properties: g_out.T.Type._ltype.group.properties<Annotation> = pl.cc($['properties'], ($) => map_Properties<Annotation>(
                            $,
                        ))
                        const $v_properties: pt.OptionalValue<g_out.T.Type._ltype.group.properties<Annotation>> = [true, $p_properties]
                        return {
                            'properties': $p_properties,
                        }
                    })])
                    case 'nothing': return pl.ss($, ($) => ['nothing', pl.cc($, ($) => {
                        const $p_result: g_out.T.Type._ltype.nothing.result<Annotation> = pl.cc($['result'], ($) => tempoptional/*4*/(
                            $,
                            ($): g_out.T.Type._ltype.nothing.result<Annotation> => [true, pl.cc($, ($) => {
                                const $p_temp__type: g_out.T.Type._ltype.nothing.result.O.temp__type<Annotation> = pl.cc($['temp type'], ($) => map_Global__Type__Selection<Annotation>(
                                    $,
                                    $v_global__types,//$v_global__types
                                ))
                                const $v_temp__type: pt.OptionalValue<g_out.T.Type._ltype.nothing.result.O.temp__type<Annotation>> = [true, $p_temp__type]
                                const $p_selection: g_out.T.Type._ltype.nothing.result.O.selection<Annotation> = pl.cc($['selection'], ($) => map_Value__Selection<Annotation>(
                                    $,
                                ))
                                const $v_selection: pt.OptionalValue<g_out.T.Type._ltype.nothing.result.O.selection<Annotation>> = [true, $p_selection]
                                return {
                                    'selection': $p_selection,
                                    'temp type': $p_temp__type,
                                }
                            })],
                            () => [false],
                        ))
                        const $v_result: pt.OptionalValue<g_out.T.Type._ltype.nothing.result<Annotation>> = [true, $p_result]
                        return {
                            'result': $p_result,
                        }
                    })])
                    case 'optional': return pl.ss($, ($) => ['optional', pl.cc($, ($) => {
                        const $p__ltype: g_out.T.Type._ltype.optional._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                            $,
                        ))
                        const $v__ltype: pt.OptionalValue<g_out.T.Type._ltype.optional._ltype<Annotation>> = [true, $p__ltype]
                        const $p_result: g_out.T.Type._ltype.optional.result<Annotation> = pl.cc($['result'], ($) => tempoptional/*4*/(
                            $,
                            ($): g_out.T.Type._ltype.optional.result<Annotation> => [true, pl.cc($, ($) => {
                                const $p_temp__type: g_out.T.Type._ltype.optional.result.O.temp__type<Annotation> = pl.cc($['temp type'], ($) => map_Global__Type__Selection<Annotation>(
                                    $,
                                    $v_global__types,//$v_global__types
                                ))
                                const $v_temp__type: pt.OptionalValue<g_out.T.Type._ltype.optional.result.O.temp__type<Annotation>> = [true, $p_temp__type]
                                const $p__lset: g_out.T.Type._ltype.optional.result.O._lset<Annotation> = pl.cc($['set'], ($) => map_Any__Value__Selection<Annotation>(
                                    $,
                                ))
                                const $v__lset: pt.OptionalValue<g_out.T.Type._ltype.optional.result.O._lset<Annotation>> = [true, $p__lset]
                                const $p_not__set: g_out.T.Type._ltype.optional.result.O.not__set<Annotation> = pl.cc($['not set'], ($) => map_Value__Selection<Annotation>(
                                    $,
                                ))
                                const $v_not__set: pt.OptionalValue<g_out.T.Type._ltype.optional.result.O.not__set<Annotation>> = [true, $p_not__set]
                                return {
                                    'not set': $p_not__set,
                                    'set': $p__lset,
                                    'temp type': $p_temp__type,
                                }
                            })],
                            () => [false],
                        ))
                        const $v_result: pt.OptionalValue<g_out.T.Type._ltype.optional.result<Annotation>> = [true, $p_result]
                        return {
                            'result': $p_result,
                            'type': $p__ltype,
                        }
                    })])
                    case 'tagged union': return pl.ss($, ($) => ['tagged union', pl.cc($, ($) => {
                        const $p_result: g_out.T.Type._ltype.tagged__union.result<Annotation> = pl.cc($['result'], ($) => tempoptional/*4*/(
                            $,
                            ($): g_out.T.Type._ltype.tagged__union.result<Annotation> => [true, map_Global__Type__Selection<Annotation>(
                                $,
                                $v_global__types,//$v_global__types
                            )],
                            () => [false],
                        ))
                        const $v_result: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.result<Annotation>> = [true, $p_result]
                        const $p_options: g_out.T.Type._ltype.tagged__union.options<Annotation> = pl.cc($['options'], ($) => $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                            const $p_constraints: g_out.T.Type._ltype.tagged__union.options.D.constraints<Annotation> = pl.cc($['constraints'], ($) => map_Option__Constraints<Annotation>(
                                $,
                            ))
                            const $v_constraints: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D.constraints<Annotation>> = [true, $p_constraints]
                            const $p_variables: g_out.T.Type._ltype.tagged__union.options.D.variables<Annotation> = pl.cc($['variables'], ($) => map_Variables<Annotation>(
                                $,
                            ))
                            const $v_variables: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D.variables<Annotation>> = [true, $p_variables]
                            const $p__ltype: g_out.T.Type._ltype.tagged__union.options.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>(
                                $,
                                $v_global__types,//$v_global__types
                            ))
                            const $v__ltype: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D._ltype<Annotation>> = [true, $p__ltype]
                            const $p_result: g_out.T.Type._ltype.tagged__union.options.D.result<Annotation> = pl.cc($['result'], ($) => tempoptional/*4*/(
                                $,
                                ($): g_out.T.Type._ltype.tagged__union.options.D.result<Annotation> => [true, map_Any__Value__Selection<Annotation>(
                                    $,
                                )],
                                () => [false],
                            ))
                            const $v_result: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D.result<Annotation>> = [true, $p_result]
                            return {
                                'constraints': $p_constraints,
                                'result': $p_result,
                                'type': $p__ltype,
                                'variables': $p_variables,
                            }
                        }))}))
                        const $v_options: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options<Annotation>> = [true, $p_options]
                        const $p__ldefault: g_out.T.Type._ltype.tagged__union._ldefault<Annotation> = pl.cc($['default'], ($) => pl.cc($, ($) => {
                            const refkey = $.key
                            const constraint: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D<Annotation>> = tempoptional/*3*/(
                                $v_options,
                                ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D<Annotation>>>(
                                    refkey,
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
                        const $v__ldefault: pt.OptionalValue<g_out.T.Type._ltype.tagged__union._ldefault<Annotation>> = [true, $p__ldefault]
                        return {
                            'default': $p__ldefault,
                            'options': $p_options,
                            'result': $p_result,
                        }
                    })])
                    case 'terminal': return pl.ss($, ($) => ['terminal', pl.cc($, ($) => {
                        const $p_terminal: g_out.T.Type._ltype.terminal.terminal<Annotation> = pl.cc($['terminal'], ($) => map_Atom<Annotation>(
                            $,
                            $v_global__types,//$v_global__types
                            tempoptional/*3*/(
                                $v_labels,
                                ($) => [true, $],
                                () => [false],
                            ),//$v_labels
                        ))
                        const $v_terminal: pt.OptionalValue<g_out.T.Type._ltype.terminal.terminal<Annotation>> = [true, $p_terminal]
                        const $p_constrained: g_out.T.Type._ltype.terminal.constrained<Annotation> = pl.cc($['constrained'], ($) => pl.cc($, ($): g_out.T.Type._ltype.terminal.constrained<Annotation> => {
                            switch ($[0]) {
                                case 'no': return pl.ss($, ($) => ['no', pl.cc($, ($) => {
                                    return null
                                })])
                                case 'yes': return pl.ss($, ($) => ['yes', pl.cc($, ($) => {
                                    const $p_referencee__type: g_out.T.Type._ltype.terminal.constrained.yes.referencee__type<Annotation> = pl.cc($['referencee type'], ($) => pl.cc($, ($): g_out.T.Type._ltype.terminal.constrained.yes.referencee__type<Annotation> => {
                                        switch ($[0]) {
                                            case 'lookup': return pl.ss($, ($) => ['lookup', pl.cc($, ($) => {
                                                const $p_temp__type: g_out.T.Type._ltype.terminal.constrained.yes.referencee__type.lookup.temp__type<Annotation> = pl.cc($['temp type'], ($) => map_Temp__Type__Selection<Annotation>(
                                                    $,
                                                    $v_global__types,//$v_global__types
                                                ))
                                                const $v_temp__type: pt.OptionalValue<g_out.T.Type._ltype.terminal.constrained.yes.referencee__type.lookup.temp__type<Annotation>> = [true, $p_temp__type]
                                                const $p_selection: g_out.T.Type._ltype.terminal.constrained.yes.referencee__type.lookup.selection<Annotation> = pl.cc($['selection'], ($) => map_Lookup__Selection<Annotation>(
                                                    $,
                                                ))
                                                const $v_selection: pt.OptionalValue<g_out.T.Type._ltype.terminal.constrained.yes.referencee__type.lookup.selection<Annotation>> = [true, $p_selection]
                                                return {
                                                    'selection': $p_selection,
                                                    'temp type': $p_temp__type,
                                                }
                                            })])
                                            case 'resolved value': return pl.ss($, ($) => ['resolved value', pl.cc($, ($) => {
                                                const $p_temp__type: g_out.T.Type._ltype.terminal.constrained.yes.referencee__type.resolved__value.temp__type<Annotation> = pl.cc($['temp type'], ($) => map_Temp__Type__Selection<Annotation>(
                                                    $,
                                                    $v_global__types,//$v_global__types
                                                ))
                                                const $v_temp__type: pt.OptionalValue<g_out.T.Type._ltype.terminal.constrained.yes.referencee__type.resolved__value.temp__type<Annotation>> = [true, $p_temp__type]
                                                const $p_selection: g_out.T.Type._ltype.terminal.constrained.yes.referencee__type.resolved__value.selection<Annotation> = pl.cc($['selection'], ($) => map_Value__Selection<Annotation>(
                                                    $,
                                                ))
                                                const $v_selection: pt.OptionalValue<g_out.T.Type._ltype.terminal.constrained.yes.referencee__type.resolved__value.selection<Annotation>> = [true, $p_selection]
                                                return {
                                                    'selection': $p_selection,
                                                    'temp type': $p_temp__type,
                                                }
                                            })])
                                            default: return pl.au($[0])
                                        }
                                    }))
                                    const $v_referencee__type: pt.OptionalValue<g_out.T.Type._ltype.terminal.constrained.yes.referencee__type<Annotation>> = [true, $p_referencee__type]
                                    return {
                                        'referencee type': $p_referencee__type,
                                    }
                                })])
                                default: return pl.au($[0])
                            }
                        }))
                        const $v_constrained: pt.OptionalValue<g_out.T.Type._ltype.terminal.constrained<Annotation>> = [true, $p_constrained]
                        return {
                            'constrained': $p_constrained,
                            'terminal': $p_terminal,
                        }
                    })])
                    default: return pl.au($[0])
                }
            }))
            const $v__ltype: pt.OptionalValue<g_out.T.Type._ltype<Annotation>> = [true, $p__ltype]
            return {
                'classes': $p_classes,
                'type': $p__ltype,
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
                    const $p_properties: g_out.T.Type__Initializer.group.properties<Annotation> = pl.cc($['properties'], ($) => $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($) => {
                        const $p__ltype: g_out.T.Type__Initializer.group.properties.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type__Initializer<Annotation>(
                            $,
                        ))
                        const $v__ltype: pt.OptionalValue<g_out.T.Type__Initializer.group.properties.D._ltype<Annotation>> = [true, $p__ltype]
                        return {
                            'type': $p__ltype,
                        }
                    }))}))
                    const $v_properties: pt.OptionalValue<g_out.T.Type__Initializer.group.properties<Annotation>> = [true, $p_properties]
                    return {
                        'properties': $p_properties,
                    }
                })])
                case 'optional': return pl.ss($, ($) => ['optional', pl.cc($, ($) => {
                    const $p__ltype: g_out.T.Type__Initializer.optional._ltype<Annotation> = pl.cc($['type'], ($) => tempoptional/*4*/(
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
                        const refkey = $.key
                        const constraint: pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D<Annotation>> = tempoptional/*3*/(
                            $v_TBD,
                            ($) => $.__getEntry<pt.OptionalValue<g_out.T.Type._ltype.tagged__union.options.D<Annotation>>>(
                                refkey,
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
                case 'terminal': return pl.ss($, ($) => ['terminal', map_Atom__Initializer<Annotation>(
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
            const $p_labels: g_out.T.Type__Library.labels<Annotation> = pl.cc($['labels'], ($) => map_Labels<Annotation>(
                $,
            ))
            const $v_labels: pt.OptionalValue<g_out.T.Type__Library.labels<Annotation>> = [true, $p_labels]
            const $p_global__types: g_out.T.Type__Library.global__types<Annotation> = pl.cc($['global types'], ($) => pl.cc($, ($) => {
                const $p_declarations: g_out.T.Type__Library.global__types.declarations<Annotation> = pl.cc($['declarations'], ($) => $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => map_Global__Type__Declaration<Annotation>(
                    $,
                ))}))
                const $v_declarations: pt.OptionalValue<g_out.T.Type__Library.global__types.declarations<Annotation>> = [true, $p_declarations]
                const $p_definitions: g_out.T.Type__Library.global__types.definitions<Annotation> = pl.cc($['definitions'], ($) => $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => map_Global__Type__Definition<Annotation>(
                    $,
                ))}))
                const $v_definitions: pt.OptionalValue<g_out.T.Type__Library.global__types.definitions<Annotation>> = [true, $p_definitions]
                return {
                    'declarations': $p_declarations,
                    'definitions': $p_definitions,
                }
            }))
            const $v_global__types: pt.OptionalValue<g_out.T.Type__Library.global__types<Annotation>> = [true, $p_global__types]
            return {
                'global types': $p_global__types,
                'imports': $p_imports,
                'labels': $p_labels,
            }
        })
    }
    
    function map_Value__Selection<Annotation>(
        $: g_in.T.Value__Selection<Annotation>,
    ): g_out.T.Value__Selection<Annotation> {
        return pl.cc($, ($) => {
            const $p_start: g_out.T.Value__Selection.start<Annotation> = pl.cc($['start'], ($) => pl.cc($, ($) => {
                const refkey = $.key
                const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = tempoptional/*3*/(
                    $v_TBD,
                    ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D<Annotation>>>(
                        refkey,
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
            const $p_tail: g_out.T.Value__Selection.tail<Annotation> = pl.cc($['tail'], ($) => tempoptional/*4*/(
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
        const content = pl.cc($, ($) => {
            const $p_step__type: g_out.T.Value__Selection__Tail.content.step__type<Annotation> = pl.cc($['step type'], ($) => pl.cc($, ($): g_out.T.Value__Selection__Tail.content.step__type<Annotation> => {
                switch ($[0]) {
                    case 'component': return pl.ss($, ($) => {
                        const /*option constraint*/$v_component: pt.OptionalValue<g_out.T.Type._ltype.component<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.component<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'component')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['component', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'component': $v_component,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    return null
                                })),
                            }
                        })]
                    })
                    case 'group': return pl.ss($, ($) => {
                        const /*option constraint*/$v_group: pt.OptionalValue<g_out.T.Type._ltype.group<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.group<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'group')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['group', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'group': $v_group,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    const $p_property: g_out.T.Value__Selection__Tail.content.step__type.group.content.property<Annotation> = pl.cc($['property'], ($) => pl.cc($, ($) => {
                                        const refkey = $.key
                                        const constraint: pt.OptionalValue<g_out.T.Properties.D<Annotation>> = tempoptional/*3*/(
                                            $v_group,
                                            ($) => $.__getEntry<pt.OptionalValue<g_out.T.Properties.D<Annotation>>>(
                                                refkey,
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
                                    const $v_property: pt.OptionalValue<g_out.T.Value__Selection__Tail.content.step__type.group.content.property<Annotation>> = [true, $p_property]
                                    return {
                                        'property': $p_property,
                                    }
                                })),
                            }
                        })]
                    })
                    case 'nothing': return pl.ss($, ($) => {
                        const /*option constraint*/$v_nothing: pt.OptionalValue<g_out.T.Type._ltype.nothing<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.nothing<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'nothing')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['nothing', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'nothing': $v_nothing,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    return null
                                })),
                            }
                        })]
                    })
                    case 'optional': return pl.ss($, ($) => {
                        const /*option constraint*/$v_optional: pt.OptionalValue<g_out.T.Type._ltype.optional<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.optional<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'optional')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['optional', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'optional': $v_optional,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    return null
                                })),
                            }
                        })]
                    })
                    case 'reference': return pl.ss($, ($) => {
                        const /*option constraint*/$v_reference: pt.OptionalValue<g_out.T.Type._ltype.terminal<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.terminal<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'terminal')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['reference', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'reference': $v_reference,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    return null
                                })),
                            }
                        })]
                    })
                    case 'tagged union': return pl.ss($, ($) => {
                        const /*option constraint*/$v_tagged__union: pt.OptionalValue<g_out.T.Type._ltype.tagged__union<Annotation>> = pl.cc($, ($) => {
                            const optConstraint: pt.OptionalValue<g_out.T.Type._ltype.tagged__union<Annotation>> = tempoptional/*3*/(
                                $v__ltype,
                                ($) => ($[0] === 'tagged union')
                                    ? [true, $[1]]
                                    : pl.cc($, ($) => {
                                        $se.error("option constraint")
                                        return [false]
                                    })
                                ,
                                () => [false],
                            )
                            return optConstraint
                        })
                        return ['tagged union', pl.cc($, ($) => {
                            return {
                                'annotation': $.annotation,
                                'constraints': {
                                    'tagged union': $v_tagged__union,
                                },
                                'content': pl.cc($.content, ($) => pl.cc($, ($) => {
                                    return null
                                })),
                            }
                        })]
                    })
                    default: return pl.au($[0])
                }
            }))
            const $v_step__type: pt.OptionalValue<g_out.T.Value__Selection__Tail.content.step__type<Annotation>> = [true, $p_step__type]
            const $p_tail: g_out.T.Value__Selection__Tail.content.tail<Annotation> = pl.cc($['tail'], ($) => pl.cc($, ($) => { //optional with result
                const content: g_out.T.Value__Selection__Tail.content.tail.content<Annotation> = tempoptional/*4*/(
                    $,
                    ($): g_out.T.Value__Selection__Tail.content.tail.content<Annotation> => [true, map_Value__Selection__Tail<Annotation>(
                        $,
                        tempoptional/*3*/(
                            $v_step__type,
                            ($) => tempoptional(
                                $.result,
                                ($) => [true, $],
                                () => [false],
                            ),
                            () => [false],
                        ),//$v__ltype
                    )],
                    () => [false],
                )
                return {
                    'content': content,
                    'result': tempoptional(
                        content,
                        ($) => tempoptional(
                            $.result,
                            ($) => [true, $],
                            () => [false],
                        ),
                        () => tempoptional/*3*/(
                            $v_step__type,
                            ($) => [true, $],
                            () => [false],
                        ),
                    ),
                }
            }))
            const $v_tail: pt.OptionalValue<g_out.T.Value__Selection__Tail.content.tail<Annotation>> = [true, $p_tail]
            return {
                'step type': $p_step__type,
                'tail': $p_tail,
            }
        })
        return {
            'content': content,
            'result': pl.cc(content, ($): pt.OptionalValue<g_out.T.Type<Annotation>> => pl.cc($['tail'], ($) => tempoptional(
                $.result,
                ($) => [true, $],
                () => [false],
            ))),
        }
    }
    
    function map_Variables<Annotation>(
        $: g_in.T.Variables<Annotation>,
        $v_dictionary__constraints: pt.OptionalValue<pt.OptionalValue<g_out.T.Dictionary__Constraints<Annotation>>>,
        $v_lookup: pt.Lookup<g_out.T.Properties<Annotation>>,
        $v_option__constraints: pt.OptionalValue<pt.OptionalValue<g_out.T.Option__Constraints<Annotation>>>,
        $v_parameters: pt.OptionalValue<pt.OptionalValue<g_out.T.Parameters<Annotation>>>,
        $v_parent__variables: pt.OptionalValue<pt.OptionalValue<g_out.T.Variables<Annotation>>>,
    ): g_out.T.Variables<Annotation> {
        return $d.resolveDictionary($, { 'map': ($, $l) => pl.cc($.value, ($) => pl.cc($, ($): g_out.T.Variables.D<Annotation> => {
            switch ($[0]) {
                case 'dictionary constraint': return pl.ss($, ($) => ['dictionary constraint', pl.cc($, ($) => {
                    const refkey = $.key
                    const constraint: pt.OptionalValue<g_out.T.Dictionary__Constraints.D<Annotation>> = tempoptional/*3*/(
                        $v_dictionary__constraints,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Dictionary__Constraints.D<Annotation>>>(
                            refkey,
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
                case 'lookup': return pl.ss($, ($) => ['lookup', pl.cc($, ($) => {
                    const refkey = $.key
                    const constraint: pt.OptionalValue<g_out.T.Properties.D<Annotation>> = $l['non circular siblings'].__getEntry<pt.OptionalValue<g_out.T.Properties.D<Annotation>>>(
                        refkey,
                        ($) => [true, $],
                        () => {
                            $se.error("no such entry")
                            return [false]
                        },
                    )
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                })])
                case 'option constraint': return pl.ss($, ($) => ['option constraint', pl.cc($, ($) => {
                    const refkey = $.key
                    const constraint: pt.OptionalValue<g_out.T.Option__Constraints.D<Annotation>> = tempoptional/*3*/(
                        $v_option__constraints,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Option__Constraints.D<Annotation>>>(
                            refkey,
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
                    const refkey = $.key
                    const constraint: pt.OptionalValue<g_out.T.Parameters.D<Annotation>> = tempoptional/*3*/(
                        $v_parameters,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Parameters.D<Annotation>>>(
                            refkey,
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
                    const refkey = $.key
                    const constraint: pt.OptionalValue<g_out.T.Variables.D<Annotation>> = tempoptional/*3*/(
                        $v_parent__variables,
                        ($) => $.__getEntry<pt.OptionalValue<g_out.T.Variables.D<Annotation>>>(
                            refkey,
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
                default: return pl.au($[0])
            }
        }))})
    }
    return map_Model
}