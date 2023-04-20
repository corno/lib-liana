import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

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
                        $i.snippet($d.createIdentifier($.type.property.key))

                    })
                    break
                case 'optional':
                    pl.ss($, ($) => {
                        $i.snippet(`O`)

                    })
                    break
                case 'tagged union':
                    pl.ss($, ($) => {
                        $i.snippet($d.createIdentifier($.type.option.key))

                    })
                    break
                default: pl.au($[0])
            }
        })
    }
    function doValueSelection<Annotation>(
        $: g_liana.T.Value__Selection<Annotation>,
        $i: g_fp.SYNC.I.Line,
    ) {
        pl.cc($.start, ($) => {
            $i.snippet(`$v['${$.key}']`)
        })
        pl.cc($.tail, ($) => {
            $.__forEach(($) => {
                switch ($[0]) {
                    case 'tagged union':
                        pl.ss($, ($) => {
                            $i.snippet(`/*${$.option.key}*/`)
                        })
                        break
                    default: pl.au($[0])
                }
            })
        })

    }
    function doContainingDictionarySelection<Annotation>(
        $: g_liana.T.Containing__Dictionary__Selection<Annotation>,
        $i: g_fp.SYNC.I.Line,
    ) {
        switch ($[0]) {
            case 'parameter':
                pl.ss($, ($) => {
                    $i.snippet(`$x['${$.key}']`)
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
                    $i.snippet(`map_${$d.createIdentifier($.type.key)}<Annotation>($`)
                    $d.enrichedDictionaryForEach($.arguments, {
                        'onEmpty': () => {

                        },
                        'onNotEmpty': ($c) => {
                            $i.snippet(`, {`)
                            $i.indent(($i) => {
                                $c(($) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`'${$.key}': `)
                                        pl.cc($.value.type, ($) => {
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
                                        $i.snippet(`,`)
                                    })
                                })
                            })
                            $i.snippet(`}`)
                        }
                    })
                    $i.snippet(`)`)
                })
                break
            case 'dictionary':
                pl.ss($, ($) => {
                    const type = $.type
                    $i.snippet(`$.map(($) => `)
                    pl.cc($.key.constrained, ($) => {
                        switch ($[0]) {
                            case 'no':
                                pl.ss($, ($) => {
                                    doType(type, $x + `.D`, $i)
                                })
                                break
                            case 'yes':
                                pl.ss($, ($) => {
                                    $i.snippet(`pl.cc($, ($) => {`)
                                    $i.indent(($i) => {
                                        $i.nestedLine(($i) => {
                                            $i.snippet(`const constraint: pt.OptionalValue<`)
                                            doTypeSelection($['temp type path'], $i)
                                            $i.snippet(`.D<Annotation>`)
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
                                                    $i.snippet(`'type': pl.cc($.type, ($) => `)
                                                    doType(type, $x + `.D._ltype`, $i)
                                                    $i.snippet(`),`)
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
                    $i.snippet(`)`)
                })
                break
            case 'group':
                pl.ss($, ($) => {
                    $i.snippet(`pl.cc($, ($) => {`)
                    $i.indent(($i) => {
                        $.properties.__forEach(() => false, ($, key) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`const temp_${$d.createIdentifier(`${key}`)}: g_out.T.${$x}.${$d.createIdentifier(key)}<Annotation> = pl.cc($['${key}'], ($) => `)
                                doType($.type, $x + `.${$d.createIdentifier(key)}`, $i)
                                $i.snippet(`)`)
                            })
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
                                        $.properties.__forEach(() => false, ($, key) => {
                                            $i.nestedLine(($i) => {

                                                $i.snippet(`'${key}': temp_${$d.createIdentifier(`${key}`)},`)
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
                                $.options.__forEach(() => false, ($, key) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`case '${key}': return pl.ss($, ($) => ['${key}', `)
                                        const type = $.type
                                        $d.enrichedDictionaryForEach(
                                            $.constraints,
                                            {
                                                'onEmpty': () => {
                                                    doType($.type, $x + `.${$d.createIdentifier(key)}`, $i)
                                                },
                                                'onNotEmpty': ($c) => {

                                                    // $i.snippet(`pl.cc($, ($) => {`)
                                                    // $i.indent(($i) => {
                                                    //     $i.nestedLine(($i) => {
                                                    //         $i.snippet(`const constraint: pt.OptionalValue<`)
                                                    //         doTypeSelection($.type, $i)
                                                    //         $i.snippet(`<Annotation>`)
                                                    //         $i.snippet(`> = [false]`)
                                                    //     })
                                                    //     $i.nestedLine(($i) => {
                                                    //         $i.snippet(`return {`)
                                                    //         $i.indent(($i) => {
                                                    //             $i.nestedLine(($i) => {
                                                    //                 $i.snippet(`'annotation': $.annotation,`)
                                                    //             })
                                                    //             $i.nestedLine(($i) => {
                                                    //                 $i.snippet(`'constraint': constraint,`)
                                                    //             })
                                                    //             $i.nestedLine(($i) => {
                                                    //                 $i.snippet(`'type': pl.cc($.type, ($) => `)
                                                    //                 doType(type, $x + `.${$d.createIdentifier(key)}._ltype`, $i)
                                                    //                 $i.snippet(`),`)
                                                    //             })
                                                    //         })
                                                    //         $i.snippet(`}`)

                                                    //     })
                                                    // })
                                                    // $i.snippet(`})`)
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

        $['global types'].__forEach(() => false, ($, key) => {
            const gt_key = key
            $i.nestedLine(($i) => {
                $i.snippet(`function map_${$d.createIdentifier(key)}<Annotation>($: g_in.T.${$d.createIdentifier(key)}<Annotation>`)
                $d.enrichedDictionaryForEach($.parameters, {
                    'onEmpty': () => {

                    },
                    'onNotEmpty': ($c) => {
                        $i.snippet(`, $x: {`)
                        $i.indent(($i) => {
                            $c(($) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`'${$.key}': `)
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
                                })
                            })
                        })
                        $i.snippet(`}`)
                    }
                })
                $i.snippet(`): g_out.T.${$d.createIdentifier(key)}<Annotation> {`)
                $i.indent(($i) => {
                    $i.nestedLine(($i) => {

                        $i.snippet(`return `)
                        doType($.type, $d.createIdentifier(key), $i)
                    })
                })
                $i.snippet(`}`)
            })
            $d.enrichedDictionaryForEach($.results, {
                'onEmpty': () => {

                },
                'onNotEmpty': ($c) => {
                    $c(($) => {

                        $i.nestedLine(($i) => {
                            $i.snippet(`function select_${$d.createIdentifier(gt_key)}_${$d.createIdentifier($.key)}<Annotation>($: g_out.T.${$d.createIdentifier(key)}<Annotation>): g_out.T.${$d.createIdentifier($.value.type.key)}<Annotation> {`)
                            $i.indent(($i) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`return `)
                                    function doSelection(
                                        $: g_liana.T.Selection<Annotation>,
                                        $i: g_fp.SYNC.I.Line,
                                    ) {
                                        switch ($[0]) {
                                            case 'array':
                                                pl.ss($, ($) => {
                                                    $i.snippet(`pl.optional(`)
                                                    $i.indent(($i) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`$d.getLastElement($),`)
                                                        })
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`($) => `)
                                                            doSelection($['not empty'], $i)
                                                            $i.snippet(`,`)
                                                        })
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`() => `)
                                                            doSelection($.empty, $i)
                                                            $i.snippet(`,`)
                                                        })
                                                    })
                                                    $i.snippet(`)`)
                                                })
                                                break
                                            case 'component':
                                                pl.ss($, ($) => {
                                                    $i.snippet(`select_${$d.createIdentifier($['type name'])}($)`)
                                                })
                                                break
                                            case 'group':
                                                pl.ss($, ($) => {
                                                    $i.snippet(`pl.cc($['${$.property.key}'], ($) => `)
                                                    doSelection($.selection, $i)
                                                    $i.snippet(`)`)
                                                })
                                                break
                                            case 'reference':
                                                pl.ss($, ($) => {
                                                    $i.snippet(`$.constraint`)
                                                })
                                                break
                                            case 'tagged union':
                                                pl.ss($, ($) => {
                                                    $i.snippet(`pl.cc($, ($) => {`)
                                                    $i.indent(($i) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`switch ($[0]) {`)
                                                            $i.indent(($i) => {
                                                                $.__forEach(() => false, ($, key) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`case '${key}': return pl.ss($, ($) => `)
                                                                        doSelection($, $i)
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
                                            default: pl.au($[0])
                                        }
                                    }
                                    doSelection($.value.selection, $i)
                                })
                            })
                            $i.snippet(`}`)
                        })
                    })
                },
            })
        })
    }
}