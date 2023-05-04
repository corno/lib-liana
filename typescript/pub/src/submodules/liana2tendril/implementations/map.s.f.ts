import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_tendril from "../../tendril"
import * as g_liana from "../../liana"

import { A } from "../api.generated"


function tempoptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => pt.OptionalValue<RT>,
): pt.OptionalValue<RT> {
    return pl.optional($, a, () => [false])
}

export const $$: A.map = ($d) => {
    return <Annotation>($: g_liana.T.Type__Library<Annotation>) => {
        function map_Atom($: g_liana.T.Atom<Annotation>): g_tendril.T.Atom<Annotation> {
            return {
                'type': $.type
            }
        }
        function map_Type(
            $: g_liana.T.Type<Annotation>,
            $p: {
                'resolved siblings': pt.Lookup<g_tendril.T.Global__Type<Annotation>>,
            },
        ): g_tendril.T.Type<Annotation> {
            return {
                'type': pl.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'array': return pl.ss($, ($) => {
                            return ['array', {
                                'type': map_Type(
                                    $.type,
                                    $p,
                                )
                            }]
                        })
                        case 'component': return pl.ss($, ($): g_tendril.T.Type._ltype<Annotation> => {
                            return ['component', {
                                'context': pl.cc($.context, ($) => {
                                    switch ($[0]) {
                                        case 'import': return pl.ss($, ($) => ['import', {
                                            'library': $.library,
                                            'type': $.type,
                                        }])
                                        case 'resolved sibling': return pl.ss($, ($) => ['resolved sibling', {
                                            'type': $.type,
                                        }])
                                        default: return pl.au($[0])
                                    }
                                }),
                                // 'type':pl.cc($.type, ($) => {
                                //     switch ($[0]) {
                                //         case '': return pl.ss($, ($) => pd.implementMe(`case`))
                                //         default: return pl.au($[0])
                                //     }
                                // }),
                            }]
                        })
                        case 'dictionary': return pl.ss($, ($): g_tendril.T.Type._ltype<Annotation> => {
                            return ['dictionary', {
                                'type': map_Type(
                                    $.type,
                                    $p,
                                ),
                                'constraints': $.constraints.map(($) => {
                                    return {
                                        'type': map_Type_Selection(
                                            $['temp type'],
                                            $p,
                                        )
                                    }
                                }),
                                'key': map_Atom($.key)
                            }]
                        })
                        case 'group': return pl.ss($, ($): g_tendril.T.Type._ltype<Annotation> => ['group', {
                            'properties': $.properties.map(($) => {
                                return {
                                    'type': map_Type(
                                        $.type,
                                        $p,
                                    )
                                }
                            })
                        }])
                        case 'nothing': return pl.ss($, ($): g_tendril.T.Type._ltype<Annotation> => ['nothing', {
                            'result': tempoptional(
                                $.result,
                                ($) => {
                                    return [true, {
                                        'type': map_Global_Type_Selection(
                                            $['temp type'],
                                            $p,
                                        )
                                    }]
                                }
                            )
                        }])
                        case 'optional': return pl.ss($, ($) => {
                            return ['optional', {
                                'type': map_Type(
                                    $.type,
                                    $p,
                                ),
                                'result': tempoptional(
                                    $.result,
                                    ($) => {
                                        return [true, {
                                            'type': map_Global_Type_Selection(
                                                $['temp type'],
                                                $p,
                                            )
                                        }]
                                    },
                                )
                            }]
                        })
                        case 'tagged union': return pl.ss($, ($): g_tendril.T.Type._ltype<Annotation> => ['tagged union', {
                            'result': tempoptional(
                                $.result,
                                ($) => [true, map_Global_Type_Selection(
                                    $,
                                    $p,
                                )]
                            ),
                            'options': $.options.map(($) => {
                                return {
                                    'constraints': $.constraints.map(($) => {
                                        return {
                                            'type': map_Type_Selection(
                                                $['temp type'],
                                                $p,
                                            ),
                                            'option': $.option
                                        }
                                    }),
                                    'type': map_Type(
                                        $.type,
                                        $p,
                                    )
                                }
                            })
                        }])
                        case 'terminal': return pl.ss($, ($): g_tendril.T.Type._ltype<Annotation> => ['terminal', {
                            'constrained': pl.cc($.constrained, ($) => {
                                switch ($[0]) {
                                    case 'no': return pl.ss($, ($) => ['no', null])
                                    case 'yes': return pl.ss($, ($): g_tendril.T.Type._ltype.terminal.constrained<Annotation> => ['yes', {
                                        'type': pl.cc($['referencee type'], ($) => {
                                            switch ($[0]) {
                                                case 'lookup': return pl.ss($, ($) => map_Type_Selection(
                                                    $['temp type'],
                                                    $p,
                                                ))
                                                case 'resolved value': return pl.ss($, ($) => map_Type_Selection(
                                                    $['temp type'],
                                                    $p,
                                                ))
                                                default: return pl.au($[0])
                                            }
                                        }),
                                        'computed': ['no', null]
                                    }])
                                    default: return pl.au($[0])
                                }
                            }),
                            'terminal': map_Atom($.terminal)
                        }])
                        default: return pl.au($[0])
                    }
                })
            }
        }

        function map_Type_Selection_Tail($: g_liana.T.Temp__Type__Selection__Tail<Annotation>): g_tendril.T.Type__Selection__Tail<Annotation> {
            return {
                'step type': pl.cc($['step type'], ($) => {
                    switch ($[0]) {
                        case 'array': return pl.ss($, ($) => ['array', $])
                        case 'dictionary': return pl.ss($, ($) => ['dictionary', $])
                        case 'group': return pl.ss($, ($) => ['group', {
                            'annotation': $.annotation,
                            'content': {
                                'property': $.content.property
                            }
                        }])
                        case 'optional': return pl.ss($, ($) => ['optional', $])
                        case 'tagged union': return pl.ss($, ($) => ['tagged union', {
                            'annotation': $.annotation,
                            'content': {
                                'option': $.content.option
                            }
                        }])
                        default: return pl.au($[0])
                    }
                }),
                'tail': tempoptional(
                    $.tail,
                    ($) => [true, map_Type_Selection_Tail($)]
                ),
            }
        }

        function map_Type_Selection(
            $: g_liana.T.Temp__Type__Selection<Annotation>,
            $p: {
                'resolved siblings': pt.Lookup<g_tendril.T.Global__Type<Annotation>>,
            },
        ): g_tendril.T.Type__Selection<Annotation> {
            return {
                'global type': map_Global_Type_Selection(
                    $['global type'],
                    $p,
                ),
                'tail': tempoptional(
                    $.tail,
                    ($) => [true, map_Type_Selection_Tail($)]
                ),
            }
        }

        function map_Global_Type_Selection(
            $: g_liana.T.Global__Type__Selection<Annotation>,
            $p: {
                'resolved siblings': pt.Lookup<g_tendril.T.Global__Type<Annotation>>,
            },
        ): g_tendril.T.Global__Type__Selection<Annotation> {
            pl.optional(
                $.import,
                () => {

                },
                () => {
                    $p['resolved siblings'].__unsafeGetEntry(
                        $.type.key,
                    )
                }
            )
            return {
                'import': tempoptional(
                    $.import,
                    ($) => {
                        return [true, $]
                    },
                ),
                'type': $.type
            }
        }
        return {
            'labels': {
                'atom types': $.labels['atom types'].map(($) => {
                    return $
                })
            },
            'imports': $.imports.map($ => {
                return $
            }),
            'global types': $d.resolveDictionary<g_liana.T.Global__Type<Annotation>, g_tendril.T.Global__Type<Annotation>>($['global types'], {
                'map': (($, $l) => {
                    return {
                        'type': map_Type(
                            $.value.type,
                            {
                                'resolved siblings': $l['non circular siblings']
                            },
                        ),
                        'result': tempoptional(
                            $.value.result,
                            ($) => {
                                return [true, {
                                    'type': map_Global_Type_Selection(
                                        $.type,
                                        {
                                            'resolved siblings': $l['non circular siblings']
                                        },

                                    )
                                }]
                            },
                        )
                    }
                })
            })
        }
    }
}