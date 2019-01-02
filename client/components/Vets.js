import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchVetsThunk} from '../store'

class Vets extends Component {
  componentDidMount() {
    this.props.loadAllVets()
  }
  render() {
    return (
      <div className="vets-container">
        {this.props.allVets.map(vet => (
          <div key={vet.id} className="vet-card">
            <Link to={`/vets/${vet.id}`}>
              <img src={vet.imgUrl} alt={vet.name} />
              <p>Name: {vet.name}</p>
              <p>Location: {vet.location}</p>
            </Link>
          </div>
        ))}
      </div>
    )
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
