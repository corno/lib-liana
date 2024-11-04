import * as pm from 'pareto-core-map'
import * as pa from 'pareto-core-async'
import * as pd from 'pareto-core-dev'

import { A } from "../api.generated"
import * as g_sub_2alan_map from './submodules/2alan/map.test'
import * as g_sub_errorMessaging_createErrorMessage from './submodules/errorMessaging/createErrorMessage.test'
import * as g_sub_generate_dependencygraph_generateDependencyGraph from './submodules/generate_dependencygraph/generateDependencyGraph.test'
import * as g_sub_liana_flat_serialize from './submodules/liana_flat/serialize.test'
import * as g_sub_liana2algorithm_createResolver from './submodules/liana2algorithm/createResolver.test'
import * as g_sub_liana2paretolangdata_map from './submodules/liana2paretolangdata/map.test'
import * as g_sub_liana2tendril_map from './submodules/liana2tendril/map.test'
import * as g_sub_p2ts_temp_serializeImplementation from './submodules/p2ts_temp/serializeImplementation.test'
import * as g_sub_resolve_resolve from './submodules/resolve/resolve.test'
import * as g_sub_tendril2algorithm_create121Mapper from './submodules/tendril2algorithm/create121Mapper.test'
import * as g_sub_tendril2algorithm_mapTendril2Serializer from './submodules/tendril2algorithm/mapTendril2Serializer.test'
import * as g_sub_tendril2algorithm_mapTendril2States from './submodules/tendril2algorithm/mapTendril2States.test'
import * as g_sub_tendril2glossary_map from './submodules/tendril2glossary/map.test'

export const $$: A.getTestSet = ($) => {
    return pa.asyncValue({
        elements: pm.wrapRawDictionary({
            "main": {
                'type': [ 'subset', {
                    'elements': pm.wrapRawDictionary({})
                }]
            },
            "submodules": {
                'type': [ 'subset', {
                    'elements': pm.wrapRawDictionary({
                        "2alan": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "map":  { 'type': [ 'subset', g_sub_2alan_map.$$($) ]},
                                })
                            }]
                        },
                        "algorithm_temp": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({})
                            }]
                        },
                        "errorMessaging": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "createErrorMessage":  { 'type': [ 'subset', g_sub_errorMessaging_createErrorMessage.$$($) ]},
                                })
                            }]
                        },
                        "generate_dependencygraph": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "generateDependencyGraph":  { 'type': [ 'subset', g_sub_generate_dependencygraph_generateDependencyGraph.$$($) ]},
                                })
                            }]
                        },
                        "liana": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({})
                            }]
                        },
                        "liana_flat": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "serialize":  { 'type': [ 'subset', g_sub_liana_flat_serialize.$$($) ]},
                                })
                            }]
                        },
                        "liana_resolved": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({})
                            }]
                        },
                        "liana2algorithm": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "createResolver":  { 'type': [ 'subset', g_sub_liana2algorithm_createResolver.$$($) ]},
                                })
                            }]
                        },
                        "liana2api": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({})
                            }]
                        },
                        "liana2glossary": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({})
                            }]
                        },
                        "liana2paretolangdata": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "map":  { 'type': [ 'subset', g_sub_liana2paretolangdata_map.$$($) ]},
                                })
                            }]
                        },
                        "liana2tendril": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "map":  { 'type': [ 'subset', g_sub_liana2tendril_map.$$($) ]},
                                })
                            }]
                        },
                        "p2ts_temp": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "serializeImplementation":  { 'type': [ 'subset', g_sub_p2ts_temp_serializeImplementation.$$($) ]},
                                })
                            }]
                        },
                        "possiblyresolved": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({})
                            }]
                        },
                        "resolve": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "resolve":  { 'type': [ 'subset', g_sub_resolve_resolve.$$($) ]},
                                })
                            }]
                        },
                        "resolved": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({})
                            }]
                        },
                        "tendril": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({})
                            }]
                        },
                        "tendril2algorithm": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "create121Mapper":  { 'type': [ 'subset', g_sub_tendril2algorithm_create121Mapper.$$($) ]},
                                    "mapTendril2Serializer":  { 'type': [ 'subset', g_sub_tendril2algorithm_mapTendril2Serializer.$$($) ]},
                                    "mapTendril2States":  { 'type': [ 'subset', g_sub_tendril2algorithm_mapTendril2States.$$($) ]},
                                })
                            }]
                        },
                        "tendril2glossary": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({
                                    "map":  { 'type': [ 'subset', g_sub_tendril2glossary_map.$$($) ]},
                                })
                            }]
                        },
                        "unresolved": {
                            'type': [ 'subset', {
                                'elements': pm.wrapRawDictionary({})
                            }]
                        },
                    })
                }]
            }
        })
    })
}