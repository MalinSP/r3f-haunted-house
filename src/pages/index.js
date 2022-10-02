import React, { Suspense, useEffect, useRef } from "react"
import "../css/reset.css"
import "../css/main.css"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import {
  Plane,
  Walls,
  Roof,
  Door,
  PointLight,
  Bushes,
  Graves,
  Ghosts,
} from "../components"
import { Fog } from "three"
import * as THREE from "three"

export default function Home() {
  let dpr
  useEffect(() => {
    dpr = Math.min(window.devicePixelRatio, 2)
  }, [])
  return (
    <Canvas
      shadows
      onCreated={state => {
        state.gl.setClearColor("#262837")
        state.scene.fog = new Fog("#1b153e", 1, 20)
        state.gl.shadowMap.enabled = true
        state.gl.shadowMap.type = THREE.PCFSoftShadowMap
      }}
      className="canvas-container"
      dpr={dpr}
    >
      <ambientLight intensity={0.12} color="#b9d5ff" />
      <directionalLight
        intensity={0.12}
        color="#b9d5ff"
        position={[4, 5, -2]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      <PerspectiveCamera
        makeDefault
        fov={75}
        near={0.1}
        far={100}
        position={[6, 5, 10]}
      />
      <Roof />
      <Walls />
      <Plane />
      <Door />
      <Bushes />
      <Graves />
      <Ghosts />
      <PointLight />
      <OrbitControls />
    </Canvas>
  )
}
