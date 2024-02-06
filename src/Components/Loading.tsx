import React, { CSSProperties } from 'react'

const style: CSSProperties = {
  border:  'var(--gap-s) solid var(--color-1)',
  borderRightColor: 'var(--color-4)',
  width:'var(--gap)',
  height: 'var(--gap)',
  borderRadius: '50%',
  animation: 'spin 1s infinite'
}

const Loading = () => {
  return (
    <div style={style}>
     
    </div>
  )
}

export default Loading