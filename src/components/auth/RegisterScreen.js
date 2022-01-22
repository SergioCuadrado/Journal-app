import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import validator from "validator";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";
import { removeError, setError } from "../../actions/ui";

import useForm from "../../hooks/useForm";

const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [valueForm, handleInputChange] = useForm({
    name: "Sergio",
    email: "sergio@gmail.com",
    password: "123456",
    password2: "123456",
  });

  const { name, email, password, password2 } = valueForm;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (validator.isEmpty(name)) {
      Swal.fire("Error", "Name is required", "error");
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      Swal.fire("Error", "Email is not valid", "error");
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      Swal.fire(
        "Error",
        "Password should be at least 6 characters and match each other",
        "error"
      );
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Register
        </button>

        <Link to="/auth/login" className="link mt-5">
          Already registered?
        </Link>
      </form>
    </>
  );
};

export default RegisterScreen;
