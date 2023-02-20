import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import style from "./../styles/emailForm.module.css";

//추후에 .env 로 보내기
const EmailForm = () => {
  const [sendMessage, setSendMessage] = useState("Send");
  const form = useRef();
  const email_public_key = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
  const email_service_id = process.env.REACT_APP_EMILJS_SERVICE_ID;
  const email_template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();
    setSendMessage("Sending");
    emailjs
      .sendForm(
        `${email_service_id}`,
        `${email_template_id}`,
        form.current,
        `${email_public_key}`
      )
      .then(
        () => {
          setSendMessage("Success");
          for (let i = 0; i < 4; i++) {
            form.current[i].value = "";
          }
          setTimeout(() => {
            setSendMessage("Send");
          }, 2000);
        },
        () => {
          setSendMessage("Failed");
          setTimeout(() => {
            setSendMessage("Send");
          }, 2000);
        }
      );
  };

  return (
    <>
      <form ref={form} autoComplete="off" onSubmit={sendEmail}>
        <h2 className={style.emailform_title}>Send Email</h2>
        <p className={style.emailform_subtitle}>
          메일은 평일 기준 3일 이내에 답장해 드립니다.
        </p>
        <div className={style.emailform_wrap}>
          <div className={`${style.emailform_item}`}>
            <div className={style.form_wrap}>
              <label>Name</label>
              <input type="text" name="name" required />
            </div>
            <div className={style.form_wrap}>
              <label>Email</label>
              <input type="email" name="email" required />
            </div>
            <div className={style.form_wrap}>
              <label>Subject</label>
              <input type="text" name="subject" required />
            </div>
          </div>

          <div className={`${style.emailform_item}`}>
            <div className={`${style.form_wrap} ${style.form_wrap_msg}`}>
              <lable>Message</lable>
              <textarea name="message" required />
            </div>
            <input type="submit" value={sendMessage} />
          </div>
        </div>
      </form>
    </>
  );
};

export default EmailForm;
