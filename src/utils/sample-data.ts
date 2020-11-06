import { User } from '~interfaces/index'

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
]

// 하나만 export 할거면 export default 로 해야해서 임시로 두개 export
export const lint = 'dummy'
