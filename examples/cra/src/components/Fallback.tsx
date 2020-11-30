import React from 'react'

export const GlobalFallbackComponent: React.FC = () => (
  <div>
    <img
      alt='No consent'
      src='https://media.giphy.com/media/iKHNc9zt4khhufgtdi/giphy.gif'
    />
  </div>
)

export const LocalFallbackComponent = () => (
  <div>
    <img
      alt='No consent'
      src='https://media.giphy.com/media/12HZukMBlutpoQ/giphy.gif'
    />
  </div>
)
