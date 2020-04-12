/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import React from 'react'
import { Formik, FormikProps, Form, Field, FieldProps } from 'formik'
import { CounterCreateFormModel } from './counter-types'
import { FormikInput } from '../../formik/formik-input'
import { Text } from '../../core/text'
import { FormikSelect } from '../../formik/formik-select'
import { Button } from '../../core/button'

type CounterCreateProps = {
  submit: (model: CounterCreateFormModel) => void
}

const initialValues: CounterCreateFormModel = {
  title: '',
  valueType: 'number',
}

const marginBottom = css`
  margin-bottom: 16px;
`

export const CounterCreateForm: React.FC<CounterCreateProps> = ({ submit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={(values) => {
        const errors: Partial<CounterCreateFormModel> = {}
        if (!values.title) {
          errors.title = 'Please enter a title'
        }
        return errors
      }}
      onSubmit={submit}
      validateOnChange
    >
      {({ isSubmitting }: FormikProps<CounterCreateFormModel>) => (
        <Form>
          <Field name="title">
            {(field: FieldProps) => (
              <div css={marginBottom}>
                <Text as="label" display="block">
                  title
                </Text>
                <FormikInput field={field} type="text" />
              </div>
            )}
          </Field>
          <Field name="type">
            {(field: FieldProps) => (
              <div css={marginBottom}>
                <Text as="label" display="block">
                  type
                </Text>
                <FormikSelect
                  field={field}
                  values={[
                    { key: 'string', value: 'string' },
                    { key: 'number', value: 'number' },
                  ]}
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
