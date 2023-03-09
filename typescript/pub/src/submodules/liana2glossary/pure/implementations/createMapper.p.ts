import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as gthis from "../../glossary"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gliana from "../../../liana"

import {createMapper } from "../api.generated"

export const $$: createMapper = ($d) => {
    return <Annotation>($: gthis.T.MapData<Annotation>) => {
        const model = $['mapped model'].model
        const terminalMapping = $['mapped model']['terminal mapping']
        // function ref(type: string): gglossary.T.Type {
        //     return ['reference', {
        //         'context': ['local', null],
        //         'type': {
        //             'annotation': "SSDF",
        //             'name': type
        //         },
        //     }]
        // }

        // function generateBlock($: gliana.T.LocalType): galgorithm.TFunctionBlock {
        //     return {
        //         'returnExpression': generateExpression($)
        //     }
        // }
        // function generateExpression($: gliana.T.LocalType): galgorithm.TExpression {
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
            configuration: gthis.T.MapData.settings.datamodel.O<Annotation>,
            model: gliana.T.Model<Annotation>
        }): gglossary.T.Glossary.types<Annotation> {
            const configuration = $.configuration
            return model['type library']['global types'].map(($) => {
                function mapType($: gliana.T.Type<Annotation>): gglossary.T.Type<Annotation> {
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
                                return ['reference', {
                                    'context': pl.cc($, ($) => {
                                        switch ($.context[0]) {
                                            case 'import':
                                                return pl.cc($.context[1], ($) => {
                                                    return ['import', {
                                                        'glossary': $.library.key,
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
                                }]
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
                                        return pl.cc($.constrained[1], ($): gglossary.T.Type<Annotation> => {
                                            return ['group', pm.wrapRawDictionary<gglossary.T.Type.group.D<Annotation>>({
                                                "key": {
                                                    'type': ['string', null]
                                                },
                                                "annotation": {
                                                    'type': ['glossary parameter', "Annotation"]
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
                                            //         //"ReferencedType": <gglossary.GTypeReference>['null', null], //FIXME
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
            'types': $.settings.datamodel[0] === true
                ? createTypes({
                    'model': $['mapped model'].model,
                    'configuration': $.settings.datamodel[1],
                })
                : pm.wrapRawDictionary({}),
            'builders': pm.wrapRawDictionary({}),
            'interfaces': $d.buildDictionary(null, (add) => {

                if ($.settings['visitor interface'][0] === true) {
                    // add({
                    //     'key': "Visitor",
                    //     'value': ['group', {
                    //         'members': $.mappedModel.model['type library']['global types'].map<gglossary.T.Interface<Annotation>>(($) => {
                    //             return ['method', {
                    //                 'data': [false], //FIXME
                    //                 'interface': [false], //FIXME
                    //             }]
                    //         })
                    //     }],
                    // })
                }
            }),
            'functions': $d.buildDictionary(null, (add) => {
                if ($.settings.algorithms.serialize[0] === true) {
                    function typeReference(type: string): gglossary.T.TypeReference<Annotation> {
                        return {
                            'context': ['local', null],
                            'type': type,
                            // 'type': {
                            //     'annotation': "SSDF",
                            //     'name': type
                            // },
                            'arguments': pm.wrapRawDictionary({}),
                        }
                    }
                    add({
                        'key': "Serialize",
                        'value': {
                            'return type': ['nothing', null],
                            'data': typeReference($['mapped model'].model.root.key), //unresolved
                            'input builder': [false],
                            'output builder': [true, {
                                'context': ['import', {
                                    'glossary': "fp",
                                    'arguments': pm.wrapRawDictionary({}),
                                }],
                                'builder': "Line"
                                // 'context': ['import', {
                                //     'name': "fp",
                                //     'annotation': "FFF",
                                // }],
                                // 'interface': {
                                //     'name': "Line",
                                //     'annotation': "FFF",
                                // }
                            }],
                        },
                    })
                }
            })
        }
    }
}