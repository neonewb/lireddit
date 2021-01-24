import { __prod__ } from './constants/constants'
import { Post } from './entities/Post'
import { Options } from '@mikro-orm/core'
import path from 'path'

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post],
  password: 'yFMsk6PeZr3uTx^tX*PvIjtot',
  dbName: 'lireddit',
  type: 'postgresql',
  debug: !__prod__,
} as Options
