import { API } from "./api.generated"
import { $$ as icompile } from "./implementations/compile.b"
import { $$ as igenerateAPI } from "./implementations/generateAPI.b"
import { $$ as igenerateGlossaryFromLiana } from "./implementations/generateGlossaryFromLiana.b"
import { $$ as igenerateGlossaryFromTendril } from "./implementations/generateGlossaryFromTendril.b"
import { $$ as igenerateResolver } from "./implementations/generateResolver.b"
import { $$ as iserialize_$flat } from "./implementations/serialize_flat.b"

export const $api: API = {
    'compile': icompile,
    'generateAPI': igenerateAPI,
    'generateGlossaryFromLiana': igenerateGlossaryFromLiana,
    'generateGlossaryFromTendril': igenerateGlossaryFromTendril,
    'generateResolver': igenerateResolver,
    'serialize_flat': iserialize_$flat,
}