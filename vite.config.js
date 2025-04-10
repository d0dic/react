/* eslint-disable no-undef */
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

import path from 'node:path'

import jsconfig from './jsconfig.json'

const makePathAliasEntries = Object.entries(jsconfig.compilerOptions.paths)
  .map(([k, [v]]) => [k?.replace('/*', ''), path.resolve(__dirname, v?.replace('/*', ''))])

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: Object.fromEntries(makePathAliasEntries)
  },
  plugins: [react()],
})
