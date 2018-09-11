
  import React from 'react'
  import PropTypes from 'prop-types'
  import Router, {withRouter} from 'next/router'
  import {connect} from 'react-redux'

  class Index extends React.Component {
    constructor(props) {
      super(props);
    }

  componentDidUpdate(prevProps) {
    const { pathname, query } = this.props.router
    // verify props have changed to avoid an infinite loop
    if (query.index !== prevProps.router.query.index) {
      console.log('index changed to ' + query.index);
    }
  }

  onClick1 = () => {
    const href = '/?index=1'
    const as = href
    Router.push(href, as, { shallow: true })
  }

  onClick2 = () => {
    const href = '/?index=2'
    const as = href
    Router.push(href, as, { shallow: true })
  }

  render() {
    return (  
      <div className='hello'>
      <p>Hello World</p>
      <button onClick={this.onClick1}>&index=1</button>
      <button onClick={this.onClick2}>&index=2</button>
      <style jsx>{`
        .hello {
          font: 15px Helvetica, Arial, sans-serif;
          background: #eee;
          padding: 100px;
          text-align: center;
          transition: 100ms ease-in background;
        }
        .hello:hover {
          background: #ccc;
        }
      `}</style>
      </div>
    )
  }
}


export default withRouter(connect()(Index)); //works

// export default connect()(withRouter(Index)); //doesn't