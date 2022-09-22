import styled from 'styled-components'

export const BgContainer = styled.div`
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
export const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FormContainer = styled.form`
  background-color: #ffffff;
  padding: 50px 35px;
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 30px grey;
`

export const WebsiteLogo = styled.img`
  width: 150px;
  align-self: center;
  margin-bottom: 20px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: #64748b;
`
export const InputField = styled.input`
  padding: 10px 20px;
  border: 1px solid #94a3b8;
  font-family: 'Roboto';
  font-size: 16px;
  border-radius: 4px;
  margin-top: 8px;
  outline-color: #3b82f6;
`

export const CheckboxContainer = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
`

export const CheckboxLabel = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #0f0f0f;
`
export const SubmitButton = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 25px;
  margin-bottom: 0px;
`
export const Errormsg = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ff0000;
  margin-bottom: 0px;
`
