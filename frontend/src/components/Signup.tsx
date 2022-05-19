import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'
export default function Signup() {
  return (
    <>
    <Card>
        <Card.Body>
            <h2 className='text-center'>Sign Up</h2>
            <Form>
                <Button className='w-100' type="submit">Sign Up With Google</Button>
            </Form>
        </Card.Body>
    </Card>
    <div className='text-center'>
        Already Have an account? Log in
    </div>
    </>
  )
}
