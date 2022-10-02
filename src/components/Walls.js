import React, { useEffect, useRef } from "react"
import { useLoader } from "react-three-fiber"
import { TextureLoader } from "three/src/loaders/TextureLoader.js"
import * as THREE from "three"

const Walls = () => {
  const wallsRef = useRef()
  const bricksColorTexture = useLoader(
    TextureLoader,
    "/static/textures/bricks/color.jpg"
  )
  const bricksAoTexture = useLoader(
    TextureLoader,
    "/static/textures/bricks/ambientOcclusion.jpg"
  )
  const bricksNormalTexture = useLoader(
    TextureLoader,
    "/static/textures/bricks/normal.jpg"
  )
  const bricksRoughnessTexture = useLoader(
    TextureLoader,
    "/static/textures/bricks/roughness.jpg"
  )

  useEffect(() => {
    wallsRef.current.geometry.setAttribute(
      "uv2",
      new THREE.Float32BufferAttribute(
        wallsRef.current.geometry.attributes.uv.array,
        2
      )
    )
  }, [])

  return (
    <mesh position-y={2.5 / 2} ref={wallsRef} castShadow>
      <boxGeometry args={[4, 2.5, 4]} />
      <meshStandardMaterial
        map={bricksColorTexture}
        aoMap={bricksAoTexture}
        normalMap={bricksNormalTexture}
        roughnessMap={bricksRoughnessTexture}
      />
    </mesh>
  )
}

export default Walls
