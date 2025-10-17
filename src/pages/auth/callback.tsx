import { useNavigate } from "react-router";

const Callback = () => {
  const navigate = useNavigate();

  navigate("/dashboard");
  return <div>Loading...</div>;
};

export default Callback;
