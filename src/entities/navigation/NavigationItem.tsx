'use client'

import { useCallback } from "react"

import './navigation.css'
import Link from "next/link";
import { PagesRoutsEnum } from "../pages/store/constants";
import { pagesStore } from "../pages/store/pagesStore";
import { useParams } from "next/navigation";

interface INavigationItemProps {
  index: number,
  rout: PagesRoutsEnum,
}

export function NavigationItem({ index, rout }: INavigationItemProps) {
  const { currentPage, setCurrentPage } = pagesStore();

  const params = useParams();
  const { slug } = params;

  const checkIsActive = useCallback(() => {
    setCurrentPage(rout);
  }, [setCurrentPage, rout])

  return (
    <li className={`link link-${index + 1}`} onClick={checkIsActive}>
      <Link className={`link ${`list/${slug}` === rout ? 'link--active' : ''}`} href={`/${rout}`} >
        <span>{rout}</span>
      </Link>
    </li>

  )
}