import { Addition, Base, Geometry, Subtraction } from '@react-three/csg';
import { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

const box = new THREE.BoxGeometry();
const tri = new THREE.CylinderGeometry(1, 1, 2, 3);

export default function Megapack(props: ThreeElements['mesh']) {
  return (
    <mesh
      {...props}
      receiveShadow
      castShadow
    >
      <Geometry>
        <Base
          name='base'
          geometry={box}
          scale={[3, 3, 3]}
        />
        <Subtraction
          name='cavity'
          geometry={box}
          scale={[2.7, 2.7, 2.7]}
        />
        <Addition
          name='roof'
          geometry={tri}
          scale={[2.5, 1.5, 1.425]}
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 2.2, 0]}
        />
      </Geometry>
      <meshStandardMaterial
        color='white'
        envMapIntensity={0.25}
      />
    </mesh>
  );
}
