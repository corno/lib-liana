import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'
import * as pm from 'pareto-core-map'

import * as g_out from "lib-pareto-lang-data/dist/submodules/unresolved"
import * as g_in from "../../resolved"

import { A } from "../api.generated"


function mapOptional<T, RT>(
    $: pt.OptionalValue<T>,
    a: ($: T) => RT,
): pt.OptionalValue<RT> {
    return pl.optional(
        $,
        ($): pt.OptionalValue<RT> => {
            return [true, a($)]
        },
        () => [false]
    )
}

export const $$: A.map = ($d) => {
    return ($: g_in.T.Type__Library) => {

        type Variables = pt.Dictionary<g_out.T.Type__Selection<null>>

        type Map_Atom = ($: g_in.T.Atom) => g_out.T.Atom<null>


        type Map_Type__Library2Type__Library = (
            $: g_in.T.Type__Library,
            $p: {
                //'resolved siblings': pt.Lookup<g_out.T.Global__Type<null>>,
            },
        ) => g_out.T.Type__Library<null>


        type Map_Type2Type = (
            $: g_in.T.Type,
            $p: {
                'variables': Variables,
                //'resolved siblings': pt.Lookup<g_out.T.Global__Type<null>>,
            },
        ) => g_out.T.Type<null>


        // type Map_Type_Selection_Tail = (
        //     $: g_in.T.Temp__Type__Selection__Tail<null>
        // ) => g_out.T.Type__Selection__Tail<null>

        type Map_No__Context__Value__Selection2Type__Selection = (
            $: g_in.T.No__Context__Value__Selection,
            $p: {
                //'resolved siblings': pt.Lookup<g_out.T.Global__Type<null>>,
            },
        ) => g_out.T.Type__Selection<null>

        type Map_Dictionary_Selection = (
            $: g_in.T.Dictionary__Selection,
            $p: {
                //'resolved siblings': pt.Lookup<g_out.T.Global__Type<null>>,
            },
        ) => g_out.T.Dictionary__Selection<null>


        type Map_Global__Type__Selection2Global__Type__Selection = (
            $: g_in.T.Global__Type__Selection,
            $p: {
                //'resolved siblings': pt.Lookup<g_out.T.Global__Type<null>>,
            },
        ) => g_out.T.Global__Type__Selection<null>

        /////////////////////////////////////

        const map_Atom: Map_Atom = ($) => {
            return {
                'type': {
                    'key': $.type.key,
                    'annotation': null,
                }
            }
        }

        // const map_Dictionary__Selection: Map_Dictionary_Selection = ($) => {
        //     return {
        //         'type': map_No__Context__Value__Selection2Type__Selection(
        //             $.type,
        //             {

        //             }
        //         ),
        //         'dictionary': null,
        //     }
        // }

        const map_Type2Type: Map_Type2Type = ($, $p) => {
            return {
                'type': pl.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'array': return pl.ss($, ($) => {
                            return ['array', {
                                'type': map_Type2Type(
                                    $.type,
                                    {
                                        'variables': $p.variables,
                                    },
                                )
                            }]
                        })
                        case 'component': return pl.ss($, ($): g_out.T.Type._ltype<null> => {
                            return ['component', {
                                'type': map_Global__Type__Selection2Global__Type__Selection(
                                    $.type,
                                    {

                                    }
                                ),
                                // 'context': pl.cc($.context, ($) => {
                                //     switch ($[0]) {
                                //         case 'import': return pl.ss($, ($) => ['import', {
                                //             'library': $.library,
                                //             'type': $.type,
                                //         }])
                                //         case 'resolved sibling': return pl.ss($, ($) => ['resolved sibling', {
                                //             'type': $.type,
                                //         }])
                                //         default: return pl.au($[0])
                                //     }
                                // }),
                                // 'type':pl.cc($.type, ($) => {
                                //     switch ($[0]) {
                                //         case '': return pl.ss($, ($) => pd.implementMe(`case`))
                                //         default: return pl.au($[0])
                                //     }
                                // }),
                            }]
                        })
                        case 'dictionary': return pl.ss($, ($): g_out.T.Type._ltype<null> => {
                            $.constraints.map(($) => {
                                pl.cc($, ($) => {
                                    switch ($[0]) {
                                        case 'dictionary': return pl.ss($, ($) => $.dictionary.type)
                                        default: return pl.au($[0])
                                    }
                                })
                            })
                            return ['dictionary', {
                                'constraints': {
                                    'annotation': null,
                                    'dictionary': pm.wrapRawDictionary({}),
                                    // 'dictionary': $.constraints.map(($): g_out.T.Type._ltype.dictionary.constraints.dictionary.D<null> => {
                                    //     switch ($[0]) {
                                    //         case 'dictionary': return pl.ss($, ($) => ['dictionary', {
                                    //             'dense': $.dense,
                                    //             'dictionary': map_Dictionary__Selection($.dictionary, {
                                    //             })
                                    //         }])
                                    //         default: return pl.au($[0])
                                    //     }
                                    //     // return {
                                    //     //     // 'type': map_Type_Selection(
                                    //     //     //     $['temp type'],
                                    //     //     //     $p,
                                    //     //     // ),
                                    //     // }
                                    // }),
                                },
                                'type': map_Type2Type(
                                    $.type,
                                    {
                                        'variables': pm.wrapRawDictionary({}),//FIXME
                                    },
                                ),
                                'key': map_Atom($.key)
                            }]
                        })
                        case 'group': return pl.ss($, ($): g_out.T.Type._ltype<null> => ['group', {
                            'properties': {
                                'annotation': null,
                                'dictionary': $.properties.map(($) => {
                                    return {
                                        'type': map_Type2Type(
                                            $.type,
                                            {
                                                'variables': pm.wrapRawDictionary({}),//FIXME
                                            },
                                        )
                                    }
                                })
                            }
                        }])
                        case 'nothing': return pl.ss($, ($): g_out.T.Type._ltype<null> => ['nothing', null])
                        case 'optional': return pl.ss($, ($): g_out.T.Type._ltype<null> => {
                            return ['optional', {
                                'type': map_Type2Type(
                                    $.type,
                                    {
                                        'variables': pm.wrapRawDictionary({}),//FIXME
                                    },
                                ),
                            }]
                        })
                        case 'state group': return pl.ss($, ($): g_out.T.Type._ltype<null> => ['state group', {
                            'states': {
                                'annotation': null,
                                'dictionary': $.states.map(($) => {
                                    return {
                                        'constraints': pm.wrapRawDictionary({}),
                                        // 'constraints': $.constraints.map(($) => {
                                        //     return {
                                        //         'type': map_No__Context__Value__Selection2Type__Selection(
                                        //             $.type,
                                        //             $p,
                                        //         ),
                                        //         'state': $.state
                                        //     }
                                        // }),
                                        'type': map_Type2Type(
                                            $.type,
                                            {
                                                'variables': pm.wrapRawDictionary({}),//FIXME
                                            },
                                        )
                                    }
                                })
                            }
                        }])
                        case 'atom': return pl.ss($, ($): g_out.T.Type._ltype<null> => ['atom', {
                            // 'constrained': pl.cc($.constrained, ($) => {
                            //     switch ($[0]) {
                            //         case 'no': return pl.ss($, ($) => ['no', null])
                            //         case 'yes': return pl.ss($, ($): g_out.T.Type._ltype.terminal.constrained<null> => {
                            //             return ['yes', {
                            //                 'type': pl.cc($['referencee type'], ($) => {
                            //                     switch ($[0]) {
                            //                         case 'lookup': return pl.ss($, ($) => {

                            //                             return map_Type_Selection(
                            //                                 $['temp type'],
                            //                                 $p,
                            //                             )
                            //                         })
                            //                         case 'resolved value': return pl.ss($, ($) => {
                            //                             //pd.logDebugMessage(`@@@@ ${$.selection.start.key}`)
                            //                             return map_Type_Selection(
                            //                                 $['temp type'],
                            //                                 $p,
                            //                             )
                            //                         })
                            //                         default: return pl.au($[0])
                            //                     }
                            //                 }),
                            //                 'computed': ['no', null]
                            //             }]
                            //         })
                            //         default: return pl.au($[0])
                            //     }
                            // }),
                            'atom': map_Atom($.atom),
                        }])
                        // case 'resolved reference': return pl.ss($, ($): g_out.T.Type._ltype<null> => ['resolved reference', {
                        //     'atom': map_Atom($.atom),
                        //     'value': ['dictionary', map_Dictionary__Selection(
                        //         $.dictionary,
                        //         {
                        //         }
                        //     )]
                        // }])
                        case 'resolved reference': return pl.ss($, ($): g_out.T.Type._ltype<null> => ['nothing', null])

                        default: return pl.au($[0])
                    }
                })
            }
        }

        // const map_Type_Selection_Tail: Map_Type_Selection_Tail = ($) => {
        //     return {
        //         'step type': pl.cc($['step type'], ($) => {
        //             switch ($[0]) {
        //                 case 'array': return pl.ss($, ($) => ['array', $])
        //                 case 'dictionary': return pl.ss($, ($) => ['dictionary', $])
        //                 case 'group': return pl.ss($, ($) => ['group', {
        //                     'annotation': $.annotation,
        //                     'content': {
        //                         'property': $.content.property
        //                     }
        //                 }])
        //                 case 'optional': return pl.ss($, ($) => ['optional', $])
        //                 case 'tagged union': return pl.ss($, ($) => ['tagged union', {
        //                     'annotation': $.annotation,
        //                     'content': {
        //                         'option': $.content.option
        //                     }
        //                 }])
        //                 default: return pl.au($[0])
        //             }
        //         }),
        //         'tail': mapOptional(
        //             $.tail,
        //             ($) => [true, map_Type_Selection_Tail($)]
        //         ),
        //     }
        // }

        // const map_No__Context__Value__Selection2Type__Selection: Map_No__Context__Value__Selection2Type__Selection = ($, $p) => {
        //     return {
        //         'import': x,
        //         'global type': x,
        //         'tail': x,
        //         // 'global type': map_Global_Type_Selection(
        //         //     $['global type'],
        //         //     $p,
        //         // ),
        //         // 'tail': mapOptional(
        //         //     $.tail,
        //         //     ($) => [true, map_Type_Selection_Tail($)]
        //         // ),
        //     }
        // }

        const map_Global__Type__Selection2Global__Type__Selection: Map_Global__Type__Selection2Global__Type__Selection = ($, $p) => {
            switch ($[0]) {
                case 'import': return pl.ss($, ($) => ['import', {
                    'library': {
                        'annotation': null,
                        'key': $.library.key,
                    },
                    'type': {
                        'annotation': null,
                        'key': $.type.key,
                    },
                }])
                case 'resolved sibling': return pl.ss($, ($) => ['resolved sibling', {
                    'type': {
                        'key': $.type.key,
                        'annotation': null,
                    },
                }])
                default: return pl.au($[0])
            }
        }

        const map_Type__Library2Type__Library: Map_Type__Library2Type__Library = ($, $p) => {
            return {
                'imports': {
                    'annotation': null,
                    'dictionary': $.imports.map($ => {
                        return {
                            'annotation': null,
                            'content': null,
                        }
                    }),
                },
                'atom types': {
                    'annotation': null,
                    'dictionary': $['atom types'].map(($): g_out.T.Atom__Types.dictionary.D<null> => {
                        return null
                    }),
                },
                'global types': {
                    'annotation': null,
                    'dictionary': $d.resolveDictionary<g_in.T.Global__Type, g_out.T.Global__Type<null>>($['global types'], {
                        'map': (($, $l) => {
                            return {
                                'type': map_Type2Type(
                                    $.value.type,
                                    {
                                        'variables': pm.wrapRawDictionary({}),//FIXME
                                        // 'variables': $.value.parameters.map(($) => {
                                        //     return {
                                        //         'import': x,
                                        //         'global type': x,
                                        //         'tail': x,
                                        //     }
                                        // })
                                    },
                                ),
                            }
                        })
                    })
                }
            }

        }
        return map_Type__Library2Type__Library($, {})
    }
}