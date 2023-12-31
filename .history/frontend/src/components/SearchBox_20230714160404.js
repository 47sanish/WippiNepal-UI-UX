import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
// import InputGroup from 'react-bootstrap/InputGroup';

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <>
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search'
        className='mr-sm-2 ml-sm-2 col-6 ba'
      ></Form.Control>
      <Button type='submit' variant='outline-success' className='p-2 px-5'>
        Search
      </Button>
    </Form>
    </>
  )
}

export default SearchBox
