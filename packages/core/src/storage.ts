import { Dispatch, SetStateAction } from 'react'

export type ConsentManagerStateHook = (
  initialState: SetStateAction<ConsentManagerStorageState>
) => [
  ConsentManagerStorageState,
  Dispatch<SetStateAction<ConsentManagerStorageState>>,
]

export interface ConsentManagerStorageState {
  decisions: { [integrationId: string]: boolean }
}

export type ConsentManagerStore<S = ConsentManagerStorageState> = [
  S | undefined,
  Dispatch<SetStateAction<S | undefined>>,
]
