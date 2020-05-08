
const apiKey = 'i7sAVSE_E4fL6noCpFKsKGhhWOf_ZlLrfbDhThioVvqxcCZh6MxtPy4rUFj7NDX5y-bDiUhMzIY0Dux2n-FSHkTorEiHJTzJeQJ0zWo0JdPJrDQAdqA_bFHUt_cGXnYx';
const Yelp = {
    search(term, location, sortBy){
      return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
          headers: {
            Authorization: `Bearer ${apiKey}`  
          }
      }).then(response => {
          return response.json();
      }).then(jsonResponse => {
         console.log(jsonResponse);
          if(jsonResponse.businesses){
            return jsonResponse.businesses.map(business => {
                return {
                   id: business.id,
                   imageSrc: business.image_url,
                   name: business.name,
                   address: business.location.address1,
                   city: business.location.city,
                   state: business.location.state,
                   zipCode: business.location.zip_code,
                   category: business.categories[0].title,
                   rating: business.rating,
                   reviewCount: business.review_count
                 };
            });
          }
      }, console.log);
    }
};

export default Yelp;