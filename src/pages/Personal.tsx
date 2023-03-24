import React from 'react'

type Props = {}

export default function Personal({}: Props) {
     // Function will execute on click of button 

     const onButtonClick = () => { 

        // using Java Script method to get PDF file 

        fetch('digitalskills_certificate.pdf').then(response => { 

            response.blob().then(blob => { 

                // Creating new object of PDF file 

                const fileURL = window.URL.createObjectURL(blob); 

                // Setting various property values 

                let alink = document.createElement('a'); 

                alink.href = fileURL; 

                alink.download = 'digitalskills_certificate.pdf'; 

                alink.click(); 

            }) 

        }) 
    }
  return (
    <div>


<button onClick={onButtonClick}> 

Download PDF 

</button> 
    </div>
  )
}