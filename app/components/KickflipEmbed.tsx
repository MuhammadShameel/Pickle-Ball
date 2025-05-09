// components/KickflipEmbed.tsx
"use client";

import { useEffect, useRef } from "react";

declare global {
    interface Window {
        Kickflip?: any;
    }
}

interface KickflipEmbedProps {
    productId: string;
}

export const KickflipEmbed: React.FC<KickflipEmbedProps> = ({ productId }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadScript = async () => {
            if (!window.Kickflip) {
                const script = document.createElement("script");
                script.src = "https://embed.gokickflip.com/v1/player.js";
                script.async = true;
                script.onload = () => {
                    if (window.Kickflip && containerRef.current) {
                        window.Kickflip.loadPlayer(containerRef.current, {
                            productId: productId,
                        });
                    }
                };
                document.body.appendChild(script);
            } else {
                window.Kickflip.loadPlayer(containerRef.current, {
                    productId: productId,
                });
            }
        };

        loadScript();
    }, [productId]);

    return <div ref={containerRef} className="w-full h-[600px]" />;
};
