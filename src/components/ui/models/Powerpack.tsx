import { Base, Geometry } from '@react-three/csg';
import { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

const box = new THREE.BoxGeometry(0.9, 2, 1);

export default function Powerpack(props: ThreeElements['mesh']) {
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
          scale={[1, 1, 1]}
        />
      </Geometry>
      <meshStandardMaterial
        color='red'
        envMapIntensity={0.25}
      />
    </mesh>
  );
}
