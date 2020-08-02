import _ from "lodash";

class CommonHelper
{
  static isExist (x)
  {
    return x !== undefined &&
           x !== null;
  }

  static isInitialized (x)
  {
    return CommonHelper.isExist(x) &&
           !_.isFinite &&
           !(_.isString(x) && (x === "" || x.valueOf() === "")) &&
           !(_.isPlainObject(x) && _.isEmpty(x)) &&
           !(_.isArray(x) && _.isEmpty(x));
  }
}

export default CommonHelper;
