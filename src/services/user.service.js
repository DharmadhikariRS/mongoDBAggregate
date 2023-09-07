import universities from '../models/user.model';
import cources from '../models/courses.model';
import stateWiseTestingDetails from '../models/stateWiseTestingDetails';
import covidVaccineStatewise from '../models/covidVaccineStatewise';

  
export const covidData = async () => {
  // all state data
  const data =await stateWiseTestingDetails.find()
  console.log("data",data);
  return data;
};
