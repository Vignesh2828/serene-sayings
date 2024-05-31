import axios from 'axios';
 
interface Quote {
  _id: string;
  content: string;
  author: string;
  tags: string[];
}
 
const sereneSayings = async (): Promise<Quote> => {
  try {
const response = await axios.get('https://api.quotable.io/quotes/random');
const quote = response.data[0] || response.data;
  
if (quote && quote.content && quote.author) {
      return quote;
    } else {
      throw new Error('Invalid quote format received');
    }
  } catch (error) {
    throw new Error(`Error fetching the quote: ${error}`);
  }
};
 
export default sereneSayings;