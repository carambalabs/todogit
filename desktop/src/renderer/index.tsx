import * as React from "react"
import * as ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"
import { App } from "./components/app"
import { Provider} from "react-redux"
import store, { history } from "./redux/store"
import appStartup from "./startup/startup"
import Logger from "js-logger"
import { ConnectedRouter } from "react-router-redux"

// Startup
appStartup.execute().then(() => {
  Logger.debug("Startup completed")
})

// App rendering
const render = (RenderComponent: React.ComponentClass<any>) => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
      <AppContainer>
        <RenderComponent/>
      </AppContainer>
      </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
  )
}
render(App)

// Hot module reloading
if (module.hot) {
  module.hot.accept("./components/app", () => {
      require("./components/app")
      render(App)
  })
}