import { useForm } from '@tanstack/react-form';
import '../styles/Login.css';
import { useNavigate } from 'react-router';

const Login = () => {
   const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      usernameOrEmail: '',
      password: '',
    },
    onSubmit: async ({ value }) => {
      await new Promise((r) => setTimeout(r, 1000))
      navigate('/grid')
    },
  })

  return (
    <div className="login-container">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
        className="login-form"
      >
        <h2 className="login-title">Login</h2>

        <form.Field
          name="usernameOrEmail"
          validators={{
            onChange: ({ value }) =>
              !value ? 'Username or Email is required' : undefined,
          }}
        >
          {(field) => (
            <div className="form-group">
              <label htmlFor={field.name}>Username or Email</label>
              <input
                id={field.name}
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                placeholder="Enter your username or email"
              />
              {field.state.meta.errors.length > 0 && (
                <span className="error-text">{field.state.meta.errors[0]}</span>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{
            onChange: ({ value }) =>
              !value ? 'Password is required' : undefined,
          }}
        >
          {(field) => (
            <div className="form-group">
              <label htmlFor={field.name}>Password</label>
              <input
                id={field.name}
                type="password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                placeholder="Enter your password"
              />
              {field.state.meta.errors.length > 0 && (
                <span className="error-text">{field.state.meta.errors[0]}</span>
              )}
            </div>
          )}
        </form.Field>

        <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="login-button"
            >
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          )}
        </form.Subscribe>

        <p className="register-link">
          Don’t have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  )
}

export default Login
