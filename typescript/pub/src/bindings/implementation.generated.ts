import { API } from "./api.generated"
import { $$ as icompile } from "./implementations/compile.b"
import { $$ as igenerateAPI } from "./implementations/generateAPI.b"
import { $$ as igenerateGlossary } from "./implementations/generateGlossary.b"
import { $$ as igenerateResover } from "./implementations/generateResover.b"
import { $$ as iserialize_$flat } from "./implementations/serialize_flat.b"

export const $api: API = {
    'compile': icompile,
    'generateAPI': igenerateAPI,
    'generateGlossary': igenerateGlossary,
    'generateResover': igenerateResover,
    'serialize_flat': iserialize_$flat,
}