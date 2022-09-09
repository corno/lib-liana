
import * as api from "../../interface"
import { serializeInterface } from "../private/serializeInterface.p"

export const serialize: api.FSerialize = ($, $i, $d) => {
    if ($.interface !== null) {
        serializeInterface(
            $.interface,
            $i,
            $d,
        )
    }
    return null
}