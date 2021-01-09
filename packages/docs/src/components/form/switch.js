import React from 'react'

import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'

export const SwitchAdapter = ({
  input: { onChange, value },
  label,
  ...rest
}) => (
  <FormControlLabel
    control={
      <Switch
        color="primary"
        checked={!!value}
        onChange={event => onChange(event.target.checked)}
        {...rest}
      />
    }
    label={label}
  />
)
