import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchVetsThunk} from '../store'

class Vets extends Component {
  componentDidMount() {
    this.props.loadAllVets()
  }
  render() {
    return this.props.allVets.map(vet => (
      <div key={vet.id}>
        <img src={vet.imgUrl} alt={vet.name} />
        <p>Name: {vet.name}</p>
        <p>Location: {vet.location}</p>
      </div>
    ))
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
