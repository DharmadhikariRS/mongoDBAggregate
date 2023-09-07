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


