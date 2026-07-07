export const amazonPageElements = (page) => ({
  amazonLink: 'https://amazon.com.br/',
  searchBox: page.getByRole('searchbox', { name: 'Pesquisar Amazon.com.br' }),
  searchButton: page.getByRole('button', { name: 'Ir', exact: true }),
  searchResultsHeading: page.getByRole('heading', { name: 'Resultados', exact: true }),
  inStock: page.locator('#availabilityInsideBuyBox_feature_div').getByText('Em estoque'),

  //monitor 24 polegadas
  productLink: page.getByRole('link', { name: 'Monitor PC Gamer LG 24MS500 24” IPS 100Hz Full HD HDMI 2x', exact: true }),
  productHeading: page.getByRole('heading', { name: 'Monitor PC Gamer LG 24MS500' }),
  invalidProductHeading: page.getByRole('heading', { name: 'Monitor PC Gamer LGGGG 24MS500' }),

  //geladeira
  geladeiraProductLink: page.getByRole('link', { name: 'Geladeira Brastemp Frost Free 375 litros cor inox - BRM45HK 220V', exact: true }),
  geladeiraProductHeading: page.getByRole('heading', { name: 'Geladeira Brastemp Frost Free 375 litros cor inox - BRM45HK 220V' }),
  invalidGeladeiraProductHeading: page.getByRole('heading', { name: 'Geladeira Brastemp Frost Free 375 litros cor inox - BRM45HK 220V' }),


});
