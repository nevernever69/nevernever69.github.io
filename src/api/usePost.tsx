import { useState, useEffect } from 'react';
import { useAppSelector } from '../app/hooks';

const usePost = () => {
  
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const body = useAppSelector((state) => state.counter.value)
  const flag = useAppSelector((state) => state.counter.flag)
  console.log(body)

  useEffect(() => {
    const fetchData = async () => {
     try {
      const response = await fetch("https://api.nevernever.me/details", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log("succesfully inserted")
        setLoading(false);
        }

      catch (error) {
       
        setLoading(false);
      }
    
    
    };
    fetchData();
  
    // Cleanup function if necessary
    // return () => {
    //   cleanup
    // };
  
  }, []);

 
};
export default usePost
