import { useParams, Link } from "react-router-dom";

const Color = () => {
  let { color } = useParams();
  return (
    <div style={{ backgroundColor: color, height: "3000px", color: "white" }}>
      <h1>This is {color}. </h1>
      <h1>Is there Beautiful???</h1>
      <h1>
        <Link exact to="/">
          Go Back!
        </Link>
      </h1>
    </div>
  );
};

export default Color;
