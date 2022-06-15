import axios from "axios";

axios.get('https://ukrainelodgeservicecloud.azurewebsites.net')

export default axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'https://ukrainelodgeservicecloud.azurewebsites.net/api',
  headers: {
    "Content-type": "application/json"
  }
});