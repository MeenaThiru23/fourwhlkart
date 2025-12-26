import { Route, Routes } from "react-router-dom";
import { APP_ROUTES } from "../configs/routeConfig";
import { lazy, Suspense } from "react";
//import AuthWrapper from "../components/AuthWrapper.tsx";
const AppLayout = () => {   
    return (
        <div className="min-h-screen bg-gray-100">
            <main className="container mx-auto px-4 py-6">
               <Routes>
        {APP_ROUTES.map((route) => {
          const Component = lazy(() => route.component());
          const isProtected = route.protected || false;
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                // <AuthWrapper isProtected={isProtected}>
                   <Suspense fallback={<div>Loading...</div>}>
                    <Component />
                  </Suspense>
                // </AuthWrapper>
              }
            />
          );
        })}
      </Routes>
            </main>
        </div>
    );
};
export default AppLayout;