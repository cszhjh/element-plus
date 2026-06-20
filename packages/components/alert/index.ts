import { withInstall } from '@element-plus/utils'
import Alert from './src/alert.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElAlert: SFCWithInstall<typeof Alert> = withInstall(Alert)
export default ElAlert

export * from './src/alert'
export type { AlertInstance } from './src/instance'

export const __test = {} // test
export const __foo = [1, 2, 3, 4]
