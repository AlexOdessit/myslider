import queryString from 'query-string';
import CONFIG from '../configs';

export async function getCards(options = {}) {
  const defaultOptions = {
    select: CONFIG.DEFAULT_DATA,
    limit: CONFIG.DEFAULT_AMOUNT,
    category: CONFIG.CATEGORY,
  };

  const finalOptions = {
    ...defaultOptions,
    ...options,
  };

  // const { inc, category, limit, image } = finalOptions;

  const query = queryString.stringify(finalOptions, { arrayFormat: 'comma' });

  const res = await fetch(`${CONFIG.BASE_URL}?${query}`);

  const { products: cards } = await res.json();
  // console.log(cards);

  return cards;
}
