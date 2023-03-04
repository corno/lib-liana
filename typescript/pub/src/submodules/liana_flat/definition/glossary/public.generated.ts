import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gfp from "lib-fountain-pen"
import * as gliana from "../../../liana"

export type FSerialize = <GPAnnotation>($: T.MappedModel<GPAnnotation>, $i: gfp.IDirectory,) => void