import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";
import { dbConnect } from "@/lib/dbConnect";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({

      name: 'Credentials',

      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {

        const userCollection = dbConnect('users')

        const user = await userCollection.findOne({ email: credentials.email })
        console.log('next-auth authorize - user lookup:', user)

        if (!user) {
          return null
        }

        const isPasswordOk = await bcrypt.compare(credentials.password, user.password)

        if (isPasswordOk) {
          return {
            id: user._id?.toString() || user._id,
            email: user.email,
            name: user.name,
            image: user.image
          }
        }

        // Return null if user data could not be retrieved
        return null
      }
    })
    // ...add more providers here
  ],


  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async session({ session, token }) {
      // Attach user info to session
      if (session.user) {
        session.user.id = token.id;
        session.user.email = token.email;
      }
      return session;
    },
    async jwt({ token, user }) {
      // Attach user info to token
      if (user) {
        token.id = user._id || user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    }

  }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }