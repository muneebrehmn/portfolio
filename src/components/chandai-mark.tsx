"use client"
import { useTheme } from "next-themes";
import Image from "next/image";

export function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  const {theme} = useTheme()
 const logoSrc = theme == "dark" ? "/brand/brand_dark.png" : "/brand/brand_light.png";
  return (
    <Image src={logoSrc} alt="logo" height={'200'} width={200}/>
    );
}

export function getMarkSVG(color: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 256 128"><path fill="${color}" d="M96 128H32V96h64v32ZM224 32h-64v64h64v32h-96V0h96v32ZM32 96H0V32h32v64ZM256 96h-32V32h32v64ZM96 32H32V0h64v32Z"/></svg>`;
}
