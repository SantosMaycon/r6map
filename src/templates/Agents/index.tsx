import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import { useRouter } from 'next/dist/client/router'
import Image from 'next/image'
import React from 'react'

import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type AgentsTemplateProps = {
  agent: {
    name: string
    nickName: string
    slug: string
    org: string
    about: {
      html: string
    }
    location: {
      latitude: number
      longitude: number
    }
    birthDate: string
    birthplace: string
    avatar: ImageProps
    orgImage: ImageProps
  }
}

export default function AgentsTemplate({ agent }: AgentsTemplateProps) {
  const [info, setInfo] = React.useState(true)

  React.useEffect(() => {
    handleResize()
    function handleResize() {
      if (window.innerWidth >= 740) {
        setInfo(true)
      } else {
        setInfo(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [info])

  const router = useRouter()

  if (router.isFallback) return null

  const {
    name,
    nickName,
    org,
    birthDate,
    birthplace,
    orgImage,
    avatar,
    about
  } = agent
  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Go back to map" />
      </LinkWrapper>
      <S.Wrapper>
        <S.Container>
          <S.Heading>{nickName}</S.Heading>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image src={avatar.url} alt={nickName} width={515} height={440} />
            {info && (
              <div style={{ position: 'relative' }}>
                <div
                  style={{ position: 'absolute', top: '105px', right: '40px' }}
                >
                  <Image
                    src={orgImage.url}
                    alt={nickName}
                    width={84}
                    height={84}
                  />
                </div>
                <h3>NOME DO AGENTE</h3>
                <span>{name}</span>
                <h3>APELIDO</h3>
                <span>{nickName}</span>
                <h3>ORG</h3>
                <span>{org}</span>
                <h3>DATA DE NASCIMENTO</h3>
                <span>{birthDate}</span>
                <h3>LOCAL DE NASCIMENTO</h3>
                <span>{birthplace}</span>
              </div>
            )}
          </div>
          <S.Body dangerouslySetInnerHTML={{ __html: about.html }} />
        </S.Container>
      </S.Wrapper>
    </>
  )
}
