import * as pl from "pareto-core-lib"
import * as api from "../../interface"
import { serializeImplementation } from "../private/serializeImplementation.p"
import { serializeInterface } from "../private/serializeInterface.p"

export const serialize: api.FSerialize = ($, $i, $d) => {
    if ($.interface !== null) {
        serializeInterface(
            $.interface,
            $i,
            {
                getTypeParameters: () => {
                    pl.logDebugMessage("@@@")
                    return pl.createEmptyArray()
                },
                x: $d,
            },
        )
    }
    if ($.implementation !== null) {
        serializeImplementation(
            $.implementation,
            $i,
            {
                getTypeParameters: () => {
                    pl.panic("NOT EXPECTED")
                },
                x: $d,
            },
        )
    }
    $i.createFile(
        "_globals.ts",
        ($i) => {
            $i.line(($i) => {
                $i.snippet(`interface Array<T> { }`)                
            })
            $i.line(($i) => {
                $i.snippet(`interface Boolean { }`)                
            })
            $i.line(($i) => {
                $i.snippet(`interface CallableFunction { }`)                
            })
            $i.line(($i) => {
                $i.snippet(`interface Function { }`)                
            })
            $i.line(($i) => {
                $i.snippet(`interface IArguments { }`)                
            })
            $i.line(($i) => {
                $i.snippet(`interface NewableFunction { }`)                
            })
            $i.line(($i) => {
                $i.snippet(`interface Number { }`)                
            })
            $i.line(($i) => {
                $i.snippet(`interface Object { }`)                
            })
            $i.line(($i) => {
                $i.snippet(`interface RegExp { }`)                
            })
            $i.line(($i) => {
                $i.snippet(`interface String { }`)                
            })
        }
    )
    return null
}