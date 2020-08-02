class ServiceHelper
{
  /**
   * Extracts the data from the response (for success case) which is returned by the HTTP client used.
   * This method is dependent to HTTP client that is used, which is currently `axios`.
   *
   * @param {object} response
   * @return {*}
   */
  static getDataForSuccessResponse (response)
  {
    return response.data;
  }

  /**
   * Extracts the data from the response (for error case) which is returned by the HTTP client used.
   * This method is dependent to HTTP client that is used, which is currently `axios`.
   *
   * @param {object} error
   * @return {*}
   */
  static getDataForErrorResponse (error)
  {
    return error.response.data;
  }
}

export default ServiceHelper;
