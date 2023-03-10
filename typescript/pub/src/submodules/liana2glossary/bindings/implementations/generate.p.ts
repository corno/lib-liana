

import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gglossary_serialize from "lib-pareto-typescript-project/dist/submodules/glossary_serialize"
import * as gbuild from "res-pareto-build"
import * as gmain from "res-pareto-main"
import * as gfs from "lib-pareto-filesystem/dist/submodules/errorhandlers"

import { $api as $a } from "../../pure/implementation.generated"

import { generate } from "../api.generated"

export const $$: generate = ($, $i) => {
    const a = gforeach.$r.arrayForEach
    const d = gforeach.$r.createDictionaryForEach({
        compare: gcoll.$r.localeIsABeforeB,
    })
    const ea = gforeach.$r.enrichedArrayForEach
    const ed = gforeach.$r.createEnrichedDictionaryForEach({
        compare: gcoll.$r.localeIsABeforeB,
    })

    $a.createGenerator(
        {
            'dictionaryForEach': gforeach.$r.createDictionaryForEach({
                'compare': gcoll.$r.localeIsABeforeB,
            }),
            'decorateDictionaryEntriesWithKey': gforeach.$r.decorateDictionaryEntriesWithKey,
            'map': $a.createMapper({
                'decorateDictionaryEntriesWithKey': gforeach.$r.decorateDictionaryEntriesWithKey,
                'buildDictionary': gbuild.$r.unsafeBuildDictionary,
            }),
            'serialize': gglossary_serialize.$a.createSerializer({
                'arrayForEach': a,
                'dictionaryForEach': d,
                'enrichedArrayForEach': ea,
                'enrichedDictionaryForEach': ed,
            })
        }
    )(
        $,
        ($) => {
            gfs.$a.writeFile($, $i)
        },
    )
}
