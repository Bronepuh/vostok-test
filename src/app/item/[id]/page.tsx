'use client'

import { PagesRoutsEnum } from "@/entities/pages/store/constants"
import { useEffect } from "react"
import { itemsStore } from "@/entities/items/store/itemsStore"

import styles from './item.module.scss'
import { PageTitle } from "@/entities/pageTitle/PageTitle"
import { redirect } from "next/navigation"
import { Modal } from "@/entities/modal/Modal"
import { IItem } from "@/entities/items/store/types"

interface IItemProps {
  item: IItem
}

export default function Item({ item }: IItemProps) {
  const { fetchItems, items, chosenItem } = itemsStore();

  return (
    <Modal item={item} />
  )
}