'use client'

import { PagesRoutsEnum } from "@/entities/pages/store/constants";
import { permanentRedirect } from 'next/navigation'

export default function Home() {
  permanentRedirect(`${PagesRoutsEnum.page1}`);  
}
