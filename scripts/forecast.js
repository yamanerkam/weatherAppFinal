const key = "12gLnuzkd5nsKvcoz6ONf8TiwXZoRtV1"


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
  
