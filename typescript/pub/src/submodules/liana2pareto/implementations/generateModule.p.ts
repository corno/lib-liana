

import * as gforeach from "res-pareto-foreach"
import * as gcoll from "res-pareto-collation"
import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
import * as gmain from "res-pareto-main"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary_temp from "lib-pareto-typescript-project/dist/submodules/glossary_serialize_temp"
import * as galgorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as gbuild from "res-pareto-build"

import { $a } from ".."

import { CgenerateModule } from "../definition/api.generated"

export const $$:CgenerateModule = ($) => {
    const a = gforeach.$a.arrayForEach
    const d = gforeach.$a.createDictionaryForEach({
        compare: gcoll.$a.localeIsABeforeB,
    })
    const ea = gforeach.$a.enrichedArrayForEach
    const ed = gforeach.$a.createEnrichedDictionaryForEach({
        compare: gcoll.$a.localeIsABeforeB,
    })

    $a.createModuleGenerator(
        {
            'dictionaryForEach': gforeach.$a.createDictionaryForEach({
                'compare': gcoll.$a.localeIsABeforeB,
            }),
            'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
            'logError': gmain.$a.logError,
            'mapLiana2Pareto': $a.createLiana2ParetoMapper({
                'decorateDictionaryEntriesWithKey': gforeach.$a.decorateDictionaryEntriesWithKey,
                'buildDictionary': gbuild.$a.unsafeBuildDictionary,
            }),
            'serializeProject': gproject.$a.createSerializerWithContext({
                'serialize': gproject.$a.createSerializer({
                    'dictionaryForEach': d,
                    'enrichedArrayForEach': ea,
                    'serializeAPI': gapi.$a.createSerializer({

                        'dictionaryForEach': d,
                        'enrichedArrayForEach': ea,
                    }),
                    'serializeGlossary': gglossary_temp.$a.createSerializer({
                        'arrayForEach': a,
                        'dictionaryForEach': d,
                        'enrichedArrayForEach': ea,
                        'enrichedDictionaryForEach': ed,
                    }),
                    'serializeImplementation': galgorithm.$a.createImplementationSerializer({
                        'arrayForEach': a,
                        'dictionaryForEach': d,
                        'enrichedArrayForEach': ea,
                        'enrichedDictionaryForEach': ed,
                    }),
                })
            })
        }
    )($)
}
