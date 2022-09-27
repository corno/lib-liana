import * as test from "lib-pareto-test"
import { DDependencies } from "../dependencies/dependencies.p"

import * as pub from "../../../../pub"

export type FCreateGetTestset = (
    $: pub.TSchema<undefined | string>,
    $d: DDependencies,
) => test.FGetTestSet