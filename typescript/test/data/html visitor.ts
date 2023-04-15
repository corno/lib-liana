import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_in from ".."
import * as g_out from ".."

function map_Document($: g_in.T.Document): g_out.T.Element {
    return ({
        'head': pl.cc($, ($) => ({
            'title': pl.cc($, ($) => $),
        })),
        'body': pl.cc($, ($) => map_Flow__content($)),
    })
}
function map_Edit($: g_in.T.Edit): g_out.T.Element {
    return ({
        'cite': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, $],
            () => [false],
        )),
        'datetime': pl.cc($, ($) => pl.optional(
            $,
            ($) => [true, $],
            () => [false],
        )),
    })
}
function map_Embedded($: g_in.T.Embedded): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'audio': return ['audio', ({})]
            case 'embed': return ['embed', ({})]
            case 'iframe': return ['iframe', ({})]
            case 'img': return ['img', ({})]
            case 'object': return ['object', ({
                'content': pl.cc($, ($) => map_Embedded__content($)),
            })]
            case 'video': return ['video', ({})]
            case 'canvas': return ['canvas', ({})]
            case 'math': return ['math', ({})]
            case 'picture': return ['picture', ({})]
            case 'svg': return ['svg', ({})]
            default: return pl.au($[1])
        }
    })
}
function map_Embedded__content($: g_in.T.Embedded__content): g_out.T.Element {
    return $.map(($) => map_Embedded($))
}
function map_Flow__content($: g_in.T.Flow__content): g_out.T.Element {
    return $.map(($) => pl.cc($, ($) => {
        switch ($[0]) {
            case 'id': return ['id', ({
                'id': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            })]
            case 'class': return ['class', ({
                'class': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            })]
            case 'phrase': return ['phrase', map_Phrasing__content($)]
            case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
            case 'embedded': return ['embedded', map_Embedded($)]
            case 'details': return ['details', ({
                'summary': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'phrasing': return ['phrasing', map_Phrasing__content($)]
                        case 'heading': return ['heading', map_Heading__content($)]
                        default: return pl.au($[1])
                    }
                }))),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'address': return ['address', ({})]
            case 'blockquote': return ['blockquote', ({
                'cite': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'del': return ['del', ({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'dialog': return ['dialog', ({
                'open': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'div': return ['div', map_Flow__content($)]
            case 'dl': return ['dl', pl.cc($, ($) => {
                switch ($[0]) {
                    case 'divs': return ['divs', ({})]
                    case 'dts': return ['dts', ({})]
                    default: return pl.au($[1])
                }
            })]
            case 'fieldset': return ['fieldset', ({
                'legend': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, ({})],
                    () => [false],
                )),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'figure': return ['figure', ({
                'caption': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, ({
                        'content': pl.cc($, ($) => map_Flow__content($)),
                        'position': pl.cc($, ($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'top': return ['top', ({})]
                                case 'botom': return ['botom', ({})]
                                default: return pl.au($[1])
                            }
                        })),
                    })],
                    () => [false],
                )),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'footer': return ['footer', ({})]
            case 'form': return ['form', ({})]
            case 'header': return ['header', ({})]
            case 'hr': return ['hr', ({})]
            case 'ins': return ['ins', ({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'main': return ['main', map_Flow__content($)]
            case 'map': return ['map', ({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'menu': return ['menu', $.map(($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'li': return ['li', map_Flow__content($)]
                    case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                    default: return pl.au($[1])
                }
            }))]
            case 'object': return ['object', ({
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'ol': return ['ol', ({
                'reversed': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )),
                'start': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )),
                'type': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, pl.cc($, ($) => {
                        switch ($[0]) {
                            case '1': return ['1', ({})]
                            case 'a': return ['a', ({})]
                            case 'A': return ['A', ({})]
                            case 'i': return ['i', ({})]
                            case 'I': return ['I', ({})]
                            default: return pl.au($[1])
                        }
                    })],
                    () => [false],
                )),
                'content': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'li': return ['li', ({
                            'value': pl.cc($, ($) => $),
                            'content': pl.cc($, ($) => map_Flow__content($)),
                        })]
                        case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                        default: return pl.au($[1])
                    }
                }))),
            })]
            case 'p': return ['p', map_Phrasing__content($)]
            case 'pre': return ['pre', map_Phrasing__content($)]
            case 'search': return ['search', map_Flow__content($)]
            case 'slot': return ['slot', ({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })]
            case 'table': return ['table', ({
                'caption': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, map_Flow__content($)],
                    () => [false],
                )),
                'colgroups': pl.cc($, ($) => $.map(($) => ({}))),
            })]
            case 'ul': return ['ul', $.map(($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'li': return ['li', map_Flow__content($)]
                    case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                    default: return pl.au($[1])
                }
            }))]
            case 'heading': return ['heading', map_Heading__content($)]
            case 'sectioning': return ['sectioning', map_Sectioning__content($)]
            default: return pl.au($[1])
        }
    }))
}
function map_Heading__content($: g_in.T.Heading__content): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'h1': return ['h1', map_Phrasing__content($)]
            case 'h2': return ['h2', map_Phrasing__content($)]
            case 'h3': return ['h3', map_Phrasing__content($)]
            case 'h4': return ['h4', map_Phrasing__content($)]
            case 'h5': return ['h5', map_Phrasing__content($)]
            case 'h6': return ['h6', map_Phrasing__content($)]
            case 'hgroup': return ['hgroup', ({
                'content before': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'p': return ['p', ({})]
                        case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                        default: return pl.au($[1])
                    }
                })),
                'heading': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'h1 ': return ['h1 ', map_Phrasing__content($)]
                        case 'h2': return ['h2', map_Phrasing__content($)]
                        case 'h3': return ['h3', map_Phrasing__content($)]
                        case 'h4': return ['h4', map_Phrasing__content($)]
                        case 'h5': return ['h5', map_Phrasing__content($)]
                        case 'h6': return ['h6', map_Phrasing__content($)]
                        default: return pl.au($[1])
                    }
                })),
                'content after': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'p': return ['p', ({})]
                        case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                        default: return pl.au($[1])
                    }
                })),
            })]
            default: return pl.au($[1])
        }
    })
}
function map_Script__supporting__content($: g_in.T.Script__supporting__content): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'script': return ['script', ({})]
            case 'template': return ['template', map_Template($)]
            default: return pl.au($[1])
        }
    })
}
function map_Template($: g_in.T.Template): g_out.T.Element {
    return map_Flow__content($)
}
function map_Phrasing($: g_in.T.Phrasing): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'id': return ['id', ({
                'id': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            })]
            case 'class': return ['class', ({
                'class': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            })]
            case 'text': return ['text', $]
            case 'link': return ['link', ({})]
            case 'meta': return ['meta', ({})]
            case 'noscript': return ['noscript', ({})]
            case 'object': return ['object', ({
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
            case 'a': return ['a', ({})]
            case 'button': return ['button', ({})]
            case 'input': return ['input', ({})]
            case 'label': return ['label', ({})]
            case 'select': return ['select', ({
                'content': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'option': return ['option', ({})]
                        case 'optgroup': return ['optgroup', ({
                            'options': pl.cc($, ($) => $.map(($) => ({}))),
                        })]
                        case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                        default: return pl.au($[1])
                    }
                }))),
            })]
            case 'textarea': return ['textarea', ({
                'content': pl.cc($, ($) => $),
            })]
            case 'abbr': return ['abbr', ({
                'title': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'area': return ['area', ({})]
            case 'b': return ['b', map_Phrasing__content($)]
            case 'bdi': return ['bdi', ({
                'dir': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'bdo': return ['bdo', ({
                'dir': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'br': return ['br', ({})]
            case 'cite': return ['cite', map_Phrasing__content($)]
            case 'code': return ['code', map_Phrasing__content($)]
            case 'data': return ['data', ({
                'value': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'datalist': return ['datalist', pl.cc($, ($) => {
                switch ($[0]) {
                    case 'phrasing': return ['phrasing', map_Phrasing__content($)]
                    case 'options': return ['options', $.map(($) => pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'option': return ['option', ({})]
                            case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                            default: return pl.au($[1])
                        }
                    }))]
                    default: return pl.au($[1])
                }
            })]
            case 'del': return ['del', ({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'dfn': return ['dfn', ({
                'title': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'em': return ['em', map_Phrasing__content($)]
            case 'i': return ['i', map_Phrasing__content($)]
            case 'ins': return ['ins', ({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'kbd': return ['kbd', map_Phrasing__content($)]
            case 'map': return ['map', ({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'mark': return ['mark', map_Phrasing__content($)]
            case 'meter': return ['meter', ({})]
            case 'output': return ['output', ({
                'for': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )),
                'form': pl.cc($, ($) => $),
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'progress': return ['progress', ({
                'value': pl.cc($, ($) => $),
                'max': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'q': return ['q', ({
                'cite': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'ruby': return ['ruby', ({})]
            case 's': return ['s', map_Phrasing__content($)]
            case 'samp': return ['samp', map_Phrasing__content($)]
            case 'slot': return ['slot', ({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })]
            case 'small': return ['small', map_Phrasing__content($)]
            case 'span': return ['span', map_Phrasing__content($)]
            case 'strong': return ['strong', map_Phrasing__content($)]
            case 'sub': return ['sub', map_Phrasing__content($)]
            case 'sup': return ['sup', map_Phrasing__content($)]
            case 'time': return ['time', pl.cc($, ($) => {
                switch ($[0]) {
                    case 'datetime': return ['datetime', ({
                        'value': pl.cc($, ($) => $),
                        'content': pl.cc($, ($) => map_Phrasing__content($)),
                    })]
                    case 'text': return ['text', $]
                    default: return pl.au($[1])
                }
            })]
            case 'u': return ['u', map_Phrasing__content($)]
            case 'var': return ['var', map_Phrasing__content($)]
            case 'wbr': return ['wbr', ({})]
            case 'embedded': return ['embedded', map_Embedded($)]
            default: return pl.au($[1])
        }
    })
}
function map_Phrasing__content($: g_in.T.Phrasing__content): g_out.T.Element {
    return $.map(($) => map_Phrasing($))
}
function map_Sectioning__content($: g_in.T.Sectioning__content): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'article': return ['article', map_Flow__content($)]
            case 'aside': return ['aside', map_Flow__content($)]
            case 'nav': return ['nav', map_Flow__content($)]
            case 'section': return ['section', map_Flow__content($)]
            default: return pl.au($[1])
        }
    })
}