import { Link } from "react-router-dom";

const Colors = ({ colors }) => {
  return (
    <div>
      <div>
        <h1>Welcome to the color factory!</h1>
        <Link to="/color/new">Add a color!</Link>
      </div>
      Please Select a color!
      {Object.keys(colors).map((p) => (
        <div>
          <Link to={`/colors/${p}`}>{p}</Link>
        </div>
      ))}
    </div>
  );
};

export default Colors;
