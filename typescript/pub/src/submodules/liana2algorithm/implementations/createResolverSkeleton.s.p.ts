import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pt from 'pareto-core-types'

import * as g_liana from "../../liana"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.createResolverSkeleton = ($d) => {
    function doTypeSelection<Annotation>($: g_liana.T.Type__Selection<Annotation>, $i: g_fp.SYNC.I.Line) {
        $i.snippet(`g_out`)
        pl.optional(
            $['global type'].import,
            ($) => {
                $i.snippet(`_${$d.createIdentifier($.key)}`)
            },
            () => {

            }
        )
        $i.snippet(`.T.${$d.createIdentifier($['global type'].type.key)}`)
        $.tail.__forEach(($) => {
            $i.snippet(`.`)
            switch ($[0]) {
                case 'array':
                    pl.ss($, ($) => {
                        $i.snippet(`A`)
                    })
                    break
                case 'dictionary':
                    pl.ss($, ($) => {
                        $i.snippet(`D`)
                    })
                    break
                case 'group':
                    pl.ss($, ($) => {
                        $i.snippet($d.createIdentifier($.property.key))

                    })
                    break
                case 'optional':
                    pl.ss($, ($) => {
                        $i.snippet(`O`)

                    })
                    break
                case 'tagged union':
                    pl.ss($, ($) => {
                        $i.snippet($d.createIdentifier($.option.key))

                    })
                    break
                default: pl.au($[0])
            }
        })
    }
    function doValueSelectionTail<Annotation>(
        $: g_liana.T.Value__Selection__Tail<Annotation>,
        $i: g_fp.SYNC.I.Line,
    ) {
        pl.optional(
            $,
            ($) => {
                $i.snippet(`pl.optional(`)
                $i.indent(($i) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`$,`)
                    })
                    $i.nestedLine(($i) => {
                        $i.snippet(`($) => `)
                        pl.cc($['step type'], ($) => {
                            switch ($[0]) {
                                case 'component':
                                    pl.ss($, ($) => {
        
                                    })
                                    break
                                case 'group':
                                    pl.ss($, ($) => {
        
                                    })
                                    break
                                case 'reference':
                                    pl.ss($, ($) => {
                                    })
                                    break
                                case 'tagged union':
                                    pl.ss($, ($) => {
        
                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })
                        doValueSelectionTail($.tail, $i)
                        $i.snippet(`,`)
                    })
                    $i.nestedLine(($i) => {
                        $i.snippet(`() => [false],`)
                    })
                })
                $i.snippet(`)`)
            },
            () => {
                $i.snippet(`$`)
            }
        )
    }
    function doValueSelection<Annotation>(
        $: g_liana.T.Value__Selection<Annotation>,
        $i: g_fp.SYNC.I.Line,
    ) {
        
        // $i.snippet(`pl.optional(`)
        // $i.indent(($i) => {
        //     $i.nestedLine(($i) => {
        //         $i.snippet(`$v_${$d.createIdentifier($.start.key)},`)
        //     })
        //     $i.nestedLine(($i) => {
        //         $i.snippet(`($) => `)
        //         doValueSelectionTail($.tail, $i)
        //         $i.snippet(`,`)
        //     })
        //     $i.nestedLine(($i) => {
        //         $i.snippet(`() => [false],`)
        //     })
        // })
        // $i.snippet(`)`)

        
        $i.snippet(`pl.cc($v_${$d.createIdentifier($.start.key)}, ($) => `)
        doValueSelectionTail($.tail, $i)

    }
    function doContainingDictionarySelection<Annotation>(
        $: g_liana.T.Containing__Dictionary__Selection<Annotation>,
        $i: g_fp.SYNC.I.Line,
    ) {
        switch ($[0]) {
            case 'parameter':
                pl.ss($, ($) => {
                    $i.snippet(`$v_${$d.createIdentifier($.key)}`)
                })
                break
            case 'this':
                pl.ss($, ($) => {
                    $i.snippet(`FOOO`)

                })
                break
            default: pl.au($[0])
        }

    }
    function doType<Annotation>(
        $: g_liana.T.Type<Annotation>,
        $x: string,
        $i: g_fp.SYNC.I.Line,
    ) {
        switch ($[0]) {
            case 'array':
                pl.ss($, ($) => {
                    $i.snippet(`$.map(($) => `)
                    doType($.type, $x + ".A", $i)
                    $i.snippet(`)`)
                })
                break
            case 'component':
                pl.ss($, ($) => {
                    $i.snippet(`map_${$d.createIdentifier($.type.key)}<Annotation>(`)
                    $i.indent(($i) => {
                        $i.line(`$,`)
                        $d.dictionaryForEach($.arguments, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`/*$v_${$d.createIdentifier($.key)}: */`)
                                pl.cc($.value, ($) => {
                                    pl.cc($.type, ($) => {
                                        switch ($[0]) {
                                            case 'resolved value':
                                                pl.ss($, ($) => {
                                                    doValueSelection($, $i)
                                                })
                                                break
                                            case 'containing dictionary':
                                                pl.ss($, ($) => {
                                                    doContainingDictionarySelection($, $i)

                                                })
                                                break
                                            default: pl.au($[0])
                                        }
                                    })
                                })
                                $i.snippet(`,`)
                            })
                        })
                    })
                    $i.snippet(`)`)
                })
                break
            case 'dictionary':
                pl.ss($, ($) => {
                    const type = $.type
                    $i.snippet(`$.map(($) => `)
                    $d.enrichedDictionaryForEach($.constraints, {
                        'onEmpty': () => {
                            doType(type, $x + `.D`, $i)
                        },
                        'onNotEmpty': ($c) => {

                            $i.snippet(`pl.cc($, ($) => {`)
                            $i.indent(($i) => {
                                $c(($) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`const $v_${$d.createIdentifier($.key)}: `)
                                        doTypeSelection($.value['temp type path'], $i)
                                        $i.snippet(`<Annotation> = `)
                                        doValueSelection($.value.selection, $i)

                                    })
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`return {`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'annotation': $.annotation,`)
                                        })
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'constraints': {`)
                                            $i.indent(($i) => {
                                                $c(($) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`'${$.key}': $v_${$d.createIdentifier($.key)},`)
                                                        // doTypeSelection($['temp type path'], $i)

                                                    })
                                                })
                                            })
                                            $i.snippet(`},`)
                                        })
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`'type': pl.cc($.type, ($) => `)
                                            doType(type, $x + `.D._ltype`, $i)
                                            $i.snippet(`),`)
                                        })
                                    })
                                    $i.snippet(`}`)
                                })
                            })
                            $i.snippet(`})`)
                        }
                    })



                    $i.snippet(`)`)
                })
                break
            case 'group':
                pl.ss($, ($) => {
                    $i.snippet(`pl.cc($, ($) => {`)
                    $i.indent(($i) => {
                        //determine order
                        $d.sortTopologically($.properties, {
                            'map': ($) => $d.filter($.variables.map(($) => pl.cc($, ($) => {
                                switch ($[0]) {
                                    case 'dictionary constraint': return pl.ss($, ($) => [false])
                                    case 'option constraint': return pl.ss($, ($) => [false])
                                    case 'parameter': return pl.ss($, ($) => [false])
                                    case 'parent variable': return pl.ss($, ($) => [false])
                                    case 'sibling': return pl.ss($, ($) => [true, null])
                                    default: return pl.au($[0])
                                }
                            })))
                        }).__forEach(($) => {

                            $i.nestedLine(($i) => {
                                $i.snippet(`const $v_${$d.createIdentifier(`${$.key}`)}: g_out.T.${$x}.${$d.createIdentifier($.key)}<Annotation> = pl.cc($['${$.key}'], ($) => `)
                                doType($.value.type, $x + `.${$d.createIdentifier($.key)}`, $i)
                                $i.snippet(`)`)
                            })
                        })
                        $d.dictionaryForEach($.properties, ($) => {
                        })
                        $i.nestedLine(($i) => {
                            $i.snippet(`return `)
                            $d.enrichedDictionaryForEach($.properties, {
                                'onEmpty': () => {
                                    $i.snippet(`null`)
                                },
                                'onNotEmpty': ($c) => {
                                    $i.snippet(`{`)
                                    $i.indent(($i) => {
                                        $d.dictionaryForEach($.properties, ($) => {
                                            $i.nestedLine(($i) => {

                                                $i.snippet(`'${$.key}': $v_${$d.createIdentifier(`${$.key}`)},`)
                                            })
                                        })
                                    })
                                    $i.snippet(`}`)

                                }
                            })
                        })
                    })
                    $i.snippet(`})`)
                })
                break
            case 'optional':
                pl.ss($, ($) => {
                    $i.snippet(`pl.optional(`)
                    $i.indent(($i) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`$,`)
                        })
                        $i.nestedLine(($i) => {
                            $i.snippet(`($): g_out.T.${$x}<Annotation> => [true, `)
                            doType($.type, $x + `.O`, $i)
                            $i.snippet(`],`)
                        })
                        $i.nestedLine(($i) => {
                            $i.snippet(`() => [false],`)
                        })
                    })
                    $i.snippet(`)`)
                })
                break
            case 'tagged union':
                pl.ss($, ($) => {
                    $i.snippet(`pl.cc($, ($): g_out.T.${$x}<Annotation> => {`)
                    $i.indent(($i) => {
                        $i.nestedLine(($i) => {
                            $i.snippet(`switch ($[0]) {`)
                            $i.indent(($i) => {
                                $d.dictionaryForEach($.options, ($) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`case '${$.key}': return pl.ss($, ($) => ['${$.key}', `)
                                        const type = $.value.type
                                        const key = $.key
                                        $d.enrichedDictionaryForEach(
                                            $.value.constraints,
                                            {
                                                'onEmpty': () => {
                                                    doType(type, $x + `.${$d.createIdentifier(key)}`, $i)
                                                },
                                                'onNotEmpty': ($c) => {

                                                    $i.snippet(`pl.cc($, ($) => {`)
                                                    $i.indent(($i) => {
                                                        $c(($) => {
                                                            $i.nestedLine(($i) => {
                                                                $i.snippet(`const $v_${$d.createIdentifier($.key)}: `)
                                                                doTypeSelection($.value['type'], $i)
                                                                $i.snippet(`.${$d.createIdentifier($.value.option.key)}<Annotation> = pl.cc($, ($) => {`)
                                                                $i.indent(($i) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`const x: pt.OptionalValue<`)
                                                                        doTypeSelection($.value['type'], $i)
                                                                        $i.snippet(`<Annotation>> = `)
                                                                        doValueSelection($.value.selection, $i)
                                                                    })
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`return pl.optional(`)
                                                                        $i.indent(($i) => {
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`x,`)
                                                                            })
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`($) => {`)
                                                                                $i.indent(($i) => {
                                                                                    $i.nestedLine(($i) => {
                                                                                        $i.snippet(`if ($[0] === '${$.value.option.key}') {`)
                                                                                        $i.indent(($i) => {
                                                                                            $i.nestedLine(($i) => {
                                                                                                $i.snippet(`return [true, $[1]]`)
                                                                                            })
                                                                                        })
                                                                                        $i.snippet(`} else {`)
                                                                                        $i.indent(($i) => {
                                                                                            $i.nestedLine(($i) => {
                                                                                                $i.snippet(`$se.error("option constraint")`)
                                                                                            })
                                                                                            $i.nestedLine(($i) => {
                                                                                                $i.snippet(`return [false]`)
                                                                                            })
                                                                                        })
                                                                                        $i.snippet(`}`)
                                                                                    })

                                                                                })
                                                                                $i.snippet(`},`)
                                                                            })
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`() => [false],`)
                                                                            })
                                                                        })
                                                                        $i.snippet(`)`)
                                                                    })
                                                                })
                                                                $i.snippet(`})`)
                                                                $.value.selection

                                                            })
                                                        })
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`return {`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'annotation': $.annotation,`)
                                                                })
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'constraints': {`)
                                                                    $i.indent(($i) => {
                                                                        $c(($) => {
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`'${$.key}': $v_${$d.createIdentifier($.key)},`)
                                                                                // doTypeSelection($['temp type path'], $i)

                                                                            })
                                                                        })
                                                                    })
                                                                    $i.snippet(`},`)
                                                                })
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'type': pl.cc($.type, ($) => `)
                                                                    doType(type, $x + `.${$d.createIdentifier(key)}._ltype`, $i)
                                                                    $i.snippet(`),`)
                                                                })
                                                            })
                                                            $i.snippet(`}`)

                                                        })
                                                    })
                                                    $i.snippet(`})`)
                                                }
                                            }
                                        )
                                        $i.snippet(`]`)
                                        $i.snippet(`)`)

                                    })
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`default: return pl.au($[0])`)

                                })
                            })
                            $i.snippet(`}`)
                        })
                    })
                    $i.snippet(`})`)
                })
                break
            case 'terminal':
                pl.ss($, ($) => {
                    pl.cc($.constrained, ($) => {
                        switch ($[0]) {
                            case 'no':
                                pl.ss($, ($) => {
                                    $i.snippet(`$`)
                                })
                                break
                            case 'yes':
                                pl.ss($, ($) => {
                                    $i.snippet(`pl.cc($, ($) => {`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`const constraint: pt.OptionalValue<`)
                                            doTypeSelection($['temp type path'], $i)
                                            $i.snippet(`.D`)
                                            $i.snippet(`<Annotation>`)
                                            $i.snippet(`> = [false]`)
                                        })
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`return {`)
                                            $i.indent(($i) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`'annotation': $.annotation,`)
                                                })
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`'constraint': constraint,`)
                                                })
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`'key': $.key,`)
                                                })
                                            })
                                            $i.snippet(`}`)

                                        })
                                    })
                                    $i.snippet(`})`)
                                })
                                break
                            default: pl.au($[0])
                        }
                    })
                })
                break
            default: pl.au($[0])
        }
    }
    return <Annotation>($: g_liana.T.Type__Library<Annotation>, $i: g_fp.SYNC.I.Block) => {
        $i.line(`import * as pl from 'pareto-core-lib'`)
        $i.line(`import * as pm from 'pareto-core-map'`)
        $i.line(`import * as pt from 'pareto-core-types'`)
        $i.line(``)
        $i.line(`import * as g_in from ".."`)
        $i.line(`import * as g_out from ".."`)
        $i.line(``)

        $d.dictionaryForEach($['global types'], ($) => {
            const gt_key = $.key
            $i.nestedLine(($i) => {
                $i.snippet(`function map_${$d.createIdentifier($.key)}<Annotation>(`)
                $i.indent(($i) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`$: g_in.T.${$d.createIdentifier($.key)}<Annotation>,`)
                    })
                    pl.cc($.value, ($) => {
                        $d.dictionaryForEach($.parameters, ($) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`$v_${$d.createIdentifier($.key)}: `)
                                pl.cc($.value.type, ($) => {
                                    switch ($[0]) {
                                        case 'siblings':
                                            pl.ss($, ($) => {
                                                const type = $.type
                                                pl.cc($.kind, ($) => {
                                                    switch ($[0]) {
                                                        case 'cyclic':
                                                            pl.ss($, ($) => {
                                                                $i.snippet(`pt.Lookup<pt.ComputedValue<`)
                                                                doTypeSelection(type, $i)
                                                                $i.snippet(`.D<Annotation>>>`)

                                                            })
                                                            break
                                                        case 'non cyclic':
                                                            pl.ss($, ($) => {
                                                                $i.snippet(`pt.Lookup<`)
                                                                doTypeSelection(type, $i)
                                                                $i.snippet(`.D<Annotation>>`)

                                                            })
                                                            break
                                                        default: pl.au($[0])
                                                    }
                                                })
                                            })
                                            break
                                        case 'resolved value':
                                            pl.ss($, ($) => {
                                                $i.snippet(`pt.OptionalValue<`)
                                                function x() {

                                                    $i.snippet(`g_out`)
                                                    pl.optional(
                                                        $.type.import,
                                                        ($) => {
                                                            $i.snippet(`_${$d.createIdentifier($.key)}`)
                                                        },
                                                        () => {

                                                        }
                                                    )
                                                    $i.snippet(`.T.${$d.createIdentifier($['type'].type.key)}<Annotation>`)
                                                }
                                                pl.cc($.optional, ($) => {
                                                    switch ($[0]) {
                                                        case 'no':
                                                            pl.ss($, ($) => {
                                                                x()
                                                            })
                                                            break
                                                        case 'yes':
                                                            pl.ss($, ($) => {
                                                                $i.snippet(`pt.OptionalValue<`)
                                                                x()
                                                                $i.snippet(`>`)
                                                            })
                                                            break
                                                        default: pl.au($[0])
                                                    }
                                                })
                                                $i.snippet(`>`)

                                            })
                                            break
                                        default: pl.au($[0])
                                    }
                                })
                                $i.snippet(`,`)
                            })
                        })

                    })
                })
                $i.snippet(`): g_out.T.${$d.createIdentifier($.key)}<Annotation> {`)
                $i.indent(($i) => {
                    $i.nestedLine(($i) => {

                        $i.snippet(`return `)
                        doType($.value.type, $d.createIdentifier($.key), $i)
                    })
                })
                $i.snippet(`}`)
            })
            // $d.enrichedDictionaryForEach($.results, {
            //     'onEmpty': () => {

            //     },
            //     'onNotEmpty': ($c) => {
            //         $c(($) => {

            //             $i.nestedLine(($i) => {
            //                 $i.snippet(`function select_${$d.createIdentifier(gt_key)}_${$d.createIdentifier($.key)}<Annotation>($: g_out.T.${$d.createIdentifier(key)}<Annotation>): g_out.T.${$d.createIdentifier($.value.type.key)}<Annotation> {`)
            //                 $i.indent(($i) => {
            //                     $i.nestedLine(($i) => {
            //                         $i.snippet(`return `)
            //                         function doSelection(
            //                             $: g_liana.T.Selection<Annotation>,
            //                             $i: g_fp.SYNC.I.Line,
            //                         ) {
            //                             switch ($[0]) {
            //                                 case 'array':
            //                                     pl.ss($, ($) => {
            //                                         $i.snippet(`pl.optional(`)
            //                                         $i.indent(($i) => {
            //                                             $i.nestedLine(($i) => {
            //                                                 $i.snippet(`$d.getLastElement($),`)
            //                                             })
            //                                             $i.nestedLine(($i) => {
            //                                                 $i.snippet(`($) => `)
            //                                                 doSelection($['not empty'], $i)
            //                                                 $i.snippet(`,`)
            //                                             })
            //                                             $i.nestedLine(($i) => {
            //                                                 $i.snippet(`() => `)
            //                                                 doSelection($.empty, $i)
            //                                                 $i.snippet(`,`)
            //                                             })
            //                                         })
            //                                         $i.snippet(`)`)
            //                                     })
            //                                     break
            //                                 case 'component':
            //                                     pl.ss($, ($) => {
            //                                         $i.snippet(`select_${$d.createIdentifier($['type name'])}($)`)
            //                                     })
            //                                     break
            //                                 case 'group':
            //                                     pl.ss($, ($) => {
            //                                         $i.snippet(`pl.cc($['${$.property.key}'], ($) => `)
            //                                         doSelection($.selection, $i)
            //                                         $i.snippet(`)`)
            //                                     })
            //                                     break
            //                                 case 'reference':
            //                                     pl.ss($, ($) => {
            //                                         $i.snippet(`$.constraint`)
            //                                     })
            //                                     break
            //                                 case 'tagged union':
            //                                     pl.ss($, ($) => {
            //                                         $i.snippet(`pl.cc($, ($) => {`)
            //                                         $i.indent(($i) => {
            //                                             $i.nestedLine(($i) => {
            //                                                 $i.snippet(`switch ($[0]) {`)
            //                                                 $i.indent(($i) => {
            //                                                     $.__forEach(() => false, ($, key) => {
            //                                                         $i.nestedLine(($i) => {
            //                                                             $i.snippet(`case '${key}': return pl.ss($, ($) => `)
            //                                                             doSelection($, $i)
            //                                                             $i.snippet(`)`)

            //                                                         })
            //                                                     })
            //                                                     $i.nestedLine(($i) => {
            //                                                         $i.snippet(`default: return pl.au($[0])`)

            //                                                     })
            //                                                 })
            //                                                 $i.snippet(`}`)
            //                                             })
            //                                         })
            //                                         $i.snippet(`})`)
            //                                     })
            //                                     break
            //                                 default: pl.au($[0])
            //                             }
            //                         }
            //                         doSelection($.value.selection, $i)
            //                     })
            //                 })
            //                 $i.snippet(`}`)
            //             })
            //         })
            //     },
            // })
        })
    }
}