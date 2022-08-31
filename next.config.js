/** @type {import('next').NextConfig} */
module.exports = {
  i18n: {
    locales: ["en-US", "es", "pt", "ru"],
    defaultLocale: "en-US",
    localeDetection: false,
  },
  env: {
    SALUDO: "Hello World",
    LOGINUSR: "'http://api.myadultfan.com/auth/login/email",
    GOOGLE_CLIENT_ID: "241184011590-0bgo4f2vptblme0siit2v8hk6e8pn9s6.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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"
  },
  images: {
    domains: [
      "randomuser.me",
      "i.imgur.com",
      "upload.wikimedia.org",
      "restcountries.eu",
      "flagcdn.com",
      "myadultfan.destinysoftware.com.co",
      "myadultfan.s3.amazonaws.com",
      "my-adult-fan-dev.s3.amazonaws.com"
    ],
  },
  
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: "http://myadultfan.destinysoftware.com.co",
    // process.env.NODE_ENV === 'development'
    //   ? 'http://localhost:8080' // development api
    //   : 'http://localhost:3000/api', // production api
  },
};
