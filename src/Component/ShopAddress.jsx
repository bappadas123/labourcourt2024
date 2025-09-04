
import React , { useState , useEffect } from 'react'
import axios from 'axios';

function ShopAddress({ onDropdownChange }) {

    const [selectedDistrictValue, setDisValue] = useState(''); 
     //const [selectedSubdivisionValue, setSubValue] = useState(''); // Initial selected value

  const [districtOptions, setDistrictOptions] = useState([]);
  const [subdivisionOptions, setSubOptions] = useState([]);
  const [selectedSubdiv, setSelectedSubdiv] = useState('');
  const[policeStationOptions, setPoliceStation]=useState([]);
  const[postOfficeOptions, setPostOffice]=useState([]);
  const [ur, setUr] = useState("");
  const[ruralUrbanOptions, setruralurban]=useState([]);
  const[blockmuOptions, setBlockmu]=useState([]);




const UrbanArray = [
    { id: "M",uname: "Municipality"},
    {id: "NAC",uname: "NAC"},
    {id: "C",uname: "Corporation"},
    {id: "CT", uname: "Census Town"}];
    const RuralArray = [
    { id: "B",uname: "Block"}];


  function onRuralUrban(event) {
    setUr(event.target.value);
    //console.log("radio buttion click");
    //console.log(event.target.value);
    if(event.target.value=='Urban')
    setruralurban(UrbanArray);
    else if(event.target.value=='Rural')
    setruralurban(RuralArray);
    setBlockmu("");
    //setUr("");

    const { name, value } = event.target;
     onDropdownChange(name, value);




  }

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

    
  const handleSuvdivChange = (e) => {
    setSelectedSubdiv(e.target.value);
    const { name, value } = e.target;
     onDropdownChange(name, value);
    console.log(e.target.value);
     setruralurban("");
    setBlockmu("");
  };


  const handlePoliceStation = (e) => {
   
    const { name, value } = e.target;
     onDropdownChange(name, value);
    
  };

  const handlePostOffice = (e) => {
   
    const { name, value } = e.target;
     onDropdownChange(name, value);
    
  };

  

  const handleChange = async (event) => {
    setDisValue(event.target.value);
    const district_id = event.target.value;
    setruralurban("");
    setBlockmu("");
    setUr("");

        const { name, value } = event.target;
        onDropdownChange(name, value);

    try {
      
       const response1 = await axios.get(`http://localhost:3000/listapi/getshopSubdivision/${district_id}`);
        setSubOptions(response1.data);

      const response2 = await axios.get(`http://localhost:3000/listapi/getshopPoliceStation/${district_id}`);
        setPoliceStation(response2.data);

       const response3 = await axios.get(`http://localhost:3000/listapi/getshopPostOffice/${district_id}`);
        setPostOffice(response3.data); 
      
    } catch (error) {
      console.error("Error fetching code options:", error);
    }


  };

  

  const handleBlockMunnicipality = async (event) => {
   // setDisValue(event.target.value);
    const bm_flag = event.target.value;


        const { name, value } = event.target;
        onDropdownChange(name, value);

    try {
      
       const response1 = await axios.get(`http://localhost:3000/listapi/getshopBlockMunicipality/${selectedSubdiv}/${bm_flag}`);
        setBlockmu(response1.data);

     
      
    } catch (error) {
      console.error("Error fetching code options:", error);
    }


  };
  


  const handleBlockMunnicipalityName = async (event) => {
   
        const { name, value } = event.target;
        onDropdownChange(name, value);

  };

  return (
    <div>
         <h3>Address:</h3>
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
          <select name="subdivision" onChange={handleSuvdivChange} >
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

           <div className="mb-3">
        <label>
          Police Station:
          <select name="policestation" onChange={handlePoliceStation} >
            <option value="">Select</option>
            {policeStationOptions.length > 0
              ? policeStationOptions.map((data) => (
                  <option key={data.police_station_id} value={data.police_station_id}>
                    {data.police_station}
                  </option>
                ))
              : "loading police station.."}
          </select>
        
        </label>
          </div>

          <div className="mb-3">
        <label>
          post office:
          <select name="postoffice" onChange={handlePostOffice} >
            <option value="">Select</option>
            {postOfficeOptions.length > 0
              ? postOfficeOptions.map((data) => (
                  <option key={data.post_office_id} value={data.post_office_id}>
                    {data.post_office}
                  </option>
                ))
              : "loading post office.."}
          </select>
        
        </label>
          </div>
           <div onChange={onRuralUrban}>
      <input type="radio" value="Rural" name="ruralUrban" checked={ur === "Rural"}  /> Rural
      <input type="radio" value="Urban" name="ruralUrban" checked={ur === "Urban"} /> Urban
      
    </div>

       <div className="mb-3">
        <label>
          Block or municipality:
          <select name="blockmunList" onChange={handleBlockMunnicipality} >
            <option value="">Select</option>
            {ruralUrbanOptions.length > 0
              ? ruralUrbanOptions.map((data) => (
                  <option key={data.id} value={data.id}>
                    {data.uname}
                  </option>
                ))
              : "loading block or municipality.."}
          </select>
        
        </label>
          </div>

          <div className="mb-3">
        <label>
          Block or municipality Name:
          <select name="blockmunname"  onChange={handleBlockMunnicipalityName}>
            <option value="">Select</option>
            {blockmuOptions.length > 0
              ? blockmuOptions.map((data) => (
                  <option key={data.block_id} value={data.block_id}>
                    {data.block}
                  </option>
                ))
              : "loading block or municipality name.."}
          </select>
        
        </label>
          </div>

          


       
      </form>
      
    </div>
  )
}

export default ShopAddress
//https://www.scaler.com/topics/react/react-radio-buttons/
//https://primereact.org/radiobutton/
