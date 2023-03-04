

import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gglossary_serialize from "lib-pareto-typescript-project/dist/submodules/glossary_serialize_temp"
import * as gbuild from "res-pareto-build"
import * as gmain from "res-pareto-main"
import * as gfs from "lib-pareto-filesystem"

import { $a } from ".."

import { Cgenerate } from "../definition/api.generated"

export const $$: Cgenerate = ($) => {
    const a = gforeach.$a.arrayForEach
    const d = gforeach.$a.createDictionaryForEach({
        compare: gcoll.$a.localeIsABeforeB,
    })
    const ea = gforeach.$a.enrichedArrayForEach
    const ed = gforeach.$a.createEnrichedDictionaryForEach({
        compare: gcoll.$a.localeIsABeforeB,
    })

    $a.createGenerator(
        {
            'dictionaryForEach': gforeach.$a.createDictionaryForEach({
                'compare': gcoll.$a.localeIsABeforeB,
            }),
            'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
            'logError': ($) => {
                gmain.$a.logError(gfs.$a.createWriteFileErrorMessage($.error))
            },
            'map': $a.createMapper({
                'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
                'buildDictionary': gbuild.$a.unsafeBuildDictionary,
            }),
            'serialize': gglossary_serialize.$a.createSerializer({
                'arrayForEach': a,
                'dictionaryForEach': d,
                'enrichedArrayForEach': ea,
                'enrichedDictionaryForEach': ed,
            })
        }
    )($)
}
