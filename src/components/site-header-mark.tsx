"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

export function SiteHeaderMark() {
  const { theme } = useTheme()
  const logoSrc = theme == "dark" ? "/brand/brand_dark.png" : "/brand/brand_light.png";
  
  return (
    <Image src={logoSrc} alt="logo" height={'50'} width={50} />
  )
}
