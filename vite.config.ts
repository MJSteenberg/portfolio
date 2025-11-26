import { defineConfig } from 'vite'
import { resolve } from 'path'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'
const base = isGitHubActions && repoName ? `/${repoName}/` : '/'
const inputs = {
  main: resolve(__dirname, 'index.html'),
  happyCustomers: resolve(__dirname, 'happy-customers.html')
}

export default defineConfig({
  base,
  build: {
    rollupOptions: {
      input: inputs
    }
  }
})

