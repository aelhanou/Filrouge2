import '../styles/globals.css'
import { getSession, SessionProvider, useSession } from "next-auth/react"
import { GoogleOAuthProvider } from "@react-oauth/google";

import { Provider } from "react-redux";
import { store } from "../store";


function MyApp({ Component, pageProps }) {

  const getLayout = Component.getLayout || ((page) => page)
  return getLayout(
    <GoogleOAuthProvider clientId="1052282063202-6oco7vc7vm6lp7gvomp7bvpedtl612v1.apps.googleusercontent.com">
      <SessionProvider session={pageProps.session} >
        <Provider store={store} >
          <Component {...pageProps} />
        </Provider>
      </SessionProvider>
    </GoogleOAuthProvider>
  )
}

export default MyApp

