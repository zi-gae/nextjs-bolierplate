const apiMap = (key: string) => {
  const map: { [index: string]: { url: string; method: string } } = {
    getProduct: {
      url: 'https://gateway-stage.seoulstore.com/siteProducts/:id',
      method: 'GET',
    },
    getCategories: {
      url: 'https://gateway-stage.seoulstore.com/siteCategories',
      method: 'GET',
    },
  }
  return map[key]
}

export default apiMap
