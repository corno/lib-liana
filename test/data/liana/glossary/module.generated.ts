import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'api': {
            'imports': d({
                "foreach": "res-pareto-foreach",
            }),
            'algorithms': d({
                "createSerializer": {
                    'definition': {
                        'context': {
                            'glossary': "XXXXXX",
                            'arguments': d({}),
                        },
                        'function': "Serialize",
                    },
                    'type': ['constructor', {
                        'configuration data': [false],
                        'dependencies': d({
                            "arrayForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "ArrayForEach",
                            },
                            "dictionaryForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "DictionaryForEach",
                            },
                            "enrichedArrayForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "EnrichedArrayForEach",
                            },
                            "enrichedDictionaryForEach": {
                                'context': {
                                    'glossary': "foreach",
                                    'arguments': d({}),
                                },
                                'function': "EnrichedDictionaryForEach",
                            },
                        }),
                    }],
                },
            }),
        ,
        'glossary': {
            'imports': d({
                "common": "glo-pareto-common",
                "fp": "lib-fountain-pen",
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Context": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "import": <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                        "local": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                    })]
                },
                "Interface": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "members": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "Interface",
                                    'arguments': d({}),
                                }]],
                            },
                        })],
                        "method": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "data": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    "set": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                            "interface": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                    "not set": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    "set": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                        'type': "InterfaceReference",
                                        'arguments': d({}),
                                    }],
                                })],
                            },
                        })],
                        "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "InterfaceReference",
                            'arguments': d({}),
                        }],
                    })]
                },
                "InterfaceReference": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "context": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "interface": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                        },
                    })]
                },
                "Model": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "functions": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "data": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                        'type': "TypeReference",
                                        'arguments': d({}),
                                    }],
                                },
                                "managed input interface": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "not set": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "set": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                    })],
                                },
                                "output interface": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "not set": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                        "set": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                    })],
                                },
                                "return type": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                                        "data": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                            "asynchronous": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', {}],
                                            },
                                            "type": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                                    'type': "TypeReference",
                                                    'arguments': d({}),
                                                }],
                                            },
                                        })],
                                        "interface": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                            'type': "InterfaceReference",
                                            'arguments': d({}),
                                        }],
                                        "nothing": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                                    })],
                                },
                            })]],
                        },
                        "imports": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "interfaces": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Interface",
                                'arguments': d({}),
                            }]],
                        },
                        "parameters": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                        "templates": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "parameters": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                                },
                                "type": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                        'type': "Type",
                                        'arguments': d({}),
                                    }],
                                },
                            })]],
                        },
                        "types": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Type",
                                'arguments': d({}),
                            }]],
                        },
                    })]
                },
                "Type": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "array": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "boolean": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "computed": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "dictionary": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "group": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "optional": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['boolean', {}],
                            },
                            "type": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                        "nested": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                        "null": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "number": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "parameter": <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                        "reference": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "TypeReference",
                            'arguments': d({}),
                        }],
                        "string": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "taggedUnion": <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "Type",
                            'arguments': d({}),
                        }]],
                        "template": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "arguments": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }]],
                            },
                            "context": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "Context",
                                    'arguments': d({}),
                                }],
                            },
                            "template": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                            },
                        })],
                    })]
                },
                "TypeReference": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "context": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                'type': "Context",
                                'arguments': d({}),
                            }],
                        },
                        "type": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                        },
                    })]
                },
            }),
            'interfaces': d({
                "Visitor": ['group', {
                    'members': d({
                        "Context": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "Interface": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "InterfaceReference": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "Model": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "Type": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "TypeReference": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                    }),
                }],
            }),
            'functions': d({
                "Serialize": {
                    'data': {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                        'type': "Glossary",
                        'arguments': d({}),
                    },
                    'managed input interface': [false],
                    'output interface': [true, {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['import', {
                            'glossary': "fp",
                            'arguments': d({}),
                        }],
                        'interface': "Line",
                    }],
                    'return type': ['nothing', {}],
                },
            }),
        },
    },
    'implementation': ['manual', {}],
}