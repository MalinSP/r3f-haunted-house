import React from "react"

const PointLight = () => {
  return (
    <pointLight
      args={["#ff7d46", 1, 7]}
      position={[0, 2.2, 2.7]}
      castShadow
      shadow-mapSize-width={256}
      shadow-mapSize-height={256}
      shadow-camera-far={7}
    />
  )
}

export default PointLight
