import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_liana from "../../liana"
import * as g_liana2glossary from "../../liana2glossary"

import { A } from "../api.generated"

export const $$: A.map = ($d) => {
    return <Annotation>($: g_this.T.MapData<Annotation>): g_glossary.T.Glossary<g_this.T.OutAnnotation<Annotation>> => {
        const library = $['mapped library']
        const terminalMapping = $['mapped library']['terminal mapping']
        const settings = $.settings
        function createOptionalAnnotation(): pt.OptionalValue<g_glossary.T.Type.group.D<g_this.T.OutAnnotation<Annotation>>> {
            return settings.annotations
                ? [true, {
                    'type': ['reference', ['glossary parameter', "Annotation"]],
                }]
                : [false]
        }
        function createOptionalConstraint(
            $x: g_liana2glossary.T.MapData.settings.datamodel.O<Annotation>,
            $cb: () => g_glossary.T.DataSpecifier._ltype<g_this.T.OutAnnotation<Annotation>>
        ): pt.OptionalValue<g_glossary.T.Type.group.D<g_this.T.OutAnnotation<Annotation>>> {
            return pl.optional(
                $x['constraints mapping'].constraints,
                ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'optional': return pl.ss($, ($) => [true, {
                            'type': ['optional', ['reference', ['type', $cb()]]]
                        }])
                        case 'required': return pl.ss($, ($) => [true, {
                            'type': ['reference', ['type', $cb()]]
                        }])
                        default: return pl.au($[0])
                    }
                }),
                () => [false],
            )
        }
        function mapTypeSelection(
            $: g_liana.T.Type__Selection<Annotation>,
            getLastStep: () => string
        ): g_glossary.T.DataSpecifier._ltype<g_this.T.OutAnnotation<Annotation>> {
            return {
                'context': pl.optional(
                    $['global type'].import,
                    ($): g_glossary.T.Context<g_this.T.OutAnnotation<Annotation>> => ['import', {
                        'glossary': {
                            'annotation': ['source', $.annotation],
                            'key': $.key
                        }
                    }],
                    () => ['local', null],
                ),
                'arguments': pm.wrapRawDictionary({}),
                'type': $['global type'].type.key,
                'tail': $d.push({
                    'array': $d.merge($.tail.map(($) => {
                        return pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'array': return pl.ss($, ($) => pm.wrapRawArray(["A"]))
                                case 'dictionary': return pl.ss($, ($) => pm.wrapRawArray(["D"]))
                                case 'group': return pl.ss($, ($) => pm.wrapRawArray([$.type.property.key]))
                                case 'optional': return pl.ss($, ($) => pm.wrapRawArray(["O"]))
                                case 'tagged union': return pl.ss($, ($) => pm.wrapRawArray([$.type.option.key]))
                                default: return pl.au($[0])
                            }
                        })
                    })),
                    'element': getLastStep(),
                }),
            }
        }
        function mapTypeToNamespace($: g_liana.T.Type<Annotation>): g_glossary.T.Namespace<g_this.T.OutAnnotation<Annotation>> {
            return {
                'namespaces': pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'array': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "A": mapTypeToNamespace($.type)
                        }))
                        case 'optional': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "O": mapTypeToNamespace($.type)
                        }))
                        case 'component': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'dictionary': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "D": mapTypeToNamespace($.type)
                        }))
                        case 'group': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "G": {
                                'namespaces': $.properties.map(($) => mapTypeToNamespace($.type)),
                                'types': pm.wrapRawDictionary({}),
                            }
                        }))
                        case 'terminal': return pl.ss($, ($) => pm.wrapRawDictionary({}))
                        case 'tagged union': return pl.ss($, ($) => pm.wrapRawDictionary({
                            "TU": {
                                'namespaces': $.options.map(($) => mapTypeToNamespace($.type)),
                                'types': pm.wrapRawDictionary({}),
                            }
                        }))
                        default: return pl.au($[0])
                    }
                }),
                'types': pl.cc($, ($) => pm.wrapRawDictionary({})),
            }
        }
        // function ref(type: string): g_glossary.T.Type {
        //     return ['reference', {
        //         'context': ['local', null],
        //         'type': {
        //             'annotation': "SSDF",
        //             'name': type
        //         },
        //     }]
        // }

        // function generateBlock($: g_liana.T.LocalType): g_algorithm.TFunctionBlock {
        //     return {
        //         'returnExpression': generateExpression($)
        //     }
        // }
        // function generateExpression($: g_liana.T.LocalType): g_algorithm.TExpression {
        //     switch ($[0]) {
        //         case 'array':
        //             return pl.ss($, ($) => {
        //                 return ['mapArray', {
        //                     'block': generateBlock($.type),
        //                 }]
        //             })
        //         case 'boolean':
        //             return pl.ss($, ($) => {
        //                 return ['implementMe', "liana2pareto"]
        //             })
        //         case 'component':
        //             return pl.ss($, ($) => {
        //                 return ['call', {
        //                     'function': $.type.name
        //                 }]
        //             })
        //         case 'dictionary':
        //             return pl.ss($, ($) => {
        //                 return ['mapDictionary', {
        //                     'block': generateBlock($.type),
        //                 }]
        //             })
        //         case 'group':
        //             return pl.ss($, ($) => {
        //                 return ['groupInitializer', {
        //                     'properties': $.properties.dictionary.map(($) => {
        //                         return generateExpression($.type)
        //                     })
        //                 }]
        //             })
        //         case 'string':
        //             return pl.ss($, ($) => {
        //                 return ['implementMe', "liana2pareto"]
        //             })
        //         case 'tagged union':
        //             return pl.ss($, ($) => {
        //                 return ['switch', {
        //                     'cases': $.options.dictionary.map(($) => {
        //                         return generateBlock($.type)
        //                     })
        //                 }]
        //             })
        //         default: return pl.au($[0])
        //     }
        // }
        function mapTypeToType($: g_liana.T.Type<Annotation>, $x: g_liana2glossary.T.MapData.settings.datamodel.O<Annotation>): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> {
            switch ($[0]) {
                case 'array': return pl.ss($, ($) => ['array', mapTypeToType($.type, $x)])
                case 'optional': return pl.ss($, ($) => ['optional', mapTypeToType($.type, $x)])
                case 'component': return pl.ss($, ($) => ['reference', ['type', {
                    'context': pl.cc($, ($) => {
                        switch ($.context[0]) {
                            case 'import': return pl.ss($.context, ($): g_glossary.T.Context<g_this.T.OutAnnotation<Annotation>> => ['import', {
                                'glossary': {
                                    'annotation': ['source', $.library.annotation],
                                    'key': $.library.key,
                                },
                            }])
                            case 'local': return pl.ss($.context, ($) => ['local', null])
                            default: return pl.au($.context[0])
                        }
                    }),
                    'type': $.type.key,
                    'tail': pm.wrapRawArray([]),
                    'arguments': pm.wrapRawDictionary<g_glossary.T.DataSpecifier<g_this.T.OutAnnotation<Annotation>>>({}),
                }]])
                case 'dictionary': return pl.ss($, ($) => pl.cc($, ($) => {
                    const type = $.type
                    
                    return $d.isEmpty($.constraints)
                        ? mapTypeToType(type, $x)
                        : ['group', pm.wrapRawDictionary({
                            "constraints": {
                                'type': ['group', $.constraints.map(($) => {
                                    return {
                                        'type': ['group', $d.filter(pm.wrapRawDictionary({
                                            "annotation": createOptionalAnnotation(),
                                            "constraint": createOptionalConstraint($x, () => mapTypeSelection($['temp type path'], () => "D")),
        
                                        }))]
                                    }
                                })]
                            },
                            "type": {
                                'type': mapTypeToType(type, $x)
                            }
                        })]
                }))
                case 'group': return pl.ss($, ($) => ['group', $.properties.map(($) => ({
                    'type': mapTypeToType($.type, $x),
                }))])
                case 'terminal': return pl.ss($, ($) => {
                    const term = $.terminal
                    switch ($.constrained[0]) {
                        case 'no': return pl.ss($.constrained, ($) => terminalMapping.__getEntry(
                            term.type.key,
                            ($) => {
                                switch ($[0]) {
                                    case 'boolean': return pl.ss($, ($) => ['boolean', null])
                                    case 'number': return pl.ss($, ($) => ['number', null])
                                    case 'string': return pl.ss($, ($) => ['string', null])
                                    default: return pl.au($[0])
                                }
                            },
                            () => pl.panic(`MISSING TERMINAL MAPPING: ${term.type.key}`)
                        ))
                        case 'yes': return pl.ss($.constrained, ($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => ['group', $d.filter(pm.wrapRawDictionary({
                            "key": $x['constraints mapping']['terminal values']
                                ? [true, {
                                    'type': ['string', null] //FIX: resolve the right type
                                }]
                                : [false],
                            "constraint": createOptionalConstraint($x, () => mapTypeSelection($['temp type path'], () => "D")),
                            "annotation": createOptionalAnnotation(),
                            // "referencedType": $.path.map(($) => {
                            //     switch ($[0]) {
                            //         case 'array':
                            //             return pl.ss($, ($) => {
                            //                 return ['array', null]
                            //             })
                            //         case 'dictionary':
                            //             return pl.ss($, ($) => {
                            //                 return ['dictionary', null]
                            //             })
                            //         case 'group':
                            //             return pl.ss($, ($) => {
                            //                 return ['group', {
                            //                     'property': $.property
                            //                 }]
                            //             })
                            //         case 'optional':
                            //             return pl.ss($, ($) => {
                            //                 return ['optional', null]
                            //             })
                            //         case 'tagged union':
                            //             return pl.ss($, ($) => {
                            //                 return ['tagged union', {
                            //                     'option': $.option
                            //                 }]
                            //             })
                            //         default: return pl.au($[0])
                            //     }
                            // })
                        }))]
                            // return ['reference', {
                            //     'context': ['import', {
                            //         'glossary': "common",
                            //         'arguments': pm.wrapRawDictionary({}),
                            //     }],
                            //     'tail': a([]), 'type': "Reference",
                            //     'arguments': pm.wrapRawDictionary({
                            //         //"ReferencedType": <g_glossary.GTypeReference>['null', null], //FIXME
                            //     }),
                            // }]
                        )
                        default: return pl.au($.constrained[0])
                    }
                })
                case 'tagged union': return pl.ss($, ($) => ['taggedUnion', $.options.map(($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => pl.cc($, ($) => {
                    const type = $.type

                    return $d.isEmpty($.constraints)
                        ? mapTypeToType(type, $x)
                        : ['group', pm.wrapRawDictionary({
                            "constraints": {
                                'type': ['group', $.constraints.map(($) => {
                                    return {
                                        'type': ['group', $d.filter(pm.wrapRawDictionary({
                                            "annotation": createOptionalAnnotation(),
                                            "constraint": createOptionalConstraint($x, () => mapTypeSelection($.type, () => $.option.key)),
        
                                        }))]
                                    }
                                })]
                            },
                            "type": {
                                'type': mapTypeToType(type, $x)
                            }
                        })]
                    // switch ($[0]) {
                    //     case 'no': return pl.ss($, ($) => 
                    //     // case 'yes': return pl.ss($, ($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => ['dictionary', ['group', pm.wrapRawDictionary({      
                    //     //     "annotation": {
                    //     //         'type': ['reference', ['glossary parameter', "Annotation"]],
                    //     //     },
                    //     //     "type": {
                    //     //         'type': mapType2(type),
                    //     //     }
                    //     // })]])
                    //     default: return pl.au($[0])
                    // }
                }))])
                default: return pl.au($[0])
            }
        }
        return {
            'parameters': $.settings.annotations
                ? pm.wrapRawDictionary({
                    "Annotation": null,
                })
                : pm.wrapRawDictionary({}),


            'imports': $['mapped library'].library.imports.map(($) => ({
                'arguments': pm.wrapRawDictionary({
                    "Annotation": ['glossary parameter', "Annotation"]
                })
            })),
            'root': {
                'namespaces': pl.optional(
                    $.settings.datamodel,
                    ($) => library.library['global types'].map(($) => mapTypeToNamespace($.type)),
                    () => pm.wrapRawDictionary({}),
                ),
                'types': pl.optional(
                    $.settings.datamodel,
                    ($) => {
                        const dm = $
                        return library.library['global types'].map(($) => ({
                            'parameters': pm.wrapRawDictionary({}),
                            'type': mapTypeToType($.type, dm),
                        }))
                    },
                    () => pm.wrapRawDictionary({}),
                )
            },
            'asynchronous': {
                'interfaces': pm.wrapRawDictionary({}),
                'algorithms': pm.wrapRawDictionary({}),
            },
            'synchronous': {
                'interfaces': pm.wrapRawDictionary({
                    // if ($.settings['visitor interface'][0] === true) {
                    //     // add({
                    //     //     'key': "Visitor",
                    //     //     'value': ['group', {
                    //     //         'members': $.mappedModel.model['type library']['global types'].map<g_glossary.T.Interface<Annotation>>(($) => {
                    //     //             return ['method', {
                    //     //                 'data': [false], //FIXME
                    //     //                 'interface': [false], //FIXME
                    //     //             }]
                    //     //         })
                    //     //     }],
                    //     // })
                    // }


                }),
                'algorithms': $d.buildDictionary((add) => {
                    if ($.settings.algorithms.serialize[0] === true) {
                        // function typeReference(type: string): g_glossary.T.TypeReference<Annotation> {
                        //     return {
                        //         'context': ['local', null],
                        //         'type': type,
                        //         // 'type': {
                        //         //     'annotation': "SSDF",
                        //         //     'name': type
                        //         // },
                        //         'arguments': pm.wrapRawDictionary({}),
                        //     }
                        // }
                        // add({
                        //     'key': "Serialize",
                        //     'value': {
                        //         'return type': ['nothing', null],
                        //         //'data': typeReference($['mapped model'].model.root.key), //unresolved
                        //         'input builder': [false],
                        //         'output builder': [true, {
                        //             'context': ['import', {
                        //                 'glossary': "fp",
                        //                 'arguments': pm.wrapRawDictionary({}),
                        //             }],
                        //             'builder': "Line"
                        //             // 'context': ['import', {
                        //             //     'name': "fp",
                        //             //     'annotation': "FFF",
                        //             // }],
                        //             // 'interface': {
                        //             //     'name': "Line",
                        //             //     'annotation': "FFF",
                        //             // }
                        //         }],
                        //     },
                        // })
                    }
                })
            },
        }
    }
}