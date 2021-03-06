/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

/**
 * Returns true if a value is undefined, or NaN.
 */
export default function isInvalid(value: mixed): boolean %checks {
  return value === undefined || value !== value;
}
