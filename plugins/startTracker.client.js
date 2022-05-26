import {startTracker} from '../utils/tracker'

export default defineNuxtPlugin( (nuxtApp) => {
    
    return {
        provide: {
            startTracking: () => {
                let config = useRuntimeConfig().public
                
                let {userId} = startTracker({
                    userIdEnabled: true,
                    projectKey: config.openreplayProjectKey
                })
                //Optional if you need it
                let uid = useUserId()
                uid.value = userId
            }
        }
    }
})

