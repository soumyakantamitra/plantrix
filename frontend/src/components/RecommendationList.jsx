import RecommendationItem from './RecommendationItem';

const RecommendationList = ({ recommendations }) => {
  return (
    <div className="recommendation-list">
      {Object.entries(recommendations).map(([crop, data]) => (
        <RecommendationItem key={crop} crop={crop} data={data} />
      ))}
    </div>
  );
};

export default RecommendationList;