//import { connect } from 'react-redux'
import { setPatientName } from '../actions'
import ChartBox from '../components/chartBox'


commonjs({
    namedExports: {
	'node_modules/react-redux/index.js': [ 'connect' ],	
    }
})

const getPatientData = (data, name) => {
    return {
	patientDatesList: data.patientDates[name],
	patientGenesList: data.patientGenes[name],
	patientSingleLossData: data.patientSingleLoss[name],
	patientDoubleLossData: data.patientDoubleLoss[name],
	patientGeneExpansionData: data.patientGeneExpansion[name]
    }
}

const mapStateToProps = (state) => {
    return {
	data: getPatientData(state.data, state.name)
    }
}

//const mapDispatchToProps = (dispatch) => {
//    return {
//	onSelectPatient: (name) => {
//	    dispatch(setPatientName(name))
//	}
//    }
//}

const PatientData = connect(
    mapStateToProps
//    mapDispatchToProps
)(ChartBox)

export default PatientData
