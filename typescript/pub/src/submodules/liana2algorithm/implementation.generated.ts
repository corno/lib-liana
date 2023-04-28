import { API } from "./api.generated"
import { $$ as icreate121Mapper } from "./implementations/create121Mapper.s.p"
import { $$ as icreateResolver } from "./implementations/createResolver.s.p"
import { $$ as imapLiana2Serializer } from "./implementations/mapLiana2Serializer.s.f"
import { $$ as imapLiana2States } from "./implementations/mapLiana2States.s.f"

export const $api: API = {
    'create121Mapper': icreate121Mapper,
    'createResolver': icreateResolver,
    'mapLiana2Serializer': imapLiana2Serializer,
    'mapLiana2States': imapLiana2States,
}