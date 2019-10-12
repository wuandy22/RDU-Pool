import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class InputBar extends Component {

    state = {
        date: new Date(),
      }
     
    onChange = date => this.setState({ date })

    render() {
        return (
            <div id="bar"> 
                <InputGroup className="row">
                    <FormGroup className="col-4">
                        <Label for="exampleSelect">College</Label>
                        <Input type="select" name="select" id="exampleSelect">
                        <option>UNC Chapel Hill</option>
                        <option>Duke</option>
                        <option>NC State</option>
                        <option>Wake Forest</option>
                        </Input>
                    </FormGroup>

                    <DateTimePicker className="col-6"
                              onChange={this.onChange}
                              value={this.state.date}
                    />
                
                    <Button className="col-2">Submit</Button>
                </InputGroup>
            </div>
        )
    }
}
