import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onButtonSubmit, inputValue}) => {
    return (
        <div>
           <p className='f3 tc'>
            {'This magic brain will detect your faces in your pictures. Give it a try!'}
           </p>
           <div className='center'>
                <div className='pa4 br3 shadow-5 form'>
                    <input type="text" name="" className='f4 pa2 w-70' onChange={onInputChange} value={inputValue} />
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
                </div>
           </div>
        </div>
    )
}

export default ImageLinkForm;