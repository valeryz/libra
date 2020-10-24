// Copyright (c) The Libra Core Contributors
// SPDX-License-Identifier: Apache-2.0

#![forbid(unsafe_code)]

use libra_crypto::ed25519::Ed25519PublicKey;
use libra_types::account_address::AccountAddress;

/// ValidatorHandle associates a validator with a key name and public key version.
/// In contrast to a ValidatorSigner, ValidatorHandle does not hold the private
/// key directly but rather holds a reference to that private key which should be
/// accessed using the handle and a secure storage backend.
pub struct ValidatorHandle {
    author: AccountAddress,
    key_name: String,
    key_version: Ed25519PublicKey,
}

impl ValidatorHandle {
    pub fn new(author: AccountAddress, key_name: String, key_version: Ed25519PublicKey) -> Self {
        ValidatorHandle {
            author,
            key_name,
            key_version,
        }
    }

    /// Returns the author associated with this handle.
    pub fn author(&self) -> AccountAddress {
        self.author
    }

    /// Returns the key name associated with this handle.
    pub fn key_name(&self) -> String {
        self.key_name.clone()
    }

    /// Returns the public key version associated with this handle.
    pub fn key_version(&self) -> Ed25519PublicKey {
        self.key_version.clone()
    }
}
