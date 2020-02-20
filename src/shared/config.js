let config = {
  apiUri: ""
}

switch (process.env.NODE_ENV) {
  case "production":
    config.apiUri = "http://infinite-api.herokuapp.com/api";
    break;
  case "dev":
  default:
    // config.apiUri = "http://localhost:8080/api";
    config.apiUri = "http://infinite-api.herokuapp.com/api";
    break;
}

export default config;