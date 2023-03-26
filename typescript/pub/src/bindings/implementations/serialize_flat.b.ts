
import * as a_pareto2typescript from "lib-pareto-typescript-project/dist/submodules/pareto2typescript"
import * as a_tostring from "res-pareto-tostring"
import * as a_coll from "res-pareto-collation"
import * as a_ts from "res-typescript"
import * as a_foreach from "res-pareto-foreach"

import * as a_liana_flat from "../../submodules/liana_flat"

import { A } from "../api.generated"

export const $$: A.serialize_$flat = () => {
    return ($, $i) => {
        a_liana_flat.$a.serialize({
            'createIdentifier': a_ts.$r.createIdentifier(),
            // 'mapLiana2States': a_liana2pareto.$a.createLiana2StatesMapper({
            //     'decorateDictionaryEntriesWithKey': a_foreach.$a.decorateDictionaryEntriesWithKey,
            // }),
            // 'serializeStates': a_pareto2typescript.$a.createStatesSerializer(
            //     {
            //         'arrayForEach': a_foreach.$r.arrayForEach,
            //         'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
            //             'compare': a_coll.$r.localeIsABeforeB,
            //         }),
            //         'enrichedArrayForEach': a_foreach.$r.enrichedArrayForEach,
            //         'enrichedDictionaryForEach': a_foreach.$r.createEnrichedDictionaryForEach({
            //             'compare': a_coll.$r.localeIsABeforeB,
            //         }),
            //         'createIdentifier': a_ts.$r.createIdentifier(),
            //         'createApostrophedString': a_ts.$r.createApostrophedString(),
            //     }
            // ),
            'joinNestedStrings': a_tostring.$r.joinNestedStrings({
                'maximum': [false],
                'separator': "_",
            }),
            'dictionaryForEach': a_foreach.$r.createDictionaryForEach({
                'compare': () => false,//HACK: serialize in the order they have been added
            }),
        })($, $i)
    }
}