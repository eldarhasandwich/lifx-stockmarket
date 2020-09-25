
import * as agent from 'superagent'

export class YahooFinance {
  constructor() {}

  async QueryTicker (ticker: string) {

    const response = await agent
      .get(`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}`)
      
    const quote = JSON.parse(response.text).chart.result[0].meta

    return quote
  }
}
