"use client";
import { useState, useRef, useEffect, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

interface PaddleModelProps {
  bodyColor: string;
  gripColor: string;
  bodyImage: string;
  gripImage: string;
}

// Three.js implementation using textures
function ThreePaddleModel({
  bodyColor,
  gripColor,
  bodyImage,
  gripImage,
}: PaddleModelProps) {
  const bodyTexture = useLoader(THREE.TextureLoader, bodyImage);
  const gripTexture = useLoader(THREE.TextureLoader, gripImage);
  bodyTexture.anisotropy = 36;
  gripTexture.anisotropy = 36;

  const bodyMaterial = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      map: bodyTexture,
      transparent: true,
      alphaTest: 0.5,
    });
    mat.color.set(new THREE.Color(bodyColor));
    return mat;
  }, [bodyTexture, bodyColor]);

  const gripMaterial = useMemo(() => {
    const mat = new THREE.MeshStandardMaterial({
      map: gripTexture,
      transparent: true,
      alphaTest: 0.5,
      roughness: 0.4,
    });
    mat.color.set(new THREE.Color(gripColor));
    return mat;
  }, [gripTexture, gripColor]);

  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[3, 10]} />
        <meshStandardMaterial {...bodyMaterial} />
      </mesh>
      <mesh position={[0, -5.5, 0.1]}>
        <planeGeometry args={[1.5, 2]} />
        <meshStandardMaterial {...gripMaterial} />
      </mesh>
    </group>
  );
}

// Canvas API implementation
function CanvasPaddle({
  bodyColor,
  gripColor,
  bodyImage,
  gripImage,
}: PaddleModelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [bodyImg, setBodyImg] = useState<HTMLImageElement | null>(null);
  const [gripImg, setGripImg] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const loadImage = (
      src: string,
      callback: (img: HTMLImageElement) => void
    ) => {
      const img = new Image();
      img.src = src;
      img.onload = () => callback(img);
    };

    loadImage(bodyImage, setBodyImg);
    loadImage(gripImage, setGripImg);
  }, [bodyImage, gripImage]);

  useEffect(() => {
    if (!canvasRef.current || !bodyImg || !gripImg) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddle body with color overlay
    ctx.save();
    ctx.filter = `opacity(1) drop-shadow(0 0 0 ${bodyColor})`;
    ctx.drawImage(bodyImg, 0, 0, canvas.width, canvas.height * 0.8);
    ctx.restore();

    // Draw paddle grip with color overlay
    ctx.save();
    ctx.filter = `opacity(1) drop-shadow(0 0 0 ${gripColor})`;
    const gripHeight = canvas.height * 0.2;
    const gripY = canvas.height - gripHeight;
    ctx.drawImage(
      gripImg,
      canvas.width * 0.25,
      gripY,
      canvas.width * 0.5,
      gripHeight
    );
    ctx.restore();
  }, [bodyColor, gripColor, bodyImg, gripImg]);

  return (
    <canvas
      ref={canvasRef}
      width={400}
      height={600}
      className="w-full h-full"
    />
  );
}

interface ColorOption {
  name: string;
  value: string;
}

export default function PaddleCustomizer() {
  const [renderMethod, setRenderMethod] = useState<"threejs" | "canvas">(
    "threejs"
  );
  const [bodyColor, setBodyColor] = useState<string>("#0064ff");
  const [gripColor, setGripColor] = useState<string>("#323232");

  // Update these paths to your actual image locations
  const bodyImage = "/assets/images/paddle-body.png";
  const gripImage = "/assets/images/paddle-grip.png";

  const bodyColors: ColorOption[] = [
    { name: "Blue", value: "#0064ff" },
    { name: "Red", value: "#ff3232" },
    { name: "Green", value: "#32c832" },
    { name: "Black", value: "#000000" },
  ];

  const gripColors: ColorOption[] = [
    { name: "Black", value: "#323232" },
    { name: "White", value: "#ffffff" },
    { name: "Red", value: "#963232" },
    { name: "Blue", value: "#323296" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Customize Your Paddle</h1>

      {/* <div className="mb-4 flex gap-4">
        <button
          onClick={() => setRenderMethod("threejs")}
          className={`px-4 py-2 rounded ${
            renderMethod === "threejs"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          3D View
        </button>
        <button
          onClick={() => setRenderMethod("canvas")}
          className={`px-4 py-2 rounded ${
            renderMethod === "canvas" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          2D View
        </button>
      </div> */}

      <div className="flex flex-col md:flex-row gap-12">
        {/* Preview Area */}
        <div className="flex-1 h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
          {renderMethod === "threejs" ? (
            <Canvas
              camera={{ position: [0, 0, 15], fov: 50 }}
              gl={{ antialias: true }}
            >
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              <ThreePaddleModel
                bodyColor={bodyColor}
                gripColor={gripColor}
                bodyImage={bodyImage}
                gripImage={gripImage}
              />
              <OrbitControls
                enableZoom={true}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 1.5}
              />
            </Canvas>
          ) : (
            <CanvasPaddle
              bodyColor={bodyColor}
              gripColor={gripColor}
              bodyImage={bodyImage}
              gripImage={gripImage}
            />
          )}
        </div>

        {/* Customization Options (same as before) */}
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Paddle Body Color</h2>
            <div className="flex flex-wrap gap-3">
              {bodyColors.map((color) => (
                <button
                  key={color.name}
                  className={`w-12 h-12 rounded-full border-2 ${
                    bodyColor === color.value
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setBodyColor(color.value)}
                  aria-label={`Select ${color.name} body color`}
                />
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Paddle Grip Color</h2>
            <div className="flex flex-wrap gap-3">
              {gripColors.map((color) => (
                <button
                  key={color.name}
                  className={`w-12 h-12 rounded-full border-2 ${
                    gripColor === color.value
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setGripColor(color.value)}
                  aria-label={`Select ${color.name} grip color`}
                />
              ))}
            </div>
          </div>

          <button className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Add to Cart - $129.99
          </button>
        </div>
      </div>
    </div>
  );
}
