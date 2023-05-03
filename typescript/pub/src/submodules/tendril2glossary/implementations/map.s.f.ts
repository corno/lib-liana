import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_this from "../glossary"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as g_tendril from "../../tendril"


import { A } from "../api.generated"

export const $$: A.map = ($d, ) => {
    return <Annotation>($: g_this.T.MapData<Annotation>): g_glossary.T.Glossary<g_this.T.OutAnnotation<Annotation>> => {
        const library = $['mapped library']
        const terminalMapping = $['mapped library']['terminal mapping']
        const settings = $.settings
        function createOptionalAnnotation(): pt.OptionalValue<g_glossary.T.Type.group.D<g_this.T.OutAnnotation<Annotation>>> {
            return settings.annotations
                ? [true, {
                    'type': ['reference', ['glossary parameterXX', "Annotation"]],
                }]
                : [false]
        }

        function createConstraintType(
            $: g_this.T.MapData.settings.datamodel.O.constraints__mapping.constraints.O<Annotation>,
            $cb: () => g_glossary.T.DataSpecifier._ltype<g_this.T.OutAnnotation<Annotation>>
        ): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> {
            switch ($[0]) {
                case 'optional': return pl.ss($, ($) => ['optional', ['reference', ['type', $cb()]]])
                case 'required': return pl.ss($, ($) => ['reference', ['type', $cb()]])
                default: return pl.au($[0])
            }
        }
        function mapGlobalTypeSelection(
            $: g_tendril.T.Global__Type__Selection<Annotation>,
        ): g_glossary.T.DataSpecifier._ltype<g_this.T.OutAnnotation<Annotation>> {
            return {
                'context': pl.optional(
                    $.import,
                    ($): g_glossary.T.DataSpecifier._ltype.context<g_this.T.OutAnnotation<Annotation>> => ['import', {
                        'glossary': {
                            'glossary arguments': pm.wrapRawDictionary({
                                "Annotation": ['glossary parameterXX', "Annotation"]
                            }),
                            'glossary': {
                                'annotation': ['source', $.annotation],
                                'key': $.key
                            }
                        }
                    }],
                    () => ['local', null],
                ),
                'type arguments': pm.wrapRawDictionary({}),
                'typeXX': $.type.key,
                'tailXX': pm.wrapRawArray([]),
            }
        }
        function mapTempTypeSelection(
            $: g_tendril.T.Type__Selection<Annotation>,
            getLastSteps: () => pt.Array<string>
        ): g_glossary.T.DataSpecifier._ltype<g_this.T.OutAnnotation<Annotation>> {
            function tail2tail($: g_tendril.T.Type__Selection__Tail<Annotation>): pt.Array<string> {
                return $d.merge(pm.wrapRawArray([
                    pl.cc($['step type'], ($) => {
                        switch ($[0]) {
                            case 'array': return pl.ss($, ($) => pm.wrapRawArray(["A"]))
                            case 'dictionary': return pl.ss($, ($) => pm.wrapRawArray(["D"]))
                            case 'group': return pl.ss($, ($) => pm.wrapRawArray([$.content.property.key]))
                            case 'optional': return pl.ss($, ($) => pm.wrapRawArray(["O"]))
                            case 'tagged union': return pl.ss($, ($) => pm.wrapRawArray([$.content.option.key]))
                            default: return pl.au($[0])
                        }
                    }),
                    pl.optional(
                        $.tail,
                        ($) => tail2tail($),
                        () => pm.wrapRawArray([]),
                    )
                ]))

            }
            return {
                'context': pl.optional(
                    $['global type'].import,
                    ($): g_glossary.T.DataSpecifier._ltype.context<g_this.T.OutAnnotation<Annotation>> => ['import', {
                        'glossary': {
                            'glossary arguments': pm.wrapRawDictionary({
                                "Annotation": ['glossary parameterXX', "Annotation"]
                            }),
                            'glossary': {
                                'annotation': ['source', $.annotation],
                                'key': $.key
                            }
                        }
                    }],
                    () => ['local', null],
                ),
                'type arguments': pm.wrapRawDictionary({}),
                'typeXX': $['global type'].type.key,
                'tailXX': $d.merge(pm.wrapRawArray([
                    pl.optional(
                        $.tail,
                        ($) => tail2tail($),
                        () => pm.wrapRawArray([]),
                    ),
                    getLastSteps()
                ])),
            }
        }
        function mapTypeToNamespace($: g_tendril.T.Type<Annotation>): g_glossary.T.Namespace<g_this.T.OutAnnotation<Annotation>> {
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
        function mapTypeToType($: g_tendril.T.Type<Annotation>, $x: g_this.T.MapData.settings.datamodel.O<Annotation>): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> {
            return pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'nothing': return pl.ss($, ($) => {
                        const result = $.result
                        return pl.optional(
                            $x['constraints mapping'].constraints,
                            ($) => {
                                const $constraint = $
                                return pl.optional(
                                    result,
                                    ($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => ['group', pm.wrapRawDictionary({
                                        "result": {
                                            'type': createConstraintType($constraint, () => mapGlobalTypeSelection($['type']))
                                        }
                                    })],
                                    () => ['null', null],
                                )
                            },
                            () => ['null', null],
                        )
                    })
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
                                            'type': createConstraintType($constraint, () => mapGlobalTypeSelection($['type']))
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
                                case 'import': return pl.ss($.context, ($) => ['import', {
                                    'glossary': {
                                        'glossary': {
                                            'annotation': ['source', $.library.annotation],
                                            'key': $.library.key
                                        },
                                        'glossary arguments': pm.wrapRawDictionary({
                                            "Annotation": ['glossary parameterXX', "Annotation"]
                                        }),
                                    }
                                }])
                                case 'local': return pl.ss($.context, ($) => ['local', null])
                                default: return pl.au($.context[0])
                            }
                        }),
                        'typeXX': $.type.key,
                        'tailXX': pm.wrapRawArray([]),
                        'type arguments': pm.wrapRawDictionary<g_glossary.T.DataSpecifier<g_this.T.OutAnnotation<Annotation>>>({}),
                    }]])
                    case 'dictionary': return pl.ss($, ($) => pl.cc($, ($) => {
                        const type = $.type
                        const constraints = $.constraints

                        return ['dictionary', ($d.isEmpty(constraints))
                            ? mapTypeToType(type, $x)
                            : ['group', $d.filter(pm.wrapRawDictionary<pt.OptionalValue<g_glossary.T.Type.group.D<g_this.T.OutAnnotation<Annotation>>>>({
                                "annotation": createOptionalAnnotation(),
                                "constraints": pl.optional(
                                    $x['constraints mapping'].constraints,
                                    (constraintStrat): pt.OptionalValue<g_glossary.T.Type.group.D<g_this.T.OutAnnotation<Annotation>>> => [true, {
                                        'type': ['group', constraints.map(($) => {
                                            const $a = $
                                            return {
                                                'type': pl.cc($, ($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => {
                                                    switch (constraintStrat[0]) {
                                                        case 'optional': return pl.ss(constraintStrat, ($) => ['optional', ['reference', ['type', mapTempTypeSelection($a['type'], () => pm.wrapRawArray(["D"]))]]])
                                                        case 'required': return pl.ss(constraintStrat, ($) => ['reference', ['type', mapTempTypeSelection($a['type'], () => pm.wrapRawArray(["D"]))]])
                                                        default: return pl.au(constraintStrat[0])
                                                    }
                                                })
                                            }
                                        })]
                                    }],
                                    () => [false]
                                ),
                                "content": [true, {
                                    'type': mapTypeToType(type, $x)
                                }]
                            }))]
                        ]
                    }))
                    case 'group': return pl.ss($, ($) => ['group', $.properties.map(($) => ({
                        'type': mapTypeToType($.type, $x),
                    }))])
                    case 'terminal': return pl.ss($, ($) => {
                        const term = $.terminal
                        function createMappedTerminal(): g_glossary.T.Type<Annotation> {
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
                            $x: g_this.T.MapData.settings.datamodel.O<Annotation>,
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
                            case 'no': return pl.ss($.constrained, ($) => createMappedTerminal())
                            case 'yes': return pl.ss($.constrained, ($): g_glossary.T.Type<g_this.T.OutAnnotation<Annotation>> => $x['constraints mapping'].constraints[0] === false && !settings.annotations
                                ? createMappedTerminal()
                                : ['group', $d.filter(pm.wrapRawDictionary({
                                    "key": $x['constraints mapping']['terminal values']
                                        ? [true, {
                                            'type': createMappedTerminal(),
                                        }]
                                        : [false],
                                    "constraint": createOptionalConstraintProperty($x, () => mapTempTypeSelection($['type'], () => pm.wrapRawArray(["D"]))),//FIXME computed
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
                                                                    case 'optional': return pl.ss(constraintStrat, ($) => ['optional', ['reference', ['type', mapTempTypeSelection($a['type'], () => pm.wrapRawArray([$a.option.key]))]]])
                                                                    case 'required': return pl.ss(constraintStrat, ($) => ['reference', ['type', mapTempTypeSelection($a['type'], () => pm.wrapRawArray([$a.option.key]))]])
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


            'imports': $['mapped library'].library.imports.map(($) => null),
            'glossary parameters': $.settings.annotations
                ? pm.wrapRawDictionary({
                    "Annotation": null,
                })
                : pm.wrapRawDictionary({}),
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
                        const gt = library.library['global types']
                        return library.library['global types'].__mapWithKey(($, key) => {

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
                                                    'type': createConstraintType($constraint, () => mapGlobalTypeSelection($.type))
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
                'algorithms': pm.wrapRawDictionary({}),
            },
        }
    }
}