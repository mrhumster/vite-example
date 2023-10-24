import {Button, Container, TextField} from "@mui/material";
export const Main = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Handle')
  }
  return (
    <Container fixed className="main">

        <form className="login-form" onSubmit={handleSubmit}>
          <TextField required id="login-input" label="login" variant="outlined"/>
          <Button type='submit' variant="outlined">Login</Button>
        </form>

    </Container>
  )
}