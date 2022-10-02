import {Component} from 'react';

class ReportField extends Component {
    constructor(props){
        super(props);
    }

  render () {
    const {props: {unmounted} } = this;
    return (
    <>
   <div className='reportField'>
    { Object.keys(unmounted).map(id => {
        const countWord = unmounted[id] > 1 ? "times" : "time";
   return <div className='unmountedItem' key={id}>
        { `Card number ${id} unmounted ${unmounted[id]} ${countWord}` }
        </div> 
    }
    ) }
   </div>
    </> )
}
}


export default ReportField;
