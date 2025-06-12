export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVTAR = "https://i.pinimg.com/736x/8c/6a/78/8c6a785483ee3e92d8163f2fac2cc567.jpg"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg"

export const SUPPORTED_LANGUAGES =[
  {identifier: "en", name:"English"},
  {identifier: "hindi", name:"Hindi"},
  {identifier: "spanish", name:"Spanish"},
  {identifier: "french", name:"French"}
];

export const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
export const GEMINI_API_KEY = process.env.REACT_APP_GEMINI_KEY;

