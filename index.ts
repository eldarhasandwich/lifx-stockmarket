
import * as l from './src/lifxservice'
import * as y from './src/yahoofinance'

const main = async () => {

  const TICKER = 'tsla'

  const lifxService = new l.LifxService
  const yahooFinance = new y.YahooFinance

  const lights = await lifxService.ListLights()
  const quote = await yahooFinance.QueryTicker(TICKER)

  console.log({quote})

  lights.forEach(light => {
    lifxService.SetLightColor(
      light.id,
      (quote.regularMarketPrice >= quote.chartPreviousClose) ? 'green' : 'red'
    )
  })
}


main()