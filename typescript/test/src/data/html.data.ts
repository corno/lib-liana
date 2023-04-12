import * as pd from 'pareto-core-data'

import * as g_liana from "../../../pub/dist/submodules/liana"
import {
    array,
    component,
    dictionary,
    globalType,
    group, option, optional, prop, r,
    taggedUnion,
    terminal
} from "../../../pub/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({}),
    'terminal types': d({
        "Text that is not inter-element whitespace": null,
        "tbd": null,
    }),
    'global types': d({
        /*
        Elements to do:
        summary (details)

        dl:
        dd
        dt

        legend (fieldset)

        li (list/menu)

        media:
        track

        meta:
        style

        source (picture/mediaelement)

        ruby:
        rp
        rt

        select:
        optgroup
        option

        table:
        caption
        col
        colgroup
        tbody
        td
        tfoot
        th
        thead
        tr
        */
        "Document": globalType({}, group({
            "head": prop(group({
                "title": prop(terminal("Text that is not inter-element whitespace"))
            })),
            "body": prop(component("Flow content", {}))
        })),
        "Edit": globalType({}, group({
            "cite": prop(optional(terminal("tbd"))),
            "datetime": prop(optional(terminal("tbd"))),
        })),
        "Embedded": globalType({}, taggedUnion({
            "audio": option(group({
                /*FIXME*/
                // If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
                // If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            })),
            "embed": option(group({
                /*FIXME*/
                // src — Address of the resource
                // type — Type of embedded resource
                // width — Horizontal dimension
                // height — Vertical dimension
                // Any other attribute that has no namespace (see prose).
            })),
            "iframe": option(group({
                /*FIXME*/
                // src — Address of the resource
                // srcdoc — A document to render in the iframe
                // name — Name of content navigable
                // sandbox — Security rules for nested content
                // allow — Permissions policy to be applied to the iframe's contents
                // allowfullscreen — Whether to allow the iframe's contents to use requestFullscreen()
                // width — Horizontal dimension
                // height — Vertical dimension
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // loading — Used when determining loading deferral
            })),
            "img": option(group({
                /*FIXME*/
                // alt — Replacement text for use when images are not available
                // src — Address of the resource
                // srcset — Images to use in different situations, e.g., high-resolution displays, small monitors, etc.
                // sizes — Image sizes for different page layouts
                // crossorigin — How the element handles crossorigin requests
                // usemap — Name of image map to use
                // ismap — Whether the image is a server-side image map
                // width — Horizontal dimension
                // height — Vertical dimension
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // decoding — Decoding hint to use when processing this image for presentation
                // loading — Used when determining loading deferral
                // fetchpriority — Sets the priority for fetches initiated by the element
            })),
            "object": option(group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": prop(component("Embedded content", {}))
            })),
            "video": option(group({
                /*FIXME*/
                // src — Address of the resource
                // crossorigin — How the element handles crossorigin requests
                // poster — Poster frame to show prior to video playback
                // preload — Hints how much buffering the media resource will likely need
                // autoplay — Hint that the media resource can be started automatically when the page is loaded
                // playsinline — Encourage the user agent to display video content within the element's playback area
                // loop — Whether to loop the media resource
                // muted — Whether to mute the media resource by default
                // controls — Show user agent controls
                // width — Horizontal dimension
                // height — Vertical dimension
                //Content:
                //If the element has a src attribute: zero or more track elements, then transparent, but with no media element descendants.
                //If the element does not have a src attribute: zero or more source elements, then zero or more track elements, then transparent, but with no media element descendants.
            })),
            "canvas": option(group({
                /*FIXME*/
                // width — Horizontal dimension
                // height — Vertical dimension
                //content
                //Transparent, but with no interactive content descendants except for a elements, img elements with usemap attributes, button elements, input elements whose type attribute are in the Checkbox or Radio Button states,
                // input elements that are buttons, and select elements with a multiple attribute or a display size greater than 1.
            })),
            "math": option(group({/*FIXME*/ })),
            "picture": option(group({
                /*FIXME*/
                //Zero or more source elements, followed by one img element, optionally intermixed with script-supporting elements.
            })),
            "svg": option(group({/*FIXME*/ })),
        })),
        "Embedded content": globalType({}, array(component("Embedded", {}))),
        "Flow content": globalType({}, array(taggedUnion({
            //generic attributes
            "id": option(group({
                "id": prop(terminal("tbd")),
                "child": prop(component("Phrasing", {}))
            })),
            "class": option(group({
                "class": prop(terminal("tbd")),
                "child": prop(component("Phrasing", {}))
            })),
            /*
            a'phrase' element does not exist in HTML, but this deviation from the standard is needed to handle whitespace properly 
            */
            "phrase": option(component("Phrasing content", {})),
            "script supporting": option(component("Script supporting content", {})),
            "embedded": option(component("Embedded", {})),
            "details": option(group({
                "summary": prop(array(taggedUnion({
                    "phrasing": option(component("Phrasing content", {})),
                    "heading": option(component("Heading content", {})),
                }))),
                "content": prop(component("Flow content", {})),
            })),
            "address": option(group({
                /*FIXME*/
                //Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.Flow content, but with no heading content descendants, no sectioning content descendants, and no header, footer, or address element descendants.
            })),
            "blockquote": option(group({
                "cite": prop(terminal("tbd")),
                "content": prop(component("Flow content", {}))
            })),
            "del": option(group({
                "edit": prop(component("Edit", {})),
                "content": prop(component("Flow content", {}))
            })),
            "dialog": option(group({
                "open": prop(optional(terminal("tbd"))),
                "content": prop(component("Flow content", {})),
            })),
            "div": option(component("Flow content", {})),
            "dl": option(taggedUnion({
                "divs": option(group({/*FIXME*/ })),
                "dts": option(group({/*FIXME*/ })),
            })), //description list
            "fieldset": option(group({
                /*FIXME*/
                "legend": prop(optional(group({/*FIXME*/ }))),
                // disabled — Whether the descendant form controls, except any inside legend, are disabled
                // form — Associates the element with a form element
                // name — Name of the element to use in the form.elements API.
                "content": prop(component("Flow content", {})),
            })),
            "figure": option(group({
                "caption": prop(optional(group({
                    "content": prop(component("Flow content", {})),
                    "position": prop(taggedUnion({
                        "top": option(group({})),
                        "botom": option(group({})),
                    }))
                }))),
                "content": prop(component("Flow content", {})),
            })),
            "footer": option(group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            })),
            "form": option(group({
                /*FIXME*/
                // accept-charset — Character encodings to use for form submission
                // action — URL to use for form submission
                // autocomplete — Default setting for autofill feature for controls in the form
                // enctype — Entry list encoding type to use for form submission
                // method — Variant to use for form submission
                // name — Name of form to use in the document.forms API
                // novalidate — Bypass form control validation for form submission
                // target — Navigable for form submission
                // rel
                //"content": Flow content, but with no form element descendants.
            })),
            "header": option(group({
                /*FIXME*/
                //Flow content, but with no header or footer element descendants
            })),
            "hr": option(group({})),
            "ins": option(group({
                "edit": prop(component("Edit", {})),
                "content": prop(component("Flow content", {}))
            })),
            /*
            FIXME
            A hierarchically correct main element is one whose ancestor elements are limited to html, body, div, form
            without an accessible name, and autonomous custom elements. Each main element must be a hierarchically correct main element.
            */
            "main": option(component("Flow content", {})),
            "map": option(group({
                "name": prop(terminal("tbd")),
                "content": prop(component("Flow content", {}))
            })),
            "menu": option(array(taggedUnion({
                "li": option(component("Flow content", {})),
                "script supporting": option(component("Script supporting content", {})),
            }))),
            "object": option(group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": prop(component("Flow content", {}))
            })),
            "ol": option(group({
                "reversed": prop(optional(terminal("tbd"))),
                "start": prop(optional(terminal("integer"))),
                "type": prop(optional(taggedUnion({
                    "1": option(group({})),
                    "a": option(group({})),
                    "A": option(group({})),
                    "i": option(group({})),
                    "I": option(group({})),
                }))),
                "content": prop(array(taggedUnion({
                    "li": option(group({
                        "value": prop(terminal("ordinal value")),
                        "content": prop(component("Flow content", {})),
                    })),
                    "script supporting": option(component("Script supporting content", {})),
                })))
            })),
            "p": option(component("Phrasing content", {})),
            "pre": option(component("Phrasing content", {})),
            "search": option(component("Flow content", {})),
            "slot": option(group({
                "name": prop(terminal("tbd")),
                "content": prop(component("Flow content", {})),
            })),
            "table": option(group({
                /*FIXME*/
                "caption": prop(optional(component("Flow content", {}))),
                "colgroups": prop(array(group({/*FIXME*/ }))),
                //"thead": prop(optional(component("Flow content", {}))),

            })),
            "ul": option(array(taggedUnion({
                "li": option(component("Flow content", {})),
                "script supporting": option(component("Script supporting content", {})),
            }))),
            "heading": option(component("Heading content", {})),
            "sectioning": option(component("Sectioning content", {})),
        }))),
        "Heading content": globalType({}, taggedUnion({
            "h1": option(component("Phrasing content", {})),
            "h2": option(component("Phrasing content", {})),
            "h3": option(component("Phrasing content", {})),
            "h4": option(component("Phrasing content", {})),
            "h5": option(component("Phrasing content", {})),
            "h6": option(component("Phrasing content", {})),
            "hgroup": option(group({
                "content before": prop(taggedUnion({
                    "p": option(group({/*FIXME*/ })),
                    "script supporting": option(component("Script supporting content", {})),
                })),
                "heading": prop(taggedUnion({
                    "h1 ": option(component("Phrasing content", {})),
                    "h2": option(component("Phrasing content", {})),
                    "h3": option(component("Phrasing content", {})),
                    "h4": option(component("Phrasing content", {})),
                    "h5": option(component("Phrasing content", {})),
                    "h6": option(component("Phrasing content", {})),
                })),
                "content after": prop(taggedUnion({
                    "p": option(group({/*FIXME*/ })),
                    "script supporting": option(component("Script supporting content", {})),
                })),
            })),
        })),
        "Script supporting content": globalType({}, taggedUnion({
            "script": option(group({
                /*FIXME*/
                // src — Address of the resource
                // type — Type of script
                // nomodule — Prevents execution in user agents that support module scripts
                // async — Execute script when available, without blocking while fetching
                // defer — Defer script execution
                // crossorigin — How the element handles crossorigin requests
                // integrity — Integrity metadata used in Subresource Integrity checks [SRI]
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // blocking — Whether the element is potentially render-blocking
                // fetchpriority — Sets the priority for fetches initiated by the element
                //content:
                //If there is no src attribute, depends on the value of the type attribute, but must match script content restrictions.
                //If there is a src attribute, the element must be either empty or contain only script documentation that also matches script content restrictions.
            })),
            "template": option(component("Template", {})),
        })),
        "Template": globalType({}, component("Flow content", {})),
        "Phrasing": globalType({}, taggedUnion({
            //generic attributes
            "id": option(group({
                "id": prop(terminal("tbd")),
                "child": prop(component("Phrasing", {}))
            })),
            "class": option(group({
                "class": prop(terminal("tbd")),
                "child": prop(component("Phrasing", {}))
            })),

            "text": option(terminal("tbd")),

            //elements
            "link": option(group({
                /*FIXME*/
                // href — Address of the hyperlink
                // crossorigin — How the element handles crossorigin requests
                // rel — Relationship between the document containing the hyperlink and the destination resource
                // media — Applicable media
                // integrity — Integrity metadata used in Subresource Integrity checks [SRI]
                // hreflang — Language of the linked resource
                // type — Hint for the type of the referenced resource
                // referrerpolicy — Referrer policy for fetches initiated by the element
                // sizes — Sizes of the icons (for rel="icon")
                // imagesrcset — Images to use in different situations, e.g., high-resolution displays, small monitors, etc. (for rel="preload")
                // imagesizes — Image sizes for different page layouts (for rel="preload")
                // as — Potential destination for a preload request (for rel="preload" and rel="modulepreload")
                // blocking — Whether the element is potentially render-blocking
                // color — Color to use when customizing a site's icon (for rel="mask-icon")
                // disabled — Whether the link is disabled
                // fetchpriority — Sets the priority for fetches initiated by the element
                // Also, the title attribute has special semantics on this element: Title of the link; CSS style sheet set name.
            })),
            "meta": option(group({
                /*FIXME*/

                // name — Metadata name
                // http-equiv — Pragma directive
                // content — Value of the element
                // charset — Character encoding declaration
                // media — Applicable media

                //where to be used:
                // If the charset attribute is present, or if the element's http-equiv attribute is in the Encoding declaration state: in a head element.
                // If the http-equiv attribute is present but not in the Encoding declaration state: in a head element.
                // If the http-equiv attribute is present but not in the Encoding declaration state: in a noscript element that is a child of a head element.
                // If the name attribute is present: where metadata content is expected.
                // If the itemprop attribute is present: where metadata content is expected.
                // If the itemprop attribute is present: where phrasing content is expected.                
            })),
            "noscript": option(group({
                /*FIXME*/
                //content: 
                // When scripting is disabled, in a head element: in any order, zero or more link elements, zero or more style elements, and zero or more meta elements.
                // When scripting is disabled, not in a head element: transparent, but there must be no noscript element descendants.
                // Otherwise: text that conforms to the requirements given in the prose.

            })),
            "object": option(group({
                /*FIXME*/
                // data — Address of the resource
                // type — Type of embedded resource
                // name — Name of content navigable
                // form — Associates the element with a form element
                // width — Horizontal dimension
                // height — Vertical dimension
                "content": prop(component("Phrasing content", {}))
            })),
            "script supporting": option(component("Script supporting content", {})),
            "a": option(group({/*FIXMEX*/ })),
            "button": option(group({
                /*FIXME*/
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // formaction — URL to use for form submission
                // formenctype — Entry list encoding type to use for form submission
                // formmethod — Variant to use for form submission
                // formnovalidate — Bypass form control validation for form submission
                // formtarget — Navigable for form submission
                // name — Name of the element to use for form submission and in the form.elements API
                // popovertarget
                // popovertargetaction
                // type — Type of button
                // value — Value to be used for form submission  

                //content:
                //Phrasing content, but there must be no interactive content descendant and no descendant with the tabindex attribute specified.

            })),
            "input": option(group({
                /*FIXME*/
                // accept — Hint for expected file type in file upload controls
                // alt — Replacement text for use when images are not available
                // autocomplete — Hint for form autofill feature
                // checked — Whether the control is checked
                // dirname — Name of form control to use for sending the element's directionality in form submission
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // formaction — URL to use for form submission
                // formenctype — Entry list encoding type to use for form submission
                // formmethod — Variant to use for form submission
                // formnovalidate — Bypass form control validation for form submission
                // formtarget — Navigable for form submission
                // height — Vertical dimension
                // list — List of autocomplete options
                // max — Maximum value
                // maxlength — Maximum length of value
                // min — Minimum value
                // minlength — Minimum length of value
                // multiple — Whether to allow multiple values
                // name — Name of the element to use for form submission and in the form.elements API
                // pattern — Pattern to be matched by the form control's value
                // placeholder — User-visible label to be placed within the form control
                // popovertarget
                // popovertargetaction
                // readonly — Whether to allow the value to be edited by the user
                // required — Whether the control is required for form submission
                // size — Size of the control
                // src — Address of the resource
                // step — Granularity to be matched by the form control's value
                // type — Type of form control
                // value — Value of the form control
                // width — Horizontal dimension
                // Also, the title attribute has special semantics on this element: Description of pattern (when used with pattern attribute).
            })),
            "label": option(group({
                /*FIXME*/
                //for — Associate the label with form control
                //content: Phrasing content, but with no descendant labelable elements unless it is the element's labeled control, and no descendant label elements.
            })),
            "select": option(group({
                // autocomplete — Hint for form autofill feature
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // multiple — Whether to allow multiple values
                // name — Name of the element to use for form submission and in the form.elements API
                // required — Whether the control is required for form submission
                // size — Size of the control
                "content": prop(array(taggedUnion({
                    "option": option(group({/*FIXME*/ })),
                    "optgroup": option(group({
                        //label
                        //disabled
                        "options": prop(array(group({
                            /*FIXME*/
                        })))
                    })),
                    "script supporting": option(component("Script supporting content", {})),
                }))),
            })),
            "textarea": option(group({
                /*FIXME*/
                // autocomplete — Hint for form autofill feature
                // cols — Maximum number of characters per line
                // dirname — Name of form control to use for sending the element's directionality in form submission
                // disabled — Whether the form control is disabled
                // form — Associates the element with a form element
                // maxlength — Maximum length of value
                // minlength — Minimum length of value
                // name — Name of the element to use for form submission and in the form.elements API
                // placeholder — User-visible label to be placed within the form control
                // readonly — Whether to allow the value to be edited by the user
                // required — Whether the control is required for form submission
                // rows — Number of lines to show
                // wrap — How the value of the form control is to be wrapped for form submission 
                "content": prop(terminal("tbd")),
            })),
            "abbr": option(group({
                "title": prop(terminal("tbd")),
                "content": prop(component("Phrasing content", {})),
            })),
            "area": option(group({ //FIXME: needs a 'map' ancestor
                /*FIXME*/
                // alt — Replacement text for use when images are not available
                // coords — Coordinates for the shape to be created in an image map
                // shape — The kind of shape to be created in an image map
                // href — Address of the hyperlink
                // target — Navigable for hyperlink navigation
                // download — Whether to download the resource instead of navigating to it, and its filename if so
                // ping — URLs to ping
                // rel — Relationship between the location in the document containing the hyperlink and the destination resource
                // referrerpolicy — Referrer policy for fetches initiated by the element
            })),
            "b": option(component("Phrasing content", {})),
            "bdi": option(group({
                "dir": prop(terminal("tbd")),
                "content": prop(component("Phrasing content", {})),
            })),
            "bdo": option(group({
                "dir": prop(terminal("tbd")),
                "content": prop(component("Phrasing content", {})),
            })),
            "br": option(group({})), //line break
            "cite": option(component("Phrasing content", {})),
            "code": option(component("Phrasing content", {})),
            "data": option(group({
                "value": prop(terminal("tbd")),
                "content": prop(component("Phrasing content", {})),
            })),
            "datalist": option(taggedUnion({
                "phrasing": option(component("Phrasing content", {})),
                "options": option(array(taggedUnion({
                    "option": option(group({/*FIXME*/ })),
                    "script supporting": option(component("Script supporting content", {})),
                }))),
            })),
            "del": option(group({
                "edit": prop(component("Edit", {})),
                "content": prop(component("Phrasing content", {}))
            })),
            "dfn": option(group({ //FIXME: there may not be a dfn ancestor
                "title": prop(terminal("tbd")),
                "content": prop(component("Phrasing content", {})),
            })),
            "em": option(component("Phrasing content", {})),
            "i": option(component("Phrasing content", {})),
            "ins": option(group({
                "edit": prop(component("Edit", {})),
                "content": prop(component("Phrasing content", {}))
            })),
            "kbd": option(component("Phrasing content", {})),
            "map": option(group({
                "name": prop(terminal("tbd")),
                "content": prop(component("Phrasing content", {}))
            })),
            "mark": option(component("Phrasing content", {})),
            "meter": option(group({
                /*FIXME*/

                // value — Current value of the element
                // min — Lower bound of range
                // max — Upper bound of range
                // low — High limit of low range
                // high — Low limit of high range
                // optimum — Optimum value in gauge

                // content:
                // Phrasing content, but there must be no meter element descendants.
            })),
            "output": option(group({
                "for": prop(optional(terminal("tbd"))),
                "form": prop(terminal("tbd")),//optional?
                "name": prop(terminal("tbd")),//optional?
                "content": prop(component("Phrasing content", {})),
            })),
            "progress": option(group({ //FIXME: there may not be any progress element ancestors
                "value": prop(terminal("tbd")),
                "max": prop(terminal("tbd")),
                "content": prop(component("Phrasing content", {})),
            })),
            "q": option(group({
                "cite": prop(terminal("tbd")),
                "content": prop(component("Phrasing content", {})),
            })),
            "ruby": option(group({
                /*FIXME*/
                // One or the other of the following:
                // Phrasing content, but with no ruby elements and with no ruby element descendants
                // A single ruby element that itself has no ruby element descendants
                // One or the other of the following:
                // One or more rt elements
                // An rp element followed by one or more rt elements, each of which is itself followed by an rp element            
            })),
            "s": option(component("Phrasing content", {})),
            "samp": option(component("Phrasing content", {})),
            "slot": option(group({
                "name": prop(terminal("tbd")),
                "content": prop(component("Phrasing content", {})),
            })),
            "small": option(component("Phrasing content", {})),
            "span": option(component("Phrasing content", {})),
            "strong": option(component("Phrasing content", {})),
            "sub": option(component("Phrasing content", {})),
            "sup": option(component("Phrasing content", {})),
            "time": option(taggedUnion({
                "datetime": option(group({
                    "value": prop(terminal("tbd")),
                    "content": prop(component("Phrasing content", {}))
                })),
                "text": option(terminal("time")),
            })),
            "u": option(component("Phrasing content", {})),
            "var": option(component("Phrasing content", {})),
            "wbr": option(group({})), //line break opportunity
            "embedded": option(component("Embedded", {})),
        })),
        "Phrasing content": globalType({}, array(component("Phrasing", {}))),
        "Sectioning content": globalType({}, taggedUnion({
            "article": option(component("Flow content", {})),
            "aside": option(component("Flow content", {})),
            "nav": option(component("Flow content", {})),
            "section": option(component("Flow content", {})),
        })),
    }),
}