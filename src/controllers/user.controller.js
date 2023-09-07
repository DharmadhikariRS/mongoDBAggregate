import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

/**
 * Controller to get all users available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */


export const covidData = async (req, res, next) => {
  try {
    const data = await UserService.covidData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Covid Data fetched'
    });
  } catch (error) {
    next(error);
  }
};

export const stateWise = async (req, res, next) => {
  try {
    const data = await UserService.stateWise();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Statewise Data fetched'
    });
  } catch (error) {
    next(error);
  }
};
stateWiseTestingCount

export const stateWiseTestingCount = async (req, res, next) => {
  try {
    const data = await UserService.stateWiseTestingCount();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'stateWise Testing Count Data fetched'
    });
  } catch (error) {
    next(error);
  }
};
export const stateWisePNCount = async (req, res, next) => {
  try {
    const data = await UserService.stateWisePNCount();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'stateWise Positive negative Count Data fetched'
    });
  } catch (error) {
    next(error);
  }
};

export const stateWiseSample = async (req, res, next) => {
  try {
    const data = await UserService.stateWiseSample();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'stateWise Testing sample  count Data fetched'
    });
  } catch (error) {
    next(error);
  }
};

export const vaccineData = async (req, res, next) => {
  try {
    const data = await UserService.vaccineData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Vaccine Data fetched'
    });
  } catch (error) {
    next(error);
  }
};

export const vaccineWiseData = async (req, res, next) => {
  try {
    const data = await UserService.vaccineWiseData();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Vaccine wise Data fetched'
    });
  } catch (error) {
    next(error);
  }
};

export const StateAndGenderWise = async (req, res, next) => {
  try {
    const data = await UserService.StateAndGenderWise();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Sate and gender wise Data fetched'
    });
  } catch (error) {
    next(error);
  }
};


export const StatewisePositiveCountGT = async (req, res, next) => {
  try {
    const data = await UserService.StatewisePositiveCountGT();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'positive count greater than value data'
    });
  } catch (error) {
    next(error);
  }
};


