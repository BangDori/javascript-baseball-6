import {
  NUMBER_ERROR,
  DUPLICATION_ERROR,
  LENGTH_ERROR,
  INVALID_INPUT_ERROR,
} from "../constants/error-message.js";
import { GAME_RESTART, GAME_EXIT } from "../constants/game.js";

function isLengthError(userNumbers) {
  if (userNumbers.length !== 3) throw new Error(LENGTH_ERROR);
  return false;
}

function isDuplicationError(userNumbers) {
  for (let i = 0; i < userNumbers.length; i++) {
    if (userNumbers.substring(i + 1).includes(userNumbers[i])) {
      throw new Error(DUPLICATION_ERROR);
    }
  }
  return false;
}

function isNumberError(userNumbers) {
  for (let i = 0; i < userNumbers.length; i++) {
    if (!(userNumbers[i] >= "0" && userNumbers[i] <= "9")) {
      throw new Error(NUMBER_ERROR);
    }
  }
  return false;
}

function validateUserInputNumber(userNumbers) {
  isLengthError(userNumbers);
  isDuplicationError(userNumbers);
  isNumberError(userNumbers);
}

function validateUserSelectNumber(userSelectNumber) {
  if (userSelectNumber !== GAME_RESTART && userSelectNumber !== GAME_EXIT) {
    throw new Error(INVALID_INPUT_ERROR);
  }
  return false;
}

export {
  isLengthError,
  isDuplicationError,
  isNumberError,
  validateUserInputNumber,
  validateUserSelectNumber,
};
