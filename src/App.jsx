import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { mainRouters } from "./router";

function App() {
  return (
    <Routes>
      {mainRouters.map((item, key) => {
        const Page = item.component;
        let Layout = Fragment;
        if (item.layout !== null) {
          Layout = item.layout;
        }

        return (
          <Route
            key={key}
            path={item.path}
            element={
              <Layout>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
