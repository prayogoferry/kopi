import React from 'react'
import './../supports/css/PageNotFound.css'

class PageNotFound extends React.Component{
    render(){
        return(
            <div id="notfound">
            <div className="notfound">
              <div className="notfound-404" style={{marginTop: '-40px'}}>
                <h1>Oops!</h1>
              </div>
              <h2>404 - maaf anda tersasar</h2>
              <p></p>
              <a href="/">Go To Homepage</a>
            </div>
          </div>
        )
    }
}

export default PageNotFound