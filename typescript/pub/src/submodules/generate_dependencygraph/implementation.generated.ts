import { API } from "./api.generated"
import { $$ as igenerateDependencyGraph } from "./implementations/generateDependencyGraph.s.p"

export const $api: API = {
    'generateDependencyGraph': igenerateDependencyGraph,
}