import * as pd from 'pareto-core-data'

import {
    string,
    null_,
    nested,
    dictionary, member, taggedUnion, types, group,
    array,
    typeReference,
    data,
    boolean,
    func,
    type,
    glossaryParameter,
    optional,
    reference,
    interfaceReference,
    number,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
const d = pd.d

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "fp": "lib-fountain-pen",
    }),
    'parameters': d({
        "Annotation": {},
    }),
    'types': d({
        "Annotation": type(glossaryParameter("Annotation")),
        "AlgorithmImplementation": type(group({
            "constructor": member(boolean()),
            "type": member(reference("ImplementationType"))
        })),
        "SynchronousFunctionBlock": type(group({
            "innerFunctions": member(dictionary(group({
                "block": member(reference("SynchronousFunctionBlock"))
            }))),
            "returnExpression": member(reference("SynchronousExpression"))
        })),
        "AsynchronousFunctionBlock": type(group({
            "innerFunctions": member(dictionary(group({
                "block": member(reference("AsynchronousFunctionBlock"))
            }))),
            "returnExpression": member(reference("AsynchronousExpression"))
        })),
        "ProcedureBlock": type(group({
            "innerFunctions": member(dictionary(group({
                "type": member(reference("ImplementationType"))
            }))),
            "statements": member(array(taggedUnion({
                "dependencyCall": group({
                    "data": member(string()),
                    "callback": member(reference("ProcedureBlock"))
                }),
                "innerCallbackCall": group({
                    "innerCallback": member(string()),
                    "data": member(reference("SynchronousExpression")),
                    "interface": member(string()),
                }),
                "interfaceCall": group({
                    "child path": member(array(string())),
                    //"property": member(array(string())),
                    "data": member(optional(reference("SynchronousExpression"))),
                    "callback": member(optional(reference("ProcedureBlock"),))
                }),
                "switch": group({
                    "path": member(array(string())),
                    "cases": member(dictionary(reference("ProcedureBlock")))
                })
            })))
        })),
        "AsynchronousExpression": type(taggedUnion({
            "call": group({
                "function": member(string()),
            }),
        })),
        "InterfaceInitializerBlock": type(taggedUnion({
            "call": group({
                "function": member(string()),
            }),
        })),
        "SynchronousExpression": type(taggedUnion({
            "call": group({
                "function": member(string()),
            }),
            "implementMe": string(),
            "groupInitializer": group({
                "properties": member(dictionary(reference("SynchronousExpression"))),
            }),
            "switch": group({
                "cases": member(dictionary(reference("SynchronousFunctionBlock")))
            }),
            "propertySelection": group({
                "name": member(string()),
            }),
            "contextChange": group({
                "property": member(string()),
                "block": member(reference("SynchronousFunctionBlock"))
            }),
            "string literal": string(),
            "mapDictionary": group({
                "block": member(reference("SynchronousFunctionBlock")),
            }),
            "mapArray": group({
                "block": member(reference("SynchronousFunctionBlock")),
            }),
        })),
        "Implementation": type(group({
            "implementations": member(dictionary(reference("AlgorithmImplementation"))),
        })),
        "ImplementationType": type(taggedUnion({
            "synchronous function": group({
                "block": member(reference("SynchronousFunctionBlock"))
            }),
            "asynchronous function": group({
                "block": member(reference("AsynchronousFunctionBlock"))
            }),
            "procedure": group({
                "block": member(reference("ProcedureBlock"))
            }),
            "interface initializer": group({
                "block": member(reference("InterfaceInitializerBlock"))
            }),
        })),
        "States": type(dictionary(reference("Type"))),
        "Type": type(taggedUnion({
            "array": reference("Type"),
            "optional": reference("Type"),
            "dictionary": reference("Type"),
            "null": group({}),
            "boolean": group({}),
            "string": group({}),
            "number": group({}),
            "reference": string(),
            "group": dictionary(group({
                "type": member(reference("Type")),
            })),
            "parameter": string(),
            "taggedUnion": dictionary(reference("Type")),
        })),
    }),
    'interfaces': d({}),
    'functions': d({
        "SerializeImplementation": func(typeReference("Implementation"), null, interfaceReference("fp", "Line"), null),
    }),
}