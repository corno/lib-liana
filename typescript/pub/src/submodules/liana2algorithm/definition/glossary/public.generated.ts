import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as galgorithm from "lib-pareto-typescript-project/dist/submodules/algorithm"
import * as galgorithm_temp from "../../../algorithm_temp"
import * as gapi from "lib-pareto-typescript-project/dist/submodules/api"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import * as gliana from "../../../liana"
import * as gmain from "res-pareto-main"

export type FMapLiana2Serializer = <GPAnnotation>($: T.MappedModel<GPAnnotation>,) => galgorithm_temp.T.AlgorithmImplementation<T.OutAnnotation<GPAnnotation>>

export type FMapLiana2States = <GPAnnotation>($: T.MappedModel<GPAnnotation>,) => galgorithm.T.States<T.OutAnnotation<GPAnnotation>>