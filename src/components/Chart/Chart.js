import './../../css/Chart.css';
import ChartBar from './ChartBar';

function Chart(props) {
    const chartDataValues = props.chartData.map(chartItem => chartItem.value);
    const maxValue = Math.max(...chartDataValues);
    console.log(props.chartData);

    return (<div className='chart'>
        {props.chartData.map(chartBarItem =>
            (<ChartBar
                key={chartBarItem.label}
                value={chartBarItem.value}
                maxValue={maxValue}
                label={chartBarItem.label} />)
        )}
    </div>);
}

export default Chart;
