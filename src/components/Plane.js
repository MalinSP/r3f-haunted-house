import { useTexture } from "@react-three/drei"
import React, { useLayoutEffect, useRef, useEffect } from "react"
import * as THREE from "three"

const grassColorTexture = "/static/textures/grass/color.jpg"
const grassAmbientOcclusionTexture =
  "/static/textures/grass/ambientOcclusion.jpg"
const grassNormalTexture = "/static/textures/grass/normal.jpg"
const grassRoughnessTexture = "/static/textures/grass/roughness.jpg"

const Plane = () => {
  const planeRef = useRef()

  const floorTextureProps = useTexture({
    map: grassColorTexture,
    aoMap: grassAmbientOcclusionTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
  })

  useLayoutEffect(() => {
    Object.values(floorTextureProps).forEach(texture => {
      texture.wrapS = THREE.RepeatWrapping
      texture.wrapT = THREE.RepeatWrapping
      texture.repeat.set(8, 8)
    })
  }, [floorTextureProps])

  useEffect(() => {
    planeRef.current.geometry.setAttribute(
      "uv2",
      new THREE.Float32BufferAttribute(
        planeRef.current.geometry.attributes.uv.array,
        2
      )
    )
  })

  return (
    <>
      <mesh
        ref={planeRef}
        rotation-x={-Math.PI * 0.5}
        position-y={0}
        receiveShadow
      >
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial {...floorTextureProps} />
      </mesh>
    </>
  )
}

export default Plane
