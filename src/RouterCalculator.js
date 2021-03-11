import { BrowserRouter, Route, useParams } from "react-router-dom";

const RouterCalculator = () => {
  const Add = () => {
    const { one, two } = useParams();
    return <div>{Number(one) + Number(two)}</div>;
  };
  return (
    <div>
      <BrowserRouter>
        <Route path="/add/:one/:two">
          <Add />
        </Route>
      </BrowserRouter>
    </div>
  );
};

export default RouterCalculator;
