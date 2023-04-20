import * as pd from 'pareto-core-data'

import * as g_liana from "../../../../../pub/dist/submodules/liana"
import {
    d,
    array,
    component,
    dictionary,
    globalType,
    group,
    r,
    terminal,
    taggedUnion,
    prop,
    option,
} from "../../../../../pub/dist/submodules/liana/shorthands"

export const $: g_liana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': pd.d({}),
        'terminal types': pd.d({
            "text": null,
        }),
        'global types': pd.d({
            "Context": globalType({}, taggedUnion({
                "local": option(group({})),
                //"import": ref(typeReference(['parent', null), [)),
                "import": option(terminal("identifier")),
            })),
            //     "Model": globalType({}, group({
            //         "imports": prop(dictionary(group({}))),
            //         "parameters": prop(dictionary(group({}))),
            //         "templates": prop(dictionary(group({
            //             "parameters": prop(dictionary(group({}))),
            //             "type": prop(component("Type", {})),
            //         }))),
            //         "types": prop(dictionary(component("Type", {}))),
            //         "interfaces": prop(dictionary(component("Interface", {}))),
            //         "functions": prop(dictionary(group({
            //             "return type": prop(taggedUnion({
            //                 "data": option(group({
            //                     "asynchronous": prop(terminal("boolean")),
            //                     "type": prop(component("TypeReference", {})),
            //                 })),
            //                 "interface": option(component("InterfaceReference", {})),
            //                 "nothing": option(group({}),
            //             })),
            //             "data": prop(component("TypeReference", {})),
            //             "managed input interface": prop(taggedUnion({
            //                 "set": component("InterfaceReference", {}),
            //                 "not set": option(group({}),
            //             })),
            //             "output interface": prop(taggedUnion({
            //                 "set": component("InterfaceReference", {}),
            //                 "not set": option(group({}),
            //             })),
            //         }))),
            //     })),
            //     "Interface": globalType({}, taggedUnion({
            //         "group": option(group({
            //             "members": prop(dictionary(component("Interface", {}))),
            //         }),
            //         "method": option(group({
            //             "data": prop(taggedUnion({
            //                 "set": component("TypeReference", {}),
            //                 "not set": option(group({}),
            //             })),
            //             "interface": prop(taggedUnion({
            //                 "set": component("InterfaceReference", {}),
            //                 "not set": option(group({}),
            //             })),
            //         }),
            //         "reference": component("InterfaceReference", {}),
            //     })),
            //     "InterfaceReference": globalType({}, group({
            //         "context": prop(component("Context", {})),
            //         //"interface": [["context"), ref(typeReference(['sibling', "context"), [))),
            //         "interface": prop(terminal("identifier")),
            //     })),
            //     "Type": globalType({}, taggedUnion({
            //         "array": component("Type", {}),
            //         "nested": component("Type", {}),
            //         "dictionary": component("Type", {}),
            //         "computed": component("Type", {}),
            //         "null": option(group({}),
            //         "boolean": option(group({}),
            //         "string": option(group({}),
            //         "number": option(group({}),
            //         "reference": component("TypeReference", {}),
            //         "group": dictionary(group({
            //             "type": prop(component("Type", {})),
            //             "optional": prop(terminal("boolean")),
            //         })),
            //         "parameter": terminal("identifier"),
            //         "template": option(group({
            //             "context": prop(component("Context", {})),
            //             "template": prop(terminal("identifier")),
            //             "arguments": prop(dictionary(component("Type", {}))),
            //         }),
            //         "taggedUnion": dictionary(component("Type", {})),
            //     })),
            //     "TypeReference": globalType({}, group({
            //         "context": prop(component("Context", {})),
            //         //"type": [["namespace"), ref(typeReference(['sibling', "namespaces"), [))),
            //         "type": prop(terminal("identifier")),
            //     })),
        }),

    },
    'root': r("Glossary"),
}