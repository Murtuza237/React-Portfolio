import React from 'react'

export default function Button(label,onclick) {
  return (
    <button class="btn" onClick={onclick}>{label}</button>
  )
}
