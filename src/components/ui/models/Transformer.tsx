import { Base, Geometry } from '@react-three/csg';
import { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

const box = new THREE.BoxGeometry(1, 2, 1);
export default function Transformer(props: ThreeElements['mesh']) {
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
      </Geometry>
      <meshStandardMaterial
        color='blue'
        envMapIntensity={0.25}
      />
    </mesh>
  );
}
