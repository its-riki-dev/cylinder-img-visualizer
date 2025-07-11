import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import { Stats } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import Scene from './components/Scene'

const App = () => {
  return (
      <Canvas flat camera={{ fov: 60, position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 4, 5]} intensity={2} />
        {/* <OrbitControls /> */}
        <Scene />
        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={2.0}
            luminanceThreshold={0.5}
            luminanceSmoothing={0.1}
          />
        </EffectComposer>
        {/* <Stats showPanel={0} className='top-0 left-0' /> */}
      </Canvas>
  )
}

export default App
