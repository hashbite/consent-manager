import React from 'react'
import {
  ConsentManagerForm,
  ConsentManagerFormProps,
} from '@consent-manager/core'

import { Interface } from './interface'

const ConsentManagerInterfaceChunk: React.FC<ConsentManagerFormProps> = props => {
  return (
    <ConsentManagerForm
      formComponent={Interface}
      id="consent-manager-default-interface"
      {...props}
    />
  )
}

export default ConsentManagerInterfaceChunk
