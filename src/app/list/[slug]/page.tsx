'use client'

import { PagesRoutsEnum } from "@/entities/pages/store/constants"
import { useEffect } from "react"
import { itemsStore } from "@/entities/items/store/itemsStore"

import styles from './page.module.scss'
import { PageTitle } from "@/entities/pageTitle/PageTitle"
import { redirect } from "next/navigation"
import Link from "next/link"
import { IItem } from "@/entities/items/store/types"

interface IListProps {
  params: {
    slug: string;
  }
}

export default function List({ params }: IListProps) {
  const { fetchItems, items } = itemsStore();

  const {slug} = params;

  console.log(params);

  useEffect(() => {
    fetchItems(`pages/${slug}` as PagesRoutsEnum);
  }, [fetchItems, slug])

  const handleItemClick = (item: IItem) => {
    redirect(`item/${item.id}`);
  }

  return (
    <>
      <PageTitle />
      <ul className={styles.wrapper}>
        {items.map((item) => {
          return (
            <li key={item.id} className={styles.item} onClick={() => handleItemClick(item)}>
              <Link href={`/item/${item.id}`}>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}