import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_liana from "../../liana"
import * as g_fp from "lib-fountain-pen"
import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createResolver = ($d) => {
    function doGlobalTypeSelection<Annotation>($: g_liana.T.Global__Type__Selection<Annotation>, $i: g_fp.SYNC.I.Line) {
        $i.snippet(`g_out`)
        pl.optional(
            $.import,
            ($) => {
                $i.snippet(`_${$d.createIdentifier($.key)}`)
            },
            () => {

            }
        )
        $i.snippet(`.T.${$d.createIdentifier($.type.key)}`)
    }
    function doTempTypeSelectionTail<Annotation>($: g_liana.T.Temp__Type__Selection__Tail<Annotation>, $i: g_fp.SYNC.I.Line) {
        $i.snippet(`.`)
        pl.cc($['step type'], ($) => {
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
                        $i.snippet($d.createIdentifier($.content.property.key))

                    })
                    break
                case 'optional':
                    pl.ss($, ($) => {
                        $i.snippet(`O`)

                    })
                    break
                case 'tagged union':
                    pl.ss($, ($) => {
                        $i.snippet($d.createIdentifier($.content.option.key))

                    })
                    break
                default: pl.au($[0])
            }
        })
        pl.optional(
            $.tail,
            ($) => {
                doTempTypeSelectionTail($, $i)
            },
            () => {

            }
        )
    }
    function doTempTypeSelection<Annotation>($: g_liana.T.Temp__Type__Selection<Annotation>, $i: g_fp.SYNC.I.Line) {
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
        pl.optional(
            $.tail,
            ($) => {
                doTempTypeSelectionTail($, $i)
            },
            () => {

            }
        )
    }
    // function doOptionalValueSelectionTail<Annotation>(
    //     $: g_liana.T.Optional__Value__Selection__Tail<Annotation>,
    //     $i: g_fp.SYNC.I.Line,
    //     $c: ($i: g_fp.SYNC.I.Line,) => void,
    // ) {


    function doValueSelectionTail<Annotation>(
        $: g_liana.T.Value__Selection__Tail<Annotation>,
        $i: g_fp.SYNC.I.Line,
        $c: ($i: g_fp.SYNC.I.Line,) => void,
    ) {
        const tail = $.tail
        function doResult($i: g_fp.SYNC.I.Line) {
            $i.snippet(`tempoptional(`)
            $i.indent(($i) => {
                $i.nestedLine(($i) => {
                    $i.snippet(`$.result,`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`($) => `)
                    pl.optional(
                        $.tail,
                        ($) => {
                            doValueSelectionTail($, $i, $c)
                        },
                        () => {
                            $c($i)
                        }
                    )
                    $i.snippet(`,`)
                })
                $i.nestedLine(($i) => {
                    $i.snippet(`() => [false],`)
                })
            })
            $i.snippet(`)`)

        }
        pl.cc($['step type'], ($) => {
            switch ($[0]) {
                case 'component':
                    pl.ss($, ($) => {
                        doResult($i)
                    })
                    break
                case 'group':
                    pl.ss($, ($) => {
                        const prop = $.content.property
                        $i.snippet(`pl.cc($['${prop.key}'], ($) => `)


                        pl.optional(
                            tail,
                            ($) => {
                                doValueSelectionTail($, $i, $c)
                            },
                            () => {
                                $c($i)
                            }
                        )
                        $i.snippet(`)`)
                    })
                    break
                case 'reference':
                    pl.ss($, ($) => {
                        $i.snippet(`tempoptional/*1*/(`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`$.constraint,`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`($) => `)


                                pl.optional(
                                    tail,
                                    ($) => {
                                        doValueSelectionTail($, $i, $c)
                                    },
                                    () => {
                                        $c($i)
                                    }
                                )
                                $i.snippet(`,`)
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
                        doResult($i)
                    })
                    break
                case 'optional':
                    pl.ss($, ($) => {
                        doResult($i)
                    })
                    break
                case 'nothing':
                    pl.ss($, ($) => {
                        doResult($i)
                    })
                    break
                default: pl.au($[0])
            }
        })
    }
    function doValueSelection<Annotation>(
        $: g_liana.T.Value__Selection<Annotation>,
        $i: g_fp.SYNC.I.Line,
        $c: ($i: g_fp.SYNC.I.Line,) => void,
    ) {
        const start = $.start
        $i.snippet(`tempoptional/*3*/(`)
        $i.indent(($i) => {
            $i.nestedLine(($i) => {
                $i.snippet(`$v_${$d.createIdentifier(start.key)},`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`($) => `)
                pl.optional(
                    $.tail,
                    ($) => {
                        doValueSelectionTail($, $i, $c)
                    },
                    () => {
                        $c($i)
                    }
                )
                $i.snippet(`,`)
            })
            $i.nestedLine(($i) => {
                $i.snippet(`() => [false],`)
            })
        })
        $i.snippet(`)`)
    }
    function doAnyValueSelection<Annotation>(
        $: g_liana.T.Any__Value__Selection<Annotation>,
        $i: g_fp.SYNC.I.Line,
        $c: ($i: g_fp.SYNC.I.Line,) => void,
    ) {
        const start = $.start
        const tail = $.tail
        pl.optional(
            $.start,
            ($) => {
                const start = $
                $i.snippet(`tempoptional/*3*/(`)
                $i.indent(($i) => {
                    $i.nestedLine(($i) => {
                        $i.snippet(`$v_${$d.createIdentifier(start.key)},`)
                    })
                    $i.nestedLine(($i) => {
                        $i.snippet(`($) => `)
                        pl.optional(
                            tail,
                            ($) => {
                                doValueSelectionTail($, $i, $c)
                            },
                            () => {
                                $c($i)
                            }
                        )
                        $i.snippet(`,`)
                    })
                    $i.nestedLine(($i) => {
                        $i.snippet(`() => [false],`)
                    })
                })
                $i.snippet(`)`)
            },
            () => {
                pl.optional(
                    $.tail,
                    ($) => {
                        doValueSelectionTail($, $i, $c)
                    },
                    () => {
                        $c($i)
                    }
                )
            },
        )
    }
    function doLookupSelection<Annotation>(
        $: g_liana.T.Lookup__Selection<Annotation>,
        $i: g_fp.SYNC.I.Line,
    ) {
        switch ($[0]) {
            case 'resolved dictionary':
                pl.ss($, ($) => {
                    doValueSelection($, $i, ($i) => {
                        $i.snippet(`XXXXXXXXXXX`)
                    })
                })
                break
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
        typePath: string,
        $i: g_fp.SYNC.I.Line,
    ) {
        pl.cc($.type, ($) => {
            switch ($[0]) {
                case 'array':
                    pl.ss($, ($) => {
                        $i.snippet(`$.map(($) => `)
                        doType($.type, typePath + ".A", $i)
                        $i.snippet(`)`)
                    })
                    break
                case 'nothing':
                    pl.ss($, ($) => {
                        $i.snippet(`null/*????*/`)
                    })
                    break
                case 'component':
                    pl.ss($, ($) => {
                        pl.cc($.context, ($) => {
                            switch ($[0]) {
                                case 'import':
                                    pl.ss($, ($) => {
                                        pd.implementMe("???!! IMPORT")
                                    })
                                    break
                                case 'resolved sibling':
                                    pl.ss($, ($) => {
                                        $i.snippet(`map_${$d.createIdentifier($.type.key)}<Annotation>(`)
                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })
                        $i.indent(($i) => {
                            $i.line(`$,`)
                            $d.dictionaryForEach($.arguments, ($) => {
                                $i.nestedLine(($i) => {
                                    pl.cc($.value, ($) => {
                                        pl.cc($.content.type, ($) => {
                                            switch ($[0]) {
                                                case 'resolved value':
                                                    pl.ss($, ($) => {
                                                        doValueSelection($, $i, ($i) => {
                                                            $i.snippet(`[true, $]`)
                                                        })
                                                    })
                                                    break
                                                case 'lookup':
                                                    pl.ss($, ($) => {
                                                        doLookupSelection($, $i)

                                                    })
                                                    break
                                                default: pl.au($[0])
                                            }
                                        })
                                    })
                                    $i.snippet(`,`)
                                    $i.snippet(`//$v_${$d.createIdentifier($.key)}`)
                                })
                            })
                        })
                        $i.snippet(`)`)
                    })
                    break
                case 'dictionary':
                    pl.ss($, ($) => {
                        const type = $.type
                        $i.snippet(`$d.resolveDictionary<g_in.T.${typePath}.D<Annotation>, g_out.T.${typePath}.D<Annotation>>($, { 'map': ($, $l) => `)
                        $d.enrichedDictionaryForEach($.constraints, {
                            'onEmpty': () => {
                                $i.snippet(`pl.cc($.value, ($) => `)
                                doType(type, typePath + `.D`, $i)
                                $i.snippet(`)`)

                            },
                            'onNotEmpty': ($c) => {
                                $i.snippet(`{`)
                                $i.indent(($i) => {
                                    $i.line(`const entrykey = $.key`)
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`return pl.cc($.value, ($) => {`)
                                        $i.indent(($i) => {
                                            $c(($) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`const /*dict constraint*/$v_${$d.createIdentifier($.key)}: pt.OptionalValue<`)
                                                    doTempTypeSelection($.value['temp type'], $i)
                                                    $i.snippet(`.D<Annotation>> = `)
                                                    doValueSelection($.value.selection, $i, ($i) => {
                                                        $i.snippet(`$.__getEntry<`)
                                                        $i.snippet(`pt.OptionalValue<`)
                                                        doTempTypeSelection($.value['temp type'], $i)
                                                        $i.snippet(`.D`)
                                                        $i.snippet(`<Annotation>`)
                                                        $i.snippet(`>`)
                                                        $i.snippet(`>(`)
                                                        $i.indent(($i) => {
                                                            $i.nestedLine(($i) => {
                                                                $i.snippet(`entrykey,`)
                                                            })
                                                            $i.nestedLine(($i) => {
                                                                $i.snippet(`($) => [true, $],`)
                                                            })
                                                            $i.nestedLine(($i) => {
                                                                $i.snippet(`() => {`)
                                                                $i.indent(($i) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`$se.error("no such entry")`)
                                                                    })
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`return [false]`)
                                                                    })
                                                                })
                                                                $i.snippet(`},`)
                                                            })
                                                        })
                                                        $i.snippet(`)`)
                                                    })

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
                                                        $i.snippet(`'content': pl.cc($.content, ($) => `)
                                                        doType(type, typePath + `.D.content`, $i)
                                                        $i.snippet(`),`)
                                                    })
                                                })
                                                $i.snippet(`}`)
                                            })
                                        })
                                        $i.snippet(`})`)
                                    })
                                })
                                $i.snippet(`}`)
                            }
                        })



                        $i.snippet(`})`)
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
                                        //case 'lookup': return pl.ss($, ($) => [true, null])
                                        default: return pl.au($[0])
                                    }
                                })))
                            }).__forEach(($) => {

                                $i.nestedLine(($i) => {
                                    $i.snippet(`const $p_${$d.createIdentifier(`${$.key}`)}: g_out.T.${typePath}.${$d.createIdentifier($.key)}<Annotation> = pl.cc($['${$.key}'], ($) => `)
                                    doType($.value.type, typePath + `.${$d.createIdentifier($.key)}`, $i)
                                    $i.snippet(`)`)
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`const $v_${$d.createIdentifier(`${$.key}`)}: pt.OptionalValue<g_out.T.${typePath}.${$d.createIdentifier($.key)}<Annotation>> = [true, $p_${$d.createIdentifier(`${$.key}`)}]`)
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

                                                    $i.snippet(`'${$.key}': $p_${$d.createIdentifier(`${$.key}`)},`)
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
                        function doOpt(typePath: string, $i: g_fp.SYNC.I.Line) {

                            $i.snippet(`tempoptional/*4*/(`)
                            $i.indent(($i) => {
                                $i.nestedLine(($i) => {
                                    $i.snippet(`$,`)
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`($): g_out.T.${typePath}<Annotation> => [true, `)
                                    doType($.type, typePath + `.O`, $i)
                                    $i.snippet(`],`)
                                })
                                $i.nestedLine(($i) => {
                                    $i.snippet(`() => [false],`)
                                })
                            })
                            $i.snippet(`)`)
                        }
                        pl.optional(
                            $.result,
                            ($) => {
                                $i.snippet(`pl.cc($, ($) => { //optional with result`)
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`const content: g_out.T.${typePath}.content<Annotation> = `)
                                        doOpt(`${typePath}.content`, $i)
                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`return {`)
                                        $i.indent(($i) => {
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`'content': content,`)
                                            })
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`'result': tempoptional(`)
                                                $i.indent(($i) => {
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`content,`)
                                                    })
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`($) => `)


                                                        doAnyValueSelection($.set, $i, ($i) => {
                                                            $i.snippet(`[true, $]`)
                                                        })
                                                        $i.snippet(`,`)
                                                    })
                                                    $i.nestedLine(($i) => {
                                                        $i.snippet(`() => `)
                                                        doValueSelection($['not set'], $i, ($i) => {
                                                            $i.snippet(`[true, $]`)
                                                        })
                                                        $i.snippet(`,`)
                                                    })
                                                })
                                                $i.snippet(`),`)
                                            })
                                        })
                                        $i.snippet(`}`)
                                    })
                                })
                                $i.snippet(`})`)
                            },
                            () => {
                                doOpt(`${typePath}`, $i)
                            }
                        )
                    })
                    break
                case 'tagged union':
                    pl.ss($, ($) => {
                        const tuResult = $.result
                        $i.snippet(`pl.cc($, ($): g_out.T.${typePath}<Annotation> => {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`switch ($[0]) {`)
                                $i.indent(($i) => {
                                    $d.dictionaryForEach($.options, ($) => {
                                        const type = $.value.type
                                        const constraints = $.value.constraints
                                        const key = $.key
                                        $i.nestedLine(($i) => {
                                            function doConstraints(typePath: string, $i: g_fp.SYNC.I.Block) {
                                                $d.dictionaryForEach(
                                                    $.value.constraints,
                                                    ($) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`const /*option constraint*/$v_${$d.createIdentifier($.key)}: pt.OptionalValue<`)
                                                            doTempTypeSelection($.value['temp type'], $i)
                                                            $i.snippet(`.${$d.createIdentifier($.value.option.key)}<Annotation>> = pl.cc($, ($) => {`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`const optConstraint: pt.OptionalValue<`)
                                                                    doTempTypeSelection($.value['temp type'], $i)
                                                                    $i.snippet(`.${$d.createIdentifier($.value.option.key)}<Annotation>> = `)
                                                                    doValueSelection($.value.selection, $i, ($i) => {
                                                                        $i.snippet(`($[0] === '${$.value.option.key}')`)
                                                                        $i.indent(($i) => {
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`? [true, $[1]]`)
                                                                            })
                                                                        })
                                                                        $i.indent(($i) => {
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`: pl.cc($, ($) => {`)
                                                                                $i.indent(($i) => {
                                                                                    $i.nestedLine(($i) => {
                                                                                        $i.snippet(`$se.error("option constraint")`)
                                                                                    })
                                                                                    $i.nestedLine(($i) => {
                                                                                        $i.snippet(`return [false]`)
                                                                                    })
                                                                                })
                                                                                $i.snippet(`})`)
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`return optConstraint`)
                                                                })
                                                            })
                                                            $i.snippet(`})`)
                                                            $.value.selection

                                                        })
                                                    }
                                                )
                                            }
                                            function doTU(typePath: string, $i: g_fp.SYNC.I.Line) {
                                                $d.enrichedDictionaryForEach(
                                                    $.value.constraints,
                                                    {
                                                        'onEmpty': () => {
                                                            doType(type, typePath, $i)
                                                        },
                                                        'onNotEmpty': ($c) => {

                                                            $i.snippet(`pl.cc($, ($) => {`)
                                                            $i.indent(($i) => {
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
                                                                            $i.snippet(`'content': pl.cc($.content, ($) => `)
                                                                            doType(type, typePath + `.content`, $i)
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
                                            }
                                            $i.snippet(`case '${$.key}': return pl.ss($, ($) => `)
                                            pl.optional(
                                                $.value.result,
                                                ($) => {
                                                    $i.snippet(`{ //option with result`)
                                                    $i.indent(($i) => {
                                                        doConstraints(typePath, $i)

                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`const stateData: g_out.T.${typePath}.content.${$d.createIdentifier(key)}<Annotation> = `)
                                                            doTU(`${typePath}.content.${$d.createIdentifier(key)}`, $i)
                                                        })
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`return {`)
                                                            $i.indent(($i) => {
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'content': ['${key}', stateData],`)
                                                                })
                                                                $i.nestedLine(($i) => {
                                                                    $i.snippet(`'result': pl.cc(stateData${$d.isEmpty(constraints) ? `` : `.content`}, ($): `)
                                                                    pl.optional(
                                                                        tuResult,
                                                                        ($) => {
                                                                            $i.snippet(`pt.OptionalValue<`)
                                                                            doGlobalTypeSelection($, $i)
                                                                            $i.snippet(`<Annotation>>`)
                                                                        },
                                                                        () => {
                                                                            pl.panic(`tagged union has no result`)
                                                                        }
                                                                    )
                                                                    $i.snippet(` => `)
                                                                    doAnyValueSelection($, $i, ($i) => {
                                                                        $i.snippet(`[true, $]`)
                                                                    })
                                                                    $i.snippet(`),`)
                                                                })
                                                            })
                                                            $i.snippet(`}`)
                                                        })
                                                    })
                                                    $i.snippet(`}`)
                                                },
                                                () => {
                                                    if ($d.isEmpty($.value.constraints)) {
                                                        $i.snippet(`['${$.key}', `)
                                                        doTU(`${typePath}.${$d.createIdentifier(key)}`, $i)
                                                        $i.snippet(`]`)

                                                    } else {
                                                        $i.snippet(`{`)
                                                        $i.indent(($i) => {
                                                            doConstraints(typePath, $i)
                                                            $i.nestedLine(($i) => {
                                                                $i.snippet(`return `)
                                                                $i.snippet(`['${$.key}', `)
                                                                doTU(`${typePath}.${$d.createIdentifier(key)}`, $i)
                                                                $i.snippet(`]`)
                                                            })
                                                        })
                                                        $i.snippet(`}`)

                                                    }
                                                }
                                            )
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
                                                $i.snippet(`const refkey = $.key`)
                                            })
                                            $i.nestedLine(($i) => {
                                                pl.cc($['referencee type'], ($) => {
                                                    switch ($[0]) {
                                                        case 'resolved value':
                                                            pl.ss($, ($) => {

                                                                function type($i: g_fp.SYNC.I.Line) {

                                                                    $i.snippet(`pt.OptionalValue<`)
                                                                    doTempTypeSelection($['temp type'], $i)
                                                                    $i.snippet(`.D`)
                                                                    $i.snippet(`<Annotation>`)
                                                                    $i.snippet(`>`)
                                                                }
                                                                $i.snippet(`const constraint: `)
                                                                type($i)
                                                                $i.snippet(` = `)
                                                                const sel = $.selection
                                                                doValueSelection($.selection, $i, ($i) => {

                                                                    $i.snippet(`$.__getEntry<`)
                                                                    type($i)
                                                                    $i.snippet(`>(`)
                                                                    $i.indent(($i) => {
                                                                        $i.nestedLine(($i) => {
                                                                            $i.snippet(`refkey,`)
                                                                        })
                                                                        $i.nestedLine(($i) => {
                                                                            $i.snippet(`($) => [true, $],`)
                                                                        })
                                                                        $i.nestedLine(($i) => {
                                                                            $i.snippet(`() => {`)
                                                                            $i.indent(($i) => {
                                                                                $i.nestedLine(($i) => {
                                                                                    $i.snippet(`$se.error("no such entry")`)
                                                                                })
                                                                                $i.nestedLine(($i) => {
                                                                                    $i.snippet(`return [false]`)
                                                                                })
                                                                            })
                                                                            $i.snippet(`},`)
                                                                        })
                                                                    })
                                                                    $i.snippet(`)`)
                                                                })
                                                            })
                                                            break
                                                        case 'lookup':
                                                            pl.ss($, ($) => {
                                                                function type($i: g_fp.SYNC.I.Line) {

                                                                    $i.snippet(`pt.OptionalValue<`)
                                                                    doTempTypeSelection($['temp type'], $i)
                                                                    $i.snippet(`.D`)
                                                                    $i.snippet(`<Annotation>`)
                                                                    $i.snippet(`>`)
                                                                }
                                                                $i.snippet(`const constraint: `)
                                                                type($i)
                                                                $i.snippet(` = $l['non circular siblings'].__getEntry<`)
                                                                type($i)
                                                                $i.snippet(`>(`)
                                                                $i.indent(($i) => {
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`refkey,`)
                                                                    })
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`($) => [true, $],`)
                                                                    })
                                                                    $i.nestedLine(($i) => {
                                                                        $i.snippet(`() => {`)
                                                                        $i.indent(($i) => {
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`$se.error("no such entry")`)
                                                                            })
                                                                            $i.nestedLine(($i) => {
                                                                                $i.snippet(`return [false]`)
                                                                            })
                                                                        })
                                                                        $i.snippet(`},`)
                                                                    })
                                                                })
                                                                $i.snippet(`)`)
                                                            })
                                                            break
                                                        default: pl.au($[0])
                                                    }
                                                })
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

        })
    }
    return <Annotation>($: g_this.T.CreateResolverParameters<Annotation>, $i: g_fp.SYNC.I.Block) => {
        $i.line(`import * as pl from 'pareto-core-lib'`)
        $i.line(`import * as pm from 'pareto-core-map'`)
        $i.line(`import * as pt from 'pareto-core-types'`)
        $i.line(``)
        $i.line(`import * as g_in from "${$.in}"`)
        $i.line(`import * as g_out from "${$.out.root}"`)
        $.out.subs.__forEach(() => false, ($, key) => {
            $i.line(`import * as g_out_${$d.createIdentifier(key)} from "${$}"`)
        })
        $i.line(``)
        $i.line(`import { A } from "../api.generated"`)
        $i.line(``)
        $i.line(`function tempoptional<T, RT>(`)
        $i.line(`    $: pt.OptionalValue<T>,`)
        $i.line(`    a: ($: T) => pt.OptionalValue<RT>,`)
        $i.line(`    b: () => pt.OptionalValue<RT>,`)
        $i.line(`): pt.OptionalValue<RT> {`)
        $i.line(`    return tempoptional($, a, b)`)
        $i.line(`}`)

        $i.nestedLine(($i) => {
            $i.snippet(`export const $$: A.resolve = ($d, $se) => {`)
            $i.indent(($i) => {

                const gt = $.model['type library']['global types']

                $d.dictionaryForEach($.model['type library']['global types'], ($) => {
                    const gt_key = $.key
                    const result = $.value.result
                    $i.line(``)
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
                                                case 'lookup':
                                                    pl.ss($, ($) => {
                                                        const type = $.type
                                                        pl.cc($.kind, ($) => {
                                                            switch ($[0]) {
                                                                case 'cyclic':
                                                                    pl.ss($, ($) => {
                                                                        $i.snippet(`pt.Lookup<pt.ComputedValue<`)
                                                                        doGlobalTypeSelection(type, $i)
                                                                        $i.snippet(`<Annotation>>>`)

                                                                    })
                                                                    break
                                                                case 'non cyclic':
                                                                    pl.ss($, ($) => {
                                                                        $i.snippet(`pt.Lookup<`)
                                                                        doGlobalTypeSelection(type, $i)
                                                                        $i.snippet(`<Annotation>>`)

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
                                                        function theType($i: g_fp.SYNC.I.Line) {

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
                                                                        theType($i)
                                                                    })
                                                                    break
                                                                case 'yes':
                                                                    pl.ss($, ($) => {
                                                                        $i.snippet(`pt.OptionalValue<`)
                                                                        theType($i)
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
                        const type = $.value.type
                        const key = $.key
                        pl.optional(
                            $.value.result,
                            ($) => {
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`const content = `)
                                        doType(type, `${$d.createIdentifier(key)}.content`, $i)

                                    })
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`return `)
                                        $i.snippet(`{`)
                                        $i.indent(($i) => {
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`'content': content,`)
                                            })
                                            $i.nestedLine(($i) => {
                                                $i.snippet(`'result': pl.cc(content, ($): `)
                                                $i.snippet(`pt.OptionalValue<`)
                                                pl.optional(
                                                    result,
                                                    ($) => {
                                                        doGlobalTypeSelection($.type, $i)
                                                    },
                                                    () => {
                                                        pl.panic(`NO Definition`)
                                                    }
                                                )
                                                $i.snippet(`<Annotation>>`)
                                                $i.snippet(` => `)

                                                doAnyValueSelection($.selection, $i, ($i) => {
                                                    $i.snippet(`[true, $]`)
                                                })
                                                $i.snippet(`),`)
                                            })
                                        })
                                        $i.snippet(`}`)

                                    })
                                })
                            },
                            () => {
                                $i.indent(($i) => {
                                    $i.nestedLine(($i) => {
                                        $i.snippet(`return `)
                                        doType($.value.type, $d.createIdentifier($.key), $i)
                                    })
                                })
                            },
                        )
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
                    //                                         $i.snippet(`tempoptional(`)
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
                $i.line(`return map_${$d.createIdentifier($.model.root.key)}`)
            })
            $i.snippet(`}`)
        })

    }
}