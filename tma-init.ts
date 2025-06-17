import {
  backButton,
  viewport,
  miniApp,
  init as initSDK,
  swipeBehavior
} from '@telegram-apps/sdk-react'

export function TMAInit(): void {
  initSDK()

  if (!backButton.isSupported() || !miniApp.isSupported()) {
    throw new Error('ERR_NOT_SUPPORTED')
  }

  backButton.mount()
  swipeBehavior.mount()

  if (miniApp.mountSync.isAvailable()) {
    miniApp.mountSync()
  }

  if (miniApp.setHeaderColor.isAvailable()) {
    miniApp.setHeaderColor('#aaaaaa')
  }
  void viewport
    .mount()
    .catch(e => {
      console.error('Something went wrong mounting the viewport', e)
    })
    .then(() => {
      viewport.bindCssVars()
    })

  if (swipeBehavior.disableVertical.isAvailable()) {
    swipeBehavior.disableVertical()
  }
}