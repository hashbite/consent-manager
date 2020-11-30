/** @jsxImportSource @emotion/react */
import React, { useCallback } from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'

import { useDecision } from '@techboi/privacy-manager'

import { FiYoutube, FiSettings } from 'react-icons/fi'

import { useTranslation } from 'react-i18next'

// TODO: p-content-gap
const PrivacyShieldWrapper = styled.div`
  ${tw`
    w-full
    p-content-gap
    text-center
    border border-solid border-4 border-gray-800
    bg-gray-700 text-white`}
`

const PrivacyShieldIcon = styled.div`
  ${tw`text-4xl`}
`
const PrivacyShieldTitle = styled.h3`
  ${tw`text-base text-current`}
`
const PrivacyShieldDescription = styled.p``
const PrivacyShieldAlternative = styled.p`
  ${tw`text-sm`}
`

const PrivacyShieldButton = styled.button`
  &:focus {
    outline: none;
    ${tw`underline`}
  }
`

const PrivacyShieldLink = styled.a`
  ${tw`text-current underline hover:no-underline hover:text-current`}
`

interface PrivacyShieldProps {
  id: string
  fallbackUrl?: string
}

// TODO(ts): add to config:
// * icon: ComponentType
// * title: string

export const PrivacyShield: React.FC<PrivacyShieldProps> = ({
  id,
  fallbackUrl = '',
  children
}) => {
  const { t } = useTranslation()
  const isEnabled = useDecision(id)
  // const integration = useIntegration(id)
  // const { id, category, title, url = '#', icon, description } = config
  const title = id
  const description = "some description"
  const url = '#'

  const openPrivacyManager = useCallback(() => {
    console.log('privacy shield button clicked')
  }, [])

  if (!isEnabled) {
    return (
      <PrivacyShieldWrapper>
        <PrivacyShieldIcon>
          {/* TODO: this should come from component */}
          <FiYoutube />
        </PrivacyShieldIcon>
        <PrivacyShieldTitle>{title}</PrivacyShieldTitle>
        <PrivacyShieldDescription>
          <strong>{t('privacyShieldIntro', { title })}</strong>
        </PrivacyShieldDescription>
        <PrivacyShieldDescription>{t(description)}</PrivacyShieldDescription>
        <PrivacyShieldDescription>
          <PrivacyShieldLink href={url} target='_blank' rel='noreferrer'>
            {t('privacyShieldLearnMore', { title })}
          </PrivacyShieldLink>
        </PrivacyShieldDescription>
        <PrivacyShieldDescription>
          <PrivacyShieldButton onClick={openPrivacyManager}>
            <FiSettings /> Change privacy settings
          </PrivacyShieldButton>
        </PrivacyShieldDescription>
        {fallbackUrl && (
          <PrivacyShieldAlternative>
            Alternative:
            <br />
            Visit{' '}
            <PrivacyShieldLink
              href={fallbackUrl}
              target='_blank'
              rel='noreferrer'
            >
              {fallbackUrl}
            </PrivacyShieldLink>
          </PrivacyShieldAlternative>
        )}
      </PrivacyShieldWrapper>
    )
  }
  return <>{children}</>
}
