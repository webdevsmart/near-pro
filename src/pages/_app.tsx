import "styles/globals.css";
import type { AppProps } from "next/app";

import AppLayout from "layouts/app-layouts";
import AuthInfoContext from "context/AuthInfoContext";
import { useMemo, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [context, setContext] = useState<any>(null);

  const contextValue = useMemo(() => ({ context, setContext }), [context]);

  return (
    <AuthInfoContext.Provider value={contextValue}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </AuthInfoContext.Provider>
  );
}

export default MyApp;
