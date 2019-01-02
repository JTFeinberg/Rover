import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchVetsThunk} from '../store'

class SingleVet extends Component {
  componentDidMount() {
    this.props.loadAllVets()
  }
  render() {
    const currVet = this.props.allVets.filter(
      vet => vet.id === this.props.match.params.vetId
    )[0]
    return <div>{currVet.name}</div>
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
export default connect(mapStateToProps, mapDispatchToProps)(SingleVet)
