import { Html, useProgress } from '@react-three/drei'
import React from 'react'

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className='canvas-load'></span>
      <p 
        style={{
          fontSize: 20,
          color: '#f1f1f1',
          fontWeight: 600,
          marginTop: 40
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default CanvasLoader;