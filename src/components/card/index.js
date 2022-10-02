import {Component} from 'react';
import xMarkIcon from '../../assets/xmark-solid.svg';


class Card extends Component {
    constructor(props){
        super(props);
    }


    componentWillUnmount() {
        const {props: {id,handleRemove,unmounted}} = this;
        handleRemove(id)
        if(unmounted[id]) {
            unmounted[id] += 1;
        } else {
            unmounted[id] = 1;
        }
    }

    
  render () {
    const {props: {id,image,handleRemove} } = this;
    return (
    <>
   <div className='card'>
    <img className='image' src={image} alt="card"/>
    <img className='xMarkIcon' src={xMarkIcon} onClick={() => handleRemove(id)} alt="x-mark"/>
   </div>
    </> 
    )
}
}


export default Card;
