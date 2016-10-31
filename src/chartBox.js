import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import React from 'react';

class ChartBox extends React.Component {

  render() {
    return (
      <div className = "chart-box" ref = "chart" style={{width: 600,height:400}}>
      </div>
    );
  }

  componentDidMount() {
    var chart = echarts.init(this.refs.chart);
    chart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
        }]
    });
  }
}

export default ChartBox;
