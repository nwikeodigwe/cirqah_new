import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'qvxr50ae',
    dataset: 'production',
  },
  deployment: {
    appId: 'uthfr7im8jlhxgoyxddd6nco',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
})
