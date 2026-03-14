"use client";

import { useEffect } from "react";

type Emoji = {
  id: number;
  x: number;
  y: number;
  emoji: string;
};

const EMOJIS = ["🔥", "📚", "✨", "🚀", "💡", "⭐"];

export default function CursorEmojiTrail() {
  useEffect(() => {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.top = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    let id = 0;

    const handleMove = (e: MouseEvent) => {
      const span = document.createElement("span");
      span.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      span.style.position = "absolute";
      span.style.left = `${e.clientX}px`;
      span.style.top = `${e.clientY}px`;
      span.style.fontSize = "18px";
      span.style.opacity = "1";
      span.style.transform = "translate(-50%, -50%)";
      span.style.transition = "all 0.8s ease-out";

      container.appendChild(span);

      requestAnimationFrame(() => {
        span.style.transform = "translate(-50%, -80px)";
        span.style.opacity = "0";
      });

      setTimeout(() => {
        container.removeChild(span);
      }, 800);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeChild(container);
    };
  }, []);

  return null;
}