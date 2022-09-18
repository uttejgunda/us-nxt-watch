import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  BgContainer,
  ContentContainer,
  FormContainer,
  WebsiteLogo,
  InputContainer,
  Label,
  InputField,
  CheckboxContainer,
  CheckboxLabel,
  SubmitButton,
  Errormsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMsg: false,
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onTogglePassword = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  onSubmitSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = msg => {
    this.setState({errorMsg: msg, showErrorMsg: true})
  }

  onSubmit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      errorMsg,
      showErrorMsg,
      showPassword,
    } = this.state

    const token = Cookies.get('jwt_token')

    if (token !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <BgContainer>
        <ContentContainer>
          <FormContainer onSubmit={this.onSubmit}>
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
            <InputContainer>
              <Label htmlFor="username">USERNAME</Label>
              <InputField
                type="text"
                id="username"
                value={username}
                onChange={this.onChangeUsername}
                placeholder="Username"
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="password">PASSWORD</Label>
              <InputField
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
              />
            </InputContainer>
            <CheckboxContainer>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={this.onTogglePassword}
                id="showPassword"
              />
              <CheckboxLabel htmlFor="showPassword">
                Show Password
              </CheckboxLabel>
            </CheckboxContainer>
            <SubmitButton type="submit">Login</SubmitButton>
            {showErrorMsg && <Errormsg>{`*${errorMsg}`}</Errormsg>}
          </FormContainer>
        </ContentContainer>
      </BgContainer>
    )
  }
}

export default Login
