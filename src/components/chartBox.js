//import echarts from 'echarts2';
import 'echarts2/echarts'
import 'echarts2/chart/bar'
import * as React from 'react'


commonjs({
    namedExports: {
	'node_modules/react/index.js': [ 'PropTypes' ]
    }
});

const ChartBox = ({data}) => {
    
    var chart = echarts.init(_this.refs.chart);
    //sample data
    dataMap = {};
    
    dataMap.singleLoss = {};
    dataMap.doubleLoss = {};
    dataMap.geneExpansion = {};
    
    for (var i = 0; i < data.patientDatesList.length; i++) {
	var date = data.patientDatesList[i];
	dataMap.singleLoss[date] = data.patientSingleLossData[i];
	dataMap.doubleLoss[date] = data.patientDoubleLossData[i];
	dataMap.geneExpansion[date] = data.patientGeneExpansionData[i];
    };
    
    var date0 = data.patientDatesList[0];
    option = {
	timeline: {
	    data: data.patientDatesList,
	    label: {
		formatter: function (s) {
		    return s.slice(0, 10);
		}
	    },
	    autoPlay: false,
	    playInterval: 2000
	},
	options: [
	    {
		title: {
		    'text': 'Relevant mutations from ' + data.patientDatesList[0],
		'subtext': '数据来自 Yuanbin\'s Excel File'
	    },
	    tooltip: { 'trigger': 'axis' },
	    legend: {
		x: 'right',
		'data': ['单拷贝数缺失', '双拷贝数缺失', '基因扩增'],
		'selected': {
		    '单拷贝数缺失': true,
		    '双拷贝数缺失': true,
		    '基因扩增': true
		}
	    },
	    toolbox: {
		'show': true,
		orient: 'vertical',
		x: 'right',
		y: 'center',
		'feature': {
		    'mark': { 'show': true },
		    'dataView': { 'show': true, 'readOnly': false },
		    'magicType': { 'show': true, 'type': ['line', 'bar', 'stack', 'tiled'] },
		    'restore': { 'show': true },
		    'saveAsImage': { 'show': true }
		}
	    },
	    calculable: true,
	    grid: { 'y': 80, 'y2': 100 },
	    xAxis: [{
		'name': '突变基因',
		'nameLocation': 'right',
		'nameGap': 30,
		'offset': 30,
		'position': 'bottom',
		'type': 'category',
		'axisLabel': { 'interval': 0 },
		'data': data.patientGenesList
	    }],
	    yAxis: [
		{
		    'type': 'value',
		    'name': 'Variation Ratio'
		}
	    ],
	    series: [
		{
		    'name': '单拷贝数缺失',
		    'type': 'bar',
		    'data': dataMap.singleLoss[date0]
		},
		{
		    'name': '双拷贝数缺失',
		    'type': 'bar',
		    'data': dataMap.doubleLoss[date0]
		},
		{
		    'name': '基因扩增',
		    'type': 'bar',
		    'data': dataMap.geneExpansion[date0]
		}
	    ]
	}
    ]
    };
    
    for (var i = 1; i < data.patientDatesList.length; i++) {
	var date = data.patientDatesList[i];
	option['options'].push({
	    title: { 'text': 'Relevant mutations from ' + date },
	    series: [
		{
		    'data': dataMap.singleLoss[date]
		},
		{
		    'data': dataMap.doubleLoss[date]
		},
		{
		    'data': dataMap.geneExpansion[date]
		}
	    ]
	});
    };
    // 为echarts对象加载数据
    chart.setOption(option);
    return (
	    <div className = "chart-box" ref = "chart" style={{width: 600,height:400}}>
	    </div>
    );
}

ChartBox.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
	patientDatesList: PropTypes.array.isRequired,
	patientSingleLossData: PropTypes.array.isRequired,
	patientDoubleLossData: PropTypes.array.isRequired,
	patientGeneExpansionData: PropTypes.array.isRequired
    }).isRequired).isRequired
}

export default ChartBox;
