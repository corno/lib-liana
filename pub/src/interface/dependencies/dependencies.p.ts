import * as pt from "pareto-core-types"
import * as tempRes from "../../../../tempRes"
import * as fp from "lib-fountain-pen"
import * as fs from "api-pareto-filesystem"

export type DMapToPareto = {
    concat: tempRes.FConcat
    arrayIsEmpty: <T>($: pt.Array<T>) => boolean
    joinDictionaries: <T>($: pt.Dictionary<pt.Dictionary<T>>) => pt.Dictionary<T>
}

export type DCreateWriter = {
    fp: fp.DDependencies
    createWriteStream: fs.FCreateWriteStream
}