import React from "react";

import { useAppSelector, useAppDispatch } from '../app/hooks';



const useDetails = () => {

  
 
  console.log("here")
  React.useEffect(() => {
   async function fetchData()  {
      try {
        // Fetch IP address
        const ipResponse = await fetch('https://dummy.nevernever.me/ip', {
          method: 'GET',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        });

        const ipData = await ipResponse.json();
        const ip = ipData.ip;
        

        // Fetch details based on IP address
        // const detailsResponse = await fetch('//ip-api.com/json/'+ ip, {
        //   method: 'GET',
        //   headers: {
        //     'content-type': 'application/json;charset=UTF-8',
        //   },
        // });

        // const detailsData = await detailsResponse.json();
        const response = await fetch("https://api.nevernever.me/details", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ip})
        });
             // setData(detailsData);

        if (!ipResponse.ok || !detailsResponse.ok || !response.ok) {
          throw new Error(`HTTP error! status: ${ipResponse.status} or ${detailsResponse.status}`);
        }

      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors (optional: display error message, retry)
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures fetching only once on component mount
 
  
};

export default useDetails;
