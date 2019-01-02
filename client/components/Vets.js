import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchVetsThunk} from '../store'

class Vets extends Component {
  componentDidMount() {
    this.props.loadAllVets()
  }
  render() {
    console.log(this.props.allVets)
    return <div>{this.props.allVets}</div>
  }
}

const mapStateToProps = state => {
  return {
    allVets: state.vets
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadAllVets: () => dispatch(fetchVetsThunk())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vets)
