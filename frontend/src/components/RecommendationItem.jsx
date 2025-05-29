const RecommendationItem = ({ crop, data }) => {
  const renderAsList = (text) => {
    if (typeof text === 'string') {
      const lines = text.split('\n').map(line => line.trim()).filter(line => line);
      return (
        <ul>
          {lines.map((line, index) => (
            <li key={index}>{line}</li>
          ))}
        </ul>
      );
    } else if (Array.isArray(text)) {
      return (
        <ul>
          {text.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      );
    } else {
      return <p>Not available</p>;
    }
  };

  return (
    <div className="recommendation-item">
      <h2>{crop}</h2>
      <p><strong>Suitability:</strong> {data.suitability}</p>

      <div>
        <strong>Planting Instructions:</strong>
        {renderAsList(data.planting_instructions)}
      </div>

      <div>
        <strong>Care & Maintenance Tips:</strong>
        {renderAsList(data.care_maintenance)}
      </div>

      <p><strong>Days to Harvest:</strong> {data.days_to_harvest}</p>
    </div>
  );
};

export default RecommendationItem;
