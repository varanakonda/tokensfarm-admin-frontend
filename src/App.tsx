import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    ShowGuesser, Layout, LayoutProps,
} from "react-admin";
import {createDataProvider} from "./dataProvider";
import {ReactQueryDevtools} from 'react-query/devtools';
import {JSX} from "react/jsx-runtime";
import {FarmList} from "./pages/FarmList";

export const MyLayout = (props: JSX.IntrinsicAttributes & LayoutProps) => (
    <>
        <Layout {...props} />
        <ReactQueryDevtools initialIsOpen={false} />
    </>
);

export const App = () => (
  <Admin dataProvider={createDataProvider()} layout={MyLayout}>
    <Resource
      name="farm"
      list={FarmList}
      edit={EditGuesser}
      show={ShowGuesser}
    />
  </Admin>
);
