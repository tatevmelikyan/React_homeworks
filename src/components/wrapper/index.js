import {Component} from 'react';

import {data} from '../../constants/Data'

import Card from '../card';

import ReportField from '../reportField';

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
        isRemoved: false,
        cardId: null,
        unmounted: {},
        reportClicked: false,
      }
  }



  handleRemove = (id) => {
    if(id !== this.state.cardId) {
      this.setState({isRemoved: !this.state.isRemoved,cardId: id})
    }
  }



  handleReport = () => {
    const {state: {reportClicked}} = this;
    this.setState({reportClicked: !reportClicked})
  }
 
  render () {
    const {state: {cardId,isRemoved,unmounted,reportClicked}, handleRemove,handleReport} = this;
    return (<>
    <div className='wrapper'>
    { data.map(card => {
     return isRemoved && card.id === cardId ?
      <div key={card.id} className='showField'>
        <button onClick={handleRemove}>Show</button></div> 
        : <Card key={card.id} image={card.image} id={card.id} unmounted={unmounted} handleRemove={handleRemove}/> 
    }) } 
    <div className='reportButton' onClick={handleReport}>Get report</div>
    </div>
    { reportClicked && <ReportField unmounted={unmounted} /> }
    </>) 
}
}




export default Wrapper;
