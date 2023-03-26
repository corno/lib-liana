import { API } from "./api.generated"
import { $$ as icreateLiana2SerializerMapper } from "./implementations/createLiana2SerializerMapper.p"
import { $$ as icreateLiana2StatesMapper } from "./implementations/createLiana2StatesMapper.p"

export const $api: API = {
    'createLiana2SerializerMapper': icreateLiana2SerializerMapper,
    'createLiana2StatesMapper': icreateLiana2StatesMapper,
}