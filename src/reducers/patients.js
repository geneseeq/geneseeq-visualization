const patients = (state = loadData(), action) => {
	  switch (action.type) {
          case 'SET_PATIENT_NAME':
              return Object.assign({}, state, {
		  name: action.name
	      })
	  default:
              return state
	  }
      }

function loadData() {
    var fs = require('fs');
    var patientDates = fs.readFileSync('../data/patientDates.json', 'utf8');
    var patientGenes = fs.readFileSync('../data/patientGenes.json', 'utf8');
    var patientGeneExpansion = fs.readFileSync('../data/patientGeneExpansion.json', 'utf8');
    var patientSingleLoss = fs.readFileSync('../data/patientSingleLoss.json', 'utf8');
    var patientDoubleLoss = fs.readFileSync('../data/patientDoubleLoss.json', 'utf8');
    return {
	name:"",
	data: {
            patientDates: patientDates,
            patientGenes: patientGenes,
            patientGeneExpansion: patientGeneExpansion,
            patientSingleLoss: patientSingleLoss,
            patientDoubleLoss: patientDoubleLoss
	}
    }
}


export default patients
