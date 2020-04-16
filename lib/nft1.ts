import BN from 'bignumber.js';
import {
  createOpReturnGenesis,
  createOpReturnMint,
  createOpReturnSend
} from './util';

export default {
  Group: {
    genesis: (
      ticker:        string|Buffer,
      name:          string|Buffer,
      documentUrl:   string|Buffer,
      documentHash:  string|Buffer,
      decimals:      number,
      mintBatonVout: number|null,
      quantity:      BN
    ): Buffer => createOpReturnGenesis(
      0x81,
      ticker,
      name,
      documentUrl,
      documentHash,
      decimals,
      mintBatonVout,
      quantity
    ),

    mint: (
      tokenIdHex:    string|Buffer,
      mintBatonVout: number|null,
      quantity:      BN
    ): Buffer => createOpReturnMint(
      0x81,
      tokenIdHex,
      mintBatonVout,
      quantity
    ),

    send: (
      tokenIdHex: string|Buffer,
      slpAmounts: BN[]
    ): Buffer => createOpReturnSend(
      0x81,
      tokenIdHex,
      slpAmounts,
    ),
  },
  Child: {
    genesis: (
      ticker:        string|Buffer,
      name:          string|Buffer,
      documentUrl:   string|Buffer,
      documentHash:  string|Buffer
    ): Buffer => createOpReturnGenesis(
      0x41,
      ticker,
      name,
      documentUrl,
      documentHash,
      0,
      null,
      new BN(1)
    ),

    send: (
      tokenIdHex: string|Buffer,
      slpAmount: BN
    ): Buffer => createOpReturnSend(
      0x41,
      tokenIdHex,
      [slpAmount],
    ),
  }
};
