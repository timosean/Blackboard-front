import "./globals.css";
import reducer from "@/reducers/user";
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "@/store/configureStore";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <html lang="en">
        {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
        <head />
        <body>{children}</body>
      </html>
    </Provider>
  );
};

export default RootLayout;
