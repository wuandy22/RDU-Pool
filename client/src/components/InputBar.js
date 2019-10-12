import React, { Component } from 'react'
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import DateTimePicker from 'react-datetime-picker';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class InputBar extends Component {

    state = {
        date: new Date(),
        name: "",
        college: "UNC Chapel Hill"
    }
     
    onChange = date => this.setState({ date })

    onFormSubmit = (e) => {
        e.preventDefault();

        console.log("Name: " + this.state.name);
        console.log("College: " + this.state.college);
        console.log("Date" + this.state.date);

        fetch('/api/items', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                college: this.state.college,
                date: this.state.date
            })
        })

        window.location.reload(true);
    }

    render() {
        return (
            <div id="bar"> 
                <Form className="row" onSubmit={this.onFormSubmit}>
                    <FormGroup className="col-3">
                        <Label>Name</Label>
                        <Input type="name" name="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })}/>
                    </FormGroup>

                    <FormGroup className="col-3">
                        <Label for="exampleSelect">College</Label>
                        <Input type="select" name="select" id="exampleSelect" value={this.state.college} onChange={e => this.setState({ college: e.target.value })}>
                        <option>UNC Chapel Hill</option>
                        <option>Duke</option>
                        <option>NC State</option>
                        <option>Wake Forest</option>
                        </Input>
                    </FormGroup>

                    <DateTimePicker className="col-4"
                              onChange={this.onChange}
                              value={this.state.date}
                    />
                
                    <Button type="submit" className="col-2">Submit</Button>
                </Form>
            </div>
        )
    }
}
