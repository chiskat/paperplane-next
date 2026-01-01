import { createId } from '@paralleldrive/cuid2'

import { publicUpload } from '@/lib/s3-public'
import { router } from '@/lib/trpc'

async function uploadResourceIcon(file: File): Promise<string> {
  return publicUpload(`/resource/icon/${createId()}`, Buffer.from(await file.arrayBuffer()), {
    mime: file.type,
  }).then(res => res.fileUrl)
}

export const awesome = router({})
