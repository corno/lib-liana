import * as pd from 'pareto-core-data'
import * as g_liana from "../../.../../../pub/dist/submodules/liana"
import {
    aResolvedValue,
    aContainingDictionary,
    array,
    component, constrainedDictionary,
    constrainedOption,
    dict,
    dictionary,
    globalType, globalTypeSelection, group,
    grp,
    option, optional, pAllSiblings, pNonCyclicSiblings, pResolvedValue, parameter, prop,
    taggedUnion, terminal, tu, typeSelection, pExternalResolvedValue, externalTypeSelection, resolvedValueReference, dictConstraint, optionConstraint,
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
            "function": pExternalResolvedValue("typesystem", "Function", false), //needed to determine the type of the return expression
            "global types": pExternalResolvedValue("typesystem", "Global Types", false), //needed for 'Type Path'
            "stack": pResolvedValue("Variables", false), //needed for 'Data Path' and assignment statements
        }, group({
            "variables": prop(component("Variables", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", []),
            })),
            "statements": prop(component("Statements", {
                "function": aResolvedValue("function", []),
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("variables", [])
            }))
        })),
        "Boolean Expression": globalType({
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, taggedUnion({
            "and": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
            "or": option(group({
                "left hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
            "false": option(group({})),
            "not": option(component("Boolean Expression Or Selection", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            "true": option(group({})),
            //boolean/string
            "string equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("String Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
            "string not equals": option(group({
                "left hand side": prop(component("String Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("String Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
            //boolean/number
            "number equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
            "number not equals": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
            "greater than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
            "less than": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
        })),
        "Boolean Expression Or Selection": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, taggedUnion({
            "expression": option(component("Boolean Expression", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            "selection": constrainedOption({
                "out": optionConstraint("TBD", [], "boolean", externalTypeSelection("typesystem", "Type", []))
            }, component("Data Path", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
        })),
        "Data Path Tail": globalType({
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, optional(taggedUnion({
            "call": option(group({
                "function": prop(component("Data Path", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })), /*constraint tagged union: type === function*/
                "type arguments": prop(component("Type Arguments", {
                    "type": aResolvedValue("function", [/*component constraint*/]),
                    "global types": aResolvedValue("global types", []),
                })),
                "arguments": prop(component("Data Path", {
                    "stack": aResolvedValue("stack", []),
                    "global types": aResolvedValue("global types", [])
                })),
            })),
            "property": option(resolvedValueReference("FIXME", [], externalTypeSelection("typesystem", "Type", [tu("group"), grp("properties")]))),
        })), /*result("XXX"),*/ ),
        "Data Path": globalType({
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, group({
            "variable": prop(resolvedValueReference("stack", [], typeSelection("Variables", []))),
            "tail": prop(component("Data Path Tail", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            // "property access": option(group({
            //     "context": prop(component("Expression", {})),
            //     "property": prop(component("Expression", {})),
            // })),
        })),
        "Expression": globalType({
            "type": pExternalResolvedValue("typesystem", "Type", false),
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, taggedUnion({
            //array
            "array literal": constrainedOption({
                "out": optionConstraint("TBD", [], "array", externalTypeSelection("typesystem", "Type", []))
            }, array(component("Expression", {
                "stack": aResolvedValue("stack", []),
                "global types": aResolvedValue("global types", []),
                "type": aResolvedValue("out", [])
            }))),
            //object
            "object literal": constrainedOption({
                "out": optionConstraint("TBD", [], "group", externalTypeSelection("typesystem", "Type", []))
            }, group({
                "properties": prop(constrainedDictionary(
                    { "X": dictConstraint("XXX", [], externalTypeSelection("typesystem", "Type", [tu("group"), grp("properties")])) },
                    component("Expression", {
                        "stack": aResolvedValue("stack", []),
                        "global types": aResolvedValue("global types", []),
                        "type": aResolvedValue("out", [])
                    })
                )),
            })),
            //function (inline function)
            "function": constrainedOption({
                "out": optionConstraint("TBD", [], "function", externalTypeSelection("typesystem", "Type", []))
            }, group({
                "parameters": prop(dictionary(group({}))), //no type info needed
                //"signature": prop(component("FunctionSignature", {})),
                "variables": prop(component("Variables", {
                    "global types": aResolvedValue("global types", []),
                    //"parameters": [true, aResolvedValue("parameters", [])],
                    "stack": aResolvedValue("stack", []),
                })),
                "statements": prop(component("Statements", {
                    "function": aResolvedValue("out", []),
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("variables", [])
                })),
            })),
            //boolean
            "boolean": constrainedOption({
                "out": optionConstraint("TBD", [], "boolean", externalTypeSelection("typesystem", "Type", []))
            }, component("Boolean Expression", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            //numerical
            "numerical": constrainedOption({
                "out": optionConstraint("TBD", [], "number", externalTypeSelection("typesystem", "Type", []))
            }, component("Numerical Expression", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            //string
            "string": constrainedOption({
                "out": optionConstraint("TBD", [], "string", externalTypeSelection("typesystem", "Type", []))
            }, component("String Expression", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            //any
            "conditional": option(group({
                "test": prop(component("Boolean Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "true": prop(component("Expression", {
                    "stack": aResolvedValue("stack", []),
                    "global types": aResolvedValue("global types", []),
                    "type": aResolvedValue("type", []),
                })),
                "false": prop(component("Expression", {
                    "stack": aResolvedValue("stack", []),
                    "global types": aResolvedValue("global types", []),
                    "type": aResolvedValue("type", []),
                })),
            })),
            //"identifier": option(terminal("identifier")),
            // "new": option(group({
            //     "class": prop(terminal("identifier")),
            //     "parameters": prop(dictionary(component("Expression", {}))),
            // })),
            // "noSubstitutionTemplateLiteral": empty("NoSubstitutionTemplateLiteral"),
            "null": constrainedOption({
                "out": optionConstraint("TBD", [], "null", externalTypeSelection("typesystem", "Type", []))
            }, group({

            })),
            //"parenthesized": option(component("Expression", {})),
            "symbol": option(component("Data Path", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
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
        "Numerical Expression": globalType({
            "stack": pResolvedValue("Variables", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, taggedUnion({
            "minus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
            "plus": option(group({
                "left hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
                "right hand side": prop(component("Numerical Expression Or Selection", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", [])
                })),
            })),
            "predecrement": option(component("Numerical Expression Or Selection", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            "preincrement": option(component("Numerical Expression Or Selection", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            "postdecrement": option(component("Numerical Expression Or Selection", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            "postincrement": option(component("Numerical Expression Or Selection", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            "numeric literal": option(terminal("numeric literal")),
        })),
        "Numerical Expression Or Selection": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, taggedUnion({
            "expression": option(component("Numerical Expression", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            "selection": option(component("Data Path", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })/*, externalTypeSelection("typesystem", "Type", [tu("number"), ])*/),
        })),
        "SourceFile": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false)
        }, group({
            "symbols": prop(component("Symbols", {
                "global types": aResolvedValue("global types", [])
            })),
        })),
        "Assign": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, group({
            "variable": prop(component("Data Path", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            "right hand side": prop(component("Expression", {
                "stack": aResolvedValue("stack", []),
                "global types": aResolvedValue("global types", []),
                "type": aResolvedValue("type", [])
            })),
        })),
        "Statements": globalType({
            "function": pExternalResolvedValue("typesystem", "Function", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, array(taggedUnion({
            "block": option(component("Block", {
                "function": aResolvedValue("function", []),
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", []),
            })),
            // "break": composite("BreakStatement", optional(component("identifier"))),
            "call": option(group({
                "function": prop(component("Data Path", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
                })),
                "type arguments": prop(component("Type Arguments", {
                    "type parameters": aResolvedValue("function", []),
                    "global types": aResolvedValue("global types", []),
                })),
                "arguments": prop(constrainedDictionary(
                    { "parameter": dictConstraint("function", [], externalTypeSelection("typesystem", "Function", [ grp("parameters")])) },
                    component("Expression", {
                        "stack": aResolvedValue("stack", []),
                        "global types": aResolvedValue("global types", []),
                        "type": aResolvedValue("parameter", []),
                    })
                )),
            })),
            "for": option(group({
                "condition": prop(component("Boolean Expression", {
                    "stack": aResolvedValue("stack", []),
                    "global types": aResolvedValue("global types", []),
                })),
                "incrementer": prop(component("Assign", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
                })),
                "block": prop(component("Block", {
                    "function": aResolvedValue("function", []),
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
                })),
            })),
            "if": option(group({
                "condition": prop(component("Boolean Expression Or Selection", {
                    "stack": aResolvedValue("stack", []),
                    "global types": aResolvedValue("global types", []),
                })),
                "then": prop(component("Block", {
                    "function": aResolvedValue("function", []),
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),

                })),
                "else": prop(optional(component("Block", {
                    "function": aResolvedValue("function", []),
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
                }))),
            })),
            "assign": option(component("Assign", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", []),
            })),
            "minus assign": option(group({
                "target": prop(component("Data Path", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
                })), /*must be number*/
                "right hand side": prop(component("Expression", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
                    "type": aResolvedValue("target", [])
                })),
            })),
            "plus assign": option(group({
                "target": prop(component("Data Path", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
                })), /*must be number*/
                "right hand side": prop(component("Expression", {
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
                    "type": aResolvedValue("target", [])
                })),
            })),
            // "labeled": composite("LabeledStatement", group({
            //     "label": member(component("identifier")),
            //     "statement": member(component("statement")),
            // })),
            "return": option(group({
                "expression": prop(optional(component("Expression", {
                    "stack": aResolvedValue("stack", []),
                    "global types": aResolvedValue("global types", []),
                    "type": aResolvedValue("function", [/*return type*/])
                })))
            })),
            "switch": option(group({
                "condition": prop(component("Data Path", {
                    "stack": aResolvedValue("stack", []),
                    "global types": aResolvedValue("global types", []),
                })), /*must be tagged union */
                "cases": prop(constrainedDictionary(
                    { "option": dictConstraint("condition", [], externalTypeSelection("typesystem", "Type", [tu("tagged union")])) },
                    group({
                        "block": prop(component("Block", {
                            "function": aResolvedValue("function", []),
                            "global types": aResolvedValue("global types", []),
                            "stack": aResolvedValue("stack", []),
                        }))
                    })
                )),
                "default": prop(optional(component("Block", {
                    "function": aResolvedValue("function", []),
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
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
                "condition": prop(component("Boolean Expression Or Selection", {
                    "stack": aResolvedValue("stack", []),
                    "global types": aResolvedValue("global types", []),
                })),
                "block": prop(component("Block", {
                    "function": aResolvedValue("function", []),
                    "global types": aResolvedValue("global types", []),
                    "stack": aResolvedValue("stack", []),
                })),
            })),
        }))),
        "String Expression": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, taggedUnion({
            "string literal": option(terminal("string literal")),
        })),
        "String Expression Or Selection": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, taggedUnion({
            "expression": option(component("String Expression", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })),
            "selection": option(component("Data Path", {
                "global types": aResolvedValue("global types", []),
                "stack": aResolvedValue("stack", [])
            })/*, externalTypeSelection("typesystem", "Type", [tu("string"), ])*/),
        })),
        "Symbols": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
        }, dictionary(taggedUnion({
            "namespace": option(group({
                "symbols": prop(component("Symbols", {
                    "global types": aResolvedValue("global types", [])
                }))
            })),
            "symbol": option(group({
                "type path": prop(component("Type Path", {
                    "global types": aResolvedValue("global types", [])
                })),
            })),
        }))),
        "Type Arguments": globalType({
            "type parameters": pExternalResolvedValue("typesystem", "Type Parameters", false),
            "global types": pExternalResolvedValue("typesystem", "Global Types", false)
        }, constrainedDictionary(
            { "x": dictConstraint("type parameters", [], externalTypeSelection("typesystem", "Type Parameters", [])) },
            group({
                "type": prop(component("Type Path", {
                    "global types": aResolvedValue("global types", [])
                }))
            })
        )),
        "Type Path": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false)
        }, group({
            "namespaces": prop(array(resolvedValueReference("FIXME", [], externalTypeSelection("typesystem", "Global Types" /*constrain type to namespace*/, [])))),
            "type": prop(resolvedValueReference("namespaces", [], externalTypeSelection("typesystem", "Global Types", []), /*constrain to type defintion*/)),
            "arguments": prop(component("Type Arguments", {
                "type": aResolvedValue("type", []),
                "global types": aResolvedValue("global types", [])
            })),
        })),
        "Variables": globalType({
            "global types": pExternalResolvedValue("typesystem", "Global Types", false),
            "stack": pResolvedValue("Variables", false),
        }, dictionary(group({
            "type": prop(taggedUnion({
                "parameter": option(group({})),
                "stack": option(group({})),
                "local": option(group({
                    "type": prop(resolvedValueReference("FIXME", [], externalTypeSelection("typesystem", "Global Types", []))),
                    "initializer": prop(component("Expression", {
                        "stack": aResolvedValue("stack", []),
                        "global types": aResolvedValue("global types", []),
                        "type": aResolvedValue("type", []),
                    })),
                })),
            })),
        }))),
    }),
}