import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'
import * as pt from 'pareto-core-types'

import * as g_in from ".."
import * as g_out from ".."

function map_Reference<Annotation>($: g_in.T.Reference<Annotation>, $x: {
    'global types': pt.Lookup<pt.ComputedValue<g_out.T.Type__Library.global__types.D<Annotation>>>
}): g_out.T.Reference<Annotation> {
    return pl.cc($, ($) => {
        const temp_temp__type__path: g_out.T.Reference.temp__type__path<Annotation> = pl.cc($['temp type path'], ($) => map_Type__Selection<Annotation>($, {
            'global types': $x['global types'],
        }))
        const temp_referencee__type: g_out.T.Reference.referencee__type<Annotation> = pl.cc($['referencee type'], ($) => pl.cc($, ($): g_out.T.Reference.referencee__type<Annotation> => {
            switch ($[0]) {
                case 'resolved value': return pl.ss($, ($) => ['resolved value', pl.cc($, ($) => {
                    const temp_selection: g_out.T.Reference.referencee__type.resolved__value.selection<Annotation> = pl.cc($['selection'], ($) => map_Value__Selection<Annotation>($))
                    return {
                        'selection': temp_selection,
                    }
                })])
                case 'sibling': return pl.ss($, ($) => ['sibling', pl.cc($, ($) => {
                    const temp_selection: g_out.T.Reference.referencee__type.sibling.selection<Annotation> = pl.cc($['selection'], ($) => map_Containing__Dictionary__Selection<Annotation>($))
                    return {
                        'selection': temp_selection,
                    }
                })])
                default: return pl.au($[0])
            }
        }))
        return {
            'temp type path': temp_temp__type__path,
            'referencee type': temp_referencee__type,
        }
    })
}