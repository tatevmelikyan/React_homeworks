import {Component} from 'react';



class Country extends Component {
constructor(props) {
    super(props);
    
}



    render() {
        const { props: {name,capital,flags}} = this;
        return (<>
       <div className='country'>
        <img className='image' src={flags.png}/>
        <div className='basicInfo'>
           <p> {name.common} </p> 
           <p> Capital: {capital} </p>
        </div>
       </div>
        </>)
    }
}



export default Country;