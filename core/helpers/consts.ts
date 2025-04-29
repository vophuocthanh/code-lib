import dayjs from 'dayjs'

/**
 * Date-time constants
 */

export const STANDARD_DATE_FORMAT = 'YYYY-MM-DD'
export const STANDARD_DATE_FORMAT_INVERSE = 'DD-MM-YYYY'
export const STANDARD_DATE_FORMAT_US = 'MM-DD-YYYY'
export const STANDARD_DATE_FORMAT_SLASH = 'DD/MM/YYYY'
export const STANDARD_DATE_FORMAT_FULL = 'DD/MM/YYYY HH:mm'
export const STANDARD_DATE_FORMAT_FULL_TIME = 'DD-MM-YYYY HH:mm:ss'
export const VIETNAMESE_TIME_ZONE_OFFSET = 7
export const STANDARD_TIME_FORMAT = 'HH:mm:ss'
export const STANDARD_TIME_FORMAT_MM_YYYY = 'MM/YYYY'
export const STANDARD_TIME_FORMAT_MM_YYYY_INVERSE = 'MM-YYYY'
export const DEFAULT_DATETIME_VALUE = '0001-01-01T00:00:00'
export const STANDARD_DATE_TIME_FORMAT = `${STANDARD_DATE_FORMAT}${'T' + STANDARD_TIME_FORMAT + 'Z'}`
export const STANDARD_DATE_TIME_FORMAT_VIEW = `${STANDARD_DATE_FORMAT_INVERSE} ${STANDARD_TIME_FORMAT}`
export const TIMEZONE_OFFSET: string = dayjs().format('Z')

/**
 * Debounce time constants
 */

export const DEBOUNCE_TIME = {
  DEBOUNCE_TIME_50: 50,
  DEBOUNCE_TIME_100: 100,
  DEBOUNCE_TIME_150: 150,
  DEBOUNCE_TIME_200: 200,
  DEBOUNCE_TIME_250: 250,
  DEBOUNCE_TIME_300: 300,
  DEBOUNCE_TIME_350: 350,
  DEBOUNCE_TIME_400: 400
}

export const DEFAULT_PAGE_SIZE_OPTION = [10, 20, 30, 40, 50]

export const DEFAULT_PAGE_SIZE = 10

export const EMPTY_STRING = '---'

export const EMPTY_WIDTH_400 = 400

export const numberConstants = {
  ZERO: 0,
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  ONE_HUNDRED: 100
}

export const WIDTH_CONST = {
  WIDTH_400: 400,
  WIDTH_600: 600,
  WIDTH_800: 800,
  WIDTH_1000: 1000,
  WIDTH_1100: 1100,
  MAX_LENGTH_20: 20,
  MAX_LENGTH_255: 255,
  MAX_LENGTH_500: 500,
  MAX_LENGTH_1000: 1000,
  MAX_LENGTH_2000: 2000,
  MAX_LENGTH_TEXT_AREA: 500
}

// type input number
export const NUMBER_TYPE_INPUT = 'DECIMAL'

// Vietnam dong unit
export const VND_CURRENCY_UNIT = 'VND'

export const ERROR_TYPE = 'error'
