
import * as agent from 'superagent'
import { uuid } from 'uuidv4'


export class LifxService {
  constructor() {}

  async ListLights (selector?: string) {

    const response = await agent
      .get(`https://api.lifx.com/v1/lights/${ selector || 'all' }`)
      .set('Authorization', `Bearer ${process.env.LIFX_CLIENT_ID}`)

    const list = JSON.parse(response.text)

    return list
  }

  async SetLightColor(uuid: string, color: string) {

    const response = await agent
      .put(`https://api.lifx.com/v1/lights/${uuid}/state`)
      .set('Authorization', `Bearer ${process.env.LIFX_CLIENT_ID}`)
      .send({
        color
      })

    console.log({response})


    
  }

}




