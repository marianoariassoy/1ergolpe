import Header from './Header'
import Footer from './Footer'
import NavBar from './NavBar'

const Layout = ({ children }) => {
  return (
    <>
      <header className='sticky top-0 z-50 mb-3 lg:mb-6'>
        <Header />
        <NavBar />
      </header>
      <main className='mx-auto px-5 max-w-4xl w-screen'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout
