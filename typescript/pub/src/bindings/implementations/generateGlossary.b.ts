import * as pl from 'pareto-core-lib'


import * as a_2glossary from "../../submodules/liana2glossary"
import * as a_array from "res-pareto-array"
import * as a_build from "res-pareto-build"
import * as a_coll from "res-pareto-collation"
import * as a_dictionary from "res-pareto-dictionary"
import * as a_foreach from "res-pareto-foreach"
import * as a_fp from "lib-fountain-pen"
import * as a_glossary_serialize from "lib-pareto-typescript-project/dist/submodules/glossary_serialize"

import { A, D } from "../api.generated"

export const $$: A.generateGlossary = <GAnnotation>($d: D.generateGlossary<GAnnotation>) => {
    return ($: a_2glossary.T.GenerateData<GAnnotation>, $i) => {
        const a = a_foreach.$r.arrayForEach
        const d = a_foreach.$r.createDictionaryForEach({
            compare: a_coll.$r.localeIsABeforeB(),
        })
        const ea = a_foreach.$r.enrichedArrayForEach
        const ed = a_foreach.$r.createEnrichedDictionaryForEach({
            compare: a_coll.$r.localeIsABeforeB(),
        })

        const x = a_2glossary.$a.map<GAnnotation>({
            'buildDictionary': a_build.$r.buildUnsafeDictionary(),
            'decorateDictionaryEntriesWithKey': a_foreach.$r.decorateDictionaryEntriesWithKey(),
            'filter': a_dictionary.$r.filter(),
            'merge': a_array.$r.merge(),
        })($.data)

        a_fp.$b.createFile()(
            ($c) => {
                $c($.path, ($i) => {
                    a_glossary_serialize.$a.serialize<a_2glossary.T.OutAnnotation<GAnnotation>>({
                        'dictionaryForEach': d,
                        'getSourceLocation': ($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'internal': return pl.ss($, ($) => ({
                                    'file': "INTERNAL",
                                    'line': 0,
                                    'column': 0,
                                }))
                                case 'source': return pl.ss($, ($) => $d.getSourceLocation($))
                                default: return pl.au($[0])
                            }
                        }),
                    })(
                        x,
                        $i,
                    )

                })
            },
            {
                'logError': $i,
            },
        )



        // export const $$: A.createGenerator = ($d) => {
        //     return ($, $i) => {
        //         g_fp.$b.createFile(
        //             $.path,
        //             ($i) => {
        //                 $d.serialize(
        //                     $d.map($.data),
        //                     $i,
        //                 )
        //             },
        //             $i,
        //         )
        //     }
        // }

        //$.data["mapped model"]

        $.path


        // a_2glossary.$a.createGenerator(
        //     {
        //         'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
        //             'compare': a_coll.$r.localeIsABeforeB(),
        //         }),
        //         'decorateDictionaryEntriesWithKey': a_foreach.$r.decorateDictionaryEntriesWithKey,
        //         'map': ,
        //         'serialize': a_glossary_serialize.$a.serialize({
        //             'dictionaryForEach': d,
        //         })
        //     }
        // )(
        //     $,
        //     ($) => {
        //         a_fs.$a.writeFile($, $i)
        //     },
        // )
    }
}
