import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_this from "../glossary"
import * as g_liana from "../../liana"
import * as g_fp from "lib-fountain-pen"

import { A } from "../api.generated"

export const $$: A.map = () => {
    return <Annotation>($: g_liana.T.Model<Annotation>, $i: g_fp.SYNC.I.Block) => {
        const tl = $['type library']
        function getGlobalType($: { 'key': string }) {
            return tl['global types'].__unsafeGetEntry($.key)
        }


        type Serialize_Model = ($: g_liana.T.Model<Annotation>, $i: g_fp.SYNC.I.Block) => void
        type Serialize_Global__Type = ($: g_liana.T.Global__Type<Annotation>, $i: g_fp.SYNC.I.Block) => void
        type Serialize_Type = ($: g_liana.T.Type<Annotation>, $i: g_fp.SYNC.I.Block) => void



        const serialize_Type: Serialize_Type = ($) => {
            pl.cc($.type, ($) => {
                switch ($[0]) {
                    case 'array':
                        pl.ss($, ($) => {

                        })
                        break
                    case 'component':
                        pl.ss($, ($) => {

                        })
                        break
                    case 'dictionary':
                        pl.ss($, ($) => {

                        })
                        break
                    case 'group':
                        pl.ss($, ($) => {

                        })
                        break
                    case 'nothing':
                        pl.ss($, ($) => {

                        })
                        break
                    case 'optional':
                        pl.ss($, ($) => {

                        })
                        break
                    case 'tagged union':
                        pl.ss($, ($) => {

                        })
                        break
                    case 'terminal':
                        pl.ss($, ($) => {

                        })
                        break
                    default: pl.au($[0])
                }
            })
        }
        const serialize_Global__Type: Serialize_Global__Type = ($) => {
            serialize_Type($.type, $i)
        }
        const serialize_Model: Serialize_Model = ($) => {
            $i.line(`FOOO`)
            serialize_Global__Type(getGlobalType($.root), $i)
        }

        serialize_Model($, $i)
    }
}