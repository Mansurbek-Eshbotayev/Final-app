import React from 'react'
import { SerchLabel, SerchLabelInput } from './SearchStyle'

export const Search = () => {
  return (
    <SerchLabel>
      <SerchLabelInput type='search' name='search' placeholder='User' />
    </SerchLabel>
  )
}
