import React from 'react'
import {connect} from 'react-redux'
import {fetchVetsThunk} from '../store'

const SingleVet = props => {
  const currVet = props.allVets.filter(
    vet => vet.id === props.match.params.vetId
  )[0]
  console.log(props.allVets)
  return <div>{props.match.params.vetId}</div>
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
