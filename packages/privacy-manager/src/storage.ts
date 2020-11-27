import { Dispatch, SetStateAction } from 'react'
import createPersistedState from 'use-persisted-state'

type PrivacyManagerStateHook = (
  initialState: SetStateAction<PrivacyManagerStorageState>
) => [
  PrivacyManagerStorageState,
  Dispatch<SetStateAction<PrivacyManagerStorageState>>
]
export const usePrivacyManagerState: PrivacyManagerStateHook = createPersistedState(
  'privacy-manager'
)

export interface PrivacyManagerStorageState {
  decisions: { [integrationId: string]: boolean }
}

export type PrivacyManagerStore<S = PrivacyManagerStorageState> = [
  S,
  Dispatch<SetStateAction<S>>
]
