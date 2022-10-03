import {Component} from 'react';

import {API_URL} from '../../constants/API'

import Country from '../country'



class CountryList extends Component {
constructor() {
    super();
    this.countryList = []
    this.state = {
        countries: [],
        searchInput: "",
    }
}

componentDidMount() {
    fetch(API_URL)
    .then(res => res.json())
    .then(res => {
        this.countryList = res;
        this.setState({countries: res})
    })
}



componentDidUpdate(prevProps,prevState) {
    const {state: {searchInput,countries}} = this;
        if(prevState.searchInput !== searchInput) {
            if(searchInput.length >= 3) {
                this.setState( { 
                    countries: this.countryList.filter(({name: {common}, capital}) => {
                       return common.toLowerCase().includes(searchInput.toLowerCase().replace(/\s+/g, ' ').trim()) 
                       || String(capital).toLowerCase().includes(searchInput.toLowerCase().replace(/\s+/g, ' ').trim())
                    }) } )
            }  else {
                this.setState({countries: this.countryList})
            }
        }
}



handleInputChange = (e) => {
    this.setState({
        searchInput: e.target.value,
    })
}


    render() {
        const {handleInputChange, state : {countries,searchInput}} = this;
        return (<>
        <div className='header'>
        <h1>Countries</h1>
        <div className='input'>
        <input 
        type='text' 
        placeholder='Type a country or capital name...' 
        value={searchInput} 
        onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor='searchInput' />
        </div>
        </div>
        
        <div className='container'>
            { countries.map((country,index) => {
               return <Country key={index} {...country}/>
            } ) }
        </div>
        </>)
    }
}


export default CountryList;