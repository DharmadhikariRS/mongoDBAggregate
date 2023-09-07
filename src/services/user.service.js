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

export const stateWise=async()=>{
   //statewise data
   const data=await stateWiseTestingDetails.aggregate([{$match:{State:"Andaman and Nicobar Islands"}}])
  return data;
}

export const stateWiseTestingCount=async()=>{
// statewise testing count
  const data=await stateWiseTestingDetails.aggregate([{$match:{State:"Andaman and Nicobar Islands"}},{ $count : 'total_documents'}])
  return data;
}

export const stateWisePNCount=async()=>{
 //statewise positive people count
  const data=stateWiseTestingDetails.aggregate([{
    $group: {
      _id: "$State",
      TotalSamples:{
        $sum: "$TotalSamples"
      },
      Positive: {
        $sum: "$Positive"
      }
    , Negative: {
      $sum: "$Negative"
    }
    }
  }])
  return data;
}