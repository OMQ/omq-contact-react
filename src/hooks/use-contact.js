//@flow strict

import React from 'react';

import { loadOmqContactClient } from '../utils/helpers';

// public API
// noinspection JSUnusedLocalSymbols
declare var OMQContact: {
  update: (account: string, apiKey: string) => void,
  unmountOMQContact: () => void,
};

/**
 * React hook to add/remove OMQ Contact from page.
 *
 * @param {string} account - Name/URL of account
 * @param {string} apiKey - OMQ Contact API key
 */
export function useContact(account: ?string, apiKey: ?string) {
  React.useEffect(() => {
    const { OMQContact } = window;

    // check if account & apiKey
    if (account == null || account === '' || apiKey == null || apiKey === '') {
      return;
    }

    // check if client already has been loaded
    if (OMQContact == null) {
      // load client
      loadOmqContactClient(account);
    } else {
      // update client, if already on screen
      OMQContact.update({
        account,
        apiKey,
      });
    }

    // unmount contact when component is unmounted
    return () => {
      if (OMQContact != null) {
        OMQContact.unmountOMQContact();
      }
    };
  }, [account, apiKey]);
}
