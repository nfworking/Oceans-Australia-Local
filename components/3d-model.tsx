import { useGLTF } from "@react-three/drei"

export function Model() {
  const { scene } = useGLTF("/assets/3d/duck.glb")
  return <primitive object={scene} scale={2} />
}

