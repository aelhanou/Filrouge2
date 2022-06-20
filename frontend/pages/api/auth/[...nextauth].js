import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';

const loginWithGoogle = async (idToken) => {

    const res = await axios.post('http://localhost:5000/loginWithGoogle', {
        idToken,
    });

    console.log(res.data.error);
    if (res.data.error) {
        throw res.data.error;
    }
    console.log(res.data);
    return res.data;

 
}







export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'credentials',
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        idToken: {
          label: 'Google ID Token',
          placeholder: 'Google ID Token',
          type: 'text',
        },
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'jsmith@example.com',
        },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        if (credentials.idToken) {
          const { user, token } = await loginWithGoogle(credentials.idToken);
          console.log(user, token);
          if (!user || !token) throw new Error('Invalid credentials');
          return {
            user,
            token
          }
        }
        const payload = {
          email: credentials.email,
          password: credentials.password,
        };

        const res = await fetch('http://localhost:5000/login', {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en-US',
          },
        });

        const user = await res.json();
        // if (!res.ok) {
        //   throw new Error(user.exception);
        // }
        // // If no error and we have user data, return it
        if (user.user && user.token) {
          return {
            user: user.user,
            token: user.token,
          };
        }

        // // Return null if user data could not be retrieved
        // return null;
      },
    }),
    // ...add more providers here
  ],
  secret: 'zer0',
  pages: {
    signIn: '/AuthPage/login',
  },
  callbacks: {
    async jwt({ user, token }) {

      if (user) {
        return {
          token: user.token,
          ...user,
        };
      }

      return token;
    },

    async session({ session, token }) {
      console.log('inside session', session, token);
      session.user.accessToken = token.token;
      session.user.user = token.user;
      return session;
    },
  },
});