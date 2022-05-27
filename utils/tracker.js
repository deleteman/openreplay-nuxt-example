import Tracker from '@openreplay/tracker';
import trackerFetch from '@openreplay/tracker-fetch/cjs';

import {v4 as uuidV4} from 'uuid'

function defaultGetUserId() {
   return uuidV4() 
}

export function startTracker(config) {

    console.log("Starting tracker...")

    const getUserId = (config?.userIdEnabled && config?.getUserId) ? config.getUserId : defaultGetUserId
    let userId = null;

    console.log("Project key used: ", config.projectKey)
    const trackerConfig = {
        projectKey: config.projectKey 
    }

    const tracker = new Tracker(trackerConfig);
    tracker.use(trackerFetch({
        overrideGlobal: true
    })); // check list of available options below


    if(config?.userIdEnabled) {
        userId = getUserId()
        tracker.setUserID(userId)
    }
    console.log("tracker: user id: ", userId)

    tracker.start();
    return {
        tracker,
        userId
    }
}