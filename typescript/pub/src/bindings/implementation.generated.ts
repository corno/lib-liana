import { API } from "./api.generated"
import { $$ as igenerateAPI } from "./implementations/generateAPI.p"
import { $$ as igenerateGlossary } from "./implementations/generateGlossary.p"
import { $$ as iserialize_$flat } from "./implementations/serialize_flat.p"

export const $api: API = {
    'generateAPI': igenerateAPI,
    'generateGlossary': igenerateGlossary,
    'serialize_flat': iserialize_$flat,
}