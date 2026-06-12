"use client";

import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import "./PasswordGate.css";

const ACCESS_PASSWORD = "Eclipse2026";
const STORAGE_KEY = "eow-party-access-granted";

type PasswordGateProps = {
  children: ReactNode;
};

export default function PasswordGate({ children }: PasswordGateProps) {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasCheckedStorage, setHasCheckedStorage] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const accessGranted = window.sessionStorage.getItem(STORAGE_KEY) === "true";

    setIsUnlocked(accessGranted);
    setHasCheckedStorage(true);
  }, []);

  useEffect(() => {
    if (!hasCheckedStorage || isUnlocked) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [hasCheckedStorage, isUnlocked]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password.trim() === ACCESS_PASSWORD) {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
      setIsUnlocked(true);
      setError("");
      return;
    }

    setError("Código incorrecto. Revisa mayúsculas y minúsculas.");
    setPassword("");
  };

  if (!hasCheckedStorage) {
    return null;
  }

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="password-gate" role="dialog" aria-modal="true">
      <div className="password-gate__ambient password-gate__ambient--one" />
      <div className="password-gate__ambient password-gate__ambient--two" />

      <main className="password-gate__card">
        <div className="password-gate__eclipse" />

        <p className="password-gate__eyebrow">Private invitation</p>

        <h1 className="password-gate__title">
          The End of the World Party
        </h1>

        <p className="password-gate__subtitle">
          Mhares · August 12, 2026
        </p>

        <p className="password-gate__text">
          Introduce el código de acceso para abrir la invitación.
        </p>

        <form className="password-gate__form" onSubmit={handleSubmit}>
          <label className="password-gate__label" htmlFor="access-password">
            Código de acceso
          </label>

          <input
            id="access-password"
            className="password-gate__input"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
            placeholder="Introduce la contraseña"
            autoComplete="off"
            autoFocus
          />

          {error && <p className="password-gate__error">{error}</p>}

          <button className="password-gate__button" type="submit">
            Acceder
          </button>
        </form>
      </main>
    </div>
  );
}