
import * as gpareto2typescript from "lib-pareto-typescript-project/dist/submodules/pareto2typescript"
import * as gtostring from "res-pareto-tostring"
import * as gcoll from "res-pareto-collation"
import * as gts from "res-typescript"
import * as gforeach from "res-pareto-foreach"

import { $$ as createSerializer } from "./createSerializer.p"

import {serialize } from "../definition/api.generated"

export const $$: serialize = ($, $i) => {
    createSerializer({
        'createIdentifier': gts.$r.createIdentifier,
        // 'mapLiana2States': gliana2pareto.$a.createLiana2StatesMapper({
        //     'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
        // }),
        'serializeStates': gpareto2typescript.$a.createStatesSerializer({
            'arrayForEach': gforeach.$r.arrayForEach,
            'dictionaryForEach': gforeach.$r.createDictionaryForEach({
                'compare': gcoll.$r.localeIsABeforeB,
            }),
            'enrichedArrayForEach': gforeach.$r.enrichedArrayForEach,
            'enrichedDictionaryForEach': gforeach.$r.createEnrichedDictionaryForEach({
                'compare': gcoll.$r.localeIsABeforeB,
            }),
            'createIdentifier': gts.$r.createIdentifier,
            'createApostrophedString': gts.$r.createApostrophedString,
        }),
        'joinNestedStrings': gtostring.$r.joinNestedStrings({
            'maximum': [false],
            'separator': "_",
        }, {}),
        'dictionaryForEach': gforeach.$r.createDictionaryForEach({
            'compare': () => false,//HACK: serialize in the order they have been added
        }),
    })($, $i)
}