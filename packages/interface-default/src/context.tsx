import React, { Dispatch, SetStateAction } from 'react'

interface ConsentManagerDefaultInterfaceContextValue {
  formVisible: boolean
  setFormVisible: Dispatch<SetStateAction<boolean>>
}

export const ConsentManagerDefaultInterfaceContext = React.createContext<
  ConsentManagerDefaultInterfaceContextValue
>({
  formVisible: false,
  setFormVisible: () => {},
})
