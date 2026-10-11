import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3DCenterpiece: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglSupported, setWebglSupported] = useState<boolean>(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
    } catch {
      setWebglSupported(false);
      return;
    }

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    
    // Generous camera distance to guarantee NO clipping of outer orbital geometry
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 11.8);

    // Dynamic responsive positioning of the sculpture
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    const updateSculptureLayout = (w: number) => {
      if (w >= 1280) {
        // Large desktop: Sculpture sits majestically on the right side
        sculptureGroup.position.set(2.6, 0.1, 0);
        sculptureGroup.scale.setScalar(1.0);
      } else if (w >= 1024) {
        // Standard laptop: slightly reduced offset
        sculptureGroup.position.set(2.0, 0.1, 0);
        sculptureGroup.scale.setScalar(0.9);
      } else if (w >= 768) {
        // Tablet: softly centered in the upper-right quadrant
        sculptureGroup.position.set(0.8, 0.4, 0);
        sculptureGroup.scale.setScalar(0.8);
      } else {
        // Mobile: Centered composition with scaled depth
        sculptureGroup.position.set(0, 0.7, 0);
        sculptureGroup.scale.setScalar(0.68);
      }
    };

    updateSculptureLayout(width);

    // Lighting: High-contrast luxury digital aesthetic (Laser cyan key, ultraviolet rim, deep ambient)
    const ambientLight = new THREE.AmbientLight(0x0c0f18, 3.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0x4debff, 4.5);
    keyLight.position.set(6, 7, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x526bff, 3.5);
    rimLight.position.set(-7, -5, -4);
    scene.add(rimLight);

    const coreLight = new THREE.PointLight(0x4debff, 3.0, 12);
    coreLight.position.set(0, 0, 1.5);
    sculptureGroup.add(coreLight);

    const accentLight = new THREE.PointLight(0xc8ff54, 1.8, 8);
    accentLight.position.set(0, 0, -1.5);
    sculptureGroup.add(accentLight);

    // 1. Central Core: Dark Chrome Faceted Monolith (Octahedron)
    const coreGeo = new THREE.OctahedronGeometry(1.25, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x101524,
      metalness: 0.95,
      roughness: 0.08,
      wireframe: false,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    sculptureGroup.add(coreMesh);

    // Inner glowing wireframe lattice
    const latticeMat = new THREE.MeshBasicMaterial({
      color: 0x4debff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const latticeMesh = new THREE.Mesh(coreGeo, latticeMat);
    latticeMesh.scale.setScalar(1.03);
    sculptureGroup.add(latticeMesh);

    // 2. Primary Orbital Ring (Polished Steel & Cyan Specular Glint)
    const ring1Geo = new THREE.TorusGeometry(2.2, 0.045, 24, 120);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x4debff,
      metalness: 0.9,
      roughness: 0.12,
      emissive: 0x113b45,
      emissiveIntensity: 0.25,
    });
    const ring1Mesh = new THREE.Mesh(ring1Geo, ring1Mat);
    sculptureGroup.add(ring1Mesh);

    // 3. Secondary Angled Orbital Ring (Ultraviolet Blue)
    const ring2Geo = new THREE.TorusGeometry(2.8, 0.035, 24, 120);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x526bff,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x15225c,
      emissiveIntensity: 0.3,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2Mesh.rotation.x = Math.PI / 3.2;
    sculptureGroup.add(ring2Mesh);

    // 4. Outer Segmented Gimbal Track (Muted Titanium & Laser Markers)
    const ring3Geo = new THREE.TorusGeometry(3.4, 0.025, 20, 100);
    const ring3Mat = new THREE.MeshStandardMaterial({
      color: 0x9298aa,
      metalness: 0.85,
      roughness: 0.25,
    });
    const ring3Mesh = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3Mesh.rotation.y = Math.PI / 2.5;
    sculptureGroup.add(ring3Mesh);

    // 5. Array of 14 Floating Faceted Crystalline Satellites
    const shardsGroup = new THREE.Group();
    sculptureGroup.add(shardsGroup);

    const shardGeo = new THREE.TetrahedronGeometry(0.14, 0);
    const shardMatCyan = new THREE.MeshStandardMaterial({
      color: 0x4debff,
      metalness: 0.8,
      roughness: 0.15,
      emissive: 0x1a4550,
      emissiveIntensity: 0.4,
    });
    const shardMatLime = new THREE.MeshStandardMaterial({
      color: 0xc8ff54,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x3d5415,
      emissiveIntensity: 0.4,
    });

    const shardCount = 14;
    for (let i = 0; i < shardCount; i++) {
      const mat = i % 2 === 0 ? shardMatCyan : shardMatLime;
      const shard = new THREE.Mesh(shardGeo, mat);
      const angle = (i / shardCount) * Math.PI * 2;
      const radius = 2.2 + (i % 3) * 0.55;
      const heightOffset = Math.sin(angle * 2) * 0.4;
      shard.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius + heightOffset,
        Math.sin(angle * 3) * 0.6
      );
      shard.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      shardsGroup.add(shard);
    }

    // Smooth Pointer Interaction via Lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseX = normX * 0.35;
      mouseY = normY * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Responsive Resize Observer
    const handleResize = () => {
      if (!container || !renderer) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      if (newW > 0 && newH > 0) {
        camera.aspect = newW / newH;
        camera.updateProjectionMatrix();
        renderer.setSize(newW, newH);
        updateSculptureLayout(newW);
      }
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop with standard performance.now()
    let animationFrameId: number;
    let lastTime = performance.now();
    const startTime = performance.now();

    const animate = (currentTime: number = performance.now()) => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;
      const elapsed = (currentTime - startTime) / 1000;

      // Ambient cinematic rotations
      coreMesh.rotation.y += delta * 0.35;
      coreMesh.rotation.x += delta * 0.18;
      latticeMesh.rotation.y = coreMesh.rotation.y;
      latticeMesh.rotation.x = coreMesh.rotation.x;

      ring1Mesh.rotation.z += delta * 0.25;
      ring2Mesh.rotation.y -= delta * 0.3;
      ring3Mesh.rotation.x += delta * 0.22;

      shardsGroup.rotation.z += delta * 0.2;
      shardsGroup.rotation.y += delta * 0.15;

      // Smooth vertical levitation
      const basePos = sculptureGroup.position.clone();
      sculptureGroup.position.y = basePos.y + Math.sin(elapsed * 1.4) * 0.05;

      // Pointer tracking dampening
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      sculptureGroup.rotation.y = targetX + elapsed * 0.08;
      sculptureGroup.rotation.x = -targetY;

      renderer?.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);

      coreGeo.dispose();
      coreMat.dispose();
      latticeMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      shardGeo.dispose();
      shardMatCyan.dispose();
      shardMatLime.dispose();

      if (renderer) {
        renderer.dispose();
        if (renderer.domElement.parentElement) {
          renderer.domElement.parentElement.removeChild(renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Three.js Full-Bleed Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full"
        aria-label="3D Futuristic Kinetic Reactor Sculpture representing Tekno Kraft 2026"
        role="img"
      />

      {/* WebGL Graceful Fallback */}
      {!webglSupported && (
        <div className="absolute right-10 top-1/2 -translate-y-1/2 w-80 h-80 border border-cyan-laser/30 rounded-2xl bg-surface/80 p-8 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 border-2 border-cyan-laser rotate-45 flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-lime-accent/30" />
          </div>
          <span className="font-display font-bold text-lg text-white-soft">TEKNO KRAFT CORE</span>
          <span className="text-xs font-mono text-cyan-laser mt-1">GDG ITER · SOA 2026</span>
        </div>
      )}
    </div>
  );
};
