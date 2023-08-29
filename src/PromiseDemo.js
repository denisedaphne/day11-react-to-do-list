function fetchPersonDataAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const personData = {
          id: 1,
          name: 'Diana Prince',
          age: 27,
        };
  
        resolve(personData);
  
        reject(new Error('Failed to fetch data from API'));
      }, 2000);
    });
  }
  
  fetchPersonDataAPI()
    .then(data => {
      console.log('Data fetched successfully:', data);
    })
    .catch(error => {
      console.error('Error:', error.message);
    });