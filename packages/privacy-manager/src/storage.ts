import { Dispatch, SetStateAction } from 'react'

export type PrivacyManagerStateHook = (
  initialState: SetStateAction<PrivacyManagerStorageState>
) => [
  PrivacyManagerStorageState,
  Dispatch<SetStateAction<PrivacyManagerStorageState>>
]

export interface PrivacyManagerStorageState {
  decisions: { [integrationId: string]: boolean }
}

export type PrivacyManagerStore<S = PrivacyManagerStorageState> = [
  S,
  Dispatch<SetStateAction<S>>
]
