import React from 'react'

export default function Footer(props) {
  return (
    <div className='container text-center'>
      <p>&copy; {props.head} Reserved</p>
    </div>
  )
}
