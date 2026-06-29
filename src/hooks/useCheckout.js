// useCheckout — manages the multi-step checkout state and API call.
// Steps: 0 = package summary, 1 = account form, 2 = confirmation/processing
import { useState } from 'react'
import { registerUser } from '../services/authService.js'

export function useCheckout(planId) {
  const [step, setStep] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [registeredEmail, setRegisteredEmail] = useState('')

  // Move to the next step
  const nextStep = () => setStep((s) => Math.min(s + 1, 2))

  // Move back one step
  const prevStep = () => setStep((s) => Math.max(s - 1, 0))

  // Called when the account form is submitted.
  // POSTs to the backend, then advances to the confirmation step.
  const handleAccountSubmit = async (formData) => {
    setIsLoading(true)
    setError(null)

    try {
      await registerUser({
        company_name: formData.companyName,
        owner_name: formData.ownerName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        plan: planId,
      })

      setRegisteredEmail(formData.email)
      nextStep() // Advance to step 2 (confirmation)
    } catch (err) {
      // Surface the API error message to the user
      const message =
        err.response?.data?.detail ||
        err.response?.data?.email?.[0] ||
        err.message ||
        'Something went wrong. Please try again.'
      setError(message)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    step,
    isLoading,
    error,
    registeredEmail,
    nextStep,
    prevStep,
    handleAccountSubmit,
  }
}
