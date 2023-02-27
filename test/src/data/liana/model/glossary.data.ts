import * as pd from 'pareto-core-data'

import * as gliana from "../../../../../pub/dist/submodules/liana"
import {
    d,
    array,
    boolean,
    component,
    dictionary,
    globalType,
    group,
    r,
    reference,
    string,
    taggedUnion,
    prop,
} from "../../../../../pub/dist/submodules/liana/shorthands"

export const $: gliana.T.Model<pd.SourceLocation> = {
    'type library': {
        'imports': pd.d({}),
        'string types': pd.d({
            "text": {},
        }),
        'global types': pd.d({
            "Context": globalType({}, taggedUnion({
                "local": group({}),
                //"import": reference(['parent', null), [)),
                "import": string("identifier"),
            })),
            "Model": globalType({}, group({
                "imports": prop(dictionary(group({}))),
                "parameters": prop(dictionary(group({}))),
                "templates": prop(dictionary(group({
                    "parameters": prop(dictionary(group({}))),
                    "type": prop(component("Type", {})),
                }))),
                "types": prop(dictionary(component("Type", {}))),
                "interfaces": prop(dictionary(component("Interface", {}))),
                "functions": prop(dictionary(group({
                    "return type": prop(taggedUnion({
                        "data": group({
                            "asynchronous": prop(boolean()),
                            "type": prop(component("TypeReference", {}))
                        }),
                        "interface": component("InterfaceReference", {}),
                        "nothing": group({})
                    })),
                    "data": prop(component("TypeReference", {})),
                    "managed input interface": prop(taggedUnion({
                        "set": component("InterfaceReference", {}),
                        "not set": group({}),
                    })),
                    "output interface": prop(taggedUnion({
                        "set": component("InterfaceReference", {}),
                        "not set": group({}),
                    })),
                }))),
            })),
            "Interface": globalType({}, taggedUnion({
                "group": group({
                    "members": prop(dictionary(component("Interface", {})))
                }),
                "method": group({
                    "data": prop(taggedUnion({
                        "set": component("TypeReference", {}),
                        "not set": group({}),
                    })),
                    "interface": prop(taggedUnion({
                        "set": component("InterfaceReference", {}),
                        "not set": group({}),
                    })),
                }),
                "reference": component("InterfaceReference", {}),
            })),
            "InterfaceReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"interface": [["context"), reference(['sibling', "context"), [))),
                "interface": prop(string("identifier")),
            })),
            "Type": globalType({}, taggedUnion({
                "array": component("Type", {}),
                "nested": component("Type", {}),
                "dictionary": component("Type", {}),
                "computed": component("Type", {}),
                "null": group({}),
                "boolean": group({}),
                "string": group({}),
                "number": group({}),
                "reference": component("TypeReference", {}),
                "group": dictionary(group({
                    "type": prop(component("Type", {})),
                    "optional": prop(boolean()),
                })),
                "parameter": string("identifier"),
                "template": group({
                    "context": prop(component("Context", {})),
                    "template": prop(string("identifier")),
                    "arguments": prop(dictionary(component("Type", {})))
                }),
                "taggedUnion": dictionary(component("Type", {})),
            })),
            "TypeReference": globalType({}, group({
                "context": prop(component("Context", {})),
                //"type": [["namespace"), reference(['sibling', "namespaces"), [))),
                "type": prop(string("identifier")),
            }))
        }),

    },
    'root': r("Glossary"),
}