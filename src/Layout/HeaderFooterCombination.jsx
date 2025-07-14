import React from 'react'
import Header from './Header'
import Footer from './Footer'
Footer
function HeaderFooterCombination() {
  return (
    <div>
<Header/>
<slot/>
<Footer/>
    </div>
  )
}

export default HeaderFooterCombination