import { encode, decode } from 'js-base64';

// @ts-ignore
import sha1 from 'sha-1';

/**
 * base64-encode given data
 * @param data data string to be base64-encoded
 * @returns base64-encoded string
 */
export const base64Encode = (data: string) => {
  // return Buffer.from(data, 'utf-8').toString('base64');
  return encode(data);
};

/**
 * decode base64-encoded data
 * @param base64 base64 string to be decoded
 * @returns base64-decoded string
 */
export const base64Decode = (base64: string) => {
  // return Buffer.from(base64, 'base64').toString();
  return decode(base64);
};

/**
 * Generate SHA1 hash from given data
 * @param data data string for which SHA1 hash has to be generated
 * @returns SHA1 hash of the given data
 */
export const sha1Hash = (data: string) => {
  return sha1(data) as string;
};

/**
 * Create a Map from a given Array based on some field
 * Note that the items of the array should be of type `object`
 * @param arr given Array to be converted to Map
 * @param key a string field from Array items
 * @returns a map created from the array items
 */
export const arrayToMap = <T = any>(arr: T[] | null, key: string) => {
  if (!arr || !Array.isArray(arr) || !arr.length) return null;
  const map = new Map<string, T>();
  arr.forEach((item: any) => {
    if (typeof item === 'object') {
      const itemKey = item[key];
      if (itemKey && typeof itemKey === 'string') {
        map.set(itemKey, item);
      }
    }
  });
  return map.size ? map : null;
};

/**
 * Convert an array into an array of chunks of array
 * @param arr a given array
 * @param chunkSize maximum number of items in a chunk
 * @returns array of chunks of the given array
 */
export const chunkifyArray = <T = any>(arr: T[], chunkSize: number) => {
  const chunkedItems = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    chunkedItems.push(chunk);
  }
  return chunkedItems;
};
