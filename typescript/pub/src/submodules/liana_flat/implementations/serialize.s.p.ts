import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_liana2glossary from "../../liana2glossary"

import * as g_liana from "../../liana"
// import * as g_liana2pareto from "../../liana2pareto"
import * as g_fp from "lib-fountain-pen"
import * as g_common from "glo-pareto-common"
import * as g_main from "../../../main"

import { A } from "../api.generated"

export const $$: A.serialize = ($d) => {
    return <Annotation>($: g_liana2glossary.T.Mapped__Library<Annotation>, $i: g_fp.SYNC.I.Directory) => {

        // $i.file(`states.generated.ts`, ($i) => {
        //     $d.serializeStates($d.mapLiana2States($), $i)

        // })
        function getPathID($: g_common.T.Path) {
            return $d.createIdentifier($d.getArrayAsString($))
        }
        function doDictionaries($: {
            $: g_liana.T.Type<Annotation>,
            path: g_common.T.Path,
            idPath: g_common.T.Path,
            currentName: string,
        }) {
            const path = $.path
            const idPath = $.idPath
            const currentName = $.currentName
            pl.cc($.$, ($) => {

                pl.cc($.type, ($) => {
                    switch ($[0]) {
                        case 'array':
                            pl.ss($, ($) => {
                                doDictionaries({
                                    $: $.type,
                                    path: path,
                                    idPath: idPath,
                                    currentName: currentName,
                                })
                            })
                            break
                        case 'optional':
                            pl.ss($, ($) => {
                                doDictionaries({
                                    $: $.type,
                                    path: path,
                                    idPath: idPath,
                                    currentName: currentName,
                                })
                            })
                            break
                        case 'nothing':
                            pl.ss($, ($) => {

                            })
                            break
                        case 'component':
                            pl.ss($, ($) => {

                            })
                            break
                        case 'dictionary':
                            pl.ss($, ($) => {
                                //const parentPathAsArray = pr.wrapRawArray(pi.xflatten(idPath))
                                $i.file(
                                    `${$d.getArrayAsString(path)}.generated.ts`,
                                    ($i) => {
                                        $i.line(`import * as pl from 'pareto-core-lib'`)
                                        $i.line(``)
                                        $i.line(`function assertNotNull($: null | string): string { if ($ === null) { throw new Error("UNEXPECTED NULL") }; return $ }`)
                                        $i.line(``)
                                        $i.nestedLine(($i) => {

                                            $i.snippet(`export function $$(`)
                                            $i.indent(($i) => {
                                                $i.line(`FIX PARENT PATH`)
                                                // parentPathAsArray.forEach(($) => {
                                                //     $i.line(`parent_${$d.createIdentifier($)}: string,`)
                                                // })
                                                $i.line(`id: string,`)
                                                $i.line(`item_operation: string,`)
                                                $i.line(`//////`)
                                                function doScalars(
                                                    $: {
                                                        $: g_liana.T.Type<Annotation>,
                                                        isRoot: boolean,
                                                        path: g_common.T.Path,
                                                    }
                                                ) {
                                                    const path = $.path
                                                    const pathID = getPathID(path)
                                                    const type = `${$.isRoot ? `` : `null | `}string`

                                                    pl.cc($.$.type, ($) => {
                                                        switch ($[0]) {
                                                            case 'array':
                                                                pl.ss($, ($) => {
                                                                    doScalars({
                                                                        $: $.type,
                                                                        isRoot: false,
                                                                        path: path,
                                                                    })
                                                                })
                                                                break
                                                            case 'optional':
                                                                pl.ss($, ($) => {
                                                                    doScalars({
                                                                        $: $.type,
                                                                        isRoot: false,
                                                                        path: path,
                                                                    })
                                                                })
                                                                break
                                                            case 'component':
                                                                pl.ss($, ($) => {

                                                                })
                                                                break
                                                            case 'nothing':
                                                                pl.ss($, ($) => {

                                                                })
                                                                break
                                                            case 'dictionary':
                                                                pl.ss($, ($) => {
                                                                })
                                                                break
                                                            case 'group':
                                                                pl.ss($, ($) => {
                                                                    $d.dictionaryForEach($.properties, ($) => {
                                                                        doScalars({
                                                                            $: $.value.type,
                                                                            isRoot: false,
                                                                            path: $d.push({
                                                                                'array': path,
                                                                                'element': $.key,
                                                                            }),
                                                                        })
                                                                    })

                                                                })
                                                                break
                                                            case 'terminal':
                                                                pl.ss($, ($) => {
                                                                    $i.line(`prop_${pathID}: ${type},`)
                                                                })
                                                                break
                                                            case 'tagged union':
                                                                pl.ss($, ($) => {
                                                                    $i.line(`prop_${pathID}: ${type},`)
                                                                    $i.line(`operation_${pathID}: ${type},`)
                                                                    $d.dictionaryForEach($.options, ($) => {
                                                                        doScalars({
                                                                            $: $.value.type,
                                                                            isRoot: false,
                                                                            path: $d.push({
                                                                                'array': path,
                                                                                'element': $.key,
                                                                            }),
                                                                        })
                                                                    })
                                                                })
                                                                break
                                                            default: pl.au($[0])
                                                        }
                                                    })
                                                }
                                                doScalars({
                                                    $: $.type,
                                                    isRoot: true,
                                                    path: pm.wrapRawArray([]),
                                                })

                                            })
                                            $i.snippet(`) {`)
                                            $i.indent(($i) => {
                                                $i.nestedLine(($i) => {
                                                    $i.snippet(`return  {`)
                                                    $i.indent(($i) => {
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'parents': {`)
                                                            $i.indent(($i) => {
                                                                $i.line(`FIX PARENT PATH`)
                                                                // parentPathAsArray.forEach(($) => {
                                                                //     $i.line(`'${$}': parent_${$d.createIdentifier($)},`)
                                                                // })
                                                            })
                                                            $i.snippet(`},`)
                                                        })

                                                        $i.line(`'id': id,`)
                                                        $i.nestedLine(($i) => {
                                                            $i.snippet(`'data': `)
                                                            function writeUnflattener($: {
                                                                $: g_liana.T.Type<Annotation>,
                                                                path: g_common.T.Path,
                                                                currentName: string,
                                                            }, $i: g_fp.SYNC.I.Line) {
                                                                const path = $.path
                                                                const pathID = `prop_${getPathID(path)}`
                                                                const currentName = $.currentName
                                                                pl.cc($.$.type, ($) => {

                                                                    switch ($[0]) {
                                                                        case 'nothing':
                                                                            pl.ss($, ($) => {
                                                                                $i.snippet(`null`)
                                                                            })
                                                                            break
                                                                        case 'array':
                                                                            pl.ss($, ($) => {
                                                                                $i.snippet(`[]`)
                                                                            })
                                                                            break
                                                                        case 'optional':
                                                                            pl.ss($, ($) => {
                                                                                $i.snippet(`[false]`)
                                                                            })
                                                                            break
                                                                        case 'component':
                                                                            pl.ss($, ($) => {
                                                                                $i.snippet(`FIXCOMPONENT`)
                                                                            })
                                                                            break
                                                                        case 'dictionary':
                                                                            pl.ss($, ($) => {
                                                                                $i.snippet(`{}`)
                                                                            })
                                                                            break
                                                                        case 'group':
                                                                            pl.ss($, ($) => {
                                                                                $i.snippet(`{`)
                                                                                $i.indent(($i) => {
                                                                                    $d.dictionaryForEach($.properties, ($) => {
                                                                                        $i.nestedLine(($i) => {
                                                                                            $i.snippet(`'${$.key}': `)
                                                                                            writeUnflattener({
                                                                                                $: $.value.type,
                                                                                                path: $d.push({
                                                                                                    'array': path,
                                                                                                    'element': $.key,
                                                                                                }),
                                                                                                currentName: $.key,
                                                                                            }, $i)
                                                                                            $i.snippet(`,`)
                                                                                        })
                                                                                    })

                                                                                })
                                                                                $i.snippet(`}`)
                                                                            })
                                                                            break
                                                                        case 'terminal':
                                                                            pl.ss($, ($) => {
                                                                                const type = pl.cc($, ($): string => {
                                                                                    switch ($.terminal.type.key) {
                                                                                        case 'bedrag': return "number"
                                                                                        case 'bestand': "undefined"
                                                                                        case 'dagen': return "number"
                                                                                        case 'datum': "number"
                                                                                        case 'identifier': return "string"
                                                                                        case 'multiline text': return "string"
                                                                                        case 'promillage': return "number"
                                                                                        case 'single line text': return "string"
                                                                                        default: return pl.panic(`Unknown string type: ${$.terminal.type.key}`)
                                                                                    }
                                                                                })
                                                                                $i.snippet(type === "number" ? `parseInt(assertNotNull(${pathID}))` : `assertNotNull(${pathID})`)
                                                                                // switch ($.constrained[0]) {
                                                                                //     case 'no':
                                                                                //         pl.ss($.constrained, ($) => {
                                                                                //         })
                                                                                //         break
                                                                                //     case 'yes':
                                                                                //         pl.ss($.constrained, ($) => {
                                                                                //             $i.snippet(pathID)
                                                                                //         })
                                                                                //         break
                                                                                //     default: pl.au($.constrained[0])
                                                                                // }
                                                                            })
                                                                            break
                                                                        case 'tagged union':
                                                                            pl.ss($, ($) => {
                                                                                $i.snippet(`pl.cc(prop_${$d.createIdentifier(currentName)}, ($) => {`)
                                                                                $i.indent(($i) => {
                                                                                    $i.nestedLine(($i) => {
                                                                                        $i.snippet(`switch ($) {`)
                                                                                        $i.indent(($i) => {
                                                                                            $d.dictionaryForEach($.options, ($) => {
                                                                                                $i.nestedLine(($i) => {
                                                                                                    $i.snippet(`case '${$.key}': {`)
                                                                                                    $i.indent(($i) => {
                                                                                                        $i.nestedLine(($i) => {
                                                                                                            $i.snippet(`return ['${$.key}', `)
                                                                                                            writeUnflattener({
                                                                                                                $: $.value.type,
                                                                                                                path: $d.push({
                                                                                                                    'array': path,
                                                                                                                    'element': $.key,
                                                                                                                }),
                                                                                                                currentName: currentName
                                                                                                            }, $i)
                                                                                                            $i.snippet(`]`)
                                                                                                        })
                                                                                                    })
                                                                                                    $i.snippet(`}`)
                                                                                                })
                                                                                            })
                                                                                            $i.line(`default: pl.panic(\`UNEXPECTED VALUE: '\${${pathID}}'\`)`)
                                                                                        })
                                                                                        $i.snippet(`}`)
                                                                                    })
                                                                                })
                                                                                $i.snippet(`})`)
                                                                                // $.options.dictionary.forEach(() => false, ($, key) => {
                                                                                //     writeUnflattener($.type, $i)
                                                                                // })
                                                                            })
                                                                            break
                                                                        default: pl.au($[0])
                                                                    }
                                                                })
                                                            }
                                                            writeUnflattener({
                                                                $: $.type,
                                                                path: pm.wrapRawArray([]),
                                                                currentName: currentName
                                                            }, $i)

                                                        })
                                                    })
                                                    $i.snippet(`}`)
                                                })
                                            })
                                            $i.snippet(`}`)
                                        })
                                    }
                                )
                                doDictionaries({
                                    $: $.type,
                                    path: path,
                                    idPath: $d.push({
                                        'array': idPath,
                                        'element': currentName,
                                    }),
                                    currentName: currentName,
                                })
                            })
                            break
                        case 'group':
                            pl.ss($, ($) => {
                                $d.dictionaryForEach($.properties, ($) => {
                                    doDictionaries({
                                        $: $.value.type,
                                        path: $d.push({
                                            'array': path,
                                            'element': $.key,
                                        }),
                                        idPath: idPath,
                                        currentName: $.key,
                                    })
                                })

                            })
                            break
                        case 'terminal':
                            pl.ss($, ($) => {

                            })
                            break
                        case 'tagged union':
                            pl.ss($, ($) => {
                                $d.dictionaryForEach($.options, ($) => {
                                    doDictionaries({
                                        $: $.value.type,
                                        path: $d.push({
                                            'array': path,
                                            'element': $.key,
                                        }),
                                        idPath: idPath,
                                        currentName: currentName,
                                    })
                                })
                            })
                            break
                        default: pl.au($[0])
                    }

                })
            })
        }
        $d.dictionaryForEach($.library['global types'].definitions, ($) => {
            doDictionaries({
                $: $.value.type,
                path: pm.wrapRawArray([$.key]),
                idPath: pm.wrapRawArray([]),
                currentName: $.key,
            })
        })
    }
}

