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
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({})]
        },
        "String": {
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
                "boolean": <gglossary.T.Type<pd.SourceLocation>>['group', d({})],
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
                            'type': "String",
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
                "string": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                    'type': "String",
                    'arguments': d({}),
                }],
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
                        'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', null],
                            'type': "Type",
                            'arguments': d({}),
                        }]],
                    },
                })],
            })]
        },
        "Type Library": {
            'parameters': d({}),
            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                "global types": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "parameters": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
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
                "string types": {
                    'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                },
            })]
        },
    }),
    'builders': d({}),
    'interfaces': d({}),
    'functions': d({}),
}