/** @jsxImportSource @emotion/react */
import React from 'react'
import { Field, FieldProps, FieldRenderProps } from 'react-final-form'
import './SwitchField.css'

export type SwitchFieldProps = FieldProps<
  string,
  FieldRenderProps<string, HTMLElement>,
  HTMLInputElement
> & {
  disabled?: boolean
}

const Switch: React.FC<{
  name: string
  checked?: boolean
  value: string
  onChange: (e: any) => void
  activeColor?: string
}> = ({ name, checked, value, onChange, activeColor = 'green' }) => {
  const id = `${name}.${value}`

  return (
    <>
      <input
        checked={checked}
        onChange={onChange}
        className='privacy-manager-switch-checkbox'
        id={id}
        type='checkbox'
        name={name}
        value={value}
      />
      <label
        style={{ background: checked ? activeColor : undefined }}
        className='react-switch-label'
        htmlFor={id}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  )
}

export const SwitchField: React.FC<SwitchFieldProps> = ({
  name,
  value,
  disabled,
  ...fieldProps
}) => (
  <Field {...fieldProps} type='checkbox' name={name} value={value}>
    {({ input }) => {
      return (
        <Switch {...input}  />
      )
    }}
  </Field>
)
