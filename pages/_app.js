import { useEffect, useState } from 'react';
import { Provider } from 'react-redux'
import { useStore } from '../src/redux/store'
import { useRouter } from 'next/router';
import { animated, Transition } from "react-spring";

import { FooterCpn, HeaderCpn, Loading, MetaTag } from 'src/components/elements';
import '../src/styles/index.scss'
import NavProvider from 'src/context/NavContext';

import TagManager from "react-gtm-module";


export default function App({ Component, pageProps }) {
  const [isLoading, setLoading] = useState(true)
  const store = useStore(pageProps.initialReduxState)
  const router = useRouter();
  const items = [
    {
      id: router.route,
      Component,
      pageProps,
    },
  ];

  useEffect(() => {
    setLoading(false)
    // TagManager.initialize({ gtmId: process.env.GOOGLE_TAG_MANAGER_ID });
  }, []);

  return (
    <Provider store={store}>
      {isLoading && <Loading />}
      <MetaTag />
      <NavProvider>
        <HeaderCpn isHomepage={router.route === '/' ? true : false} />
        <main className={`main ${router.route === '/' ? 'main-home' : 'main-children'}`}>
          <Transition
            items={items}
            keys={(item) => item.id}
            initial={{ top: 0, opacity: 0 }}
            from={{ top: -20, opacity: 0, position: "relative" }}
            enter={{ top: 0, opacity: 1, position: "relative" }}
            trail={300}
          >
            {(
              styles,
              { pageProps: animatedPageProps, Component: AnimatedComponent },
              key
            ) => (
              <animated.div
                style={{
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <AnimatedComponent {...animatedPageProps} />
              </animated.div>
            )}
          </Transition>
        </main>
      </NavProvider>
      <FooterCpn />
    </Provider>
  )
}
