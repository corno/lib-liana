import * as pl from 'pareto-core-lib'

import * as g_in from ".."
import * as g_out from ".."

function map_Document($: g_in.T.X): g_out.T.X {
    return ({
        'head': pl.cc($, ($) => ({
            'title': pl.cc($, ($) => $),
        })),
        'body': pl.cc($, ($) => map_Flow__content($)),
    })
}
function map_Edit($: g_in.T.X): g_out.T.X {
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
function map_Embedded($: g_in.T.X): g_out.T.X {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'audio': return createElement("audio", pm.wrapRawDictionary({}), ({}))
            case 'embed': return createElement("embed", pm.wrapRawDictionary({}), ({}))
            case 'iframe': return createElement("iframe", pm.wrapRawDictionary({}), ({}))
            case 'img': return createElement("img", pm.wrapRawDictionary({}), ({}))
            case 'object': return createElement("object", pm.wrapRawDictionary({}), ({
                'content': pl.cc($, ($) => map_Embedded__content($)),
            }))
            case 'video': return createElement("video", pm.wrapRawDictionary({}), ({}))
            case 'canvas': return createElement("canvas", pm.wrapRawDictionary({}), ({}))
            case 'math': return createElement("math", pm.wrapRawDictionary({}), ({}))
            case 'picture': return createElement("picture", pm.wrapRawDictionary({}), ({}))
            case 'svg': return createElement("svg", pm.wrapRawDictionary({}), ({}))
            default: return pl.au($[1])
        }
    })
}
function map_Embedded__content($: g_in.T.X): g_out.T.X {
    return $.map(($) => map_Embedded($))
}
function map_Flow__content($: g_in.T.X): g_out.T.X {
    return $.map(($) => pl.cc($, ($) => {
        switch ($[0]) {
            case 'id': return createElement("id", pm.wrapRawDictionary({}), ({
                'id': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            }))
            case 'class': return createElement("class", pm.wrapRawDictionary({}), ({
                'class': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            }))
            case 'phrase': return createElement("phrase", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'script supporting': return createElement("script supporting", pm.wrapRawDictionary({}), map_Script__supporting__content($))
            case 'embedded': return createElement("embedded", pm.wrapRawDictionary({}), map_Embedded($))
            case 'details': return createElement("details", pm.wrapRawDictionary({}), ({
                'summary': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'phrasing': return createElement("phrasing", pm.wrapRawDictionary({}), map_Phrasing__content($))
                        case 'heading': return createElement("heading", pm.wrapRawDictionary({}), map_Heading__content($))
                        default: return pl.au($[1])
                    }
                }))),
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'address': return createElement("address", pm.wrapRawDictionary({}), ({}))
            case 'blockquote': return createElement("blockquote", pm.wrapRawDictionary({}), ({
                'cite': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'del': return createElement("del", pm.wrapRawDictionary({}), ({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'dialog': return createElement("dialog", pm.wrapRawDictionary({}), ({
                'open': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )),
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'div': return createElement("div", pm.wrapRawDictionary({}), map_Flow__content($))
            case 'dl': return createElement("dl", pm.wrapRawDictionary({}), pl.cc($, ($) => {
                switch ($[0]) {
                    case 'divs': return createElement("divs", pm.wrapRawDictionary({}), ({}))
                    case 'dts': return createElement("dts", pm.wrapRawDictionary({}), ({}))
                    default: return pl.au($[1])
                }
            }))
            case 'fieldset': return createElement("fieldset", pm.wrapRawDictionary({}), ({
                'legend': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, ({})],
                    () => [false],
                )),
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'figure': return createElement("figure", pm.wrapRawDictionary({}), ({
                'caption': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, ({
                        'content': pl.cc($, ($) => map_Flow__content($)),
                        'position': pl.cc($, ($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'top': return createElement("top", pm.wrapRawDictionary({}), ({}))
                                case 'botom': return createElement("botom", pm.wrapRawDictionary({}), ({}))
                                default: return pl.au($[1])
                            }
                        })),
                    })],
                    () => [false],
                )),
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'footer': return createElement("footer", pm.wrapRawDictionary({}), ({}))
            case 'form': return createElement("form", pm.wrapRawDictionary({}), ({}))
            case 'header': return createElement("header", pm.wrapRawDictionary({}), ({}))
            case 'hr': return createElement("hr", pm.wrapRawDictionary({}), ({}))
            case 'ins': return createElement("ins", pm.wrapRawDictionary({}), ({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'main': return createElement("main", pm.wrapRawDictionary({}), map_Flow__content($))
            case 'map': return createElement("map", pm.wrapRawDictionary({}), ({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'menu': return createElement("menu", pm.wrapRawDictionary({}), $.map(($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'li': return createElement("li", pm.wrapRawDictionary({}), map_Flow__content($))
                    case 'script supporting': return createElement("script supporting", pm.wrapRawDictionary({}), map_Script__supporting__content($))
                    default: return pl.au($[1])
                }
            })))
            case 'object': return createElement("object", pm.wrapRawDictionary({}), ({
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'ol': return createElement("ol", pm.wrapRawDictionary({}), ({
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
                            case '1': return createElement("1", pm.wrapRawDictionary({}), ({}))
                            case 'a': return createElement("a", pm.wrapRawDictionary({}), ({}))
                            case 'A': return createElement("A", pm.wrapRawDictionary({}), ({}))
                            case 'i': return createElement("i", pm.wrapRawDictionary({}), ({}))
                            case 'I': return createElement("I", pm.wrapRawDictionary({}), ({}))
                            default: return pl.au($[1])
                        }
                    })],
                    () => [false],
                )),
                'content': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'li': return createElement("li", pm.wrapRawDictionary({}), ({
                            'value': pl.cc($, ($) => $),
                            'content': pl.cc($, ($) => map_Flow__content($)),
                        }))
                        case 'script supporting': return createElement("script supporting", pm.wrapRawDictionary({}), map_Script__supporting__content($))
                        default: return pl.au($[1])
                    }
                }))),
            }))
            case 'p': return createElement("p", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'pre': return createElement("pre", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'search': return createElement("search", pm.wrapRawDictionary({}), map_Flow__content($))
            case 'slot': return createElement("slot", pm.wrapRawDictionary({}), ({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Flow__content($)),
            }))
            case 'table': return createElement("table", pm.wrapRawDictionary({}), ({
                'caption': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, map_Flow__content($)],
                    () => [false],
                )),
                'colgroups': pl.cc($, ($) => $.map(($) => ({}))),
            }))
            case 'ul': return createElement("ul", pm.wrapRawDictionary({}), $.map(($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'li': return createElement("li", pm.wrapRawDictionary({}), map_Flow__content($))
                    case 'script supporting': return createElement("script supporting", pm.wrapRawDictionary({}), map_Script__supporting__content($))
                    default: return pl.au($[1])
                }
            })))
            case 'heading': return createElement("heading", pm.wrapRawDictionary({}), map_Heading__content($))
            case 'sectioning': return createElement("sectioning", pm.wrapRawDictionary({}), map_Sectioning__content($))
            default: return pl.au($[1])
        }
    }))
}
function map_Heading__content($: g_in.T.X): g_out.T.X {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'h1': return createElement("h1", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'h2': return createElement("h2", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'h3': return createElement("h3", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'h4': return createElement("h4", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'h5': return createElement("h5", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'h6': return createElement("h6", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'hgroup': return createElement("hgroup", pm.wrapRawDictionary({}), ({
                'content before': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'p': return createElement("p", pm.wrapRawDictionary({}), ({}))
                        case 'script supporting': return createElement("script supporting", pm.wrapRawDictionary({}), map_Script__supporting__content($))
                        default: return pl.au($[1])
                    }
                })),
                'heading': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'h1 ': return createElement("h1 ", pm.wrapRawDictionary({}), map_Phrasing__content($))
                        case 'h2': return createElement("h2", pm.wrapRawDictionary({}), map_Phrasing__content($))
                        case 'h3': return createElement("h3", pm.wrapRawDictionary({}), map_Phrasing__content($))
                        case 'h4': return createElement("h4", pm.wrapRawDictionary({}), map_Phrasing__content($))
                        case 'h5': return createElement("h5", pm.wrapRawDictionary({}), map_Phrasing__content($))
                        case 'h6': return createElement("h6", pm.wrapRawDictionary({}), map_Phrasing__content($))
                        default: return pl.au($[1])
                    }
                })),
                'content after': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'p': return createElement("p", pm.wrapRawDictionary({}), ({}))
                        case 'script supporting': return createElement("script supporting", pm.wrapRawDictionary({}), map_Script__supporting__content($))
                        default: return pl.au($[1])
                    }
                })),
            }))
            default: return pl.au($[1])
        }
    })
}
function map_Script__supporting__content($: g_in.T.X): g_out.T.X {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'script': return createElement("script", pm.wrapRawDictionary({}), ({}))
            case 'template': return createElement("template", pm.wrapRawDictionary({}), map_Template($))
            default: return pl.au($[1])
        }
    })
}
function map_Template($: g_in.T.X): g_out.T.X {
    return map_Flow__content($)
}
function map_Phrasing($: g_in.T.X): g_out.T.X {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'id': return createElement("id", pm.wrapRawDictionary({}), ({
                'id': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            }))
            case 'class': return createElement("class", pm.wrapRawDictionary({}), ({
                'class': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            }))
            case 'text': return createElement("text", pm.wrapRawDictionary({}), $)
            case 'link': return createElement("link", pm.wrapRawDictionary({}), ({}))
            case 'meta': return createElement("meta", pm.wrapRawDictionary({}), ({}))
            case 'noscript': return createElement("noscript", pm.wrapRawDictionary({}), ({}))
            case 'object': return createElement("object", pm.wrapRawDictionary({}), ({
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'script supporting': return createElement("script supporting", pm.wrapRawDictionary({}), map_Script__supporting__content($))
            case 'a': return createElement("a", pm.wrapRawDictionary({}), ({}))
            case 'button': return createElement("button", pm.wrapRawDictionary({}), ({}))
            case 'input': return createElement("input", pm.wrapRawDictionary({}), ({}))
            case 'label': return createElement("label", pm.wrapRawDictionary({}), ({}))
            case 'select': return createElement("select", pm.wrapRawDictionary({}), ({
                'content': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'option': return createElement("option", pm.wrapRawDictionary({}), ({}))
                        case 'optgroup': return createElement("optgroup", pm.wrapRawDictionary({}), ({
                            'options': pl.cc($, ($) => $.map(($) => ({}))),
                        }))
                        case 'script supporting': return createElement("script supporting", pm.wrapRawDictionary({}), map_Script__supporting__content($))
                        default: return pl.au($[1])
                    }
                }))),
            }))
            case 'textarea': return createElement("textarea", pm.wrapRawDictionary({}), ({
                'content': pl.cc($, ($) => $),
            }))
            case 'abbr': return createElement("abbr", pm.wrapRawDictionary({}), ({
                'title': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'area': return createElement("area", pm.wrapRawDictionary({}), ({}))
            case 'b': return createElement("b", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'bdi': return createElement("bdi", pm.wrapRawDictionary({}), ({
                'dir': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'bdo': return createElement("bdo", pm.wrapRawDictionary({}), ({
                'dir': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'br': return createElement("br", pm.wrapRawDictionary({}), ({}))
            case 'cite': return createElement("cite", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'code': return createElement("code", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'data': return createElement("data", pm.wrapRawDictionary({}), ({
                'value': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'datalist': return createElement("datalist", pm.wrapRawDictionary({}), pl.cc($, ($) => {
                switch ($[0]) {
                    case 'phrasing': return createElement("phrasing", pm.wrapRawDictionary({}), map_Phrasing__content($))
                    case 'options': return createElement("options", pm.wrapRawDictionary({}), $.map(($) => pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'option': return createElement("option", pm.wrapRawDictionary({}), ({}))
                            case 'script supporting': return createElement("script supporting", pm.wrapRawDictionary({}), map_Script__supporting__content($))
                            default: return pl.au($[1])
                        }
                    })))
                    default: return pl.au($[1])
                }
            }))
            case 'del': return createElement("del", pm.wrapRawDictionary({}), ({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'dfn': return createElement("dfn", pm.wrapRawDictionary({}), ({
                'title': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'em': return createElement("em", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'i': return createElement("i", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'ins': return createElement("ins", pm.wrapRawDictionary({}), ({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'kbd': return createElement("kbd", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'map': return createElement("map", pm.wrapRawDictionary({}), ({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'mark': return createElement("mark", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'meter': return createElement("meter", pm.wrapRawDictionary({}), ({}))
            case 'output': return createElement("output", pm.wrapRawDictionary({}), ({
                'for': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )),
                'form': pl.cc($, ($) => $),
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'progress': return createElement("progress", pm.wrapRawDictionary({}), ({
                'value': pl.cc($, ($) => $),
                'max': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'q': return createElement("q", pm.wrapRawDictionary({}), ({
                'cite': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'ruby': return createElement("ruby", pm.wrapRawDictionary({}), ({}))
            case 's': return createElement("s", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'samp': return createElement("samp", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'slot': return createElement("slot", pm.wrapRawDictionary({}), ({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            }))
            case 'small': return createElement("small", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'span': return createElement("span", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'strong': return createElement("strong", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'sub': return createElement("sub", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'sup': return createElement("sup", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'time': return createElement("time", pm.wrapRawDictionary({}), pl.cc($, ($) => {
                switch ($[0]) {
                    case 'datetime': return createElement("datetime", pm.wrapRawDictionary({}), ({
                        'value': pl.cc($, ($) => $),
                        'content': pl.cc($, ($) => map_Phrasing__content($)),
                    }))
                    case 'text': return createElement("text", pm.wrapRawDictionary({}), $)
                    default: return pl.au($[1])
                }
            }))
            case 'u': return createElement("u", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'var': return createElement("var", pm.wrapRawDictionary({}), map_Phrasing__content($))
            case 'wbr': return createElement("wbr", pm.wrapRawDictionary({}), ({}))
            case 'embedded': return createElement("embedded", pm.wrapRawDictionary({}), map_Embedded($))
            default: return pl.au($[1])
        }
    })
}
function map_Phrasing__content($: g_in.T.X): g_out.T.X {
    return $.map(($) => map_Phrasing($))
}
function map_Sectioning__content($: g_in.T.X): g_out.T.X {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'article': return createElement("article", pm.wrapRawDictionary({}), map_Flow__content($))
            case 'aside': return createElement("aside", pm.wrapRawDictionary({}), map_Flow__content($))
            case 'nav': return createElement("nav", pm.wrapRawDictionary({}), map_Flow__content($))
            case 'section': return createElement("section", pm.wrapRawDictionary({}), map_Flow__content($))
            default: return pl.au($[1])
        }
    })
}