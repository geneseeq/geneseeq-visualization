//import { connect } from 'react-redux'
import { setPatientName } from '../actions'
import PatientSelectList from '../components/patientSelectList'


commonjs({
    namedExports: {
	'node_modules/react-redux/index.js': [ 'connect' ],	
    }
})

const mapStateToProps = (state) => {
    return state.data.patientDates.keys
}

const mapDispatchToProps = (dispatch) => {
    return {
	onPatientChange: (name) => {
	    dispatch(setPatientName(name))
	}
    }
}

const SelectedPatient = connect(
    mapStateToProps,
    mapDispatchToProps
)(PatientSelectList)

export default SelectedPatient
