import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'
import * as pm from 'pareto-core-map'

import * as g_2algorithm from "../../submodules/liana2algorithm"

import * as a_foreach from "res-pareto-foreach"
import * as a_coll from "res-pareto-collation"
import * as a_ts from "res-typescript"
import * as a_dictionary from "res-pareto-dictionary"
import * as a_resolve from "res-pareto-resolve"

import * as a_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.generateResolver = () => {
    return ($) => {

        a_fp.$b.createFile()(
            ($i) => {
                $i($.path, ($i) => {
                    g_2algorithm.$a.createResolver({
                        'createIdentifier': a_ts.$r.createIdentifier(),
                        'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                            'compare': a_coll.$r.localeIsABeforeB(),
                        }),
                        'enrichedDictionaryForEach': a_foreach.$r.createEnrichedDictionaryForEach({
                            'compare': a_coll.$r.localeIsABeforeB(),
                        }),
                        'isEmpty': a_dictionary.$r.isEmpty(),
                        'sortTopologically': a_resolve.$r.sortTopologically(),
                        'filter': a_dictionary.$r.filter(),
                    })($.data, $i)
                })
            },
            {
                'logError': () => {
                    pd.logDebugMessage("FKSLFSFKSFDL:KSJ")
                }
            }
        )    }
}