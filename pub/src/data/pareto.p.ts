import * as pw from "pareto-core-raw"

import * as api from "../interface"

export type TP = undefined | string

export const pareto: api.TSchema<TP> = {
    'global types': pw.wrapRawDictionary<api.TLocalType<TP>>({
        "Module": {
            'annotation': undefined,
            'optional': false,
            'type': ['group', {
                'properties': pw.wrapRawDictionary({

                })
            }]
        }
    }),
    'root': {
        'annotation': undefined,
        'optional': false,
        'type': ['group', {
            'properties': pw.wrapRawDictionary<api.TLocalType<TP>>({
                "module": {
                    'annotation': undefined,
                    'optional': false,
                    'type': ['reference', {
                        'type': ["type", {
                            'global type': {
                                'name': "Module",
                                'annotation': undefined,
                                //'type': 
                            },
                            'arguments': pw.wrapRawDictionary<api.TLocalType<TP>>({})
                        }]
                    }]
                }
            })

        }]
    }
}