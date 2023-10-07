import { v4 as uuidv4 } from 'uuid'
import { GTM_EVENTS } from './constants'

export const pushDataLayer = <T>(event: GTM_EVENTS, data: T) => {
  window.dataLayer = window.dataLayer || []

  const gtmData = {
    event,
    device_id: getDeviceId(),
    data: JSON.stringify(data)
  }
  window.dataLayer.push(gtmData)
}

export const getDeviceId = () => {
  let deviceId = localStorage.getItem('deviceId')

  if (!deviceId) {
    deviceId = uuidv4()

    localStorage.setItem('deviceId', deviceId)
  }
  
  return deviceId
}