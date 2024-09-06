import "./styles/reset.css";

// 컴포넌트
import PageNav from "@components/PageNav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageNav />
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
