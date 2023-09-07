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

export const stateWiseSample=async()=>{
  //Total samples tasted on perticular date in perticular state
  const data = stateWiseTestingDetails.aggregate([
    { $match: { State: 'Andaman and Nicobar Islands' } },
    { $match: { Date: '2021-02-23' } },
    {
      $group: {
        _id: {
          State: '$State',
          Date: '$Date'
        },
        TotalSamples: {
          $sum: '$TotalSamples'
        }
      }
    }
  ]);
  return data;
}
export const vaccineData=async()=>{

  //All states vaccine status
  const data=await covidVaccineStatewise.find();
  return data
}
export const vaccineWiseData=async()=>{
  //vaccine status for covishield and covaxin counts
  const data = await covidVaccineStatewise.aggregate([
    {
      $group: {
        _id: '$State',
        CoviShield: {
          $sum: '$CoviShield (Doses Administered)'
        },
        Covaxin: {
          $sum: '$ Covaxin (Doses Administered)'
        }
      }
    },
 
  ]);
 return data;
}
export const StateAndGenderWise=async()=>{
 //statewise males and females vaccination counts

 const data = await covidVaccineStatewise.aggregate([
  {
    $group: {
      _id: '$State',
      MaleVaccinated: {
        $sum: '$Male (Doses Administered)'
      },
      FemaleVaccinated: {
        $sum: '$Female (Doses Administered)'
      }
    }
  }
]);
return data;
}
export const StatewisePositiveCountGT=async()=>{
//states of covid positive members greater that 1lakh
 const data=stateWiseTestingDetails.aggregate([{
    $group: {
      _id: "$State",
      TotalSamples:{
        $sum: "$TotalSamples"
      },
      Positive: {
        $sum: "$Positive"
      }
    }
  },
  {$match : {Positive :

    { $gt : 100000}
}}])
  return data;
}