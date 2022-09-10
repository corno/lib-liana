import * as pw from "pareto-core-raw"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"

import * as pareto from "../../modules/pareto"

import * as api from "../../interface"

export const mapToPareto: api.FMapToPareto = ($) => {

    function mapModule<PAnnotation>($: api.TSchema<PAnnotation>): pareto.TModule<null | PAnnotation> {

        type A = null | PAnnotation

        function createLocalType(
            $: {
                type: api.TLocalType<PAnnotation>,
                resolved: boolean,
                namespaceStack: pm.ArrayBuilder<string>,
            }
        ): pareto.TLocalType<A> {
            const namespaceStack = $.namespaceStack
            const resolved = $.resolved
            return {
                'annotation': $.type.annotation,
                'optional': $.type.optional,
                'type': pl.cc($.type, ($): pareto.TTypeType<A> => {
                    switch ($.type[0]) {
                        case 'boolean':
                            return pl.cc($.type[1], ($) => {
                                return ['boolean', {}]
                            })
                        case 'dictionary':
                            return pl.cc($.type[1], ($) => {
                                return ['dictionary', createLocalType({
                                    type: $,
                                    namespaceStack: namespaceStack,
                                    resolved: resolved,
                                })]
                            })
                        case 'group':
                            return pl.cc($.type[1], ($) => {
                                return ['group', {
                                    'properties': $.properties.map(($) => {
                                        return {
                                            'optional': !resolved,
                                            'type': createLocalType({
                                                type: $.type,
                                                namespaceStack: namespaceStack,
                                                resolved: resolved,
                                            })
                                        }
                                    })
                                }]
                            })
                        case 'list':
                            return pl.cc($.type[1], ($) => {
                                return ['list', createLocalType({
                                    type: $,
                                    namespaceStack: namespaceStack,
                                    resolved: resolved,
                                })]
                            })
                        case 'null':
                            return pl.cc($.type[1], ($) => {
                                return ['null', {}]
                            })
                        case 'component':
                            return pl.cc($.type[1], ($) => {
                                return ['component', pl.cc($, ($): pareto.TReferenceType<A> => {
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
                                    if (resolved) {

                                        return ['reference', {
                                            'type': $.reference,
                                        }]
                                    } else {

                                        return ['group', {
                                            'properties': pw.wrapRawDictionary({
                                                "name": {
                                                    'optional': false,
                                                    'type': {
                                                        'optional': false,
                                                        'annotation': null,
                                                        'type': ['string', {}]
                                                    },
                                                },
                                                "annotation": {
                                                    'optional': false,
                                                    'type': {
                                                        'annotation': null,
                                                        'optional': false,
                                                        'type': ['string', {}]
                                                    },
                                                }
                                            }),
                                        }]
                                    }
                                }
                            })
                        case 'tagged union':
                            return pl.cc($.type[1], ($) => {
                                return ['tagged union', {
                                    'options': $.options.map(($) => createLocalType({
                                        type: $,
                                        namespaceStack: namespaceStack,
                                        resolved: resolved,
                                    }))
                                }]
                            })
                        default: return pl.au($.type[0])
                    }
                })
            }
        }
        function createTypes($: {
            schema: api.TSchema<PAnnotation>,
            resolved: boolean,
        }): pareto.TNamespace<A> {
            const resolved = $.resolved
            return {
                'parameters': pw.wrapRawDictionary({ "Annotation": null }),
                'namespaces': pw.wrapRawDictionary({
                    "globalTypes": {
                        'parameters': pw.wrapRawDictionary({}),
                        'namespaces': pw.wrapRawDictionary({}),
                        'types': $.schema["global types"].map(($) => {
                            return createLocalType({
                                type: $,
                                namespaceStack: pl.cc($, ($) => {
                                    const x = pm.createArrayBuilder<string>()
                                    x.push("globalTypes")
                                    return x
                                }),
                                resolved: resolved,
                            })
                        }),
                    }
                }),
                'types': pw.wrapRawDictionary<pareto.TGlobalType<A>>({
                    "root": createLocalType({
                        type: $.schema.root,
                        namespaceStack: pl.cc($, ($) => {
                            const x = pm.createArrayBuilder<string>()
                            x.push("globalTypes")
                            return x
                        }),
                        resolved: resolved,
                    }),
                }),
            }
        }
        return {
            'interface': {
                'imports': pw.wrapRawDictionary({}),
                'namespace': {
                    'parameters': pw.wrapRawDictionary({}),
                    'namespaces': pw.wrapRawDictionary({
                        "resolved": createTypes({
                            schema: $,
                            resolved: true
                        }),
                        "unresolved": createTypes({
                            schema: $,
                            resolved: false,
                        }),
                    }),
                    'types': pw.wrapRawDictionary({}),
                },
                'interfaces': pw.wrapRawDictionary({}),
                'dependencies': pw.wrapRawDictionary({}),
                'functions': pw.wrapRawDictionary<pareto.TFunctionDefinition<A>>({
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
                                'properties': pw.wrapRawDictionary<pareto.TLocalInterface<A>>({
                                    "onError": {
                                        'annotation': null,
                                        'type': ["group", {
                                            'properties': pw.wrapRawDictionary<pareto.TLocalInterface<A>>({})
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
            // 'implementation': {
            //     'public functions': pw.wrapRawDictionary<pareto.TPublicFunctionImplementation<A>>({
            //         "resolve": {
            //             'definition': {
            //                 'name': {
            //                     'annotation': null,
            //                     'name': "Resolve",
            //                 },

            //             },
            //             'implementation': {
            //                 'statement': {
            //                     'type': ["return", {}]
            //                 }
            //             },
            //         },
            //     }),
            //     'private functions': pw.wrapRawDictionary({}),
            // },
        }

    }
    return {
        'imports': pw.wrapRawDictionary({}),
        'root': mapModule($)
    }
}