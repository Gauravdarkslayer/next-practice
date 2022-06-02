import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(Component);
  if(Component.getLayout){
    return Component.getLayout(<Component {...pageProps} />)
  } else {
    return (
      <>
      <Header/>
        <Component {...pageProps} />
      <Footer/>
      </>
    )
  }
  
}

export default MyApp
