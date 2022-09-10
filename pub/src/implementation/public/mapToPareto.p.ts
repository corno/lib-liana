import * as pw from "pareto-core-raw"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"

import * as pareto from "../../modules/pareto"

import * as api from "../../interface"

export const mapToPareto: api.FMapToPareto = ($) => {

    function mapModule<PAnnotation>($: api.TSchema<PAnnotation>): pareto.TModule<null | PAnnotation> {

        function createLocalType(
            $: {
                type: api.TLocalType<PAnnotation>,
                namespaceStack: pm.ArrayBuilder<string>,
            }
        ): pareto.TLocalType<null | PAnnotation> {
            const namespaceStack = $.namespaceStack
            return {
                'annotation': $.type.annotation,
                'optional': $.type.optional,
                'type': pl.cc($.type, ($): pareto.TTypeType<null | PAnnotation> => {
                    switch ($.type[0]) {
                        case 'boolean':
                            return pl.cc($.type[1], ($) => {
                                return ['boolean', {}]
                            })
                        case 'dictionary':
                            return pl.cc($.type[1], ($) => {
                                return ['dictionary', createLocalType({
                                    type: $,
                                    namespaceStack: namespaceStack
                                })]
                            })
                        case 'group':
                            return pl.cc($.type[1], ($) => {
                                return ['group', {
                                    'properties': $.properties.map(($) => createLocalType({
                                        type: $,
                                        namespaceStack: namespaceStack
                                    }))
                                }]
                            })
                        case 'list':
                            return pl.cc($.type[1], ($) => {
                                return ['list', createLocalType({
                                    type: $,
                                    namespaceStack: namespaceStack
                                })]
                            })
                        case 'null':
                            return pl.cc($.type[1], ($) => {
                                return ['null', {}]
                            })
                        case 'component':
                            return pl.cc($.type[1], ($) => {
                                return ['component', pl.cc($, ($): pareto.TReferenceType<null | PAnnotation> => {
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
                                                            'namespace steps': namespaceStack.getArray().map(($) => {
                                                                return {
                                                                    'name': {
                                                                        'name': `${$}`,
                                                                        'annotation': null,
                                                                    }
                                                                }
                                                            }),
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
                            return pl.cc($.type[1], ($) => {
                                if ($.reference === undefined) {
                                    return ['string', {}]
                                } else {
                                    return ['reference', {
                                        'type': $.reference,
                                    }]
                                }
                            })
                        case 'tagged union':
                            return pl.cc($.type[1], ($) => {
                                return ['tagged union', {
                                    'options': $.options.map(($) => createLocalType({
                                        type: $,
                                        namespaceStack: namespaceStack,
                                    }))
                                }]
                            })
                        default: return pl.au($.type[0])
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
                                return createLocalType({
                                    type: $,
                                    namespaceStack: pl.cc($, ($) => {
                                        const x = pm.createArrayBuilder<string>()
                                        x.push("globalTypes")
                                        return x
                                    }),
                                })
                            }),
                        }
                    }),
                    'types': pw.wrapRawDictionary<pareto.TGlobalType<PAnnotation | null>>({
                        "root": createLocalType({
                            type: $.root,
                            namespaceStack: pl.cc($, ($) => {
                                const x = pm.createArrayBuilder<string>()
                                x.push("globalTypes")
                                return x
                            }),
                        }),
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
    return {
        'imports': pw.wrapRawDictionary({}),
        'root': mapModule($)
    }
}