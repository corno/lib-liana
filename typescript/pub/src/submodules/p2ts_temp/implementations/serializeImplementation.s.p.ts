import * as pl from 'pareto-core-lib'

import * as g_algorithm from "../../algorithm_temp"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.serializeImplementation = ($d) => {

    return <Annotation>($: g_algorithm.T.Implementation<Annotation>, $i: g_fp.SYNC.I.Directory) => {
        $d.dictionaryForEach($.implementations, ($) => {
            $i.file(`XXXXXXXXXXXXXXXX${$.key}`, ($i) => {
                $i.line(``)
                $i.line(`import * as g_fp from "lib-fountain-pen"`)
                $i.line(``)
                $i.line(`import * as g_this from "XXX"`)
                $i.line(``)
                $i.line(`import { ${$.key} } from "XXX"`)
                $i.line(``)
                $i.nestedLine(($i) => {
                    $i.snippet(`export const $$: ${$.key} = `)
                    function x($i: g_fp.SYNC.I.Line) {

                        function doSynchronousExpression($: g_algorithm.T.SynchronousExpression<Annotation>, $i: g_fp.SYNC.I.Line) {
                            switch ($[0]) {
                                case 'call':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'contextChange':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'groupInitializer':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'implementMe':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'mapArray':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'mapDictionary':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'propertySelection':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'string literal':
                                    pl.ss($, ($) => {
                                        $i.snippet($)
                                    })
                                    break
                                case 'switch':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                default: pl.au($[0])
                            }
                        }
                        function doImplementationType($: g_algorithm.T.ImplementationType<Annotation>, $i: g_fp.SYNC.I.Line) {

                            switch ($[0]) {
                                case 'asynchronous function':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'interface initializer':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'procedure':
                                    pl.ss($, ($) => {
                                        function doBlock(
                                            $: g_algorithm.T.ProcedureBlock<Annotation>,
                                            $i: g_fp.SYNC.I.Line,
                                        ) {

                                            $i.snippet(`{`)
                                            $i.indent(($i) => {
                                                if ($.innerFunctions !== undefined) {
                                                    $d.dictionaryForEach($.innerFunctions, ($) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`function ${$d.createIdentifier($.key)}($: g_this.T.${$d.createIdentifier($.key)}, $i: g_fp.SYNC.I.Line) `)
                                                            doImplementationType($.value.type, $i)
                                                        })
                                                    })
                                                }
                                                $d.arrayForEach($.statements, ($) => {
                                                    switch ($[0]) {
                                                        case 'dependencyCall':
                                                            pl.ss($, ($) => {

                                                            })
                                                            break
                                                        case 'interfaceCall':
                                                            pl.ss($, ($) => {
                                                                $i.nestedLine($i => {
                                                                    $i.snippet(`$i`)
                                                                    $d.arrayForEach($['child path'], ($) => {
                                                                        $i.snippet(`[${$d.createApostrophedString($)}]`)
                                                                    })
                                                                    $i.snippet(`(`)
                                                                    switch ($.data[0]) {
                                                                        case false:
                                                                            break
                                                                        case true:
                                                                            pl.ss($.data, ($) => {
                                                                                $i.snippet(`"`)
                                                                                doSynchronousExpression($, $i)
                                                                                $i.snippet(`", `)
                                                                            })
                                                                            break
                                                                        default: pl.au($.data[0])
                                                                    }
                                                                    switch ($.callback[0]) {
                                                                        case false:
                                                                            break
                                                                        case true:
                                                                            pl.ss($.callback, ($) => {
                                                                                $i.snippet(`($i) => `)
                                                                                doBlock($, $i)
                                                                            })
                                                                            break
                                                                        default: pl.au($.callback[0])
                                                                    }
                                                                    $i.snippet(`)`)
                                                                })
                                                            })
                                                            break
                                                        case 'innerCallbackCall':
                                                            pl.ss($, ($) => {

                                                            })
                                                            break
                                                        case 'switch':
                                                            pl.ss($, ($) => {

                                                            })
                                                            break
                                                        default: pl.au($[0])
                                                    }
                                                })
                                            })
                                            $i.snippet(`}`)
                                        }
                                        doBlock($.block, $i)
                                    })
                                    break
                                case 'synchronous function':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                default: pl.au($[0])
                            }
                        }
                        $i.snippet(`($, $i) => `)

                        doImplementationType($.value.type, $i)
                    }
                    if ($.value.constructor) {
                        $i.snippet(`($d) => {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`return `)
                                x($i)
                            })
                        })
                        $i.snippet(`}`)
                    } else {
                        x($i)
                    }
                })
            })
        })
        // function serializeExpression($: g_algorithm.TExpression, $i: g_fp.SYNC.I.Line) {
        //     switch ($[0]) {
        //         case 'call':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`${$.function}(`)
        //                 $i.snippet(`)`)
        //             })
        //             break
        //         case 'contextChange':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`pl.cc($.${$.property}, ($) => `)
        //                 serializeFunctionBlock($.block, $i)
        //                 $i.snippet(`)`)
        //             })
        //             break
        //         case 'groupInitializer':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`{`)
        //                 $i.indent(($i) => {
        //                     $d.dictionaryForEach($.properties, ($) => {
        //                         $i.nestedLine(($i) => {
        //                             $i.snippet(`'${$.key}': `)
        //                             serializeExpression($.value, $i)
        //                             $i.snippet(`,`)
        //                         })
        //                     })
        //                 })
        //                 $i.snippet(`}`)
        //             })
        //             break
        //         case 'implementMe':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`pd.implementMe(\`${$}\`)`)
        //             })
        //             break
        //         case 'mapArray':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`$.map(($) => `)
        //                 serializeFunctionBlock($.block, $i)
        //                 $i.snippet(`)`)
        //             })
        //             break
        //         case 'mapDictionary':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`$.map(($) => `)
        //                 serializeFunctionBlock($.block, $i)
        //                 $i.snippet(`)`)
        //             })
        //             break
        //         case 'propertySelection':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`$.${$.name}`)
        //             })
        //             break
        //         case 'switch':
        //             pl.ss($, ($) => {
        //                 $i.snippet(`pl.cc($, ($) => {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`switch ($) {`)
        //                         $i.indent(($i) => {
        //                             $d.dictionaryForEach($.cases, ($) => {
        //                                 $i.nestedLine(($i) => {
        //                                     $i.snippet(`case '${$.key}': `)
        //                                     serializeFunctionBlock($.value, $i)
        //                                 })
        //                             })
        //                         })
        //                         $i.snippet(`}`)
        //                     })
        //                 })
        //                 $i.snippet(`})`)
        //             })
        //             break
        //         default: pl.au($[0])
        //     }
        // }
        // function serializeCallbackBlock($: g_algorithm.TCallbackBlock, $i: g_fp.SYNC.I.Line) {
        //     $i.snippet(`{`)
        //     $i.indent(($i) => {
        //         if ($.innerCallbacks !== undefined) {
        //             pl.cc($.innerCallbacks, ($) => {
        //                 $d.dictionaryForEach($, ($) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`function ${$.key}() `)
        //                         serializeCallbackBlock($.value.block, $i)
        //                     })
        //                 })
        //             })
        //         }
        //         $.statements
        //         pd.implementMe(`SFSDFSDR`)
        //     })
        //     $i.snippet(`}`)
        // }
        // function serializeFunctionBlock($: g_algorithm.TFunctionBlock, $i: g_fp.SYNC.I.Line) {
        //     $i.snippet(`{`)
        //     $i.indent(($i) => {
        //         if ($.innerFunctions !== undefined) {
        //             pl.cc($.innerFunctions, ($) => {
        //                 $d.dictionaryForEach($, ($) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`function ${$.key}() `)
        //                         serializeFunctionBlock($.value.block, $i)
        //                     })
        //                 })
        //             })
        //         }
        //         $i.nestedLine(($i) => {
        //             $i.snippet(`return `)
        //             serializeExpression($.returnExpression, $i)
        //         })
        //     })
        //     $i.snippet(`}`)
        // }
        // $d.dictionaryForEach($.implementations, ($) => {
        //     function body($i: g_fp.SYNC.I.Line) {
        //         switch ($.value.type[0]) {
        //             case 'callback':
        //                 pl.ss($.value.type, ($) => {
        //                     $i.snippet(`($) => `)
        //                     serializeCallbackBlock($.block, $i)
        //                 })
        //                 break
        //             case 'function':
        //                 pl.ss($.value.type, ($) => {
        //                     $i.snippet(`($) => `)
        //                     serializeFunctionBlock($.block, $i)
        //                 })
        //                 break
        //             default: pl.au($.value.type[0])
        //         }
        //     }
        //     $i.file(`${$.key}.generated.ts`, ($i) => {
        //         $i.line(`import * as pl from 'pareto-core-lib'`)
        //         $i.line(``)

        //         $i.line(`import * as g_this from "../g_this"`)

        //         $i.nestedLine(($i) => {
        //             $i.snippet(`export const $$: g_this.${$d.createIdentifier(`C${$.key}`)} = `)
        //             if ($.value.constructor) {
        //                 $i.snippet(`($d) => {`)
        //                 $i.indent(($i) => {
        //                     $i.nestedLine(($i) => {
        //                         $i.snippet(`return `)
        //                         body($i)
        //                     })
        //                 })
        //                 $i.snippet(`}`)
        //             } else {
        //                 body($i)
        //             }
        //         })
        //     })
        // })
    }
}

