import {Canvas,useFrame} from '@react-three/fiber';
import {Float,MeshTransmissionMaterial,OrbitControls} from '@react-three/drei';
import {useRef} from 'react';
import * as THREE from 'three';
function Orb(){const ref=useRef<THREE.Mesh>(null!);useFrame((_,d)=>{ref.current.rotation.x+=d*.12;ref.current.rotation.y+=d*.2});return <Float speed={1.5} rotationIntensity={.35} floatIntensity={1}><mesh ref={ref}><icosahedronGeometry args={[1.55,4]}/><MeshTransmissionMaterial thickness={.25} roughness={.18} transmission={.9} ior={1.2} color="#ff5938"/></mesh></Float>}
export default function HeroScene(){return <div className="hero-3d"><Canvas camera={{position:[0,0,5],fov:40}}><ambientLight intensity={1.5}/><directionalLight position={[3,3,3]} intensity={2}/><Orb/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.45}/></Canvas></div>}
