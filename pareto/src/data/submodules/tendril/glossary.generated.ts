import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<null> = {
    'imports': d({}),
    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'types': d({
            "Atom": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                        })],
                    },
                })]
            },
            "Dictionary Constraints": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]]
            },
            "Global Type": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "result": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                            "type": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Global Type Selection",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
                        })]],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Global Type Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "import": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                        })]],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                        })],
                    },
                })]
            },
            "Imports": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({})]]
            },
            "Labels": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "atom types": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({})]],
                    },
                })]
            },
            "Model": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "root": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                        })],
                    },
                    "type library": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Library",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Option Constraints": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                    "option": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                        })],
                    },
                    "type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]]
            },
            "Properties": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]]
            },
            "Type": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "array": <g_glossary.T.Type<null>>['group', d({
                                "type": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "component": <g_glossary.T.Type<null>>['group', d({
                                "context": {
                                    'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                        "cyclic sibling": <g_glossary.T.Type<null>>['group', d({
                                            "type": {
                                                'type': <g_glossary.T.Type<null>>['group', d({
                                                    "annotation": {
                                                        'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                                    },
                                                    "key": {
                                                        'type': <g_glossary.T.Type<null>>['string', null],
                                                    },
                                                })],
                                            },
                                        })],
                                        "import": <g_glossary.T.Type<null>>['group', d({
                                            "library": {
                                                'type': <g_glossary.T.Type<null>>['group', d({
                                                    "annotation": {
                                                        'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                                    },
                                                    "key": {
                                                        'type': <g_glossary.T.Type<null>>['string', null],
                                                    },
                                                })],
                                            },
                                            "type": {
                                                'type': <g_glossary.T.Type<null>>['group', d({
                                                    "annotation": {
                                                        'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                                    },
                                                    "key": {
                                                        'type': <g_glossary.T.Type<null>>['string', null],
                                                    },
                                                })],
                                            },
                                        })],
                                        "resolved sibling": <g_glossary.T.Type<null>>['group', d({
                                            "type": {
                                                'type': <g_glossary.T.Type<null>>['group', d({
                                                    "annotation": {
                                                        'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                                    },
                                                    "key": {
                                                        'type': <g_glossary.T.Type<null>>['string', null],
                                                    },
                                                })],
                                            },
                                        })],
                                    })],
                                },
                            })],
                            "dictionary": <g_glossary.T.Type<null>>['group', d({
                                "constraints": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Dictionary Constraints",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "key": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Atom",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                                "type": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "group": <g_glossary.T.Type<null>>['group', d({
                                "properties": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Properties",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "nothing": <g_glossary.T.Type<null>>['group', d({
                                "result": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                                        "type": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Global Type Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                            })],
                            "optional": <g_glossary.T.Type<null>>['group', d({
                                "result": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                                        "type": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Global Type Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                                "type": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Type",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "tagged union": <g_glossary.T.Type<null>>['group', d({
                                "options": {
                                    'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                        "constraints": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Option Constraints",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "type": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                    })]],
                                },
                                "result": {
                                    'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]]],
                                },
                            })],
                            "terminal": <g_glossary.T.Type<null>>['group', d({
                                "constrained": {
                                    'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                        "no": <g_glossary.T.Type<null>>['group', d({})],
                                        "yes": <g_glossary.T.Type<null>>['group', d({
                                            "computed": {
                                                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                                    "no": <g_glossary.T.Type<null>>['group', d({})],
                                                    "yes": <g_glossary.T.Type<null>>['group', d({})],
                                                })],
                                            },
                                            "type": {
                                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                    'context': ['local', null],
                                                    'typeXX': "Type Selection",
                                                    'tailXX': a([]),
                                                    'type arguments': d({}),
                                                }]],
                                            },
                                        })],
                                    })],
                                },
                                "terminal": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Atom",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        })],
                    },
                })]
            },
            "Type Library": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "global types": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Global Type",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                    "imports": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Imports",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "labels": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Labels",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]
            },
            "Type Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "global type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Global Type Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Type Selection Tail": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "step type": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "array": <g_glossary.T.Type<null>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<null>>['group', d({})],
                                },
                            })],
                            "dictionary": <g_glossary.T.Type<null>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<null>>['group', d({})],
                                },
                            })],
                            "group": <g_glossary.T.Type<null>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<null>>['group', d({
                                        "property": {
                                            'type': <g_glossary.T.Type<null>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                                },
                                                "key": {
                                                    'type': <g_glossary.T.Type<null>>['string', null],
                                                },
                                            })],
                                        },
                                    })],
                                },
                            })],
                            "optional": <g_glossary.T.Type<null>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<null>>['group', d({})],
                                },
                            })],
                            "tagged union": <g_glossary.T.Type<null>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<null>>['group', d({
                                        "option": {
                                            'type': <g_glossary.T.Type<null>>['group', d({
                                                "annotation": {
                                                    'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                                },
                                                "key": {
                                                    'type': <g_glossary.T.Type<null>>['string', null],
                                                },
                                            })],
                                        },
                                    })],
                                },
                            })],
                        })],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Type Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
        }),
        'namespaces': d({
            "Atom": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Dictionary Constraints": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "type": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Global Type": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "result": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "type": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Global Type Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "import": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Imports": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Labels": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "atom types": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({}),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Model": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "root": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "type library": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Option Constraints": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "option": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "type": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Properties": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "G": {
                                'types': d({}),
                                'namespaces': d({
                                    "type": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Type": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "type": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "array": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "type": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "component": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "context": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "TU": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "cyclic sibling": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "G": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "type": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                            "import": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "G": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "library": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                            "type": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                            "resolved sibling": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "G": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "type": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "dictionary": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "constraints": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "key": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                            "type": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "group": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "properties": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "nothing": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "result": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "O": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "type": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "optional": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "result": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "O": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "type": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "type": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "tagged union": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "options": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "D": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "G": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "constraints": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "type": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "result": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "O": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "terminal": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "constrained": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "TU": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "no": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "G": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                }),
                                                                            },
                                                                            "yes": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "G": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "computed": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({
                                                                                                    "TU": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({
                                                                                                            "no": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({
                                                                                                                    "G": {
                                                                                                                        'types': d({}),
                                                                                                                        'namespaces': d({}),
                                                                                                                    },
                                                                                                                }),
                                                                                                            },
                                                                                                            "yes": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({
                                                                                                                    "G": {
                                                                                                                        'types': d({}),
                                                                                                                        'namespaces': d({}),
                                                                                                                    },
                                                                                                                }),
                                                                                                            },
                                                                                                        }),
                                                                                                    },
                                                                                                }),
                                                                                            },
                                                                                            "type": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                }),
                                                                            },
                                                                        }),
                                                                    },
                                                                }),
                                                            },
                                                            "terminal": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Type Library": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "global types": {
                                'types': d({}),
                                'namespaces': d({
                                    "D": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "imports": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "labels": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Type Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "global type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "tail": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Type Selection Tail": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "step type": {
                                'types': d({}),
                                'namespaces': d({
                                    "TU": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "array": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "dictionary": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "group": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "property": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                            "optional": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
                                                    },
                                                }),
                                            },
                                            "tagged union": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "option": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
                                                        }),
                                                    },
                                                }),
                                            },
                                        }),
                                    },
                                }),
                            },
                            "tail": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}