import * as pt from 'pareto-core-types'
// import * as pd from 'pareto-core-dev'
// import * as pl from 'pareto-core-lib'
// import * as ps from 'pareto-core-state'

// import * as g_this from "../glossary"
// import * as g_common from "glo-pareto-common"

// import { createResolver } from "../api.generated"

// export const $$: createResolver = ($d) => {
//     pd.implementMe("RESOLVE")

//     // return <Annotation>($: g_this.T.Model<Annotation>) => {
//     //     let hasErrors = false
//     //     function onError($: string) {
//     //         $d.onError($)
//     //         hasErrors = true
//     //     }
//     //     function filter<T>($: AnnotatedUnsafeDictionary<T>): g_common.T.AnnotatedDictionary<Annotation, T> {
//     //         const db = ps.createUnsafeDictionaryBuilder<T>()
//     //         $.dictionary.__forEach(() => false, ($, key) => {
//     //             if ($[0] === true) {
//     //                 db.add(key, $[1])
//     //             }
//     //         })
//     //         return {
//     //             'annotation': $.annotation,
//     //             'dictionary': db.getDictionary()
//     //         }
//     //     }

//     //     type ComputedReference<T> = (ref: g_common.T.AnnotatedKey<Annotation>) => () => T

//     //     type UnsafeDictionary<T> = pt.Dictionary<pt.OptionalValue<T>>
//     //     type AnnotatedUnsafeDictionary<T> = {
//     //         annotation: Annotation,
//     //         dictionary: UnsafeDictionary<T>
//     //     }
//     //     type AnnotatedDictionary<T> = {
//     //         annotation: Annotation,
//     //         dictionary: pt.Dictionary<T>
//     //     }
//     //     type OptionalAnnotatedUnsafeDictionary<T> = null | AnnotatedUnsafeDictionary<T>
//     //     function buildDictionary<TIN, TOUT>($: AnnotatedDictionary<TIN>, cb: ($: TIN, $i: {
//     //         getPrecedingSiblings: () => AnnotatedUnsafeDictionary<TOUT>
//     //         subscribeToSibling: ComputedReference<TOUT>
//     //     }) => TOUT | undefined): AnnotatedUnsafeDictionary<TOUT> {
//     //         const builder = ps.createUnsafeDictionaryBuilder<pt.OptionalValue<TOUT>>()
//     //         const annotation = $.annotation
//     //         $.dictionary.__forEach(() => false, ($, key) => {
//     //             const value = cb($, {
//     //                 getPrecedingSiblings: () => {
//     //                     return {
//     //                         annotation: annotation,
//     //                         dictionary: builder.getDictionary()
//     //                     }
//     //                 },
//     //                 subscribeToSibling: () => {
//     //                     pd.implementMe(`implement subscription`)
//     //                     return () => {
//     //                         pd.implementMe(`SKDFSL:FSF`)
//     //                     }
//     //                 }
//     //             })
//     //             if (value === undefined) {
//     //                 builder.add(key, [false])
//     //             } else {
//     //                 builder.add(key, [true, value])
//     //             }
//     //         })
//     //         return {
//     //             annotation: annotation,
//     //             dictionary: builder.getDictionary()
//     //         }
//     //     }
//     //     function resolve<T>(
//     //         target: string,
//     //         dict: OptionalAnnotatedUnsafeDictionary<T>,
//     //         key: g_common.T.AnnotatedKey<Annotation>,
//     //     ): pt.OptionalValue<g_this.T._$Reference<Annotation, T>> {
//     //         if (dict === null) {
//     //             onError(`${key.annotation}: no dictionary`)
//     //             return [false]
//     //         } else {
//     //             return dict.dictionary.__getEntry(
//     //                 key.key,
//     //                 ($): pt.OptionalValue<g_this.T._$Reference<Annotation, T>> => {
//     //                     if ($[0] === false) {
//     //                         return [false]
//     //                     } else {
//     //                         return [true, {
//     //                             'annotation': key.annotation,
//     //                             'key': key.key,
//     //                             'referenced value': $[1],
//     //                         }]
//     //                     }
//     //                 },
//     //                 () => {
//     //                     onError(`${key.annotation}: no such '${target}' "${key.key}" @ ${dict.annotation}`)
//     //                     return [false]
//     //                 }
//     //             )
//     //         }
//     //     }
//     //     function resolveString($: {
//     //         $: g_this.T.String<Annotation>,
//     //         support: {
//     //             stringTypes: OptionalAnnotatedUnsafeDictionary<g_this.T.XStringType<Annotation>>
//     //             siblings: OptionalAnnotatedUnsafeDictionary<g_this.T.XProperty<Annotation>>
//     //         }
//     //     }): pt.OptionalValue<g_this.T.XString<Annotation>> {
//     //         const support = $.support
//     //         return pl.cc($.$, ($) => {
//     //             switch ($.constrained[0]) {
//     //                 case 'no':
//     //                     return pl.cc($.constrained[1], ($) => {
//     //                         const r_type = resolve("string type", support.stringTypes, $.type)
//     //                         if (r_type[0] === false) {
//     //                             return [false]
//     //                         } else {
//     //                             return [true, {
//     //                                 'constrained': ['no', {
//     //                                     'type': r_type[1],
//     //                                 }]
//     //                             }]
//     //                         }

//     //                     })
//     //                 case 'yes':
//     //                     return pl.cc($.constrained[1], ($) => {
//     //                         //const annotation = $.annotation
//     //                         function doTail() {
//     //                             $.steps.__forEach(($) => {
//     //                                 switch ($[0]) {
//     //                                     case 'array':
//     //                                         pl.cc($[1], ($) => {
//     //                                             // if (current[0] !== 'array') {
//     //                                             //     pl.panic(`not an array @${reference.annotation}`)
//     //                                             // } else {

//     //                                             // }
//     //                                         })
//     //                                         break
//     //                                     case 'group':
//     //                                         pl.cc($[1], ($) => {
//     //                                             // if (current[0] !== 'group') {
//     //                                             //     pl.panic(`not a group @${reference.annotation}`)
//     //                                             // } else {

//     //                                             // }

//     //                                         })
//     //                                         break
//     //                                     case 'reference':
//     //                                         pl.cc($[1], ($) => {
//     //                                             // if (!resolved) {
//     //                                             //     pl.panic(`not resolved @${reference.annotation}`)
//     //                                             // }
//     //                                             // if (current[0] !== 'string') {
//     //                                             //     pl.panic(`not a reference @${reference.annotation}`)
//     //                                             // } else {
//     //                                             //     pl.cc(current[1], ($) => {
//     //                                             //         if ($.constrained[0] !== 'yes') {
//     //                                             //             pl.panic(`not a reference @${reference.annotation}`)
//     //                                             //         } else {
//     //                                             //         }
//     //                                             //     })
//     //                                             // }

//     //                                         })
//     //                                         break
//     //                                     case 'tagged union':
//     //                                         pl.cc($[1], ($) => {
//     //                                             // if (current[0] !== 'tagged union') {
//     //                                             //     pl.panic(`not a tagged union @${reference.annotation}`)
//     //                                             // } else {

//     //                                             // }

//     //                                         })
//     //                                         break
//     //                                     default: pl.au($[0])
//     //                                 }
//     //                             })

//     //                         }
//     //                         const current = pl.cc($.type, ($) => {
//     //                             switch ($[0]) {
//     //                                 case 'other':
//     //                                     return pl.cc($[1], ($) => {
//     //                                         //onError(`IMPLEMENT OTHER`)
//     //                                         //pd.implementMe(`case`)
//     //                                     })
//     //                                 case 'parameter':
//     //                                     return pl.cc($[1], ($) => {
//     //                                         //pd.implementMe(`case`)
//     //                                     })
//     //                                 case 'sibling':
//     //                                     return pl.cc($[1], ($) => {
//     //                                         if (support.siblings === null) {
//     //                                             pd.implementMe(`NO SIBLINGS`)
//     //                                         } else {
//     //                                             const annotation = $.annotation
//     //                                             const current = resolve("sibling", support.siblings, $)
//     //                                             switch (current[0]) {
//     //                                                 case false:
//     //                                                     //what to do
//     //                                                     break
//     //                                                 case true:
//     //                                                     pl.cc(current[1], ($) => {
//     //                                                         if ($['referenced value'].type[0] !== 'dictionary') {
//     //                                                             onError(`${annotation} not a dictionary`)
//     //                                                         }
//     //                                                     })
//     //                                                     break
//     //                                                 default: pl.au(current[0])
//     //                                             }
//     //                                         }
//     //                                     })
//     //                                 default: return pl.au($[0])
//     //                             }
//     //                         })
//     //                         //onError(`IMPLEMENT REFERENCE`)
//     //                         return [false] ///HIER

//     //                     })
//     //                 default: return pl.au($.constrained[0])
//     //             }
//     //         })
//     //     }
//     //     function resolveType($: {
//     //         $: g_this.T.LocalType<Annotation>,
//     //         support: {
//     //             stringTypes: OptionalAnnotatedUnsafeDictionary<{}>
//     //             globalTypes: ComputedReference<g_this.T.XGlobalType<Annotation>>
//     //             siblings: OptionalAnnotatedUnsafeDictionary<g_this.T.XProperty<Annotation>>
//     //         }
//     //     }): pt.OptionalValue<g_this.T.XLocalType<Annotation>> {
//     //         const support = $.support
//     //         return pl.cc($.$, ($): pt.OptionalValue<g_this.T.XLocalType<Annotation>> => {

//     //             switch ($[0]) {
//     //                 case 'array':
//     //                     return pl.cc($[1], ($) => {
//     //                         const r_type = resolveType({
//     //                             $: $.type,
//     //                             support: {
//     //                                 stringTypes: support.stringTypes,
//     //                                 globalTypes: support.globalTypes,
//     //                                 siblings: support.siblings,
//     //                             }
//     //                         })
//     //                         if (true
//     //                             && r_type[0] === true
//     //                         ) {
//     //                             return [true, ['array', {
//     //                                 'type': r_type[1],
//     //                             }]]

//     //                         } else {
//     //                             return [false] ///HIER
//     //                         }
//     //                     })
//     //                 case 'optional':
//     //                     return pl.cc($[1], ($) => {
//     //                         const r_type = resolveType({
//     //                             $: $.type,
//     //                             support: {
//     //                                 stringTypes: support.stringTypes,
//     //                                 globalTypes: support.globalTypes,
//     //                                 siblings: support.siblings,
//     //                             }
//     //                         })
//     //                         if (true
//     //                             && r_type[0] === true
//     //                         ) {
//     //                             return [true, ['array', {
//     //                                 'type': r_type[1],
//     //                             }]]

//     //                         } else {
//     //                             return [false] ///HIER
//     //                         }
//     //                     })
//     //                 case 'boolean':
//     //                     return pl.cc($[1], ($) => {
//     //                         return [true, ['boolean', {}]]
//     //                     })
//     //                 case 'component':
//     //                     return pl.cc($[1], ($): pt.OptionalValue<g_this.T.XLocalType<Annotation>> => {
//     //                         // const r_arguments = buildDictionary<null, api.MConstrainedDictionaryEntry<TXGlobalType, null>>($.arguments, ($, $i) => {
//     //                         //     resolve("global types", support.globalTypes)
//     //                         //     return {
//     //                         //         'value': null
//     //                         //     }
//     //                         // })
//     //                         // return [true, ['component', {
//     //                         //     'type': computedReference($.type, support.globalTypes($.type)),
//     //                         //     'arguments': filter(r_arguments),
//     //                         // }]]
//     //                         //onError(`IMPLEMENT COMPONENT`)
//     //                         return [false]
//     //                     })
//     //                 case 'dictionary':
//     //                     return pl.cc($[1], ($) => {
//     //                         const r_key = resolveString({
//     //                             $: $.key,
//     //                             support: {
//     //                                 stringTypes: support.stringTypes,
//     //                                 siblings: support.siblings,
//     //                             }
//     //                         })
//     //                         const r_type = resolveType({
//     //                             $: $.type,
//     //                             support: {
//     //                                 stringTypes: support.stringTypes,
//     //                                 globalTypes: support.globalTypes,
//     //                                 siblings: support.siblings,
//     //                             }
//     //                         })
//     //                         if (true
//     //                             && r_key[0] === true
//     //                             && r_type[0] === true
//     //                         ) {
//     //                             return [true, ['dictionary', {
//     //                                 'key': r_key[1],
//     //                                 'type': r_type[1],
//     //                             }]]

//     //                         } else {
//     //                             return [false] ///HIER
//     //                         }
//     //                     })
//     //                 case 'group':
//     //                     return pl.cc($[1], ($) => {
//     //                         const r_properties = buildDictionary<g_this.T.Property<Annotation>, g_this.T.XProperty<Annotation>>($.properties, ($, $i) => {

//     //                             const r_type = resolveType({
//     //                                 $: $.type,
//     //                                 support: {
//     //                                     stringTypes: support.stringTypes,
//     //                                     globalTypes: support.globalTypes,
//     //                                     siblings: $i.getPrecedingSiblings(),
//     //                                 }
//     //                             })
//     //                             if (r_type[0] === false) {
//     //                                 return undefined
//     //                             } else {
//     //                                 return {
//     //                                     'type': r_type[1],
//     //                                 }
//     //                             }
//     //                         })
//     //                         return [true, ['group', {
//     //                             'properties': filter(r_properties),
//     //                         }]]
//     //                     })
//     //                 case 'string':
//     //                     return pl.cc($[1], ($) => {
//     //                         const r_ = resolveString({
//     //                             $: $,
//     //                             support: {
//     //                                 stringTypes: support.stringTypes,
//     //                                 siblings: support.siblings,
//     //                             }
//     //                         })
//     //                         if (r_[0] === false) {
//     //                             return [false] ///HIER
//     //                         } else {
//     //                             const xxx = r_[1]
//     //                             return [true, ['string', xxx]]
//     //                         }

//     //                     })
//     //                 case 'tagged union':
//     //                     return pl.cc($[1], ($) => {
//     //                         const r_options = buildDictionary<g_this.T.LocalType<Annotation>, g_this.T.XOption<Annotation>>($.options, ($, $i) => {

//     //                             const r_type = resolveType({
//     //                                 $: $,
//     //                                 support: {
//     //                                     stringTypes: support.stringTypes,
//     //                                     globalTypes: support.globalTypes,
//     //                                     siblings: $i.getPrecedingSiblings(),
//     //                                 }
//     //                             })
//     //                             if (r_type[0] === false) {
//     //                                 return undefined
//     //                             } else {
//     //                                 return {
//     //                                     'type': r_type[1],
//     //                                 }
//     //                             }
//     //                         })
//     //                         let r_default: pt.OptionalValue<g_this.T._$Reference<Annotation, g_this.T.XOption<Annotation>>> = resolve("option", r_options, $.default)
//     //                         if (true
//     //                             && r_default[0] === true
//     //                         ) {
//     //                             return [true, ['tagged union', {
//     //                                 'options': filter(r_options),
//     //                                 'default': r_default[1],
//     //                             }]]

//     //                         } else {
//     //                             return [false] ///HIER
//     //                         }

//     //                     })
//     //                 default: return pl.au($[0])
//     //             }
//     //         })
//     //     }
//     //     const r_stringTypes = buildDictionary<null, {}>($['string types'], ($, $i) => {
//     //         return {}
//     //     })
//     //     const r_globalTypes = buildDictionary<g_this.T.GlobalType<Annotation>, g_this.T.XGlobalType<Annotation>>($['global types'], ($, $i) => {
//     //         const r_parameters = buildDictionary<g_this.T.Parameter<Annotation>, g_this.T.XParameter<Annotation>>($.parameters, ($, $i) => {
//     //             return {}
//     //         })
//     //         let r_type: pt.OptionalValue<g_this.T.XLocalType<Annotation>> = resolveType({
//     //             $: $.type,
//     //             support: {
//     //                 siblings: null,
//     //                 stringTypes: r_stringTypes,
//     //                 globalTypes: $i.subscribeToSibling,
//     //             }
//     //         })
//     //         if (true
//     //             && r_type[0] === true
//     //         ) {
//     //             return {
//     //                 'parameters': filter(r_parameters),
//     //                 'type': r_type[1],
//     //             }
//     //         } else {
//     //             return undefined
//     //         }
//     //     })

//     //     let r_root: pt.OptionalValue<g_this.T._$Reference<Annotation, g_this.T.XGlobalType<Annotation>>> = resolve("global type", r_globalTypes, $.root)
//     //     if (true
//     //         && r_root[0] === true
//     //     ) {
//     //         const x: g_this.T.XModel<Annotation> = {
//     //             'string types': filter(r_stringTypes),
//     //             'global types': filter(r_globalTypes),
//     //             'root': r_root[1],
//     //         }
//     //         return [true, {
//     //             'model': x,
//     //             'has errors': hasErrors
//     //         }]
//     //     } else {
//     //         return [false] ///HIER
//     //     }
//     // }
// }