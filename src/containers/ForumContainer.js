import React from 'react'
import {connect} from 'react-redux'
import Themes from '../components/Themes'
import ThemeInput from '../components/ThemeInput'
import {fetchThemes} from '../actions/fetchThemes'
import themeReducer from '../reducers/themeReducer'

class ForumContainer extends React.Component {

state = {}
  
componentDidMount() {
    this.props.fetchThemes()
    }

  render() {
    return (
      <div>
        <ThemeInput/><br/>
        <Themes path='/themes' render={(routerProps) => <Themes {...routerProps} themes={this.props.themes}/>}/>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return {
    themes: state.themeReducer.themes
  }
}

export default connect(mapStateToProps, {fetchThemes})(ForumContainer)