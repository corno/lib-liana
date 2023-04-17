import * as pd from 'pareto-core-data'
import * as g_liana from "../../.../../../pub/dist/submodules/liana"
import {
    argResolvedValuePlaceholder,
    array,
    component, constrainedDictionary, dictionary, externalTypePath, globalType, group,
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
            "stack": resolvedValue("Variable Stack"),
            "global types": resolvedValue("Global Types"),
        }, group({
            "variables": prop(component("Variables", {})),
            "statements": prop(array(taggedUnion({
                "block": option(component("Block", { "stack": argResolvedValuePlaceholder() })),
                // "break": composite("BreakStatement", optional(component("identifier"))),
                "call": option(group({
                    "function": prop(component("Data Path", {
                        "type": argResolvedValuePlaceholder()
                    })),
                    "type arguments": prop(importedComponent("typesystem", "Type", {
                        "global types": argResolvedValuePlaceholder()
                    })),
                    "arguments": prop(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })),
                })),
                "for": option(group({
                    "initializer": prop(component("Variables", {})),
                    "condition": prop(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })),
                    "incrementer": prop(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })),
                    "block": prop(component("Block", {
                        "stack": argResolvedValuePlaceholder()
                    })),
                })),
                "if": option(group({
                    "condition": prop(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })),
                    "then": prop(component("Block", {
                        "stack": argResolvedValuePlaceholder()
                    })),
                    "else": prop(optional(component("Block", {
                        "stack": argResolvedValuePlaceholder()
                    }))),
                })),
                "minus assign": option(group({
                    "variable": prop(component("Data Path", {
                        "stack": argResolvedValuePlaceholder()
                    })),
                    "right hand side": prop(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })),
                })),
                "plus assign": option(group({
                    "variable": prop(component("Data Path", {
                        "stack": argResolvedValuePlaceholder()
                    })),
                    "right hand side": prop(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })),
                })),
                // "labeled": composite("LabeledStatement", group({
                //     "label": member(component("identifier")),
                //     "statement": member(component("statement")),
                // })),
                "return": option(group({
                    "expression": prop(optional(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })))
                })),
                "switch": option(group({
                    "condition": prop(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })),
                    "cases": prop(constrainedDictionary(externalTypePath("typesystem", "Type", [tu("tagged union")]), tbd(), group({
                        "block": prop(component("Block", {
                            "stack": argResolvedValuePlaceholder()
                        }))
                    }))),
                    "default": prop(optional(component("Block", {
                        "stack": argResolvedValuePlaceholder()
                    }))),
                })),
                // "throw": option(component("Expression", {})),
                // "try": option(group({
                //     "block": prop(component("Block", {})),
                //     "catchClause": prop(group({
                //         "variable": prop(component("variableDeclaration")),
                //         "block": member(component("block")),
                //     }))),
                // }))),
                "while": option(group({
                    "condition": prop(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })),
                    "block": prop(component("Block", {
                        "stack": argResolvedValuePlaceholder()
                    })),
                })),
            })))
        })),
        "Data Path": globalType({
            "stack": resolvedValue("Variable Stack"),
        }, group({
            "variable": prop(reference(typePath("Variables", []), tbd())),
            "tail": prop(array(taggedUnion({
                "call": option(group({
                    "function": prop(component("Data Path", {
                        "stack": argResolvedValuePlaceholder()
                    })),
                    "type arguments": prop(constrainedDictionary(externalTypePath("typesystem", "Type Parameters", []), tbd(), group({
                        "type": prop(component("Type Path", {}))
                    }))),//can I define types inline? Or only refer to them?
                    "arguments": prop(component("Expression", {
                        "type": argResolvedValuePlaceholder()
                    })),
                })),
                "property": option(reference(externalTypePath("typesystem", "Type", [tu("group"), grp("properties")]), tbd())),
            }))),
            // "property access": option(group({
            //     "context": prop(component("Expression", {})),
            //     "property": prop(component("Expression", {})),
            // })),
        })),
        "String Expression Or Selection": globalType({
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "expression": option(component("String Expression", {})),
            "selection": option(component("Data Path", {
                "stack": argResolvedValuePlaceholder()
            })/*, externalTypePath("typesystem", "Type", [tu("string"), ])*/),
        })),
        "String Expression": globalType({
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "string literal": option(terminal("string literal")),
        })),
        "Numerical Expression Or Selection": globalType({
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "expression": option(component("Numerical Expression", {
                "stack": argResolvedValuePlaceholder()
            })),
            "selection": option(component("Data Path", {
                "stack": argResolvedValuePlaceholder()
            })/*, externalTypePath("typesystem", "Type", [tu("number"), ])*/),
        })),
        "Numerical Expression": globalType({
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "minus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "stack": argResolvedValuePlaceholder()
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "stack": argResolvedValuePlaceholder()
                })),
            })),
            "plus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "stack": argResolvedValuePlaceholder()
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "stack": argResolvedValuePlaceholder()
                })),
            })),
            "predecrement": option(component("Numerical Expression Or Selection", {
                "stack": argResolvedValuePlaceholder()
            })),
            "preincrement": option(component("Numerical Expression Or Selection", {
                "stack": argResolvedValuePlaceholder()
            })),
            "postdecrement": option(component("Numerical Expression Or Selection", {
                "stack": argResolvedValuePlaceholder()
            })),
            "postincrement": option(component("Numerical Expression Or Selection", {
                "stack": argResolvedValuePlaceholder()
            })),
            "numeric literal": option(terminal("numeric literal")),
        })),
        "Boolean Expression Or Selection": globalType({
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "expression": option(component("Boolean Expression", {
                "stack": argResolvedValuePlaceholder()
            })),
            "selection": option(component("Data Path", {
                "stack": argResolvedValuePlaceholder()
            }), [externalTypePath("typesystem", "Type", []), "boolean"]),
        })),
        "Boolean Expression": globalType({
            "stack": resolvedValue("Variable Stack"),
        }, taggedUnion({
            "and": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "stack": argResolvedValuePlaceholder()
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "stack": argResolvedValuePlaceholder()
                })),
            })),
            "or": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "stack": argResolvedValuePlaceholder()
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "stack": argResolvedValuePlaceholder()
                })),
            })),
            "false": option(group({})),
            "not": option(component("Boolean Expression Or Selection", {
                "stack": argResolvedValuePlaceholder()
            })),
            "true": option(group({})),
            //boolean/string
            "string equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {})),
                "right hand side": prop(component("String Expression Or Selection", {})),
            })),
            "string not equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {})),
                "right hand side": prop(component("String Expression Or Selection", {})),
            })),
            //boolean/number
            "number equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {})),
                "right hand side": prop(component("Numerical Expression Or Selection", {})),
            })),
            "number not equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {})),
                "right hand side": prop(component("Numerical Expression Or Selection", {})),
            })),
            "greater than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {})),
                "right hand side": prop(component("Numerical Expression Or Selection", {})),
            })),
            "less than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {})),
                "right hand side": prop(component("Numerical Expression Or Selection", {})),
            })),
        })),
        "Expression": globalType({
            "type": resolvedValue("Type")
        }, taggedUnion({
            //array
            "array literal": option(array(component("Expression", {
                "type": argResolvedValuePlaceholder()
            })), [externalTypePath("typesystem", "Type", []), "array"]),
            //object
            "object literal": option(group({
                "properties": prop(constrainedDictionary(externalTypePath("typesystem", "Type", [tu("group"), grp("properties")]), tbd(), component("Expression", {
                    "type": argResolvedValuePlaceholder()
                }))),
            }), [externalTypePath("typesystem", "Type", []), "group"]),
            //function (inline function)
            "function": option(group({
                "arguments": prop(dictionary(group({}))), //no type info needed
                //"signature": prop(component("FunctionSignature", {})),
                "block": prop(component("Block", {
                    "stack": argResolvedValuePlaceholder()
                })),
            }), [externalTypePath("typesystem", "Type", []), "function"]),
            //boolean
            "boolean": option(component("Boolean Expression", {
                "stack": argResolvedValuePlaceholder()
            }), [externalTypePath("typesystem", "Type", []), "boolean"]),
            //numerical
            "numerical": option(component("Numerical Expression", {
                "stack": argResolvedValuePlaceholder()
            }), [externalTypePath("typesystem", "Type", []), "number"]),
            //string
            "string": option(component("String Expression", {
                "stack": argResolvedValuePlaceholder()
            }), [externalTypePath("typesystem", "Type", []), "string"]),
            //any
            "conditional": option(group({
                "test": prop(component("Boolean Expression Or Selection", {})),
                "true": prop(component("Expression", {
                    "type": argResolvedValuePlaceholder()
                })),
                "false": prop(component("Expression", {
                    "type": argResolvedValuePlaceholder()
                })),
            })),
            //"identifier": option(terminal("identifier")),
            // "new": option(group({
            //     "class": prop(terminal("identifier")),
            //     "parameters": prop(dictionary(component("Expression", {}))),
            // })),
            // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
            "null": option(group({}), [externalTypePath("typesystem", "Type", []), "null"]),
            //"parenthesized": option(component("Expression", {})),
            "symbol": option(component("Data Path", {
                "stack": argResolvedValuePlaceholder()
            })),
            // "template": composite("TemplateExpression", group({
            //     "head": member(empty("TemplateHead", { "text": terminal() })),
            //     "spans": member(array(composite("TemplateSpan", group({
            //         "expression": member(component("Expression")),
            //         "type": member(choice({
            //             "middle": empty("TemplateMiddle", { "text": terminal() }),
            //             "tail": empty("TemplateTail", { "text": terminal() }),
            //         })),
            //     })))),
            // })),
        })),
        "SourceFile": globalType({
            "types": resolvedValue("Global Types")
        }, group({
            "symbols": prop(component("Symbols", {})),
        })),
        "Symbols": globalType({}, dictionary(taggedUnion({
            "namespace": option(group({
                "symbols": prop(component("Symbols", {}))
            })),
            "symbol": option(group({
                "type path": prop(component("Type Path", {})),
            })),
        }))),
        "Type Path": globalType({
            "global types": resolvedValue("Global Types"),
        }, group({
            "namespaces": prop(array(reference(externalTypePath("typesystem", "Global Types" /*constrain type to namespace*/, []), tbd()))),
            "type": prop(reference(externalTypePath("typesystem", "Global Types", []), /*constrain to type defintion*/ tbd())),
            "parameters": prop(dictionary(importedComponent("typesystem", "Type", {
                "global types": paramRef("global types")
            }))), //this should be a reference
        })),
        "Variable Stack": globalType({}, dictionary(group({}))),
        "Variables": globalType({}, dictionary(group({
            "type": prop(reference(externalTypePath("typesystem", "Global Types", []), tbd())),
            "initializer": prop(component("Expression", {
                "type": argResolvedValuePlaceholder()
            })),
        })))
    }),
}