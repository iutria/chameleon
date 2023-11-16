import React from 'react'

const Loading = () => {
  return (
    <div className='w-100 d-flex center' style={{height: 'calc(100vh - 80px)'}}>
        <div className="spinner-border" role="status"></div>
    </div>
  )
}

export default Loading