import "../app/globals.css";
//internal import
import { TrackingProvider } from "../context/Tracking";
import { NavBar, Footer } from "../components";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <TrackingProvider>
        <NavBar />
        <Component {...pageProps} />
      </TrackingProvider>
      <Footer />
    </>
  );
}
