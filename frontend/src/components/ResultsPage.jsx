import { useState } from 'react';
import RecommendationList from '../components/RecommendationList';

const baseUrl = import.meta.env.VITE_BASE_URL;

const ResultsPage = () => {
  const [formData, setFormData] = useState({
    location: '',
    space: '',
    sunlight: '',
    goals: ''
  });
  const [recommendations, setRecommendations] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setRecommendations(null);

    try {
      const response = await fetch(`${baseUrl}/recommend`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        const parsed = JSON.parse(data.recommendation.replace(/```json|```/g, '').trim());
        setRecommendations(parsed);
      } else {
        throw new Error('Failed to get recommendations');
      }
    } catch {
      setError("Problem connecting to the server. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='results-page' className="results-page">
      <h2>Let's set up your garden!</h2>
      <form onSubmit={handleSubmit}>
        <div className='location'>
          <label>Enter your location</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder='e.g. Kolkata, Delhi, Mumbai' required />
        </div>
        <div className='space'>
          <label>Describe the available space</label>
          <input type="text" name="space" value={formData.space} onChange={handleChange} placeholder='e.g. Balcony with 2 square meters' required />
        </div>
        <div className='sunlight'>
          <label>How many hours of sunlight does the space receive daily ?</label>
          <input type="text" name="sunlight" value={formData.sunlight} onChange={handleChange} placeholder='e.g. partial sunlight (4/5 hours)' required />
        </div>
        <div className='goals'>
          <label>What sort of plants do you want to grow?</label>
          <input type="text" name="goals" value={formData.goals} onChange={handleChange} placeholder='e.g. Vegetables, Herbs, Flowers' required />
        </div>
        <button type="submit">Submit</button>
      </form>

      {loading && <p>Loading recommendations...</p>}
      {error && <p>Error: {error}</p>}
      {recommendations && <RecommendationList recommendations={recommendations} />}
    </section>
  );
};

export default ResultsPage;
