import { Button } from 'reactstrap';
import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <div className='container p-3'>
        <Button type='button' color='primary' className='m-2'>Dark</Button>
        <Button type='button' color='secondary' className='m-2'>Dark</Button>
        <p>
          Checkbox and Radio Buttons (Stateful Buttons)
          In order to have checkbox and radio buttons, your component needs to manage
          the state of which button(s) are active/select. It is not in the opinion of this library to manage
          state within it's components so it is left up to you. Below is a simple example showcasing how this could
          be done using the components which already exist in this library.
        </p>
      </div>
    </div>
  )
}

export default App;