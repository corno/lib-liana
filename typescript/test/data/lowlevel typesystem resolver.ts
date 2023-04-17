import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from ".."
import * as g_out from ".."

function map_Global__Types<Annotation>($: g_in.T.Global__Types<Annotation>): g_out.T.Global__Types<Annotation> {
    return $.map(($) => pl.cc($, ($) => {
        const temp__ltype: g_out.T.Global__Types.D._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($): g_out.T.Global__Types.D._ltype<Annotation> => {
            switch ($[0]) {
                case 'namespace': return pl.ss($, ($) => ['namespace', pl.cc($, ($) => {
                    const temp_types: g_out.T.Global__Types.D._ltype.namespace.types<Annotation> = pl.cc($['types'], ($) => map_Global__Types<Annotation>($))
                    return {
                        'types': temp_types,
                    }
                })])
                case 'type definition': return pl.ss($, ($) => ['type definition', pl.cc($, ($) => {
                    const temp_parameters: g_out.T.Global__Types.D._ltype.type__definition.parameters<Annotation> = pl.cc($['parameters'], ($) => map_Type__Parameters<Annotation>($, {
                        'global types': undefined,
                    }))
                    const temp__ltype: g_out.T.Global__Types.D._ltype.type__definition._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($, {
                        'global types': undefined,
                    }))
                    return {
                        'parameters': temp_parameters,
                        'type': temp__ltype,
                    }
                })])
                default: return pl.au($[0])
            }
        }))
        return {
            'type': temp__ltype,
        }
    }))
}
function map_SourceFile<Annotation>($: g_in.T.SourceFile<Annotation>): g_out.T.SourceFile<Annotation> {
    return pl.cc($, ($) => {
        const temp_types: g_out.T.SourceFile.types<Annotation> = pl.cc($['types'], ($) => map_Global__Types<Annotation>($))
        return {
            'types': temp_types,
        }
    })
}
function map_Type<Annotation>($: g_in.T.Type<Annotation>, $x: {
    'global types': pt.Lookup<pt.ComputedValue<g_out.T.Global__Types.D<Annotation>>>
}): g_out.T.Type<Annotation> {
    return pl.cc($, ($): g_out.T.Type<Annotation> => {
        switch ($[0]) {
            case 'array': return pl.ss($, ($) => ['array', map_Type<Annotation>($, {
                'global types': undefined,
            })])
            case 'boolean': return pl.ss($, ($) => ['boolean', pl.cc($, ($) => {
                return null
            })])
            case 'function': return pl.ss($, ($) => ['function', pl.cc($, ($) => {
                const temp_type__parameters: g_out.T.Type._lfunction.type__parameters<Annotation> = pl.cc($['type parameters'], ($) => map_Type__Parameters<Annotation>($, {
                    'global types': undefined,
                }))
                const temp_paramerters: g_out.T.Type._lfunction.paramerters<Annotation> = pl.cc($['paramerters'], ($) => $.map(($) => pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Type._lfunction.paramerters.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($, {
                        'global types': undefined,
                    }))
                    return {
                        'type': temp__ltype,
                    }
                })))
                const temp_return__type: g_out.T.Type._lfunction.return__type<Annotation> = pl.cc($['return type'], ($) => pl.optional(
                    $,
                    ($): g_out.T.Type._lfunction.return__type<Annotation> => [true, map_Type<Annotation>($, {
                        'global types': undefined,
                    })],
                    () => [false],
                ))
                return {
                    'type parameters': temp_type__parameters,
                    'paramerters': temp_paramerters,
                    'return type': temp_return__type,
                }
            })])
            case 'group': return pl.ss($, ($) => ['group', pl.cc($, ($) => {
                const temp_properties: g_out.T.Type.group.properties<Annotation> = pl.cc($['properties'], ($) => $.map(($) => pl.cc($, ($) => {
                    const temp__ltype: g_out.T.Type.group.properties.D._ltype<Annotation> = pl.cc($['type'], ($) => map_Type<Annotation>($, {
                        'global types': undefined,
                    }))
                    return {
                        'type': temp__ltype,
                    }
                })))
                return {
                    'properties': temp_properties,
                }
            })])
            case 'null': return pl.ss($, ($) => ['null', pl.cc($, ($) => {
                return null
            })])
            case 'number': return pl.ss($, ($) => ['number', pl.cc($, ($) => {
                return null
            })])
            case 'optional': return pl.ss($, ($) => ['optional', map_Type<Annotation>($, {
                'global types': undefined,
            })])
            case 'reference': return pl.ss($, ($) => ['reference', pl.cc($, ($) => {
                const temp_path: g_out.T.Type.reference.path<Annotation> = pl.cc($['path'], ($) => $.map(($) => pl.cc($, ($) => {
                    const constraint: pt.OptionalValue<g_out.T.Type.group.properties.D<Annotation>> = [false]
                    return {
                        'annotation': $.annotation,
                        'constraint': constraint,
                        'key': $.key,
                    }
                })))
                return {
                    'path': temp_path,
                }
            })])
            case 'string': return pl.ss($, ($) => ['string', pl.cc($, ($) => {
                return null
            })])
            case 'tagged union': return pl.ss($, ($) => ['tagged union', $.map(($) => map_Type<Annotation>($, {
                'global types': undefined,
            }))])
            default: return pl.au($[0])
        }
    })
}
function map_Type__Path<Annotation>($: g_in.T.Type__Path<Annotation>, $x: {
    'global types': pt.Lookup<pt.ComputedValue<g_out.T.Global__Types.D<Annotation>>>
}): g_out.T.Type__Path<Annotation> {
    return pl.cc($, ($) => {
        const temp_namespaces: g_out.T.Type__Path.namespaces<Annotation> = pl.cc($['namespaces'], ($) => $.map(($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out.T.Global__Types.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        })))
        const temp__ltype: g_out.T.Type__Path._ltype<Annotation> = pl.cc($['type'], ($) => pl.cc($, ($) => {
            const constraint: pt.OptionalValue<g_out.T.Global__Types.D<Annotation>> = [false]
            return {
                'annotation': $.annotation,
                'constraint': constraint,
                'key': $.key,
            }
        }))
        const temp_parameters: g_out.T.Type__Path.parameters<Annotation> = pl.cc($['parameters'], ($) => $.map(($) => map_Type<Annotation>($, {
            'global types': undefined,
        })))
        return {
            'namespaces': temp_namespaces,
            'type': temp__ltype,
            'parameters': temp_parameters,
        }
    })
}
function map_Type__Parameters<Annotation>($: g_in.T.Type__Parameters<Annotation>, $x: {
    'global types': pt.Lookup<pt.ComputedValue<g_out.T.Global__Types.D<Annotation>>>
}): g_out.T.Type__Parameters<Annotation> {
    return $.map(($) => map_Type<Annotation>($, {
        'global types': undefined,
    }))
}