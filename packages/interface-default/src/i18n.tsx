import React from 'react'

export interface Messages {
  [key: string]: React.ReactNode | React.ComponentType<any>
  'consent-manager.integration.default.company'?: React.ComponentType<{
    IntegrationLabel: React.ComponentType<any>
  }>
  'consent-manager.integration.default.category'?: React.ComponentType<{
    category: string
  }>
  'consent-manager.integration.default.title'?: React.ComponentType<{
    title: string
  }>
  'consent-manager.integration.default.description'?: React.ComponentType<{
    description: string
    PrivacyPolicyLink: React.ComponentType<any>
  }>
  'consent-manager.integration.default.privacy-policy'?: React.ComponentType<{
    Link: React.FC<any>
    title: string
  }>
  'consent-manager.fallback.default.description'?: React.ComponentType<{
    IntegrationLabel: React.ComponentType<any>
    category: string
    title: string
  }>
  'consent-manager.fallback.default.enable'?: React.ComponentType<{
    category: string
    title: string
  }>
}

export const defaultMessages: Messages = {
  // General
  'consent-manager.close': 'close',

  // Intro
  'consent-manager.introduction.title': 'Data protection enabled',
  'consent-manager.introduction.description':
    'Some Website features are disabled to protect your privacy.',
  'consent-manager.introduction.learn-more': 'Learn more',
  'consent-manager.introduction.enable-all': 'Enable all features',

  // Form
  'consent-manager.form.headline': 'Website Features and Cookies',
  'consent-manager.form.description': () => (
    <>
      <p>
        By default third party features are disabled to protect your privacy.
      </p>
      <p>
        To view third-party content, you first have to accept their specific
        terms and conditions. This includes their cookie policies, which can
        change anytime and which we have no control over.
        <br />
        But if you do not view this content, no third-party cookies are
        installed on your device.
      </p>
      <p>
        By activating the features you agree to the providers' terms of use and
        their cookie policy. You can opt out at any time.
      </p>
    </>
  ),
  'consent-manager.form.reset': 'reset defaults',
  'consent-manager.form.enable-all': 'enable all features',
  'consent-manager.form.disable-all': 'disable all features',
  'consent-manager.form.save': 'save and close',

  // Fallback component
  'consent-manager.fallback.default.title': 'Recommended external content',
  'consent-manager.fallback.default.description': ({ IntegrationLabel }) => (
    <>
      <p>
        This feature contains content by <IntegrationLabel />
      </p>
      <p>
        To view this third-party content, you first have to accept their
        specific terms and conditions.
      </p>
      <p>This includes their cookie policies, which we have no control over.</p>
    </>
  ),
  'consent-manager.fallback.default.enable': ({ category, title }) => (
    <>
      Enable {category} by {title}
    </>
  ),
  'consent-manager.fallback.default.learn-more': 'Learn more',

  // Integration Default
  'consent-manager.integration.default.company': ({ IntegrationLabel }) => (
    <>
      by <IntegrationLabel />
    </>
  ),
  'consent-manager.integration.default.category': ({ category }) => (
    <>{category}</>
  ),
  'consent-manager.integration.default.title': ({ title }) => <>{title}</>,
  'consent-manager.integration.default.description': ({
    description,
    PrivacyPolicyLink,
  }) => (
    <p>
      {description}
      <br />
      <PrivacyPolicyLink />
    </p>
  ),
  'consent-manager.integration.default.privacy-policy': ({ Link, title }) => (
    <Link>Privacy Policy by {title}</Link>
  ),
}
