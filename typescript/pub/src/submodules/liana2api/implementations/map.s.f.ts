import * as pm from 'pareto-core-map'

// import * as g_this from "../glossary"


// import { A } from "../api.generated"

// export const $$: A.map = ($d) => {
//     return <Annotation>($: g_this.T.MapData<Annotation>) => {
//         const model = $.model.model
//         return {
//             'imports': $d.buildDictionary((add) => {
//                 if ($.algorithms.serialize[0] === true) {
//                     add({
//                         'key': "foreach",
//                         'value': "res-pareto-foreach",
//                     })
//                 }
//             }),
//             'algorithms': $d.buildDictionary((add) => {
//                 if ($.algorithms.serialize[0] === true) {
//                     add({
//                         'key': "createSerializer",
//                         'value': {
//                             'definition': {
//                                 'context': {
//                                     'glossary': "XXXXXX",
//                                     'arguments': pm.wrapRawDictionary({}),
//                                 },
//                                 'function': "Serialize"
//                             },
//                             'type': ['constructor', {
//                                 'configuration data': [false],
//                                 'dependencies': pm.wrapRawDictionary({
//                                     "arrayForEach": {
//                                         'context': {
//                                             'glossary': "foreach",
//                                             'arguments': pm.wrapRawDictionary({}),
//                                         },
//                                         'function': "ArrayForEach",
//                                     },
//                                     "dictionaryForEach": {
//                                         'context': {
//                                             'glossary': "foreach",
//                                             'arguments': pm.wrapRawDictionary({}),
//                                         },
//                                         'function': "DictionaryForEach",
//                                     },
//                                     "enrichedArrayForEach": {
//                                         'context': {
//                                             'glossary': "foreach",
//                                             'arguments': pm.wrapRawDictionary({}),
//                                         },
//                                         'function': "EnrichedArrayForEach",
//                                     },
//                                     "enrichedDictionaryForEach": {
//                                         'context': {
//                                             'glossary': "foreach",
//                                             'arguments': pm.wrapRawDictionary({}),
//                                         },
//                                         'function': "EnrichedDictionaryForEach",
//                                     },
//                                 })
//                             }]
//                         },
//                     })
//                 }
//             })
//         }
//     }
// }