// inspired by relay package

export function base64(i: string): Base64String {
  return Buffer.from(i, 'ascii').toString('base64');
}

export function unbase64(i: Base64String): string {
  return Buffer.from(i, 'base64').toString('ascii');
}


/**
* Takes type, id and returns a global id unique to type name.
*/
export function toRelayID(type: string, id: string | number): string {
    return base64([type, id].join(':'));
}

/**
* Takes globalid and returns type, id from globalID spec.
*/
export function fromRelayID(relayID: string) {
  const unabsedRelayID = unbase64(relayID);
  const delimiterPos = unbasedRelayID.indexOf(':');
  return {
    type: unbasedRelayID.substring(0, delimiterPos),
    id: unbasedRelayID.substring(delimiterPos + 1),
  };
}
