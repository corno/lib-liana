import * as pd from 'pareto-core-data'

import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gglossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'types': d({
        "Model": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "root": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                        },
                        "key": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                },
                "type library": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Type Library",
                        'arguments': d({}),
                    }],
                },
            })]
        },
        "Reference": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "type": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "parameter": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "parameter": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                            },
                        })],
                        "relative": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "tbd": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                    })],
                },
                "type path": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                        'type': "Type Path",
                        'arguments': d({}),
                    }],
                },
            })]
        },
        "Terminal": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "constrained": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "no": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "type": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                            },
                        })],
                        "yes": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Reference",
                            'arguments': d({}),
                        }],
                    })],
                },
            })]
        },
        "Type": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                "array": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "type": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                    },
                })],
                "component": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "arguments": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                    },
                    "context": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                            "import": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "library": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "annotation": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                        },
                                        "key": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                                        },
                                    })],
                                },
                            })],
                            "local": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        })],
                    },
                    "type": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "annotation": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                            },
                            "key": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                    },
                })],
                "dictionary": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "key": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Terminal",
                            'arguments': d({}),
                        }],
                    },
                    "type": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                    },
                })],
                "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "properties": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "type": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Type",
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                    },
                })],
                "optional": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "type": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type",
                            'arguments': d({}),
                        }],
                    },
                })],
                "tagged union": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                    "default": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "annotation": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                            },
                            "key": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                            },
                        })],
                    },
                    "options": {
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "constrained": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['optional', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "type path": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                            'type': "Type Path",
                                            'arguments': d({}),
                                        }],
                                    },
                                })]],
                            },
                            "type": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                    'type': "Type",
                                    'arguments': d({}),
                                }],
                            },
                        })]],
                    },
                })],
                "terminal": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "Terminal",
                    'arguments': d({}),
                }],
            })]
        },
        "Type Library": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "global types": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "parameters": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "global type": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                        "annotation": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                        },
                                        "key": {
                                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                                        },
                                    })],
                                },
                            })]],
                        },
                        "type": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                                'type': "Type",
                                'arguments': d({}),
                            }],
                        },
                    })]],
                },
                "imports": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                },
                "terminal types": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                },
            })]
        },
        "Type Path": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "global type": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "annotation": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                        },
                        "key": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                        },
                    })],
                },
                "path": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['array', <gglossary.T.Type<pd.SourceLocation>>['taggedUnion', d({
                        "array": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "dictionary": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "group": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "property": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                            },
                        })],
                        "optional": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
                        "tagged union": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "option": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "annotation": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['glossary parameter', "Annotation"],
                                    },
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', null],
                                    },
                                })],
                            },
                        })],
                    })]],
                },
            })]
        },
    }),
    'type': ['synchronous', {
        'builders': d({}),
        'functions': d<gglossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
    }],
}