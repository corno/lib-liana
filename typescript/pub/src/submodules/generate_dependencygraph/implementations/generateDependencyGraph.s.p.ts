import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as g_liana from "../../liana"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.generateDependencyGraph = () => {
    return <Annotation>($: g_this.T.GenerateDependencyGraphParameters<Annotation>, $i: g_fp.SYNC.I.Block) => {
        $i.nestedLine(($i) => {
            $i.snippet(`digraph G {`)
            $i.indent(($i) => {
                $.data['global types'].__forEach(() => false, ($, key) => {
                    $i.line(`"${key}"`)
                })
                $.data['global types'].__forEach(() => false, ($, key) => {
                    $.parameters.__forEach(() => false, ($, paramKey) => {
                        pl.cc($.type, ($) => {
                            switch ($[0]) {
                                case 'resolved value':
                                    pl.ss($, ($) => {
                                        $.type.type.key
                                        $i.line(`"${key}" -> "${$.type.type.key}" [label="parameter"]`)
                                    })
                                    break
                                case 'lookup':
                                    pl.ss($, ($) => {

                                        $i.line(`"${key}" -> "${$.type.type.key}" [label="parameter"]`)
                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })
                    })
                    pl.optional(
                        $.result,
                        ($) => {
                            $i.line(`"${key}" -> "${$.type.type.key}" [label="return type"]`)
                        },
                        () => {

                        }
                    )
                })
                $.data['global types'].__forEach(() => false, ($, key) => {

                    function doType($: g_liana.T.Type<Annotation>, $i: g_fp.SYNC.I.Block) {

                        pl.cc($.type, ($) => {
                            switch ($[0]) {
                                case 'array':
                                    pl.ss($, ($) => {
                                        doType($.type, $i)
                                    })
                                    break
                                case 'component':
                                    pl.ss($, ($) => {
                                        pl.cc($.context, ($) => {
                                            switch ($[0]) {
                                                case 'import':
                                                    pl.ss($, ($) => {
                                                        pd.implementMe("@KLRWEKLSJ")
                                                    })
                                                    break
                                                case 'resolved sibling':
                                                    pl.ss($, ($) => {
                                                        $i.line(`"${key}" -> "${$.type.key}" [label="component"]`)
                                                    })
                                                    break
                                                default: pl.au($[0])
                                            }
                                        })
                                    })
                                    break
                                case 'dictionary':
                                    pl.ss($, ($) => {
                                        doType($.type, $i)
                                    })
                                    break
                                case 'group':
                                    pl.ss($, ($) => {
                                        $.properties.__forEach(() => false, ($) => {
                                            doType($.type, $i)
                                        })
                                    })
                                    break
                                case 'nothing':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                case 'optional':
                                    pl.ss($, ($) => {
                                        doType($.type, $i)
                                    })
                                    break
                                case 'tagged union':
                                    pl.ss($, ($) => {
                                        $.options.__forEach(() => false, ($) => {
                                            doType($.type, $i)
                                        })
                                    })
                                    break
                                case 'terminal':
                                    pl.ss($, ($) => {

                                    })
                                    break
                                default: pl.au($[0])
                            }
                        })
                    }
                    doType($.type, $i)
                })
            })
            $i.snippet(`}`)
        })
        $i.nestedLine(($i) => {
            $i.snippet(`{`)
            $i.indent(($i) => {
                const gt = $.data['global types']
                $.data['global types'].__forEach(() => false, ($, key) => {

                    $i.nestedLine(($i) => {
                        $i.snippet(`"${key}": {`)
                        $i.indent(($i) => {
                            $i.nestedLine(($i) => {
                                $i.snippet(`'parameters': [`)
                                $i.indent(($i) => {
                                    $.parameters.__forEach(() => false, ($, paramKey) => {
                                        pl.cc($.type, ($) => {
                                            switch ($[0]) {
                                                case 'resolved value':
                                                    pl.ss($, ($) => {
                                                        $i.line(`"${$.type.type.key}",`)
                                                    })
                                                    break
                                                case 'lookup':
                                                    pl.ss($, ($) => {
                                                        $i.line(`"${$.type.type.key}",`)
                                                    })
                                                    break
                                                default: pl.au($[0])
                                            }
                                        })
                                    })
                                    pl.optional(
                                        $.result,
                                        ($) => {
                                            $i.line(`"${$.type.type.key}",`)
                                        },
                                        () => { }
                                    )
                                })
                                $i.snippet(`],`)
                            })
                            $i.nestedLine(($i) => {
                                $i.snippet(`'components': [`)
                                $i.indent(($i) => {
                                    function doType($: g_liana.T.Type<Annotation>, $i: g_fp.SYNC.I.Block) {

                                        pl.cc($.type, ($) => {
                                            switch ($[0]) {
                                                case 'array':
                                                    pl.ss($, ($) => {
                                                        doType($.type, $i)
                                                    })
                                                    break
                                                case 'component':
                                                    pl.ss($, ($) => {
                                                        pl.cc($.context, ($) => {
                                                            switch ($[0]) {
                                                                case 'import':
                                                                    pl.ss($, ($) => {
                                                                        pd.implementMe(`SDFSKFJ:SEM`)
                                                                    })
                                                                    break
                                                                case 'resolved sibling':
                                                                    pl.ss($, ($) => {
                                                                        $i.line(`"${$.type.key}",`)
                                                                    })
                                                                    break
                                                                default: pl.au($[0])
                                                            }
                                                        })
                                                    })
                                                    break
                                                case 'dictionary':
                                                    pl.ss($, ($) => {
                                                        doType($.type, $i)
                                                    })
                                                    break
                                                case 'group':
                                                    pl.ss($, ($) => {
                                                        $.properties.__forEach(() => false, ($) => {
                                                            doType($.type, $i)
                                                        })
                                                    })
                                                    break
                                                case 'nothing':
                                                    pl.ss($, ($) => {

                                                    })
                                                    break
                                                case 'optional':
                                                    pl.ss($, ($) => {
                                                        doType($.type, $i)
                                                    })
                                                    break
                                                case 'tagged union':
                                                    pl.ss($, ($) => {
                                                        $.options.__forEach(() => false, ($) => {
                                                            doType($.type, $i)
                                                        })
                                                    })
                                                    break
                                                case 'terminal':
                                                    pl.ss($, ($) => {

                                                    })
                                                    break
                                                default: pl.au($[0])
                                            }
                                        })
                                    }
                                    doType($.type, $i)
                                })
                                $i.snippet(`],`)
                            })
                        })
                        $i.snippet(`},`)

                    })
                })

            })
            $i.snippet(`}`)
        })
    }
}