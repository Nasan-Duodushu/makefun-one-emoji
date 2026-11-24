// One Emoji, One Smile: the whole entry is exactly one emoji, the melting
// face — warm, funny, and exactly how everyone feels by Friday afternoon.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), '🫠');
