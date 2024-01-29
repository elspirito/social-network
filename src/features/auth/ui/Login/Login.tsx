import { Form, Formik, FormikHelpers } from 'formik'
import styled from 'styled-components'

type LoginFields = {
  email: string
  password: string
}

export const Login = () => {
  return (
    <StyledLogin>
      <h1>Sign In</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={(fields: LoginFields, { setSubmitting }: FormikHelpers<LoginFields>) => {
          setTimeout(() => {
            alert(JSON.stringify(fields, null, 2))
            setSubmitting(false)
          }, 500)
        }}
      >
        <Form>
          <label htmlFor='email'>First Name</label>
          <input id='email' name='email' placeholder='Login' />

          <label htmlFor='password'>Last Name</label>
          <input type='password' id='password' name='password' placeholder='Password' />

          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </StyledLogin>
  )
}

const StyledLogin = styled.div`
  background-color: #fff;
  padding: 24px;

  form {
    display: flex;
    flex-direction: column;
  }
`
