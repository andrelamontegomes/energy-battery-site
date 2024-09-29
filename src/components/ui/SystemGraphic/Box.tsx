import { Addition, Base, Geometry, Subtraction } from '@react-three/csg';
import { ThreeElements } from '@react-three/fiber';
import * as THREE from 'three';

const box = new THREE.BoxGeometry();
const cyl = new THREE.CylinderGeometry(1, 1, 2, 20);
const tri = new THREE.CylinderGeometry(1, 1, 2, 3);

export default function Box(props: ThreeElements['mesh']) {
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
        <Door
          rotation={[0, Math.PI / 2, 0]}
          position={[-1.425, -0.45, 0]}
          scale={[1, 0.9, 1]}
        />
      </Geometry>
      <meshStandardMaterial
        envMapIntensity={0.25}
        color={'#2f74c0'}
      />
    </mesh>
  );
}

const Door = (props) => (
  <Subtraction {...props}>
    <Geometry>
      <Base
        geometry={box}
        scale={[1, 2, 1]}
      />
      <Addition
        geometry={cyl}
        scale={0.5}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 1, 0]}
      />
    </Geometry>
  </Subtraction>
);
