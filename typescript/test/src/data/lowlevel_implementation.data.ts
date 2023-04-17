import * as pd from 'pareto-core-data'
import * as g_liana from "../../.../../../pub/dist/submodules/liana"
import {
    argResolvedValuePlaceholder,
    array,
    component, constrainedDictionary, dictionary, externalResolvedValue, externalTypePath, globalType, group,
    grp,
    importedComponent,
    option, optional, paramRef, prop, reference, resolvedValue,
    taggedUnion, tbd, terminal, tu, typePath
} from "../../.../../../pub/dist/submodules/liana/shorthands"
const d = pd.d
export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({
        "typesystem": null,
    }),
    'terminal types': d({
        "numeric literal": null,
        "string literal": null,
        "identifier": null,
    }),
    'global types': d({
        "Block": globalType({
            "stack": resolvedValue("Variables"),
            "global types": externalResolvedValue("typesystem", "Global Types"),
        }, group({
            "variables": prop(component("Variables", {
                "stack": paramRef("stack", [])
            })),
            "statements": prop(component("Statements", {
                "global types": paramRef("global types", []),
                "stack": paramRef("stack", [])
            }))
        })),
        "Boolean Expression": globalType({
            "stack": resolvedValue("Variables"),
            "global types": externalResolvedValue("typesystem", "Global Types"),
        }, taggedUnion({
            "and": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
            })),
            "or": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
            })),
            "false": option(group({})),
            "not": option(component("Boolean Expression Or Selection", {
                "global types": paramRef("global types", []),
                "stack": paramRef("stack", [])
            })),
            "true": option(group({})),
            //boolean/string
            "string equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
                "right hand side": prop(component("String Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
            })),
            "string not equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
                "right hand side": prop(component("String Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
            })),
            //boolean/number
            "number equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
            })),
            "number not equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
            })),
            "greater than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
            })),
            "less than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": paramRef("global types", []),
                    "stack": paramRef("stack", [])
                })),
            })),
        })),
        "String Expression": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types"),
            "stack": resolvedValue("Variables"),
        }, taggedUnion({
            "string literal": option(terminal("string literal")),
        })),
        "String Expression Or Selection": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types"),
            "stack": resolvedValue("Variables"),
        }, taggedUnion({
            "expression": option(component("String Expression", {
                "global types": paramRef("global types", []),
                "stack": paramRef("stack", [])
            })),
            "selection": option(component("Data Path", {
                "global types": paramRef("global types", []),
                "stack": paramRef("stack", [])
            })/*, externalTypePath("typesystem", "Type", [tu("string"), ])*/),
        })),
        "Symbols": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types"),
        }, dictionary(taggedUnion({
            "namespace": option(group({
                "symbols": prop(component("Symbols", {
                    "global types": paramRef("global types", [])
                }))
            })),
            "symbol": option(group({
                "type path": prop(component("Type Path", {
                    "global types": paramRef("global types", [])
                })),
            })),
        }))),
        "Type Arguments": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types")
        }, constrainedDictionary(externalTypePath("typesystem", "Type Parameters", []), tbd(), group({
            "type": prop(component("Type Path", {
                "global types": paramRef("global types", [])
            }))
        }))),
        "Type Path": globalType({
            "global types": externalResolvedValue("typesystem", "Global Types")
        }, group({
            "namespaces": prop(array(reference(externalTypePath("typesystem", "Global Types" /*constrain type to namespace*/, []), tbd()))),
            "type": prop(reference(externalTypePath("typesystem", "Global Types", []), /*constrain to type defintion*/ tbd())),
            "arguments": prop(component("Type Arguments", {
                "global types": paramRef("global types", [])
            })),
        })),
        "Variables": globalType({}, dictionary(group({
            "type": prop(reference(externalTypePath("typesystem", "Global Types", []), tbd())),
            "initializer": prop(component("Expression", {
                "stack": paramRef("stack", []),
                "global types": paramRef("global types", []),
                "type": argResolvedValuePlaceholder()
            })),
        }))),
    }),
}