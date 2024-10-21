import { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { register } from "../../redux/auth/operations";
import styles from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password) {
      dispatch(register({ name, email, password }));
    } else {
      console.log("Please fill all fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label htmlFor="name" className={styles.label}>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className={styles.input}
        required
      />
      <label htmlFor="email" className={styles.label}>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className={styles.input}
        required
      />
      <label htmlFor="password" className={styles.label}>Password</label>
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className={styles.input}
        required
      />
      <button type="submit" className={styles.button}>Sign Up</button>
    </form>
  );
}
