import React from 'react'

export default function About(props) {
         
   let myStyle ={
    //    color:props.mode==='dark'?'white':'black',
       backgroundColor:props.mode==='dark'?'grey':'white',
    //    border: '1px solid',
    //    borderColor:props.mode==='dark'?'white':'black'


   }
  

    return (
        <div className='container my-4' style={myStyle}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button"style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne"  aria-expanded="true"aria-controls="collapseOne">
                           <strong>Analyze your Text</strong> 
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample"style={myStyle}>
                        <div className="accordion-body">
                           Textutils gives you the way to analyze your text quickly and efficiently.Be it word count character count 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <strong>Free to use</strong>          
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample"style={myStyle}>
                        <div className="accordion-body">
                           <strong>Textutils is a free character counter tool that provide instant character count & word count statistics for a given text .Textutils report the number of word  and characters. Thus it is suitable for writing text with word/ character limit.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample"style={myStyle}>
                        <div className="accordion-body">
                            This word counter software work in any web browser such as chrome, Firefox,Internet Explorer, Safari,Opera. It suits to count character in facebook =,blog,books,excel document,pdf document ,essays,etc.
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
