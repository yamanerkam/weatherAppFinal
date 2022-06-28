const key = "Y8YydkGGNG9EdzHQVK3te1O5vlBGNLuy"


const getCity = async (city) => {

    const base = "http://dataservice.accuweather.com/locations/v1/cities/search"
    const query =`?apikey=${key}&q=${city}`
    const response = await fetch(base + query)
    if(response.status!==200){
      throw new Error("fuckkkk");
    }
    const data = await response.json();
    return data[0]


  }
 



  const getWeather = async (id) => {

    const base = "http://dataservice.accuweather.com/currentconditions/v1/"
    const query =`${id}?apikey=${key}`
    const response = await fetch(base + query)
    if(response.status!==200){
      throw new Error("fuckkkk");
    }
    const data = await response.json();
    return data[0]


  }
  
