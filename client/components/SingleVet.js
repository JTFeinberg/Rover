import React from 'react'
import {connect} from 'react-redux'

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
export default connect(mapStateToProps)(SingleVet)
