import { Instances, Instance } from "@react-three/drei"
import React from "react"

const Bushes = () => {
  return (
    <Instances limit={4} castShadow>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#89c854" />
      <Instance position={[0.8, 0.2, 2.2]} scale={[0.5, 0.5, 0.5]} />
      <Instance position={[1.4, 0.1, 2.1]} scale={[0.25, 0.25, 0.25]} />
      <Instance position={[-0.8, 0.1, 2.2]} scale={[0.4, 0.4, 0.4]} />
      <Instance position={[-1, 0.05, 2.6]} scale={0.15} />
    </Instances>
  )
}

export default Bushes
