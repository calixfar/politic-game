export const pushDataLayer = <T>(data: T) => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(data)
  console.info(`GTM Event: `, data)
}