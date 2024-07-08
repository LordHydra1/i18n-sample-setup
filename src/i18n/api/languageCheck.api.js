// src/fetchLanguage.js

const fetchPreferredLanguage = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/preferred-language'); // Update with your actual backend URL
      if (!response.ok) {
        throw new Error('Failed to fetch preferred language');
      }
      const data = await response.json();
      return data.language;
    } catch (error) {
      console.error('Error fetching preferred language:', error);
      return 'it'; // Fallback language if fetch fails
    }
  };
  
  export default fetchPreferredLanguage;
  