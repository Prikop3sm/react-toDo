import {
    sortAZ,
    sortZA,
    completeOnly,
    nonCompleteOnly,
    all,
    sortNewest,
    sortOldest,
} from "../../constants/index.js"

export const userSettingsSortAZAction = { type: sortAZ }
export const userSettingsSortZAAction = { type: sortZA }
export const userSettingsSortNewestAction = { type: sortNewest }
export const userSettingsSortOldestAction = { type: sortOldest }

export const userSettingsFilterCompleteOnlyAction = { type: completeOnly }
export const userSettingsFilterNonCompleteOnlyAction = {
    type: nonCompleteOnly,
}
export const userSettingsFilterAllAction = { type: all }
