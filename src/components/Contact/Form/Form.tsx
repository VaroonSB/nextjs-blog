"use client";

import { useEffect, useState } from "react";
import classes from "./Form.module.css";
import { NotificationProps } from "@/components/Notification/types";
import { Notification } from "@/components/Notification";

export const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [error, setError] = useState<string | null>(null);

  const sendMessageHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        cache: "no-cache",
        method: "POST",
        body: JSON.stringify({ email, name, message }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data);
        throw new Error(data.message || "Something went wrong!");
      }

      setStatus("success");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.message);
      setStatus("error");
    }

    setEmail("");
    setName("");
    setMessage("");
  };

  let notification: NotificationProps = {
    title: "",
    status: "success",
    message: "",
  };
  if (status === "success") {
    notification = {
      title: "Success!",
      status: "success",
      message: "Message sent successfully!",
    };
  } else if (status === "error") {
    notification = {
      title: "Error!",
      status: "error",
      message: error || "Something went wrong!",
    };
  }

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus(null);
        setError(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              aria-label="email input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="name"
              id="name"
              aria-label="name input"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            aria-label="message input"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {status && <Notification {...notification} />}
    </section>
  );
};
