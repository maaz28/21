import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import AppBar from './appBar'
import VehicleController from "../interface/vehicleController";
import RaisedButton from 'material-ui/RaisedButton'
import {get_request} from '../utils/helper'
import RenderData from './RenderData'
import Grid from '@material-ui/core/Grid';

export default class SearchBar extends Component {
    state = {
        value: '',
        showData : false,
        source : {},
        packager :{},
        designer : {},
        shipper : {}
    };

    handleUpdateInput = (ev) => {
        this.setState({
            value: ev.target.value
        });
    };

    submitHandler = () => {
      get_request('http://1cc9213f.ngrok.io/participant/timber/' + this.state.value).then(res =>{ 
          console.log(res.data.result);
          let data = res.data.result
          console.log(typeof(res.data.result) );
          this.setState({
              source : data.source,
              packager : data.packager,
              designer : data.designer,
              shipper : data.shipper   
          })
          })    
    }

    componentDidMount() {
    }
    

    render() {
        var {source, designer, shipper, packager} = this.state;
        return (
            <div> 
                <AppBar/>
                <div style={{width: 'fit-content', margin: 'auto', marginTop: '50px'}}>
                    <TextField
                        hintText="65567"
                        floatingLabelText="Enter Timber Number Here"
                        onChange={this.handleUpdateInput}
                    />
                    <RaisedButton label="Submit" primary={true} onClick={this.submitHandler}/>
                </div>
                {
        //   (this.state.showData) ? (
            <div style = {{width : '80%', margin : 'auto'}}>
             <Grid container spacing={24}>
        <Grid item xs={6}>
                     <RenderData data = {source} title = "source"/> 
        </Grid>
        <Grid item xs={6}>
                     <RenderData data = {designer} title = "designer"/> 
        </Grid>
        <Grid item xs={6}>
                     <RenderData data = {shipper} title = "shipper"/> 
        </Grid>
        <Grid item xs={6}>
                     <RenderData data = {packager} title = "packager"/> 
        </Grid>
        </Grid>
            </div>
        //   ):(null)
        }
            </div>
        );
    }
}