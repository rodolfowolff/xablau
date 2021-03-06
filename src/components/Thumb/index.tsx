import Link from 'next/link'

import { Wrapper, Tag, Preview } from './styles'

export type ThumbSizes = 'large' | 'normal' | 'small'
export type ThumbOrientations = 'landscape' | 'portrait'

type ThumbType = {
  tagText: string[] | string
  slug: string
  description?: string
  backgroundURL: string
  size: ThumbSizes
  orientation: ThumbOrientations
  pagePath: string
}

export const Thumb = ({
  tagText,
  description,
  backgroundURL,
  size,
  orientation,
  slug,
  pagePath,
}: ThumbType) => (
  <Link href={pagePath} passHref>
    <Wrapper
      size={size}
      orientation={orientation}
      bg={backgroundURL ? backgroundURL : ''}
      aria-labelledby={description ? slug : ''}
      aria-hidden={!description && 'true'}
    >
      <Tag size={size}>{tagText}</Tag>
      {description && (
        <Preview size={size} id={slug}>
          {description}
        </Preview>
      )}
    </Wrapper>
  </Link>
)
