

import * as a_foreach from "res-pareto-foreach"
import * as a_coll from "res-pareto-collation"
import * as a_glossary_serialize from "lib-pareto-typescript-project/dist/submodules/glossary_serialize"
import * as a_build from "res-pareto-build"
import * as a_fs from "lib-pareto-filesystem/dist/submodules/errorhandlers"
import * as a_fp from "lib-fountain-pen"

import * as a_2glossary from "../../submodules/liana2glossary"

import { A } from "../api.generated"

export const $$: A.generateGlossary = () => {
    return ($, $i) => {
        const a = a_foreach.$r.arrayForEach
        const d = a_foreach.$r.createDictionaryForEach({
            compare: a_coll.$r.localeIsABeforeB(),
        })
        const ea = a_foreach.$r.enrichedArrayForEach
        const ed = a_foreach.$r.createEnrichedDictionaryForEach({
            compare: a_coll.$r.localeIsABeforeB(),
        })


        a_fp.$b.createFile()(
            ($c) => {
                $c($.path, ($i) => {
                    a_glossary_serialize.$a.serialize({
                        'dictionaryForEach': d,
                    })(
                        a_2glossary.$a.map({
                            'buildDictionary': a_build.$r.buildUnsafeDictionary(),
                            'decorateDictionaryEntriesWithKey': a_foreach.$r.decorateDictionaryEntriesWithKey(),
                        })($.data),
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
