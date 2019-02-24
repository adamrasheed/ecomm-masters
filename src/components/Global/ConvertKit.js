export const ConverkitApi = {
  endpoint: `https://api.convertkit.com/v3/forms`,
  formId: `820358`,
  apiKey: `U5nErI005k7uw3DR5Uvslg`,
}

export const ConvertKitSubscribe = `${ConverkitApi.endpoint}/${
  ConverkitApi.formId
}/subscribe?api_key=${ConverkitApi.apiKey}`
