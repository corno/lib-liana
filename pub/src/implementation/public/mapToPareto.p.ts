import * as pw from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import * as pareto from "../../modules/pareto"

import * as api from "../../interface"

export const mapToPareto: api.FMapToPareto = ($) => {

    function foo<PAnnotation>($: api.TSchema<PAnnotation>): pareto.TModule<null | PAnnotation> {

        function createLocalType(
            $: api.TLocalType<PAnnotation>
        ): pareto.TLocalType<null | PAnnotation> {
            return {
                'annotation': $.annotation,
                'optional': $.optional,
                'type': pl.cc($.type, ($): pareto.TTypeType<null | PAnnotation> => {
                    switch ($[0]) {
                        case 'boolean':
                            return pl.cc($[1], ($) => {
                                return ['boolean', {}]
                            })
                        case 'dictionary':
                            return pl.cc($[1], ($) => {
                                return ['dictionary', createLocalType($)]
                            })
                        case 'group':
                            return pl.cc($[1], ($) => {
                                return ['group', {
                                    'properties': $.properties.map(($) => createLocalType($))
                                }]
                            })
                        case 'list':
                            return pl.cc($[1], ($) => {
                                return ['list', createLocalType($)]
                            })
                        case 'null':
                            return pl.cc($[1], ($) => {
                                return ['null', {}]
                            })
                        case 'reference':
                            return pl.cc($[1], ($) => {
                                return ['reference', pl.cc($, ($): pareto.TReferenceType<null | PAnnotation> => {
                                    switch ($.type[0]) {
                                        case "parameter":
                                            return pl.cc($.type[1], ($) => {
                                                return ["parameter", {
                                                    'parameter': {
                                                        'name': $.parameter,
                                                    }
                                                }]
                                            })
                                        case "type":
                                            return pl.cc($.type[1], ($) => {
                                                return ["type", {
                                                    'type': pl.cc($, ($) => {
                                                        return ['sibling', {
                                                            'global type': {
                                                                name: $["global type"]
                                                            },
                                                        }]
                                                    }),
                                                    'arguments': pw.wrapRawDictionary({}),
                                                }]
                                            })
                                        default: return pl.au($.type[0])
                                    }
                                })]
                            })
                        case 'string':
                            return pl.cc($[1], ($) => {
                                return ['string', {}]
                            })
                        case 'tagged union':
                            return pl.cc($[1], ($) => {
                                return ['tagged union', {
                                    'options': $.options.map(($) => createLocalType($))
                                }]
                            })
                        default: return pl.au($[0])
                    }
                })
            }
        }
        return {
            'interface': {
                'imports': pw.wrapRawDictionary({}),
                'namespace': {
                    'parameters': pw.wrapRawDictionary({ "Annotation": null }),
                    'namespaces': pw.wrapRawDictionary({
                        "globalTypes": {
                            'parameters': pw.wrapRawDictionary({}),
                            'namespaces': pw.wrapRawDictionary({}),
                            'types': $["global types"].map(($) => {
                                return createLocalType($)
                            }),
                        }
                    }),
                    'types': pw.wrapRawDictionary<pareto.TGlobalType<PAnnotation | null>>({
                        "root": createLocalType($.root),
                    }),
                },
                'interfaces': pw.wrapRawDictionary({}),
                'dependencies': pw.wrapRawDictionary({}),
                'functions': pw.wrapRawDictionary<pareto.TFunctionDefinition<PAnnotation | null>>({
                    "Resolve": {
                        'type parameters': pw.wrapRawDictionary({ "Annotation": null }),
                        'type': {
                            'annotation': null,
                            'optional': false,
                            'type': ["null", {}],
                        },
                        'interface': {
                            'annotation': null,
                            'type': ["group", {
                                'properties': pw.wrapRawDictionary<pareto.TLocalInterface<PAnnotation | null>>({
                                    "onError": {
                                        'annotation': null,
                                        'type': ["group", {
                                            'properties': pw.wrapRawDictionary<pareto.TLocalInterface<PAnnotation | null>>({})
                                        }]
                                    }
                                })
                            }]
                        },
                        'return type': ["unmanaged", {
                            'type': ["type", {
                                'async': false,
                                'type': {
                                    'annotation': null,
                                    'optional': false,
                                    'type': ["boolean", {}]
                                }
                            }]
                        }],
                    }
                }),
            },
            'implementation': {
                'public functions': pw.wrapRawDictionary<pareto.TPublicFunctionImplementation<PAnnotation | null>>({
                    "resolve": {
                        'definition': {
                            'name': {
                                'annotation': null,
                                'name': "Resolve",
                            },

                        },
                        'implementation': {
                            'statement': {
                                'type': ["return", {}]
                            }
                        },
                    },
                }),
                'private functions': pw.wrapRawDictionary({}),
            },
        }

    }
    return foo($)
}