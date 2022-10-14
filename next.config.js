const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      swcMinify: true,
      env: {
        mongodb_username: 'clem',
        mongodb_password: 'testtest',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'final_dev'
      }
    }
  }

  return {
    reactStrictMode: true,
    swcMinify: true,
    env: {
      mongodb_username: 'clem',
      mongodb_password: 'testtest',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'final'
    }
  }

}

module.exports = nextConfig
