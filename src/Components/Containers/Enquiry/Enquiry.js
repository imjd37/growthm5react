import React from "react";
import { useDispatch } from "react-redux";
import "./Enquiry.css";
import { createUser } from "../../../features/user/userSlice";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

function Enquiry() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    message: yup.string().min(10).required(),
    phone: yup.string().matches(phoneRegExp, "Phone number is not valid"),
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(createUser(data));
    navigate("/enquiry");
  };

  return (
    <>
      <span className="Anchor" id="ScrollCotactUs"></span>
      <div className="EnquiryContainer">
        <h1>Let's Talk?</h1>

        <form onSubmit={handleSubmit(onSubmit)} action="">
          <input
            type="text"
            placeholder="Name"
            name="name"
            {...register("name")}
          />
          <p>{errors.name?.message}</p>
          <input
            type="text"
            placeholder="Message"
            name="message"
            {...register("message")}
          />
          <p>{errors.message?.message}</p>
          <input
            type="tel"
            placeholder="Phone"
            name="phone"
            {...register("phone")}
          />
          <p>{errors.phone?.message}</p>
          <input
            type="email"
            placeholder="Email"
            name="email"
            {...register("email")}
          />
          <p>{errors.email?.message}</p>
          <button type="submit" className="YellowButton">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Enquiry;
