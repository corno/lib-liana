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
            "Any Value Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "start": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                        })]],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
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
                    "selection": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "temp type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Temp Type Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]]
            },
            "Global Type": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "parameters": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Parameters",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "result": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['group', d({
                            "selection": {
                                'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                    'context': ['local', null],
                                    'typeXX': "Any Value Selection",
                                    'tailXX': a([]),
                                    'type arguments': d({}),
                                }]],
                            },
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
                    "variables": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Variables",
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
            "Lookup Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "parameter": <g_glossary.T.Type<null>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                    })],
                    "resolved dictionary": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Value Selection",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "this": <g_glossary.T.Type<null>>['group', d({
                        "type": {
                            'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                "cyclic": <g_glossary.T.Type<null>>['group', d({})],
                                "non cyclic": <g_glossary.T.Type<null>>['group', d({})],
                            })],
                        },
                    })],
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
                    "selection": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                    "temp type": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Temp Type Selection",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]]
            },
            "Parameters": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                    "type": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "lookup": <g_glossary.T.Type<null>>['group', d({
                                "kind": {
                                    'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                        "cyclic": <g_glossary.T.Type<null>>['group', d({})],
                                        "non cyclic": <g_glossary.T.Type<null>>['group', d({})],
                                    })],
                                },
                                "type": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                            "resolved value": <g_glossary.T.Type<null>>['group', d({
                                "optional": {
                                    'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                        "no": <g_glossary.T.Type<null>>['group', d({})],
                                        "yes": <g_glossary.T.Type<null>>['group', d({})],
                                    })],
                                },
                                "type": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Global Type Selection",
                                        'tailXX': a([]),
                                        'type arguments': d({}),
                                    }]],
                                },
                            })],
                        })],
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
                    "variables": {
                        'type': <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Variables",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]],
                    },
                })]]
            },
            "Temp Type Selection": {
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
                            'typeXX': "Temp Type Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Temp Type Selection Tail": {
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
                            'typeXX': "Temp Type Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Type": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "classes": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({})]],
                    },
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
                                "arguments": {
                                    'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                                        "annotation": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                        },
                                        "content": {
                                            'type': <g_glossary.T.Type<null>>['group', d({
                                                "type": {
                                                    'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                                        "lookup": <g_glossary.T.Type<null>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "Lookup Selection",
                                                            'tailXX': a([]),
                                                            'type arguments': d({}),
                                                        }]],
                                                        "resolved value": <g_glossary.T.Type<null>>['reference', ['type', {
                                                            'context': ['local', null],
                                                            'typeXX': "Value Selection",
                                                            'tailXX': a([]),
                                                            'type arguments': d({}),
                                                        }]],
                                                    })],
                                                },
                                            })],
                                        },
                                    })]],
                                },
                                "context": {
                                    'type': <g_glossary.T.Type<null>>['taggedUnion', d({
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
                                "variables": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                        'context': ['local', null],
                                        'typeXX': "Variables",
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
                                        "selection": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Value Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "temp type": {
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
                                        "not set": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Value Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "set": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Any Value Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "temp type": {
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
                                "default": {
                                    'type': <g_glossary.T.Type<null>>['group', d({
                                        "annotation": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                        },
                                        "key": {
                                            'type': <g_glossary.T.Type<null>>['string', null],
                                        },
                                    })],
                                },
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
                                        "result": {
                                            'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Any Value Selection",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]]],
                                        },
                                        "type": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Type",
                                                'tailXX': a([]),
                                                'type arguments': d({}),
                                            }]],
                                        },
                                        "variables": {
                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                'context': ['local', null],
                                                'typeXX': "Variables",
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
                                            "referencee type": {
                                                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                                                    "lookup": <g_glossary.T.Type<null>>['group', d({
                                                        "selection": {
                                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                                'context': ['local', null],
                                                                'typeXX': "Lookup Selection",
                                                                'tailXX': a([]),
                                                                'type arguments': d({}),
                                                            }]],
                                                        },
                                                        "temp type": {
                                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                                'context': ['local', null],
                                                                'typeXX': "Temp Type Selection",
                                                                'tailXX': a([]),
                                                                'type arguments': d({}),
                                                            }]],
                                                        },
                                                    })],
                                                    "resolved value": <g_glossary.T.Type<null>>['group', d({
                                                        "selection": {
                                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                                'context': ['local', null],
                                                                'typeXX': "Value Selection",
                                                                'tailXX': a([]),
                                                                'type arguments': d({}),
                                                            }]],
                                                        },
                                                        "temp type": {
                                                            'type': <g_glossary.T.Type<null>>['reference', ['type', {
                                                                'context': ['local', null],
                                                                'typeXX': "Temp Type Selection",
                                                                'tailXX': a([]),
                                                                'type arguments': d({}),
                                                            }]],
                                                        },
                                                    })],
                                                })],
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
            "Value Selection": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "start": {
                        'type': <g_glossary.T.Type<null>>['group', d({
                            "annotation": {
                                'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                            },
                            "key": {
                                'type': <g_glossary.T.Type<null>>['string', null],
                            },
                        })],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Value Selection Tail": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "step type": {
                        'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                            "component": <g_glossary.T.Type<null>>['group', d({
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
                            "nothing": <g_glossary.T.Type<null>>['group', d({
                                "annotation": {
                                    'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                                },
                                "content": {
                                    'type': <g_glossary.T.Type<null>>['group', d({})],
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
                            "reference": <g_glossary.T.Type<null>>['group', d({
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
                                    'type': <g_glossary.T.Type<null>>['group', d({})],
                                },
                            })],
                        })],
                    },
                    "tail": {
                        'type': <g_glossary.T.Type<null>>['optional', <g_glossary.T.Type<null>>['reference', ['type', {
                            'context': ['local', null],
                            'typeXX': "Value Selection Tail",
                            'tailXX': a([]),
                            'type arguments': d({}),
                        }]]],
                    },
                })]
            },
            "Variables": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['taggedUnion', d({
                    "dictionary constraint": <g_glossary.T.Type<null>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                    })],
                    "option constraint": <g_glossary.T.Type<null>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                    })],
                    "parameter": <g_glossary.T.Type<null>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                    })],
                    "parent variable": <g_glossary.T.Type<null>>['group', d({
                        "annotation": {
                            'type': <g_glossary.T.Type<null>>['reference', ['glossary parameterXX', "Annotation"]],
                        },
                        "key": {
                            'type': <g_glossary.T.Type<null>>['string', null],
                        },
                    })],
                })]]
            },
        }),
        'namespaces': d({
            "Any Value Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "start": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({}),
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
                                    "selection": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "temp type": {
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
                            "parameters": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "result": {
                                'types': d({}),
                                'namespaces': d({
                                    "O": {
                                        'types': d({}),
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "selection": {
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
                            "type": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "variables": {
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
            "Lookup Selection": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "parameter": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "resolved dictionary": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "this": {
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
                                                            "cyclic": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "G": {
                                                                        'types': d({}),
                                                                        'namespaces': d({}),
                                                                    },
                                                                }),
                                                            },
                                                            "non cyclic": {
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
                                    "selection": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "temp type": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Parameters": {
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
                                        'namespaces': d({
                                            "TU": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "lookup": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "kind": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
                                                                            "TU": {
                                                                                'types': d({}),
                                                                                'namespaces': d({
                                                                                    "cyclic": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({
                                                                                            "G": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({}),
                                                                                            },
                                                                                        }),
                                                                                    },
                                                                                    "non cyclic": {
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
                                                    "resolved value": {
                                                        'types': d({}),
                                                        'namespaces': d({
                                                            "G": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "optional": {
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
                                    "variables": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                        }),
                    },
                }),
            },
            "Temp Type Selection": {
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
            "Temp Type Selection Tail": {
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
            "Type": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "classes": {
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
                                                            "arguments": {
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
                                                                                        'namespaces': d({
                                                                                            "TU": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({
                                                                                                    "lookup": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({}),
                                                                                                    },
                                                                                                    "resolved value": {
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
                                                            "context": {
                                                                'types': d({}),
                                                                'namespaces': d({
                                                                    "TU": {
                                                                        'types': d({}),
                                                                        'namespaces': d({
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
                                                            "variables": {
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
                                                                                    "selection": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "temp type": {
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
                                                                                    "not set": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "set": {
                                                                                        'types': d({}),
                                                                                        'namespaces': d({}),
                                                                                    },
                                                                                    "temp type": {
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
                                                            "default": {
                                                                'types': d({}),
                                                                'namespaces': d({}),
                                                            },
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
                                                                                    "result": {
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
                                                                                    "variables": {
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
                                                                                            "referencee type": {
                                                                                                'types': d({}),
                                                                                                'namespaces': d({
                                                                                                    "TU": {
                                                                                                        'types': d({}),
                                                                                                        'namespaces': d({
                                                                                                            "lookup": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({
                                                                                                                    "G": {
                                                                                                                        'types': d({}),
                                                                                                                        'namespaces': d({
                                                                                                                            "selection": {
                                                                                                                                'types': d({}),
                                                                                                                                'namespaces': d({}),
                                                                                                                            },
                                                                                                                            "temp type": {
                                                                                                                                'types': d({}),
                                                                                                                                'namespaces': d({}),
                                                                                                                            },
                                                                                                                        }),
                                                                                                                    },
                                                                                                                }),
                                                                                                            },
                                                                                                            "resolved value": {
                                                                                                                'types': d({}),
                                                                                                                'namespaces': d({
                                                                                                                    "G": {
                                                                                                                        'types': d({}),
                                                                                                                        'namespaces': d({
                                                                                                                            "selection": {
                                                                                                                                'types': d({}),
                                                                                                                                'namespaces': d({}),
                                                                                                                            },
                                                                                                                            "temp type": {
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
            "Value Selection": {
                'types': d({}),
                'namespaces': d({
                    "G": {
                        'types': d({}),
                        'namespaces': d({
                            "start": {
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
            "Value Selection Tail": {
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
                                            "component": {
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
                                            "nothing": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "G": {
                                                        'types': d({}),
                                                        'namespaces': d({}),
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
                                            "reference": {
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
                                                        'namespaces': d({}),
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
            "Variables": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({
                            "TU": {
                                'types': d({}),
                                'namespaces': d({
                                    "dictionary constraint": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "option constraint": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "parameter": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                    "parent variable": {
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