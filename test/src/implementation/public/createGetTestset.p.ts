
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"


import * as pub from "../../../../pub"
import * as mpareto from "../../../../pub/dist/modules/pareto"



export const createGetTestset: api.FCreateGetTestset = ($, $d) => {
    const config = $
    return ($, $a) => {

        mpareto.serialize(
           pub. mapToPareto(
                config,
                pub.dmapToPareto,
            ).root,
          pub.  createWriter(
                [$.testDirectory, "src"],
                {
                    onError: () => {
                        pl.logDebugMessage("$$$$$$")
                    },
                },
                pub.dcreateWriter,
                $a,
            ),
            pub.dparetodeps
        )
        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()

        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["simple string", {
                        actual: actual,
                        expected: expected
                    }]
                }]
            })
        }

        return pl.asyncValue({
            elements: builder.getDictionary()
        })
    }
}