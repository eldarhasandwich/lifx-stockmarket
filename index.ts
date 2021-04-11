
import * as l from './src/lifxservice'
import * as y from './src/yahoofinance'

const main = async () => {

  const TICKER = 'rbl.ax'

  const yahooFinance = new y.YahooFinance()
  const lifxService = new l.LifxService({
    clientId: process.env.LIFX_CLIENT_ID
  })

  const quote = await yahooFinance.QueryTicker(TICKER)
  const lights = await lifxService.ListLights()

  lights.forEach(light => {
    lifxService.SetLightColor(
      light.id,
      (quote.regularMarketPrice >= quote.chartPreviousClose) ? 'green' : 'red'
    )
  })
}

setInterval(() => {
  main()
}, 60 * 1000)
