import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-map'

import * as g_in from ".."
import * as g_out from ".."

function map_Document($: g_in.T.Document): g_out.T.Document {
    return pl.cc($, ($) => {
        const temp_head = pl.cc($, ($) => {
            const temp_title = $
            return {
                'title': temp_title,
            }
        })
        const temp_body = map_Flow__content($)
        return {
            'head': temp_head,
            'body': temp_body,
        }
    })
}
function map_Edit($: g_in.T.Edit): g_out.T.Edit {
    return pl.cc($, ($) => {
        const temp_cite = pl.optional(
            $,
            ($) => [true, $],
            () => [false],
        )
        const temp_datetime = pl.optional(
            $,
            ($) => [true, $],
            () => [false],
        )
        return {
            'cite': temp_cite,
            'datetime': temp_datetime,
        }
    })
}
function map_Embedded($: g_in.T.Embedded): g_out.T.Embedded {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'audio': return ['audio', pl.cc($, ($) => {
                return {}
            })]
            case 'embed': return ['embed', pl.cc($, ($) => {
                return {}
            })]
            case 'iframe': return ['iframe', pl.cc($, ($) => {
                return {}
            })]
            case 'img': return ['img', pl.cc($, ($) => {
                return {}
            })]
            case 'object': return ['object', pl.cc($, ($) => {
                const temp_content = map_Embedded__content($)
                return {
                    'content': temp_content,
                }
            })]
            case 'video': return ['video', pl.cc($, ($) => {
                return {}
            })]
            case 'canvas': return ['canvas', pl.cc($, ($) => {
                return {}
            })]
            case 'math': return ['math', pl.cc($, ($) => {
                return {}
            })]
            case 'picture': return ['picture', pl.cc($, ($) => {
                return {}
            })]
            case 'svg': return ['svg', pl.cc($, ($) => {
                return {}
            })]
            default: return pl.au($[1])
        }
    })
}
function map_Embedded__content($: g_in.T.Embedded__content): g_out.T.Embedded__content {
    return $.map(($) => map_Embedded($))
}
function map_Flow__content($: g_in.T.Flow__content): g_out.T.Flow__content {
    return $.map(($) => pl.cc($, ($) => {
        switch ($[0]) {
            case 'id': return ['id', pl.cc($, ($) => {
                const temp_id = $
                const temp_child = map_Phrasing($)
                return {
                    'id': temp_id,
                    'child': temp_child,
                }
            })]
            case 'class': return ['class', pl.cc($, ($) => {
                const temp__lclass = $
                const temp_child = map_Phrasing($)
                return {
                    'class': temp__lclass,
                    'child': temp_child,
                }
            })]
            case 'phrase': return ['phrase', map_Phrasing__content($)]
            case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
            case 'embedded': return ['embedded', map_Embedded($)]
            case 'details': return ['details', pl.cc($, ($) => {
                const temp_summary = $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'phrasing': return ['phrasing', map_Phrasing__content($)]
                        case 'heading': return ['heading', map_Heading__content($)]
                        default: return pl.au($[1])
                    }
                }))
                const temp_content = map_Flow__content($)
                return {
                    'summary': temp_summary,
                    'content': temp_content,
                }
            })]
            case 'address': return ['address', pl.cc($, ($) => {
                return {}
            })]
            case 'blockquote': return ['blockquote', pl.cc($, ($) => {
                const temp_cite = $
                const temp_content = map_Flow__content($)
                return {
                    'cite': temp_cite,
                    'content': temp_content,
                }
            })]
            case 'del': return ['del', pl.cc($, ($) => {
                const temp_edit = map_Edit($)
                const temp_content = map_Flow__content($)
                return {
                    'edit': temp_edit,
                    'content': temp_content,
                }
            })]
            case 'dialog': return ['dialog', pl.cc($, ($) => {
                const temp_open = pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )
                const temp_content = map_Flow__content($)
                return {
                    'open': temp_open,
                    'content': temp_content,
                }
            })]
            case 'div': return ['div', map_Flow__content($)]
            case 'dl': return ['dl', pl.cc($, ($) => {
                switch ($[0]) {
                    case 'divs': return ['divs', pl.cc($, ($) => {
                        return {}
                    })]
                    case 'dts': return ['dts', pl.cc($, ($) => {
                        return {}
                    })]
                    default: return pl.au($[1])
                }
            })]
            case 'fieldset': return ['fieldset', pl.cc($, ($) => {
                const temp_legend = pl.optional(
                    $,
                    ($) => [true, pl.cc($, ($) => {
                        return {}
                    })],
                    () => [false],
                )
                const temp_content = map_Flow__content($)
                return {
                    'legend': temp_legend,
                    'content': temp_content,
                }
            })]
            case 'figure': return ['figure', pl.cc($, ($) => {
                const temp_caption = pl.optional(
                    $,
                    ($) => [true, pl.cc($, ($) => {
                        const temp_content = map_Flow__content($)
                        const temp_position = pl.cc($, ($) => {
                            switch ($[0]) {
                                case 'top': return ['top', pl.cc($, ($) => {
                                    return {}
                                })]
                                case 'botom': return ['botom', pl.cc($, ($) => {
                                    return {}
                                })]
                                default: return pl.au($[1])
                            }
                        })
                        return {
                            'content': temp_content,
                            'position': temp_position,
                        }
                    })],
                    () => [false],
                )
                const temp_content = map_Flow__content($)
                return {
                    'caption': temp_caption,
                    'content': temp_content,
                }
            })]
            case 'footer': return ['footer', pl.cc($, ($) => {
                return {}
            })]
            case 'form': return ['form', pl.cc($, ($) => {
                return {}
            })]
            case 'header': return ['header', pl.cc($, ($) => {
                return {}
            })]
            case 'hr': return ['hr', pl.cc($, ($) => {
                return {}
            })]
            case 'ins': return ['ins', pl.cc($, ($) => {
                const temp_edit = map_Edit($)
                const temp_content = map_Flow__content($)
                return {
                    'edit': temp_edit,
                    'content': temp_content,
                }
            })]
            case 'main': return ['main', map_Flow__content($)]
            case 'map': return ['map', pl.cc($, ($) => {
                const temp_name = $
                const temp_content = map_Flow__content($)
                return {
                    'name': temp_name,
                    'content': temp_content,
                }
            })]
            case 'menu': return ['menu', $.map(($) => pl.cc($, ($) => {
                switch ($[0]) {
                    case 'li': return ['li', map_Flow__content($)]
                    case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                    default: return pl.au($[1])
                }
            }))]
            case 'object': return ['object', pl.cc($, ($) => {
                const temp_content = map_Flow__content($)
                return {
                    'content': temp_content,
                }
            })]
            case 'ol': return ['ol', pl.cc($, ($) => {
                const temp_reversed = pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )
                const temp_start = pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )
                const temp__ltype = pl.optional(
                    $,
                    ($) => [true, pl.cc($, ($) => {
                        switch ($[0]) {
                            case '1': return ['1', pl.cc($, ($) => {
                                return {}
                            })]
                            case 'a': return ['a', pl.cc($, ($) => {
                                return {}
                            })]
                            case 'A': return ['A', pl.cc($, ($) => {
                                return {}
                            })]
                            case 'i': return ['i', pl.cc($, ($) => {
                                return {}
                            })]
                            case 'I': return ['I', pl.cc($, ($) => {
                                return {}
                            })]
                            default: return pl.au($[1])
                        }
                    })],
                    () => [false],
                )
                const temp_content = $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'li': return ['li', pl.cc($, ($) => {
                            const temp_value = $
                            const temp_content = map_Flow__content($)
                            return {
                                'value': temp_value,
                                'content': temp_content,
                            }
                        })]
                        case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                        default: return pl.au($[1])
                    }
                }))
                return {
                    'reversed': temp_reversed,
                    'start': temp_start,
                    'type': temp__ltype,
                    'content': temp_content,
                }
            })]
            case 'p': return ['p', map_Phrasing__content($)]
            case 'pre': return ['pre', map_Phrasing__content($)]
            case 'search': return ['search', map_Flow__content($)]
            case 'slot': return ['slot', pl.cc($, ($) => {
                const temp_name = $
                const temp_content = map_Flow__content($)
                return {
                    'name': temp_name,
                    'content': temp_content,
                }
            })]
            case 'table': return ['table', pl.cc($, ($) => {
                const temp_caption = pl.optional(
                    $,
                    ($) => [true, map_Flow__content($)],
                    () => [false],
                )
                const temp_colgroups = $.map(($) => pl.cc($, ($) => {
                    return {}
                }))
                return {
                    'caption': temp_caption,
                    'colgroups': temp_colgroups,
                }
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
function map_Heading__content($: g_in.T.Heading__content): g_out.T.Heading__content {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'h1': return ['h1', map_Phrasing__content($)]
            case 'h2': return ['h2', map_Phrasing__content($)]
            case 'h3': return ['h3', map_Phrasing__content($)]
            case 'h4': return ['h4', map_Phrasing__content($)]
            case 'h5': return ['h5', map_Phrasing__content($)]
            case 'h6': return ['h6', map_Phrasing__content($)]
            case 'hgroup': return ['hgroup', pl.cc($, ($) => {
                const temp_content__before = pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'p': return ['p', pl.cc($, ($) => {
                            return {}
                        })]
                        case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                        default: return pl.au($[1])
                    }
                })
                const temp_heading = pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'h1 ': return ['h1 ', map_Phrasing__content($)]
                        case 'h2': return ['h2', map_Phrasing__content($)]
                        case 'h3': return ['h3', map_Phrasing__content($)]
                        case 'h4': return ['h4', map_Phrasing__content($)]
                        case 'h5': return ['h5', map_Phrasing__content($)]
                        case 'h6': return ['h6', map_Phrasing__content($)]
                        default: return pl.au($[1])
                    }
                })
                const temp_content__after = pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'p': return ['p', pl.cc($, ($) => {
                            return {}
                        })]
                        case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                        default: return pl.au($[1])
                    }
                })
                return {
                    'content before': temp_content__before,
                    'heading': temp_heading,
                    'content after': temp_content__after,
                }
            })]
            default: return pl.au($[1])
        }
    })
}
function map_Script__supporting__content($: g_in.T.Script__supporting__content): g_out.T.Script__supporting__content {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'script': return ['script', pl.cc($, ($) => {
                return {}
            })]
            case 'template': return ['template', map_Template($)]
            default: return pl.au($[1])
        }
    })
}
function map_Template($: g_in.T.Template): g_out.T.Template {
    return map_Flow__content($)
}
function map_Phrasing($: g_in.T.Phrasing): g_out.T.Phrasing {
    return pl.cc($, ($) => {
        switch ($[0]) {
            case 'id': return ['id', pl.cc($, ($) => {
                const temp_id = $
                const temp_child = map_Phrasing($)
                return {
                    'id': temp_id,
                    'child': temp_child,
                }
            })]
            case 'class': return ['class', pl.cc($, ($) => {
                const temp__lclass = $
                const temp_child = map_Phrasing($)
                return {
                    'class': temp__lclass,
                    'child': temp_child,
                }
            })]
            case 'text': return ['text', $]
            case 'link': return ['link', pl.cc($, ($) => {
                return {}
            })]
            case 'meta': return ['meta', pl.cc($, ($) => {
                return {}
            })]
            case 'noscript': return ['noscript', pl.cc($, ($) => {
                return {}
            })]
            case 'object': return ['object', pl.cc($, ($) => {
                const temp_content = map_Phrasing__content($)
                return {
                    'content': temp_content,
                }
            })]
            case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
            case 'a': return ['a', pl.cc($, ($) => {
                return {}
            })]
            case 'button': return ['button', pl.cc($, ($) => {
                return {}
            })]
            case 'input': return ['input', pl.cc($, ($) => {
                return {}
            })]
            case 'label': return ['label', pl.cc($, ($) => {
                return {}
            })]
            case 'select': return ['select', pl.cc($, ($) => {
                const temp_content = $.map(($) => pl.cc($, ($) => {
                    switch ($[0]) {
                        case 'option': return ['option', pl.cc($, ($) => {
                            return {}
                        })]
                        case 'optgroup': return ['optgroup', pl.cc($, ($) => {
                            const temp_options = $.map(($) => pl.cc($, ($) => {
                                return {}
                            }))
                            return {
                                'options': temp_options,
                            }
                        })]
                        case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                        default: return pl.au($[1])
                    }
                }))
                return {
                    'content': temp_content,
                }
            })]
            case 'textarea': return ['textarea', pl.cc($, ($) => {
                const temp_content = $
                return {
                    'content': temp_content,
                }
            })]
            case 'abbr': return ['abbr', pl.cc($, ($) => {
                const temp_title = $
                const temp_content = map_Phrasing__content($)
                return {
                    'title': temp_title,
                    'content': temp_content,
                }
            })]
            case 'area': return ['area', pl.cc($, ($) => {
                return {}
            })]
            case 'b': return ['b', map_Phrasing__content($)]
            case 'bdi': return ['bdi', pl.cc($, ($) => {
                const temp_dir = $
                const temp_content = map_Phrasing__content($)
                return {
                    'dir': temp_dir,
                    'content': temp_content,
                }
            })]
            case 'bdo': return ['bdo', pl.cc($, ($) => {
                const temp_dir = $
                const temp_content = map_Phrasing__content($)
                return {
                    'dir': temp_dir,
                    'content': temp_content,
                }
            })]
            case 'br': return ['br', pl.cc($, ($) => {
                return {}
            })]
            case 'cite': return ['cite', map_Phrasing__content($)]
            case 'code': return ['code', map_Phrasing__content($)]
            case 'data': return ['data', pl.cc($, ($) => {
                const temp_value = $
                const temp_content = map_Phrasing__content($)
                return {
                    'value': temp_value,
                    'content': temp_content,
                }
            })]
            case 'datalist': return ['datalist', pl.cc($, ($) => {
                switch ($[0]) {
                    case 'phrasing': return ['phrasing', map_Phrasing__content($)]
                    case 'options': return ['options', $.map(($) => pl.cc($, ($) => {
                        switch ($[0]) {
                            case 'option': return ['option', pl.cc($, ($) => {
                                return {}
                            })]
                            case 'script supporting': return ['script supporting', map_Script__supporting__content($)]
                            default: return pl.au($[1])
                        }
                    }))]
                    default: return pl.au($[1])
                }
            })]
            case 'del': return ['del', pl.cc($, ($) => {
                const temp_edit = map_Edit($)
                const temp_content = map_Phrasing__content($)
                return {
                    'edit': temp_edit,
                    'content': temp_content,
                }
            })]
            case 'dfn': return ['dfn', pl.cc($, ($) => {
                const temp_title = $
                const temp_content = map_Phrasing__content($)
                return {
                    'title': temp_title,
                    'content': temp_content,
                }
            })]
            case 'em': return ['em', map_Phrasing__content($)]
            case 'i': return ['i', map_Phrasing__content($)]
            case 'ins': return ['ins', pl.cc($, ($) => {
                const temp_edit = map_Edit($)
                const temp_content = map_Phrasing__content($)
                return {
                    'edit': temp_edit,
                    'content': temp_content,
                }
            })]
            case 'kbd': return ['kbd', map_Phrasing__content($)]
            case 'map': return ['map', pl.cc($, ($) => {
                const temp_name = $
                const temp_content = map_Phrasing__content($)
                return {
                    'name': temp_name,
                    'content': temp_content,
                }
            })]
            case 'mark': return ['mark', map_Phrasing__content($)]
            case 'meter': return ['meter', pl.cc($, ($) => {
                return {}
            })]
            case 'output': return ['output', pl.cc($, ($) => {
                const temp__lfor = pl.optional(
                    $,
                    ($) => [true, $],
                    () => [false],
                )
                const temp_form = $
                const temp_name = $
                const temp_content = map_Phrasing__content($)
                return {
                    'for': temp__lfor,
                    'form': temp_form,
                    'name': temp_name,
                    'content': temp_content,
                }
            })]
            case 'progress': return ['progress', pl.cc($, ($) => {
                const temp_value = $
                const temp_max = $
                const temp_content = map_Phrasing__content($)
                return {
                    'value': temp_value,
                    'max': temp_max,
                    'content': temp_content,
                }
            })]
            case 'q': return ['q', pl.cc($, ($) => {
                const temp_cite = $
                const temp_content = map_Phrasing__content($)
                return {
                    'cite': temp_cite,
                    'content': temp_content,
                }
            })]
            case 'ruby': return ['ruby', pl.cc($, ($) => {
                return {}
            })]
            case 's': return ['s', map_Phrasing__content($)]
            case 'samp': return ['samp', map_Phrasing__content($)]
            case 'slot': return ['slot', pl.cc($, ($) => {
                const temp_name = $
                const temp_content = map_Phrasing__content($)
                return {
                    'name': temp_name,
                    'content': temp_content,
                }
            })]
            case 'small': return ['small', map_Phrasing__content($)]
            case 'span': return ['span', map_Phrasing__content($)]
            case 'strong': return ['strong', map_Phrasing__content($)]
            case 'sub': return ['sub', map_Phrasing__content($)]
            case 'sup': return ['sup', map_Phrasing__content($)]
            case 'time': return ['time', pl.cc($, ($) => {
                switch ($[0]) {
                    case 'datetime': return ['datetime', pl.cc($, ($) => {
                        const temp_value = $
                        const temp_content = map_Phrasing__content($)
                        return {
                            'value': temp_value,
                            'content': temp_content,
                        }
                    })]
                    case 'text': return ['text', $]
                    default: return pl.au($[1])
                }
            })]
            case 'u': return ['u', map_Phrasing__content($)]
            case 'var': return ['var', map_Phrasing__content($)]
            case 'wbr': return ['wbr', pl.cc($, ($) => {
                return {}
            })]
            case 'embedded': return ['embedded', map_Embedded($)]
            default: return pl.au($[1])
        }
    })
}
function map_Phrasing__content($: g_in.T.Phrasing__content): g_out.T.Phrasing__content {
    return $.map(($) => map_Phrasing($))
}
function map_Sectioning__content($: g_in.T.Sectioning__content): g_out.T.Sectioning__content {
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