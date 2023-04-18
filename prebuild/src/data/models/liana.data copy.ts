// import * as pd from 'pareto-core-data'

// import * as g_liana from "lib-liana/dist/submodules/liana"
// import {
//     array,
//     component,
//     dictionary,
//     globalType,
//     group,
//     r,
//     reference,
//     taggedUnion,
//     prop,
//     tu,
//     grp,
//     optional,
//     dict,
//     option,
//     typePath,
//     tbd,
//     terminal,
//     constrainedDictionary,
//     allSiblings,
//     argAllSiblingsPlaceholder,
//     paramRef,
// } from "lib-liana/dist/submodules/liana/shorthands"

// export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
//     'imports': pd.d({}),
//     'terminal types': pd.d({
//         "text": null,
//     }),
//     'global types': pd.d({
//         "Terminal Initializer": globalType({
//         }, group({
//             "constrained": prop(taggedUnion({
//                 // "no": option(group({
//                 //     "type": prop(reference(typePath("Type Library", [grp("terminal types")]), tbd())),
//                 // })),
//                 "yes": option(component("Reference Initializer", {
//                 })),
//             })),
//         })),
//         "Type Initializer": globalType({}, taggedUnion({
//             "terminal": option(component("Terminal Initializer", {
//             })),
//             // "dictionary": option(group({
//             //     "key": prop(component("Terminal Initializer", {
//             //         "global types": paramRef("global types"),
//             //     })),
//             //     "type": prop(component("Type", {
//             //         "global types": paramRef("global types"),
//             //     })),
//             //     "autofill": prop(array(group({
//             //         "source": prop(component("Selection", {})),
//             //         "initializer": prop(component("Type Initializer", {}))
//             //     })))
//             // })),
//             // "array": option(group({
//             //     "type": prop(component("Type", {
//             //         "global types": paramRef("global types"),
//             //     })),
//             //     "constraint": prop(optional(group({
//             //         "type path": prop(component("Type Path", {
//             //             "global types": paramRef("global types"),
//             //         })), //derive form initial value?
//             //         "initial value": prop(component("Selection2", {})),
//             //         "element value": prop(component("Selection2", {})),
//             //     })))
//             // })),
//             "optional": option(group({
//                 "type": prop(optional(component("Type Initializer", {}))),
//             })),
//             "tagged union": option(group({
//                 "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
//                 "data": prop(component("Type Initializer", {}))
//             })),
//             "group": option(group({
//                 "properties": prop(dictionary(group({
//                     "type": prop(component("Type Initializer", {
//                     })),
//                 }))),
//             })),
//             "component": option(component("Type Initializer", {})),
//         })),
//         "Model": globalType({}, group({
//             "type library": prop(component("Type Library", {})),
//             "root": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
//         })),
//         "Selection": globalType({}, group({
//             "start": prop(taggedUnion({
//                 "parameter": option(reference(typePath("Type Library", [grp("global types"), dict(), grp("parameters")]), tbd())),
//                 "resolved value placeholder": option(group({
//                 })),
//                 "non circular siblings placeholder": option(group({
//                 })),
//                 "all siblings placeholder": option(group({
//                 })),
//             })),
//             "tail": prop(component("Tail", {})),
//         })),
//         "Tail": globalType({}, array(taggedUnion({
//             "group": option(group({
//                 "option": prop(reference(typePath("Type", [tu("group"), grp("properties")]), tbd())),
//             })),
//             "tagged union constraint": option(group({
//             })),
//             "reference": option(group({
//             })),
//             "component constraint": option(group({
//             })),
//             "array constraint": option(group({
//             })),
//         }))),
//         "Constrained Selection": globalType({}, group({
//             "selection": prop(component("Selection", {})),
//             "constraints": prop(array(group({
//                 "constraint": prop(group({
//                     "tagged union option": option(group({
//                         "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
//                     })),
//                 })),
//                 "tail": prop(component("Tail", {}))
//             })))
//         })),
//         "Reference": globalType({
//             "global types": allSiblings(typePath("Type Library", [grp("global types")])),
//         }, group({
//             "type path": prop(component("Type Path", {
//                 "global types": paramRef("global types"),
//             })),
//             "type": prop(taggedUnion({
//                 "resolved value": option(component("Selection", {})),
//                 "dictionary": option(group({
//                     "source": prop(taggedUnion({
//                         "variable": option(group({})),
//                         "current dictionary": option(group({
//                             "type": prop(taggedUnion({
//                                 "non cicular": option(group({})),
//                                 "any": option(group({})),
//                             }))
//                         })),
//                     })),

//                 })),
//             })),
//         })),
//         "Reference Initializer": globalType({
//         }, group({
//             //FIXME
//         })),
//         "Selection2": globalType({}, taggedUnion({
//             "reference": option(group({})),
//             "component": option(group({
//                 "type name": prop(terminal("identifier"))//FIXME derive this value
//             })),
//             "array": option(group({
//                 "not empty": prop(component("Selection2", {})),
//                 "empty": prop(component("Selection2", {})),
//             })),
//             "tagged union": option(dictionary(component("Selection2", {}))),
//             "group": option(group({
//                 "property": prop(reference(typePath("Type", [tu("group"), grp("properties")]), tbd())),
//                 "Selection2": prop(component("Selection2", {})),
//             })),
//         })),
//         "Terminal": globalType({
//             "global types": allSiblings(typePath("Type Library", [grp("global types")]))
//         }, group({
//             "constrained": prop(taggedUnion({
//                 "no": option(group({
//                     "type": prop(reference(typePath("Type Library", [grp("terminal types")]), tbd())),
//                 })),
//                 "yes": option(component("Reference", {
//                     "global types": paramRef("global types"),
//                 })),
//             })),
//         })),
//         "Type": globalType({
//             "global types": allSiblings(typePath("Type Library", [grp("global types")]))
//         }, taggedUnion({
//             "terminal": option(component("Terminal", {
//                 "global types": paramRef("global types"),
//             })),
//             "dictionary": option(group({
//                 "key": prop(component("Terminal", {
//                     "global types": paramRef("global types"),
//                 })),
//                 "type": prop(component("Type", {
//                     "global types": paramRef("global types"),
//                 })),
//                 "autofill": prop(array(group({
//                     "source": prop(component("Selection", {})),
//                     "initializer": prop(component("Type Initializer", {}))
//                 })))
//             })),
//             "array": option(group({
//                 "type": prop(component("Type", {
//                     "global types": paramRef("global types"),
//                 })),
//                 "constraint": prop(optional(group({
//                     "type path": prop(component("Type Path", {
//                         "global types": paramRef("global types"),
//                     })), //derive form initial value?
//                     "initial value": prop(component("Selection2", {})),
//                     "element value": prop(component("Selection2", {})),
//                 })))
//             })),
//             "optional": option(group({
//                 "type": prop(component("Type", {})),
//             })),
//             "tagged union": option(group({
//                 "options": prop(dictionary(group({
//                     "type": prop(component("Type", {
//                         "global types": paramRef("global types"),
//                     })),
//                     "constraint": prop(optional(group({
//                         "type path": prop(component("Type Path", {
//                             "global types": paramRef("global types"),
//                         })), //must be tagged union
//                         "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
//                         "selection": prop(component("Constrained Selection", {}))
//                     }))),
//                 }))),
//                 "default": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
//                 "constraint": prop(optional(group({
//                     "type path": prop(component("Type Path", {
//                         "global types": paramRef("global types"),
//                     })),
//                     "options": prop(constrainedDictionary(typePath("Type", [tu("tagged union"), grp("options")]), tbd(), component("Selection2", {}))),
//                 })))
//             })),
//             "group": option(group({
//                 "properties": prop(dictionary(group({
//                     "variables": prop(component("Variables", {})),
//                     "type": prop(component("Type", {
//                         "global types": paramRef("global types"),
//                     })),
//                 }))),
//             })),
//             "component": option(group({
//                 "context": prop(taggedUnion({
//                     "local": option(group({})),
//                     "import": option(group({
//                         "library": prop(reference(typePath("Type Library", [grp("imports")]), tbd())),
//                     })),
//                 })),
//                 "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
//                 "resolved value arguments": prop(dictionary(group({
//                     "type": prop(component("Selection", {})),
//                 }))),
//                 "dictionary arguments": prop(dictionary(group({
//                     "source": prop(taggedUnion({
//                         "variable": option(group({})),
//                         "current dictionary": option(group({
//                             "type": prop(taggedUnion({ //this should be derivable
//                                 "non cicular": option(group({})),
//                                 "any": option(group({})),
//                             }))
//                         })),
//                     })),
//                 }))),


//             })),
//         })),
//         "Variables": globalType({}, dictionary(taggedUnion({
//             "parameter": option(group({})),
//             "stack": option(group({})),
//             "sibling": option(group({
//             })),
//         }))),
//         "Type Library": globalType({}, group({
//             "imports": prop(dictionary(group({}))),
//             "terminal types": prop(dictionary(group({}))),
//             "global types": prop(dictionary(group({
//                 "resolved parameters": prop(dictionary(group({
//                     "import": prop(optional(reference(typePath("Type Library", [grp("imports")]), tbd()))),
//                     "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
//                     "optional": prop(taggedUnion({
//                         "no": option(group({})),
//                         "yes": option(group({})),
//                     }))
//                 }))),
//                 "dictionary parameters": prop(dictionary(group({
//                     "type": prop(taggedUnion({
//                         "non circular siblings": option(group({
//                             "type": prop(component("Type Path", {
//                                 "global types": argAllSiblingsPlaceholder(),
//                             })),
//                         })),
//                         "all siblings": option(group({
//                             "type": prop(component("Type Path", {
//                                 "global types": argAllSiblingsPlaceholder(),
//                             })),
//                         })),
//                     })),
//                 }))),
//                 "variables": prop(component("Variables", {})),
//                 "type": prop(component("Type", {
//                     "global types": paramRef("global types"),
//                 })),
//                 "result": prop(optional(group({
//                     "type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
//                     "Selection2": prop(component("Selection2", {})),
//                 })))
//             }))),
//         })),
//         "Type Path": globalType({
//             "global types": allSiblings(typePath("Type Library", [grp("global types")]))
//         }, group({
//             "import": prop(optional(terminal("identifier"))),
//             "global type": prop(reference(typePath("Type Library", [grp("global types")]), tbd())),
//             "Selection": prop(array(taggedUnion({
//                 "dictionary": option(group({}), [typePath("Type", []), "dictionary"]),
//                 "optional": option(group({}), [typePath("Type", []), "optional"]),
//                 "array": option(group({}), [typePath("Type", []), "array"]),
//                 "group": option(group({
//                     "property": prop(reference(typePath("Type", [tu("group"), grp("properties")]), tbd()))
//                 }), [typePath("Type", []), "group"]),
//                 "tagged union": option(group({
//                     "option": prop(reference(typePath("Type", [tu("tagged union"), grp("options")]), tbd())),
//                 }), [typePath("Type", []), "tagged union"]),
//             })))
//             // "type": prop(taggedUnion({
//             //     "parameter": 
//             // })),
//         })),
//         // "Reference": type(group({s
//         //     "type": member(taggedUnion({
//         //         "parameter": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
//         //         "sibling": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
//         //         "other": option(group({}),
//         //     })),
//         //     "steps": member(array(taggedUnion({
//         //         "group": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
//         //         "tagged union": parametrizedReference("common", { "Annotation": typeReference("Annotation") }, "AnnotatedKey"),
//         //         "reference": option(group({}),
//         //         "array": option(group({}),
//         //     }))),
//         // })),
//     }),
// }