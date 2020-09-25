

import * as l from './src/lifxservice'


const main = async () => {

  const TICKER = 'tsla'

  const lifxService = new l.LifxService
  const lights = await lifxService.ListLights()
  
  console.log(lights)

  lights.forEach(light => {
    lifxService.SetLightColor(light.id, 'green')
  })
}


main()