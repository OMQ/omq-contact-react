// @flow strict

import React, { type Node } from 'react';

import {
  OmqContactIntegration,
  type OmqContactOptions,
} from './omq-contact-integration';

/**
 * Type for component properties.
 */
type OmqContactProps = {
  // Name/URL of account
  account: string,

  // OMQ Contact API key
  apiKey: string,

  options?: OmqContactOptions,
};

/**
 * Render OMQ Contact integration if all
 * passed properties are valid.
 *
 * @param {OmqContactProps} props - Component properties
 *
 * @returns {Node}
 */
export function OmqContact(props: OmqContactProps): Node {
  const { account, apiKey, options } = props;

  if (account == null || account === '' || apiKey == null || apiKey === '') {
    console.error(
      'OMQ Contact: Account and/or API key is missing. Please check the integration of OMQ Contact component.',
      '\nAdd your account and API key as props to the component: <OMQContact account="ACCOUNT_NAME" apiKey="CONTACT_API_KEY" />',
    );
    return null;
  }

  return (
    <OmqContactIntegration
      account={account}
      apiKey={apiKey}
      options={options}
    />
  );
}
