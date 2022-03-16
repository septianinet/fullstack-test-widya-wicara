import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const providers = [
  CredentialProvider({
    name: 'Credentials',
    authorize: async (credentials) => {
      try {
        const user = await axios.post('http://localhost:3010/auth/login', {
          email: credentials.email,
          password: credentials.password
        })
        if (user) {
          return user.data
        } 
      } catch (error) {
        const errorMessage = error.response.data.message
        throw new Error(errorMessage + '&email=' + credentials.email)
      }
    }
  })
]

const callbacks = {
  async jwt({ token, user, account, profile, isNewUser }) {
    if (user) {
      token.jwt = user.jwt;
      token.user = user.user;
      token.accessToken = user?.accessToken;
    }
    return Promise.resolve(token);
  },

  async session({ session, token }) {
    session.jwt = token.jwt;
    session.accessToken = token.accessToken ? token.accessToken :
    session.user = token.user ? token.user : session.user; 
    return Promise.resolve(session);
  }
}

const options = {
  providers,
  callbacks,
  pages: {
    signIn: '/auth/login',
    error: '/auth/login' // Changing the error redirect page to our custom login page
  },
  secret: process.env.JWT_SECRET_KEY,
}

export default (req, res) => NextAuth(req, res, options)