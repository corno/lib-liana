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
            case 'audio': return pl.ss($, ($) => nonTextElement("audio", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'embed': return pl.ss($, ($) => nonTextElement("embed", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'iframe': return pl.ss($, ($) => nonTextElement("iframe", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'img': return pl.ss($, ($) => nonTextElement("img", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'object': return pl.ss($, ($) => nonTextElement("object", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'content': pl.cc($, ($) => map_Embedded__content($)),
            })*/
            case 'video': return pl.ss($, ($) => nonTextElement("video", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'canvas': return pl.ss($, ($) => nonTextElement("canvas", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'math': return pl.ss($, ($) => nonTextElement("math", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'picture': return pl.ss($, ($) => nonTextElement("picture", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'svg': return pl.ss($, ($) => nonTextElement("svg", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
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
            case 'id': return pl.ss($, ($) => nonTextElement("id", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'id': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            })*/
            case 'class': return pl.ss($, ($) => nonTextElement("class", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'class': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            })*/
            case 'phrase': return pl.ss($, ($) => nonTextElement("phrase", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Script__supporting__content($)*/
            case 'embedded': return pl.ss($, ($) => nonTextElement("embedded", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Embedded($)*/
            case 'details': return pl.ss($, ($) => nonTextElement("details", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'summary': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'phrasing': return pl.ss($, ($) => nonTextElement("phrasing", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Phrasing__content($)*/
                        case 'heading': return pl.ss($, ($) => nonTextElement("heading", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Heading__content($)*/
                        default: return pl.au($[1])
                    }
                }))),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'address': return pl.ss($, ($) => nonTextElement("address", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'blockquote': return pl.ss($, ($) => nonTextElement("blockquote", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'cite': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'del': return pl.ss($, ($) => nonTextElement("del", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'dialog': return pl.ss($, ($) => nonTextElement("dialog", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'open': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'div': return pl.ss($, ($) => nonTextElement("div", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Flow__content($)*/
            case 'dl': return pl.ss($, ($) => nonTextElement("dl", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*pl.cc($, ($) => {
                switch ($[0]) {
                    case 'divs': return pl.ss($, ($) => nonTextElement("divs", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*({})*/
                    case 'dts': return pl.ss($, ($) => nonTextElement("dts", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*({})*/
                    default: return pl.au($[1])
                }
            })*/
            case 'fieldset': return pl.ss($, ($) => nonTextElement("fieldset", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'legend': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, ({})],
                    () => [false],
                )),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'figure': return pl.ss($, ($) => nonTextElement("figure", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'caption': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, ({
                        'content': pl.cc($, ($) => map_Flow__content($)),
                        'position': pl.cc($, ($) => pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'top': return pl.ss($, ($) => nonTextElement("top", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                                /*({})*/
                                case 'botom': return pl.ss($, ($) => nonTextElement("botom", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                                /*({})*/
                                default: return pl.au($[1])
                            }
                        })),
                    })],
                    () => [false],
                )),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'footer': return pl.ss($, ($) => nonTextElement("footer", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'form': return pl.ss($, ($) => nonTextElement("form", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'header': return pl.ss($, ($) => nonTextElement("header", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'hr': return pl.ss($, ($) => nonTextElement("hr", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'ins': return pl.ss($, ($) => nonTextElement("ins", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'main': return pl.ss($, ($) => nonTextElement("main", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Flow__content($)*/
            case 'map': return pl.ss($, ($) => nonTextElement("map", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'menu': return pl.ss($, ($) => nonTextElement("menu", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*$.map(($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'li': return pl.ss($, ($) => nonTextElement("li", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*map_Flow__content($)*/
                    case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*map_Script__supporting__content($)*/
                    default: return pl.au($[1])
                }
            }))*/
            case 'object': return pl.ss($, ($) => nonTextElement("object", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'ol': return pl.ss($, ($) => nonTextElement("ol", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
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
                            case '1': return pl.ss($, ($) => nonTextElement("1", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                            /*({})*/
                            case 'a': return pl.ss($, ($) => nonTextElement("a", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                            /*({})*/
                            case 'A': return pl.ss($, ($) => nonTextElement("A", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                            /*({})*/
                            case 'i': return pl.ss($, ($) => nonTextElement("i", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                            /*({})*/
                            case 'I': return pl.ss($, ($) => nonTextElement("I", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                            /*({})*/
                            default: return pl.au($[1])
                        }
                    })],
                    () => [false],
                )),
                'content': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'li': return pl.ss($, ($) => nonTextElement("li", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*({
                            'value': pl.cc($, ($) => $),
                            'content': pl.cc($, ($) => map_Flow__content($)),
                        })*/
                        case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Script__supporting__content($)*/
                        default: return pl.au($[1])
                    }
                }))),
            })*/
            case 'p': return pl.ss($, ($) => nonTextElement("p", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'pre': return pl.ss($, ($) => nonTextElement("pre", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'search': return pl.ss($, ($) => nonTextElement("search", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Flow__content($)*/
            case 'slot': return pl.ss($, ($) => nonTextElement("slot", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Flow__content($)),
            })*/
            case 'table': return pl.ss($, ($) => nonTextElement("table", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'caption': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, map_Flow__content($)],
                    () => [false],
                )),
                'colgroups': pl.cc($, ($) => $.map(($) => ({}))),
            })*/
            case 'ul': return pl.ss($, ($) => nonTextElement("ul", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*$.map(($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'li': return pl.ss($, ($) => nonTextElement("li", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*map_Flow__content($)*/
                    case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*map_Script__supporting__content($)*/
                    default: return pl.au($[1])
                }
            }))*/
            case 'heading': return pl.ss($, ($) => nonTextElement("heading", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Heading__content($)*/
            case 'sectioning': return pl.ss($, ($) => nonTextElement("sectioning", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Sectioning__content($)*/
            default: return pl.au($[1])
        }
    }))
}
function map_Heading__content($: g_in.T.Heading__content): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'h1': return pl.ss($, ($) => nonTextElement("h1", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'h2': return pl.ss($, ($) => nonTextElement("h2", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'h3': return pl.ss($, ($) => nonTextElement("h3", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'h4': return pl.ss($, ($) => nonTextElement("h4", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'h5': return pl.ss($, ($) => nonTextElement("h5", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'h6': return pl.ss($, ($) => nonTextElement("h6", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'hgroup': return pl.ss($, ($) => nonTextElement("hgroup", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'content before': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'p': return pl.ss($, ($) => nonTextElement("p", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*({})*/
                        case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Script__supporting__content($)*/
                        default: return pl.au($[1])
                    }
                })),
                'heading': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'h1 ': return pl.ss($, ($) => nonTextElement("h1 ", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Phrasing__content($)*/
                        case 'h2': return pl.ss($, ($) => nonTextElement("h2", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Phrasing__content($)*/
                        case 'h3': return pl.ss($, ($) => nonTextElement("h3", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Phrasing__content($)*/
                        case 'h4': return pl.ss($, ($) => nonTextElement("h4", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Phrasing__content($)*/
                        case 'h5': return pl.ss($, ($) => nonTextElement("h5", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Phrasing__content($)*/
                        case 'h6': return pl.ss($, ($) => nonTextElement("h6", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Phrasing__content($)*/
                        default: return pl.au($[1])
                    }
                })),
                'content after': pl.cc($, ($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'p': return pl.ss($, ($) => nonTextElement("p", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*({})*/
                        case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Script__supporting__content($)*/
                        default: return pl.au($[1])
                    }
                })),
            })*/
            default: return pl.au($[1])
        }
    })
}
function map_Script__supporting__content($: g_in.T.Script__supporting__content): g_out.T.Element {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'script': return pl.ss($, ($) => nonTextElement("script", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'template': return pl.ss($, ($) => nonTextElement("template", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Template($)*/
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
            case 'id': return pl.ss($, ($) => nonTextElement("id", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'id': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            })*/
            case 'class': return pl.ss($, ($) => nonTextElement("class", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'class': pl.cc($, ($) => $),
                'child': pl.cc($, ($) => map_Phrasing($)),
            })*/
            case 'text': return pl.ss($, ($) => nonTextElement("text", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*$*/
            case 'link': return pl.ss($, ($) => nonTextElement("link", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'meta': return pl.ss($, ($) => nonTextElement("meta", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'noscript': return pl.ss($, ($) => nonTextElement("noscript", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'object': return pl.ss($, ($) => nonTextElement("object", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Script__supporting__content($)*/
            case 'a': return pl.ss($, ($) => nonTextElement("a", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'button': return pl.ss($, ($) => nonTextElement("button", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'input': return pl.ss($, ($) => nonTextElement("input", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'label': return pl.ss($, ($) => nonTextElement("label", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'select': return pl.ss($, ($) => nonTextElement("select", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'content': pl.cc($, ($) => $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'option': return pl.ss($, ($) => nonTextElement("option", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*({})*/
                        case 'optgroup': return pl.ss($, ($) => nonTextElement("optgroup", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*({
                            'options': pl.cc($, ($) => $.map(($) => ({}))),
                        })*/
                        case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                        /*map_Script__supporting__content($)*/
                        default: return pl.au($[1])
                    }
                }))),
            })*/
            case 'textarea': return pl.ss($, ($) => nonTextElement("textarea", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'content': pl.cc($, ($) => $),
            })*/
            case 'abbr': return pl.ss($, ($) => nonTextElement("abbr", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'title': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'area': return pl.ss($, ($) => nonTextElement("area", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'b': return pl.ss($, ($) => nonTextElement("b", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'bdi': return pl.ss($, ($) => nonTextElement("bdi", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'dir': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'bdo': return pl.ss($, ($) => nonTextElement("bdo", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'dir': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'br': return pl.ss($, ($) => nonTextElement("br", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'cite': return pl.ss($, ($) => nonTextElement("cite", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'code': return pl.ss($, ($) => nonTextElement("code", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'data': return pl.ss($, ($) => nonTextElement("data", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'value': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'datalist': return pl.ss($, ($) => nonTextElement("datalist", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*pl.cc($, ($) => {
                switch ($[0]) {
                    case 'phrasing': return pl.ss($, ($) => nonTextElement("phrasing", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*map_Phrasing__content($)*/
                    case 'options': return pl.ss($, ($) => nonTextElement("options", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*$.map(($) => pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'option': return pl.ss($, ($) => nonTextElement("option", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                            /*({})*/
                            case 'script supporting': return pl.ss($, ($) => nonTextElement("script supporting", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                            /*map_Script__supporting__content($)*/
                            default: return pl.au($[1])
                        }
                    }))*/
                    default: return pl.au($[1])
                }
            })*/
            case 'del': return pl.ss($, ($) => nonTextElement("del", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'dfn': return pl.ss($, ($) => nonTextElement("dfn", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'title': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'em': return pl.ss($, ($) => nonTextElement("em", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'i': return pl.ss($, ($) => nonTextElement("i", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'ins': return pl.ss($, ($) => nonTextElement("ins", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'edit': pl.cc($, ($) => map_Edit($)),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'kbd': return pl.ss($, ($) => nonTextElement("kbd", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'map': return pl.ss($, ($) => nonTextElement("map", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'mark': return pl.ss($, ($) => nonTextElement("mark", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'meter': return pl.ss($, ($) => nonTextElement("meter", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'output': return pl.ss($, ($) => nonTextElement("output", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'for': pl.cc($, ($) => pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )),
                'form': pl.cc($, ($) => $),
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'progress': return pl.ss($, ($) => nonTextElement("progress", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'value': pl.cc($, ($) => $),
                'max': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'q': return pl.ss($, ($) => nonTextElement("q", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'cite': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'ruby': return pl.ss($, ($) => nonTextElement("ruby", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 's': return pl.ss($, ($) => nonTextElement("s", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'samp': return pl.ss($, ($) => nonTextElement("samp", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'slot': return pl.ss($, ($) => nonTextElement("slot", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({
                'name': pl.cc($, ($) => $),
                'content': pl.cc($, ($) => map_Phrasing__content($)),
            })*/
            case 'small': return pl.ss($, ($) => nonTextElement("small", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'span': return pl.ss($, ($) => nonTextElement("span", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'strong': return pl.ss($, ($) => nonTextElement("strong", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'sub': return pl.ss($, ($) => nonTextElement("sub", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'sup': return pl.ss($, ($) => nonTextElement("sup", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'time': return pl.ss($, ($) => nonTextElement("time", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*pl.cc($, ($) => {
                switch ($[0]) {
                    case 'datetime': return pl.ss($, ($) => nonTextElement("datetime", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*({
                        'value': pl.cc($, ($) => $),
                        'content': pl.cc($, ($) => map_Phrasing__content($)),
                    })*/
                    case 'text': return pl.ss($, ($) => nonTextElement("text", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
                    /*$*/
                    default: return pl.au($[1])
                }
            })*/
            case 'u': return pl.ss($, ($) => nonTextElement("u", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'var': return pl.ss($, ($) => nonTextElement("var", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Phrasing__content($)*/
            case 'wbr': return pl.ss($, ($) => nonTextElement("wbr", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*({})*/
            case 'embedded': return pl.ss($, ($) => nonTextElement("embedded", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Embedded($)*/
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
            case 'article': return pl.ss($, ($) => nonTextElement("article", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Flow__content($)*/
            case 'aside': return pl.ss($, ($) => nonTextElement("aside", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Flow__content($)*/
            case 'nav': return pl.ss($, ($) => nonTextElement("nav", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Flow__content($)*/
            case 'section': return pl.ss($, ($) => nonTextElement("section", pm.wrapRawDictionary({}), pm.wrapRawArray([])))
            /*map_Flow__content($)*/
            default: return pl.au($[1])
        }
    })
}