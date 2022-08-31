import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import CredentialsProvider from "next-auth/providers/credentials";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const baseUrl = `${publicRuntimeConfig.apiUrl}`;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    TwitterProvider({
      clientId: "oTmg7AiSTAgaQunPzYynsryOq",
      clientSecret: "kElk6ZdUAouztN8zqVB0jOjeVpwYSPZuwMQjzoROMdTxETxz2K",
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    CredentialsProvider({
      name: "Credentials",
      authorize: async (credentials) => {
        try {
          // Authenticate user with credentials
          const user = await fetch(baseUrl + "/auth/login/email", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              password: credentials.password,
              email: credentials.email,
            }),
          });

          if (user.data.token) {
            return user.data;
          }

          return null;
        } catch (e) {
          throw new Error(e);
        }
      },
    }),
  ],
});
