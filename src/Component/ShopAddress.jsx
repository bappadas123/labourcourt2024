
import React , { useState , useEffect } from 'react'
import axios from 'axios';

function ShopAddress() {

    const [selectedDistrictValue, setDisValue] = useState(''); 
     //const [selectedSubdivisionValue, setSubValue] = useState(''); // Initial selected value

  const [districtOptions, setDistrictOptions] = useState([]);
  const [subdivisionOptions, setSubOptions] = useState([]);

  

  const fetchDistrictOptions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/listapi/AllDistrictApi');
      setDistrictOptions(response.data);
    } catch (error) {
      console.error("Error fetching code options:", error);
    }
  };

   useEffect(() => {
    fetchDistrictOptions();
   // fetchServiceTeams();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", selectedDistrictValue);
  };

 

  

  const handleChange = async (event) => {
    setDisValue(event.target.value);
    const district_id = event.target.value;

    try {
      
       const response = await axios.get(`http://localhost:3000/listapi/getshopSubdivision/${district_id}`);
      setSubOptions(response.data);
    } catch (error) {
      console.error("Error fetching code options:", error);
    }


  };

  return (
    <div>

       <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label>
          District:
          <select name="district" value={selectedDistrictValue} onChange={handleChange}>
            <option value="">Select</option>
            {districtOptions.length > 0
              ? districtOptions.map((data) => (
                  <option key={data.district_id} value={data.district_id}>
                    {data.district}
                  </option>
                ))
              : "loading District.."}
          </select>
        
        </label>
          </div>

           <div className="mb-3">
        <label>
          Sub Division:
          <select name="subdivision"  >
            <option value="">Select</option>
            {subdivisionOptions.length > 0
              ? subdivisionOptions.map((data) => (
                  <option key={data.subdivision_id} value={data.subdivision_id}>
                    {data.subdivision}
                  </option>
                ))
              : "loading sub division.."}
          </select>
        
        </label>
          </div>
        <button type="submit">Submit</button>
      </form>
      
    </div>
  )
}

export default ShopAddress
