 <Formik
              initialValues={{ friends: [{ name: 'bill', type: 'dog' }] }}
              onSubmit={(values) =>
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2))
                }, 500)}
            >
              {({ values }) => (
                <Form>
                  <FieldArray name="friends">
                    {(arrayHelpers) => (
                      <div>
                        <button type="button" onClick={() => arrayHelpers.push({ name: '' })}>
                          {/* show this when user has removed all friends from the list */}
                          Add a friend
                        </button>
                        {values.friends.map((friend, index) => (
                          <div key={index}>
                            <Field name={`friends.${index}.name`} />
                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              -
                            </button>
                          </div>
                        ))}
                        <div>
                          <button type="submit">Submit</button>
                        </div>
                      </div>
                    )}
                  </FieldArray>
                  <pre>{JSON.stringify(values, null, 2)}</pre>
                </Form>
              )}
            </Formik>