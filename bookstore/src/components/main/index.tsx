import React from 'react'
import './index.scss'

type Props = {
    children: React.ReactNode
 }

const Main: React.FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>
}

export default Main
