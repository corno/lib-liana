import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_this from "../glossary"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_liana from "../../liana"

import { A } from "../api.generated"

export const $$: A.map = ($d) => {
    return <Annotation>($: g_this.T.MapData<Annotation>) => {
        const library = $['mapped library']
        const terminalMapping = $['mapped library']['terminal mapping']
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
        //             return pl.cc($[1], ($) => {
        //                 return ['mapArray', {
        //                     'block': generateBlock($.type),
        //                 }]
        //             })
        //         case 'boolean':
        //             return pl.cc($[1], ($) => {
        //                 return ['implementMe', "liana2pareto"]
        //             })
        //         case 'component':
        //             return pl.cc($[1], ($) => {
        //                 return ['call', {
        //                     'function': $.type.name
        //                 }]
        //             })
        //         case 'dictionary':
        //             return pl.cc($[1], ($) => {
        //                 return ['mapDictionary', {
        //                     'block': generateBlock($.type),
        //                 }]
        //             })
        //         case 'group':
        //             return pl.cc($[1], ($) => {
        //                 return ['groupInitializer', {
        //                     'properties': $.properties.dictionary.map(($) => {
        //                         return generateExpression($.type)
        //                     })
        //                 }]
        //             })
        //         case 'string':
        //             return pl.cc($[1], ($) => {
        //                 return ['implementMe', "liana2pareto"]
        //             })
        //         case 'tagged union':
        //             return pl.cc($[1], ($) => {
        //                 return ['switch', {
        //                     'cases': $.options.dictionary.map(($) => {
        //                         return generateBlock($.type)
        //                     })
        //                 }]
        //             })
        //         default: return pl.au($[0])
        //     }
        // }
        function createTypes($: {
            configuration: g_this.T.MapData.settings.datamodel.O<Annotation>,
            library: g_liana.T.Type__Library<Annotation>
        }): g_glossary.T.Glossary.types<Annotation> {
            const configuration = $.configuration
            return library.library['global types'].map(($) => {
                function mapType($: g_liana.T.Type<Annotation>): g_glossary.T.Type<Annotation> {
                    switch ($[0]) {
                        case 'array':
                            return pl.cc($[1], ($) => {
                                return ['array', mapType($.type)]
                            })
                        case 'optional':
                            return pl.cc($[1], ($) => {
                                return ['optional', mapType($.type)]
                            })
                        case 'component':
                            return pl.cc($[1], ($) => {
                                return ['reference', <g_glossary.T.DataSpecifier<Annotation>>['type', {
                                    'context': pl.cc($, ($) => {
                                        switch ($.context[0]) {
                                            case 'import':
                                                return pl.cc($.context[1], ($) => {
                                                    return ['import', {
                                                        'glossary': {
                                                            'annotation': $.library.annotation,
                                                            'key': $.library.key,
                                                        },
                                                        'arguments': pm.wrapRawDictionary({
                                                            "Annotation": {
                                                                'context': ['local', null],
                                                                'type': "FOOOOOOO",
                                                                'arguments': pm.wrapRawDictionary({}),
                                                            }
                                                        }),
                                                    }]
                                                })
                                            case 'local':
                                                return pl.cc($.context[1], ($) => {
                                                    return ['local', null]
                                                })
                                            default: return pl.au($.context[0])
                                        }
                                    }),
                                    'type': $.type.key,
                                    'arguments': pm.wrapRawDictionary({}),
                                    // 'type': {
                                    //     'annotation': "XXX",
                                    //     'name': $.type.name,
                                    // },
                                }]]
                            })
                        case 'dictionary':
                            return pl.cc($[1], ($) => {
                                return ['dictionary', mapType($.type)]
                            })
                        case 'group':
                            return pl.cc($[1], ($) => {
                                return ['group', $.properties.map(($) => {
                                    return {
                                        'type': mapType($.type),
                                    }
                                })]
                            })
                        case 'terminal':
                            return pl.cc($[1], ($) => {
                                switch ($.constrained[0]) {
                                    case 'no':
                                        return pl.cc($.constrained[1], ($) => {
                                            return terminalMapping.__getEntry(
                                                $.type.key,
                                                ($) => {
                                                    switch ($[0]) {
                                                        case 'boolean':
                                                            return pl.cc($[1], ($) => {
                                                                return ['boolean', null]
                                                            })
                                                        case 'number':
                                                            return pl.cc($[1], ($) => {
                                                                return ['number', null]
                                                            })
                                                        case 'string':
                                                            return pl.cc($[1], ($) => {
                                                                return ['string', null]
                                                            })
                                                        default: return pl.au($[0])
                                                    }
                                                },
                                                () => {
                                                    pl.panic(`MISSING STRING MAPPING: ${$.type.key}`)
                                                }
                                            )
                                        })
                                    case 'yes':
                                        return pl.cc($.constrained[1], ($): g_glossary.T.Type<Annotation> => {
                                            return ['group', pm.wrapRawDictionary<g_glossary.T.Type.group.D<Annotation>>({
                                                "key": {
                                                    'type': ['string', null]
                                                },
                                                "annotation": {
                                                    'type': ['reference', ['glossary parameter', "Annotation"]],
                                                },
                                                // "referencedType": $.path.map(($) => {
                                                //     switch ($[0]) {
                                                //         case 'array':
                                                //             return pl.cc($[1], ($) => {
                                                //                 return ['array', null]
                                                //             })
                                                //         case 'dictionary':
                                                //             return pl.cc($[1], ($) => {
                                                //                 return ['dictionary', null]
                                                //             })
                                                //         case 'group':
                                                //             return pl.cc($[1], ($) => {
                                                //                 return ['group', {
                                                //                     'property': $.property
                                                //                 }]
                                                //             })
                                                //         case 'optional':
                                                //             return pl.cc($[1], ($) => {
                                                //                 return ['optional', null]
                                                //             })
                                                //         case 'tagged union':
                                                //             return pl.cc($[1], ($) => {
                                                //                 return ['tagged union', {
                                                //                     'option': $.option
                                                //                 }]
                                                //             })
                                                //         default: return pl.au($[0])
                                                //     }
                                                // })
                                            })]
                                            // return ['reference', {
                                            //     'context': ['import', {
                                            //         'glossary': "common",
                                            //         'arguments': pm.wrapRawDictionary({}),
                                            //     }],
                                            //     'type': "Reference",
                                            //     'arguments': pm.wrapRawDictionary({
                                            //         //"ReferencedType": <g_glossary.GTypeReference>['null', null], //FIXME
                                            //     }),
                                            // }]
                                        })
                                    default: return pl.au($.constrained[0])
                                }
                            })
                        case 'tagged union':
                            return pl.cc($[1], ($) => {
                                return ['taggedUnion', $.options.map(($) => {
                                    return mapType($.type)
                                })]
                            })
                        default: return pl.au($[0])
                    }

                }
                return {
                    'parameters': pm.wrapRawDictionary({}),
                    'type': mapType($.type),
                }
            })
        }
        return {
            'parameters': pm.wrapRawDictionary({
                "Annotation": null,
            }),
            'imports': pm.wrapRawDictionary({}),
            'types': $.settings.datamodel[0] === true
                ? createTypes({
                    'library': $['mapped library'].library,
                    'configuration': $.settings.datamodel[1],
                })
                : pm.wrapRawDictionary({}),
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