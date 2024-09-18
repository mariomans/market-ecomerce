'use client';

const UserForm = () => {
  const handleSubmit = async (e) => {
    const { email, password } = e;
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      body: { email, password },
    });
    console.log(response);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" />
      <input type="password" />
    </form>
  );
};

export default UserForm;
