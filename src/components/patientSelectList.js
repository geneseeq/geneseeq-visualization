import * as React from 'react'

commonjs({
    namedExports: {
	'node_modules/react/index.js': [ 'PropTypes' ]
    }
});

const PatientSelectList = ({ names, onPatientChange}) => {
    return(
//	    <select onchange={() => onPatientChange(_this)}>
//	    <option value="" disabled="disabled" selected="selected">Please select a name</option>
//	    {names.map(name =>
//		       <option value={name}>{name}</option>
//		      )
	    //    }
	//	    </select>
	<div> Hello </div>
    )
};

PatientSelectList.propTypes = {
    names: PropTypes.array.isRequired,
    onPatientChange: PropTypes.func.isRequired
}

export default PatientSelectList
