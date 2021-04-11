
import * as agent from 'superagent'

interface Config {
  clientId: string
}

export class LifxService {
  config: Config

  constructor(config: Config) {
    this.config = config
  }

  async ListLights (selector?: string) {

    const response = await agent
      .get(`https://api.lifx.com/v1/lights/${ selector || 'all' }`)
      .set('Authorization', `Bearer ${this.config.clientId}`)

    const list = JSON.parse(response.text)

    return list
  }

  async SetLightColor(uuid: string, color: string) {

    const response = await agent
      .put(`https://api.lifx.com/v1/lights/${uuid}/state`)
      .set('Authorization', `Bearer ${this.config.clientId}`)
      .send({
        color
      })
  }
}
