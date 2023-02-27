import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: gproject.T.Module<pd.SourceLocation> = {
    'definition': {
        'glossary': {
            'imports': d({
                "common": "glo-pareto-common",
            }),
            'parameters': d({
                "Annotation": {},
            }),
            'types': d({
                "Model": {
                    'parameters': d({}),
                    'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                        "root": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                "key": {
                                    'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                },
                            })],
                        },
                        "type library": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                                            "key": {
                                                'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                            },
                                        })],
                                    },
                                })],
                                "yes": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                            "type": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                        })],
                        "dictionary": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "key": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "String",
                                    'arguments': d({}),
                                }],
                            },
                            "type": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                    'type': "Type",
                                    'arguments': d({}),
                                }],
                            },
                        })],
                        "string": <gglossary.T.Type<pd.SourceLocation>>['reference', {
                            'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                            'type': "String",
                            'arguments': d({}),
                        }],
                        "tagged union": <gglossary.T.Type<pd.SourceLocation>>['group', d({
                            "default": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['group', d({
                                    "key": {
                                        'type': <gglossary.T.Type<pd.SourceLocation>>['string', {}],
                                    },
                                })],
                            },
                            "options": {
                                'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['reference', {
                                    'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
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
                                        'context': <gglossary.T.Context<pd.SourceLocation>>['local', {}],
                                        'type': "Type",
                                        'arguments': d({}),
                                    }],
                                },
                            })]],
                        },
                        "string types": {
                            'type': <gglossary.T.Type<pd.SourceLocation>>['dictionary', <gglossary.T.Type<pd.SourceLocation>>['group', d({})]],
                        },
                    })]
                },
            }),
            'interfaces': d({
                "Visitor": ['group', {
                    'members': d({
                        "Model": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "Reference": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "String": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "Type": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                        "Type Library": ['method', {
                            'data': [false],
                            'interface': [false],
                        }],
                    }),
                }],
            }),
            'functions': d({}),
        },
        'api': {
            'imports': d({}),
            'algorithms': d({}),
        },
    },
    'implementation': ['manual', {}],
}