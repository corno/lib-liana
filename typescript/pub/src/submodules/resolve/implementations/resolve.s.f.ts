import * as pl from 'pareto-core-lib'
import * as pt from 'pareto-core-types'
import * as pm from 'pareto-core-map'

import * as g_this from "../glossary"
import * as g_in from "../../unresolved"
import * as g_out from "../../resolved"

import { A, D } from "../api.generated"
import { select } from "./select.s.f"

function mapOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): pt.OptionalValue<RT> {
    return pl.optional(
        $,
        ($): pt.OptionalValue<RT> => {
            const out = a($)
            return [true, out]
        },
        () => [false]
    )
}

type Reference<T> = {
    'referent': T,
    'key': string
}

namespace Resolve {
    export type Atom<Annotation> = (
        $: g_in.T.Atom<Annotation>,
        $p: {
            'atom types': g_out.T.Atom__Types
        }
    ) => g_out.T.Atom

    export type Dictionary__Selection<Annotation> = (
        $: g_in.T.Dictionary__Selection<Annotation>,
        $p: {
            'variables': g_out.T.Variables
            'imports': g_out.T.Imports
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        }
    ) => g_out.T.Dictionary__Selection

    export type Model<Annotation> = (
        $: g_in.T.Model<Annotation>,
        $p: {
            'imports': pt.Lookup<g_out.T.Type__Library>
        }
    ) => g_out.T.Model


    export type State__Selection<Annotation> = (
        $: g_in.T.State__Selection<Annotation>,
        $p: {
            'imports': g_out.T.Imports
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
            'variables': g_out.T.Variables
        },
    ) => g_out.T.State__Selection

    export type Root<Annotation> = (
        $: g_in.T.Root<Annotation>,
        $p: {
            'imports': pt.Lookup<g_out.T.Type__Library>
        }
    ) => g_out.T.Root

    export type Type<Annotation> = (
        $: g_in.T.Type<Annotation>,
        $p: {
            'atom types': g_out.T.Atom__Types
            'imports': g_out.T.Imports
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
            'variables': g_out.T.Variables
        }
    ) => g_out.T.Type

    export type No__Context__Value__Selection<Annotation> = (
        $: g_in.T.No__Context__Value__Selection<Annotation>,
        $p: {
            'imports': g_out.T.Imports
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
            'variables': g_out.T.Variables
        },
    ) => g_out.T.No__Context__Value__Selection

    export type Any__Value__Selection<Annotation> = (
        $: g_in.T.Any__Value__Selection<Annotation>,
        $p: {
            'context': g_out.T.Type
            'variables': g_out.T.Variables

            'imports': g_out.T.Imports
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        },
    ) => g_out.T.Any__Value__Selection

    export type Value__Selection__Tail<Annotation> = (
        $: g_in.T.Value__Selection__Tail<Annotation>,
        $p: {
            'context': g_out.T.Type
            'variables': g_out.T.Variables

            //needed for specifying result types (see state group result)
            'imports': g_out.T.Imports
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        },
    ) => g_out.T.Value__Selection__Tail

    export type Variables<Annotation> = (
        $: g_in.T.Variables<Annotation>,
        $p: {
            'dictionary constraints': pt.OptionalValue<g_out.T.Dictionary__Constraints>,
            'state constraints': pt.OptionalValue<g_out.T.State__Constraints>
            'parameters': pt.OptionalValue<g_out.T.Parameters>
            'parent variables': pt.OptionalValue<g_out.T.Variables>
            'sibling properties': pt.OptionalValue<pt.Lookup<g_out.T.Property>>
            // 'imports': g_out.T.Imports
            // 'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        },
    ) => g_out.T.Variables

    export type Global__Type__Selection<Annotation> = (
        $: g_in.T.Global__Type__Selection<Annotation>,
        $p: {
            'imports': g_out.T.Imports
            'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
        },
    ) => g_out.T.Global__Type__Selection

    // export type Lookup__Selection<Annotation> = (
    //     $: g_in.T.Lookup__Selection<Annotation>,
    //     $p: {
    //         'parameters': g_out.T.Parameters
    //         'current dictionary': pt.OptionalValue<g_out.T.Type._ltype.dictionary>
    //         // 'imports': g_out.T.Imports,
    //         // 'sibling global types': pt.Lookup<g_out.T.Global__Types.D>
    //     },
    // ) => g_out.T.Lookup__Selection

    export type Type__Library<Annotation> = (
        $: g_in.T.Type__Library<Annotation>,
        $p: {
            'imports': pt.Lookup<g_out.T.Type__Library>
        }
    ) => g_out.T.Type__Library
}


export const $$: A.resolve = <Annotation>($d: D.resolve<Annotation>, $se: {
    readonly 'onError': g_this.SYNC.I.OnError<Annotation>
}) => {
    function getEntryForConstrainedDictionaryEntry<T>($: pt.Lookup<T>, key: string, annotation: Annotation): T {
        return $.__getEntry(
            key,
            ($) => $,
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                //pl.panic(`No Such Entry: ${key} (${keys})`)
                $se.onError({
                    'annotation': annotation,
                    'message': ['no such entry', {
                        'key': key
                    }]
                })
                return pl.panic(`No Such Entry: ${key}`)
            }
        )
    }


    function getAnnotatedEntry<T>($: pt.Dictionary<T>, key: {
        'annotation': Annotation,
        'key': string
    }): Reference<T> {
        return $.__getEntry(
            key.key,
            ($) => {
                return {
                    'key': key.key,
                    'referent': $
                }
            },
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                // pd.logDebugMessage(`entries: ${keys}`)
                $se.onError({
                    'annotation': key.annotation,
                    'message': ['no such entry', {
                        'key': key.key
                    }]
                })
                return pl.panic(`No Such Entry: ${key.key}`)
            }
        )
    }
    function getAnnotatedLookupEntry<T>($: pt.Lookup<T>, key: {
        'annotation': Annotation,
        'key': string
    }): Reference<T> {
        return $.__getEntry(
            key.key,
            ($) => {
                return {
                    'key': key.key,
                    'referent': $
                }
            },
            () => {
                // let keys = ""
                // $.__forEach(() => false, ($, key) => {
                //     keys += `${key}, `
                // })
                //pl.panic(`No Such Entry: ${key} (${keys})`)
                $se.onError({
                    'annotation': key.annotation,
                    'message': ['no such entry', {
                        'key': key.key
                    }]
                })
                return pl.panic(`No Such Entry: ${key.key}`)
            }
        )
    }

    //////////////////////////////////////////////////////



    //////////////////////////////////////////////////////

    const resolve_Atom: Resolve.Atom<Annotation> = ($, $p) => ({
        'type': getAnnotatedEntry($p['atom types'], $.type)
    })

    const resolve_Model: Resolve.Model<Annotation> = ($, $p) => {
        const tl = resolve_Type__Library($['type library'], $p)
        return {
            'type library': tl,
            'root': getAnnotatedEntry(tl['global types'], $.root)
        }
    }

    const resolve_Variables: Resolve.Variables<Annotation> = ($, $p) => {
        return $d.mergeAndIgnore({
            'primary': $.dictionary.__mapWithKey(($, key) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'dictionary constraint': return pl.ss($, ($) => {
                        const x$ = $
                        return ['dictionary constraint', pl.optional(
                            $p['dictionary constraints'],
                            ($) => getAnnotatedEntry($, x$),
                            () => {
                                return pl.panic(`no dictionary constraints`)
                            }
                        )]
                    })
                    case 'parameter': return pl.ss($, ($) => {
                        const x$ = $
                        return ['parameter', {
                            'parameter': pl.optional(
                                $p['parameters'],
                                ($) => getAnnotatedEntry($, x$.parameter),
                                () => {
                                    return pl.panic(`no parameters`)
                                }
                            )
                        }]
                    })
                    case 'parent variable': return pl.ss($, ($) => {
                        const x$ = $
                        return ['parent variable', pl.optional(
                            $p['parent variables'],
                            ($) => getAnnotatedEntry($, x$),
                            () => {
                                return pl.panic(`no parent variables`)
                            }
                        )]
                    })
                    case 'sibling property': return pl.ss($, ($) => {
                        const x$ = $
                        return ['sibling property', pl.optional(
                            $p['sibling properties'],
                            ($) => getAnnotatedLookupEntry($, x$),
                            () => {

                                return pl.panic(`no siblings`)
                            }
                        )]
                    })
                    case 'state constraint': return pl.ss($, ($) => {
                        const x$ = $
                        return ['state constraint', pl.optional(
                            $p['state constraints'],
                            ($) => getAnnotatedEntry($, x$),
                            () => {
                                return pl.panic(`no state constraints`)
                            }
                        )]
                    })
                    default: return pl.au($[0])
                }
            })),
            'secondary': $d.mergeAndIgnore({
                'primary': pl.optional(
                    $p['parent variables'],
                    ($) => {
                        return $.__mapWithKey(($, key) => {
                            return ['parent variable', {
                                'key': key,
                                'referent': $
                            }]
                        })
                    },
                    () => pm.wrapRawDictionary({})
                ),
                'secondary': $d.mergeAndIgnore({
                    'primary': pl.optional(
                        $p['parameters'],
                        ($) => {
                            return $.__mapWithKey(($, key) => {
                                return ['parameter', {
                                    'parameter': {
                                        'key': key,
                                        'referent': $
                                    }
                                }]
                            })
                        },
                        () => pm.wrapRawDictionary({})
                    ),
                    'secondary': $d.mergeAndIgnore({
                        'primary': pl.optional(
                            $p['dictionary constraints'],
                            ($) => {
                                return $.__mapWithKey(($, key) => {
                                    return ['dictionary constraint', {
                                        'key': key,
                                        'referent': $
                                    }]
                                })
                            },
                            () => pm.wrapRawDictionary({})
                        ),
                        'secondary': $d.mergeAndIgnore({
                            'primary': pl.optional(
                                $p['state constraints'],
                                ($) => {
                                    return $.__mapWithKey(($, key) => {
                                        return ['state constraint', {
                                            'key': key,
                                            'referent': $
                                        }]
                                    })
                                },
                                () => pm.wrapRawDictionary({})
                            ),
                            'secondary': pm.wrapRawDictionary({})
                        })
                    })
                })
            })
        })
    }
    const resolve_Type: Resolve.Type<Annotation> = ($, $p) => {
        return {
            'type': pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'array': return pl.ss($, ($): g_out.T.Type._ltype => ['array', {
                        'type': resolve_Type($.type, {
                            'atom types': $p['atom types'],
                            'imports': $p.imports,
                            'sibling global types': $p['sibling global types'],
                            'variables': $p.variables,

                        })
                    }])
                    case 'component': return pl.ss($, ($): g_out.T.Type._ltype => {
                        const v_type = resolve_Global__Type__Selection($.type, $p)

                        return ['component', {
                            'type': v_type,
                            'arguments': $.arguments.dictionary.__mapWithKey(($, key) => pl.cc($, ($): g_out.T.Type._ltype.component.arguments.D => {
                                return {
                                    'constraints': {
                                        'parameter': getEntryForConstrainedDictionaryEntry(select.Global__Type__Selection(v_type).parameters, key, $.annotation)
                                    },
                                    'content': {
                                        'type': pl.cc($.content.type, ($) => {
                                            switch ($[0]) {
                                                // case 'lookup': return pl.ss($, ($): g_out.T.Type._ltype.component.arguments.D.content._ltype => {
                                                //     return ['lookup', resolve_Lookup__Selection($.content, {
                                                //         'parameters': $p.parameters,
                                                //         'current dictionary': $p['current dictionary']
                                                //     })]

                                                // })
                                                case 'resolved value': return pl.ss($, ($): g_out.T.Type._ltype.component.arguments.D.content._ltype => ['resolved value', resolve_Value__Selection($, {
                                                    'imports': $p.imports,
                                                    'sibling global types': $p['sibling global types'],
                                                    'variables': $p.variables,
                                                })])
                                                default: return pl.au($[0])
                                            }

                                        })
                                    }
                                }
                            })),

                        }]
                    })
                    case 'dictionary': return pl.ss($, ($): g_out.T.Type._ltype => {
                        const v_constraints: g_out.T.Dictionary__Constraints = $.constraints.dictionary.map(($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                // case 'lookup': return pl.ss($, ($) => {
                                //     const v_gts = resolve_Lookup__Selection($.content, $p)
                                //     return ['lookup', v_gts]
                                // })
                                case 'dictionary': return pl.ss($, ($) => {
                                    return ['dictionary', {
                                        'dictionary': resolve_Dictionary__Selection($.dictionary, $p),
                                        'dense': pl.cc($.dense, ($) => {
                                            switch ($[0]) {
                                                case 'no': return pl.ss($, ($) => ['no', null])
                                                case 'yes': return pl.ss($, ($) => ['yes', null])
                                                default: return pl.au($[0])
                                            }
                                        }),
                                    }]
                                })
                                default: return pl.au($[0])
                            }
                        }))
                        const v_variables: g_out.T.Variables = resolve_Variables($.variables, {
                            'dictionary constraints': [true, v_constraints],
                            'parameters': [false],
                            'sibling properties': [false],
                            'state constraints': [false],
                            'parent variables': [true, $p.variables],
                        })
                        return ['dictionary', {
                            'constraints': v_constraints,
                            'variables': v_variables,
                            'key': resolve_Atom($.key, { 'atom types': $p['atom types'] }),
                            'type': resolve_Type($.type, {
                                'atom types': $p['atom types'],
                                'imports': $p.imports,
                                'sibling global types': $p['sibling global types'],
                                'variables': v_variables,
                            })
                        }]
                    })
                    case 'group': return pl.ss($, ($): g_out.T.Type._ltype => {
                        return ['group', {
                            'properties': $d.resolveDictionary($.properties.dictionary, {
                                'map': (($, $l) => {
                                    const v_variables: g_out.T.Variables = resolve_Variables($.value.variables, {
                                        'dictionary constraints': [false],
                                        'parameters': [false],
                                        'sibling properties': [true, $l['non circular siblings']],
                                        'state constraints': [false],
                                        'parent variables': [true, $p.variables],
                                    })
                                    return {
                                        'variables': v_variables,
                                        'type': resolve_Type($.value.type, {
                                            'atom types': $p['atom types'],
                                            'imports': $p.imports,
                                            'sibling global types': $p['sibling global types'],
                                            'variables': v_variables,
                                        })
                                    }
                                })
                            })
                        }]
                    })
                    case 'nothing': return pl.ss($, ($): g_out.T.Type._ltype => ['nothing', null])
                    case 'optional': return pl.ss($, ($): g_out.T.Type._ltype => {
                        const v_constraints = $.constraints.dictionary.map(($) => resolve_State__Selection($, $p))
                        const v_variables: g_out.T.Variables = resolve_Variables($.variables, {
                            'dictionary constraints': [false],
                            'parameters': [false],
                            'sibling properties': [false],
                            'state constraints': [true, v_constraints],
                            'parent variables': [true, $p.variables],
                        })

                        return ['optional', {
                            'constraints': v_constraints,
                            'variables': v_variables,
                            'type': resolve_Type($.type, {
                                'atom types': $p['atom types'],
                                'imports': $p.imports,
                                'sibling global types': $p['sibling global types'],
                                'variables': v_variables,
                            }),
                        }]
                    })
                    case 'state group': return pl.ss($, ($): g_out.T.Type._ltype => {
                        return ['state group', {
                            'states': $d.resolveDictionary($.states.dictionary, {
                                'map': ($, $l) => {
                                    const v_constraints = $.value.constraints.dictionary.map(($) => resolve_State__Selection($, $p))
                                    const v_variables: g_out.T.Variables = resolve_Variables($.value.variables, {
                                        'dictionary constraints': [false],
                                        'parameters': [false],
                                        'sibling properties': [false],
                                        'state constraints': [true, v_constraints],
                                        'parent variables': [true, $p.variables],
                                    })
                                    return {
                                        'constraints': v_constraints,
                                        'variables': v_variables,
                                        'type': resolve_Type($.value.type, {
                                            'atom types': $p['atom types'],
                                            'imports': $p.imports,
                                            'sibling global types': $p['sibling global types'],
                                            'variables': v_variables,
                                        }),
                                    }
                                }
                            }),
                        }]
                    })
                    // case 'cyclic reference': return pl.ss($, ($) => {
                    //     return ['cyclic reference', {
                    //         'atom': resolve_Atom($.atom, { 'atom types': $p['atom types'] }),
                    //         'sibling': resolve_Global__Type__Selection($.sibling, $p)
                    //     }]
                    // })
                    case 'resolved reference': return pl.ss($, ($): g_out.T.Type._ltype => {
                        return ['resolved reference', {
                            'atom': resolve_Atom($.atom, { 'atom types': $p['atom types'] }),
                            'dictionary': resolve_Dictionary__Selection($.dictionary, $p)
                        }]
                    })
                    case 'atom': return pl.ss($, ($) => {
                        return ['atom', {
                            'atom': resolve_Atom($.atom, { 'atom types': $p['atom types'] }),
                        }]
                    })
                    default: return pl.au($[0])
                }
            })
        }
    }

    // const resolve_Lookup__Selection: Resolve.Lookup__Selection<Annotation> = ($, $p) => {
    //     switch ($[0]) {
    //         // case 'cyclic sibling': return pl.ss($, ($) => {
    //         //     const v_type = getAnnotatedEntry($p['cyclic sibling global types'], $.type)
    //         //     return ['cyclic sibling', {
    //         //         'type': v_type,//FIX ME; don't call
    //         //     }]
    //         // })
    //         case 'parameter': return pl.ss($, ($): g_out.T.Lookup__Selection => {
    //             const v_parameter = getAnnotatedEntry($p.parameters, $.content.parameter).referent

    //             const c_lookup = pl.cc(v_parameter.type, ($) => {
    //                 if ($[0] !== 'lookup') {
    //                     // $se.onError({
    //                     //     'annotation': x.annotation,
    //                     //     'message': ['not the right state', {
    //                     //         'found': $.type[0],
    //                     //         'expected': `state group`
    //                     //     }]
    //                     // })
    //                     return pl.panic(`not a lookup`)
    //                 }
    //                 return $[1]
    //             })
    //             return ['parameter', {
    //                 'parameter': {
    //                     'key': $.content.parameter.key,
    //                     'referent': v_parameter
    //                 },
    //                 'lookup': c_lookup
    //             }]
    //         })
    //         case 'this': return pl.ss($, ($) => {
    //             return ['this', null]
    //         })
    //         case 'resolved dictionary': return pl.ss($, ($) => {
    //             const v_type = getAnnotatedEntry($p['sibling global types'], $.content)
    //             return ['resolved dictionary', {
    //                 'type': v_type,
    //             }]
    //         })
    //         default: return pl.au($[0])
    //     }
    // }

    const resolve_Global__Type__Selection: Resolve.Global__Type__Selection<Annotation> = ($, $p) => {
        switch ($[0]) {
            // case 'cyclic sibling': return pl.ss($, ($) => {
            //     const v_type = getAnnotatedEntry($p['cyclic sibling global types'], $.type)
            //     return ['cyclic sibling', {
            //         'type': v_type,//FIX ME; don't call
            //     }]
            // })
            case 'import': return pl.ss($, ($) => {
                const v_library = getAnnotatedEntry($p.imports, $.library)
                const v_type = getAnnotatedEntry(v_library.referent.constraints.library['global types'], $.type)
                return ['import', {
                    'library': v_library,
                    'type': v_type,
                }]
            })
            case 'resolved sibling': return pl.ss($, ($) => {
                const v_type = getAnnotatedLookupEntry($p['sibling global types'], $.type)
                return ['resolved sibling', {
                    'type': v_type,
                }]
            })
            default: return pl.au($[0])
        }
    }

    const resolve_State__Selection: Resolve.State__Selection<Annotation> = ($, $p) => {
        const v_type = resolve_Value__Selection($.type, $p)
        const $x = $['state group']
        const c_tagged_union = pl.cc(select.No__Context__Value__Selection(v_type), ($) => {
            if ($.type[0] !== 'state group') {
                $se.onError({
                    'annotation': $x,
                    'message': ['not the right state', {
                        'found': $.type[0],
                        'expected': `state group`
                    }]
                })
                return pl.panic(`not a dictionary`)
            }
            return $.type[1]
        })
        const v_state = getAnnotatedEntry(c_tagged_union.states, $.state)
        return {
            'type': v_type,
            'state group': c_tagged_union,
            'state': v_state,
        }
    }

    const resolve_Value__Selection: Resolve.No__Context__Value__Selection<Annotation> = ($, $p) => {
        const v_start = getAnnotatedEntry($p.variables, $.start)
        const v_tail = mapOptional(
            $.tail,
            ($) => resolve_Value__Selection__Tail($, {
                'variables': $p.variables,
                'context': select.Variable(v_start.referent),
                'imports': $p.imports,
                'sibling global types': $p['sibling global types']
            }),
        )
        return {
            'start': v_start,
            'tail': v_tail,
        }
    }

    const resolve_Any__Value__Selection: Resolve.Any__Value__Selection<Annotation> = ($, $p) => {
        const v_start = mapOptional(
            $.start,
            ($) => getAnnotatedEntry($p.variables, $)
        )
        const v_tail = mapOptional(
            $.tail,
            ($) => resolve_Value__Selection__Tail($, {
                'variables': $p.variables,
                'context': pl.optional(
                    v_start,
                    ($) => select.Variable($.referent),
                    () => $p.context,
                ),
                'imports': $p.imports,
                'sibling global types': $p['sibling global types']
            }),
        )
        return {
            'start': v_start,
            'tail': v_tail,
        }
    }

    const resolve_Dictionary__Selection: Resolve.Dictionary__Selection<Annotation> = ($, $p) => {

        const v_type = resolve_Value__Selection(
            $.type,
            {
                'imports': $p.imports,
                'sibling global types': $p['sibling global types'],
                'variables': $p.variables,
            })
        const $ann = $.dictionary
        return {
            'type': v_type,
            'dictionary': pl.cc(select.No__Context__Value__Selection(v_type), ($) => {
                if ($.type[0] !== 'dictionary') {

                    $se.onError({
                        'annotation': $ann,
                        'message': ['not the right state', {
                            'found': $.type[0],
                            'expected': `dictionary`
                        }]
                    })
                    pl.panic(`not a dictionary`)
                }
                return $.type[1]
            })
        }
    }

    const resolve_Value__Selection__Tail: Resolve.Value__Selection__Tail<Annotation> = ($, $p) => {
        switch ($[0]) {
            case 'component': return pl.ss($, ($): g_out.T.Value__Selection__Tail => {
                const $ann = $.component
                const v_component = pl.cc($p.context.type, ($) => {
                    if ($[0] !== 'component') {
                        $se.onError({
                            'annotation': $ann,
                            'message': ['not the right state', {
                                'found': $[0],
                                'expected': `component`
                            }]
                        })
                        pl.panic(`not a component`)
                    }
                    return $[1]
                })

                const v_tail = mapOptional(
                    $.tail,
                    ($) => {
                        return resolve_Value__Selection__Tail($, {
                            'variables': select.Global__Type__Selection(v_component.type).variables,
                            'context': select.Global__Type__Selection(v_component.type).type,
                            'imports': $p.imports,
                            'sibling global types': $p['sibling global types'],
                        })
                    },
                )
                return ['component', {
                    'component': v_component,
                    'tail': v_tail,
                }]
            })
            case 'group': return pl.ss($, ($) => {
                const $ann = $.group
                const v_group = pl.cc($p.context.type, ($) => {
                    if ($[0] !== 'group') {
                        $se.onError({
                            'annotation': $ann,
                            'message': ['not the right state', {
                                'found': $[0],
                                'expected': `group`
                            }]
                        })
                        pl.panic(`not a group`)
                    }
                    return $[1]
                })
                const v_property = getAnnotatedEntry(v_group.properties, $.property)
                const v_tail = mapOptional(
                    $.tail,
                    ($) => {
                        return resolve_Value__Selection__Tail($, {
                            'variables': v_property.referent.variables,
                            'context': v_property.referent.type,
                            'imports': $p.imports,
                            'sibling global types': $p['sibling global types'],
                        })
                    },
                )
                return ['group', {
                    'group': v_group,
                    'property': v_property,
                    'tail': v_tail,
                }]
            })
            // case 'nothing': return pl.ss($, ($) => {
            //     const x = $

            //     const v_nothing = pl.cc($p.context.type, ($) => {
            //         if ($[0] !== 'nothing') {
            //             $se.onError({
            //                 'annotation': x.annotation,
            //                 'message': ['not the right state', {
            //                     'found': $[0],
            //                     'expected': `nothing`
            //                 }]
            //             })
            //             pl.panic(`not a nothing type`)
            //         }
            //         return $[1]
            //     })
            //     return {
            //         'content': ['nothing', {
            //             'constraints': {
            //                 'nothing': v_nothing,
            //             },
            //             'content': null,
            //         }],
            //         'result': v_nothing.type,
            //     }
            // })

            // case 'optional': return pl.ss($, ($) => {

            //     const v_optional = pl.cc($p.context.type, ($) => {
            //         if ($[0] !== 'optional') {
            //             // $se.onError({
            //             //     'annotation': x.annotation,
            //             //     'message': ['not the right state', {
            //             //         'found': $[0],
            //             //         'expected': `optional`
            //             //     }]
            //             // })
            //             pl.panic(`not an optional`)
            //         }
            //         return $[1]
            //     })
            //     const v_set = resolve_Any__Value__Selection($.content.set, {
            //         'context': v_optional.type,
            //         'imports': $p.imports,
            //         'sibling global types': $p['sibling global types'],
            //         'variables': $p.variables,
            //     })
            //     const v_not_set = resolve_Value__Selection($.content['not set'], {
            //         'imports': $p.imports,
            //         'sibling global types': $p['sibling global types'],
            //         'variables': xnotset,
            //     })
            //     return ['optional', {
            //         'optional': v_optional,
            //         'set': v_set,
            //         'not set': v_not_set
            //     }]
            // })

            case 'reference': return pl.ss($, ($): g_out.T.Value__Selection__Tail => {
                const $ann = $.reference
                const v_reference = pl.cc($p.context.type, ($) => {
                    if ($[0] !== 'resolved reference') {
                        $se.onError({
                            'annotation': $ann,
                            'message': ['not the right state', {
                                'found': $[0],
                                'expected': `ref`
                            }]
                        })
                        pl.panic(`not a reference`)
                    }
                    return $[1]
                })
                const v_tail = mapOptional(
                    $.tail,
                    ($) => {
                        return resolve_Value__Selection__Tail($, {
                            'variables': $p.variables,
                            'context': v_reference.dictionary.dictionary.type,
                            'imports': $p.imports,
                            'sibling global types': $p['sibling global types'],
                        })
                    },
                )
                return ['reference', {
                    'reference': v_reference,
                    'tail': v_tail,
                }]
            })
            case 'state group': return pl.ss($, ($): g_out.T.Value__Selection__Tail => {
                const x = $['state group']

                const v_state_group = pl.cc($p.context.type, ($) => {
                    if ($[0] !== 'state group') {
                        $se.onError({
                            'annotation': x,
                            'message': ['not the right state', {
                                'found': $[0],
                                'expected': `state group`
                            }]
                        })
                        pl.panic(`not a state group`)
                    }
                    return $[1]
                })
                const v_result_type = resolve_Global__Type__Selection($['result type'], {
                    'imports': $p.imports,
                    'sibling global types': $p['sibling global types']
                })
                const v_states: g_out.T.Value__Selection__Tail.state__group.states = $.states.dictionary.__mapWithKey(($, key) => {
                    const v_state = getEntryForConstrainedDictionaryEntry(v_state_group.states, key, $.annotation)
                    return {
                        'constraints': {
                            'state': v_state,
                        },
                        'content': resolve_Any__Value__Selection($.content, {
                            'imports': $p.imports,
                            'sibling global types': $p['sibling global types'],
                            'context': v_state.type,
                            'variables': v_state.variables,
                        })
                    }
                })

                return ['state group', {
                    'state group': v_state_group,
                    'result type': v_result_type,
                    'states': v_states,

                }]
            })
            default: return pl.au($[0])
        }
    }

    const resolve_Type__Library: Resolve.Type__Library<Annotation> = ($, $p) => {
        const v_imports = $.imports.dictionary.__mapWithKey(($, key) => {
            return {
                'constraints': {
                    'library': getEntryForConstrainedDictionaryEntry($p.imports, key, $.annotation)
                },
                'content': null
            }
        })
        const v_atom__types = $['atom types'].dictionary.map(($) => null)

        return {
            'imports': v_imports,
            'atom types': v_atom__types,
            'global types': $d.resolveDictionary($['global types'].dictionary, {
                'map': (($, $l): g_out.T.Global__Type => {
                    const v_parameters: g_out.T.Parameters = $.value.parameters.dictionary.map(($) => {
                        return {
                            'optional': pl.cc($.optional, ($) => {
                                switch ($[0]) {
                                    case 'no': return pl.ss($, ($) => ['no', null])
                                    case 'yes': return pl.ss($, ($) => ['yes', null])
                                    default: return pl.au($[0])
                                }
                            }),
                            'type': resolve_Global__Type__Selection($.type, {
                                'imports': v_imports,
                                'sibling global types': $l['non circular siblings'],
                            })
                            // 'type': pl.cc($.type, ($) => {
                            //     return pl.cc($, ($) => {
                            //         switch ($[0]) {
                            //             // case 'lookup': return pl.ss($, ($): g_out.T.Parameters.D._ltype => ['lookup', {
                            //             //     'type': resolve_Global__Type__Selection($.content.type, {
                            //             //         'sibling global types': $l['non circular siblings'],
                            //             //         'imports': v_imports,
                            //             //     })
                            //             // }])
                            //             case 'resolved value': return pl.ss($, ($): g_out.T.Parameters.D._ltype => ['resolved value', {
                            //             }])
                            //             default: return pl.au($[0])
                            //         }
                            //     })
                            // })
                        }
                    })
                    const v_variables: g_out.T.Variables = resolve_Variables($.value.variables, {
                        'dictionary constraints': [false],
                        'parameters': [true, v_parameters],
                        'sibling properties': [false],
                        'state constraints': [false],
                        'parent variables': [false],
                    })
                    const v_type: g_out.T.Type = resolve_Type($.value.type, {
                        'atom types': v_atom__types,
                        'imports': v_imports,
                        'sibling global types': $l['non circular siblings'],
                        'variables': v_variables,
                    })
                    const v_result: g_out.T.Global__Type.result = mapOptional(
                        $.value.result,
                        ($) => {
                            return resolve_Any__Value__Selection($, {
                                'context': v_type,
                                'variables': v_variables,
                                'imports': v_imports,
                                'sibling global types': $l['non circular siblings']
                            })
                        }
                    )
                    return {
                        'parameters': v_parameters,
                        'variables': v_variables,
                        'type': v_type,
                        'result': v_result,
                    }
                })
            })
        }
    }

    const resolve_Root: Resolve.Root<Annotation> = ($, $p) => {
        return resolve_Model($, $p)
    }

    return ($: g_this.T.Resolve__Parameters<Annotation>) => {
        return resolve_Root($.root, {
            'imports': $.imports,
        })
    }
}