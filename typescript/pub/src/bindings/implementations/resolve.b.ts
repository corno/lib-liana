import * as pl from 'pareto-core-lib'
import * as pv from 'pareto-core-dev'


import * as g_this from "../glossary"

import * as a_resolve from "../../submodules/resolve"
import * as a_resolveRes from "res-pareto-resolve"
import * as a_dictionary from "res-pareto-dictionary"

import { A } from "../api.generated"

export const $$: A.resolve = () => {
    return a_resolve.$a.resolve(
        {
            'mergeAndIgnore': a_dictionary.$r.mergeAndIgnore({
                'error': {
                    'data': () => {
                        pv.logDebugMessage(`MERGE ISSUE`)

                    },
                    'end': () => {
                        
                    }
                }
            }),
            'resolveDictionary': a_resolveRes.$r.safeResolveDictionary({
                'onError': () => {
                    pv.logDebugMessage(`RESOLVE ISSUE`)
  
                }
            })
        },
        {
            'onError': ($) => {
                //pv.logDebugMessage(`${$.annotation.file}:${$.annotation.line}:${$.annotation.column}`)
                pl.cc($.message, ($) => {
                    switch ($[0]) {
                        case 'no such entry':
                            pl.ss($, ($) => {
                                pv.logDebugMessage(`NO SUCH ENTRY: ${$.key}`)

                            })
                            break
                        case 'not the right state':
                            pl.ss($, ($) => {
                                pv.logDebugMessage(`NOT THE RIGHT STATE: ${$.found}`)

                            })
                            break
                        default: pl.au($[0])
                    }
                })

            }
        }
    )
}