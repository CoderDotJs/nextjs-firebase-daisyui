/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
  },
  reactStrictMode: true,
  swcMinify: true,
  env: {
    apiKey: '',
    authDomain: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: '',
    appId: '',
    measurementId: '',
    devApi: 'http://localhost:3001/api/v1',
    prodApi: 'https://your-api-domain.com/api/v1',
    nodeEnv: 'development',
  },
};

module.exports = nextConfig;
