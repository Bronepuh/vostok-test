import { useEffect } from 'react';
import { itemsStore } from '../items/store/itemsStore';
import { IItem } from '../items/store/types'
import './modal.css'
import { useParams } from 'next/navigation';

interface IModal {
  item: IItem
}

export function Modal({ item }: IModal) {
  const { fetchItem, chosenItem } = itemsStore();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetchItem(id as string)
  }, [fetchItem, id])

  if (!chosenItem) {
    return null
  }

  return (
    <div className="modal-wrapper">
      <aside className="profile-card">
        <header>
          <h1>
            @bronepuh
          </h1>
          <h2>
            тестовое задание
          </h2>
        </header>
        <div className="profile-bio">
          <p>
            {chosenItem.name || 'Ошибка...'}
          </p>
          <h2>
            {chosenItem.text || 'такого элемента нет...'}
          </h2>
        </div>
      </aside>
    </div>
  )
}