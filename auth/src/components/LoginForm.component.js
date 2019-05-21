import React, { Component } from 'react';

import { CardSection, Card, Button, Input } from './common';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        value={this.state.email} 
                        onChangeText={email => this.setState({ email })}
                        />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        placeholder='password'
                        secureTextEntry
                        value={this.state.password} 
                        onChangeText={password => this.setState({ password })}
                        />
                </CardSection>
                <CardSection>
                    <Button>Login</Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;