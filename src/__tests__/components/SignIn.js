import { render, screen, fireEvent, waitFor } from '@testing-library/react-native'

import SignInContainer from '../../components/SignIn/SignInContainer'

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      const onSumbit = jest.fn()

      render(<SignInContainer onSubmit={onSumbit} />)

      const values = {
        username: 'kalle',
        password: 'password'
      }

      fireEvent.changeText(screen.getByPlaceholderText('Username'), values.username)
      fireEvent.changeText(screen.getByPlaceholderText('Password'), values.password)

      fireEvent.press(screen.getByText('Sign In'))

      await waitFor(() => {
        expect(onSumbit).toHaveBeenCalledTimes(1)

        expect(onSumbit.mock.calls[0][0]).toEqual(values)
      })
    })
  })
})