import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as gthis from "../definition/glossary"
import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gliana from "../../liana"

import {createMapper } from "../definition/api.generated"

export const $$: createMapper = ($d) => {
    return <Annotation>($: gthis.T.MapData<Annotation>) => {
        const model = $.model.model
        const stringMapping = $.model.stringmapping
        return {
            'imports': $d.buildDictionary(null, (add) => {
                if ($.algorithms.serialize[0] === true) {
                    add({
                        'key': "foreach",
                        'value': "res-pareto-foreach",
                    })
                }
            }),
            'algorithms': $d.buildDictionary(null, (add) => {
                if ($.algorithms.serialize[0] === true) {
                    add({
                        'key': "createSerializer",
                        'value': {
                            'definition': {
                                'context': {
                                    'glossary': "XXXXXX",
                                    'arguments': pm.wrapRawDictionary({}),
                                },
                                'function': "Serialize"
                            },
                            'type': ['constructor', {
                                'configuration data': [false],
                                'dependencies': pm.wrapRawDictionary({
                                    "arrayForEach": {
                                        'context': {
                                            'glossary': "foreach",
                                            'arguments': pm.wrapRawDictionary({}),
                                        },
                                        'function': "ArrayForEach",
                                    },
                                    "dictionaryForEach": {
                                        'context': {
                                            'glossary': "foreach",
                                            'arguments': pm.wrapRawDictionary({}),
                                        },
                                        'function': "DictionaryForEach",
                                    },
                                    "enrichedArrayForEach": {
                                        'context':  {
                                            'glossary': "foreach",
                                            'arguments': pm.wrapRawDictionary({}),
                                        },
                                        'function': "EnrichedArrayForEach",
                                    },
                                    "enrichedDictionaryForEach": {
                                        'context': {
                                            'glossary': "foreach",
                                            'arguments': pm.wrapRawDictionary({}),
                                        },
                                        'function': "EnrichedDictionaryForEach",
                                    },
                                })
                            }]
                        },
                    })
                }
            })
        }
    }
}