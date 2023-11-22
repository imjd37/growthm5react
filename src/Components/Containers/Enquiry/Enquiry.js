import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Enquiry.css";
import { createUser } from "../../../features/user/userSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import MyModal from "../../MyModal/MyModal";
import { useNavigate } from "react-router-dom";

function Enquiry() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const navigate = useNavigate();

  const navigateEnquiry = () => {
    navigate("/enquiry");
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const schema = yup.object().shape({
    name: yup.string().min(3).required(),
    message: yup.string().min(10).required(),
    phone: yup.string().max(10).matches(phoneRegExp, "Phone number is not valid"),
    email: yup.string().email().required(),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    dispatch(createUser(data));
  };

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      setShowModal(true);
    }
  }, [formState]);

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ name: "", message: "", phone: "", email: "" });
    }
  }, [formState, reset]);

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
          <div className="yellowButtonContainer">
            <button type="submit" className="YellowButton">
              Send
            </button>
            <button
              type="button"
              onClick={navigateEnquiry}
              className="YellowButton"
            >
              View
            </button>
          </div>
        </form>
        {showModal && <MyModal closeModal={closeModal} />}
      </div>
    </>
  );
}

export default Enquiry;
