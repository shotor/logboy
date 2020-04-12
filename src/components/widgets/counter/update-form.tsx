/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik'
import { Text } from '../../core/text'
import { Input } from '../../core/input'
import { FormikInput } from '../../formik/formik-input'
import { Button } from '../../core/button'

type UpdateFormProps = {
  type: 'number' | 'string'
  submit: (model: { value: string | number; date: Date }) => Promise<void>
}

const initialValues = {
  value: undefined as string | number | undefined,
  date: new Date().toISOString().substr(0, 10),
}

const marginBottom = css`
  margin-bottom: 16px;
`

export const UpdateForm: React.FC<UpdateFormProps> = ({ submit, type }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={({ value, date }) => {
        const errors: Partial<Record<keyof typeof initialValues, string>> = {}
        if (!value) {
          errors.value = 'Please enter a value'
        }
        if (!date) {
          errors.date = 'Please enter a date'
        }
        return errors
      }}
      onSubmit={async ({ value, date }, { setSubmitting }) => {
        if (value) {
          await submit({
            value,
            date: new Date(date),
          })
        }
        setSubmitting(false)
      }}
      validateOnChange
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="date">
            {(field: FieldProps) => (
              <div css={marginBottom}>
                <Text as="label" display="block">
                  date
                </Text>
                <FormikInput field={field} type="date" />
              </div>
            )}
          </Field>
          <Field name="value">
            {(field: FieldProps) => (
              <div css={marginBottom}>
                <Text as="label" display="block">
                  value
                </Text>
                <FormikInput
                  field={field}
                  type={type === 'string' ? 'text' : 'number'}
                  step={type === 'number' ? 0.1 : undefined}
                />
              </div>
            )}
          </Field>
          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  )
}
