// @flow strict

import React, { type Node } from 'react';

import { useContact } from '../hooks/use-contact';

export type OmqContactOptions = {
  analyze?: string,
  submit?: string,
  enableCookies?: boolean,
};

/**
 * Type for component properties.
 */
type OmqContactIntegrationProps = {
  account: string,
  apiKey: string,

  options: ?OmqContactOptions,
};

/**
 * Renders integration snippet and includes contact hook to
 * load/update OMQ contact client.
 *
 * @param {OmqContactIntegrationProps} props - Component properties
 *
 * @since 1.0.0
 *
 * @returns {Node}
 */
export function OmqContactIntegration(props: OmqContactIntegrationProps): Node {
  const { account, apiKey, options } = props;
  const { analyze, submit, enableCookies } = options || {};

  useContact(account, apiKey);

  // render contact element
  return (
    <div
      id="omq-contact-container"
      data-omq-contact-account={account}
      data-omq-contact-api-key={apiKey}
      data-omq-contact-analyze={analyze}
      data-omq-contact-submit={submit}
      data-omq-contact-cookie-enabled={enableCookies || false}
    />
  );
}
