import * as pd from 'pareto-core-dev'

import * as a_foreach from "res-pareto-foreach"
import * as a_coll from "res-pareto-collation"
import * as a_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as a_build from "res-pareto-build"
import * as a_main from "res-pareto-main"
import * as a_fs from "lib-pareto-filesystem/dist/submodules/errorhandlers"

//import { $api as $a } from "../../api/implementation.generated"

import { A } from "../api.generated"

export const $$: A.generateAPI = () => {
    return ($, $i) => {
        pd.implementMe("SDFSDKL:JFSDFKJS:DF")
        // const a = a_foreach.$r.arrayForEach
        // const d = a_foreach.$r.dictionaryForEach({
        //     compare: a_coll.$r.localeIsABeforeB,
        // })
        // const ea = a_foreach.$r.enrichedArrayForEach
        // const ed = a_foreach.$r.enrichedDictionaryForEach({
        //     compare: a_coll.$r.localeIsABeforeB,
        // })

        // $a.createGenerator(
        //     {
        //         'dictionaryForEach': a_foreach.$r.dictionaryForEach({
        //             'compare': a_coll.$r.localeIsABeforeB,
        //         }),
        //         'decorateDictionaryEntriesWithKey': a_foreach.$r.decorateDictionaryEntriesWithKey,
        //         'map': $a.createMapper({
        //             'decorateDictionaryEntriesWithKey': a_foreach.$r.decorateDictionaryEntriesWithKey,
        //             'buildDictionary': a_build.$r.unsafeSyncBuildDictionary,
        //         }),
        //         'serialize': a_this.$a.createSerializer({
        //             'dictionaryForEach': d,
        //             'enrichedArrayForEach': ea,
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
