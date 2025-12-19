import mitt from 'mitt'
import { create } from 'zustand'

interface UseAwesome {
  edit: boolean
  setEdit(edit: boolean): void

  catelogExpand: boolean
  setCatelogExpand(expand: boolean): void

  search: string
  setSearch(search: string): void
}

export const useAwesome = create<UseAwesome>()(set => ({
  edit: false,
  setEdit: edit => void set({ edit }),

  catelogExpand: false,
  setCatelogExpand: expand => void set({ catelogExpand: expand }),

  search: '',
  setSearch: (search: string) => void set({ search }),
}))

export const awesomeScrollIntoViewEmitter = mitt<{ selectId: string }>()
