import { Instance, Instances } from "@react-three/drei"
import React, { useMemo } from "react"

const Graves = () => {
  const count = 50

  return (
    <Instances limit={count} castShadow>
      <boxGeometry args={[0.6, 0.8, 0.2]} />
      <meshStandardMaterial color="#b2b6b1" />
      {Array.from({ length: count }).map((_, i) => (
        <Grave key={i} />
      ))}
    </Instances>
  )
}

function Grave() {
  const { x, z, yRotation, zRotation } = useMemo(() => {
    const angle = Math.random() * Math.PI * 2
    const radius = 3 + Math.random() * 7
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius
    const yRotation = (Math.random() - 0.5) * 0.4
    const zRotation = (Math.random() - 0.5) * 0.4
    return { x, z, yRotation, zRotation }
  }, [])

  return (
    <Instance
      castShadow
      position={[x, 0.3, z]}
      rotation={[0, yRotation, zRotation]}
    />
  )
}

export default Graves
