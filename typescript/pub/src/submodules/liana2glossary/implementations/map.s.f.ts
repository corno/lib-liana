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
        
        function createConstraintType(
            $: g_liana2glossary.T.MapData.settings.datamodel.O.constraints__mapping.constraints.O<Annotation>,
            $cb: () => g_glossary.T.DataSpecifier._ltype<g_this.T.OutAnnotation<Annotation>>
        ): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> {
            switch ($[0]) {
                case 'optional': return pl.ss($, ($) => ['optional', ['reference', ['type', $cb()]]])
                case 'required': return pl.ss($, ($) => ['reference', ['type', $cb()]])
                default: return pl.au($[0])
            }
        }
        function mapGlobalTypeSelection(
            $: g_liana.T.Global__Type__Selection<Annotation>,
        ): g_glossary.T.DataSpecifier._ltype<g_this.T.OutAnnotation<Annotation>> {
            return {
                'context': pl.optional(
                    $.import,
                    ($): g_glossary.T.Context<g_this.T.OutAnnotation<Annotation>> => ['import', {
                        'glossary': {
                            'annotation': ['source', $.annotation],
                            'key': $.key
                        }
                    }],
                    () => ['local', null],
                ),
                'arguments': pm.wrapRawDictionary({}),
                'type': $.type.key,
                'tail': pm.wrapRawArray([]),
            }
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
                        return pl.cc($['step type'], ($) => {
                            switch ($[0]) {
                                case 'array': return pl.ss($, ($) => pm.wrapRawArray(["A"]))
                                case 'dictionary': return pl.ss($, ($) => pm.wrapRawArray(["D"]))
                                case 'group': return pl.ss($, ($) => pm.wrapRawArray([$.content.property.key]))
                                case 'optional': return pl.ss($, ($) => pm.wrapRawArray(["O"]))
                                case 'tagged union': return pl.ss($, ($) => pm.wrapRawArray([$.content.option.key]))
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
                    return pl.cc($.type, ($) => {
                        switch ($[0]) {
                            case 'array': return pl.ss($, ($) => pm.wrapRawDictionary({
                                "A": mapTypeToNamespace($.type)
                            }))
                            case 'nothing': return pl.ss($, ($) => pm.wrapRawDictionary({}))
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
                      
                    })
                }),
                'types': pl.cc($, ($) => pm.wrapRawDictionary({})),
            }
        }
        function mapTypeToType($: g_liana.T.Type<Annotation>, $x: g_liana2glossary.T.MapData.settings.datamodel.O<Annotation>): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> {
            return pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'nothing': return pl.ss($, ($) => ['null', null])
                    case 'array': return pl.ss($, ($) => ['array', mapTypeToType($.type, $x)])
                    case 'optional': return pl.ss($, ($) => {
                        function doOpt(): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> {
                            return ['optional', mapTypeToType($.type, $x)]
                        }
                        const result = $.result
                        return pl.optional(
                            $x['constraints mapping'].constraints,
                            ($) => {
                                const $constraint = $
                                return pl.optional(
                                    result,
                                    ($) => ['group', pm.wrapRawDictionary({
                                        "content": {
                                            'type': doOpt()
                                        },
                                        "result": {
                                            'type': createConstraintType($constraint, () => mapGlobalTypeSelection($['temp type']))
                                        }
                                    })],
                                    () => doOpt(),
                                )
                            },
                            () => doOpt(),
                        )
                    })
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
                        const constraints = $.constraints
                        function doDict(): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> {
                            return ['dictionary', pl.optional(
                                $x['constraints mapping'].constraints,
                                (constraintStrat) => $d.isEmpty(constraints)
                                    ? mapTypeToType(type, $x)
                                    : ['group', $d.filter(pm.wrapRawDictionary<pt.OptionalValue<g_glossary.T.Type.group.D<g_this.T.OutAnnotation<Annotation>>>>({
                                        "annotation": createOptionalAnnotation(),
                                        "constraints": [true, {
                                            'type': ['group', constraints.map(($) => {
                                                const $a = $
                                                return {
                                                    'type': pl.cc($, ($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => {
                                                        switch (constraintStrat[0]) {
                                                            case 'optional': return pl.ss(constraintStrat, ($) => ['optional', ['reference', ['type', mapTypeSelection($a['temp type path'], () => "D")]]])
                                                            case 'required': return pl.ss(constraintStrat, ($) => ['reference', ['type', mapTypeSelection($a['temp type path'], () => "D")]])
                                                            default: return pl.au(constraintStrat[0])
                                                        }
                                                    })
                                                }
                                            })]
                                        }],
                                        "content": [true, {
                                            'type': mapTypeToType(type, $x)
                                        }]
                                    }))],
                                () => mapTypeToType(type, $x)
                            )]
                        }
                        return !settings.annotations
                            ? doDict()
    
                            //**********this has quite some impact, leave it for now */
                            //this annotation can be used for reporting when an entry cannot be found.
    
                            // : ['group', $d.filter(pm.wrapRawDictionary<pt.OptionalValue<g_glossary.T.Type.group.D<g_this.T.OutAnnotation<Annotation>>>>({
                            //     "content": [true, {
                            //         'type': doDict()
                            //     }],
                            //     "annotation": createOptionalAnnotation(),
                            // }))]
                            : doDict()
                    }))
                    case 'group': return pl.ss($, ($) => ['group', $.properties.map(($) => ({
                        'type': mapTypeToType($.type, $x),
                    }))])
                    case 'terminal': return pl.ss($, ($) => {
                        const term = $.terminal
                        function tm(): g_glossary.T.Type<Annotation> {
                            return terminalMapping.__getEntry(
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
                            )
                        }
                        function createOptionalConstraintProperty(
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
                        switch ($.constrained[0]) {
                            case 'no': return pl.ss($.constrained, ($) => tm())
                            case 'yes': return pl.ss($.constrained, ($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => $x['constraints mapping'].constraints[0] === false && !settings.annotations
                                ? tm()
                                : ['group', $d.filter(pm.wrapRawDictionary({
                                    "key": $x['constraints mapping']['terminal values']
                                        ? [true, {
                                            'type': tm(),
                                        }]
                                        : [false],
                                    "constraint": createOptionalConstraintProperty($x, () => pl.cc($['referencee type'], ($) => {
                                            switch ($[0]) {
                                                case 'resolved value': return pl.ss($, ($) => mapTypeSelection($['temp type path'], () => "D"))
                                                case 'sibling': return pl.ss($, ($) => mapTypeSelection($['temp type path'], () => "D"))
                                                default: return pl.au($[0])
                                            }
                                      
                                    })),
                                    "annotation": createOptionalAnnotation(),
                                }))]
                            )
                            default: return pl.au($.constrained[0])
                        }
                    })
                    case 'tagged union': return pl.ss($, ($) => {
    
                        function doTU(): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> {
                            return ['taggedUnion', $.options.map(($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => pl.cc($, ($) => {
                                const type = $.type
                                const constraints = $.constraints
    
                                //if there are no constraints -or- no constraints or annotations should be added, then don't create a meta data group
                                return $d.isEmpty($.constraints) || ($x['constraints mapping'].constraints[0] === false && !settings.annotations)
                                    ? mapTypeToType(type, $x)
                                    : ['group', $d.filter(pm.wrapRawDictionary({
                                        "annotation": createOptionalAnnotation(),
                                        "constraints": pl.optional(
                                            $x['constraints mapping'].constraints,
                                            ($): pt.OptionalValue<g_glossary.T.Type.group.D<Annotation>> => {
                                                const constraintStrat = $
                                                return [true, {
                                                    'type': ['group', constraints.map(($) => {
                                                        const $a = $
                                                        return {
                                                            'type': pl.cc($, ($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => {
                                                                switch (constraintStrat[0]) {
                                                                    case 'optional': return pl.ss(constraintStrat, ($) => ['optional', ['reference', ['type', mapTypeSelection($a.type, () => $a.option.key)]]])
                                                                    case 'required': return pl.ss(constraintStrat, ($) => ['reference', ['type', mapTypeSelection($a.type, () => $a.option.key)]])
                                                                    default: return pl.au(constraintStrat[0])
                                                                }
                                                            })
                                                        }
                                                    })]
                                                }]
                                            },
                                            () => [false]
                                        ),
                                        "content": [true, {
                                            'type': mapTypeToType(type, $x)
                                        }],
                                    }))]
                            }))]
    
                        }
                        const result = $.result
                        return pl.optional(
                            $x['constraints mapping'].constraints,
                            ($) => {
                                const $constraint = $
                                return pl.optional(
                                    result,
                                    ($) => ['group', pm.wrapRawDictionary({
                                        "content": {
                                            'type': doTU()
                                        },
                                        "result": {
                                            'type': createConstraintType($constraint, () => mapGlobalTypeSelection($))
                                        }
                                    })],
                                    () => doTU(),
                                )
                            },
                            () => doTU(),
                        )
                    })
                    default: return pl.au($[0])
                }
              
            })
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
                        return library.library['global types'].map(($) => {
                            const result = $.result
                            const type = $.type
                            return {
                                'parameters': pm.wrapRawDictionary({}),
                                'type': pl.optional(
                                    dm['constraints mapping'].constraints,
                                    ($constraint) => {
                                        return pl.optional(
                                            result,
                                            ($) => ['group', pm.wrapRawDictionary({
                                                "content": {
                                                    'type': mapTypeToType(type, dm)
                                                },
                                                "result": {
                                                    'type': createConstraintType($constraint, () => mapGlobalTypeSelection($['temp type']))
                                                }
                                            })],
                                            () => mapTypeToType(type, dm),
                                        )
                                    },
                                    () => mapTypeToType(type, dm),
                                ),
                            }
                        })
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