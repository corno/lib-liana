import * as pw from "pareto-core-raw"
import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"

import * as pareto from "../../modules/pareto"

import * as api from "../../interface"

function createReference<PAnnotation, PT>($: string, ann: PAnnotation): pareto.Reference<PAnnotation, PT> {
    return {
        'name': {
            'annotation': ann,
            'name': $,
        },
        // 'type': type,
    }
}

export const mapToPareto: api.FMapToPareto = ($) => {

    function mapModule<PAnnotation>($: api.TSchema<PAnnotation>): pareto.TModule<null | PAnnotation> {

        type A = null | PAnnotation

        function createLocalTypeNamespace(
            $: {
                type: api.TLocalType<PAnnotation>,
                resolved: boolean,
                namespaceStack: pm.ArrayBuilder<string>,
            }
        ): pareto.TNamespace<A> {
            const config = $
            return {
                parameters: pw.wrapRawDictionary({}),
                namespaces: pl.cc($.type, ($) => {
                    switch ($.type[0]) {
                        case "boolean":
                            return pl.cc($.type[1], ($) => {
                                return pl.createEmptyDictionary()
                            })
                        case "component":
                            return pl.cc($.type[1], ($) => {
                                return pl.createEmptyDictionary()

                            })
                        case "group":
                            return pl.cc($.type[1], ($) => {
                                return $.properties.map(($) => {
                                    return createLocalTypeNamespace({
                                        type: $.type,
                                        resolved: config.resolved,
                                        namespaceStack: config.namespaceStack //FIXME!!!

                                    })
                                })


                            })
                        case "null":
                            return pl.cc($.type[1], ($) => {
                                return pl.createEmptyDictionary()

                            })
                        case "string":
                            return pl.cc($.type[1], ($) => {
                                return pl.createEmptyDictionary()

                            })
                        case "tagged union":
                            return pl.cc($.type[1], ($) => {
                                return $.options.map(($) => {
                                    return createLocalTypeNamespace({
                                        type: $,
                                        resolved: config.resolved,
                                        namespaceStack: config.namespaceStack //FIXME!!!

                                    })
                                })

                            })
                        default: return pl.au($.type[0])
                    }
                }),
                types: pl.cc($.type, ($) => {
                    return pw.wrapRawDictionary({
                        "typeXXX": {
                            'optional': false,
                            'annotation': null,
                            'collections': $.collections.map(($) => {
                                switch ($[0]) {
                                    case "dictionary":
                                        return pl.cc($[1], ($) => {
                                            return ["dictionary", null]
                                        })
                                    case "list":
                                        return pl.cc($[1], ($) => {
                                            return ["list", null]
                                        })
                                    default: return pl.au($[0])
                                }
                            }),
                            'type': pl.cc($.type, ($): pareto.TTypeType<A> => {
                                switch ($[0]) {
                                    case 'boolean':
                                        return pl.cc($[1], ($) => {
                                            return ['boolean', {}]
                                        })
                                    case 'group':
                                        return pl.cc($[1], ($) => {
                                            return ['group', {
                                                'properties': $.properties.map(($, key) => {
                                                    return {
                                                        'optional': !config.resolved,
                                                        'type': {
                                                            'optional': false,
                                                            'annotation': null,
                                                            'collections': pw.wrapRawArray([]),
                                                            'type': ['component', pl.cc($, ($): pareto.TReferenceType<A> => {
                                                                return ["type", {
                                                                    'type': pl.cc($, ($) => {
                                                                        return ['sibling', {
                                                                            'namespace steps': pw.wrapRawArray([createReference(key, null)]),
                                                                            'global type': {
                                                                                name: {
                                                                                    annotation: null,
                                                                                    name: "typeXXX"
                                                                                }
                                                                            },
                                                                        }]
                                                                    }),
                                                                    'arguments': pw.wrapRawDictionary({}),
                                                                }]
                                                            })]
                                                        }
                                                    }
                                                })
                                            }]
                                            // return $.properties.map(($, key) => {
                                            //     return


                                            // })
                                        })
                                    case 'null':
                                        return pl.cc($[1], ($) => {
                                            return ['null', {}]
                                        })
                                    case 'component':
                                        return pl.cc($[1], ($) => {
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
                                                                        'namespace steps': config.namespaceStack.getArray().map(($) => {
                                                                            return createReference($, null)
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
                                        return pl.cc($[1], ($) => {
                                            if ($.reference === undefined) {
                                                return ['string', {}]
                                            } else {
                                                if (config.resolved) {

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
                                                                    'collections': pw.wrapRawArray([]),
                                                                    'type': ['string', {}]
                                                                },
                                                            },
                                                            "annotation": {
                                                                'optional': false,
                                                                'type': {
                                                                    'annotation': null,
                                                                    'optional': false,
                                                                    'collections': pw.wrapRawArray([]),
                                                                    'type': ['string', {}]
                                                                },
                                                            }
                                                        }),
                                                    }]
                                                }
                                            }
                                        })
                                    case 'tagged union':
                                        return pl.cc($[1], ($) => {
                                            return ['tagged union', {
                                                'options': $.options.map(($, key) => {
                                                    return {
                                                        'optional': false,
                                                        'annotation': null,
                                                        'collections': pw.wrapRawArray([]),
                                                        'type': ['component', pl.cc($, ($): pareto.TReferenceType<A> => {
                                                            return ["type", {
                                                                'type': pl.cc($, ($) => {
                                                                    return ['sibling', {
                                                                        'namespace steps': pw.wrapRawArray([createReference(key, null)]),
                                                                        'global type': {
                                                                            name: {
                                                                                annotation: null,
                                                                                name: "typeXXX"
                                                                            }
                                                                        },
                                                                    }]
                                                                }),
                                                                'arguments': pw.wrapRawDictionary({}),
                                                            }]
                                                        })]
                                                    }
                                                })
                                            }]
                                            // return $.options.map(($, key) => {
                                            //     return ['component', pl.cc($, ($): pareto.TReferenceType<A> => {
                                            //         return ["type", {
                                            //             'type': pl.cc($, ($) => {
                                            //                 return ['sibling', {
                                            //                     'namespace steps': pw.wrapRawArray([createReference(key, null)]),
                                            //                     'global type': {
                                            //                         name: {
                                            //                             annotation: null,
                                            //                             name: "TypeXXX"
                                            //                         }
                                            //                     },
                                            //                 }]
                                            //             }),
                                            //             'arguments': pw.wrapRawDictionary({}),
                                            //         }]
                                            //     })]

                                            // })
                                        })
                                    default: return pl.au($[0])
                                }
                            })
                        }
                    })
                }),
            }
        }
        function createTypes($: {
            schema: api.TSchema<PAnnotation>,
            resolved: boolean,
        }): pareto.TNamespace<A> {
            const config = $
            function createLocalType(
                $: {
                    type: api.TLocalType<PAnnotation>,
                    namespaceStack: pm.ArrayBuilder<string>,
                    name: string,
                }
            ): pareto.TLocalType<A> {
                const config = $
                return {
                    'annotation': $.type.annotation,
                    'optional': $.type.optional,
                    'collections': $.type.collections.map(($) => {
                        return $
                    }),
                    'type': pl.cc($.type, ($): pareto.TTypeType<A> => {
                        return ['component', pl.cc($, ($): pareto.TReferenceType<A> => {
                            return ["type", {
                                'type': pl.cc($, ($) => {
                                    return ['sibling', {
                                        'namespace steps': pw.wrapRawArray([createReference(config.name, null)]),
                                        'global type': {
                                            name: {
                                                name: "typeXXX",
                                                annotation: null,
                                            }
                                        },
                                    }]
                                }),
                                'arguments': pw.wrapRawDictionary({}),
                            }]
                        })]
                    })
                }
            }
            return {
                'parameters': pw.wrapRawDictionary({ "Annotation": null }),
                'namespaces': pw.wrapRawDictionary({
                    "globalTypes": {
                        'parameters': pw.wrapRawDictionary({}),
                        'namespaces': $.schema["global types"].map(($) => {
                            return createLocalTypeNamespace({
                                type: $.type,
                                namespaceStack: pl.cc($, ($) => {
                                    const x = pm.createArrayBuilder<string>()
                                    x.push("globalTypes")
                                    return x
                                }),
                                resolved: config.resolved,
                            })
                        }),
                        'types': $.schema["global types"].map(($, key) => {
                            return createLocalType({
                                type: $.type,
                                namespaceStack: pl.cc($, ($) => {
                                    const x = pm.createArrayBuilder<string>()
                                    x.push("globalTypes")
                                    return x
                                }),
                                name: key,
                            })
                        }),
                    },
                    "root": createLocalTypeNamespace({
                        type: $.schema.root,
                        namespaceStack: pl.cc($, ($) => {
                            const x = pm.createArrayBuilder<string>()
                            x.push("globalTypes")
                            return x
                        }),
                        resolved: config.resolved,
                    })
                }),
                'types': pw.wrapRawDictionary<pareto.TGlobalType<A>>({
                    "root": createLocalType({
                        type: $.schema.root,
                        namespaceStack: pl.cc($, ($) => {
                            const x = pm.createArrayBuilder<string>()
                            x.push("globalTypes")
                            return x
                        }),
                        name: "root",
                    }),
                }),
            }
        }
        function expression(
            $: api.TLocalType<PAnnotation>
        ): pareto.TExpression<A> {
            return {
                'collections': $.collections.map(($) => {
                    switch ($[0]) {
                        case "dictionary":
                            return pl.cc($[1], ($) => {
                                return ["dictionary", null]
                            })
                        case "list":
                            return pl.cc($[1], ($) => {
                                return ["array", null]
                            })
                        default: return pl.au($[0])
                    }
                }),
                'type': pl.cc($, ($): pareto.Expression.TType<A> => {
                    switch ($.type[0]) {
                        case "boolean":
                            return pl.cc($.type[1], ($) => {
                                return ['context', {

                                    'tail': pw.wrapRawArray([])

                                }]

                            })
                        case "component":
                            return pl.cc($.type[1], ($) => {
                                switch ($.type[0]) {
                                    case "parameter":
                                        return pl.cc($.type[1], ($) => {
                                            return ['call', {
                                                'function': "FIXME_COMPONENT_PARAMETER",
                                                'data': {
                                                    'collections': pw.wrapRawArray([]),
                                                    'type': ['context', {

                                                        'tail': pw.wrapRawArray([])

                                                    }]
                                                },
                                                'interfaces': {
                                                    'collections': pw.wrapRawArray([]),
                                                    'type': ['variable', {
                                                        'variable': "$i"
                                                    }]
                                                },
                                            }]
                                        })
                                    case "type":
                                        return pl.cc($.type[1], ($) => {
                                            return ['call', {
                                                'function': $["global type"].name,
                                                'data': {
                                                    'collections': pw.wrapRawArray([]),
                                                    'type': ['context', {

                                                        'tail': pw.wrapRawArray([])

                                                    }]
                                                },
                                                'interfaces': {
                                                    'collections': pw.wrapRawArray([]),
                                                    'type': ['variable', {
                                                        'variable': "$i"
                                                    }]
                                                },
                                            }]
                                        })
                                    default: return pl.au($.type[0])
                                }

                            })
                        case "group":
                            return pl.cc($.type[1], ($) => {
                                return ['group type instantiation', {
                                    'properties': $.properties.map(($, key): pareto.TExpression<A> => {
                                        return {
                                            'collections': pw.wrapRawArray([]),
                                            'type': ['property selection possibly undefined', {
                                                'name': key,
                                                'undefined': {
                                                    'collections': pw.wrapRawArray([]),
                                                    'type': ['panic', {
                                                        'message': "UNDEFINED"
                                                    }]
                                                },
                                                'set': expression($.type),
                                            }]
                                        }
                                    }),
                                }]

                            })
                        case "null":
                            return pl.cc($.type[1], ($) => {
                                return ['context', {

                                    'tail': pw.wrapRawArray([])
                                }]

                            })
                        case "string":
                            return pl.cc($.type[1], ($) => {
                                if ($.reference !== null) {
                                    return ['group type instantiation', {
                                        'properties': pw.wrapRawDictionary({
                                            "name": {
                                                'collections': pw.wrapRawArray([]),
                                                'type': ['context', { tail: pw.wrapRawArray([]) }]
                                            }
                                        })
                                    }]

                                } else {
                                    return ['context', {
                                        'tail': pw.wrapRawArray(['name'])
                                    }]

                                }

                            })
                        case "tagged union":
                            return pl.cc($.type[1], ($) => {
                                return ['switch', {
                                    'options': $.options.map(($, key) => {
                                        return {
                                            'collections': pw.wrapRawArray([]),
                                            'type': ['tagged union instantiation', {
                                                'state': key,
                                                'data': expression($),
                                            }]

                                        }
                                    })
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
                            'collections': pw.wrapRawArray([]),
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
                                    'collections': pw.wrapRawArray([]),
                                    'type': ["boolean", {}]
                                }
                            }]
                        }],
                    }
                }),
            },
            'implementation': {
                'public functions': pw.wrapRawDictionary<pareto.TPublicFunctionImplementation<A>>({
                    "resolve": {
                        'definition': createReference("Resolve", null),
                        'implementation': {
                            'statement': {
                                'type': ["implement me", { 'message': "FOO" }]
                            }
                        },
                    },
                }),
                'private functions': $["global types"].map(($, key): pareto.TPrivateFunction<A> => {
                    return {
                        'sibling dependencies': $.siblingDependencies.map(($) => {
                            return $
                        }),
                        'definition': {
                            'type parameters': pl.createEmptyDictionary(),
                            'type': {
                                'annotation': $.type.annotation,
                                'collections': $.type.collections.map(($) => {
                                    switch ($[0]) {
                                        case "dictionary":
                                            return pl.cc($[1], ($) => {
                                                return ["dictionary", null]
                                            })
                                        case "list":
                                            return pl.cc($[1], ($) => {
                                                return ["list", null]
                                            })
                                        default: return pl.au($[0])
                                    }
                                }),
                                'optional': false,
                                'type': ["component", ["type", {
                                    'type': ['sibling', {
                                        'namespace steps': pw.wrapRawArray([createReference("unresolved", null), createReference("globalTypes", null)]),
                                        'global type': createReference(key, null),
                                    }],
                                    'arguments': pw.wrapRawDictionary({}),
                                }]],
                            },
                            'interface': {
                                'annotation': null,
                                'type': ["group", {
                                    'properties': pl.createEmptyDictionary(),
                                }]
                            },
                            'return type': ["unmanaged", {
                                'type': ['type', {
                                    'async': false,
                                    'type': {
                                        'annotation': null,
                                        'collections': pl.createEmptyArray(),
                                        'optional': false,
                                        'type': ["component", ["type", {
                                            'type': ['sibling', {
                                                'namespace steps': pw.wrapRawArray([createReference("resolved", null), createReference("globalTypes", null)]),
                                                'global type': createReference(key, null),
                                            }],
                                            'arguments': pw.wrapRawDictionary({}),
                                        }]]
                                    }
                                }]
                            }],
                        },
                        'implementation': {
                            'statement': {
                                'type': ['return', {
                                    'expression': expression(
                                        $.type,
                                    )
                                }]
                            }
                        }
                    }
                }),
            },
        }

    }
    return {
        'imports': pw.wrapRawDictionary({}),
        'root': mapModule($)
    }
}