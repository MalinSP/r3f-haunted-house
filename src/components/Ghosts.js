import React, { useRef } from "react"
import { useFrame } from "react-three-fiber"

const Ghosts = () => {
  const oneGhost = useRef()
  const secondGhost = useRef()
  const thirdGhost = useRef()

  useFrame(({ clock }) => {
    const ghostOneAngle = clock.getElapsedTime() * 0.5
    oneGhost.current.position.x = Math.cos(ghostOneAngle) * 4
    oneGhost.current.position.z = Math.sin(ghostOneAngle) * 4
    oneGhost.current.position.y = Math.sin(clock.getElapsedTime()) * 3

    const ghostTwoAngle = -clock.getElapsedTime() * 0.32
    secondGhost.current.position.x = Math.cos(ghostTwoAngle) * 5
    secondGhost.current.position.z = Math.sin(ghostTwoAngle) * 5
    secondGhost.current.position.y =
      Math.sin(clock.elapsedTime * 4) + Math.sin(clock.elapsedTime * 2.5)

    const ghostThirdAngle = clock.getElapsedTime() * 0.18
    thirdGhost.current.position.x =
      Math.cos(ghostThirdAngle) * (7 + Math.sin(clock.elapsedTime * 0.32))
    thirdGhost.current.position.z =
      Math.sin(ghostThirdAngle) * (7 + Math.sin(clock.elapsedTime * 0.5))
    thirdGhost.current.position.y =
      Math.sin(clock.elapsedTime * 5) + Math.sin(clock.elapsedTime * 2)
  })
  return (
    <>
      <pointLight
        castShadow
        ref={oneGhost}
        args={["#ff00ff", 2, 3]}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
      />
      <pointLight
        castShadow
        ref={secondGhost}
        args={["#ff00ff", 2, 3]}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
      />
      <pointLight
        castShadow
        ref={thirdGhost}
        args={["#ffff00", 2, 3]}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
      />
    </>
  )
}

export default Ghosts
