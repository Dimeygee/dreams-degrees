import "@fontsource/paytone-one"
import '../styles/globals.css'
import { motion, AnimatePresence  } from "framer-motion"
import Layout from "../components/layout"

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial={{ opacity: 0  }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Layout>
            <Component {...pageProps} />
        </Layout> 
      </motion.div>
  </AnimatePresence>
  
)
}

export default MyApp
