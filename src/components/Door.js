import React, { useEffect, useRef } from "react"
import { useLoader } from "react-three-fiber"
import { TextureLoader } from "three"
import * as THREE from "three"

const Door = () => {
  const doorRef = useRef()
  const [
    doorColorTexture,
    doorAlphaTexture,
    doorAmbientOcclusionTexture,
    doorHeightTexture,
    doorNormalTexture,
    doorMetalnessTexture,
    doorRoughnessTexture,
  ] = useLoader(TextureLoader, [
    "/static/textures/door/color.jpg",
    "/static/textures/door/alpha.jpg",
    "/static/textures/door/ambientOcclusion.jpg",
    "/static/textures/door/height.jpg",
    "/static/textures/door/metalness.jpg",
    "/static/textures/door/normal.jpg",
    "/static/textures/door/roughness.jpg",
  ])

  useEffect(() => {
    doorRef.current.geometry.setAttribute(
      "uv2",
      new THREE.Float32BufferAttribute(
        doorRef.current.geometry.attributes.uv.array,
        2
      )
    )
  }, [])
  return (
    <mesh ref={doorRef} position-y={1} position-z={2 + 0.01}>
      <planeGeometry args={[2.2, 2.2, 100, 100]} />
      <meshStandardMaterial
        map={doorColorTexture}
        alphaMap={doorAlphaTexture}
        aoMap={doorAmbientOcclusionTexture}
        displacementMap={doorHeightTexture}
        normalMap={doorNormalTexture}
        metalnessMap={doorMetalnessTexture}
        roughnessMap={doorRoughnessTexture}
        displacementScale={0.1}
      />
    </mesh>
  )
}

export default Door
