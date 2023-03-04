import * as pt from 'pareto-core-types'

import { T } from './types.generated'


export namespace I {
    
    export type Visitor<GAnnotation> = {
        'Model': () => void
        'Reference': () => void
        'String': () => void
        'Type': () => void
        'Type Library': () => void
    }
}

export namespace B {}

export namespace F {}