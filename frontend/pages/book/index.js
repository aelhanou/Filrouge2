// import { useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic'
// // dynamic import 




// export default function Book() {
//   const viewer = useRef(null);

//   useEffect(() => {
//     import('@pdftron/webviewer').then(() => {
//       WebViewer(
//         {
//           path: '/webviewer/lib',
//           initialDoc: '../../the_brothers_grimm_fairy_tales.pdf',
//         },
//         viewer.current
//       ).then((instance) => {
//         const { docViewer } = instance;
//         // you can now call WebViewer APIs here...
//       });
//     });
//   }, []);

//   return (
//     <div className='MyComponent'>
//       <div className='webviewer' ref={viewer} style={{ height: '100vh' }}></div>
//     </div>
//   );
// }


import { getSession } from 'next-auth/react'
import React from 'react'

export default function Book() {
    return (
        <div>book page</div>
    )
}




export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req })
    //redirection 
    if (!session) {
      return {
        redirect: {
          permanent: false,
          destination: "/AuthPage/login"
        }
      }
    }
    // const router = useRouter()
    // if (!session) {
    //   router.push('/AuthPage/login')
    // }
    return {
      props: {
        session
      }
    }
  }
  