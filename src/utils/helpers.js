// @flow strict

/**
 * Path of OMQ Contact client file.
 *
 * @type {string}
 */
const CONTACT_FILE_PATH = '/contact/contact.min.js';

/**
 * ID of script tag.
 *
 * @type {string}
 */
const SCRIPT_TAG_ID = 'omqContactClientScript';

/**
 * Return URL of contact file, depending on
 * passed account name.
 *
 * @param {string} account - Name/URL of account
 *
 * @returns {string} URL of contact client file
 */
export function getScriptURL(account: string): string {
  // if account URL was passed
  if (account.match('https://|http://')) {
    // return url with file name
    return account + CONTACT_FILE_PATH;
  } else {
    // if passed as name, return default url with account
    // sub-domain and  file name
    return `https://${account}.omq.io${CONTACT_FILE_PATH}`;
  }
}

/**
 * Add script tag for contact client script.
 *
 * @param {string} account - Name/URL of account
 */
export function loadOmqContactClient(account: string): void {
  // check if script tag has been added already
  if (document.getElementById(SCRIPT_TAG_ID) != null) {
    return;
  }

  // get url of file
  const url = getScriptURL(account);

  // create script tag
  const script = document.createElement('script');
  script.src = url;
  script.type = 'text/javascript';
  script.id = SCRIPT_TAG_ID;

  // add script tag to head
  const head = document.querySelector('head');
  if (head != null) {
    head.appendChild(script);
  }
}
