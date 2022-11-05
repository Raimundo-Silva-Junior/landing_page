import React, { useState } from 'react';

export default function Forms() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });
  const [ok, setOk] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const formSubmit = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/register/', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (res.status === 201) {
      setOk(true);
    }

    if (res.status !== 201) {
      setOk(false)
    }
  }

  return (
    <form>
      <fieldset>
        <label htmlFor="firstname">
          Nome:
          <input
            name="first_name"
            id="firstname"
            type="text"
            value={ formData.first_name }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="lastname">
          Sobrenome:
          <input
            name="last_name"
            id="lastname"
            type="text"
            value={ formData.last_name }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            name="email"
            id="email"
            type="email"
            value={ formData.email }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="username">
          Username:
          <input
            name="username"
            id="username"
            type="name"
            value={ formData.username }
            onChange={ handleChange }
        />
        </label>
        <label htmlFor="password">
          Senha:
          <input
            name="password"
            id="password"
            type="password"
            value={ formData.password }
            onChange={ handleChange }
          />
        </label>
        <button
          type="button"
          onClick={ formSubmit }
        >
          Submit
        </button>
        <p>
          Deu certo?
          {ok ? 'sim' : 'nao'}
        </p>
      </fieldset>
    </form>
  );
}