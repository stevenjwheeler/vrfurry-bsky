import { AppContext } from '../config'
import {
  QueryParams,
  OutputSchema as AlgoOutput,
} from '../lexicon/types/app/bsky/feed/getFeedSkeleton'
import * as sfwFeed from './sfw-feed'
import * as nsfwFeed from './nsfw-feed'

type AlgoHandler = (ctx: AppContext, params: QueryParams) => Promise<AlgoOutput>

const algos: Record<string, AlgoHandler> = {
  [sfwFeed.shortname]: sfwFeed.handler,
  [nsfwFeed.shortname]: nsfwFeed.handler,
}

export default algos
