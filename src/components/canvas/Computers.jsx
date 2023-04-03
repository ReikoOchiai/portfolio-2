import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';
import useMediaQuery from '../customHooks/useMediaQuery';

const Computers = ({ isMobile }) => {
	const computer = useGLTF('./desktop_pc/scene.gltf');
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.55 : 0.75}
				position={isMobile ? [0, -2.5, -1.5] : [0, -3.25, -1.5]}
				rotation={[0, -0.2, -0.15]}
			/>
		</mesh>
	);
};

const ComputersCanvas = () => {
	const { isMobile } = useMediaQuery();
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [20, 3, 5], fov: 25 }}
			gl={{ preserverDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
					enableZoom={false}
				/>
				<Computers isMobile={isMobile} />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};
export default ComputersCanvas;
