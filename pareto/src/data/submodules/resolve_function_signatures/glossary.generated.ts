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
            "Type Library": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['group', d({
                    "global types": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({
                            "parameters": {
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
                                })]],
                            },
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
                        })]],
                    },
                    "imports": {
                        'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['group', d({})]],
                    },
                })]
            },
        }),
        'namespaces': d({
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
                                        'namespaces': d({
                                            "G": {
                                                'types': d({}),
                                                'namespaces': d({
                                                    "parameters": {
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
                                }),
                            },
                            "imports": {
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