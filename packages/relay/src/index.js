function base64(i) {
  return Buffer.from(i, 'ascii').toString('base64');
}

function unbase64(i) {
  return Buffer.from(i, 'base64').toString('ascii');
}


/**
* Takes type, id and returns a global id unique to type name.
*/
export function toRelayID(type, id) {
    return base64([type, id].join(':'));
}

/**
* Takes globalid and returns type, id from globalID spec.
*/
export function fromRelayID(relayID) {
  const unbasedRelayID = unbase64(relayID);
  const delimiterPos = unbasedRelayID.indexOf(':');
  return {
    type: unbasedRelayID.substring(0, delimiterPos),
    id: unbasedRelayID.substring(delimiterPos + 1)
  };
}
