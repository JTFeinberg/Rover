import React from 'react'
import {connect} from 'react-redux'
import {fetchVetsThunk} from '../store'

class SingleVet extends Component {
  render() {
    const currVet = this.props.allVets.filter(
      vet => vet.id === this.props.match.params.vetId
    )[0]
    return <div>{this.props.match.params.vetId}</div>
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
