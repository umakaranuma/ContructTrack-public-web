// Step 2 of checkout — account creation form.
// Uses React Hook Form + Zod for validation.
// Fields: company name, owner name, email, phone, password, confirm password, TOS checkbox.
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Zod validation schema for account creation
const accountSchema = z
  .object({
    companyName: z
      .string()
      .min(2, 'Company name must be at least 2 characters')
      .max(100),
    ownerName: z
      .string()
      .min(2, 'Full name must be at least 2 characters')
      .max(100),
    email: z.string().email('Please enter a valid email address'),
    phone: z
      .string()
      .regex(/^(\+94|0)[0-9]{9}$/, 'Enter a valid Sri Lankan phone number (e.g. 077 123 4567)'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Must contain at least one uppercase letter')
      .regex(/[0-9]/, 'Must contain at least one number'),
    confirmPassword: z.string(),
    acceptTerms: z.literal(true, {
      errorMap: () => ({ message: 'You must accept the Terms of Service' }),
    }),
  })
  .refine((d) => d.password === d.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

// Reusable form field wrapper
function Field({ label, error, children, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-offwhite mb-1.5">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-danger text-xs mt-1.5 flex items-center gap-1"
        >
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm0-8v6h2V7h-2z"/>
          </svg>
          {error.message}
        </motion.p>
      )}
    </div>
  )
}

// Shared input class
const inputClass = (hasError) =>
  `w-full bg-navy-primary border rounded-lg px-4 py-3 text-offwhite text-sm
   placeholder:text-muted/60 outline-none transition-colors
   ${hasError
     ? 'border-danger focus:border-danger'
     : 'border-white/10 focus:border-gold'
   }`

export default function AccountForm({ onSubmit, isLoading }) {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountSchema),
    mode: 'onBlur',
  })

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
      {/* Company name */}
      <Field label="Company Name" error={errors.companyName} required>
        <input
          {...register('companyName')}
          type="text"
          placeholder="Jayawardena Construction (Pvt) Ltd"
          className={inputClass(!!errors.companyName)}
          autoComplete="organization"
        />
      </Field>

      {/* Owner full name */}
      <Field label="Owner / Director Full Name" error={errors.ownerName} required>
        <input
          {...register('ownerName')}
          type="text"
          placeholder="Rohan Jayawardena"
          className={inputClass(!!errors.ownerName)}
          autoComplete="name"
        />
      </Field>

      {/* Email + Phone in a 2-col grid on wider screens */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email Address" error={errors.email} required>
          <input
            {...register('email')}
            type="email"
            placeholder="rohan@company.lk"
            className={inputClass(!!errors.email)}
            autoComplete="email"
          />
        </Field>

        <Field label="Mobile Number" error={errors.phone} required>
          <input
            {...register('phone')}
            type="tel"
            placeholder="+94 77 123 4567"
            className={inputClass(!!errors.phone)}
            autoComplete="tel"
          />
        </Field>
      </div>

      {/* Password */}
      <Field label="Password" error={errors.password} required>
        <div className="relative">
          <input
            {...register('password')}
            type={showPassword ? 'text' : 'password'}
            placeholder="Min. 8 chars, one uppercase, one number"
            className={`${inputClass(!!errors.password)} pr-12`}
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-offwhite transition-colors"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
      </Field>

      {/* Confirm password */}
      <Field label="Confirm Password" error={errors.confirmPassword} required>
        <div className="relative">
          <input
            {...register('confirmPassword')}
            type={showConfirm ? 'text' : 'password'}
            placeholder="Re-enter your password"
            className={`${inputClass(!!errors.confirmPassword)} pr-12`}
            autoComplete="new-password"
          />
          <button
            type="button"
            onClick={() => setShowConfirm(!showConfirm)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-offwhite transition-colors"
          >
            {showConfirm ? (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
              </svg>
            ) : (
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        </div>
      </Field>

      {/* Terms of Service checkbox */}
      <Field error={errors.acceptTerms}>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            {...register('acceptTerms')}
            type="checkbox"
            className="mt-0.5 w-4 h-4 rounded border-white/20 bg-navy-primary accent-gold cursor-pointer flex-shrink-0"
          />
          <span className="text-sm text-muted group-hover:text-offwhite transition-colors">
            I agree to the{' '}
            <Link to="/terms" target="_blank" className="text-gold hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" target="_blank" className="text-gold hover:underline">
              Privacy Policy
            </Link>
          </span>
        </label>
      </Field>

      {/* Submit button */}
      <button
        type="submit"
        disabled={isLoading}
        className="btn-gold w-full justify-center py-4 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Creating your workspace…
          </>
        ) : (
          <>
            Create My Account
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </button>
    </motion.form>
  )
}
