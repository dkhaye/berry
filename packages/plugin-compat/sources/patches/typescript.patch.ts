let patch: string;

export function getPatch() {
  if (typeof patch === `undefined`)
    patch = require(`zlib`).brotliDecompressSync(Buffer.from(`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`, `base64`)).toString();

  return patch;
}
