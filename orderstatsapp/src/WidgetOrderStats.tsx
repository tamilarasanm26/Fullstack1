import datas from './stats.json';
import './WidgetOrderStats.scss';

function WidgetOrderStats() {
  return (
    <div className="container">
      {datas.map((data, index) => {
       
        const isPositive = data.percentage > 0;
        const isNegative = data.percentage < 0;
        return (
          <div className="box" key={index}>
            <div className="label-percentage">
              <span className="label">{data.label}</span>

              
              
              <span className={`percentage ${isPositive ? 'positive' : ''} ${isNegative ? 'negative' : ''}`}>
                {isNegative && <span className="arrow-up">↑</span>}
                {isPositive && <span className="arrow-down">↓</span>} 
                
                {data.percentage}
                <span className="arrow-down">%</span>
              </span>
            </div>

            <div className="value">
           
              {data.image && (
                <img src={data.image} alt="icon" className="value-image" />
              )}
              {data.value} 
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default WidgetOrderStats;
