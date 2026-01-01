import { notFound, redirect } from 'next/navigation'

import { catelogs } from '../list'

export default async function SnippetCatelogPage(props: { params: Promise<{ catelog: string }> }) {
  const { catelog: catelogKey } = await props.params
  const catelog = catelogs.find(item => item.key === catelogKey)

  if (!catelog || !catelog.article) {
    return notFound()
  }

  return redirect(`/snippet/${catelogKey}/${catelog.article[0].key}`)
}
