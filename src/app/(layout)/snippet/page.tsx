import { BackgroundImage } from '@mantine/core'

export default function SnippetPage() {
  return (
    <BackgroundImage
      w="100%"
      h="100%"
      src={require('@/assets/pattern/shattered-island.gif').default.src}
      radius="md"
      className="[background-size:600px] bg-repeat shadow"
      px={24}
      py={16}
    ></BackgroundImage>
  )
}
